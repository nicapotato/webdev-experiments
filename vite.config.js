import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Build output goes to docs/. Hub assets in public/ (e.g. public/games/) are copied here;
// docs/games/ is gitignored — source of truth is public/games/ only.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
