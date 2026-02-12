import type { FastifyInstance } from 'fastify';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { tenantMiddleware } from '../middlewares/tenant.middleware.js';
import {
  createTaskSchema,
  updateTaskSchema,
  taskFilterSchema,
  taskIdParamSchema,
  projectTaskParamsSchema,
} from '../schemas/index.js';
import {
  createTaskUseCase,
  listTasksUseCase,
  getTaskUseCase,
  updateTaskUseCase,
  deleteTaskUseCase,
} from '../../container.js';
import type { TaskStatus, TaskPriority } from '../../../core/enums/index.js';

export async function taskRoutes(app: FastifyInstance): Promise<void> {
  app.addHook('preHandler', authMiddleware);
  app.addHook('preHandler', tenantMiddleware);
  app.post('/projects/:projectId/tasks', { schema: { params: projectTaskParamsSchema, body: createTaskSchema, tags: ['Tasks'], security: [{ bearerAuth: [] }] } }, async (request, reply) => {
    const { projectId } = projectTaskParamsSchema.parse(request.params);
    const body = createTaskSchema.parse(request.body);
    const tenantId = (request as any).tenantId;
    const userId = (request as any).userId;

    const result = await createTaskUseCase.execute(tenantId, projectId, userId, body);

    return reply.status(201).send(result);
  });
  app.get('/projects/:projectId/tasks', { schema: { params: projectTaskParamsSchema, query: taskFilterSchema, tags: ['Tasks'], security: [{ bearerAuth: [] }] } }, async (request, reply) => {
    const { projectId } = projectTaskParamsSchema.parse(request.params);
    const query = taskFilterSchema.parse(request.query);
    const tenantId = (request as any).tenantId;

    const { page, limit, status, priority, assigneeId } = query;

    const result = await listTasksUseCase.execute(
      tenantId,
      projectId,
      { page, limit },
      {
        ...(status && { status: status as TaskStatus }),
        ...(priority && { priority: priority as TaskPriority }),
        ...(assigneeId && { assigneeId }),
      },
    );

    return reply.status(200).send(result);
  });
  app.get('/tasks/:id', { schema: { params: taskIdParamSchema, tags: ['Tasks'], security: [{ bearerAuth: [] }] } }, async (request, reply) => {
    const { id } = taskIdParamSchema.parse(request.params);
    const tenantId = (request as any).tenantId;

    const result = await getTaskUseCase.execute(tenantId, id);

    return reply.status(200).send(result);
  });
  app.patch('/tasks/:id', { schema: { params: taskIdParamSchema, body: updateTaskSchema, tags: ['Tasks'], security: [{ bearerAuth: [] }] } }, async (request, reply) => {
    const { id } = taskIdParamSchema.parse(request.params);
    const body = updateTaskSchema.parse(request.body);
    const tenantId = (request as any).tenantId;

    const result = await updateTaskUseCase.execute(tenantId, id, body);

    return reply.status(200).send(result);
  });
  app.delete('/tasks/:id', { schema: { params: taskIdParamSchema, tags: ['Tasks'], security: [{ bearerAuth: [] }] } }, async (request, reply) => {
    const { id } = taskIdParamSchema.parse(request.params);
    const tenantId = (request as any).tenantId;

    await deleteTaskUseCase.execute(tenantId, id);

    return reply.status(204).send();
  });
}
