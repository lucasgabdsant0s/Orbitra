import { prisma } from '../../database/prisma';
import type {
  IProjectRepository,
  ProjectFilters,
} from '../../../core/interfaces/repositories/IProjectRepository.js';
import { Project } from '../../../core/entities/Project.js';
import type { ProjectStatus } from '../../../core/enums/index.js';
import type { PaginatedResult, PaginationOptions } from '../../../core/types/index.js';

interface ProjectRecord {
  id: string;
  tenantId: string;
  name: string;
  description: string | null;
  status: string;
  startDate: Date | null;
  endDate: Date | null;
  createdBy: string;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export class PrismaProjectRepository implements IProjectRepository {
  async create(project: Project): Promise<Project> {
    const created = await prisma.project.create({
      data: {
        tenantId: project.tenantId,
        name: project.name,
        description: project.description,
        status: project.status,
        startDate: project.startDate,
        endDate: project.endDate,
        createdBy: project.createdBy,
      },
    });

    return this.toDomain(created as unknown as ProjectRecord);
  }

  async findById(tenantId: string, id: string): Promise<Project | null> {
    const record = await prisma.project.findFirst({
      where: { id, tenantId, deletedAt: null },
    });
    return record ? this.toDomain(record as unknown as ProjectRecord) : null;
  }

  async findAll(
    tenantId: string,
    options: PaginationOptions,
    filters?: ProjectFilters,
  ): Promise<PaginatedResult<Project>> {
    const { page, limit } = options;
    const skip = (page - 1) * limit;

    const where = {
      tenantId,
      deletedAt: null as Date | null,
      ...(filters?.status && { status: filters.status }),
    };

    const [records, total] = await Promise.all([
      prisma.project.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.project.count({ where }),
    ]);

    return {
      data: (records as unknown as ProjectRecord[]).map((r: ProjectRecord) => this.toDomain(r)),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async update(tenantId: string, id: string, data: Partial<Project>): Promise<Project> {
    const updated = await prisma.project.update({
      where: { id },
      data: {
        ...(data.name !== undefined && { name: data.name }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.status !== undefined && { status: data.status }),
        ...(data.startDate !== undefined && { startDate: data.startDate }),
        ...(data.endDate !== undefined && { endDate: data.endDate }),
      },
    });

    return this.toDomain(updated as unknown as ProjectRecord);
  }

  async softDelete(tenantId: string, id: string): Promise<void> {
    await prisma.project.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  private toDomain(record: ProjectRecord): Project {
    return new Project({
      id: record.id,
      tenantId: record.tenantId,
      name: record.name,
      description: record.description,
      status: record.status as ProjectStatus,
      startDate: record.startDate,
      endDate: record.endDate,
      createdBy: record.createdBy,
      deletedAt: record.deletedAt,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }
}
