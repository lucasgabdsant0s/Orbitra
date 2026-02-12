import Fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import fastifySwagger from '@fastify/swagger';
import apiReference from '@scalar/fastify-api-reference';
import { jsonSchemaTransform, serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import { errorHandler } from './middlewares/error-handler.js';
import { authRoutes } from './routes/auth.routes.js';
import { userRoutes } from './routes/user.routes.js';
import { projectRoutes } from './routes/project.routes.js';
import { taskRoutes } from './routes/task.routes.js';
import { tenantRoutes } from './routes/tenant.routes.js';
import { commentRoutes } from './routes/comment.routes.js';
import { inviteRoutes } from './routes/invite.routes.js';
import { notificationRoutes } from './routes/notification.routes.js';
import { securityRoutes } from './routes/security.routes.js';
import { auditLogRoutes } from './routes/audit-log.routes.js';
import { ZodError } from 'zod';
import { getTenantContextSafe } from '../context/tenant-context.js';

export function buildServer() {
  const app = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
        options: {
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname',
        },
      },
      mixin: () => {
        const ctx = getTenantContextSafe();
        return {
          tenantId: ctx?.tenantId,
          userId: ctx?.userId,
        };
      },
    } as any,
  });
  app.register(cors, {
    origin: true,
    credentials: true,
  });
  app.register(rateLimit, {
    max: 100,
    timeWindow: '1 minute',
    allowList: ['127.0.0.1'],
  });
  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  app.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Orbitra API',
        description: 'Multi-tenant Project Management SaaS API documentation.',
        version: '1.0.0',
      },
      tags: [
        { name: 'Auth', description: 'Authentication and Tenant Management' },
        { name: 'Users', description: 'User management' },
        { name: 'Projects', description: 'Project management' },
        { name: 'Tasks', description: 'Task management' },
        { name: 'Comments', description: 'Project discussion comments' },
        { name: 'Invites', description: 'Tenant invitations' },
        { name: 'Notifications', description: 'In-app notifications' },
        { name: 'Security', description: '2FA and security settings' },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
    transform: jsonSchemaTransform,
  });

  app.register(apiReference, {
    routePrefix: '/docs',
    configuration: {
      theme: 'deepSpace',
      metaData: {
        title: 'Orbitra API Docs',
      },
    },
  });
  app.setErrorHandler((error: any, request, reply) => {
    if (error instanceof ZodError) {
      const formattedErrors: Record<string, string[]> = {};
      for (const issue of error.issues) {
        const path = issue.path.join('.') || 'body';
        if (!formattedErrors[path]) formattedErrors[path] = [];
        formattedErrors[path].push(issue.message);
      }

      return reply.status(422).send({
        statusCode: 422,
        error: 'Validation Error',
        message: 'Dados de entrada inválidos.',
        errors: formattedErrors,
      });
    }
    return errorHandler(error, request, reply);
  });
  app.register(authRoutes);
  app.register(userRoutes);
  app.register(projectRoutes);
  app.register(taskRoutes);
  app.register(tenantRoutes);
  app.register(commentRoutes);
  app.register(inviteRoutes);
  app.register(notificationRoutes);
  app.register(securityRoutes);
  app.register(auditLogRoutes);

  app.get('/health', async () => {
    return { status: 'ok', timestamp: new Date().toISOString() };
  });

  return app;
}
