import { PrismaTenantRepository } from './database/repositories/PrismaTenantRepository.js';
import { PrismaUserRepository } from './database/repositories/PrismaUserRepository.js';
import { PrismaProjectRepository } from './database/repositories/PrismaProjectRepository.js';
import { PrismaTaskRepository } from './database/repositories/PrismaTaskRepository.js';
import { PrismaRefreshTokenRepository } from './database/repositories/PrismaRefreshTokenRepository.js';
import { BcryptHashProvider } from './providers/BcryptHashProvider.js';
import { JwtTokenProvider } from './providers/JwtTokenProvider.js';
import { RegisterTenantUseCase } from '../application/use-cases/auth/RegisterTenantUseCase.js';
import { LoginUseCase } from '../application/use-cases/auth/LoginUseCase.js';
import { RefreshTokenUseCase } from '../application/use-cases/auth/RefreshTokenUseCase.js';
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
import { DeleteTenantUseCase } from '../application/use-cases/tenant/DeleteTenantUseCase.js';
const tenantRepository = new PrismaTenantRepository();
const userRepository = new PrismaUserRepository();
const projectRepository = new PrismaProjectRepository();
const taskRepository = new PrismaTaskRepository();
const refreshTokenRepository = new PrismaRefreshTokenRepository();
const hashProvider = new BcryptHashProvider();
const tokenProvider = new JwtTokenProvider();
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
export const createProjectUseCase = new CreateProjectUseCase(projectRepository);
export const listProjectsUseCase = new ListProjectsUseCase(projectRepository);
export const getProjectUseCase = new GetProjectUseCase(projectRepository);
export const updateProjectUseCase = new UpdateProjectUseCase(projectRepository);
export const deleteProjectUseCase = new DeleteProjectUseCase(projectRepository);
export const createTaskUseCase = new CreateTaskUseCase(taskRepository, projectRepository);
export const listTasksUseCase = new ListTasksUseCase(taskRepository);
export const getTaskUseCase = new GetTaskUseCase(taskRepository);
export const updateTaskUseCase = new UpdateTaskUseCase(taskRepository);
export const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);
export const deleteTenantUseCase = new DeleteTenantUseCase(tenantRepository);
