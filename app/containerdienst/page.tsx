import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import { CtaBanner, Faq, PageHero, PrimaryButton, SectionHeading } from "../components/ui";
import { CheckIcon, ContainerIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "Containerdienst",
  description:
    "Absetzcontainer von 3 bis 10 m³ für Grünschnitt, Holz, Bauschutt, Sperrmüll und Mischabfall in Eichwalde und Umgebung.",
};

const containers = [
  { size: "3", use: "Kleine Gartenaktionen, Grünschnitt, Renovierungsreste", scale: 0.6 },
  { size: "5", use: "Heckenrodung, Kellerentrümpelung, kleinere Umbauten", scale: 0.72 },
  { size: "7", use: "Größere Gartenprojekte, Bauschutt, Mischabfall", scale: 0.86 },
  { size: "10", use: "Wohnungsauflösung, viel Grün- und Holzabfall", scale: 1 },
];

const wasteTypes = [
  "Grünschnitt & Laub",
  "Holz (unbehandelt / behandelt)",
  "Wurzeln & Stubben",
  "Bauschutt",
  "Sperrmüll",
  "Baumischabfall",
  "Boden & Erdaushub",
];

const excluded = ["Asbest & Dämmwolle", "Farben, Lacke, Öle", "Elektrogeräte", "Reifen", "Sondermüll"];

const steps = [
  { title: "Bestellen", text: "Größe und Abfallart nennen, Wunschtermin vereinbaren." },
  { title: "Gestellt", text: "Wir stellen den Container pünktlich an den vereinbarten Platz." },
  { title: "Befüllen", text: "Sie befüllen den Container in Ruhe innerhalb der Standzeit." },
  { title: "Abgeholt", text: "Wir holen ab und entsorgen alles fachgerecht." },
];

const faqs = [
  {
    q: "Wo darf der Container stehen?",
    a: "Am einfachsten auf Ihrem Grundstück. Muss der Container auf öffentlichem Straßenland stehen, ist in der Regel eine Sondernutzungserlaubnis der Gemeinde nötig – wir beraten Sie dazu gern.",
  },
  {
    q: "Wie viel Platz braucht der Container?",
    a: "Das Fahrzeug braucht eine feste Zufahrt und etwas Platz zum Absetzen. Sagen Sie uns bei der Bestellung kurz, wie es bei Ihnen vor Ort aussieht.",
  },
  {
    q: "Wie lange kann ich den Container behalten?",
    a: "Die Standzeit stimmen wir individuell mit Ihnen ab. Sagen Sie uns einfach, wie lange Sie für Ihr Projekt brauchen.",
  },
  {
    q: "Darf ich verschiedene Abfälle mischen?",
    a: "Sortenreine Abfälle sind meist günstiger. Für gemischte Abfälle gibt es den Baumischabfall-Container. Bitte sprechen Sie uns vorher an.",
  },
];

export default function Containerdienst() {
  return (
    <>
      <PageHero
        eyebrow="Containerdienst"
        title="Der passende Container."
        highlight="Pünktlich vor Ort."
        text="Wir stellen den Container, Sie befüllen ihn in Ruhe – und wir holen ihn zum vereinbarten Termin wieder ab."
      >
        <PrimaryButton href="/kontakt">Container bestellen</PrimaryButton>
      </PageHero>

      {/* GRÖSSEN */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Größen" title="Von 3 bis 10 Kubikmeter" text="Unsicher, welche Größe passt? Wir beraten Sie gern am Telefon." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {containers.map((c, i) => (
              <Reveal key={c.size} delay={i * 100}>
                <div className="group flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-forest-900/10 transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-forest-900/10 hover:ring-signal-500">
                  <div className="flex h-24 items-end">
                    <svg
                      viewBox="0 0 120 60"
                      className="w-full origin-bottom-left text-forest-700 transition duration-500 group-hover:text-signal-500"
                      style={{ transform: `scale(${c.scale})` }}
                      aria-hidden
                    >
                      <path d="M4 14h112l-10 42H14L4 14Z" fill="currentColor" />
                      <path d="M30 14v42M60 14v42M90 14v42" stroke="white" strokeOpacity="0.25" strokeWidth="2" />
                      <path d="M4 14h112" stroke="white" strokeOpacity="0.35" strokeWidth="3" />
                    </svg>
                  </div>
                  <p className="mt-6 font-display text-6xl font-bold text-forest-900">
                    {c.size}
                    <span className="ml-1 text-2xl">m³</span>
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-forest-600">Absetzcontainer</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-forest-800/75">{c.use}</p>
                  <p className="mt-6 border-t border-forest-900/10 pt-4 text-sm font-bold text-signal-600">Preis auf Anfrage</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABFALLARTEN */}
      <section className="relative overflow-hidden bg-forest-800 py-24 text-white sm:py-32">
        <div className="bg-grain absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading light eyebrow="Abfallarten" title="Was darf rein?" text="Bitte Abfallarten nicht mischen, wenn nicht anders vereinbart." />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {wasteTypes.map((w, i) => (
                <Reveal as="li" key={w} delay={i * 60}>
                  <span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 font-semibold">
                    <CheckIcon className="h-5 w-5 shrink-0 text-signal-400" /> {w}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={150} className="self-end">
            <div className="rounded-3xl bg-white p-8 text-forest-950">
              <ContainerIcon className="h-10 w-10 text-signal-600" />
              <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-wide">Nicht erlaubt</h3>
              <p className="mt-2 text-sm text-forest-800/75">Schadstoffe gehören nicht in den Container und müssen gesondert entsorgt werden.</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {excluded.map((e) => (
                  <li key={e} className="rounded-full bg-red-50 px-3.5 py-1.5 text-sm font-semibold text-red-800 ring-1 ring-red-200">
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Ablauf" title="So läuft's" />
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 120}>
                <div className="h-full rounded-3xl bg-bark-100 p-8">
                  <span className="font-display text-6xl font-bold text-signal-500">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-wide text-forest-900">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-forest-800/75">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <SectionHeading eyebrow="Häufige Fragen" title="Rund um den Container" />
          <div className="lg:col-span-2">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <CtaBanner title="Container gebraucht?" text="Nennen Sie uns Größe, Abfallart und Wunschtermin – wir kümmern uns um den Rest." />
    </>
  );
}
