import { getTSAliasPaths } from './vite.utils';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfig from './tsconfig.app.json';

export default defineConfig(({ mode }) => ({
  resolve: {
    alias: getTSAliasPaths(tsConfig),
  },
  plugins: [react()],
  build: {
    outDir: './build',
  },
  define: {
    __IS_DEV__: mode === 'development',
  },
}));
