import Link from "next/link";
import { site } from "@/lib/site";
import Reveal from "./Reveal";
import { ArrowIcon, PhoneIcon } from "./Icons";

export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p
        className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] ${light ? "text-signal-400" : "text-signal-600"}`}
      >
        <span className="h-px w-8 bg-current" />
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-4xl font-bold uppercase leading-[1.05] sm:text-5xl ${light ? "text-white" : "text-forest-900"}`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? "text-forest-100/80" : "text-forest-800/80"}`}>
          {text}
        </p>
      )}
    </Reveal>
  );
}

function TreeLine({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMax slice"
      className={`pointer-events-none absolute inset-x-0 bottom-0 w-full text-forest-950 ${className}`}
      aria-hidden
    >
      <g fill="currentColor">
        <path opacity="0.5" d="M0 300 120 180l60 60 120-140 100 120 80-80 140 150 90-110 110 120 120-160 140 170 100-90 160 120v140H0Z" />
        <g className="origin-bottom animate-sway [transform-box:fill-box]">
          <path d="M80 400V270l-30 14 45-90-22 8 45-90 45 90-22-8 45 90-30-14v130Z" />
        </g>
        <g className="origin-bottom animate-sway [animation-delay:-2s] [transform-box:fill-box]">
          <path d="M1180 400V240l-36 18 54-108-27 10 54-108 54 108-27-10 54 108-36-18v160Z" />
        </g>
        <g className="origin-bottom animate-sway [animation-delay:-4s] [transform-box:fill-box]">
          <path d="M1320 400V300l-22 10 33-66-16 6 33-66 33 66-16-6 33 66-22-10v100Z" />
        </g>
        <g className="origin-bottom animate-sway [animation-delay:-1s] [transform-box:fill-box]">
          <path d="M260 400v-80l-18 8 27-54-13 5 27-54 27 54-13-5 27 54-18-8v80Z" />
        </g>
      </g>
    </svg>
  );
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  text?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-grain relative overflow-hidden bg-forest-900 text-white">
      <TreeLine className="h-40 sm:h-56" />
      <div className="relative mx-auto max-w-7xl px-4 pb-32 pt-36 sm:px-6 sm:pb-40 sm:pt-44 lg:px-8">
        <p className="animate-fade-up text-sm font-bold uppercase tracking-[0.2em] text-signal-400">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl animate-fade-up font-display text-5xl font-bold uppercase leading-[0.95] [animation-delay:100ms] sm:text-6xl lg:text-7xl">
          {title}
          {highlight && <span className="block text-signal-400">{highlight}</span>}
        </h1>
        {text && (
          <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-forest-100/85 [animation-delay:200ms]">
            {text}
          </p>
        )}
        {children && <div className="mt-9 animate-fade-up [animation-delay:300ms]">{children}</div>}
      </div>
    </section>
  );
}

export { TreeLine };

export function PrimaryButton({
  href,
  children,
  variant = "signal",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "signal" | "forest" | "ghost";
}) {
  const styles = {
    signal: "bg-signal-500 text-forest-950 hover:bg-signal-400 shadow-lg shadow-black/15",
    forest: "bg-forest-800 text-white hover:bg-forest-700 shadow-lg shadow-forest-900/20",
    ghost: "border border-white/25 text-white hover:bg-white/10",
  }[variant];
  const external = href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-bold transition ${styles}`;
  const inner = (
    <>
      {children}
      <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );
  return external ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-forest-900/10">
      {items.map((f, i) => (
        <Reveal key={f.q} delay={i * 60}>
          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-forest-900 [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700 transition duration-300 group-open:rotate-45 group-open:bg-signal-500 group-open:text-forest-950">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden>
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 max-w-2xl leading-relaxed text-forest-800/80">{f.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}

export function CtaBanner({
  title = "Bereit für Ihr Projekt?",
  text = "Rufen Sie an oder schicken Sie uns eine Anfrage – wir melden uns schnellstmöglich mit einer Einschätzung.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-signal-500 px-8 py-14 sm:px-14 sm:py-16">
        <svg viewBox="0 0 200 200" className="absolute -right-10 -top-10 h-72 w-72 animate-float text-signal-400" aria-hidden>
          <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl font-bold uppercase leading-none text-forest-950 sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-forest-950/80">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="/kontakt" variant="forest">
              Anfrage senden
            </PrimaryButton>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-forest-950 px-7 py-4 font-bold text-forest-950 transition hover:bg-forest-950 hover:text-white"
            >
              <PhoneIcon className="h-5 w-5" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-forest-900/10 bg-forest-950 py-5 text-white">
      <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl font-semibold uppercase tracking-wider" aria-hidden={i >= items.length}>
            {t}
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-signal-500" fill="currentColor" aria-hidden>
              <path d="M16 3 8 14h4l-5 7h7v6h4v-6h7l-5-7h4L16 3Z" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
