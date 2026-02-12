import type { ITenantRepository } from '../../../core/interfaces/repositories/ITenantRepository.js';
import type { IUserRepository } from '../../../core/interfaces/repositories/IUserRepository.js';
import type { IHashProvider } from '../../../core/interfaces/providers/IHashProvider.js';
import type { ITokenProvider } from '../../../core/interfaces/providers/ITokenProvider.js';
import type { IRefreshTokenRepository } from '../../../core/interfaces/repositories/IRefreshTokenRepository.js';
import { Tenant } from '../../../core/entities/Tenant.js';
import { User } from '../../../core/entities/User.js';
import { Role } from '../../../core/enums/index.js';
import { ConflictError } from '../../../core/exceptions/index.js';
import { generateUniqueSlug } from '../../../shared/utils.js';
import type { RegisterTenantInput, RegisterTenantOutput } from '../../dtos/index.js';

export class RegisterTenantUseCase {
  constructor(
    private tenantRepository: ITenantRepository,
    private userRepository: IUserRepository,
    private hashProvider: IHashProvider,
    private tokenProvider: ITokenProvider,
    private refreshTokenRepository: IRefreshTokenRepository,
  ) {}

  async execute(input: RegisterTenantInput): Promise<RegisterTenantOutput> {
    const slug = generateUniqueSlug(input.tenantName);
    const existingTenant = await this.tenantRepository.findBySlug(slug);
    if (existingTenant) {
      throw new ConflictError('Not possible to create the organization. Try again later.');
    }
    const tenant = await this.tenantRepository.create(
      new Tenant({ name: input.tenantName, slug }),
    );
    const existingUser = await this.userRepository.findByEmail(tenant.id!, input.email);
    if (existingUser) {
      throw new ConflictError('This email is already registered.');
    }
    const passwordHash = await this.hashProvider.generateHash(input.password);
    const user = await this.userRepository.create(
      new User({
        tenantId: tenant.id!,
        email: input.email,
        passwordHash,
        name: input.userName,
        role: Role.OWNER,
      }),
    );
    const tokenPayload = {
      sub: user.id!,
      tenantId: tenant.id!,
      role: Role.OWNER,
    };

    const accessToken = this.tokenProvider.generateAccessToken(tokenPayload);
    const refreshToken = this.tokenProvider.generateRefreshToken(tokenPayload);
    await this.refreshTokenRepository.create({
      token: refreshToken,
      userId: user.id!,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    return {
      tenant: { id: tenant.id!, name: tenant.name, slug: tenant.slug },
      user: { id: user.id!, name: user.name, email: user.email, role: user.role },
      accessToken,
      refreshToken,
    };
  }
}
