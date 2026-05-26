import { createReadStream, existsSync, statSync } from 'node:fs'
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
const LOCAL_DATA_ROOT = path.resolve(__dirname, 'data')

const LOCAL_DATA_MIME: Record<string, string> = {
  '.duckdb': 'application/x-duckdb',
  '.json': 'application/json',
}

/** Dev-only: serve gitignored files from ./data at /local-data/ (never included in build). */
function serveLocalData(): Plugin {
  return {
    name: 'serve-local-data',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/local-data', (req, res, next) => {
        const rel = decodeURIComponent((req.url ?? '/').split('?')[0] ?? '/')
        const filePath = path.resolve(LOCAL_DATA_ROOT, rel.replace(/^\//, ''))
        if (!filePath.startsWith(`${LOCAL_DATA_ROOT}${path.sep}`) && filePath !== LOCAL_DATA_ROOT) {
          res.statusCode = 403
          res.end('Forbidden')
          return
        }
        if (!existsSync(filePath) || !statSync(filePath).isFile()) {
          next()
          return
        }
        const ext = path.extname(filePath)
        res.setHeader('Content-Type', LOCAL_DATA_MIME[ext] ?? 'application/octet-stream')
        createReadStream(filePath).pipe(res)
      })
    },
  }
}

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
  plugins: [react(), tailwindcss(), wasm(), topLevelAwait(), serveLocalData(), githubPagesSpaFallback('docs')],
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
  server: {
    fs: {
      // Must include project root (default) plus gitignored ./data for local DuckDB dev.
      allow: [__dirname, LOCAL_DATA_ROOT],
    },
  },
  worker: {
    format: 'es',
  },
})
