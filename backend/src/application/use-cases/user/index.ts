import { ForbiddenError, NotFoundError } from '../../../core/exceptions/index.js';
import type { IUserRepository } from '../../../core/interfaces/repositories/IUserRepository.js';
import type { PaginatedResult, PaginationOptions } from '../../../core/types/index.js';
import type { UpdateUserInput, UserOutput } from '../../dtos/index.js';
export class ListUsersUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute(
    tenantId: string,
    options: PaginationOptions,
  ): Promise<PaginatedResult<UserOutput>> {
    const result = await this.userRepository.findAll(tenantId, options);
    return {
      ...result,
      data: result.data.map(toUserOutput),
    };
  }
}
export class GetUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute(tenantId: string, userId: string): Promise<UserOutput> {
    const user = await this.userRepository.findById(tenantId, userId);
    if (!user) {
      throw new NotFoundError('User not found.');
    }
    return toUserOutput(user);
  }
}
export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute(
    tenantId: string,
    userId: string,
    requesterId: string,
    requesterRole: string,
    input: UpdateUserInput,
  ): Promise<UserOutput> {
    const isAdmin = requesterRole === 'OWNER' || requesterRole === 'ADMIN';
    if (requesterId !== userId && !isAdmin) {
      throw new ForbiddenError('You can only edit your own profile.');
    }
    if ((input.role || input.isActive !== undefined) && !isAdmin) {
      throw new ForbiddenError('Only admins can change role or status.');
    }
    const existing = await this.userRepository.findById(tenantId, userId);
    if (!existing) {
      throw new NotFoundError('User not found.');
    }
    const updated = await this.userRepository.update(tenantId, userId, {
      ...(input.name && { name: input.name }),
      ...(input.email && { email: input.email }),
      ...(input.avatarUrl !== undefined && { avatarUrl: input.avatarUrl }),
      ...(input.role && { role: input.role as any }),
      ...(input.isActive !== undefined && { isActive: input.isActive }),
    });
    return toUserOutput(updated);
  }
}
export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute(tenantId: string, userId: string, requesterRole: string): Promise<void> {
    const isAdmin = requesterRole === 'OWNER' || requesterRole === 'ADMIN';
    if (!isAdmin) {
      throw new ForbiddenError('Only admins can remove users.');
    }
    const existing = await this.userRepository.findById(tenantId, userId);
    if (!existing) {
      throw new NotFoundError('User not found.');
    }
    if (existing.role === 'OWNER') {
      throw new ForbiddenError('Cannot remove the organization owner.');
    }
    await this.userRepository.softDelete(tenantId, userId);
  }
}
function toUserOutput(user: {
  id?: string;
  tenantId: string;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  isVerified: boolean;
  totpEnabled: boolean;
  avatarUrl: string | null;
  createdAt?: Date;
}): UserOutput {
  return {
    id: user.id!,
    tenantId: user.tenantId,
    name: user.name,
    email: user.email,
    role: user.role,
    isActive: user.isActive,
    isVerified: user.isVerified,
    totpEnabled: user.totpEnabled,
    avatarUrl: user.avatarUrl,
    createdAt: user.createdAt ?? new Date(),
  };
}
