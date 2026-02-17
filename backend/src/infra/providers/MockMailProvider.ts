import type { IMailProvider } from '../../core/interfaces/providers/IMailProvider.js';
export class MockMailProvider implements IMailProvider {
  async sendMail(to: string, subject: string, body: string): Promise<void> {
    console.log('--- MOCK EMAIL SEND ---');
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${body}`);
    console.log('-----------------------');
  }
}
