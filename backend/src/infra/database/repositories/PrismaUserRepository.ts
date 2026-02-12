import { prisma } from '../../database/prisma';
import type { IUserRepository } from '../../../core/interfaces/repositories/IUserRepository.js';
import { User } from '../../../core/entities/User.js';
import type { Role } from '../../../core/enums/index.js';
import type { PaginatedResult, PaginationOptions } from '../../../core/types/index.js';

interface UserRecord {
  id: string;
  tenantId: string;
  email: string;
  passwordHash: string;
  name: string;
  role: string;
  isActive: boolean;
  avatarUrl: string | null;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

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
        avatarUrl: user.avatarUrl,
      },
    });

    return new User({
      id: created.id,
      tenantId: created.tenantId,
      email: created.email,
      passwordHash: created.passwordHash,
      name: created.name,
      role: created.role as Role,
      isActive: created.isActive,
      avatarUrl: created.avatarUrl,
      createdAt: created.createdAt,
      updatedAt: created.updatedAt,
    });
  }

  async findById(tenantId: string, id: string): Promise<User | null> {
    const record = await prisma.user.findFirst({
      where: { id, tenantId, deletedAt: null },
    });
    return record ? this.toDomain(record as unknown as UserRecord) : null;
  }

  async findByEmail(tenantId: string, email: string): Promise<User | null> {
    const record = await prisma.user.findFirst({
      where: { tenantId, email, deletedAt: null },
    });
    return record ? this.toDomain(record as unknown as UserRecord) : null;
  }

  async findByEmailGlobal(email: string): Promise<User | null> {
    const record = await prisma.user.findFirst({
      where: { email, deletedAt: null },
    });
    return record ? this.toDomain(record as unknown as UserRecord) : null;
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
      prisma.user.count({
        where: { tenantId, deletedAt: null },
      }),
    ]);

    return {
      data: (records as unknown as UserRecord[]).map((r: UserRecord) => this.toDomain(r)),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async update(tenantId: string, id: string, data: Partial<User>): Promise<User> {
    const updated = await prisma.user.update({
      where: { id },
      data: {
        ...(data.name !== undefined && { name: data.name }),
        ...(data.email !== undefined && { email: data.email }),
        ...(data.role !== undefined && { role: data.role }),
        ...(data.isActive !== undefined && { isActive: data.isActive }),
        ...(data.avatarUrl !== undefined && { avatarUrl: data.avatarUrl }),
        ...(data.passwordHash !== undefined && { passwordHash: data.passwordHash }),
      },
    });

    return this.toDomain(updated as unknown as UserRecord);
  }

  async softDelete(tenantId: string, id: string): Promise<void> {
    await prisma.user.update({
      where: { id },
      data: { deletedAt: new Date(), isActive: false },
    });
  }
  private toDomain(record: UserRecord): User {
    return new User({
      id: record.id,
      tenantId: record.tenantId,
      email: record.email,
      passwordHash: record.passwordHash,
      name: record.name,
      role: record.role as Role,
      isActive: record.isActive,
      avatarUrl: record.avatarUrl,
      deletedAt: record.deletedAt,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }
}
