import { useAuthStore } from "@/stores/authStore";
import type { LoginRequest, RegisterRequest, User } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { authApi } from "./api";

export function useLogin() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const { t } = useTranslation();

  return useMutation({
    mutationFn: (data: LoginRequest) => authApi.login(data),
    onSuccess: (data) => {
      setAuth(data.token, data.user);
      toast.success(t("toasts.welcome", { name: data.user.name }));
      navigate("/");
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || t("toasts.login_error");
      toast.error(message);
    },
  });
}

export function useRegister() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const { t } = useTranslation();

  return useMutation({
    mutationFn: (data: RegisterRequest) => authApi.register(data),
    onSuccess: (data) => {
      setAuth(data.token, data.user);
      toast.success(t("toasts.account_created"));
      navigate("/");
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message || t("toasts.register_error");
      toast.error(message);
    },
  });
}

export function useUpdateProfile() {
  const setUser = useAuthStore((state) => state.setUser);
  const { t } = useTranslation();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<User> }) =>
      authApi.updateProfile(id, data),
    onSuccess: (updatedUser) => {
      setUser(updatedUser);
      toast.success(t("toasts.profile_updated"));
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message || t("toasts.profile_update_error");
      toast.error(message);
    },
  });
}

export function useAuth() {
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  return { isAuthenticated: !!token, user, logout };
}
