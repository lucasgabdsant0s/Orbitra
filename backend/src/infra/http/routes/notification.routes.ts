import type { FastifyInstance } from 'fastify';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { tenantMiddleware } from '../middlewares/tenant.middleware.js';
import { paginationSchema, idParamSchema } from '../schemas/index.js';
import { listNotificationsUseCase, markNotificationReadUseCase } from '../../container.js';

export async function notificationRoutes(app: FastifyInstance): Promise<void> {
  app.addHook('preHandler', authMiddleware);
  app.addHook('preHandler', tenantMiddleware);

  app.get('/notifications', {
    schema: { query: paginationSchema, tags: ['Notifications'] }
  }, async (request, reply) => {
    const userId = (request as any).userId;
    const { page, limit } = paginationSchema.parse(request.query);
    const isRead = (request.query as any).isRead === 'true';

    const tenantId = (request as any).tenantId;

    const result = await listNotificationsUseCase.execute(tenantId, userId, { page, limit }, { isRead });
    return reply.status(200).send(result);
  });

  app.patch('/notifications/:id/read', {
    schema: { params: idParamSchema, tags: ['Notifications'] }
  }, async (request, reply) => {
    const { id } = idParamSchema.parse(request.params);
    const userId = (request as any).userId;

    const tenantId = (request as any).tenantId;

    await markNotificationReadUseCase.execute(tenantId, userId, id);
    return reply.status(204).send();
  });

  app.patch('/notifications/read-all', {
    schema: { tags: ['Notifications'] }
  }, async (request, reply) => {
    const userId = (request as any).userId;

    const tenantId = (request as any).tenantId;

    await markNotificationReadUseCase.executeReadAll(tenantId, userId);
    return reply.status(204).send();
  });
}
