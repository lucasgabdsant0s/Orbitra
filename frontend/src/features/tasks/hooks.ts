import { api } from '@/lib/api';
import type { Task, TaskStatus, User } from '@/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { tasksApi } from './api';

export function useTasks(
  projectId: string,
  filters?: { status?: string; priority?: string; assigneeId?: string },
) {
  return useQuery({
    queryKey: ['tasks', projectId, filters],
    queryFn: () => tasksApi.list(projectId, filters),
    enabled: !!projectId,
  });
}

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: async (): Promise<User[]> => {
      const response = await api.get('/users');
      return response.data.data;
    },
  });
}

export function useCreateTask(projectId: string) {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: (data: Partial<Task>) => tasksApi.create(projectId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks', projectId] });
      toast.success(t('toasts.task_created'));
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || t('toasts.task_create_error');
      toast.error(message);
    },
  });
}

export function useUpdateTask(projectId: string) {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: ({ taskId, data }: { taskId: string; data: Partial<Task> }) =>
      tasksApi.update(taskId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks', projectId] });
      toast.success(t('toasts.task_updated'));
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || t('toasts.task_update_error');
      toast.error(message);
    },
  });
}

export function useUpdateTaskStatus(projectId: string) {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: TaskStatus }) =>
      tasksApi.update(id, { status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks', projectId] });
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || t('toasts.task_status_update_error');
      toast.error(message);
    },
  });
}

export function useDeleteTask(projectId: string) {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: (taskId: string) => tasksApi.delete(taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks', projectId] });
      toast.success(t('toasts.task_deleted'));
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || t('toasts.task_delete_error');
      toast.error(message);
    },
  });
}

export function useToggleUserActive() {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: async ({ userId, isActive }: { userId: string; isActive: boolean }) => {
      await api.patch(`/users/${userId}`, { isActive });
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast.success(
        variables.isActive ? t('toasts.user_reactivated') : t('toasts.user_deactivated'),
      );
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || t('toasts.user_update_error');
      toast.error(message);
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: async (userId: string) => {
      await api.delete(`/users/${userId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast.success(t('toasts.user_deleted'));
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || t('toasts.user_delete_error');
      toast.error(message);
    },
  });
}
