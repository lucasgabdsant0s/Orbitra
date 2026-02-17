import type { FastifyInstance } from 'fastify';
import {
  deleteUserUseCase,
  getUserUseCase,
  listUsersUseCase,
  updateUserUseCase,
} from '../../container.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { tenantMiddleware } from '../middlewares/tenant.middleware.js';
import { idParamSchema, paginationSchema, updateUserSchema } from '../schemas/index.js';
export async function userRoutes(app: FastifyInstance): Promise<void> {
  app.addHook('preHandler', authMiddleware);
  app.addHook('preHandler', tenantMiddleware);
  app.get(
    '/users',
    { schema: { query: paginationSchema, tags: ['Users'], security: [{ bearerAuth: [] }] } },
    async (request, reply) => {
      const query = paginationSchema.parse(request.query);
      const tenantId = (request as any).tenantId;
      const result = await listUsersUseCase.execute(tenantId, query);
      return reply.status(200).send(result);
    },
  );
  app.get(
    '/users/:id',
    { schema: { params: idParamSchema, tags: ['Users'], security: [{ bearerAuth: [] }] } },
    async (request, reply) => {
      const { id } = idParamSchema.parse(request.params);
      const tenantId = (request as any).tenantId;
      const result = await getUserUseCase.execute(tenantId, id);
      return reply.status(200).send(result);
    },
  );
  app.patch(
    '/users/:id',
    {
      schema: {
        params: idParamSchema,
        body: updateUserSchema,
        tags: ['Users'],
        security: [{ bearerAuth: [] }],
      },
    },
    async (request, reply) => {
      const { id } = idParamSchema.parse(request.params);
      const body = updateUserSchema.parse(request.body);
      const tenantId = (request as any).tenantId;
      const requesterId = (request as any).userId;
      const requesterRole = (request as any).userRole;
      const result = await updateUserUseCase.execute(
        tenantId,
        id,
        requesterId,
        requesterRole,
        body,
      );
      return reply.status(200).send(result);
    },
  );
  app.delete(
    '/users/:id',
    { schema: { params: idParamSchema, tags: ['Users'], security: [{ bearerAuth: [] }] } },
    async (request, reply) => {
      const { id } = idParamSchema.parse(request.params);
      const tenantId = (request as any).tenantId;
      const requesterRole = (request as any).userRole;
      await deleteUserUseCase.execute(tenantId, id, requesterRole);
      return reply.status(204).send();
    },
  );
  app.get(
    '/users/me',
    { schema: { tags: ['Users'], security: [{ bearerAuth: [] }] } },
    async (request, reply) => {
      const tenantId = (request as any).tenantId;
      const userId = (request as any).userId;
      const result = await getUserUseCase.execute(tenantId, userId);
      return reply.status(200).send(result);
    },
  );
}
