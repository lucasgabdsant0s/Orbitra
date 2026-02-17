import { Notification } from '../../../core/entities/Notification.js';
import type { NotificationType } from '../../../core/enums/index.js';
import type {
  INotificationRepository,
  NotificationFilters,
} from '../../../core/interfaces/repositories/INotificationRepository.js';
import type { PaginatedResult, PaginationOptions } from '../../../core/types/index.js';
import { prisma } from '../../database/prisma.js';
export class PrismaNotificationRepository implements INotificationRepository {
  async create(notification: Notification): Promise<Notification> {
    const created = await prisma.notification.create({
      data: {
        tenantId: notification.tenantId,
        userId: notification.userId,
        type: notification.type,
        message: notification.message,
        link: notification.link,
        isRead: notification.isRead,
      },
    });
    return this.toDomain(created);
  }
  async findAllByUser(
    tenantId: string,
    userId: string,
    options: PaginationOptions,
    filters?: NotificationFilters,
  ): Promise<PaginatedResult<Notification>> {
    const { page, limit } = options;
    const skip = (page - 1) * limit;
    const where = {
      tenantId,
      userId,
      ...(filters?.isRead !== undefined && { isRead: filters.isRead }),
    };
    const [records, total] = await Promise.all([
      prisma.notification.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.notification.count({ where }),
    ]);
    return {
      data: records.map((r) => this.toDomain(r)),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }
  async markAsRead(tenantId: string, id: string): Promise<void> {
    await prisma.notification.update({
      where: { id, tenantId },
      data: { isRead: true },
    });
  }
  async markAllAsRead(tenantId: string, userId: string): Promise<void> {
    await prisma.notification.updateMany({
      where: { userId, tenantId, isRead: false },
      data: { isRead: true },
    });
  }
  private toDomain(record: any): Notification {
    return new Notification({
      id: record.id,
      tenantId: record.tenantId,
      userId: record.userId,
      type: record.type as NotificationType,
      message: record.message,
      link: record.link,
      isRead: record.isRead,
      createdAt: record.createdAt,
    });
  }
}
