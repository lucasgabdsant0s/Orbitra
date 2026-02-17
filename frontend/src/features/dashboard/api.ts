import { api } from '@/lib/api';
import type { AuditLog, PaginatedResult } from '@/types';

export interface DashboardStats {
  totalProjects: number;
  activeProjects: number;
  totalTasks: number;
  tasksByStatus: {
    todo: number;
    inProgress: number;
    done: number;
    blocked: number;
  };
  recentProjects: {
    id: string;
    name: string;
    createdAt: string;
  }[];
}

export const dashboardApi = {
  getStats: async (): Promise<DashboardStats> => {
    const response = await api.get('/dashboard/stats');
    return response.data;
  },

  getActivities: async (page = 1, limit = 10): Promise<PaginatedResult<AuditLog>> => {
    const response = await api.get('/audit-logs', {
      params: { page, limit },
    });
    return response.data;
  },
};
