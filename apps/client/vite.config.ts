import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/app'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@api': path.resolve(__dirname, './src/shared/api'),
      '@ui/*': path.resolve(__dirname, './src/shared/ui'),
    },
  },
  plugins: [react()],
  build: {
    outDir: './build',
  },
});
