import type { ITaskRepository, TaskFilters } from '../../../core/interfaces/repositories/ITaskRepository.js';
import type { IProjectRepository } from '../../../core/interfaces/repositories/IProjectRepository.js';
import { Task } from '../../../core/entities/Task.js';
import type { TaskStatus, TaskPriority } from '../../../core/enums/index.js';
import type { PaginatedResult, PaginationOptions } from '../../../core/types/index.js';
import { NotFoundError } from '../../../core/exceptions/index.js';
import type { CreateTaskInput, UpdateTaskInput, TaskOutput } from '../../dtos/index.js';
export class CreateTaskUseCase {
  constructor(
    private taskRepository: ITaskRepository,
    private projectRepository: IProjectRepository,
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
      status: (input.status as TaskStatus) ?? 'TODO',
      priority: (input.priority as TaskPriority) ?? 'MEDIUM',
      assigneeId: input.assigneeId ?? null,
      dueDate: input.dueDate ? new Date(input.dueDate) : null,
      createdBy: userId,
    });

    const created = await this.taskRepository.create(task);
    return toTaskOutput(created);
  }
}
export class ListTasksUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(
    tenantId: string,
    projectId: string,
    options: PaginationOptions,
    filters?: TaskFilters,
  ): Promise<PaginatedResult<TaskOutput>> {
    const result = await this.taskRepository.findAllByProject(tenantId, projectId, options, filters);

    return {
      ...result,
      data: result.data.map(toTaskOutput),
    };
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
  constructor(private taskRepository: ITaskRepository) {}

  async execute(
    tenantId: string,
    taskId: string,
    input: UpdateTaskInput,
  ): Promise<TaskOutput> {
    const existing = await this.taskRepository.findById(tenantId, taskId);
    if (!existing) {
      throw new NotFoundError('Task not found.');
    }

    const updated = await this.taskRepository.update(tenantId, taskId, {
      ...(input.title !== undefined && { title: input.title }),
      ...(input.description !== undefined && { description: input.description }),
      ...(input.status !== undefined && { status: input.status as TaskStatus }),
      ...(input.priority !== undefined && { priority: input.priority as TaskPriority }),
      ...(input.assigneeId !== undefined && { assigneeId: input.assigneeId }),
      ...(input.dueDate !== undefined && { dueDate: input.dueDate ? new Date(input.dueDate) : null }),
    });

    return toTaskOutput(updated);
  }
}
export class DeleteTaskUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(tenantId: string, taskId: string): Promise<void> {
    const existing = await this.taskRepository.findById(tenantId, taskId);
    if (!existing) {
      throw new NotFoundError('Task not found.');
    }

    await this.taskRepository.softDelete(tenantId, taskId);
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
