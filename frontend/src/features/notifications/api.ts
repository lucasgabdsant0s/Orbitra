import { api } from '@/lib/api';
import type { PaginatedResult } from '@/types';

export interface AppNotification {
  id: string;
  type: string;
  message: string;
  isRead: boolean;
  link?: string;
  createdAt: string;
}

export const notificationsApi = {
  list: async (): Promise<PaginatedResult<AppNotification>> => {
    const response = await api.get('/notifications');
    return response.data;
  },
  markAsRead: async (id: string): Promise<void> => {
    await api.patch(`/notifications/${id}/read`);
  },
  markAllAsRead: async (): Promise<void> => {
    await api.patch('/notifications/read-all');
  },
};
