import type { FastifyInstance } from 'fastify';
import { getDashboardStatsUseCase } from '../../container.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { tenantMiddleware } from '../middlewares/tenant.middleware.js';
export async function dashboardRoutes(app: FastifyInstance): Promise<void> {
  app.addHook('preHandler', authMiddleware);
  app.addHook('preHandler', tenantMiddleware);
  app.get(
    '/dashboard/stats',
    { schema: { tags: ['Dashboard'], security: [{ bearerAuth: [] }] } },
    async (request, reply) => {
      const tenantId = (request as any).tenantId;
      const result = await getDashboardStatsUseCase.execute(tenantId);
      return reply.status(200).send(result);
    },
  );
}
