import { api } from '@/lib/api';
import type { Tenant } from '@/types';
export const tenantsApi = {
  list: async (): Promise<Tenant[]> => {
    const response = await api.get('/tenants');
    return response.data;
  },
  create: async (data: { name: string }): Promise<Tenant> => {
    const response = await api.post('/tenants', data);
    return response.data;
  },
  update: async (_id: string, data: { name: string }): Promise<Tenant> => {
    const response = await api.patch('/tenants/me', data);
    return response.data;
  },
  delete: async (id: string): Promise<void> => {
    await api.delete(`/tenants/${id}`);
  },
};
