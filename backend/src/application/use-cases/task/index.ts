import { AuditLog } from '../../../core/entities/AuditLog.js';
import { Notification } from '../../../core/entities/Notification.js';
import { Task } from '../../../core/entities/Task.js';
import {
  AuditAction,
  AuditEntityType,
  TaskPriority,
  TaskStatus,
} from '../../../core/enums/index.js';
import { NotificationType } from '../../../core/enums/index.js';
import { NotFoundError } from '../../../core/exceptions/index.js';
import type { ICacheProvider } from '../../../core/interfaces/providers/ICacheProvider.js';
import type { IAuditLogRepository } from '../../../core/interfaces/repositories/IAuditLogRepository.js';
import type { INotificationRepository } from '../../../core/interfaces/repositories/INotificationRepository.js';
import type { IProjectRepository } from '../../../core/interfaces/repositories/IProjectRepository.js';
import type {
  ITaskRepository,
  TaskFilters,
} from '../../../core/interfaces/repositories/ITaskRepository.js';
import type { IUserRepository } from '../../../core/interfaces/repositories/IUserRepository.js';
import type { PaginatedResult, PaginationOptions } from '../../../core/types/index.js';
import type { CreateTaskInput, TaskOutput, UpdateTaskInput } from '../../dtos/index.js';

export class CreateTaskUseCase {
  constructor(
    private taskRepository: ITaskRepository,
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
    input: CreateTaskInput,
  ): Promise<TaskOutput> {
    const project = await this.projectRepository.findById(tenantId, projectId);
    if (!project) {
      throw new NotFoundError('Project not found.');
    }

    const task = new Task({
      tenantId,
      projectId,
      title: input.title,
      description: input.description,
      status: (input.status as TaskStatus) ?? TaskStatus.TODO,
      priority: (input.priority as TaskPriority) ?? TaskPriority.MEDIUM,
      assigneeId: input.assigneeId ?? null,
      dueDate: input.dueDate ? new Date(input.dueDate) : null,
      createdBy: userId,
    });

    const created = await this.taskRepository.create(task);
    await this.auditLogRepository.create(
      new AuditLog({
        tenantId,
        projectId,
        userId,
        entityType: AuditEntityType.TASK,
        entityId: created.id!,
        action: AuditAction.CREATE,
        changes: { title: created.title },
      }),
    );
    const user = await this.userRepository.findById(tenantId, userId);
    await this.notificationRepository.create(
      new Notification({
        tenantId,
        userId: project.createdBy,
        type: NotificationType.PROJECT_UPDATE,
        message: `${user?.name || 'Usuário'} criou a tarefa "${created.title}" no projeto "${project.name}"`,
        link: `/projects/${projectId}?task=${created.id}`,
      }),
    );

    if (this.cacheProvider) {
      this.cacheProvider.invalidatePattern(`tasks:${tenantId}:${projectId}:*`);
    }

    return toTaskOutput(created);
  }
}

export class ListTasksUseCase {
  constructor(
    private taskRepository: ITaskRepository,
    private cacheProvider?: ICacheProvider,
  ) {}

  async execute(
    tenantId: string,
    projectId: string,
    options: PaginationOptions,
    filters?: TaskFilters,
  ): Promise<PaginatedResult<TaskOutput>> {
    const cacheKey = `tasks:${tenantId}:${projectId}:${options.page}:${options.limit}:${filters?.status ?? 'all'}:${filters?.priority ?? 'all'}`;

    if (this.cacheProvider) {
      const cached = this.cacheProvider.get<PaginatedResult<TaskOutput>>(cacheKey);
      if (cached) return cached;
    }

    const result = await this.taskRepository.findAllByProject(
      tenantId,
      projectId,
      options,
      filters,
    );
    const output = {
      ...result,
      data: result.data.map(toTaskOutput),
    };

    if (this.cacheProvider) {
      this.cacheProvider.set(cacheKey, output, 60);
    }

    return output;
  }
}

export class GetTaskUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(tenantId: string, taskId: string): Promise<TaskOutput> {
    const task = await this.taskRepository.findById(tenantId, taskId);
    if (!task) {
      throw new NotFoundError('Task not found.');
    }
    return toTaskOutput(task);
  }
}

