import { defineConfig } from 'vite'

// Root-relative assets (base: '/') — use with a custom domain or host at site root.
// If you ever need https://<user>.github.io/<repo>/ without a custom domain, set base to '/<repo>/'.
export default defineConfig({
  base: '/',
})
