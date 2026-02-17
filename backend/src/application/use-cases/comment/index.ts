import { AuditLog } from '../../../core/entities/AuditLog.js';
import { Comment } from '../../../core/entities/Comment.js';
import { Notification } from '../../../core/entities/Notification.js';
import { AuditAction, AuditEntityType, NotificationType } from '../../../core/enums/index.js';
import { ForbiddenError, NotFoundError } from '../../../core/exceptions/index.js';
import type { IAuditLogRepository } from '../../../core/interfaces/repositories/IAuditLogRepository.js';
import type {
  CommentFilters,
  ICommentRepository,
} from '../../../core/interfaces/repositories/ICommentRepository.js';
import type { INotificationRepository } from '../../../core/interfaces/repositories/INotificationRepository.js';
import type { IProjectMemberRepository } from '../../../core/interfaces/repositories/IProjectMemberRepository.js';
import type { IProjectRepository } from '../../../core/interfaces/repositories/IProjectRepository.js';
import type { IUserRepository } from '../../../core/interfaces/repositories/IUserRepository.js';
import type { PaginatedResult, PaginationOptions } from '../../../core/types/index.js';
import type { CommentOutput, CreateCommentInput } from '../../dtos/index.js';

export class CreateCommentUseCase {
  constructor(
    private commentRepository: ICommentRepository,
    private projectMemberRepository: IProjectMemberRepository,
    private projectRepository: IProjectRepository,
    private userRepository: IUserRepository,
    private notificationRepository: INotificationRepository,
    private auditLogRepository: IAuditLogRepository,
  ) {}

  async execute(
    tenantId: string,
    projectId: string,
    userId: string,
    userRole: string,
    input: CreateCommentInput,
  ): Promise<CommentOutput> {
    const member = await this.projectMemberRepository.findMember(tenantId, projectId, userId);
    const project = await this.projectRepository.findById(tenantId, projectId);

    if (!project) throw new NotFoundError('Project');

    const isAdminOrOwner = userRole === 'OWNER' || userRole === 'ADMIN';
    const isCreator = project.createdBy === userId;

    if (!member && !isAdminOrOwner && !isCreator) {
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
    await this.auditLogRepository.create(
      new AuditLog({
        tenantId,
        projectId,
        userId,
        entityType: AuditEntityType.COMMENT,
        entityId: created.id!,
        action: AuditAction.CREATE,
        changes: { text: created.text.substring(0, 50) + '...' },
      }),
    );
    const user = await this.userRepository.findById(tenantId, userId);
    await this.notificationRepository.create(
      new Notification({
        tenantId,
        userId: project.createdBy,
        type: NotificationType.COMMENT,
        message: `${user?.name || 'Usuário'} comentou no projeto "${project.name}"`,
        link: `/projects/${projectId}?comment=${created.id}`,
      }),
    );

    return this.toOutput(created);
  }

  private toOutput(c: Comment): CommentOutput {
    return {
      id: c.id!,
      projectId: c.projectId,
      userId: c.userId,
      userName: c.userName,
      userAvatar: c.userAvatar,
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
    const result = await this.commentRepository.findAllByProject(
      tenantId,
      projectId,
      options,
      filters,
    );
    return {
      ...result,
      data: result.data.map((c) => ({
        id: c.id!,
        projectId: c.projectId,
        userId: c.userId,
        userName: c.userName,
        userAvatar: c.userAvatar,
        parentId: c.parentId,
        text: c.text,
        createdAt: c.createdAt ?? new Date(),
        updatedAt: c.updatedAt ?? new Date(),
      })),
    };
  }
}

export class UpdateCommentUseCase {
  constructor(
    private commentRepository: ICommentRepository,
    private projectRepository: IProjectRepository,
    private userRepository: IUserRepository,
    private auditLogRepository: IAuditLogRepository,
    private notificationRepository: INotificationRepository,
  ) {}

  async execute(
    tenantId: string,
    userId: string,
    commentId: string,
    text: string,
  ): Promise<CommentOutput> {
    const comment = await this.commentRepository.findById(tenantId, commentId);
    if (!comment) throw new NotFoundError('Comment');
    if (comment.userId !== userId) {
      throw new ForbiddenError('You can only edit your own comments.');
    }
    const updated = await this.commentRepository.update(tenantId, commentId, text);
    await this.auditLogRepository.create(
      new AuditLog({
        tenantId,
        projectId: updated.projectId,
        userId,
        entityType: AuditEntityType.COMMENT,
        entityId: commentId,
        action: AuditAction.UPDATE,
        changes: { text: updated.text.substring(0, 50) + '...' },
      }),
    );
    const project = await this.projectRepository.findById(tenantId, updated.projectId);
    if (project) {
      const user = await this.userRepository.findById(tenantId, userId);
      await this.notificationRepository.create(
        new Notification({
          tenantId,
          userId: project.createdBy,
          type: NotificationType.COMMENT,
          message: `${user?.name || 'Usuário'} editou um comentário no projeto "${project.name}"`,
          link: `/projects/${project.id}?comment=${commentId}`,
        }),
      );
    }

    return {
      id: updated.id!,
      projectId: updated.projectId,
      userId: updated.userId,
      userName: updated.userName,
      userAvatar: updated.userAvatar,
      parentId: updated.parentId,
      text: updated.text,
      createdAt: updated.createdAt ?? new Date(),
      updatedAt: updated.updatedAt ?? new Date(),
    };
  }
}

export class DeleteCommentUseCase {
  constructor(
    private commentRepository: ICommentRepository,
    private projectRepository: IProjectRepository,
    private userRepository: IUserRepository,
    private auditLogRepository: IAuditLogRepository,
    private notificationRepository: INotificationRepository,
  ) {}

  async execute(
    tenantId: string,
    userId: string,
    userRole: string,
    commentId: string,
  ): Promise<void> {
    const comment = await this.commentRepository.findById(tenantId, commentId);
    if (!comment) throw new NotFoundError('Comment');

    const isAuthor = comment.userId === userId;
    const isAdmin = userRole === 'ADMIN' || userRole === 'OWNER';

    if (!isAuthor && !isAdmin) {
      throw new ForbiddenError('You do not have permission to delete this comment.');
    }
    await this.commentRepository.softDelete(tenantId, commentId);
    await this.auditLogRepository.create(
      new AuditLog({
        tenantId,
        projectId: comment.projectId,
        userId,
        entityType: AuditEntityType.COMMENT,
        entityId: commentId,
        action: AuditAction.DELETE,
        changes: { text: comment.text.substring(0, 50) + '...' },
      }),
    );
    const project = await this.projectRepository.findById(tenantId, comment.projectId);
    if (project) {
      const user = await this.userRepository.findById(tenantId, userId);
      await this.notificationRepository.create(
        new Notification({
          tenantId,
          userId: project.createdBy,
          type: NotificationType.COMMENT,
          message: `${user?.name || 'Usuário'} excluiu um comentário no projeto "${project.name}"`,
          link: `/projects/${project.id}`,
        }),
      );
    }
  }
}
