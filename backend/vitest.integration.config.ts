import { defineConfig } from 'vitest/config';
import path from 'path';

// Dedicated config for HTTP integration tests only.
export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    setupFiles: ['./src/__tests__/setup.ts'],
    include: ['src/__tests__/infra/http/**/*.integration.test.ts'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/generated/**'],
    deps: {
      inline: ['@prisma/client', '@prisma/adapter-mariadb'],
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'json'],
      exclude: ['node_modules/', 'src/infra/database/generated/'],
    },
    fileParallelism: false,
    testTimeout: 60000,
    hookTimeout: 60000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

