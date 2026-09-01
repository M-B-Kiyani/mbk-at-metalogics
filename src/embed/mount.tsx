import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EmbedApp } from "./EmbedApp";
// Vite ?inline gives us the compiled CSS as a raw string so it can be
// injected directly into the shadow root's own <style> tag — the stylesheet
// never touches the host page's <head>, and the host page's styles never
// reach inside the shadow root. This is what gives full two-way isolation
// from the WordPress/Elementor theme.
import embedCss from "./embed.css?inline";

const MOUNT_ATTR = "data-mbk-profile-mount";
const DEFAULT_MOUNT_ID = "mbk-profile-root";

// Google Fonts loaded via @font-face inside the shadow root itself, rather
// than relying on a <link> in the host page's <head> (which the host page
// will not have, since this isn't the standalone TanStack Start build).
const FONT_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
`;

function mountInto(host: HTMLElement) {
  if (host.shadowRoot) return; // already mounted, avoid double-mount on hot reload / re-run

  const shadow = host.attachShadow({ mode: "open" });

  // Isolate: light-DOM CSS cannot penetrate the shadow boundary, and this
  // stylesheet cannot leak out to the WordPress theme.
  const style = document.createElement("style");
  style.textContent = FONT_CSS + embedCss;
  shadow.appendChild(style);

  const appRoot = document.createElement("div");
  appRoot.className = "mbk-embed-shadow-host";
  shadow.appendChild(appRoot);

  createRoot(appRoot).render(
    <StrictMode>
      <EmbedApp />
    </StrictMode>,
  );
}

function init() {
  // Primary target: an explicit mount point, e.g. <div id="mbk-profile-root">
  // Also supports data-mbk-profile-mount="" on any element, and multiple
  // mounts on one page (harmless — each gets its own isolated shadow root).
  const explicit = document.querySelectorAll<HTMLElement>(`[${MOUNT_ATTR}]`);
  const byId = document.getElementById(DEFAULT_MOUNT_ID);

  const targets = new Set<HTMLElement>(explicit);
  if (byId) targets.add(byId);

  if (targets.size === 0) {
    console.warn(
      `[mbk-profile] No mount point found. Add <div id="${DEFAULT_MOUNT_ID}"></div> ` +
        `or <div ${MOUNT_ATTR}></div> to the page.`,
    );
    return;
  }

  targets.forEach(mountInto);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
