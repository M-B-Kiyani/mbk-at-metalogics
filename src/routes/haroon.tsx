import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { SystemDiagram } from "@/components/site/SystemDiagram";
import {
  capabilities,
  contact,
  identity,
  metalogicsUrl,
  method,
  nav,
  selectedWork,
  stats,
  upwork,
} from "@/content/profile.haroon";

const title = "Haroon Kiani — Co-Founder, MetaLogics";
const description =
  "Haroon Kiani is Co-Founder of MetaLogics, leading WordPress, Shopify and front-end development delivery.";

export const Route = createFileRoute("/haroon")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/haroon" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/haroon" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: identity.name,
          alternateName: identity.short,
          jobTitle: identity.title,
          description,
          knowsAbout: [
            "WordPress development",
            "Shopify development",
            "Front-end engineering",
            "React",
            "Next.js",
          ],
          worksFor: { "@type": "Organization", name: identity.org },
        }),
      },
    ],
  }),
  component: HaroonHome,
});

function HaroonHome() {
  return (
    <div id="top" className="min-h-screen">
      <SiteHeader shortLabel={identity.short} title={identity.title} nav={nav} />
      <main>
        <HaroonProfileBody />
      </main>
      <HaroonFooter />
    </div>
  );
}

// Exported so the embeddable build (src/embed) can render the identical
// body content under a different, non-fixed header — see
// src/embed/HaroonEmbedApp.tsx. Extend it here so both targets stay in sync.
export function HaroonProfileBody() {
  return (
    <>
      <Hero />
      <About />
      <Capabilities />
      <Work />
      <Approach />
      <MetaLogics />
      <Contact />
    </>
  );
}

export { HaroonFooter };

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32">
      <div className="brand-wash pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="rule-grid pointer-events-none absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(80%_60%_at_60%_10%,black,transparent)]" />
      <div className="relative mx-auto grid max-w-[84rem] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="label-mono">{identity.foundation}</p>
            <h1 className="mt-6 font-display text-[2.6rem] leading-[0.98] font-semibold tracking-[-0.03em] text-balance sm:text-6xl lg:text-[4.25rem]">
              Haroon
              <br />
              Kiani
            </h1>
            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-10 bg-primary/45" />
              <p className="font-display text-lg font-medium sm:text-xl">{identity.title}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
              {identity.positioning}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#work"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-colors hover:bg-signal"
              >
                Explore my work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#metalogics"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary/30 px-7 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-accent/60"
              >
                Explore MetaLogics
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={280} className="lg:col-span-5">
          <SystemDiagram className="mx-auto w-full max-w-[26rem] lg:max-w-none" />
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="Position"
      title={<>Delivery-focused, from page builder to production front end</>}
      intro={
        <p>
          Most WordPress and Shopify projects fail on follow-through, not on the initial build. The
          work here starts with the right platform for the actual requirement — not a default — and
          continues through launch into ongoing support.
        </p>
      }
    >
      <div className="grid gap-px border border-hairline bg-hairline sm:grid-cols-3">
        {[
          { k: "Primary focus", v: identity.title },
          { k: "Foundation", v: identity.foundation },
          { k: "Based in", v: "Slough, Berkshire" },
        ].map((row) => (
          <div key={row.k} className="bg-background p-7 sm:p-8">
            <p className="label-mono">{row.k}</p>
            <p className="mt-3 font-display text-lg font-medium">{row.v}</p>
          </div>
        ))}
      </div>

      <div className="mt-px grid gap-px border border-t-0 border-hairline bg-hairline sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="bg-background p-7 sm:p-8">
            <p className="font-display text-3xl font-semibold text-primary">{s.value}</p>
            <p className="label-mono mt-2">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 font-mono text-[11px] tracking-wide text-muted-foreground/70 uppercase">
        Self-reported figures, not independently audited
      </p>

      <Reveal className="mt-6">
        <a
          href={upwork.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          {upwork.label}
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </Reveal>
    </Section>
  );
}

