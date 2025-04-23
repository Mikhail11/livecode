import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import tsConfig from './tsconfig.app.json';
import { getTSAliasPaths } from './vite.utils';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      ...getTSAliasPaths(tsConfig),
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        playground: resolve(__dirname, 'playground/index.html'),
      },
    },
    outDir: './build',
  },
  plugins: [react()],
});
