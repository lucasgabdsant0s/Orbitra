import type { IAuditLogRepository } from '../../../core/interfaces/repositories/IAuditLogRepository.js';
import type { PaginatedResult, PaginationOptions } from '../../../core/types/index.js';
import type { AuditLogOutput } from '../../dtos/index.js';

export class ListProjectHistoryUseCase {
  constructor(private auditLogRepository: IAuditLogRepository) {}

  async execute(
    tenantId: string,
    projectId: string,
    options: PaginationOptions,
  ): Promise<PaginatedResult<AuditLogOutput>> {
    const result = await this.auditLogRepository.findAll(tenantId, options, {
      projectId,
    });

    return {
      ...result,
      data: result.data.map((log) => ({
        id: log.id!,
        userId: log.userId,
        userName: log.userName,
        userAvatar: log.userAvatar,
        projectId: log.projectId,
        entityType: log.entityType,
        entityId: log.entityId,
        action: log.action,
        changes: log.changes,
        timestamp: log.timestamp ?? new Date(),
      })),
    };
  }
}
