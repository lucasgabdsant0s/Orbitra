import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { commentsApi } from './api';

export function useComments(
  projectId: string,
  params: { page?: number; limit?: number; parentId?: string } = {},
) {
  return useQuery({
    queryKey: ['comments', projectId, params],
    queryFn: () => commentsApi.list(projectId, params),
    enabled: !!projectId,
  });
}

export function useCreateComment(projectId: string) {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: (data: { text: string; parentId?: string }) => commentsApi.create(projectId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', projectId] });
      toast.success(t('toasts.comment_created'));
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || t('toasts.comment_create_error');
      toast.error(message);
    },
  });
}

export function useUpdateComment(projectId: string) {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: ({ id, text }: { id: string; text: string }) => commentsApi.update(id, text),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', projectId] });
      toast.success(t('toasts.comment_updated'));
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || t('toasts.comment_update_error');
      toast.error(message);
    },
  });
}

export function useDeleteComment(projectId: string) {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: (id: string) => commentsApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', projectId] });
      toast.success(t('toasts.comment_deleted'));
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || t('toasts.comment_delete_error');
      toast.error(message);
    },
  });
}
