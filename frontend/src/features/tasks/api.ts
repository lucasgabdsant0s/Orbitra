import { api } from '@/lib/api';
import type { PaginatedResponse, Task } from '@/types';

export const tasksApi = {
  list: async (
    projectId: string,
    filters?: { status?: string; priority?: string; assigneeId?: string },
  ): Promise<PaginatedResponse<Task>> => {
    const response = await api.get(`/projects/${projectId}/tasks`, {
      params: filters,
    });
    return response.data;
  },

  create: async (projectId: string, data: any): Promise<Task> => {
    const response = await api.post(`/projects/${projectId}/tasks`, data);
    return response.data;
  },

  update: async (taskId: string, data: any): Promise<Task> => {
    const response = await api.patch(`/tasks/${taskId}`, data);
    return response.data;
  },

  delete: async (taskId: string): Promise<void> => {
    await api.delete(`/tasks/${taskId}`);
  },
};
