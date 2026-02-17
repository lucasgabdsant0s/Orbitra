import { AuditLog } from '../../../core/entities/AuditLog.js';
import type { AuditAction, AuditEntityType } from '../../../core/enums/index.js';
import type {
  AuditLogFilters,
  IAuditLogRepository,
} from '../../../core/interfaces/repositories/IAuditLogRepository.js';
import type { PaginatedResult, PaginationOptions } from '../../../core/types/index.js';
import { prisma } from '../../database/prisma.js';

export class PrismaAuditLogRepository implements IAuditLogRepository {
  async create(log: AuditLog): Promise<AuditLog> {
    const created = await prisma.auditLog.create({
      data: {
        tenantId: log.tenantId,
        projectId: log.projectId,
        userId: log.userId,
        entityType: log.entityType,
        entityId: log.entityId,
        action: log.action,
        changes: log.changes,
      },
      include: {
        user: { select: { name: true, avatarUrl: true } },
      },
    });
    return this.toDomain(created);
  }

  async findAll(
    tenantId: string,
    options: PaginationOptions,
    filters?: AuditLogFilters,
  ): Promise<PaginatedResult<AuditLog>> {
    const { page, limit } = options;
    const skip = (page - 1) * limit;

    const where = {
      tenantId,
      ...(filters?.projectId && { projectId: filters.projectId }),
      ...(filters?.entityType && { entityType: filters.entityType }),
      ...(filters?.entityId && { entityId: filters.entityId }),
      ...(filters?.userId && { userId: filters.userId }),
      ...(filters?.action && { action: filters.action as AuditAction }),
    };

    const [records, total] = await Promise.all([
      prisma.auditLog.findMany({
        where,
        skip,
        take: limit,
        orderBy: { timestamp: 'desc' },
        include: {
          user: { select: { name: true, avatarUrl: true } },
        },
      }),
      prisma.auditLog.count({ where }),
    ]);

    return {
      data: records.map((record: any) => this.toDomain(record)),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  private toDomain(record: any): AuditLog {
    return new AuditLog({
      id: record.id,
      tenantId: record.tenantId,
      projectId: record.projectId,
      userId: record.userId,
      entityType: record.entityType as AuditEntityType,
      entityId: record.entityId,
      action: record.action as AuditAction,
      changes: record.changes,
      timestamp: record.timestamp,
      ...(record.user && {
        userName: record.user.name,
        userAvatar: record.user.avatarUrl,
      }),
    } as any);
  }
}
