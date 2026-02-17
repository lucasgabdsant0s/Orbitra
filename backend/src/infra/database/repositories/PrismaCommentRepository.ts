import { Comment } from '../../../core/entities/Comment.js';
import type {
  CommentFilters,
  ICommentRepository,
} from '../../../core/interfaces/repositories/ICommentRepository.js';
import type { PaginatedResult, PaginationOptions } from '../../../core/types/index.js';
import { prisma } from '../../database/prisma.js';

export class PrismaCommentRepository implements ICommentRepository {
  async create(comment: Comment): Promise<Comment> {
    const created = await prisma.comment.create({
      data: {
        tenantId: comment.tenantId,
        projectId: comment.projectId,
        userId: comment.userId,
        parentId: comment.parentId,
        text: comment.text,
      },
      include: {
        user: { select: { name: true, avatarUrl: true } },
      },
    });
    return this.toDomain(created);
  }

  async findById(tenantId: string, id: string): Promise<Comment | null> {
    const record = await prisma.comment.findFirst({
      where: { id, tenantId },
      include: {
        user: { select: { name: true, avatarUrl: true } },
      },
    });
    return record ? this.toDomain(record) : null;
  }

  async findAllByProject(
    tenantId: string,
    projectId: string,
    options: PaginationOptions,
    filters?: CommentFilters,
  ): Promise<PaginatedResult<Comment>> {
    const { page, limit } = options;
    const skip = (page - 1) * limit;

    const where: any = {
      tenantId,
      projectId,
      deletedAt: null,
    };

    if (filters?.parentId !== undefined) {
      where.parentId = filters.parentId;
    }

    const [records, total] = await Promise.all([
      prisma.comment.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'asc' },
        include: {
          user: { select: { name: true, avatarUrl: true } },
        },
      }),
      prisma.comment.count({ where }),
    ]);

    return {
      data: records.map((r) => this.toDomain(r)),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async update(tenantId: string, id: string, text: string): Promise<Comment> {
    const updated = await prisma.comment.update({
      where: { id, tenantId },
      data: { text },
      include: {
        user: { select: { name: true, avatarUrl: true } },
      },
    });
    return this.toDomain(updated);
  }

  async softDelete(tenantId: string, id: string): Promise<void> {
    const now = new Date();

    const deleteRecursive = async (commentId: string) => {
      const children = await prisma.comment.findMany({
        where: { parentId: commentId, tenantId, deletedAt: null },
        select: { id: true },
      });

      for (const child of children) {
        await deleteRecursive(child.id);
      }

      await prisma.comment.update({
        where: { id: commentId, tenantId },
        data: { deletedAt: now },
      });
    };

    await deleteRecursive(id);
  }

  private toDomain(record: any): Comment {
    return new Comment({
      id: record.id,
      tenantId: record.tenantId,
      projectId: record.projectId,
      userId: record.userId,
      userName: record.user?.name,
      userAvatar: record.user?.avatarUrl,
      parentId: record.parentId,
      text: record.text,
      deletedAt: record.deletedAt,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }
}
