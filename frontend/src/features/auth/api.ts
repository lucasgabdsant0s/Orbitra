import { api } from '@/lib/api';
import type { AuthResponse, LoginRequest, RegisterRequest, User } from '@/types';
export const authApi = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await api.post('/auth/login', data);
    return {
      token: response.data.accessToken || response.data.token,
      user: response.data.user,
    };
  },
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await api.post('/auth/register', data);
    return {
      token: response.data.accessToken || response.data.token,
      user: response.data.user,
    };
  },
  updateProfile: async (id: string, data: Partial<User>): Promise<User> => {
    const response = await api.patch(`/users/${id}`, data);
    return response.data;
  },
};
