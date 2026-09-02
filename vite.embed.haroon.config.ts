// Dedicated build config for Haroon Kiani's embeddable widget bundle.
// Mirrors vite.embed.config.ts (MBK) — separate from Lovable's managed
// vite.config.ts, which should not be hand-edited.
//
// Run with: npm run build:embed:haroon
// Output:   dist-embed/haroon-profile.embed.js (+ inlined CSS, self-mounting)
//
// Note: outDir is the same dist-embed/ folder as MBK's build, but
// emptyOutDir is false here so building one doesn't wipe out the other's
// output. Run `npm run build:embed` (MBK) first if you want a fully clean
// dist-embed/ containing both files.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  publicDir: false, // widget bundle doesn't own favicon/robots.txt — that's MetaLogics' site's job
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist-embed",
    emptyOutDir: false, // do not wipe MBK's build output — see note above
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, "src/embed/mount.haroon.tsx"),
      name: "HaroonProfileEmbed",
      formats: ["iife"],
      fileName: () => "haroon-profile.embed.js",
    },
    minify: true,
    sourcemap: false,
  },
});
