import { prisma } from '../../database/prisma';
import type {
  ITaskRepository,
  TaskFilters,
} from '../../../core/interfaces/repositories/ITaskRepository.js';
import { Task } from '../../../core/entities/Task.js';
import type { TaskStatus, TaskPriority } from '../../../core/enums/index.js';
import type { PaginatedResult, PaginationOptions } from '../../../core/types/index.js';

interface TaskRecord {
  id: string;
  tenantId: string;
  projectId: string;
  title: string;
  description: string | null;
  status: string;
  priority: string;
  assigneeId: string | null;
  dueDate: Date | null;
  createdBy: string;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export class PrismaTaskRepository implements ITaskRepository {
  async create(task: Task): Promise<Task> {
    const created = await prisma.task.create({
      data: {
        tenantId: task.tenantId,
        projectId: task.projectId,
        title: task.title,
        description: task.description,
        status: task.status,
        priority: task.priority,
        assigneeId: task.assigneeId,
        dueDate: task.dueDate,
        createdBy: task.createdBy,
      },
    });

    return this.toDomain(created as unknown as TaskRecord);
  }

  async findById(tenantId: string, id: string): Promise<Task | null> {
    const record = await prisma.task.findFirst({
      where: { id, tenantId, deletedAt: null },
    });
    return record ? this.toDomain(record as unknown as TaskRecord) : null;
  }

  async findAllByProject(
    tenantId: string,
    projectId: string,
    options: PaginationOptions,
    filters?: TaskFilters,
  ): Promise<PaginatedResult<Task>> {
    const { page, limit } = options;
    const skip = (page - 1) * limit;

    const where = {
      tenantId,
      projectId,
      deletedAt: null as Date | null,
      ...(filters?.status && { status: filters.status }),
      ...(filters?.priority && { priority: filters.priority }),
      ...(filters?.assigneeId && { assigneeId: filters.assigneeId }),
    };

    const [records, total] = await Promise.all([
      prisma.task.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.task.count({ where }),
    ]);

    return {
      data: (records as unknown as TaskRecord[]).map((r: TaskRecord) => this.toDomain(r)),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async update(tenantId: string, id: string, data: Partial<Task>): Promise<Task> {
    const updated = await prisma.task.update({
      where: { id },
      data: {
        ...(data.title !== undefined && { title: data.title }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.status !== undefined && { status: data.status }),
        ...(data.priority !== undefined && { priority: data.priority }),
        ...(data.assigneeId !== undefined && { assigneeId: data.assigneeId }),
        ...(data.dueDate !== undefined && { dueDate: data.dueDate }),
      },
    });

    return this.toDomain(updated as unknown as TaskRecord);
  }

  async softDelete(tenantId: string, id: string): Promise<void> {
    await prisma.task.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  private toDomain(record: TaskRecord): Task {
    return new Task({
      id: record.id,
      tenantId: record.tenantId,
      projectId: record.projectId,
      title: record.title,
      description: record.description,
      status: record.status as TaskStatus,
      priority: record.priority as TaskPriority,
      assigneeId: record.assigneeId,
      dueDate: record.dueDate,
      createdBy: record.createdBy,
      deletedAt: record.deletedAt,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }
}
