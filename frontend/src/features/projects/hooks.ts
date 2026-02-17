import type {
  CreateProjectRequest,
  PaginatedResponse,
  Project,
  UpdateProjectRequest,
} from '@/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { projectsApi } from './api';

export function useProjects() {
  return useQuery<PaginatedResponse<Project>>({
    queryKey: ['projects'],
    queryFn: () => projectsApi.list(),
  });
}

export function useProject(id: string) {
  return useQuery({
    queryKey: ['projects', id],
    queryFn: () => projectsApi.get(id),
    enabled: !!id,
  });
}

export function useProjectHistory(id: string, page = 1, limit = 20) {
  return useQuery({
    queryKey: ['projects', id, 'history', page, limit],
    queryFn: () => projectsApi.getHistory(id, page, limit),
    enabled: !!id,
    refetchInterval: 5000,
  });
}

export function useCreateProject() {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: (data: CreateProjectRequest) => projectsApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast.success(t('toasts.project_created'));
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || t('toasts.project_create_error');
      toast.error(message);
    },
  });
}

export function useUpdateProject() {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateProjectRequest }) =>
      projectsApi.update(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['projects', variables.id] });
      toast.success(t('toasts.project_updated'));
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || t('toasts.project_update_error');
      toast.error(message);
    },
  });
}

export function useDeleteProject() {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: (id: string) => projectsApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast.success(t('toasts.project_deleted'));
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || t('toasts.project_delete_error');
      toast.error(message);
    },
  });
}
