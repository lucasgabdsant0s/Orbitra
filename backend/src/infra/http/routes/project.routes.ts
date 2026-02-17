import type { FastifyInstance } from 'fastify';
import {
  createProjectUseCase,
  deleteProjectUseCase,
  getProjectUseCase,
  listProjectHistoryUseCase,
  listProjectsUseCase,
  updateProjectUseCase,
} from '../../container.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { tenantMiddleware } from '../middlewares/tenant.middleware.js';
import {
  createProjectSchema,
  idParamSchema,
  paginationQuerySchema,
  projectFilterSchema,
  updateProjectSchema,
} from '../schemas/index.js';

export async function projectRoutes(app: FastifyInstance): Promise<void> {
  app.addHook('preHandler', authMiddleware);
  app.addHook('preHandler', tenantMiddleware);

  app.post(
    '/projects',
    {
      schema: {
        body: createProjectSchema,
        tags: ['Projects'],
        security: [{ bearerAuth: [] }],
      },
    },
    async (request, reply) => {
      const body = createProjectSchema.parse(request.body);
      const tenantId = (request as any).tenantId;
      const userId = (request as any).userId;
      const result = await createProjectUseCase.execute(tenantId, userId, body);
      return reply.status(201).send(result);
    },
  );

  app.get(
    '/projects',
    {
      schema: {
        query: projectFilterSchema,
        tags: ['Projects'],
        security: [{ bearerAuth: [] }],
      },
    },
    async (request, reply) => {
      const query = projectFilterSchema.parse(request.query);
      const tenantId = (request as any).tenantId;
      const { page, limit } = query;
      const result = await listProjectsUseCase.execute(
        tenantId,
        { page, limit },
        {},
      );
      return reply.status(200).send(result);
    },
  );

  app.get(
    '/projects/:id',
    {
      schema: {
        params: idParamSchema,
        tags: ['Projects'],
        security: [{ bearerAuth: [] }],
      },
    },
    async (request, reply) => {
      const { id } = idParamSchema.parse(request.params);
      const tenantId = (request as any).tenantId;
      const result = await getProjectUseCase.execute(tenantId, id);
      return reply.status(200).send(result);
    },
  );

  app.patch(
    '/projects/:id',
    {
      schema: {
        params: idParamSchema,
        body: updateProjectSchema,
        tags: ['Projects'],
        security: [{ bearerAuth: [] }],
      },
    },
    async (request, reply) => {
      const { id } = idParamSchema.parse(request.params);
      const body = updateProjectSchema.parse(request.body);
      const tenantId = (request as any).tenantId;
      const requesterId = (request as any).userId;
      const requesterRole = (request as any).userRole;

      const result = await updateProjectUseCase.execute(
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
    '/projects/:id',
    {
      schema: {
        params: idParamSchema,
        tags: ['Projects'],
        security: [{ bearerAuth: [] }],
      },
    },
    async (request, reply) => {
      const { id } = idParamSchema.parse(request.params);
      const tenantId = (request as any).tenantId;
      const userId = (request as any).userId;
      const requesterRole = (request as any).userRole;

      await deleteProjectUseCase.execute(tenantId, id, userId, requesterRole);
      return reply.status(204).send();
    },
  );
  app.get(
    '/projects/:id/history',
    {
      schema: {
        params: idParamSchema,
        query: paginationQuerySchema,
        tags: ['Projects'],
        security: [{ bearerAuth: [] }],
      },
    },
    async (request, reply) => {
      const { id } = idParamSchema.parse(request.params);
      const { page, limit } = paginationQuerySchema.parse(request.query);
      const tenantId = (request as any).tenantId;

      const result = await listProjectHistoryUseCase.execute(tenantId, id, {
        page,
        limit,
      });
      return reply.status(200).send(result);
    },
  );
}
