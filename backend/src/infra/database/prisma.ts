import 'dotenv/config';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from './generated/prisma/client.js';

/**
 * Build the Prisma MariaDB adapter based on environment.
 *
 * - In test, we prefer parsing DATABASE_URL so tests can point
 *   at an isolated database instance without affecting dev/prod.
 * - In other environments we keep the existing host/user/password
 *   based configuration to avoid breaking production.
 */
function createAdapter() {
  const isTest = process.env.NODE_ENV === 'test';

  if (isTest && process.env.DATABASE_URL) {
    // Example: mysql://dev:dev123@localhost:3307/orbitra_test?connect_timeout=30000&pool_timeout=60000
    const url = new URL(process.env.DATABASE_URL);

    return new PrismaMariaDb({
      host: url.hostname,
      port: Number(url.port || '3306'),
      user: url.username,
      password: url.password,
      database: url.pathname.replace(/^\//, ''),
      // Important for local MariaDB with native auth
      allowPublicKeyRetrieval: true,
      connectTimeout: Number(url.searchParams.get('connect_timeout') || '30000'),
      // pool_timeout is interpreted by Prisma, but some drivers
      // accept a similar option; keep it if supported.
      idleTimeout: Number(url.searchParams.get('pool_timeout') || '60000'),
    } as any);
  }

  // Fallback to previous behaviour for non-test environments
  return new PrismaMariaDb({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    allowPublicKeyRetrieval: true,
  });
}

const adapter = createAdapter();

// Enable verbose Prisma logging in test to help debug DB issues.
const prisma = new PrismaClient({
  adapter,
  log:
    process.env.NODE_ENV === 'test'
      ? ['query', 'info', 'warn', 'error']
      : ['warn', 'error'],
});

export { prisma };
