import type { IProjectRepository, ProjectFilters } from '../../../core/interfaces/repositories/IProjectRepository.js';
import { Project } from '../../../core/entities/Project.js';
import type { ProjectStatus } from '../../../core/enums/index.js';
import type { PaginatedResult, PaginationOptions } from '../../../core/types/index.js';
import { NotFoundError, ForbiddenError } from '../../../core/exceptions/index.js';
import type { CreateProjectInput, UpdateProjectInput, ProjectOutput } from '../../dtos/index.js';
export class CreateProjectUseCase {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(
    tenantId: string,
    userId: string,
    input: CreateProjectInput,
  ): Promise<ProjectOutput> {
    const project = new Project({
      tenantId,
      name: input.name,
      description: input.description,
      status: (input.status as ProjectStatus) ?? 'ACTIVE',
      startDate: input.startDate ? new Date(input.startDate) : null,
      endDate: input.endDate ? new Date(input.endDate) : null,
      createdBy: userId,
    });

    const created = await this.projectRepository.create(project);
    return toProjectOutput(created);
  }
}
export class ListProjectsUseCase {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(
    tenantId: string,
    options: PaginationOptions,
    filters?: ProjectFilters,
  ): Promise<PaginatedResult<ProjectOutput>> {
    const result = await this.projectRepository.findAll(tenantId, options, filters);

    return {
      ...result,
      data: result.data.map(toProjectOutput),
    };
  }
}
export class GetProjectUseCase {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(tenantId: string, projectId: string): Promise<ProjectOutput> {
    const project = await this.projectRepository.findById(tenantId, projectId);
    if (!project) {
      throw new NotFoundError('Projeto');
    }
    return toProjectOutput(project);
  }
}
export class UpdateProjectUseCase {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(
    tenantId: string,
    projectId: string,
    requesterId: string,
    requesterRole: string,
    input: UpdateProjectInput,
  ): Promise<ProjectOutput> {
    const existing = await this.projectRepository.findById(tenantId, projectId);
    if (!existing) {
      throw new NotFoundError('Project not found.');
    }
    const isAdminOrOwner = requesterRole === 'OWNER' || requesterRole === 'ADMIN';
    const isCreator = existing.createdBy === requesterId;

    if (!isAdminOrOwner && !isCreator) {
      throw new ForbiddenError('You do not have permission to edit this project.');
    }

    const updated = await this.projectRepository.update(tenantId, projectId, {
      ...(input.name !== undefined && { name: input.name }),
      ...(input.description !== undefined && { description: input.description }),
      ...(input.status !== undefined && { status: input.status as ProjectStatus }),
      ...(input.startDate !== undefined && { startDate: new Date(input.startDate) }),
      ...(input.endDate !== undefined && { endDate: new Date(input.endDate) }),
    });

    return toProjectOutput(updated);
  }
}
export class DeleteProjectUseCase {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(
    tenantId: string,
    projectId: string,
    requesterRole: string,
  ): Promise<void> {
    const isAdminOrOwner = requesterRole === 'OWNER' || requesterRole === 'ADMIN';

    if (!isAdminOrOwner) {
      throw new ForbiddenError('Only admins can delete projects.');
    }

    const existing = await this.projectRepository.findById(tenantId, projectId);
    if (!existing) {
      throw new NotFoundError('Project not found.');
    }

    await this.projectRepository.softDelete(tenantId, projectId);
  }
}
function toProjectOutput(p: Project): ProjectOutput {
  return {
    id: p.id!,
    tenantId: p.tenantId,
    name: p.name,
    description: p.description,
    status: p.status,
    startDate: p.startDate,
    endDate: p.endDate,
    createdBy: p.createdBy,
    createdAt: p.createdAt ?? new Date(),
    updatedAt: p.updatedAt ?? new Date(),
  };
}
