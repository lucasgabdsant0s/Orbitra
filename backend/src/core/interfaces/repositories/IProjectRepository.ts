import type { Project } from '../../entities/Project.js';
import type { ProjectStatus } from '../../enums/index.js';
import type { PaginatedResult, PaginationOptions } from '../../types/index.js';

export interface ProjectFilters {
  status?: ProjectStatus;
}

export interface IProjectRepository {
  create(project: Project): Promise<Project>;
  findById(tenantId: string, id: string): Promise<Project | null>;
  findAll(
    tenantId: string,
    options: PaginationOptions,
    filters?: ProjectFilters,
  ): Promise<PaginatedResult<Project>>;
  update(tenantId: string, id: string, data: Partial<Project>): Promise<Project>;
  softDelete(tenantId: string, id: string): Promise<void>;
}
