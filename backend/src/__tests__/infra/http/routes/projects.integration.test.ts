import request from 'supertest';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { buildServer } from '../../../../infra/http/server.js';
import { createTestTenant, createTestUser, generateAuthToken } from '../../../test-utils.js';

describe('Projects Integration Tests', () => {
  let app: any;

  beforeAll(async () => {
    app = buildServer();
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('CRUD /projects', () => {
    it('should create, read, update, and delete a project within a tenant', async () => {
      const tenant = await createTestTenant('Project Tenant');
      const user = await createTestUser(tenant.id, 'ADMIN');
      const token = generateAuthToken(user.id, tenant.id, user.role);

      const createResponse = await request(app.server)
        .post('/projects')
        .set('Authorization', `Bearer ${token}`)
        .set('x-tenant-id', tenant.id)
        .send({
          name: 'Integration Project',
          description: 'A project for integration testing',
        });

      if (createResponse.status !== 201) {
        console.error('[/projects POST] unexpected response', {
          status: createResponse.status,
          body: createResponse.body,
        });
      }

      expect(createResponse.status).toBe(201);
      expect(createResponse.body.name).toBe('Integration Project');

      const projectId = createResponse.body.id;

      const getResponse = await request(app.server)
        .get(`/projects/${projectId}`)
        .set('Authorization', `Bearer ${token}`)
        .set('x-tenant-id', tenant.id);

      expect(getResponse.status).toBe(200);
      expect(getResponse.body.id).toBe(projectId);

      const updateResponse = await request(app.server)
        .patch(`/projects/${projectId}`)
        .set('Authorization', `Bearer ${token}`)
        .set('x-tenant-id', tenant.id)
        .send({ name: 'Updated Project Name' });

      expect(updateResponse.status).toBe(200);
      expect(updateResponse.body.name).toBe('Updated Project Name');

      const listResponse = await request(app.server)
        .get('/projects')
        .set('Authorization', `Bearer ${token}`)
        .set('x-tenant-id', tenant.id);

      expect(listResponse.status).toBe(200);
      expect(listResponse.body.data).toHaveLength(1);

      const deleteResponse = await request(app.server)
        .delete(`/projects/${projectId}`)
        .set('Authorization', `Bearer ${token}`)
        .set('x-tenant-id', tenant.id);

      expect(deleteResponse.status).toBe(204);
    });

    it('should enforce tenant isolation', async () => {
      const tenant1 = await createTestTenant('Tenant 1');
      const user1 = await createTestUser(tenant1.id, 'ADMIN');
      const token1 = generateAuthToken(user1.id, tenant1.id, user1.role);

      const tenant2 = await createTestTenant('Tenant 2');
      const user2 = await createTestUser(tenant2.id, 'ADMIN');
      const token2 = generateAuthToken(user2.id, tenant2.id, user2.role);

      const createResponse = await request(app.server)
        .post('/projects')
        .set('Authorization', `Bearer ${token1}`)
        .set('x-tenant-id', tenant1.id)
        .send({ name: 'T1 Project' });

      expect(createResponse.status).toBe(201);

      const listResponse = await request(app.server)
        .get('/projects')
        .set('Authorization', `Bearer ${token2}`)
        .set('x-tenant-id', tenant2.id);

      expect(listResponse.status).toBe(200);
      const t1Project = listResponse.body.data.find((p: any) => p.name === 'T1 Project');
      expect(t1Project).toBeUndefined();
    });
  });
});
