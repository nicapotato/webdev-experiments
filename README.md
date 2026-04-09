# webdev-experiments

**React + TypeScript + Vite** single-page app. The home hub links to **browser games and experiments** (e.g. chess, checkers, snake, motherload-style mining, typing), **iframe-hosted** static games under `/play/…`, and **multiplayer room** flows when a backend is configured. Styling uses Tailwind; some demos use **Three.js** and physics libraries.

Production build output is written to **`docs/`** for static hosting.

## User guide

| Step | Command |
|------|---------|
| Install dependencies | `make install` (runs `bun install`; you can use `npm install` / `pnpm install` instead) |
| Development server | `make dev` |
| Production build | `make build` |
| Preview production build | `make preview` |
| Serve `./docs` over HTTP (after build) | `make serve-docs` |
| All Makefile targets | `make help` |

Requires **Bun** (or another package manager), **Node**-compatible tooling, and **Python 3** only for `make serve-docs`.
