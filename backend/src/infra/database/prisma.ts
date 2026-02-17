import 'dotenv/config';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '@prisma/client';

function createAdapter() {
  const isTest = process.env.NODE_ENV === 'test';
  const dbUrl = process.env.DATABASE_URL || process.env.MYSQL_URL;

  if (dbUrl) {
    const url = new URL(dbUrl);
    return new PrismaMariaDb({
      host: url.hostname,
      port: Number(url.port || '3306'),
      user: url.username,
      password: url.password,
      database: url.pathname.replace(/^\//, ''),
      allowPublicKeyRetrieval: true,
      connectTimeout: Number(url.searchParams.get('connect_timeout') || '30000'),
      idleTimeout: Number(url.searchParams.get('pool_timeout') || '60000'),
    } as any);
  }

  return new PrismaMariaDb({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    allowPublicKeyRetrieval: true,
  });
}

const adapter = createAdapter();

const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === 'test' ? ['query', 'info', 'warn', 'error'] : ['warn', 'error'],
});

export { prisma };
