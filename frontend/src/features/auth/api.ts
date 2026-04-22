import { api } from '@/lib/api';
import type { AuthResponse, LoginRequest, RegisterRequest, User } from '@/types';
export const authApi = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await api.post('/auth/login', data);
    const user = response.data.user;

    return {
      token: response.data.accessToken || response.data.token,
      user: {
        ...user,
        tenantId: user.tenantId ?? null,
      },
    };
  },
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await api.post('/auth/register', data);
    const user = response.data.user;
    const tenantIdFromTenant = response.data.tenant?.id ?? null;

    return {
      token: response.data.accessToken || response.data.token,
      user: {
        ...user,
        tenantId: user.tenantId ?? tenantIdFromTenant,
      },
    };
  },
  updateProfile: async (id: string, data: Partial<User>): Promise<User> => {
    const response = await api.patch(`/users/${id}`, data);
    return response.data;
  },
};
