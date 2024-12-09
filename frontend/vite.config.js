import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import inject from '@rollup/plugin-inject';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  optimizeDeps: {
    include: ['process/browser'],
  },
  build: {
    rollupOptions: {
      plugins: [
        inject({
          process: 'process/browser',
        }),
      ],
    },
  },
});
