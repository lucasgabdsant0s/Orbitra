import { ITenantRepository } from '../../../core/interfaces/repositories/ITenantRepository.js';
import { IUserRepository } from '../../../core/interfaces/repositories/IUserRepository.js';
import { IProjectMemberRepository } from '../../../core/interfaces/repositories/IProjectMemberRepository.js';
import { Tenant } from '../../../core/entities/Tenant.js';
import { User } from '../../../core/entities/User.js';
import { Role } from '../../../core/enums/index.js';
import { ConflictError, NotFoundError } from '../../../core/exceptions/index.js';
import type { CreateTenantInput, UserOutput } from '../../dtos/index.js';

export class CreateTenantUseCase {
  constructor(
    private tenantRepository: ITenantRepository,
    private userRepository: IUserRepository,
  ) {}

  async execute(userId: string, input: CreateTenantInput): Promise<void> {
    const existing = await this.tenantRepository.findBySlug(input.slug);
    if (existing) throw new ConflictError('Slug already in use.');

    const tenant = new Tenant({
      name: input.name,
      slug: input.slug,
    });

    const created = await this.tenantRepository.create(tenant);
  }
}

export class GetMeUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(tenantId: string, userId: string): Promise<any> {
    const user = await this.userRepository.findById(tenantId, userId);
    if (!user) throw new NotFoundError('User');
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      tenantId: user.tenantId,
      isVerified: user.isVerified,
      totpEnabled: user.totpEnabled,
      createdAt: user.createdAt,
    };
  }
}
