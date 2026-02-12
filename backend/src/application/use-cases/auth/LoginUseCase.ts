import type { IUserRepository } from '../../../core/interfaces/repositories/IUserRepository.js';
import type { IHashProvider } from '../../../core/interfaces/providers/IHashProvider.js';
import type { ITokenProvider } from '../../../core/interfaces/providers/ITokenProvider.js';
import type { IRefreshTokenRepository } from '../../../core/interfaces/repositories/IRefreshTokenRepository.js';
import { UnauthorizedError } from '../../../core/exceptions/index.js';
import type { LoginInput, LoginOutput } from '../../dtos/index.js';

export class LoginUseCase {
  constructor(
    private userRepository: IUserRepository,
    private hashProvider: IHashProvider,
    private tokenProvider: ITokenProvider,
    private refreshTokenRepository: IRefreshTokenRepository,
  ) {}

  async execute(input: LoginInput): Promise<LoginOutput> {
    const user = await this.userRepository.findByEmailGlobal(input.email);

    if (!user || !user.isActive) {
      throw new UnauthorizedError('Invalid credentials.');
    }
    const passwordMatched = await this.hashProvider.compareHash(
      input.password,
      user.passwordHash,
    );

    if (!passwordMatched) {
      throw new UnauthorizedError('Invalid credentials.');
    }
    const tokenPayload = {
      sub: user.id!,
      tenantId: user.tenantId,
      role: user.role,
    };

    const accessToken = this.tokenProvider.generateAccessToken(tokenPayload);
    const refreshToken = this.tokenProvider.generateRefreshToken(tokenPayload);
    await this.refreshTokenRepository.create({
      token: refreshToken,
      userId: user.id!,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    return {
      user: {
        id: user.id!,
        name: user.name,
        email: user.email,
        role: user.role,
        tenantId: user.tenantId,
      },
      accessToken,
      refreshToken,
    };
  }
}
