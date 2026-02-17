import { afterAll, beforeAll, beforeEach, vi } from 'vitest';
import { prisma } from '../infra/database/prisma.js';
process.env.NODE_ENV = process.env.NODE_ENV || 'test';
vi.mock('@scalar/fastify-api-reference', () => ({
  default: async () => ({}),
}));
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function connectWithRetry(attempts = 3, backoffMs = 5000): Promise<void> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      await prisma.$connect();
      return;
    } catch (error) {
      lastError = error;
      console.error(`[tests] Prisma $connect failed (attempt ${attempt}/${attempts})`, error);
      if (attempt < attempts) {
        await delay(backoffMs);
      }
    }
  }
  throw lastError;
}
async function ensureTestSchema() {
  type ColumnRow = { COLUMN_NAME: string };
  const columns = (await prisma.$queryRawUnsafe(
    `
      SELECT COLUMN_NAME
      FROM INFORMATION_SCHEMA.COLUMNS
      WHERE TABLE_SCHEMA = (SELECT DATABASE())
        AND TABLE_NAME = 'users'
        AND COLUMN_NAME IN ('isVerified', 'totpEnabled')
    `,
  )) as ColumnRow[];
  const existing = new Set(columns.map((c: any) => c.COLUMN_NAME));
  if (!existing.has('isVerified')) {
    await prisma.$executeRawUnsafe(
      `ALTER TABLE users ADD COLUMN isVerified BOOLEAN NOT NULL DEFAULT 0`,
    );
  }
  if (!existing.has('totpEnabled')) {
    await prisma.$executeRawUnsafe(
      `ALTER TABLE users ADD COLUMN totpEnabled BOOLEAN NOT NULL DEFAULT 0`,
    );
  }
}
export async function clearDatabase() {
  await prisma.$transaction([
    prisma.auditLog.deleteMany(),
    prisma.notification.deleteMany(),
    prisma.comment.deleteMany(),
    prisma.task.deleteMany(),
    prisma.projectMember.deleteMany(),
    prisma.invite.deleteMany(),
    prisma.emailVerification.deleteMany(),
    prisma.refreshToken.deleteMany(),
    prisma.project.deleteMany(),
    prisma.user.deleteMany(),
    prisma.tenant.deleteMany(),
  ]);
}
beforeAll(async () => {
  await connectWithRetry(3, 5000);
  await ensureTestSchema();
});
afterAll(async () => {
  try {
    await clearDatabase();
  } finally {
    await prisma.$disconnect();
  }
});
beforeEach(async () => {
  await clearDatabase();
});
