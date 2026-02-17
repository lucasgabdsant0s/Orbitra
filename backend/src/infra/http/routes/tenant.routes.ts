import type { FastifyInstance } from 'fastify';
import {
  deleteTenantUseCase,
  getTenantUseCase,
  listTenantsUseCase,
  updateTenantUseCase,
} from '../../container.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { tenantMiddleware } from '../middlewares/tenant.middleware.js';
import { createTenantSchema } from '../schemas/index.js';
export async function tenantRoutes(app: FastifyInstance): Promise<void> {
  app.addHook('preHandler', authMiddleware);
  app.addHook('preHandler', tenantMiddleware);
  app.patch(
    '/tenants/me',
    {
      schema: {
        body: createTenantSchema.partial(),
        tags: ['Tenants'],
        security: [{ bearerAuth: [] }],
      },
    },
    async (request, reply) => {
      const tenantId = (request as any).tenantId;
      const body = createTenantSchema.partial().parse(request.body);
      const result = await updateTenantUseCase.execute(tenantId, body);
      return reply.status(200).send(result);
    },
  );
  app.delete(
    '/tenants/me',
    { schema: { tags: ['Auth'], security: [{ bearerAuth: [] }] } },
    async (request, reply) => {
      const tenantId = (request as any).tenantId;
      const requesterRole = (request as any).userRole;
      await deleteTenantUseCase.execute(tenantId, requesterRole);
      return reply.status(204).send();
    },
  );
  app.get(
    '/tenants/me',
    { schema: { tags: ['Tenants'], security: [{ bearerAuth: [] }] } },
    async (request, reply) => {
      const tenantId = (request as any).tenantId;
      const result = await getTenantUseCase.execute(tenantId);
      return reply.status(200).send(result);
    },
  );
  app.get(
    '/tenants',
    { schema: { tags: ['Tenants'], security: [{ bearerAuth: [] }] } },
    async (_request, reply) => {
      const result = await listTenantsUseCase.execute();
      return reply.status(200).send(result);
    },
  );
}
