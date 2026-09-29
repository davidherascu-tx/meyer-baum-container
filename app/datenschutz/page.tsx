import type { Metadata } from "next";
import { site } from "@/lib/site";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

export default function Datenschutz() {
  return (
    <LegalPage title="Datenschutz">
      <div>
        <h2>1. Verantwortlicher</h2>
        <p>
          {site.owner}, {site.name}
          <br />
          {site.street}, {site.zip} {site.city}
          <br />
          Telefon: {site.phoneDisplay} · E-Mail:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>

      <div>
        <h2>2. Allgemeines</h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir verarbeiten personenbezogene
          Daten ausschließlich im Rahmen der gesetzlichen Bestimmungen, insbesondere der
          Datenschutz-Grundverordnung (DSGVO).
        </p>
      </div>

      <div>
        <h2>3. Hosting und Server-Logfiles</h2>
        <p>
          Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch Informationen
          erfasst, die Ihr Browser übermittelt (z. B. IP-Adresse, Datum und Uhrzeit, aufgerufene
          Seite, Browsertyp). Dies dient der technischen Bereitstellung und Sicherheit der
          Website (Art. 6 Abs. 1 lit. f DSGVO). Die Daten werden nicht mit anderen Datenquellen
          zusammengeführt.
        </p>
      </div>

      <div>
        <h2>4. Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns per Telefon, E-Mail, WhatsApp oder über das Anfrageformular kontaktieren,
          verarbeiten wir Ihre Angaben (z. B. Name, Telefonnummer, Adresse, Beschreibung des
          Auftrags) zur Bearbeitung Ihrer Anfrage und zur Erstellung eines Angebots (Art. 6 Abs.
          1 lit. b DSGVO). Das Anfrageformular öffnet Ihr eigenes E-Mail-Programm; die Daten
          werden nicht auf dieser Website gespeichert.
        </p>
        <p>
          Bei Nutzung von WhatsApp gelten zusätzlich die Datenschutzbestimmungen der WhatsApp
          Ireland Ltd. Sie können uns alternativ jederzeit per Telefon oder E-Mail erreichen.
        </p>
      </div>

      <div>
        <h2>5. Cookies und Tracking</h2>
        <p>
          Diese Website verwendet keine Tracking- oder Marketing-Cookies und bindet keine
          Analysedienste ein. Schriftarten werden lokal vom eigenen Server ausgeliefert.
        </p>
      </div>

      <div>
        <h2>6. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
          Verarbeitung, Datenübertragbarkeit sowie Widerspruch (Art. 15–21 DSGVO). Zudem können
          Sie sich bei einer Aufsichtsbehörde beschweren, z. B. bei der Landesbeauftragten für
          den Datenschutz und für das Recht auf Akteneinsicht Brandenburg.
        </p>
      </div>

      <div>
        <h2>7. Speicherdauer</h2>
        <p>
          Ihre Daten werden gelöscht, sobald sie für den Zweck der Verarbeitung nicht mehr
          erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </div>
    </LegalPage>
  );
}
