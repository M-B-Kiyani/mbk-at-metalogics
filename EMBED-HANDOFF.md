# Embedding MetaLogics profile pages on metalogics.io

This adds professional profile pages — currently Muhammad Bilal Kiyani and
Haroon Kiani — as sections inside pages on metalogics.io. Each is a single
self-contained script — no plugin install, no npm/build step on your side,
no changes to the WordPress theme. The two are independent: add one, both,
or neither, in any order, on the same page or different pages.

## What you're adding

Two files, one per person:

| Person | File | Mount div |
|---|---|---|
| Muhammad Bilal Kiyani | `mbk-profile.embed.js` | `<div id="mbk-profile-root"></div>` |
| Haroon Kiani | `haroon-profile.embed.js` | `<div id="haroon-profile-root"></div>` |

Each draws its own isolated UI into its own `<div>` — it cannot affect the
rest of the page's styling, and the page's styling cannot affect it (it uses
the Shadow DOM, a standard browser feature built exactly for this). The two
scripts don't interact with each other, so they're safe to add on the same
page or on separate pages.

## Steps

1. **Host the file(s).** Upload `mbk-profile.embed.js` and/or
   `haroon-profile.embed.js` somewhere they can be fetched over HTTPS — the
   Media Library on metalogics.io works, as does any CDN you already use.
   Note the resulting URL(s).

2. **Create or open the page(s)** where each profile should appear
   (e.g. `metalogics.io/team/bilal-kiyani/` and
   `metalogics.io/team/haroon-kiani/`, or sections on an existing About Us
   / Team page).

3. **Add an Elementor "HTML" widget** to the page, at the point where the
   profile should render, and paste the matching snippet:

   **For Bilal:**
   ```html
   <div id="mbk-profile-root"></div>
   <script src="PASTE_THE_MBK_FILE_URL_HERE" defer></script>
   ```

   **For Haroon:**
   ```html
   <div id="haroon-profile-root"></div>
   <script src="PASTE_THE_HAROON_FILE_URL_HERE" defer></script>
   ```

4. **Publish/update the page.** Each script finds its own mount div and
   renders the full profile into it.

## Notes

- **Placement matters less than you'd think.** Because it's Shadow-DOM
  isolated, it's safe to drop either HTML widget anywhere on a page — above
  or below your existing Elementor sections, and above or below each other —
  without style conflicts.
- **Only one script tag per person is needed even with multiple mounts.**
  If you want a profile to appear in more than one place, add another
  matching mount div — just don't repeat that person's `<script>` tag on
  the same page twice.
- **Both scripts are versioned by filename, not by URL magic.** When we
  update either person's content or design, we'll send a new file to
  re-upload at the same URL (or a new URL, your call) — there's no
  auto-update mechanism, which is intentional so nothing changes on
  metalogics.io without your knowledge.
- **Fonts and colors are bundled in** — you don't need to add Google Fonts
  or any theme CSS. Each ships its own.
- **No cookies, no tracking, no external requests** beyond loading their
  own fonts from Google Fonts' CDN.

## If something looks wrong

- **Blank space where a profile should be:** open the browser console
  (F12) on that page and look for a message starting with `[mbk-profile]`
  or `[haroon-profile]` — it usually means the matching mount div is
  missing or was renamed.
- **Profile appears but looks unstyled/broken:** check that the `<script>`
  tag's `src` URL is reachable directly (paste it into a new browser tab —
  you should see raw JavaScript, not a 404 page).
- **Anything else:** send a screenshot and the page URL and we'll take a
  look — these are small, self-contained files, so issues are almost always
  either the mount div or the script URL.

## Technical detail, if useful

- Built with React 19, bundled as a single IIFE per person via Vite, ~210 KB
  gzipped each (mostly the React runtime itself — neither page shares React
  with the rest of metalogics.io, since the site is WordPress).
- Each mounts via `Element.attachShadow({ mode: "open" })` — full two-way
  CSS isolation from the Elementor/WordPress theme, and from each other.
- Source: `src/embed/` in the project repo (`mount.tsx` + `EmbedApp.tsx` for
  Bilal, `mount.haroon.tsx` + `HaroonEmbedApp.tsx` for Haroon). Rebuild with
  `npm run build:embed` (Bilal), `npm run build:embed:haroon` (Haroon), or
  `npm run build:embed:all` (both); output lands in `dist-embed/`.
