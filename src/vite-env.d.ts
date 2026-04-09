/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GIN_WS_HOST: string
  readonly VITE_GIN_HTTP_HOST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
