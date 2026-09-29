import type { Metadata } from "next";
import { site } from "@/lib/site";
import ContactForm from "../components/ContactForm";
import Reveal from "../components/Reveal";
import { PageHero } from "../components/ui";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Jetzt unverbindlich anfragen: Baumfällung und Containerdienst in Eichwalde. Telefon ${site.phoneDisplay}.`,
};

const channels = [
  { href: site.phoneHref, icon: PhoneIcon, label: "Mobil", value: site.phoneDisplay, color: "bg-forest-700 text-white" },
  { href: site.whatsappHref, icon: WhatsAppIcon, label: "WhatsApp", value: "Nachricht & Fotos senden", color: "bg-[#25D366] text-white", external: true },
  { href: `mailto:${site.email}`, icon: MailIcon, label: "E-Mail", value: site.email, color: "bg-signal-500 text-forest-950" },
];

export default function Kontakt() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Jetzt unverbindlich"
        highlight="anfragen."
        text="Beschreiben Sie kurz Ihr Vorhaben. Am schnellsten geht's per Telefon oder WhatsApp – gern mit Fotos."
      />

      <section className="bg-rings relative -mt-20 pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="space-y-4 lg:col-span-2">
            {channels.map(({ href, icon: Icon, label, value, color, external }, i) => (
              <Reveal key={label} delay={i * 100}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-lg shadow-forest-900/5 ring-1 ring-forest-900/10 transition duration-300 hover:-translate-y-0.5 hover:ring-forest-500"
                >
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition group-hover:scale-110 ${color}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-forest-600">{label}</span>
                    <span className="block break-all text-lg font-bold text-forest-900">{value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={300}>
              <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-lg shadow-forest-900/5 ring-1 ring-forest-900/10">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                  <PinIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-forest-600">Adresse</span>
                  <span className="block font-bold text-forest-900">
                    {site.street}, {site.zip} {site.city}
                  </span>
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:col-span-3">
            <div className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-forest-900/10 ring-1 ring-forest-900/10 sm:p-10">
              <h2 className="font-display text-3xl font-bold uppercase text-forest-900">Anfrageformular</h2>
              <p className="mb-8 mt-2 text-forest-800/75">Wir melden uns schnellstmöglich bei Ihnen zurück.</p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
