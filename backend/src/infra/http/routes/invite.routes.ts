import type { FastifyInstance } from 'fastify';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { tenantMiddleware } from '../middlewares/tenant.middleware.js';
import {
  createInviteSchema,
  acceptInviteSchema,
  tokenParamSchema,
  idParamSchema,
} from '../schemas/index.js';
import {
  createInviteUseCase,
  verifyInviteUseCase,
  acceptInviteUseCase,
} from '../../container.js';

export async function inviteRoutes(app: FastifyInstance): Promise<void> {
  app.post('/tenants/:tenantId/invites', {
    preHandler: [authMiddleware, tenantMiddleware],
    schema: { body: createInviteSchema, tags: ['Invites'] }
  }, async (request, reply) => {
    const tenantId = (request as any).tenantId;
    const userRole = (request as any).userRole;
    const body = createInviteSchema.parse(request.body);

    const result = await createInviteUseCase.execute(tenantId, userRole, body);
    return reply.status(201).send(result);
  });

  app.get('/tenants/:tenantId/invites/:token', {
    schema: { params: tokenParamSchema.merge(idParamSchema.omit({ id: true }).extend({ tenantId: idParamSchema.shape.id })), tags: ['Invites'] }
  }, async (request, reply) => {
    const { token } = tokenParamSchema.parse(request.params);
    const { tenantId } = request.params as any;
    const result = await verifyInviteUseCase.execute(tenantId, token);
    return reply.status(200).send(result);
  });

  app.post('/tenants/:tenantId/invites/:token/accept', {
    schema: { params: tokenParamSchema.merge(idParamSchema.omit({ id: true }).extend({ tenantId: idParamSchema.shape.id })), body: acceptInviteSchema, tags: ['Invites'] }
  }, async (request, reply) => {
    const { token } = tokenParamSchema.parse(request.params);
    const { tenantId } = request.params as any;
    const { name, password } = acceptInviteSchema.parse(request.body);

    await acceptInviteUseCase.execute(tenantId, token, password, name);
    return reply.status(204).send();
  });
}
