import { prisma } from '../../database/prisma.js';
import type { IEmailVerificationRepository } from '../../../core/interfaces/repositories/IEmailVerificationRepository.js';
import { EmailVerification } from '../../../core/entities/EmailVerification.js';

export class PrismaEmailVerificationRepository implements IEmailVerificationRepository {
  async create(verification: EmailVerification): Promise<EmailVerification> {
    const created = await prisma.emailVerification.create({
      data: {
        userId: verification.userId,
        token: verification.token,
        expiresAt: verification.expiresAt,
      },
    });

    return this.toDomain(created);
  }

  async findByToken(token: string): Promise<EmailVerification | null> {
    const record = await prisma.emailVerification.findUnique({
      where: { token },
    });
    return record ? this.toDomain(record) : null;
  }

  async deleteByUserId(userId: string): Promise<void> {
    await prisma.emailVerification.deleteMany({
      where: { userId },
    });
  }

  private toDomain(record: any): EmailVerification {
    return new EmailVerification({
      id: record.id,
      userId: record.userId,
      token: record.token,
      expiresAt: record.expiresAt,
      createdAt: record.createdAt,
    });
  }
}
