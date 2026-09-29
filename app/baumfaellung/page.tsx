import type { Metadata } from "next";
import { site } from "@/lib/site";
import Placeholder from "../components/Placeholder";
import Reveal from "../components/Reveal";
import { CtaBanner, Faq, PageHero, PrimaryButton, SectionHeading } from "../components/ui";
import { CheckIcon, PhoneIcon, RecycleIcon, RopeIcon, ScissorsIcon, StumpIcon, TreeIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "Baumfällung & Problemfällung",
  description:
    "Baumfällung, Problemfällung mit Seilklettertechnik, Wurzelstubben fräsen und Baumschnitt in Eichwalde, Zeuthen, Königs Wusterhausen und Berlin-Süd.",
};

const services = [
  {
    icon: TreeIcon,
    title: "Baumfällung",
    text: "Fachgerechte Fällung von Bäumen jeder Größe – vom Obstbaum im Garten bis zur großen Kiefer auf dem Grundstück.",
    points: ["Klassische Fällung mit Fallkerb", "Laub- und Nadelbäume", "Holz auf Wunsch ofenfertig"],
  },
  {
    icon: RopeIcon,
    title: "Problemfällung",
    text: "Steht der Baum nah an Haus, Zaun oder Leitungen, tragen wir ihn in Teilstücken ab und seilen jedes Stück kontrolliert ab.",
    points: ["Seilklettertechnik", "Abseiltechnik für Stammteile", "Ideal bei engen Grundstücken"],
  },
  {
    icon: StumpIcon,
    title: "Wurzelstubben fräsen",
    text: "Wir fräsen Baumstümpfe bodentief aus, damit die Fläche wieder für Rasen, Beet oder Pflaster nutzbar ist.",
    points: ["Bodentiefes Ausfräsen", "Späne auf Wunsch entsorgt", "Auch für schmale Zugänge"],
  },
  {
    icon: ScissorsIcon,
    title: "Baum- & Heckenschnitt",
    text: "Kronenpflege, Rückschnitt und Totholzentfernung für mehr Sicherheit und gesunde Bäume.",
    points: ["Kronenpflege & -einkürzung", "Totholz entfernen", "Heckenschnitt & Rodung"],
  },
  {
    icon: RecycleIcon,
    title: "Häckseln & Entsorgung",
    text: "Äste und Schnittgut werden direkt vor Ort gehäckselt, abtransportiert und ordnungsgemäß verwertet.",
    points: ["Häckseln vor Ort", "Abtransport inklusive", "Fachgerechte Verwertung"],
  },
];

const faqs = [
  {
    q: "Brauche ich eine Genehmigung, um einen Baum zu fällen?",
    a: "Das hängt von Ihrer Gemeinde ab. Viele Kommunen in Brandenburg und Berlin haben eine Baumschutzsatzung bzw. -verordnung, die ab einem bestimmten Stammumfang eine Fällgenehmigung vorschreibt. Wir sagen Ihnen bei der Besichtigung, was für Ihren Baum gilt, und unterstützen Sie beim Antrag.",
  },
  {
    q: "Wann darf gefällt werden?",
    a: "Nach dem Bundesnaturschutzgesetz sind Fällungen und starke Rückschnitte außerhalb des Waldes grundsätzlich vom 1. Oktober bis 28./29. Februar erlaubt. Von März bis September sind nur schonende Pflegeschnitte oder genehmigte Ausnahmen (z. B. bei akuter Gefahr) möglich.",
  },
  {
    q: "Was kostet eine Baumfällung?",
    a: "Der Preis richtet sich nach Größe, Standort, Zugänglichkeit und Entsorgungsaufwand. Nach einer kurzen Besichtigung erhalten Sie von uns ein festes Angebot.",
  },
  {
    q: "Was passiert mit dem Holz und dem Schnittgut?",
    a: "Auf Wunsch lassen wir das Stammholz ofenfertig zugeschnitten bei Ihnen. Äste und Schnittgut häckseln wir und entsorgen alles fachgerecht.",
  },
  {
    q: "Helfen Sie auch nach einem Sturm?",
    a: "Ja. Umgestürzte oder angebrochene Bäume sind gefährlich – rufen Sie uns direkt an, wir sichern die Stelle und beseitigen den Schaden so schnell wie möglich.",
  },
];

