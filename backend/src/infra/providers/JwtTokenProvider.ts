import jwt from 'jsonwebtoken';
import type { ITokenProvider } from '../../core/interfaces/providers/ITokenProvider.js';
import type { TokenPayload } from '../../core/types/index.js';
import { env } from '../config/env.js';

export class JwtTokenProvider implements ITokenProvider {
  generateAccessToken(payload: TokenPayload): string {
    return jwt.sign(
      { tenantId: payload.tenantId, role: payload.role },
      env.JWT_SECRET,
      {
        subject: payload.sub,
        expiresIn: env.JWT_EXPIRES_IN,
      } as jwt.SignOptions,
    );
  }

  generateRefreshToken(payload: TokenPayload): string {
    return jwt.sign(
      { tenantId: payload.tenantId, role: payload.role },
      env.JWT_REFRESH_SECRET,
      {
        subject: payload.sub,
        expiresIn: env.JWT_REFRESH_EXPIRES_IN,
      } as jwt.SignOptions,
    );
  }

  verify(token: string): TokenPayload {
    const decoded = jwt.verify(token, env.JWT_SECRET) as jwt.JwtPayload;
    return {
      sub: decoded.sub as string,
      tenantId: decoded.tenantId as string,
      role: decoded.role as string,
    };
  }

  verifyRefreshToken(token: string): TokenPayload {
    const decoded = jwt.verify(token, env.JWT_REFRESH_SECRET) as jwt.JwtPayload;
    return {
      sub: decoded.sub as string,
      tenantId: decoded.tenantId as string,
      role: decoded.role as string,
    };
  }
}
