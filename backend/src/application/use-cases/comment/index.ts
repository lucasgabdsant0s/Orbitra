import { ICommentRepository, CommentFilters } from '../../../core/interfaces/repositories/ICommentRepository.js';
import { IProjectMemberRepository } from '../../../core/interfaces/repositories/IProjectMemberRepository.js';
import { INotificationRepository } from '../../../core/interfaces/repositories/INotificationRepository.js';
import { IProjectRepository } from '../../../core/interfaces/repositories/IProjectRepository.js';
import { Comment } from '../../../core/entities/Comment.js';
import { Notification } from '../../../core/entities/Notification.js';
import { NotificationType } from '../../../core/enums/index.js';
import { NotFoundError, ForbiddenError } from '../../../core/exceptions/index.js';
import type { CreateCommentInput, CommentOutput } from '../../dtos/index.js';
import type { PaginatedResult, PaginationOptions } from '../../../core/types/index.js';

export class CreateCommentUseCase {
  constructor(
    private commentRepository: ICommentRepository,
    private projectMemberRepository: IProjectMemberRepository,
    private projectRepository: IProjectRepository,
    private notificationRepository: INotificationRepository,
  ) {}

  async execute(
    tenantId: string,
    projectId: string,
    userId: string,
    input: CreateCommentInput,
  ): Promise<CommentOutput> {
    const member = await this.projectMemberRepository.findMember(tenantId, projectId, userId);
    const project = await this.projectRepository.findById(tenantId, projectId);
    if (!project) throw new NotFoundError('Project');
    if (!member) {
       throw new ForbiddenError('Only project members can comment.');
    }

    const comment = new Comment({
      tenantId,
      projectId,
      userId,
      parentId: input.parentId,
      text: input.text,
    });

    const created = await this.commentRepository.create(comment);
    if (project.createdBy !== userId) {
      await this.notificationRepository.create(new Notification({
        tenantId,
        userId: project.createdBy,
        type: NotificationType.COMMENT,
        message: `New comment on ${project.name}`,
        link: `/projects/${projectId}/comments/${created.id}`,
      }));
    }

    return this.toOutput(created);
  }

  private toOutput(c: Comment): CommentOutput {
    return {
      id: c.id!,
      projectId: c.projectId,
      userId: c.userId,
      parentId: c.parentId,
      text: c.text,
      createdAt: c.createdAt ?? new Date(),
      updatedAt: c.updatedAt ?? new Date(),
    };
  }
}

export class ListCommentsUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  async execute(
    tenantId: string,
    projectId: string,
    options: PaginationOptions,
    filters?: CommentFilters,
  ): Promise<PaginatedResult<CommentOutput>> {
    const result = await this.commentRepository.findAllByProject(tenantId, projectId, options, filters);
    return {
      ...result,
      data: result.data.map(c => ({
        id: c.id!,
        projectId: c.projectId,
        userId: c.userId,
        parentId: c.parentId,
        text: c.text,
        createdAt: c.createdAt ?? new Date(),
        updatedAt: c.updatedAt ?? new Date(),
      })),
    };
  }
}

export class UpdateCommentUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  async execute(tenantId: string, userId: string, commentId: string, text: string): Promise<CommentOutput> {
    const comment = await this.commentRepository.findById(tenantId, commentId);
    if (!comment) throw new NotFoundError('Comment');
    if (comment.userId !== userId) {
      throw new ForbiddenError('You can only edit your own comments.');
    }

    const updated = await this.commentRepository.update(tenantId, commentId, text);
    return {
      id: updated.id!,
      projectId: updated.projectId,
      userId: updated.userId,
      parentId: updated.parentId,
      text: updated.text,
      createdAt: updated.createdAt ?? new Date(),
      updatedAt: updated.updatedAt ?? new Date(),
    };
  }
}

export class DeleteCommentUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  async execute(tenantId: string, userId: string, userRole: string, commentId: string): Promise<void> {
    const comment = await this.commentRepository.findById(tenantId, commentId);
    if (!comment) throw new NotFoundError('Comment');

    const isAuthor = comment.userId === userId;
    const isAdmin = userRole === 'ADMIN' || userRole === 'OWNER';

    if (!isAuthor && !isAdmin) {
      throw new ForbiddenError('You do not have permission to delete this comment.');
    }

    await this.commentRepository.softDelete(tenantId, commentId);
  }
}
