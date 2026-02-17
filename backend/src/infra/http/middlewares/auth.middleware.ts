import type { FastifyReply, FastifyRequest } from 'fastify';
import { UnauthorizedError } from '../../../core/exceptions/index.js';
import { type TenantStore, tenantContext } from '../../context/tenant-context.js';
import { JwtTokenProvider } from '../../providers/JwtTokenProvider.js';
const tokenProvider = new JwtTokenProvider();
export async function authMiddleware(request: FastifyRequest, _reply: FastifyReply): Promise<void> {
  const authHeader = request.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthorizedError('Token not provided.');
  }
  const token = authHeader.split(' ')[1];
  try {
    const payload = tokenProvider.verify(token);
    (request as any).userId = payload.sub;
    (request as any).tenantId = payload.tenantId;
    (request as any).userRole = payload.role;
    const store: TenantStore = {
      tenantId: payload.tenantId,
      userId: payload.sub,
      userRole: payload.role,
    };
    tenantContext.enterWith(store);
  } catch {
    throw new UnauthorizedError('Invalid or expired token.');
  }
}
