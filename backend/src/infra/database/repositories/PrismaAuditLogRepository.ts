import { prisma } from '../../database/prisma.js';
import type { IAuditLogRepository, AuditLogFilters } from '../../../core/interfaces/repositories/IAuditLogRepository.js';
import { AuditLog } from '../../../core/entities/AuditLog.js';
import type { PaginatedResult, PaginationOptions } from '../../../core/types/index.js';
import { AuditAction, AuditEntityType } from '../../../core/enums/index.js';

export class PrismaAuditLogRepository implements IAuditLogRepository {
  async create(log: AuditLog): Promise<AuditLog> {
    const created = await prisma.auditLog.create({
      data: {
        tenantId: log.tenantId,
        userId: log.userId,
        entityType: log.entityType,
        entityId: log.entityId,
        action: log.action,
        changes: log.changes,
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
        include: { user: { select: { name: true } } }
      }),
      prisma.auditLog.count({ where }),
    ]);

    return {
      data: records.map((r) => this.toDomain(r)),
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
      userId: record.userId,
      entityType: record.entityType as AuditEntityType,
      entityId: record.entityId,
      action: record.action as AuditAction,
      changes: record.changes,
      timestamp: record.timestamp,
    });
  }
}
