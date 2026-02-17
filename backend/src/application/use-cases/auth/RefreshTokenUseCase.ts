import { UnauthorizedError } from '../../../core/exceptions/index.js';
import type { IRefreshTokenRepository } from '../../../core/interfaces/repositories/IRefreshTokenRepository.js';
import type { IUserRepository } from '../../../core/interfaces/repositories/IUserRepository.js';
import type { JwtTokenProvider } from '../../../infra/providers/JwtTokenProvider.js';
import type { RefreshTokenInput, RefreshTokenOutput } from '../../dtos/index.js';
export class RefreshTokenUseCase {
  constructor(
    private refreshTokenRepository: IRefreshTokenRepository,
    private userRepository: IUserRepository,
    private tokenProvider: JwtTokenProvider,
  ) {}
  async execute(input: RefreshTokenInput): Promise<RefreshTokenOutput> {
    const storedToken = await this.refreshTokenRepository.findByToken(input.refreshToken);
    if (!storedToken) {
      throw new UnauthorizedError('Refresh token invalid.');
    }
    if (storedToken.expiresAt < new Date()) {
      await this.refreshTokenRepository.deleteByToken(input.refreshToken);
      throw new UnauthorizedError('Refresh token expired.');
    }
    let payload;
    try {
      payload = this.tokenProvider.verifyRefreshToken(input.refreshToken);
    } catch {
      await this.refreshTokenRepository.deleteByToken(input.refreshToken);
      throw new UnauthorizedError('Refresh token invalid.');
    }
    const user = await this.userRepository.findById(payload.tenantId, payload.sub);
    if (!user || !user.isActive) {
      throw new UnauthorizedError('User not found or inactive.');
    }
    await this.refreshTokenRepository.deleteByToken(input.refreshToken);
    const newTokenPayload = {
      sub: user.id!,
      tenantId: user.tenantId,
      role: user.role,
    };
    const newAccessToken = this.tokenProvider.generateAccessToken(newTokenPayload);
    const newRefreshToken = this.tokenProvider.generateRefreshToken(newTokenPayload);
    await this.refreshTokenRepository.create({
      token: newRefreshToken,
      userId: user.id!,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };
  }
}
