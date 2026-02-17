import bcrypt from 'bcrypt';
import type { IHashProvider } from '../../core/interfaces/providers/IHashProvider.js';
const SALT_ROUNDS = 10;
export class BcryptHashProvider implements IHashProvider {
  async generateHash(payload: string): Promise<string> {
    return bcrypt.hash(payload, SALT_ROUNDS);
  }
  async compareHash(payload: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(payload, hashed);
  }
}
