import { copyFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import topLevelAwait from 'vite-plugin-top-level-await'
import wasm from 'vite-plugin-wasm'
import { defineConfig } from 'vite'
import type { Plugin } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** GitHub Pages serves 404.html for unknown paths, so SPA deep links load the app. */
function githubPagesSpaFallback(outDir: string): Plugin {
  return {
    name: 'github-pages-spa-fallback',
    apply: 'build',
    closeBundle() {
      const index = path.resolve(__dirname, outDir, 'index.html')
      copyFileSync(index, path.resolve(__dirname, outDir, '404.html'))
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), wasm(), topLevelAwait(), githubPagesSpaFallback('docs')],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  worker: {
    format: 'es',
  },
})
