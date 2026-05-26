# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a React + TypeScript + Vite SPA ("Web Dev Experiments") serving browser games and tools.
Production is deployed to GitHub Pages via `make build` (output → `docs/`).

### Package Manager & Lifecycle

Use **Bun** (matches CI/CD and local dev). The **Makefile** is the primary interface:

| Command | Purpose |
|---------|---------|
| `make install` | Install dependencies (`bun install`) |
| `make dev` | Vite dev server on `:5173` (loads `.env.dev`) |
| `make build` | Production build → `docs/` (loads `.env.prod`) |
| `make preview` | Preview production build |
| `make help` | List all targets |

### Gotchas

- **TypeScript strict checking (`npx tsc --noEmit`) has pre-existing errors** (missing `@types/three`, some multiplayer game type issues). These do not block Vite dev/build — Vite uses esbuild for transpilation, not tsc.
- **No ESLint configured** — there's no `.eslintrc` or `eslint.config.*`. Linting is limited to TypeScript type checking.
- **Multiplayer features** require an external Go/Gin WebSocket backend (not in this repo). Single-player games and OSRS tools work standalone.
- **OSRS MMG data** (DuckDB files) requires `make import-osrs-db` with AWS credentials. The app gracefully degrades without it.
- The Vite config includes a custom `serveLocalData` plugin that serves `./data/` at `/local-data/` during dev.
- Build output is committed to `docs/` for GitHub Pages deployment.
