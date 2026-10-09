---
name: Dual-site portfolio routing
description: Keep the Replit preview and GitHub Pages source separate for this portfolio.
---

The user chose a root-level Jekyll portfolio for GitHub Pages plus a separate React companion for the Replit preview. Keep the React artifact at preview path `/` and the Jekyll source in the repository root. The Jekyll source location does not determine its published URL: set its `baseurl` to the path in GitHub's actual deployment URL, which may be a repository-prefixed project-site path rather than `/`.

**Why:** Moving the only web artifact under `/portfolio-app/` left the shared preview root on an unrelated API scaffold that returned 404. Separately, an empty Jekyll `baseurl` caused every navigation link and local asset to request the domain root and return 404, while the published files were available under the repository-prefixed GitHub Pages path.

**How to apply:** Preserve the React artifact as the root Replit preview while maintaining the Jekyll site for publication from the repository root. Confirm the GitHub deployment URL before deciding its Jekyll `baseurl`; use an empty value only for an actual domain-root deployment. Do not change React routing to fix GitHub Pages links.
