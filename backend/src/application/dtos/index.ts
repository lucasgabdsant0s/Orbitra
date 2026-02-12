export interface RegisterTenantInput {
  tenantName: string;
  userName: string;
  email: string;
  password: string;
  isPersonal?: boolean;
}

export interface RegisterTenantOutput {
  tenant: { id: string; name: string; slug: string };
  user: { id: string; name: string; email: string; role: string };
  accessToken: string;
  refreshToken: string;
}

export interface LoginInput {
  email: string;
  password: string;
  code?: string;
}

export interface LoginOutput {
  user: { id: string; name: string; email: string; role: string; tenantId: string; totpEnabled: boolean };
  accessToken: string;
  refreshToken: string;
  require2FA?: boolean;
}

export interface RefreshTokenInput {
  refreshToken: string;
}

export interface RefreshTokenOutput {
  accessToken: string;
  refreshToken: string;
}

export interface UpdateUserInput {
  name?: string;
  email?: string;
  avatarUrl?: string | null;
  role?: string;
  isActive?: boolean;
}

export interface UserOutput {
  id: string;
  tenantId: string;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  isVerified: boolean;
  totpEnabled: boolean;
  avatarUrl: string | null;
  createdAt: Date;
}

export interface CreateProjectInput {
  name: string;
  description?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
}

export interface UpdateProjectInput {
  name?: string;
  description?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
}

export interface ProjectOutput {
  id: string;
  tenantId: string;
  name: string;
  description: string | null;
  status: string;
  startDate: Date | null;
  endDate: Date | null;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateTaskInput {
  title: string;
  description?: string;
  status?: string;
  priority?: string;
  assigneeId?: string;
  dueDate?: string;
}

export interface UpdateTaskInput {
  title?: string;
  description?: string;
  status?: string;
  priority?: string;
  assigneeId?: string | null;
  dueDate?: string | null;
}

export interface TaskOutput {
  id: string;
  tenantId: string;
  projectId: string;
  title: string;
  description: string | null;
  status: string;
  priority: string;
  assigneeId: string | null;
  dueDate: Date | null;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateCommentInput {
  text: string;
  parentId?: string;
}

export interface CommentOutput {
  id: string;
  projectId: string;
  userId: string;
  userName?: string;
  parentId: string | null;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateInviteInput {
  email: string;
  role?: string;
}

export interface InviteOutput {
  id: string;
  tenantId: string;
  email: string;
  role: string;
  token: string;
  status: string;
  expiresAt: Date;
  createdAt: Date;
}

export interface NotificationOutput {
  id: string;
  type: string;
  message: string;
  link: string | null;
  isRead: boolean;
  createdAt: Date;
}

export interface AuditLogOutput {
  id: string;
  userId: string;
  userName?: string;
  entityType: string;
  entityId: string;
  action: string;
  changes: any;
  timestamp: Date;
}

export interface CreateTenantInput {
  name: string;
  slug: string;
}

export interface Setup2FAOutput {
  secret: string;
  qrCodeUrl: string;
}
