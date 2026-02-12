import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    setupFiles: ['./src/__tests__/setup.ts'],
    include: [
      'src/__tests__/**/*.test.ts',
      'src/__tests__/**/*.integration.test.ts',
    ],
    exclude: ['**/node_modules/**', '**/dist/**', '**/generated/**'],
    deps: {
      inline: ['@prisma/client', '@prisma/adapter-mariadb'],
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'json'],
      exclude: ['node_modules/', 'src/infra/database/generated/'],
    },
    // Integration tests often require sequential execution when sharing a database
    fileParallelism: false,
    testTimeout: 60000, // 60s timeout for integration tests
    hookTimeout: 60000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