function Capabilities() {
  return (
    <Section
      id="capabilities"
      index="02"
      eyebrow="Capabilities"
      title={<>What I can be brought in to build or support</>}
      intro={
        <p>
          Organised by the kind of build, not just the tool. The platform choice follows the
          requirement, not the other way round.
        </p>
      }
    >
      <div className="grid gap-px border border-hairline bg-hairline md:grid-cols-2">
        {capabilities.map((cap, i) => (
          <Reveal
            key={cap.title}
            delay={i * 60}
            className="group bg-background p-7 transition-colors hover:bg-secondary sm:p-9"
          >
            <div className="flex items-baseline gap-4">
              <span className="label-mono">{cap.index}</span>
              <h3 className="font-display text-xl font-semibold sm:text-2xl">{cap.title}</h3>
            </div>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              {cap.summary}
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {cap.evidence.map((e) => (
                <li key={e} className="label-mono text-foreground/60">
                  {e}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Work() {
  return (
    <Section
      id="work"
      index="03"
      eyebrow="Selected work"
      title={<>Client work, shown with permission</>}
      intro={
        <p>
          Client names and logos appear here only once confirmed as current and approved for public
          display — not copied from a portfolio list. This section is being finalised.
        </p>
      }
    >
      {selectedWork.length === 0 ? (
        <div className="border border-dashed border-hairline p-8 sm:p-10">
          <p className="label-mono">Content placeholder</p>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Selected client work will appear here once confirmed. Full engagement details are
            available on request in the meantime.
          </p>
        </div>
      ) : (
        <div className="border-t border-primary/60">
          {selectedWork.map((w, i) => (
            <Reveal key={w.name} delay={i * 70} className="border-b border-hairline py-8">
              <p className="font-display text-lg font-semibold">{w.name}</p>
              <p className="mt-2 text-[15px] text-muted-foreground">{w.note}</p>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}

function Approach() {
  return (
    <Section
      id="approach"
      index="04"
      eyebrow="Approach"
      title={<>A working method, not a manifesto</>}
      intro={<p>Four steps, applied in order — scope before build, support after launch.</p>}
    >
      <ol className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {method.map((m) => (
          <li key={m.step} className="bg-background p-7 sm:p-9">
            <span className="label-mono">{m.step}</span>
            <h3 className="mt-3 font-display text-lg font-semibold">{m.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{m.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function MetaLogics() {
  return (
    <section id="metalogics" className="scroll-mt-16 border-t border-hairline bg-secondary">
      <div className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <Reveal className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label-mono">05 — Organisation</p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold sm:text-4xl">
              This work sits inside {identity.org}
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              WordPress, Shopify and front-end delivery is carried through {identity.org} — the
              organisation behind the broader services, delivery capacity and project portfolio. If
              your requirement extends past a single build into full delivery, {identity.org} is the
              right next step.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={metalogicsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary/40 px-7 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Explore {identity.org}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <span className="self-center font-mono text-[12px] text-muted-foreground/70">
                metalogics.io
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-surface text-surface-foreground">
      <div className="mx-auto max-w-[84rem] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <Reveal className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="label-mono text-surface-foreground/55">06 — Contact</p>
            <h2 className="mt-5 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-[3.5rem]">
              {contact.headline}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15px] leading-relaxed text-surface-foreground/70 sm:text-base">
              {contact.body}
            </p>
            <div className="mt-8">
              <p className="label-mono text-surface-foreground/55">Direct contact</p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 inline-block font-mono text-sm text-surface-foreground underline decoration-surface-foreground/30 underline-offset-4 transition-colors hover:decoration-surface-foreground"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HaroonFooter() {
  return (
    <footer className="border-t border-surface-foreground/12 bg-surface text-surface-foreground">
      <div className="mx-auto max-w-[84rem] px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="font-display text-base font-semibold text-surface-foreground">
              {identity.name}
            </p>
            <p className="mt-1 text-sm text-surface-foreground/70">{identity.title}</p>
            <p className="mt-1 text-sm text-surface-foreground/50">{identity.foundation}</p>
            <a
              href="https://metalogics.io/"
              className="mt-4 inline-block font-display text-sm font-semibold tracking-[0.22em] text-surface-foreground/80 transition-colors hover:text-surface-foreground"
            >
              METALOGICS
            </a>
          </div>
          <div className="flex flex-col gap-6 sm:items-end">
            <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 sm:justify-end">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-surface-foreground/70 transition-colors hover:text-surface-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <nav aria-label="MetaLogics" className="flex flex-wrap gap-x-8 gap-y-3 sm:justify-end">
              {[
                { label: "MetaLogics Home", href: "https://metalogics.io/" },
                { label: "Our Work", href: "https://metalogics.io/our-work/" },
                { label: "Book A Call", href: "https://metalogics.io/book-a-call/" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-surface-foreground/50 transition-colors hover:text-surface-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <p className="mt-12 border-t border-surface-foreground/12 pt-6 text-xs text-surface-foreground/45">
          © {new Date().getFullYear()} {identity.org}. Personal profile page of {identity.name},
          part of the MetaLogics website.
        </p>
      </div>
    </footer>
  );
}
