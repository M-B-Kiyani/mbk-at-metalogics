import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { SystemDiagram } from "@/components/site/SystemDiagram";
import {
  capabilities,
  caseStudies,
  contact,
  foundationPoints,
  identity,
  metalogicsUrl,
  method,
  nav,
  reliabilityPrinciples,
} from "@/content/profile";

const title = "Muhammad Bilal Kiyani — Technology & AI Systems Lead | MetaLogics";
const description =
  "Muhammad Bilal Kiyani (MBK) is a Technology & AI Systems Lead and Electrical & Telecommunications Engineer working on production AI reliability, systems architecture and technology solutions through MetaLogics.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
            "AI systems",
            "Production AI reliability",
            "AI automation",
            "Systems architecture",
            "Electrical and telecommunications engineering",
          ],
          worksFor: { "@type": "Organization", name: identity.org },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div id="top" className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Foundation />
        <Reliability />
        <Work />
        <Approach />
        <MetaLogics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

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
              Muhammad
              <br />
              Bilal Kiyani
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
      title={<>An engineer's approach to modern technology</>}
      intro={
        <p>
          Most technology problems presented as build problems are diagnosis problems. Before a tool is chosen, the
          system has to be understood: what it does today, where it degrades, and which constraint is actually binding.
          That sequence — understand, diagnose, design, make reliable — is the whole of the method.
        </p>
      }
    >
      <div className="grid gap-px border border-hairline bg-hairline sm:grid-cols-3">
        {[
          {
            k: "Primary focus",
            v: "AI systems and their behaviour in production — accuracy, consistency and integrity under real usage.",
          },
          {
            k: "Foundation",
            v: "Electrical & telecommunications engineering: systems, infrastructure, signal integrity, fault diagnosis.",
          },
          {
            k: "Delivery",
            v: `Broader services, solutions and projects are delivered through ${identity.org}.`,
          },
        ].map((item) => (
          <div key={item.k} className="bg-background p-7 sm:p-8">
            <p className="label-mono">{item.k}</p>
            <p className="mt-4 text-[15px] leading-relaxed">{item.v}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Capabilities() {
  return (
    <Section
      id="capabilities"
      index="02"
      eyebrow="Capabilities"
      title={<>What I can be brought in to lead or solve</>}
      intro={
        <p>
          Organised by the problem being solved, not by the tools involved. Technologies are supporting evidence; the
          capability is the judgement about which system belongs where.
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
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">{cap.summary}</p>
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

function Foundation() {
  return (
    <Section
      id="foundation"
      index="03"
      eyebrow="Engineering foundation"
      title={<>Why the engineering background matters</>}
      intro={
        <p>
          Electrical and telecommunications engineering is not a line on a CV here — it is the reason the work starts
          with the system rather than the stack.
        </p>
      }
    >
      <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
        {foundationPoints.map((point, i) => (
          <Reveal key={point.from} delay={i * 80} className="border-t border-primary/60 pt-6">
            <p className="label-mono flex flex-wrap items-center gap-2 text-foreground">
              <span>{point.from}</span>
              <ArrowRight className="h-3 w-3" aria-hidden="true" />
              <span className="text-signal">{point.to}</span>
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">{point.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Reliability() {
  return (
    <Section
      id="reliability"
      index="04"
      eyebrow="Production AI reliability"
      dark
      title={<>AI that still behaves correctly on the thousandth conversation</>}
      intro={
        <p>
          A demo proves an idea. Production proves the system. The work here is evidence-based: reviewing real
          conversations, tracing inconsistency to its cause, and holding agent behaviour to a written standard.
        </p>
      }
    >
      <ol className="grid gap-px bg-surface-foreground/12 sm:grid-cols-2 lg:grid-cols-3">
        {reliabilityPrinciples.map((p, i) => (
          <li key={p} className="bg-surface p-7 sm:p-8">
            <span className="label-mono text-surface-foreground/50">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-4 text-[15px] leading-relaxed text-surface-foreground/85">{p}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Work() {
  return (
    <Section
      id="work"
      index="05"
      eyebrow="Selected work"
      title={<>Problem, diagnosis, decision, outcome</>}
      intro={
        <p>
          Engagements are described anonymously by default. Client names and logos appear only where explicitly
          approved, and no metric is published without documented evidence. Full engagement briefs — problem,
          diagnosis, decision and outcome — are shared directly on request.
        </p>
      }
    >
      <div className="border-t border-primary/60">
        {caseStudies.map((cs, i) => (
          <Reveal key={cs.title} delay={i * 70} className="border-b border-hairline py-10 sm:py-12">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="label-mono">{cs.sector}</p>
                <h3 className="mt-4 max-w-sm font-display text-xl leading-snug font-semibold sm:text-2xl">
                  {cs.title}
                </h3>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="max-w-xl text-[15px] leading-relaxed text-muted-foreground">{cs.scope}</p>
                <p className="mt-4 font-mono text-[12px] tracking-wide text-muted-foreground/70 uppercase">
                  Full brief available on request
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Approach() {
  return (
    <Section
      id="approach"
      index="06"
      eyebrow="Approach"
      title={<>A working method, not a manifesto</>}
      intro={<p>Six steps, applied in order. Skipping the first two is the most common cause of expensive rework.</p>}
    >
      <ol className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
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
            <p className="label-mono">07 — Organisation</p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold sm:text-4xl">
              This work sits inside {identity.org}
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              My technology and AI work is delivered through {identity.org} — the organisation that carries the broader
              services, digital solutions, delivery capacity and project portfolio. If your requirement extends past
              systems and AI leadership into full delivery, {identity.org} is the right next step.
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
              <span className="self-center font-mono text-[12px] text-muted-foreground/70">metalogics.io</span>
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
            <p className="label-mono text-surface-foreground/55">08 — Contact</p>
            <h2 className="mt-5 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-[3.5rem]">
              {contact.headline}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15px] leading-relaxed text-surface-foreground/70 sm:text-base">{contact.body}</p>
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

function Footer() {
  return (
    <footer className="border-t border-surface-foreground/12 bg-surface text-surface-foreground">
      <div className="mx-auto max-w-[84rem] px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="font-display text-base font-semibold text-surface-foreground">{identity.name}</p>
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
          © {new Date().getFullYear()} {identity.org}. Personal profile page of {identity.name}, part of the
          MetaLogics website.
        </p>

      </div>
    </footer>
  );
}
