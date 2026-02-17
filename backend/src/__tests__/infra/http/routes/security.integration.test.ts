import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildServer } from '../../../../infra/http/server.js';
import { createTestTenant, createTestUser, generateAuthToken } from '../../../test-utils.js';
describe('Security Integration Tests', () => {
  let app: any;
  beforeAll(async () => {
    app = buildServer();
    await app.ready();
  });
  afterAll(async () => {
    await app.close();
  });
  describe('2FA Flows', () => {
    it('should setup 2FA for a user', async () => {
      const tenant = await createTestTenant('Security Tenant');
      const user = await createTestUser(tenant.id, 'MEMBER');
      const token = generateAuthToken(user.id, tenant.id, user.role);
      const response = await request(app.server)
        .post('/auth/2fa/setup')
        .set('Authorization', `Bearer ${token}`)
        .set('x-tenant-id', tenant.id);
      if (response.status !== 200) {
        console.error('[/auth/2fa/setup] unexpected response', {
          status: response.status,
          body: response.body,
        });
      }
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('qrCodeUrl');
      expect(response.body).toHaveProperty('secret');
    });
  });
});
