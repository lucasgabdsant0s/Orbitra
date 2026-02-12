import { prisma } from '../infra/database/prisma.js';
import { BcryptHashProvider } from '../infra/providers/BcryptHashProvider.js';
import { JwtTokenProvider } from '../infra/providers/JwtTokenProvider.js';

const hashProvider = new BcryptHashProvider();
const tokenProvider = new JwtTokenProvider();

type TestRole = 'OWNER' | 'ADMIN' | 'MEMBER' | 'GUEST';

export async function createTestTenant(name = 'Test Tenant') {
  return await prisma.tenant.create({
    data: {
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-'),
    },
  });
}

export async function createTestUser(
  tenantId: string,
  role: TestRole = 'ADMIN',
) {
  const passwordHash = await hashProvider.generateHash('password123');
  return await prisma.user.create({
    data: {
      tenantId,
      name: 'Test User',
      email: `test-${Math.random()}@example.com`,
      passwordHash,
      role,
      isActive: true,
      isVerified: true,
    },
  });
}

export function generateAuthToken(
  userId: string,
  tenantId: string,
  role: string,
) {
  return tokenProvider.generateAccessToken({
    sub: userId,
    tenantId,
    role,
  });
}
