import { env } from './infra/config/env.js';
import { prisma } from './infra/database/prisma.js';
import { buildServer } from './infra/http/server.js';

async function main() {
  const app = buildServer();
  try {
    await prisma.$connect();
    console.log('Database connected successfully.');
    await app.listen({
      port: env.PORT,
      host: '0.0.0.0',
    });
    console.log(`Orbitra API running at http://localhost:${env.PORT}`);
    console.log(`Orbitra Docs running at http://localhost:${env.PORT}/docs`);
    console.log(`Orbitra Frontend running at http://localhost:5180`);
  } catch (error) {
    console.error('Error starting server:', error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

process.on('SIGINT', async () => {
  console.log('\nShutting down server...');
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\nShutting down server...');
  await prisma.$disconnect();
  process.exit(0);
});

main();
