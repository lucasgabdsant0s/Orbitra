import type { TokenPayload } from '../../types/index.js';
export interface ITokenProvider {
  generateAccessToken(payload: TokenPayload): string;
  generateRefreshToken(payload: TokenPayload): string;
  verify(token: string): TokenPayload;
}
