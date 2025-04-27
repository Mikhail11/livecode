import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import tsConfig from './tsconfig.app.json';
import { getTSAliasPaths } from './vite.utils';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => ({
  resolve: {
    alias: getTSAliasPaths(tsConfig),
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        playground: resolve(__dirname, 'playground.html'),
      },
    },
    outDir: './build',
  },
  define: {
    __IS_DEV__: mode === 'development',
  },
  plugins: [react()],
}));
