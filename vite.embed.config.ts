// Dedicated build config for the embeddable MetaLogics widget bundle.
// Deliberately separate from vite.config.ts, which is managed by Lovable's
// TanStack Start config and should not be hand-edited (see comment there).
//
// Run with: npm run build:embed
// Output:   dist-embed/mbk-profile.embed.js (+ inlined CSS, self-mounting)
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
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, "src/embed/mount.tsx"),
      name: "MBKProfileEmbed",
      formats: ["iife"],
      fileName: () => "mbk-profile.embed.js",
    },
    // Single self-contained file: no external chunks, no import maps,
    // nothing else for the WordPress maintainer to host or reference.
    // (Code-splitting is already off by default for `lib` builds with a
    // single entry, so no extra rollupOptions are needed here.)
    minify: true,
    sourcemap: false,
  },
});
