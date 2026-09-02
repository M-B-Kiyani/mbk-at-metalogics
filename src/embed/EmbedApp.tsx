import { ProfileBody, Footer } from "@/routes/MBK";
import { EmbedHeader } from "./EmbedHeader";

/**
 * Root component for the embeddable build.
 * Same section content as the standalone site (src/routes/MBK.tsx),
 * different header — see EmbedHeader.tsx for why.
 */
export function EmbedApp() {
  return (
    <div id="top" className="mbk-embed-root">
      <EmbedHeader />
      <main>
        <ProfileBody />
      </main>
      <Footer />
    </div>
  );
}
