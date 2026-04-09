# webdev-experiments

Small **React** app built with **Vite**, deployed like **stuff**: you **build locally**, commit the **static output**, and **GitHub Pages** serves it. No deploy workflow on GitHub.

## Why you saw `main.js` / MIME errors

The live site was serving **unbundled source** (`index.html` + `/main.js` imports). Browsers cannot run Vite source without `vite dev` or a **production build**. The fix is to serve **only** the **`vite build`** output (hashed JS/CSS under `assets/`), not files from repo root.

## Deploy model (this repo)

| Item | Value |
|------|--------|
| Build output | **`docs/`** ([vite.config.ts](vite.config.ts) → `build.outDir`) |
| GitHub Pages | **Branch `main`**, folder **`/docs`** |
| Custom domain | **`public/CNAME`** → copied into `docs/` on build |

After changing code:

```bash
bun install
make build    # or: bun run build
git add docs/ index.html vite.config.ts package.json src/ public/ bun.lockb
git commit -m "Build: update site"
git push origin main
```

**Repo → Settings → Pages**: **Deploy from a branch** → **`main`** → **`/docs`**.  
Remove or ignore **`gh-pages`** for this project (optional: `git push origin --delete gh-pages` once).

## Options and trade-offs

| Approach | Pros | Cons |
|----------|------|------|
| **This setup: `docs/` on `main`, manual build** | Same mental model as **stuff** (static files in git); full control; no Actions secrets; easy to debug | Must run `build` before commit; `docs/` churn in git; easy to forget a build |
| **CI builds + `gh-pages` or artifact** | No local build; always consistent | Two workflows / branch confusion; you hit several edge cases before |
| **No bundler (vanilla JS like `catalog.js`)** | Simplest deploy: commit HTML/CSS/JS as-is | No JSX/React without a build step or CDN hacks |
| **React via CDN + one HTML file** | No `node` build | Awkward DX, no real modules, not great for larger apps |

**Feasibility**: **Vite + React + `outDir: 'docs'`** is a common, low-friction way to get a **client-only** SPA with a **one-command build** and **static hosting**.

## Game assets

- **`make sync-games-from-nextjs`** — copies `public/games/` from the Mindtricks Next.js app (`NEXTJS_PUBLIC_GAMES`, default path in the [makefile](makefile)). Use when you add or update static game files there.
- **`make sync-games-from-src`** — copies the four tutorial canvas games from `javascript-projects/2025` (see makefile).

## Multiplayer (Gin backend)

Multiplayer rooms call a **Gin** server. Copy [`.env.example`](.env.example) to `.env` and set:

- **`VITE_GIN_WS_HOST`** — WebSocket base URL, e.g. `ws://127.0.0.1:8090`
- **`VITE_GIN_HTTP_HOST`** — HTTP base URL, e.g. `http://127.0.0.1:8090`

Values are inlined at **build time**. The app uses a **hash router** (`#/…`) so GitHub Pages deep links work without a `404.html` SPA fallback.

## Local

```bash
bun install
cp .env.example .env   # set VITE_* if you use multiplayer
make dev
make build
make serve-docs   # optional: test ./docs over HTTP
```

## DevDependencies

- **Node**: `bun` / `npm` / `pnpm` all work; lockfile is `bun.lockb`.
