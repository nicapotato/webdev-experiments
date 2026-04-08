# webdev-experiments

Bun + Vite static site deployed to GitHub Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) (`peaceiris/actions-gh-pages` publishes `dist/` to the **`gh-pages`** branch).

## Required: GitHub Pages must serve `dist`, not source

If the live site shows console errors about `main.js`, `style.css`, and `javascript.svg` as module scripts, or **`vite.svg` 404**, GitHub Pages is serving the **wrong branch** (usually **`main`** with unbundled `index.html`). The production build lives only on **`gh-pages`**.

### Configure once (repo Settings)

1. **Settings → Pages → Build and deployment**
2. **Source**: **Deploy from a branch** (not “GitHub Actions” for this workflow).
3. **Branch**: **`gh-pages`** / **`/` (root)** → Save.
4. Do **not** publish from **`main`** or **`/docs`** for this project; use a single source.

Other settings:

- **Settings → Actions → General → Workflow permissions**: **Read and write** (required for `peaceiris` to push `gh-pages`).

### Verify after changing source

Use **View Page Source** on the live URL (not DevTools Elements). You must see:

- A script like **`/assets/index-<hash>.js`**
- A stylesheet link like **`/assets/index-<hash>.css`**
- **No** `<script src="/main.js">`

If you still see `/main.js`, Pages is still not using `gh-pages`, or cached HTML—try a private window or wait for CDN refresh.

## Local

```bash
bun install
bun run dev
bun run build   # output in dist/
```
