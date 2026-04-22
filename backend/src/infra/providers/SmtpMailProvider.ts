import nodemailer from 'nodemailer';
import type { IMailProvider } from '../../core/interfaces/providers/IMailProvider.js';
import { env } from '../config/env.js';

export class SmtpMailProvider implements IMailProvider {
  private transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT ?? 587,
    secure: (env.SMTP_PORT ?? 587) === 465,
    auth:
      env.SMTP_USER && env.SMTP_PASS
        ? {
            user: env.SMTP_USER,
            pass: env.SMTP_PASS,
          }
        : undefined,
  });

  async sendMail(to: string, subject: string, body: string): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: env.SMTP_FROM ?? env.SMTP_USER ?? 'no-reply@orbitra.local',
        to,
        subject,
        text: body,
      });
    } catch (error) {
      console.error('[SMTP Error] Failed to send email:', error);
      throw error;
    }
  }
}
