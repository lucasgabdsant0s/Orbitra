import type { FastifyRequest, FastifyReply } from 'fastify';
import { UnauthorizedError } from '../../../core/exceptions/index.js';
import { getTenantContextSafe } from '../../context/tenant-context.js';

export async function tenantMiddleware(
  request: FastifyRequest,
  _reply: FastifyReply,
): Promise<void> {
  const requestTenantId = (request as any).tenantId;
  const contextStore = getTenantContextSafe();

  if (!requestTenantId || !contextStore?.tenantId) {
    throw new UnauthorizedError('Tenant not identified.');
  }
  if (requestTenantId !== contextStore.tenantId) {
    throw new UnauthorizedError('Tenant context inconsistent.');
  }
  request.log.info({ tenantId: requestTenantId }, 'Tenant context verified');
}
