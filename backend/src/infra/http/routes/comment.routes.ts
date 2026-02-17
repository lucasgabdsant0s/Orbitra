import type { FastifyInstance } from 'fastify';
import {
  createCommentUseCase,
  deleteCommentUseCase,
  listCommentsUseCase,
  updateCommentUseCase,
} from '../../container.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { rbacMiddleware } from '../middlewares/rbac.middleware.js';
import { tenantMiddleware } from '../middlewares/tenant.middleware.js';
import {
  createCommentSchema,
  idParamSchema,
  paginationSchema,
  projectIdParamSchema,
  updateCommentSchema,
} from '../schemas/index.js';

export async function commentRoutes(app: FastifyInstance): Promise<void> {
  app.addHook('preHandler', authMiddleware);
  app.addHook('preHandler', tenantMiddleware);

  app.post(
    '/projects/:projectId/comments',
    {
      schema: {
        body: createCommentSchema,
        params: projectIdParamSchema,
        tags: ['Comments'],
      },
      preHandler: [rbacMiddleware(['OWNER', 'ADMIN', 'MEMBER'])],
    },
    async (request, reply) => {
      const { projectId } = projectIdParamSchema.parse(request.params);
      const body = createCommentSchema.parse(request.body);
      const tenantId = (request as any).tenantId;
      const userId = (request as any).userId;
      const userRole = (request as any).userRole;

      const result = await createCommentUseCase.execute(
        tenantId,
        projectId,
        userId,
        userRole,
        body,
      );
      return reply.status(201).send(result);
    },
  );

  app.get(
    '/projects/:projectId/comments',
    {
      schema: {
        params: projectIdParamSchema,
        query: paginationSchema,
        tags: ['Comments'],
      },
      preHandler: [rbacMiddleware(['OWNER', 'ADMIN', 'MEMBER', 'GUEST'])],
    },
    async (request, reply) => {
      const { projectId } = projectIdParamSchema.parse(request.params);
      const { page, limit } = paginationSchema.parse(request.query);
      const parentId = (request.query as any).parentId;
      const tenantId = (request as any).tenantId;
      const result = await listCommentsUseCase.execute(
        tenantId,
        projectId,
        { page, limit },
        { parentId },
      );
      return reply.status(200).send(result);
    },
  );

  app.patch(
    '/comments/:id',
    {
      schema: {
        params: idParamSchema,
        body: updateCommentSchema,
        tags: ['Comments'],
      },
    },
    async (request, reply) => {
      const { id } = idParamSchema.parse(request.params);
      const { text } = updateCommentSchema.parse(request.body);
      const userId = (request as any).userId;
      const tenantId = (request as any).tenantId;
      const result = await updateCommentUseCase.execute(tenantId, userId, id, text);
      return reply.status(200).send(result);
    },
  );

  app.delete(
    '/comments/:id',
    {
      schema: { params: idParamSchema, tags: ['Comments'] },
    },
    async (request, reply) => {
      const { id } = idParamSchema.parse(request.params);
      const userId = (request as any).userId;
      const userRole = (request as any).userRole;
      const tenantId = (request as any).tenantId;
      await deleteCommentUseCase.execute(tenantId, userId, userRole, id);
      return reply.status(204).send();
    },
  );
}
