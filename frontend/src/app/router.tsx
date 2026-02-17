import { ProjectDetailsPage } from '@/features/projects/components/ProjectDetailsPage';
import { TasksPage } from '@/features/tasks/components/TasksPage';
import { TeamPage } from '@/features/tenants/components/TeamPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedLayout } from './layout';
import DashboardPage from './routes/index';
import LoginPage from './routes/login';
import ProjectsPage from './routes/projects';
import RegisterPage from './routes/register';
import SettingsPage from './routes/settings';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {}
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
          <Route path="/projects/:id/kanban" element={<ProjectDetailsPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>

        {}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
