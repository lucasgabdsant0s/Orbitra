import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { tenantsApi } from './api';

export function useTenants() {
  return useQuery({
    queryKey: ['tenants'],
    queryFn: tenantsApi.list,
  });
}

export function useCreateTenant() {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: (data: { name: string }) => tenantsApi.create(data),
    onSuccess: (newTenant) => {
      queryClient.invalidateQueries({ queryKey: ['tenants'] });
      toast.success(t('toasts.tenant_created', { name: newTenant.name }));
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || t('toasts.tenant_create_error');
      toast.error(message);
    },
  });
}

export function useUpdateTenant() {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: { name: string } }) =>
      tenantsApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tenants'] });
      toast.success(t('toasts.tenant_updated'));
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || t('toasts.tenant_update_error');
      toast.error(message);
    },
  });
}

export function useDeleteTenant() {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: (id: string) => tenantsApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tenants'] });
      toast.success(t('toasts.tenant_deleted'));
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || t('toasts.tenant_delete_error');
      toast.error(message);
    },
  });
}
