import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Build output goes to docs/ so GitHub Pages can use "main branch /docs" (no gh-pages CI).
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
