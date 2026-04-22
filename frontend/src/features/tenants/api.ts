import { api } from '@/lib/api';
import type { AuthResponse, Invite, InviteRole, Tenant } from '@/types';
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
  createInvite: async (
    tenantId: string,
    data: { email: string; role: InviteRole },
  ): Promise<Invite> => {
    const response = await api.post(`/tenants/${tenantId}/invites`, data);
    return response.data;
  },
  verifyInvite: async (tenantId: string, token: string): Promise<Invite> => {
    const response = await api.get(`/tenants/${tenantId}/invites/${token}`);
    return response.data;
  },
  acceptInvite: async (
    tenantId: string,
    token: string,
    data: { name: string; password: string },
  ): Promise<AuthResponse> => {
    const response = await api.post(`/tenants/${tenantId}/invites/${token}/accept`, data);
    const user = response.data.user;

    return {
      token: response.data.accessToken || response.data.token,
      user: {
        ...user,
        tenantId: user.tenantId ?? null,
      },
    };
  },
};
