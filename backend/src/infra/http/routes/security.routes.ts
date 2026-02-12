import type { FastifyInstance } from 'fastify';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { tenantMiddleware } from '../middlewares/tenant.middleware.js';
import { verify2FASchema, tokenParamSchema } from '../schemas/index.js';
import { setup2FAUseCase, verify2FAUseCase, verifyEmailUseCase } from '../../container.js';

export async function securityRoutes(app: FastifyInstance): Promise<void> {
  // 2FA Routes
  app.post('/auth/2fa/setup', {
    preHandler: [authMiddleware, tenantMiddleware],
    schema: { tags: ['Security'] }
  }, async (request, reply) => {
    const userId = (request as any).userId;
    const tenantId = (request as any).tenantId;

    const result = await setup2FAUseCase.execute(tenantId, userId);
    return reply.status(200).send(result);
  });

  app.post('/auth/2fa/verify', {
    preHandler: [authMiddleware, tenantMiddleware],
    schema: { body: verify2FASchema, tags: ['Security'] }
  }, async (request, reply) => {
    const userId = (request as any).userId;
    const tenantId = (request as any).tenantId;
    const { token } = verify2FASchema.parse(request.body);

    await verify2FAUseCase.execute(tenantId, userId, token);
    return reply.status(204).send();
  });
  app.get('/auth/verify-email/:token', {
    schema: { params: tokenParamSchema, tags: ['Security'] }
  }, async (request, reply) => {
    const { token } = tokenParamSchema.parse(request.params);

    await verifyEmailUseCase.execute(token);
    return reply.status(204).send();
  });
}
