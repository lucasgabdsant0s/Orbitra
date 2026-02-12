import crypto from 'node:crypto';
import { IInviteRepository } from '../../../core/interfaces/repositories/IInviteRepository.js';
import { ITenantRepository } from '../../../core/interfaces/repositories/ITenantRepository.js';
import { IUserRepository } from '../../../core/interfaces/repositories/IUserRepository.js';
import { IMailProvider } from '../../../core/interfaces/providers/IMailProvider.js';
import { Invite } from '../../../core/entities/Invite.js';
import { User } from '../../../core/entities/User.js';
import { Role, InviteStatus } from '../../../core/enums/index.js';
import { NotFoundError, ForbiddenError, ConflictError, InviteExpiredError } from '../../../core/exceptions/index.js';
import type { CreateInviteInput, InviteOutput } from '../../dtos/index.js';

export class CreateInviteUseCase {
  constructor(
    private inviteRepository: IInviteRepository,
    private tenantRepository: ITenantRepository,
    private userRepository: IUserRepository,
    private mailProvider: IMailProvider,
  ) {}

  async execute(
    tenantId: string,
    requesterRole: string,
    input: CreateInviteInput,
  ): Promise<InviteOutput> {
    if (requesterRole !== 'ADMIN' && requesterRole !== 'OWNER') {
      throw new ForbiddenError('Only admins can invite members.');
    }
    const existingUser = await this.userRepository.findByEmail(tenantId, input.email);
    if (existingUser) {
      throw new ConflictError('User already exists in this tenant.');
    }

    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);

    const invite = new Invite({
      tenantId,
      email: input.email,
      role: (input.role as Role) ?? Role.MEMBER,
      token,
      expiresAt,
    });

    const created = await this.inviteRepository.create(invite);
    await this.mailProvider.sendMail(
      input.email,
      'Invite For Orbitra',
      `You were invited to join Orbitra. Use the token: ${token}`,
    );

    return this.toOutput(created);
  }

  private toOutput(i: Invite): InviteOutput {
    return {
      id: i.id!,
      tenantId: i.tenantId,
      email: i.email,
      role: i.role,
      token: i.token,
      status: i.status,
      expiresAt: i.expiresAt,
      createdAt: i.createdAt ?? new Date(),
    };
  }
}

export class VerifyInviteUseCase {
  constructor(private inviteRepository: IInviteRepository) {}

  async execute(tenantId: string, token: string): Promise<InviteOutput> {
    const invite = await this.inviteRepository.findByToken(tenantId, token);
    if (!invite || invite.status !== InviteStatus.PENDING) {
      throw new NotFoundError('Invite');
    }

    if (invite.expiresAt < new Date()) {
      throw new InviteExpiredError();
    }

    return {
      id: invite.id!,
      tenantId: invite.tenantId,
      email: invite.email,
      role: invite.role,
      token: invite.token,
      status: invite.status,
      expiresAt: invite.expiresAt,
      createdAt: invite.createdAt ?? new Date(),
    };
  }
}

export class AcceptInviteUseCase {
  constructor(
    private inviteRepository: IInviteRepository,
    private userRepository: IUserRepository,
    private tenantRepository: ITenantRepository,
  ) {}

  async execute(tenantId: string, token: string, password?: string, name?: string): Promise<void> {
    const invite = await this.inviteRepository.findByToken(tenantId, token);
    if (!invite || invite.status !== InviteStatus.PENDING) {
      throw new NotFoundError('Invite');
    }

    if (invite.expiresAt < new Date()) {
      throw new InviteExpiredError();
    }
    if (!password || !name) throw new ForbiddenError('Name and password are required for new users.');
    const newUser = new User({
      tenantId: invite.tenantId,
      email: invite.email,
      passwordHash: password,
      name,
      role: invite.role,
    });

    await this.userRepository.create(newUser);
    await this.inviteRepository.updateStatus(invite.tenantId, invite.id!, InviteStatus.ACCEPTED);
  }
}
