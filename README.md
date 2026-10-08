# Mwengwe Mpekansambo — Portfolio

The Jekyll site in this repository's root is the canonical GitHub Pages portfolio. A separate React companion app lives in `artifacts/portfolio-app/` and is excluded from the Jekyll publication. When updating shared biography or experience details, make the same content change in both versions.

## Publish with GitHub Pages

1. In the repository on GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the `main` branch and `/ (root)` folder, then save.
4. For a GitHub user site, the repository must be named `mmpekansambo-glitch.github.io`.

The site uses GitHub Pages' Jekyll build. No separate build command is needed to publish. `_config.yml` sets `baseurl` to an empty string for a user site. Internal links, styles, and assets use Jekyll URL filters.

## Update the site

- Edit `index.md`, `about.md`, `experience.md`, or `contact.md` to update the page content.
- Each page has YAML front matter for its title, description, and permalink.
- Shared page structure is in `_layouts/default.html`; navigation and footer are in `_includes/`.
- Visual styles are in `assets/css/site.css`. The small `assets/js/theme.js` file handles the light/dark theme switch.
- The React companion's matching content and presentation are in `artifacts/portfolio-app/src/App.tsx` and `artifacts/portfolio-app/src/index.css`.
- Update the site's title, description, URL, and publishing exclusions in `_config.yml`.
- Do not add the résumé, its contact details, or other private material to the public site.

## Preview locally

Install Ruby and Bundler, then run these commands from the repository root:

```sh
bundle install
bundle exec jekyll serve
```

Open the local address printed by Jekyll. To build the site without starting the preview server:

```sh
bundle exec jekyll build
```

Jekyll writes its generated site to `_site/`. That folder is excluded from publishing and should not be edited directly.

## Check with Lighthouse

With the local preview open in Chrome, open DevTools, select **Lighthouse**, and run the Performance, Accessibility, Best Practices, and SEO audits for mobile and desktop. Target a score of 90 or higher in each category. Check the home, About, Work Experience, and Contact pages, including a 375px-wide mobile viewport and a 1280px-wide desktop viewport.
