# Change 1 — Interests hub

Branch: `Add-interests-hub`

## Requested changes

- Remove the “Things I make time for” section from About.
- Add an **Interests** item to the top navigation.
- Create an image-based gallery with interests grouped by category, inspired by the supplied gallery reference.

## Implementation

The changes apply to both portfolio versions:

- **React companion:** `/interests` is a dedicated page with active navigation and page metadata. The interest chips are removed from About.
- **Root Jekyll site:** `/interests/` is generated from `interests.md`. Personal-interest sections previously on About are moved into the new gallery. The Interests page uses a wider gallery container; other pages retain their existing width.

The gallery has five categories:

1. Financial education & STEM
2. Zambia, agriculture & politics
3. Literature & stories
4. Photography & plants
5. Sewing & crochet

Each tile has a representative image, a category title, a description, and related-interest tags. Images are AI-generated illustrations, not personal photographs or documentary records of specific people or places. On narrow screens, the React navigation uses a separate row so all five page links remain readable.

## Files

- `about.md`, `interests.md`
- `_includes/nav.html`, `_layouts/default.html`
- `assets/css/site.css`
- `assets/images/interests/`
- `artifacts/portfolio-app/src/App.tsx`
- `artifacts/portfolio-app/src/index.css`
- `artifacts/portfolio-app/public/images/interests/`
- `_config.yml` excludes this change document from the public Jekyll output.
- `README.md` and `replit.md` include the new Jekyll page in their maintenance guidance.

## Verification

- Jekyll build passed, including the generated `/interests/` page and sitemap entry.
- All five Jekyll image references resolve to bundled files.
- `Change1.md` is excluded from the public Jekyll output.
- React typecheck and production build passed.
- React Interests gallery was visually checked at 1280px and 375px, with all five images loading and no browser errors.
- Jekyll Interests page was also visually checked at 1280px and 375px; its navigation and tiles fit both viewports.
- Work was performed with `Add-interests-hub` as the active Git branch.
