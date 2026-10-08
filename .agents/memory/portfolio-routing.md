---
name: Dual-site portfolio routing
description: Keep the Replit preview and GitHub Pages source separate for this portfolio.
---

The user chose a root-level Jekyll portfolio for GitHub Pages plus a separate React companion for the Replit preview. Keep the React artifact at preview path `/`; keep Jekyll source in the repository root with an empty `baseurl`.

**Why:** Moving the only web artifact under `/portfolio-app/` left the shared preview root on an unrelated API scaffold that returned 404. A standalone Jekyll workflow did not take over that artifact preview route.

**How to apply:** Preserve the React artifact as the root Replit preview while maintaining the Jekyll site for publication from the repository root. Do not move the React app off `/` unless root preview routing is deliberately redesigned.
