import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      host: true, // Listen on all addresses (0.0.0.0)
      port: 5173,
      strictPort: true, // Fail if port is in use
      watch: {
        usePolling: true, // Needed for Docker on Windows
      },
      proxy: {
        '/api': {
          target: env.VITE_API_TARGET || 'http://localhost:3333',
          changeOrigin: true,
          // rewrite: (p) => p.replace(/^\/api/, ''), // Removed to match backend prefix
        },
      },
    },
  };
});
