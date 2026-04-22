import crypto from 'node:crypto';
import { Invite } from '../../../core/entities/Invite.js';
import { User } from '../../../core/entities/User.js';
import { InviteStatus, Role } from '../../../core/enums/index.js';
import {
  ConflictError,
  ForbiddenError,
  InviteExpiredError,
  NotFoundError,
} from '../../../core/exceptions/index.js';
import type { IHashProvider } from '../../../core/interfaces/providers/IHashProvider.js';
import type { IMailProvider } from '../../../core/interfaces/providers/IMailProvider.js';
import type { ITokenProvider } from '../../../core/interfaces/providers/ITokenProvider.js';
import type { IInviteRepository } from '../../../core/interfaces/repositories/IInviteRepository.js';
import type { IRefreshTokenRepository } from '../../../core/interfaces/repositories/IRefreshTokenRepository.js';
import type { ITenantRepository } from '../../../core/interfaces/repositories/ITenantRepository.js';
import type { IUserRepository } from '../../../core/interfaces/repositories/IUserRepository.js';
import type {
  CreateInviteInput,
  InviteOutput,
  LoginOutput,
} from '../../dtos/index.js';
import { env } from '../../../infra/config/env.js';

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
    const existingUser = await this.userRepository.findByEmailWithDeleted(tenantId, input.email);
    if (existingUser && !existingUser.deletedAt) {
      throw new ConflictError('User already exists in this tenant.');
    }
    const role = (input.role as Role) ?? Role.MEMBER;
    const token = crypto.randomBytes(32).toString('hex');
    const inviteLink = `${env.FRONTEND_URL.replace(/\/$/, '')}/invite/${tenantId}/${token}?role=${role}`;
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);
    const tenant = await this.tenantRepository.findById(tenantId);
    const invite = new Invite({
      tenantId,
      email: input.email,
      role,
      token,
      expiresAt,
    });
    const created = await this.inviteRepository.create(invite);
    await this.mailProvider.sendMail(
      input.email,
      'Invite For Orbitra',
      `You were invited to join ${tenant?.name ?? 'Orbitra'}. Create your account here: ${inviteLink}`,
    );
    return this.toOutput(created, tenant?.name);
  }

  private toOutput(i: Invite, tenantName?: string): InviteOutput {
    return {
      id: i.id!,
      tenantId: i.tenantId,
      tenantName,
      email: i.email,
      role: i.role,
      token: i.token,
      inviteLink: `${env.FRONTEND_URL.replace(/\/$/, '')}/invite/${i.tenantId}/${i.token}?role=${i.role}`,
      status: i.status,
      expiresAt: i.expiresAt,
      createdAt: i.createdAt ?? new Date(),
    };
  }
}

export class VerifyInviteUseCase {
  constructor(
    private inviteRepository: IInviteRepository,
    private tenantRepository: ITenantRepository,
  ) {}

  async execute(tenantId: string, token: string): Promise<InviteOutput> {
    const invite = await this.inviteRepository.findByToken(tenantId, token);
    if (!invite || invite.status !== InviteStatus.PENDING) {
      throw new NotFoundError('Invite');
    }
    if (invite.expiresAt < new Date()) {
      throw new InviteExpiredError();
    }
    const tenant = await this.tenantRepository.findById(tenantId);
    return {
      id: invite.id!,
      tenantId: invite.tenantId,
      tenantName: tenant?.name,
      email: invite.email,
      role: invite.role,
      token: invite.token,
      inviteLink: `${env.FRONTEND_URL.replace(/\/$/, '')}/invite/${invite.tenantId}/${invite.token}?role=${invite.role}`,
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
    private hashProvider: IHashProvider,
    private tokenProvider: ITokenProvider,
    private refreshTokenRepository: IRefreshTokenRepository,
  ) {}

  async execute(
    tenantId: string,
    token: string,
    password?: string,
    name?: string,
  ): Promise<LoginOutput> {
    const invite = await this.inviteRepository.findByToken(tenantId, token);
    if (!invite || invite.status !== InviteStatus.PENDING) {
      throw new NotFoundError('Invite');
    }
    if (invite.expiresAt < new Date()) {
      throw new InviteExpiredError();
    }
    if (!password || !name)
      throw new ForbiddenError('Name and password are required for new users.');

    const passwordHash = await this.hashProvider.generateHash(password);
    const existingUser = await this.userRepository.findByEmailWithDeleted(
      invite.tenantId,
      invite.email,
    );

    let user: User;

    if (existingUser) {
      user = await this.userRepository.update(invite.tenantId, existingUser.id!, {
        passwordHash,
        name,
        role: invite.role,
        isActive: true,
        deletedAt: null,
      });
    } else {
      user = await this.userRepository.create(
        new User({
          tenantId: invite.tenantId,
          email: invite.email,
          passwordHash,
          name,
          role: invite.role,
        }),
      );
    }

    await this.inviteRepository.updateStatus(invite.tenantId, invite.id!, InviteStatus.ACCEPTED);

    const tokenPayload = {
      sub: user.id!,
      tenantId: user.tenantId,
      role: user.role,
    };

    const accessToken = this.tokenProvider.generateAccessToken(tokenPayload);
    const refreshToken = this.tokenProvider.generateRefreshToken(tokenPayload);

    await this.refreshTokenRepository.create({
      token: refreshToken,
      userId: user.id!,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    return {
      user: {
        id: user.id!,
        name: user.name,
        email: user.email,
        role: user.role,
        tenantId: user.tenantId,
        totpEnabled: user.totpEnabled,
      },
      accessToken,
      refreshToken,
    };
  }
}
