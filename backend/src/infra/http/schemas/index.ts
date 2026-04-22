import { z } from 'zod';

export const registerSchema = z.object({
  tenantName: z.string().min(2, 'Organization name must be at least 2 characters long.'),
  userName: z.string().min(2, 'Name must be at least 2 characters long.'),
  email: z.string().email('Invalid email.'),
  password: z.string().min(6, 'Password must be at least 6 characters long.'),
  isPersonal: z.boolean().optional(),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email.'),
  password: z.string().min(1, 'Password is required.'),
  code: z.string().length(6).optional(),
});

export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(1, 'Refresh token is required.'),
});

export const updateUserSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
  avatarUrl: z.string().nullable().optional(),
  role: z.enum(['OWNER', 'ADMIN', 'MEMBER', 'GUEST']).optional(),
  isActive: z.boolean().optional(),
});

export const createProjectSchema = z.object({
  name: z.string().min(1, 'Project name is required.'),
  description: z.string().optional(),
  status: z.enum(['ACTIVE', 'ARCHIVED', 'COMPLETED']).optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
});

export const updateProjectSchema = z.object({
  name: z.string().min(1).optional(),
  description: z.string().optional(),
  status: z.enum(['ACTIVE', 'ARCHIVED', 'COMPLETED']).optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
});

export const createTaskSchema = z.object({
  title: z.string().min(1, 'Task title is required.'),
  description: z.string().optional(),
  status: z.enum(['TODO', 'IN_PROGRESS', 'DONE', 'BLOCKED']).optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).optional(),
  assigneeId: z.string().uuid().optional(),
  dueDate: z.string().datetime().optional(),
});

export const updateTaskSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  status: z.enum(['TODO', 'IN_PROGRESS', 'DONE', 'BLOCKED']).optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).optional(),
  assigneeId: z.string().uuid().nullable().optional(),
  dueDate: z.string().datetime().nullable().optional(),
});

export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(500).default(20),
});

export const paginationQuerySchema = paginationSchema;

export const projectFilterSchema = paginationSchema;

export const taskFilterSchema = paginationSchema.extend({
  status: z.enum(['TODO', 'IN_PROGRESS', 'DONE', 'BLOCKED']).optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).optional(),
  assigneeId: z.string().uuid().optional(),
});

export const idParamSchema = z.object({
  id: z.string().uuid('Invalid ID.'),
});

export const projectIdParamSchema = z.object({
  projectId: z.string().uuid('Invalid project ID.'),
});

export const taskIdParamSchema = z.object({
  id: z.string().uuid('Invalid task ID.'),
});

export const projectTaskParamsSchema = z.object({
  projectId: z.string().uuid('Invalid project ID.'),
});

export const createCommentSchema = z.object({
  text: z.string().min(1, 'Comment text is required.'),
  parentId: z.string().uuid().optional(),
});

export const updateCommentSchema = z.object({
  text: z.string().min(1, 'Comment text is required.'),
});

export const createInviteSchema = z.object({
  email: z.string().email('Invalid email.'),
  role: z.enum(['ADMIN', 'MEMBER', 'GUEST']).optional(),
});

export const acceptInviteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long.'),
  password: z.string().min(6, 'Password must be at least 6 characters long.'),
});

export const tokenParamSchema = z.object({
  token: z.string().min(1, 'Token is required.'),
});

export const createTenantSchema = z.object({
  name: z.string().min(2, 'Organization name must be at least 2 characters long.'),
  slug: z.string().min(2, 'Slug must be at least 2 characters long.'),
});

export const verify2FASchema = z.object({
  token: z.string().length(6, 'Token must be 6 digits.'),
});
