# Portfolio plan

## Goal

Create two coordinated portfolio experiences: the official, static Jekyll site at the repository root for GitHub Pages, and a separate React portfolio app. The Jekyll site remains the publishing source at `mmpekansambo-glitch.github.io`; the React app is separate and excluded from the Jekyll output.

## Content and pages

- Home: introduce Mwengwe Mpekansambo as an MBA candidate, former investment banking associate, and advocate for women's financial education and STEM participation.
- About: present the supplied background, education, interests, and personal pursuits.
- Work Experience: use the résumé's supplied roles and dates for Gen Digital, Jefferies, Hotchkis & Wiley, and Mwedi Innovations. Do not add unsupported claims.
- Contact: include the email address the user approved for public display as a `mailto:` link; explain that visitors need an email app to use it.

Both experiences will have navigation and a footer, support light and dark themes, and use a whimsical, warm cottagecore visual direction with accessible contrast and responsive layouts.

## Implementation

- Put Jekyll's Markdown pages, YAML front matter, reusable layouts and includes, styles, favicon, `_config.yml`, and `README.md` directly in the repository root.
- Leave Jekyll `baseurl` empty and use URL filters. Add SEO metadata and a sitemap; exclude the separate React app and planning/readme files from the published site.
- Build the React app as a separate artifact with the same portfolio content and visual direction. It will not be part of the Jekyll/GitHub Pages site.
- Keep both experiences static: no backend, database, contact form backend, blog, CMS, third-party trackers, or unnecessary libraries.
- Document content updates, local Jekyll preview, and Lighthouse checks in `README.md`.

## Verification

Check Jekyll's root-level publishing structure, links and navigation, responsive layouts at 375px and 1280px, and aim for Lighthouse scores of at least 90 for Performance, Accessibility, Best Practices, and SEO.

## Assumptions

- GitHub Pages will be configured to publish from the `main` branch and repository root.
- The Jekyll site is the canonical public site; the React app is a separate companion experience.
- No reference sites were provided. Use the stated warm, whimsical cottagecore direction and the supplied résumé and bio as the source of truth.
