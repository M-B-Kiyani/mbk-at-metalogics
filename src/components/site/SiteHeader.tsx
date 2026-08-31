import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { identity, nav } from "@/content/profile";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-hairline bg-background/85 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[84rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className="group flex items-baseline gap-2.5">
          <span className="font-display text-sm font-semibold tracking-[0.18em]">MBK</span>
          <span className="hidden text-[11px] text-muted-foreground sm:inline">{identity.title}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-foreground/80 px-4 py-2 text-[12px] font-medium tracking-wide transition-colors hover:bg-foreground hover:text-background"
          >
            Start a conversation
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-hairline bg-background lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-[84rem] flex-col px-5 py-2 sm:px-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-hairline py-4 font-display text-lg"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-5 mb-6 bg-foreground px-5 py-4 text-center text-sm font-medium text-background"
            >
              Start a conversation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