export class UpdateTaskUseCase {
  constructor(
    private taskRepository: ITaskRepository,
    private projectRepository: IProjectRepository,
    private userRepository: IUserRepository,
    private auditLogRepository: IAuditLogRepository,
    private notificationRepository: INotificationRepository,
    private cacheProvider?: ICacheProvider,
  ) {}

  async execute(
    tenantId: string,
    taskId: string,
    userId: string,
    input: UpdateTaskInput,
  ): Promise<TaskOutput> {
    const existing = await this.taskRepository.findById(tenantId, taskId);
    if (!existing) {
      throw new NotFoundError('Task not found.');
    }

    const updated = await this.taskRepository.update(tenantId, taskId, {
      ...(input.title !== undefined && { title: input.title }),
      ...(input.description !== undefined && {
        description: input.description,
      }),
      ...(input.status !== undefined && { status: input.status as TaskStatus }),
      ...(input.priority !== undefined && {
        priority: input.priority as TaskPriority,
      }),
      ...(input.assigneeId !== undefined && { assigneeId: input.assigneeId }),
      ...(input.dueDate !== undefined && {
        dueDate: input.dueDate ? new Date(input.dueDate) : null,
      }),
    });
    await this.auditLogRepository.create(
      new AuditLog({
        tenantId,
        projectId: existing.projectId,
        userId,
        entityType: AuditEntityType.TASK,
        entityId: taskId,
        action: AuditAction.UPDATE,
        changes: { ...input, title: input.title || existing.title },
      }),
    );
    const project = await this.projectRepository.findById(tenantId, existing.projectId);
    if (project) {
      const user = await this.userRepository.findById(tenantId, userId);
      await this.notificationRepository.create(
        new Notification({
          tenantId,
          userId: project.createdBy,
          type: NotificationType.PROJECT_UPDATE,
          message: `${user?.name || 'Usuário'} atualizou a tarefa "${input.title || existing.title}" no projeto "${project.name}"`,
          link: `/projects/${project.id}?task=${taskId}`,
        }),
      );
    }

    if (this.cacheProvider) {
      this.cacheProvider.invalidatePattern(`tasks:${tenantId}:${existing.projectId}:*`);
    }

    return toTaskOutput(updated);
  }
}

export class DeleteTaskUseCase {
  constructor(
    private taskRepository: ITaskRepository,
    private projectRepository: IProjectRepository,
    private userRepository: IUserRepository,
    private auditLogRepository: IAuditLogRepository,
    private notificationRepository: INotificationRepository,
    private cacheProvider?: ICacheProvider,
  ) {}

  async execute(tenantId: string, taskId: string, userId: string): Promise<void> {
    const existing = await this.taskRepository.findById(tenantId, taskId);
    if (!existing) {
      throw new NotFoundError('Task not found.');
    }

    await this.taskRepository.softDelete(tenantId, taskId);
    await this.auditLogRepository.create(
      new AuditLog({
        tenantId,
        projectId: existing.projectId,
        userId,
        entityType: AuditEntityType.TASK,
        entityId: taskId,
        action: AuditAction.DELETE,
        changes: { title: existing.title },
      }),
    );
    const project = await this.projectRepository.findById(tenantId, existing.projectId);
    if (project) {
      const user = await this.userRepository.findById(tenantId, userId);
      await this.notificationRepository.create(
        new Notification({
          tenantId,
          userId: project.createdBy,
          type: NotificationType.PROJECT_UPDATE,
          message: `${user?.name || 'Usuário'} excluiu a tarefa "${existing.title}" no projeto "${project.name}"`,
          link: `/projects/${project.id}`,
        }),
      );
    }

    if (this.cacheProvider) {
      this.cacheProvider.invalidatePattern(`tasks:${tenantId}:${existing.projectId}:*`);
    }
  }
}

function toTaskOutput(t: Task): TaskOutput {
  return {
    id: t.id!,
    tenantId: t.tenantId,
    projectId: t.projectId,
    title: t.title,
    description: t.description,
    status: t.status,
    priority: t.priority,
    assigneeId: t.assigneeId,
    dueDate: t.dueDate,
    createdBy: t.createdBy,
    createdAt: t.createdAt ?? new Date(),
    updatedAt: t.updatedAt ?? new Date(),
  };
}
