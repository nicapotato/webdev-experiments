# webdev-experiments

Small **React** app built with **Vite**, deployed like **stuff**: you **build locally**, commit the **static output**, and **GitHub Pages** serves it. No deploy workflow on GitHub.

## Why you saw `main.js` / MIME errors

The live site was serving **unbundled source** (`index.html` + `/main.js` imports). Browsers cannot run Vite source without `vite dev` or a **production build**. The fix is to serve **only** the **`vite build`** output (hashed JS/CSS under `assets/`), not files from repo root.

## Deploy model (this repo)

| Item | Value |
|------|--------|
| Build output | **`docs/`** (`vite.config.js` → `build.outDir`) |
| GitHub Pages | **Branch `main`**, folder **`/docs`** |
| Custom domain | **`public/CNAME`** → copied into `docs/` on build |

After changing code:

```bash
bun install
make build    # or: bun run build
git add docs/ index.html vite.config.js package.json src/ public/ bun.lockb
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

## Local

```bash
bun install
make dev
make build
make serve-docs   # optional: test ./docs over HTTP
```

## DevDependencies

- **Node**: `bun` / `npm` / `pnpm` all work; lockfile is `bun.lockb`.
