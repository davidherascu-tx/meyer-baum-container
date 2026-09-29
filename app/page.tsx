import Link from "next/link";
import { site } from "@/lib/site";
import Placeholder from "./components/Placeholder";
import Reveal from "./components/Reveal";
import { CtaBanner, Marquee, PrimaryButton, SectionHeading, TreeLine } from "./components/ui";
import {
  ArrowIcon,
  BroomIcon,
  CheckIcon,
  ClockIcon,
  ContainerIcon,
  EuroIcon,
  PhoneIcon,
  PinIcon,
  ShieldIcon,
  TreeIcon,
  WhatsAppIcon,
} from "./components/Icons";

const steps = [
  { title: "Anfrage", text: "Anrufen oder kurz schreiben – gern mit ein paar Fotos per WhatsApp." },
  { title: "Besichtigung", text: "Wir prüfen Baum, Standort und Zufahrt direkt bei Ihnen vor Ort." },
  { title: "Festes Angebot", text: "Sie erhalten ein transparentes Angebot ohne versteckte Kosten." },
  { title: "Ausführung", text: "Fällung, Abtransport und Entsorgung – das Grundstück bleibt besenrein." },
];

const reasons = [
  { icon: ShieldIcon, title: "Sicher & sauber", text: "Moderne Technik und ein sorgfältiger, kontrollierter Arbeitsablauf." },
  { icon: ClockIcon, title: "Schnell vor Ort", text: "Kurze Wege im Südosten Berlins – auch bei Sturmschäden." },
  { icon: EuroIcon, title: "Faire Festpreise", text: "Klares Angebot nach Besichtigung, keine bösen Überraschungen." },
  { icon: BroomIcon, title: "Alles aus einer Hand", text: "Fällung, Häckseln, Container und Entsorgung – ein Ansprechpartner." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-grain relative overflow-hidden bg-forest-900 text-white">
        <TreeLine className="h-64 sm:h-80" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-44 pt-36 sm:px-6 sm:pt-44 lg:grid-cols-12 lg:px-8 lg:pb-56">
          <div className="lg:col-span-7">
            <p className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-forest-100">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-500" />
              </span>
              Eichwalde · Dahme-Spreewald · Berlin-Süd
            </p>
            <h1 className="mt-6 animate-fade-up font-display text-5xl font-bold uppercase leading-[0.95] [animation-delay:100ms] sm:text-6xl lg:text-8xl">
              {site.tagline}
              <span className="mt-2 block text-signal-400">&amp; Containerdienst</span>
            </h1>
            <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-forest-100/85 [animation-delay:200ms]">
              Sichere Baumfällung, Problemfällung mit Seilklettertechnik, Wurzelfräsen und Container
              für Grünschnitt, Holz und Bauschutt – zuverlässig, sauber und zum Festpreis.
            </p>
            <div className="mt-9 flex animate-fade-up flex-col gap-3 [animation-delay:300ms] sm:flex-row">
              <PrimaryButton href="/kontakt">Kostenloses Angebot</PrimaryButton>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                <PhoneIcon className="h-5 w-5" />
                {site.phoneDisplay}
              </a>
            </div>
            <ul className="mt-10 grid animate-fade-up gap-3 text-sm font-semibold text-forest-100 [animation-delay:400ms] sm:grid-cols-3">
              {["Kostenlose Besichtigung", "Festpreis-Angebot", "Entsorgung inklusive"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-signal-400" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden animate-fade-up [animation-delay:350ms] lg:col-span-5 lg:block">
            <div className="animate-float rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="font-display text-2xl font-semibold uppercase tracking-wide">Schnell-Anfrage</p>
              <p className="mt-2 text-sm text-forest-100/80">
                Schicken Sie uns ein Foto Ihres Baumes – wir melden uns mit einer ersten Einschätzung.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 text-forest-950 transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-white">
                    <WhatsAppIcon className="h-6 w-6" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-forest-600">WhatsApp</span>
                    <span className="block font-bold">Fotos senden</span>
                  </span>
                  <ArrowIcon className="h-5 w-5 text-forest-400" />
                </a>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 text-forest-950 transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-700 text-white">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-forest-600">Anrufen</span>
                    <span className="block font-bold">{site.phoneDisplay}</span>
                  </span>
                  <ArrowIcon className="h-5 w-5 text-forest-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee
        items={["Baumfällung", "Problemfällung", "Wurzelfräsen", "Kronenpflege", "Containerdienst", "Grünschnitt", "Sturmschäden", "Entsorgung"]}
      />

      {/* ZWEI SÄULEN */}
      <section className="bg-rings py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Was wir machen"
            title="Zwei Bereiche. Ein Ansprechpartner."
            text="Ob der Baum weg muss oder der Garten aufgeräumt wird – wir übernehmen den kompletten Ablauf."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {[
              {
                href: "/baumfaellung",
                icon: TreeIcon,
                title: "Baumfällung",
                text: "Fällung, Problemfällung mit Seilklettertechnik, Wurzelstubben fräsen, Baum- und Heckenschnitt.",
                label: "Baumfällung",
                variant: "forest" as const,
              },
              {
                href: "/containerdienst",
                icon: ContainerIcon,
                title: "Containerdienst",
                text: "Absetzcontainer von 3 bis 10 m³ für Grünschnitt, Holz, Bauschutt, Sperrmüll und mehr.",
                label: "Container",
                variant: "bark" as const,
              },
            ].map(({ href, icon: Icon, title, text, label, variant }, i) => (
              <Reveal key={href} delay={i * 120}>
                <Link
                  href={href}
                  className="group relative block overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-forest-900/10 transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-forest-900/15"
                >
                  <div className="overflow-hidden">
                    <Placeholder
                      label={label}
                      variant={variant}
                      className="aspect-[16/9] transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-end justify-between gap-6 p-8">
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-100 text-forest-700">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="mt-5 font-display text-3xl font-bold uppercase tracking-wide text-forest-900">
                        {title}
                      </h3>
                      <p className="mt-2 max-w-md leading-relaxed text-forest-800/75">{text}</p>
                    </div>
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest-900 text-white transition duration-500 group-hover:rotate-[-45deg] group-hover:bg-signal-500 group-hover:text-forest-950">
                      <ArrowIcon className="h-6 w-6" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="So einfach geht's" title="In vier Schritten zum Ergebnis" />
          <ol className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <span className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-forest-200 to-transparent lg:block" aria-hidden />
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 120} className="relative">
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-forest-900 font-display text-3xl font-bold text-signal-400 ring-8 ring-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-wide text-forest-900">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-forest-800/75">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* WARUM WIR */}
      <section className="relative overflow-hidden bg-forest-800 py-24 text-white sm:py-32">
        <div className="bg-grain absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              light
              eyebrow="Warum Meyer"
              title="Ein Preis. Ein sauberes Ergebnis."
              text={`Hinter ${site.name} steht ${site.owner} aus Eichwalde – Ihr fester Ansprechpartner von der Besichtigung bis zur Abnahme.`}
            />
            <Reveal delay={150} className="mt-8">
              <Link href="/ueber-uns" className="group inline-flex items-center gap-2 font-bold text-signal-400">
                Mehr über uns
                <ArrowIcon className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-signal-400/50 hover:bg-white/10">
                  <Icon className="h-9 w-9 text-signal-400" />
                  <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-100/75">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EINSATZGEBIET */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="Einsatzgebiet"
            title="Im Südosten Berlins zu Hause"
            text="Von Eichwalde aus sind wir schnell bei Ihnen. Ihr Ort ist nicht dabei? Fragen Sie einfach an."
          />
          <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {site.serviceArea.map((c, i) => (
              <Reveal as="li" key={c} delay={i * 50}>
                <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-forest-800 shadow-sm ring-1 ring-forest-900/10 transition hover:-translate-y-0.5 hover:ring-forest-500">
                  <PinIcon className="h-4 w-4 text-signal-600" />
                  {c}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
