import type { Notification } from '../../entities/Notification.js';
import type { PaginatedResult, PaginationOptions } from '../../types/index.js';

export interface NotificationFilters {
  isRead?: boolean;
}

export interface INotificationRepository {
  create(notification: Notification): Promise<Notification>;
  findAllByUser(
    tenantId: string,
    userId: string,
    options: PaginationOptions,
    filters?: NotificationFilters,
  ): Promise<PaginatedResult<Notification>>;
  markAsRead(tenantId: string, id: string): Promise<void>;
  markAllAsRead(tenantId: string, userId: string): Promise<void>;
}
