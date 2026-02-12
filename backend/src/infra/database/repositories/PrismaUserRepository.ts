import { prisma } from '../../database/prisma.js';
import type { IUserRepository } from '../../../core/interfaces/repositories/IUserRepository.js';
import { User } from '../../../core/entities/User.js';
import type { Role } from '../../../core/enums/index.js';
import type { PaginatedResult, PaginationOptions } from '../../../core/types/index.js';

export class PrismaUserRepository implements IUserRepository {
  async create(user: User): Promise<User> {
    const created = await prisma.user.create({
      data: {
        tenantId: user.tenantId,
        email: user.email,
        passwordHash: user.passwordHash,
        name: user.name,
        role: user.role,
        isActive: user.isActive,
        isVerified: user.isVerified,
        totpSecret: user.totpSecret,
        totpEnabled: user.totpEnabled,
        avatarUrl: user.avatarUrl,
      },
    });

    return this.toDomain(created);
  }

  async findById(tenantId: string, id: string): Promise<User | null> {
    const record = await prisma.user.findFirst({
      where: { id, tenantId, deletedAt: null },
    });
    return record ? this.toDomain(record) : null;
  }

  async findByEmail(tenantId: string, email: string): Promise<User | null> {
    const record = await prisma.user.findFirst({
      where: { tenantId, email, deletedAt: null },
    });
    return record ? this.toDomain(record) : null;
  }

  async findByEmailGlobal(email: string): Promise<User | null> {
    const record = await prisma.user.findFirst({
      where: { email, deletedAt: null },
    });
    return record ? this.toDomain(record) : null;
  }

  async findAll(
    tenantId: string,
    options: PaginationOptions,
  ): Promise<PaginatedResult<User>> {
    const { page, limit } = options;
    const skip = (page - 1) * limit;

    const [records, total] = await Promise.all([
      prisma.user.findMany({
        where: { tenantId, deletedAt: null },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.user.count({ where: { tenantId, deletedAt: null } }),
    ]);

    return {
      data: records.map((r) => this.toDomain(r)),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async update(tenantId: string, id: string, data: Partial<User>): Promise<User> {
    const updated = await prisma.user.update({
      where: { id, tenantId },
      data: {
        ...(data.name !== undefined && { name: data.name }),
        ...(data.email !== undefined && { email: data.email }),
        ...(data.role !== undefined && { role: data.role }),
        ...(data.isActive !== undefined && { isActive: data.isActive }),
        ...(data.isVerified !== undefined && { isVerified: data.isVerified }),
        ...(data.totpSecret !== undefined && { totpSecret: data.totpSecret }),
        ...(data.totpEnabled !== undefined && { totpEnabled: data.totpEnabled }),
        ...(data.avatarUrl !== undefined && { avatarUrl: data.avatarUrl }),
        ...(data.passwordHash !== undefined && { passwordHash: data.passwordHash }),
      },
    });

    return this.toDomain(updated);
  }

  async softDelete(tenantId: string, id: string): Promise<void> {
    await prisma.user.update({
      where: { id, tenantId },
      data: { deletedAt: new Date(), isActive: false },
    });
  }

  private toDomain(record: any): User {
    return new User({
      id: record.id,
      tenantId: record.tenantId,
      email: record.email,
      passwordHash: record.passwordHash,
      name: record.name,
      role: record.role as Role,
      isActive: record.isActive,
      isVerified: record.isVerified,
      totpSecret: record.totpSecret,
      totpEnabled: record.totpEnabled,
      avatarUrl: record.avatarUrl,
      deletedAt: record.deletedAt,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }
}
