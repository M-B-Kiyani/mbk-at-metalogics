# Embedding the MBK profile on metalogics.io

This adds Muhammad Bilal Kiyani's profile page as a section inside a page on
metalogics.io. It is a single self-contained script — no plugin install,
no npm/build step on your side, no changes to the WordPress theme.

## What you're adding

One file: `mbk-profile.embed.js`. It draws its own isolated UI into a `<div>`
you place on the page — it cannot affect the rest of the page's styling, and
the page's styling cannot affect it (it uses the Shadow DOM, a standard
browser feature built exactly for this).

## Steps

1. **Host the file.** Upload `mbk-profile.embed.js` somewhere it can be
   fetched over HTTPS — the Media Library on metalogics.io works, as does
   any CDN you already use. Note the resulting URL.

2. **Create or open the page** where the profile should appear
   (e.g. a new page at `metalogics.io/team/bilal-kiyani/`, or a section on
   an existing About Us page).

3. **Add an Elementor "HTML" widget** to the page, at the point where the
   profile should render, and paste this in:

   ```html
   <div id="mbk-profile-root"></div>
   <script src="PASTE_THE_URL_FROM_STEP_1_HERE" defer></script>
   ```

4. **Publish/update the page.** That's it — the script finds the
   `mbk-profile-root` div and renders the full profile into it.

## Notes

- **Placement matters less than you'd think.** Because it's Shadow-DOM
  isolated, it's safe to drop the HTML widget anywhere on a page — above or
  below your existing Elementor sections — without style conflicts.
- **Only one script tag is needed even with multiple mounts.** If you want
  the profile to appear in more than one place, add another
  `<div id="mbk-profile-root"></div>` — just don't repeat the `<script>` tag
  on the same page twice.
- **The file is versioned by filename, not by URL magic.** When we update
  the content or design, we'll send a new `mbk-profile.embed.js` to
  re-upload at the same URL (or a new URL, your call) — there's no
  auto-update mechanism, which is intentional so nothing changes on
  metalogics.io without your knowledge.
- **Fonts and colors are bundled in** — you don't need to add Google Fonts
  or any theme CSS. It ships its own.
- **No cookies, no tracking, no external requests** beyond loading its own
  fonts from Google Fonts' CDN.

## If something looks wrong

- **Blank space where the profile should be:** open the browser console
  (F12) on that page and look for a message starting with `[mbk-profile]`
  — it usually means the `<div id="mbk-profile-root">` is missing or was
  renamed.
- **Profile appears but looks unstyled/broken:** check that the `<script>`
  tag's `src` URL is reachable directly (paste it into a new browser tab —
  you should see raw JavaScript, not a 404 page).
- **Anything else:** send a screenshot and the page URL and we'll take a
  look — this is a small, self-contained file, so issues are almost always
  either the mount div or the script URL.

## Technical detail, if useful

- Built with React 19, bundled as a single IIFE via Vite, ~211 KB gzipped
  (mostly the React runtime itself — this page doesn't share React with the
  rest of metalogics.io, since the site is WordPress).
- Mounts via `Element.attachShadow({ mode: "open" })` — full two-way CSS
  isolation from the Elementor/WordPress theme.
- Source: `src/embed/` in the project repo. Rebuild with `npm run
  build:embed`; output is `dist-embed/mbk-profile.embed.js`.
