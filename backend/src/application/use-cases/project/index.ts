import { AuditLog } from '../../../core/entities/AuditLog.js';
import { Notification } from '../../../core/entities/Notification.js';
import { Project } from '../../../core/entities/Project.js';
import { AuditAction, AuditEntityType, NotificationType } from '../../../core/enums/index.js';
import { ForbiddenError, NotFoundError } from '../../../core/exceptions/index.js';
import type { ICacheProvider } from '../../../core/interfaces/providers/ICacheProvider.js';
import type { IAuditLogRepository } from '../../../core/interfaces/repositories/IAuditLogRepository.js';
import type { INotificationRepository } from '../../../core/interfaces/repositories/INotificationRepository.js';
import type {
  IProjectRepository,
  ProjectFilters,
} from '../../../core/interfaces/repositories/IProjectRepository.js';
import type { IUserRepository } from '../../../core/interfaces/repositories/IUserRepository.js';
import type { PaginatedResult, PaginationOptions } from '../../../core/types/index.js';
import type { CreateProjectInput, ProjectOutput, UpdateProjectInput } from '../../dtos/index.js';

export class CreateProjectUseCase {
  constructor(
    private projectRepository: IProjectRepository,
    private userRepository: IUserRepository,
    private auditLogRepository: IAuditLogRepository,
    private notificationRepository: INotificationRepository,
    private cacheProvider?: ICacheProvider,
  ) {}

  async execute(
    tenantId: string,
    userId: string,
    input: CreateProjectInput,
  ): Promise<ProjectOutput> {
    const project = new Project({
      tenantId,
      name: input.name,
      description: input.description,
      status: input.status,
      startDate: input.startDate ? new Date(input.startDate) : null,
      endDate: input.endDate ? new Date(input.endDate) : null,
      createdBy: userId,
    });

    const created = await this.projectRepository.create(project);
    await this.auditLogRepository.create(
      new AuditLog({
        tenantId,
        projectId: created.id!,
        userId,
        entityType: AuditEntityType.PROJECT,
        entityId: created.id!,
        action: AuditAction.CREATE,
        changes: { name: created.name },
      }),
    );
    const user = await this.userRepository.findById(tenantId, userId);
    await this.notificationRepository.create(
      new Notification({
        tenantId,
        userId: created.createdBy,
        type: NotificationType.PROJECT_UPDATE,
        message: `${user?.name || 'Usuário'} criou o projeto "${created.name}"`,
        link: `/projects/${created.id}`,
      }),
    );

    if (this.cacheProvider) {
      this.cacheProvider.invalidatePattern(`projects:${tenantId}:*`);
    }

    return toProjectOutput(created);
  }
}

export class ListProjectsUseCase {
  constructor(
    private projectRepository: IProjectRepository,
    private cacheProvider?: ICacheProvider,
  ) {}

  async execute(
    tenantId: string,
    options: PaginationOptions,
    filters?: ProjectFilters,
  ): Promise<PaginatedResult<ProjectOutput>> {
    const cacheKey = `projects:${tenantId}:${options.page}:${options.limit}:all`;

    if (this.cacheProvider) {
      const cached = this.cacheProvider.get<PaginatedResult<ProjectOutput>>(cacheKey);
      if (cached) return cached;
    }

    const result = await this.projectRepository.findAll(tenantId, options, filters);
    const output = {
      ...result,
      data: result.data.map(toProjectOutput),
    };

    if (this.cacheProvider) {
      this.cacheProvider.set(cacheKey, output, 60);
    }

    return output;
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
  constructor(
    private projectRepository: IProjectRepository,
    private userRepository: IUserRepository,
    private auditLogRepository: IAuditLogRepository,
    private notificationRepository: INotificationRepository,
    private cacheProvider?: ICacheProvider,
  ) {}

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
      ...(input.description !== undefined && {
        description: input.description,
      }),
      ...(input.status !== undefined && { status: input.status }),
      ...(input.startDate !== undefined && {
        startDate: input.startDate ? new Date(input.startDate) : null,
      }),
      ...(input.endDate !== undefined && {
        endDate: input.endDate ? new Date(input.endDate) : null,
      }),
    });
    await this.auditLogRepository.create(
      new AuditLog({
        tenantId,
        projectId,
        userId: requesterId,
        entityType: AuditEntityType.PROJECT,
        entityId: projectId,
        action: AuditAction.UPDATE,
        changes: input,
      }),
    );
    const user = await this.userRepository.findById(tenantId, requesterId);
    await this.notificationRepository.create(
      new Notification({
        tenantId,
        userId: existing.createdBy,
        type: NotificationType.PROJECT_UPDATE,
        message: `${user?.name || 'Usuário'} atualizou as configurações do projeto "${updated.name}"`,
        link: `/projects/${projectId}`,
      }),
    );

    if (this.cacheProvider) {
      this.cacheProvider.invalidatePattern(`projects:${tenantId}:*`);
    }

    return toProjectOutput(updated);
  }
}

export class DeleteProjectUseCase {
  constructor(
    private projectRepository: IProjectRepository,
    private userRepository: IUserRepository,
    private auditLogRepository: IAuditLogRepository,
    private notificationRepository: INotificationRepository,
    private cacheProvider?: ICacheProvider,
  ) {}

  async execute(
    tenantId: string,
    projectId: string,
    userId: string,
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
    await this.auditLogRepository.create(
      new AuditLog({
        tenantId,
        projectId,
        userId,
        entityType: AuditEntityType.PROJECT,
        entityId: projectId,
        action: AuditAction.DELETE,
        changes: { name: existing.name },
      }),
    );
    const user = await this.userRepository.findById(tenantId, userId);
    await this.notificationRepository.create(
      new Notification({
        tenantId,
        userId: existing.createdBy,
        type: NotificationType.PROJECT_UPDATE,
        message: `${user?.name || 'Usuário'} excluiu o projeto "${existing.name}"`,
        link: `/projects`,
      }),
    );

    if (this.cacheProvider) {
      this.cacheProvider.invalidatePattern(`projects:${tenantId}:*`);
    }
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
