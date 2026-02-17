import { api } from '@/lib/api';
import type { PaginatedResponse } from '@/types';

export interface Comment {
  id: string;
  text: string;
  userId: string;
  userName: string;
  userAvatar?: string | null;
  projectId: string;
  parentId?: string | null;
  createdAt: string;
  updatedAt: string;
  replies?: Comment[];
}

export const commentsApi = {
  list: async (
    projectId: string,
    params: { page?: number; limit?: number; parentId?: string } = {},
  ): Promise<PaginatedResponse<Comment>> => {
    const response = await api.get(`/projects/${projectId}/comments`, {
      params,
    });
    return response.data;
  },

  create: async (
    projectId: string,
    data: { text: string; parentId?: string },
  ): Promise<Comment> => {
    const response = await api.post(`/projects/${projectId}/comments`, data);
    return response.data;
  },

  update: async (id: string, text: string): Promise<Comment> => {
    const response = await api.patch(`/comments/${id}`, { text });
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/comments/${id}`);
  },
};
