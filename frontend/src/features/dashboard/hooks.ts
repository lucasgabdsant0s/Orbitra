import { useQuery } from '@tanstack/react-query';
import { dashboardApi } from './api';

export function useDashboardStats() {
  return useQuery({
    queryKey: ['dashboard', 'stats'],
    queryFn: () => dashboardApi.getStats(),
  });
}

export function useDashboardActivity(page = 1, limit = 10) {
  return useQuery({
    queryKey: ['dashboard', 'activity', page, limit],
    queryFn: () => dashboardApi.getActivities(page, limit),
    refetchInterval: 10000,
  });
}
