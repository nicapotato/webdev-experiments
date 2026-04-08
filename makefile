.PHONY: help dev build preview serve-docs

help: ## Show targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-14s\033[0m %s\n", $$1, $$2}'

dev: ## Vite dev server
	bun run dev

build: ## Production build → docs/ (commit docs/ for GitHub Pages)
	bun run build

preview: ## Preview production build (dist output is docs/)
	bun run preview

serve-docs: ## After build: static server for ./docs (like stuff/serve)
	cd docs && python3 -m http.server 8880 --bind 127.0.0.1
