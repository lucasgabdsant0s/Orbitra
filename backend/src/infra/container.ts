import { PrismaTenantRepository } from './database/repositories/PrismaTenantRepository.js';
import { PrismaUserRepository } from './database/repositories/PrismaUserRepository.js';
import { PrismaProjectRepository } from './database/repositories/PrismaProjectRepository.js';
import { PrismaTaskRepository } from './database/repositories/PrismaTaskRepository.js';
import { PrismaRefreshTokenRepository } from './database/repositories/PrismaRefreshTokenRepository.js';
import { PrismaCommentRepository } from './database/repositories/PrismaCommentRepository.js';
import { PrismaInviteRepository } from './database/repositories/PrismaInviteRepository.js';
import { PrismaNotificationRepository } from './database/repositories/PrismaNotificationRepository.js';
import { PrismaAuditLogRepository } from './database/repositories/PrismaAuditLogRepository.js';
import { PrismaProjectMemberRepository } from './database/repositories/PrismaProjectMemberRepository.js';
import { PrismaEmailVerificationRepository } from './database/repositories/PrismaEmailVerificationRepository.js';

import { BcryptHashProvider } from './providers/BcryptHashProvider.js';
import { JwtTokenProvider } from './providers/JwtTokenProvider.js';
import { OtpLibTotpProvider } from './providers/OtpLibTotpProvider.js';
import { MockMailProvider } from './providers/MockMailProvider.js';
import { InMemoryCacheProvider } from './providers/InMemoryCacheProvider.js';

import { RegisterTenantUseCase } from '../application/use-cases/auth/RegisterTenantUseCase.js';
import { LoginUseCase } from '../application/use-cases/auth/LoginUseCase.js';
import { RefreshTokenUseCase } from '../application/use-cases/auth/RefreshTokenUseCase.js';
import { DeleteTenantUseCase } from '../application/use-cases/tenant/DeleteTenantUseCase.js';

import {
  ListUsersUseCase,
  GetUserUseCase,
  UpdateUserUseCase,
  DeleteUserUseCase,
} from '../application/use-cases/user/index.js';

import {
  CreateProjectUseCase,
  ListProjectsUseCase,
  GetProjectUseCase,
  UpdateProjectUseCase,
  DeleteProjectUseCase,
} from '../application/use-cases/project/index.js';

import {
  CreateTaskUseCase,
  ListTasksUseCase,
  GetTaskUseCase,
  UpdateTaskUseCase,
  DeleteTaskUseCase,
} from '../application/use-cases/task/index.js';

import {
  CreateCommentUseCase,
  ListCommentsUseCase,
  UpdateCommentUseCase,
  DeleteCommentUseCase,
} from '../application/use-cases/comment/index.js';

import {
  CreateInviteUseCase,
  VerifyInviteUseCase,
  AcceptInviteUseCase,
} from '../application/use-cases/invite/index.js';

import {
  ListNotificationsUseCase,
  MarkNotificationReadUseCase,
} from '../application/use-cases/notification/index.js';

import {
  Setup2FAUseCase,
  Verify2FAUseCase,
  VerifyEmailUseCase,
} from '../application/use-cases/security/index.js';

import { ListAuditLogsUseCase } from '../application/use-cases/audit-log/index.js';

// Repositories
const tenantRepository = new PrismaTenantRepository();
const userRepository = new PrismaUserRepository();
const projectRepository = new PrismaProjectRepository();
const taskRepository = new PrismaTaskRepository();
const refreshTokenRepository = new PrismaRefreshTokenRepository();
const commentRepository = new PrismaCommentRepository();
const inviteRepository = new PrismaInviteRepository();
const notificationRepository = new PrismaNotificationRepository();
const auditLogRepository = new PrismaAuditLogRepository();
const projectMemberRepository = new PrismaProjectMemberRepository();
const emailVerificationRepository = new PrismaEmailVerificationRepository();

const hashProvider = new BcryptHashProvider();
const tokenProvider = new JwtTokenProvider();
const totpProvider = new OtpLibTotpProvider();
const mailProvider = new MockMailProvider();
export const cacheProvider = new InMemoryCacheProvider();

export const registerTenantUseCase = new RegisterTenantUseCase(
  tenantRepository,
  userRepository,
  hashProvider,
  tokenProvider,
  refreshTokenRepository,
);

export const loginUseCase = new LoginUseCase(
  userRepository,
  hashProvider,
  tokenProvider,
  refreshTokenRepository,
);

export const refreshTokenUseCase = new RefreshTokenUseCase(
  refreshTokenRepository,
  userRepository,
  tokenProvider,
);

export const listUsersUseCase = new ListUsersUseCase(userRepository);
export const getUserUseCase = new GetUserUseCase(userRepository);
export const updateUserUseCase = new UpdateUserUseCase(userRepository);
export const deleteUserUseCase = new DeleteUserUseCase(userRepository);

export const createProjectUseCase = new CreateProjectUseCase(projectRepository, cacheProvider);
export const listProjectsUseCase = new ListProjectsUseCase(projectRepository, cacheProvider);
export const getProjectUseCase = new GetProjectUseCase(projectRepository);
export const updateProjectUseCase = new UpdateProjectUseCase(projectRepository, cacheProvider);
export const deleteProjectUseCase = new DeleteProjectUseCase(projectRepository, cacheProvider);

export const createTaskUseCase = new CreateTaskUseCase(taskRepository, projectRepository, cacheProvider);
export const listTasksUseCase = new ListTasksUseCase(taskRepository, cacheProvider);
export const getTaskUseCase = new GetTaskUseCase(taskRepository);
export const updateTaskUseCase = new UpdateTaskUseCase(taskRepository, cacheProvider);
export const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository, cacheProvider);

export const deleteTenantUseCase = new DeleteTenantUseCase(tenantRepository);

export const createCommentUseCase = new CreateCommentUseCase(
    commentRepository,
    projectMemberRepository,
    projectRepository,
    notificationRepository
);
export const listCommentsUseCase = new ListCommentsUseCase(commentRepository);
export const updateCommentUseCase = new UpdateCommentUseCase(commentRepository);
export const deleteCommentUseCase = new DeleteCommentUseCase(commentRepository);

export const createInviteUseCase = new CreateInviteUseCase(
    inviteRepository,
    tenantRepository,
    userRepository,
    mailProvider
);
export const verifyInviteUseCase = new VerifyInviteUseCase(inviteRepository);
export const acceptInviteUseCase = new AcceptInviteUseCase(
    inviteRepository,
    userRepository,
    tenantRepository
);

export const listNotificationsUseCase = new ListNotificationsUseCase(notificationRepository);
export const markNotificationReadUseCase = new MarkNotificationReadUseCase(notificationRepository);

export const setup2FAUseCase = new Setup2FAUseCase(userRepository, totpProvider);
export const verify2FAUseCase = new Verify2FAUseCase(userRepository, totpProvider);
export const verifyEmailUseCase = new VerifyEmailUseCase(userRepository, emailVerificationRepository);

export const listAuditLogsUseCase = new ListAuditLogsUseCase(auditLogRepository);
