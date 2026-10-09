# Mwengwe Mpekansambo Portfolio

A GitHub Pages Jekyll portfolio in the repository root, alongside a separate React portfolio companion for Replit preview.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `bundle install` — install the local GitHub Pages/Jekyll preview dependencies
- `bundle exec jekyll serve` — preview the root Jekyll site locally
- `bundle exec jekyll build` — build the root Jekyll site into `_site/`
- `pnpm --filter @workspace/portfolio-app run typecheck` — typecheck the React companion
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

The API server and database workspace are pre-existing project scaffolding and are not used by either portfolio.

## Stack

- Canonical site: Jekyll, GitHub Pages, Markdown, YAML front matter, HTML, CSS, and minimal JavaScript
- Companion preview: React + Vite with static content; no backend or database
- Workspace tooling: pnpm, TypeScript

## Where things live

- Root Markdown pages: `index.md`, `about.md`, `interests.md`, `experience.md`, `contact.md`
- Shared Jekyll structure: `_layouts/`, `_includes/`, `_config.yml`
- Root site assets: `assets/css/`, `assets/js/`, `favicon.svg`
- React companion: `artifacts/portfolio-app/`
- Publishing and editing instructions: `README.md`

## Architecture decisions

- GitHub Pages publishes from `main` and `/ (root)`; the root Jekyll site is canonical.
- The React companion is the root Replit web preview and is excluded from Jekyll's generated output.
- The biography and experience appear in both versions; update both to keep them aligned.

## Product

The portfolio presents Mwengwe's education, work experience, interests, and contact details in a responsive site with light and dark themes.

## User preferences

- Use the supplied biography and résumé as the source of truth. Do not invent employers, dates, achievements, clients, metrics, or projects.
- Publish only the email address the user explicitly approved; do not publish the résumé's phone number or other email address.

## Gotchas

- Keep `baseurl` empty for the GitHub user site and use Jekyll URL filters for internal links and assets.
- Keep `artifacts/`, `lib/`, `scripts/`, `attached_assets/`, and workspace metadata excluded from Jekyll output.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
