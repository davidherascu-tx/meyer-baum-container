"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const services = [
  "Baumfällung",
  "Problemfällung / Seilklettertechnik",
  "Wurzelstubben fräsen",
  "Baum- & Heckenschnitt",
  "Containerdienst",
  "Grünschnitt-Entsorgung",
  "Sonstiges",
];

const field =
  "w-full rounded-xl border border-forest-900/15 bg-white px-4 py-3 text-forest-950 placeholder:text-forest-900/35 outline-none transition focus:border-forest-500 focus:ring-4 focus:ring-forest-500/15";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const subject = `Anfrage: ${get("service")} – ${get("name")}`;
    const body = [
      `Name: ${get("name")}`,
      `Telefon: ${get("phone")}`,
      `E-Mail: ${get("email")}`,
      `Ort / PLZ: ${get("location")}`,
      `Leistung: ${get("service")}`,
      "",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-forest-800">Name *</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Max Mustermann" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-forest-800">Telefon *</span>
          <input name="phone" type="tel" required autoComplete="tel" className={field} placeholder="0176 …" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-forest-800">E-Mail</span>
          <input name="email" type="email" autoComplete="email" className={field} placeholder="name@beispiel.de" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-forest-800">Ort / PLZ</span>
          <input name="location" autoComplete="address-level2" className={field} placeholder="15732 Eichwalde" />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-forest-800">Gewünschte Leistung</span>
        <select name="service" className={field} defaultValue={services[0]}>
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-forest-800">Ihr Anliegen *</span>
        <textarea
          name="message"
          required
          rows={5}
          className={field}
          placeholder="z. B. Kiefer, ca. 15 m hoch, steht nah am Haus. Zufahrt über Einfahrt möglich."
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-forest-800">
        <input type="checkbox" required className="mt-1 h-4 w-4 accent-forest-600" />
        <span>
          Ich bin einverstanden, dass meine Angaben zur Bearbeitung der Anfrage verwendet werden.
          Mehr dazu in der{" "}
          <Link href="/datenschutz" className="font-semibold underline underline-offset-2">
            Datenschutzerklärung
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        className="w-full rounded-full bg-forest-700 px-8 py-4 font-bold text-white shadow-lg shadow-forest-900/20 transition hover:bg-forest-600 sm:w-auto"
      >
        Anfrage senden
      </button>

      {sent && (
        <p className="rounded-xl bg-forest-100 px-4 py-3 text-sm text-forest-800" role="status">
          Ihr E-Mail-Programm wurde geöffnet – bitte senden Sie die vorbereitete Nachricht ab.
          Alternativ erreichen Sie uns direkt unter{" "}
          <a href={site.phoneHref} className="font-bold underline">
            {site.phoneDisplay}
          </a>
          .
        </p>
      )}
    </form>
  );
}
