.PHONY: help install dev build preview serve-docs sync-games-from-src sync-games-from-nextjs import-osrs-db

# Source tree for standalone HTML/Canvas games (adjust if your clones live elsewhere).
JS_PROJECTS ?= $(HOME)/Documents/repo/project/javascript-projects/2025

# Mindtricks Next.js app — public game assets (read-only sync into this repo).
NEXTJS_PUBLIC_GAMES ?= $(HOME)/Documents/repo/project/fullstack-ai-app/lang-js/nextjs-frontend/public/games

OSRS_DATA_DIR := data/osrs-mmg
OSRS_S3_PREFIX := s3://prod-public-mindtricks-data/dev/client/osrs-mmg

help: ## Show targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-14s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies (bun)
	bun install

dev: ## Vite dev server (loads .env.dev)
	bun run dev

build: ## Production build → docs/; loads .env.prod (games from public/games/)
	bun run build

preview: ## Preview production build (dist output is docs/)
	bun run preview

serve-docs: ## After build: static server for ./docs (includes games after build)
	cd docs && python3 -m http.server 8880 --bind 127.0.0.1

import-osrs-db: ## Download OSRS DuckDB + manifest into gitignored data/osrs-mmg/
	@mkdir -p $(OSRS_DATA_DIR)
	aws s3 cp $(OSRS_S3_PREFIX)/osrs-mmg.duckdb $(OSRS_DATA_DIR)/
	aws s3 cp $(OSRS_S3_PREFIX)/manifest.json $(OSRS_DATA_DIR)/
