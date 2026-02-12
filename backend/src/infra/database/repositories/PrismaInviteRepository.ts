import { prisma } from '../../database/prisma.js';
import type { IInviteRepository } from '../../../core/interfaces/repositories/IInviteRepository.js';
import { Invite } from '../../../core/entities/Invite.js';
import { Role, InviteStatus } from '../../../core/enums/index.js';

export class PrismaInviteRepository implements IInviteRepository {
  async create(invite: Invite): Promise<Invite> {
    const created = await prisma.invite.create({
      data: {
        tenantId: invite.tenantId,
        email: invite.email,
        role: invite.role,
        token: invite.token,
        status: invite.status,
        expiresAt: invite.expiresAt,
      },
    });

    return this.toDomain(created);
  }

  async findByToken(tenantId: string, token: string): Promise<Invite | null> {
    const record = await prisma.invite.findFirst({
      where: { token, tenantId },
    });
    return record ? this.toDomain(record) : null;
  }

  async findById(tenantId: string, id: string): Promise<Invite | null> {
    const record = await prisma.invite.findFirst({
      where: { id, tenantId },
    });
    return record ? this.toDomain(record) : null;
  }

  async updateStatus(tenantId: string, id: string, status: InviteStatus): Promise<void> {
    await prisma.invite.update({
      where: { id, tenantId },
      data: { status },
    });
  }

  private toDomain(record: any): Invite {
    return new Invite({
      id: record.id,
      tenantId: record.tenantId,
      email: record.email,
      role: record.role as Role,
      token: record.token,
      status: record.status as InviteStatus,
      expiresAt: record.expiresAt,
      createdAt: record.createdAt,
    });
  }
}
