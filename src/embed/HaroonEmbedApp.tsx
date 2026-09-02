import { HaroonProfileBody, HaroonFooter } from "@/routes/haroon";
import { identity, nav } from "@/content/profile.haroon";
import { EmbedHeader } from "./EmbedHeader";

/**
 * Root component for Haroon Kiani's embeddable build.
 * Mirrors EmbedApp.tsx (MBK) — same shared header component, different content.
 */
export function HaroonEmbedApp() {
  return (
    <div id="top" className="mbk-embed-root">
      <EmbedHeader shortLabel={identity.short} title={identity.title} nav={nav} />
      <main>
        <HaroonProfileBody />
      </main>
      <HaroonFooter />
    </div>
  );
}
