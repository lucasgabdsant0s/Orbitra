import jwt from 'jsonwebtoken';
import { ITokenPayload, ITokenProvider } from '../../../domain/interfaces/providers/ITokenProvider';

export class JwtTokenProvider implements ITokenProvider {
  private secret = process.env.JWT_SECRET!;

  generate(payload: ITokenPayload): string {
    return jwt.sign({}, this.secret, {
      subject: payload.sub,
      expiresIn: '1d',
      issuer: payload.companyId,
    });
  }

  verify(token: string): ITokenPayload {
    const decoded = jwt.verify(token, this.secret) as jwt.JwtPayload;

    return {
      sub: decoded.sub as string,
      companyId: decoded.iss as string,
    };
  }
}
