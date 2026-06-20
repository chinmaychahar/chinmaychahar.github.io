# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal academic portfolio website for Chinmay Chahar, built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. Deployed to GitHub Pages at chinmaychahar.github.io.

## Development Commands

### Local development (Docker - recommended)

```bash
docker compose pull
docker compose up
```

Site available at http://localhost:8080 with live reload on port 35729.

### Local development (native Ruby)

```bash
bundle install
bundle exec jekyll serve --port 8080 --livereload
```

### Build

```bash
bundle exec jekyll build
```

### Formatting

```bash
npx prettier --write .
```

Uses `@shopify/prettier-plugin-liquid` for Liquid template formatting. Config in `.prettierrc` (printWidth: 150, trailingComma: es5).

### Pre-commit hooks

Configured via `.pre-commit-config.yaml`: trailing-whitespace, end-of-file-fixer, check-yaml, check-added-large-files.

## Architecture

### Content structure

- `_pages/` — Top-level site pages (about, projects, publications, repositories, cv, books)
- `_posts/` — Blog posts (Markdown with YAML front matter)
- `_projects/` — Project entries displayed on /projects/
- `_bibliography/papers.bib` — BibTeX publications (rendered by jekyll-scholar, highlights author "Chahar")
- `_data/` — Structured data: `cv.yml`, `repositories.yml`, `coauthors.yml`, `venues.yml`
- `_news/` — Announcement entries
- `_books/` — Book review entries

### Presentation layer

- `_layouts/` — Page templates (Liquid): about, post, page, bib, cv, distill, etc.
- `_includes/` — Reusable Liquid partials (header, footer, social, scripts, etc.)
- `_sass/` — SCSS partials; `_variables.scss` for theme customization, `_themes.scss` for light/dark mode

### Configuration

- `_config.yml` — Central config: site metadata, navbar, plugins, scholar settings, third-party library versions, feature flags (darkmode, masonry, math, medium_zoom, etc.)
- `assets/json/resume.json` — JSON Resume data loaded via jekyll-get-json

### Key conventions

- Navigation defined in `_config.yml` under `navbar_content`
- Jekyll Scholar configured to highlight papers by last name "Chahar"
- Responsive WebP image generation via jekyll-imagemagick (input from `assets/img/`)
- Dark mode enabled by default (`enable_darkmode: true`)
- External links automatically get `rel="external nofollow noopener" target="_blank"`
