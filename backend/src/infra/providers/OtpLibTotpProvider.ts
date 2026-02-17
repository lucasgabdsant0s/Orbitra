import { generateSecret, generateSync, generateURI, verifySync } from 'otplib';
import type { TotpProvider } from '../../core/interfaces/providers/ITotpProvider.js';
export class OtpLibTotpProvider implements TotpProvider {
  generateSecret(label: string, issuer: string): { secret: string; otpauth_url: string } {
    const secret = generateSecret();
    const otpauth_url = generateURI({
      secret,
      label,
      issuer,
    });
    return { secret, otpauth_url };
  }
  generateToken(secret: string): string {
    return generateSync({ secret });
  }
  verifyToken(secret: string, token: string): boolean {
    const result = verifySync({ secret, token });
    return result.valid;
  }
}
