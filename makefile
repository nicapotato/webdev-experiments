.PHONY: help dev build preview serve-docs sync-games-from-src sync-games-from-nextjs

# Source tree for standalone HTML/Canvas games (adjust if your clones live elsewhere).
JS_PROJECTS ?= $(HOME)/Documents/repo/project/javascript-projects/2025

# Mindtricks Next.js app — public game assets (read-only sync into this repo).
NEXTJS_PUBLIC_GAMES ?= $(HOME)/Documents/repo/project/fullstack-ai-app/lang-js/nextjs-frontend/public/games

help: ## Show targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-14s\033[0m %s\n", $$1, $$2}'

dev: ## Vite dev server
	bun run dev

build: ## Production build → docs/ (games land in docs/games/ from public/games/)
	bun run build

preview: ## Preview production build (dist output is docs/)
	bun run preview

serve-docs: ## After build: static server for ./docs (includes games after build)
	cd docs && python3 -m http.server 8880 --bind 127.0.0.1

sync-games-from-src: ## Copy the four hub games from javascript-projects into public/games/
	@test -d "$(JS_PROJECTS)" || (echo "Set JS_PROJECTS= to your javascript-projects/2025 path"; exit 1)
	@for g in tower-defense sunnyland-platformer kings-and-pigs fighting-game; do \
	  if [ -d "$(JS_PROJECTS)/$$g" ]; then \
	    mkdir -p "public/games/$$g"; \
	    rsync -a --delete "$(JS_PROJECTS)/$$g/" "public/games/$$g/"; \
	    echo "synced $$g"; \
	  fi; \
	done
	@echo "Done. public/games/ (tower-defense, kings-and-pigs, fighting-game, sunnyland-platformer)."

sync-games-from-nextjs: ## Copy nextjs-frontend public/games/ into public/games/ (motherload, mindsweeper, etc.)
	@test -d "$(NEXTJS_PUBLIC_GAMES)" || (echo "Set NEXTJS_PUBLIC_GAMES= to nextjs-frontend/public/games"; exit 1)
	rsync -a --delete "$(NEXTJS_PUBLIC_GAMES)/" public/games/
	@echo "Synced from $(NEXTJS_PUBLIC_GAMES)"
