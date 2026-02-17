import type { AuditLog } from '../../../core/entities/AuditLog.js';
import { ForbiddenError } from '../../../core/exceptions/index.js';
import type {
  AuditLogFilters,
  IAuditLogRepository,
} from '../../../core/interfaces/repositories/IAuditLogRepository.js';
import type { PaginatedResult, PaginationOptions } from '../../../core/types/index.js';
export class ListAuditLogsUseCase {
  constructor(private auditLogRepository: IAuditLogRepository) {}
  async execute(
    tenantId: string,
    userRole: string,
    options: PaginationOptions,
    filters?: AuditLogFilters,
  ): Promise<PaginatedResult<AuditLog>> {
    if (userRole !== 'ADMIN' && userRole !== 'OWNER') {
      throw new ForbiddenError('Only admins can view audit logs.');
    }
    return this.auditLogRepository.findAll(tenantId, options, filters);
  }
}
