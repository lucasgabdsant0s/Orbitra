import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildServer } from '../../../../infra/http/server.js';
import { createTestTenant, createTestUser, generateAuthToken } from '../../../test-utils.js';
describe('Tenants Integration Tests', () => {
  let app;
  beforeAll(async () => {
    app = buildServer();
    await app.ready();
  });
  afterAll(async () => {
    await app.close();
  });
  describe('DELETE /tenants/me', () => {
    it('should allow owner to delete their tenant', async () => {
      const tenant = await createTestTenant('To Delete');
      const owner = await createTestUser(tenant.id, 'OWNER');
      const token = generateAuthToken(owner.id, tenant.id, owner.role);
      const response = await request(app.server)
        .delete('/tenants/me')
        .set('Authorization', `Bearer ${token}`)
        .set('x-tenant-id', tenant.id);
      if (response.status !== 204) {
        console.error('[/tenants/me delete owner] unexpected response', {
          status: response.status,
          body: response.body,
        });
      }
      expect(response.status).toBe(204);
    });
    it('should fail with 403 if user is not OWNER', async () => {
      const tenant = await createTestTenant('Secure Tenant');
      const admin = await createTestUser(tenant.id, 'ADMIN');
      const token = generateAuthToken(admin.id, tenant.id, admin.role);
      const response = await request(app.server)
        .delete('/tenants/me')
        .set('Authorization', `Bearer ${token}`)
        .set('x-tenant-id', tenant.id);
      expect(response.status).toBe(403);
    });
    it('should require authentication', async () => {
      const tenant = await createTestTenant('No Auth Tenant');
      await createTestUser(tenant.id, 'OWNER');
      const response = await request(app.server)
        .delete('/tenants/me')
        .set('x-tenant-id', tenant.id);
      expect(response.status).toBe(401);
    });
  });
});
