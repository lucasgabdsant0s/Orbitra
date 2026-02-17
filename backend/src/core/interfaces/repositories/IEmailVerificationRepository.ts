import type { EmailVerification } from '../../entities/EmailVerification.js';
export interface IEmailVerificationRepository {
  create(verification: EmailVerification): Promise<EmailVerification>;
  findByToken(token: string): Promise<EmailVerification | null>;
  deleteByUserId(userId: string): Promise<void>;
}