export default function Baumfaellung() {
  return (
    <>
      <PageHero
        eyebrow="Baumfällung"
        title="Sicher gefällt."
        highlight="Sauber hinterlassen."
        text="Vom einzelnen Obstbaum bis zur Problemfällung direkt am Haus – wir planen jeden Schnitt und räumen hinterher komplett auf."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <PrimaryButton href="/kontakt">Besichtigung anfragen</PrimaryButton>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-bold text-white transition hover:bg-white/10"
          >
            <PhoneIcon className="h-5 w-5" /> {site.phoneDisplay}
          </a>
        </div>
      </PageHero>

      {/* LEISTUNGEN */}
      <section className="bg-rings py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leistungen"
            title="Alles rund um den Baum"
            text="Wir übernehmen den kompletten Ablauf – Sie brauchen sich um nichts zu kümmern."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text, points }, i) => (
              <Reveal key={title} delay={(i % 3) * 100}>
                <article className="group h-full rounded-3xl border border-forest-900/10 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-forest-900/10">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-100 text-forest-700 transition duration-500 group-hover:rotate-6 group-hover:bg-forest-800 group-hover:text-signal-400">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-wide text-forest-900">{title}</h3>
                  <p className="mt-3 leading-relaxed text-forest-800/75">{text}</p>
                  <ul className="mt-5 space-y-2 border-t border-forest-900/10 pt-5 text-sm font-semibold text-forest-800">
                    {points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-signal-600" /> {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <div className="flex h-full flex-col justify-between rounded-3xl bg-forest-900 p-8 text-white">
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide">Sturmschaden?</h3>
                  <p className="mt-3 leading-relaxed text-forest-100/80">
                    Umgestürzte oder angebrochene Bäume sind gefährlich. Rufen Sie direkt an – wir kommen so schnell wie möglich.
                  </p>
                </div>
                <a
                  href={site.phoneHref}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-signal-500 px-6 py-3.5 font-bold text-forest-950 transition hover:bg-signal-400"
                >
                  <PhoneIcon className="h-5 w-5" /> Jetzt anrufen
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROBLEMFÄLLUNG */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="grid grid-cols-5 grid-rows-5 gap-4">
            <Placeholder label="Baumfällung" className="col-span-3 row-span-5 aspect-[3/5] rounded-3xl" />
            <Placeholder label="Seilklettertechnik" variant="bark" className="col-span-2 row-span-3 rounded-3xl" />
            <Placeholder label="Wurzelfräse" className="col-span-2 row-span-2 rounded-3xl" />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Problemfällung"
              title="Auch wenn es eng wird"
              text="Nicht jeder Baum lässt sich einfach umlegen. Steht er dicht am Haus, über dem Carport oder neben Leitungen, tragen wir ihn kontrolliert in Teilstücken ab."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Stückweises Abtragen mit Seilklettertechnik",
                "Kontrolliertes Abseilen über Haus, Zaun und Beeten",
                "Beratung zu Fällgenehmigung und Ersatzpflanzung",
                "Stubbenfräsen, Häckseln und Abtransport",
              ].map((item, i) => (
                <Reveal as="li" key={item} delay={i * 80} className="flex gap-3 text-forest-900">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal-500 text-forest-950">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {item}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FÄLLZEIT-HINWEIS */}
      <section className="px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] bg-bark-100 p-8 sm:p-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-signal-600">Gut zu wissen</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase text-forest-900">Fällsaison</h2>
          </div>
          <div className="grid grid-cols-12 gap-1 lg:col-span-8" aria-label="Fällungen erlaubt von Oktober bis Februar">
            {["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"].map((m, i) => {
              const allowed = i <= 1 || i >= 9;
              return (
                <div key={m} className="text-center">
                  <div className={`h-12 rounded-lg ${allowed ? "bg-forest-600" : "bg-forest-900/10"}`} />
                  <span className="mt-2 block text-[0.7rem] font-semibold text-forest-800 sm:text-xs">{m}</span>
                </div>
              );
            })}
            <p className="col-span-12 mt-4 text-sm text-forest-800/80">
              <span className="mr-2 inline-block h-3 w-3 rounded-sm bg-forest-600 align-middle" />
              Fällungen grundsätzlich erlaubt (1. Okt. – 28./29. Feb.). Im Sommer nur Pflegeschnitte oder genehmigte Ausnahmen.
            </p>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <SectionHeading eyebrow="Häufige Fragen" title="Rund um die Fällung" text="Sie haben eine andere Frage? Rufen Sie uns einfach an." />
          <div className="lg:col-span-2">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <CtaBanner title="Muss Ihr Baum weg?" />
    </>
  );
}
