import type {
  IRefreshTokenRepository,
  RefreshTokenData,
} from '../../../core/interfaces/repositories/IRefreshTokenRepository.js';
import { prisma } from '../../database/prisma.js';
export class PrismaRefreshTokenRepository implements IRefreshTokenRepository {
  async create(data: RefreshTokenData): Promise<RefreshTokenData> {
    const created = await prisma.refreshToken.create({
      data: {
        token: data.token,
        expiresAt: data.expiresAt,
        userId: data.userId,
      },
    });
    return {
      id: created.id,
      token: created.token,
      expiresAt: created.expiresAt,
      userId: created.userId,
      createdAt: created.createdAt,
    };
  }
  async findByToken(token: string): Promise<RefreshTokenData | null> {
    const record = await prisma.refreshToken.findUnique({ where: { token } });
    if (!record) return null;
    return {
      id: record.id,
      token: record.token,
      expiresAt: record.expiresAt,
      userId: record.userId,
      createdAt: record.createdAt,
    };
  }
  async deleteByToken(token: string): Promise<void> {
    await prisma.refreshToken.delete({ where: { token } });
  }
  async deleteAllByUserId(userId: string): Promise<void> {
    await prisma.refreshToken.deleteMany({ where: { userId } });
  }
}
