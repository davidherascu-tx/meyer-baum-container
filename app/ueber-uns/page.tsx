import type { Metadata } from "next";
import { site } from "@/lib/site";
import Placeholder from "../components/Placeholder";
import Reveal from "../components/Reveal";
import { CtaBanner, PageHero, SectionHeading } from "../components/ui";
import { BroomIcon, ClockIcon, EuroIcon, PinIcon, ShieldIcon, TreeIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "Über uns",
  description: `${site.name} – Ihr regionaler Partner für Baumfällung und Containerdienst aus Eichwalde. Inhaber ${site.owner}.`,
};

const values = [
  { icon: ShieldIcon, title: "Sicherheit zuerst", text: "Jeder Einsatz wird vorher geplant – für Sie, Ihre Nachbarn und unser Team." },
  { icon: EuroIcon, title: "Ehrliche Preise", text: "Ein klares Angebot nach Besichtigung. Was vereinbart ist, gilt." },
  { icon: ClockIcon, title: "Zuverlässig", text: "Wir kommen, wenn wir es sagen – und halten Sie auf dem Laufenden." },
  { icon: BroomIcon, title: "Sauber", text: "Wir verlassen Ihr Grundstück so, wie wir es gerne vorfinden würden." },
  { icon: TreeIcon, title: "Mit Respekt vor der Natur", text: "Wir beachten Schonzeiten, Baumschutz und verwerten Grüngut sinnvoll." },
  { icon: PinIcon, title: "Aus der Region", text: "Kurze Wege, persönlicher Kontakt – wir sind hier zu Hause." },
];

export default function UeberUns() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Persönlich."
        highlight="Regional. Verlässlich."
        text={`Hinter ${site.name} steht ${site.owner} aus Eichwalde. Bei uns haben Sie einen festen Ansprechpartner – vom ersten Anruf bis zum letzten Besenstrich.`}
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <Placeholder label={site.owner} className="aspect-[4/5] rounded-[2rem]" />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Inhaber"
              title={site.owner}
              text="Baumfällung und Containerdienst aus einer Hand: Das heißt für Sie weniger Abstimmung, weniger Termine und ein Ergebnis, bei dem alles zusammenpasst."
            />
            <Reveal delay={120} className="mt-6 space-y-4 leading-relaxed text-forest-800/80">
              <p>
                Ob ein einzelner Baum im Vorgarten, eine schwierige Fällung zwischen Haus und Garage oder der
                Container für die große Gartenaktion – wir schauen uns jede Situation genau an und finden die
                passende Lösung.
              </p>
              <p>
                Unsere Kunden sind Privathaushalte, Hausverwaltungen und Gewerbebetriebe in Eichwalde, im
                Landkreis Dahme-Spreewald und im Berliner Südosten.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Werte" title="Worauf Sie sich verlassen können" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 100}>
                <div className="group h-full rounded-3xl bg-bark-50 p-8 ring-1 ring-forest-900/5 transition duration-500 hover:bg-forest-900 hover:text-white">
                  <Icon className="h-9 w-9 text-signal-600 transition group-hover:text-signal-400" />
                  <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-wide">{title}</h3>
                  <p className="mt-2 leading-relaxed opacity-75">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading center eyebrow="Einsatzgebiet" title="Hier sind wir für Sie da" />
          <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {site.serviceArea.map((c, i) => (
              <Reveal as="li" key={c} delay={i * 50}>
                <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-forest-800 shadow-sm ring-1 ring-forest-900/10">
                  <PinIcon className="h-4 w-4 text-signal-600" /> {c}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner title="Lernen wir uns kennen" />
    </>
  );
}
