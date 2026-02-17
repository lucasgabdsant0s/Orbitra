import { api } from '@/lib/api';
import type {
  AuditLog,
  CreateProjectRequest,
  PaginatedResponse,
  Project,
  UpdateProjectRequest,
} from '@/types';

export const projectsApi = {
  list: async (): Promise<PaginatedResponse<Project>> => {
    const response = await api.get('/projects');
    return response.data;
  },

  get: async (id: string): Promise<Project> => {
    const response = await api.get(`/projects/${id}`);
    return response.data;
  },

  create: async (data: CreateProjectRequest): Promise<Project> => {
    const response = await api.post('/projects', data);
    return response.data;
  },

  update: async (id: string, data: UpdateProjectRequest): Promise<Project> => {
    const response = await api.patch(`/projects/${id}`, data);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/projects/${id}`);
  },

  getHistory: async (id: string, page = 1, limit = 20): Promise<PaginatedResponse<AuditLog>> => {
    const response = await api.get(`/projects/${id}/history`, {
      params: { page, limit },
    });
    return response.data;
  },
};
