import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  index,
  eyebrow,
  title,
  intro,
  children,
  className,
  dark = false,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-16 border-t border-hairline",
        dark && "border-transparent bg-surface text-surface-foreground",
        className,
      )}
    >
      <div className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className={cn("label-mono", dark && "text-surface-foreground/55")}>
              {index} — {eyebrow}
            </p>
            <h2 className="mt-4 text-3xl leading-[1.08] font-semibold text-balance sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h2>
          </div>
          {intro ? (
            <div className="lg:col-span-7 lg:col-start-6">
              <div
                className={cn(
                  "max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base",
                  dark && "text-surface-foreground/70",
                )}
              >
                {intro}
              </div>
            </div>
          ) : null}
        </Reveal>
        <div className="mt-14 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}
