/** Gin server URLs for multiplayer (build-time env). */
export function getGinWsBase(): string {
  const v = import.meta.env.VITE_GIN_WS_HOST
  if (!v || String(v).trim() === '') {
    throw new Error('Missing VITE_GIN_WS_HOST')
  }
  return String(v).replace(/\/$/, '')
}

export function getGinHttpBase(): string {
  const v = import.meta.env.VITE_GIN_HTTP_HOST
  if (!v || String(v).trim() === '') {
    throw new Error('Missing VITE_GIN_HTTP_HOST')
  }
  return String(v).replace(/\/$/, '')
}
