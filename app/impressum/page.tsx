import type { Metadata } from "next";
import { site } from "@/lib/site";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function Impressum() {
  return (
    <LegalPage title="Impressum">
      <div>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          {site.name}
          <br />
          {site.street}
          <br />
          {site.zip} {site.city}
          <br />
          {site.region}, {site.country}
        </p>
      </div>

      <div>
        <h2>Vertreten durch</h2>
        <p>{site.owner}</p>
      </div>

      <div>
        <h2>Kontakt</h2>
        <p>
          Mobilfunk: <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <br />
          E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>

      <div>
        <h2>Verantwortlich für den Inhalt</h2>
        <p>
          {site.owner}, {site.street}, {site.zip} {site.city}
        </p>
      </div>

      <div>
        <h2>Verbraucherstreitbeilegung</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>

      <div>
        <h2>Haftung für Inhalte</h2>
        <p>
          Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich.
        </p>
      </div>
    </LegalPage>
  );
}
