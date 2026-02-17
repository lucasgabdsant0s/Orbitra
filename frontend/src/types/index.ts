export interface User {
  id: string;
  email: string;
  name: string;
  tenantId: string | null;
  role: 'OWNER' | 'ADMIN' | 'MEMBER' | 'GUEST';
  avatarUrl?: string | null;
  createdAt?: string;
}

export interface Tenant {
  id: string;
  name: string;
  slug?: string;
  ownerId?: string;
  createdAt?: string;
}

export interface Project {
  id: string;
  name: string;
  description?: string;
  status: 'ACTIVE' | 'ARCHIVED' | 'COMPLETED';
  tenantId: string;
  createdAt: string;
  updatedAt: string;
}

export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  BLOCKED = 'BLOCKED',
}

export enum TaskPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  projectId: string;
  assigneeId?: string | null;
  assignee?: User | null;
  dueDate?: string | null;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  tenantName: string;
  userName: string;
  email: string;
  password: string;
  isPersonal?: boolean;
}

export interface CreateProjectRequest {
  name: string;
  description?: string;
  status?: string;
}

export interface UpdateProjectRequest {
  name?: string;
  description?: string;
  status?: string;
}

export interface AuditLog {
  id: string;
  userId: string;
  userName?: string;
  userAvatar?: string | null;
  projectId: string | null;
  entityType: string;
  entityId: string;
  action: string;
  changes: any;
  timestamp: string;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export type PaginatedResponse<T> = PaginatedResult<T>;
