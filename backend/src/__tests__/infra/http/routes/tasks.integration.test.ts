import request from 'supertest';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { buildServer } from '../../../../infra/http/server.js';
import { prisma } from '../../../../infra/database/prisma.js';
import { createTestTenant, createTestUser, generateAuthToken } from '../../../test-utils.js';

describe('Tasks Integration Tests', () => {
  let app: any;

  beforeAll(async () => {
    app = buildServer();
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('CRUD /tasks', () => {
    it('should create, list, update and delete tasks in a project', async () => {
      const tenant = await createTestTenant('Task Tenant');
      const user = await createTestUser(tenant.id, 'ADMIN');
      const token = generateAuthToken(user.id, tenant.id, user.role);

      const project = await prisma.project.create({
        data: {
          tenantId: tenant.id,
          name: 'Task Project',
          status: 'ACTIVE',
          createdBy: user.id,
        },
      });

      const createResponse = await request(app.server)
        .post(`/projects/${project.id}/tasks`)
        .set('Authorization', `Bearer ${token}`)
        .set('x-tenant-id', tenant.id)
        .send({
          title: 'Integrate Tests',
          priority: 'HIGH',
        });

      if (createResponse.status !== 201) {
        console.error('[/projects/:projectId/tasks POST] unexpected response', {
          status: createResponse.status,
          body: createResponse.body,
        });
      }

      expect(createResponse.status).toBe(201);
      expect(createResponse.body.title).toBe('Integrate Tests');
      expect(createResponse.body.priority).toBe('HIGH');

      const taskId = createResponse.body.id;

      const listResponse = await request(app.server)
        .get(`/projects/${project.id}/tasks`)
        .set('Authorization', `Bearer ${token}`)
        .set('x-tenant-id', tenant.id);

      expect(listResponse.status).toBe(200);
      expect(listResponse.body.data).toHaveLength(1);

      const updateResponse = await request(app.server)
        .patch(`/tasks/${taskId}`)
        .set('Authorization', `Bearer ${token}`)
        .set('x-tenant-id', tenant.id)
        .send({ status: 'DONE' });

      expect(updateResponse.status).toBe(200);
      expect(updateResponse.body.status).toBe('DONE');

      const deleteResponse = await request(app.server)
        .delete(`/tasks/${taskId}`)
        .set('Authorization', `Bearer ${token}`)
        .set('x-tenant-id', tenant.id);

      expect(deleteResponse.status).toBe(204);
    });
  });
});
