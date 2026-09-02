import { useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { identity as mbkIdentity, nav as mbkNav } from "@/content/profile";
import { cn } from "@/lib/utils";

// Default browser fragment navigation (href="#id") across a shadow boundary
// is inconsistent on older WebKit/Chromium versions. Handle it explicitly
// so anchor links always scroll within this widget's own shadow root,
// regardless of the host page's URL/history (which we should not touch —
// changing the host page's #hash could collide with its own routing).
function scrollToId(e: MouseEvent<HTMLAnchorElement>, id: string) {
  const root = e.currentTarget.getRootNode();
  if (!(root instanceof ShadowRoot)) return; // standalone build: let default behaviour run
  e.preventDefault();
  const target = root.getElementById(id);
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

type EmbedHeaderProps = {
  shortLabel?: string;
  title?: string;
  nav?: { label: string; href: string }[];
};

/**
 * Header for the embedded build only.
 *
 * Deliberately different from SiteHeader.tsx:
 * - No fixed/sticky positioning — a `position: fixed` element inside an
 *   embed positions against the *viewport*, not the embed container, so it
 *   would float over the real WordPress header/footer once mounted.
 * - No duplicate "METALOGICS" nav bar — the real WordPress header already
 *   provides that when this is embedded inside metalogics.io.
 * - No document.body writes (e.g. overflow locking for the mobile menu) —
 *   an embedded widget must never reach outside its own container.
 */
export function EmbedHeader({
  shortLabel = mbkIdentity.short,
  title = mbkIdentity.title,
  nav = mbkNav,
}: EmbedHeaderProps = {}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-10 border-b border-hairline bg-background">
      <div className="mx-auto flex h-16 max-w-[84rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          onClick={(e) => scrollToId(e, "top")}
          className="group flex items-baseline gap-2.5"
        >
          <span className="font-display text-sm font-semibold tracking-[0.18em] text-primary">
            {shortLabel}
          </span>
          <span className="hidden text-[11px] text-muted-foreground sm:inline">{title}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToId(e, item.href.slice(1))}
              className="relative text-[13px] text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToId(e, "contact")}
            className="rounded-full bg-primary px-5 py-2 text-[12px] font-medium tracking-wide text-primary-foreground transition-colors hover:bg-signal"
          >
            Start a conversation
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mbk-embed-mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-primary lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          id="mbk-embed-mobile-nav"
          className={cn("border-t border-hairline bg-background lg:hidden")}
        >
          <nav
            aria-label="Mobile"
            className="mx-auto flex max-w-[84rem] flex-col px-5 py-2 sm:px-8"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  scrollToId(e, item.href.slice(1));
                  setOpen(false);
                }}
                className="border-b border-hairline py-4 font-display text-lg text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                scrollToId(e, "contact");
                setOpen(false);
              }}
              className="mt-5 mb-6 rounded-full bg-primary px-5 py-4 text-center text-sm font-medium text-primary-foreground"
            >
              Start a conversation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
