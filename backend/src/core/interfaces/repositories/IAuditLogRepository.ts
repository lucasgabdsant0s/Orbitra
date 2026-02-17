import type { AuditLog } from '../../entities/AuditLog.js';
import type { AuditEntityType } from '../../enums/index.js';
import type { PaginatedResult, PaginationOptions } from '../../types/index.js';

export interface AuditLogFilters {
  projectId?: string;
  entityType?: AuditEntityType;
  entityId?: string;
  userId?: string;
  action?: string;
}

export interface IAuditLogRepository {
  create(log: AuditLog): Promise<AuditLog>;
  findAll(
    tenantId: string,
    options: PaginationOptions,
    filters?: AuditLogFilters,
  ): Promise<PaginatedResult<AuditLog>>;
}
