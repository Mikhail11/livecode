/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_HOST: string;
  readonly VITE_API_PORT: string;
  readonly VITE_WEBSOCKET_HOST: string;
  readonly VITE_WEBSOCKET_PORT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
