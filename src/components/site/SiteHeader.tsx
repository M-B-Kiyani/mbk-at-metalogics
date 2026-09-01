import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { identity, nav } from "@/content/profile";
import { cn } from "@/lib/utils";

const ML = "https://metalogics.io";

const parentNav = [
  { label: "Home", href: `${ML}/` },
  { label: "About Us", href: `${ML}/about-us/` },
  { label: "Our Work", href: `${ML}/our-work/` },
  { label: "Services", href: `${ML}/services/` },
];

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
        scrolled ? "border-b border-hairline bg-background/90 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      {/* Parent-site bar — this page lives inside the MetaLogics website */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex h-9 max-w-[84rem] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <a href={`${ML}/`} className="font-display text-[13px] font-semibold tracking-[0.22em]">
            METALOGICS
          </a>
          <nav aria-label="MetaLogics" className="hidden items-center gap-6 sm:flex">
            {parentNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[12px] text-primary-foreground/75 transition-colors hover:text-primary-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={`${ML}/book-a-call/`}
            className="inline-flex items-center gap-1 text-[12px] font-medium text-primary-foreground"
          >
            Book A Call
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-[84rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className="group flex items-baseline gap-2.5">
          <span className="font-display text-sm font-semibold tracking-[0.18em] text-primary">MBK</span>
          <span className="hidden text-[11px] text-muted-foreground sm:inline">{identity.title}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[13px] text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2 text-[12px] font-medium tracking-wide text-primary-foreground transition-colors hover:bg-signal"
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
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-primary lg:hidden"
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
                className="border-b border-hairline py-4 font-display text-lg text-primary"
              >
                {item.label}
              </a>
            ))}
            {parentNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-hairline py-3.5 text-sm text-muted-foreground"
              >
                {item.label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
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
