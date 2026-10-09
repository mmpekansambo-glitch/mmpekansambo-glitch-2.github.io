# Change 2 — Education and experience become Journey

Branch: `Shift-the-education-info`

## Requested changes

- Move education information from About into the experience page.
- Rename that page and its navigation tab **Journey**, following the corrected name.
- Replace the multi-level role details with concise, one-sentence entries.
- Apply the changes to both the root Jekyll site and the React companion.

## Implementation

- Removed the Education section and degree details from About; retained the personal and professional introduction and added a Journey link.
- Combined two education milestones and five professional roles into one simple list on Journey.
- Preserved both Jefferies roles and their separate dates, the Stanford Economics degree and Creative Writing minor, and the expected May 2027 MBA completion.
- Replaced separate organization headings, role/date blocks, and achievement bullets with one paragraph per entry.
- Dated entries appear newest first; the undated Mwedi Innovations entry remains last without an invented date.
- Descriptions wrap naturally on smaller screens rather than being clipped to a literal single display line.
- Updated navigation, page headings, page metadata, and links to use Journey.
- Kept `/experience/` for Jekyll and `/experience` for React so existing links continue to work.
- Retained the existing light/dark theme styles.
- Excluded this documentation file from the public Jekyll build.

## Files

- Jekyll: `about.md`, `experience.md`, `index.md`, `_includes/nav.html`, `assets/css/site.css`, and `_config.yml`.
- React: `artifacts/portfolio-app/src/App.tsx` and `artifacts/portfolio-app/src/index.css`.
- Documentation: `README.md` and `Change2.md`.

## Verification

- React typecheck and production build passed.
- Jekyll build passed.
- Automated content checks confirmed seven single-paragraph entries, no education section or degree details remaining on About, and no outdated page label.
- React Journey was visually checked at 1280px and 375px; About was checked at 1280px.
- Browser and workflow logs showed no application errors.
- Confirmed `Change2.md` is excluded from the Jekyll output and that the active branch is `Shift-the-education-info`.
