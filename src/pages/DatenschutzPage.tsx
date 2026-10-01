import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface DatenschutzPageProps {
  onNavigate: (path: string) => void;
}

export const DatenschutzPage: React.FC<DatenschutzPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <Breadcrumbs
        items={[{ label: 'Datenschutz' }]}
        onNavigate={onNavigate}
      />

      <div className="p-8 sm:p-12 bg-neutral-900 border border-neutral-800 rounded-3xl space-y-8 text-neutral-300 text-xs sm:text-sm leading-relaxed">
        <div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-display mb-2">
            Datenschutzerklärung
          </h1>
          <p className="text-neutral-400">
            Informationen über die Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-bold text-white font-display">1. Verantwortliche Stelle</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
            <strong>Webzech</strong> (Awais Abid & Werner Polatschek)<br />
            E-Mail: <a href="mailto:kontakt@webzech.de" className="text-blue-400 underline">kontakt@webzech.de</a>
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-bold text-white font-display">2. Erfassung und Speicherung personenbezogener Daten</h2>
          <p>
            Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert (z.B. Browsertyp, IP-Adresse in anonymisierter Form, Datum und Uhrzeit des Zugriffs). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-bold text-white font-display">3. Kontaktformular und Kommunikation</h2>
          <p>
            Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter (Art. 6 Abs. 1 lit. b DSGVO).
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-bold text-white font-display">4. Lokale Schriftarten (Google Fonts)</h2>
          <p>
            Zur Gewährleistung maximalen Datenschutzes werden alle Schriftarten (z.B. Plus Jakarta Sans, Syne) lokal auf unserem Server gehostet. Es erfolgt beim Laden der Website keinerlei Verbindung zu Servern von Google in den USA.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-bold text-white font-display">5. Ihre Rechte als betroffene Person</h2>
          <p>
            Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie das Recht auf Widerspruch (Art. 21 DSGVO). Wenden Sie sich hierfür jederzeit formlos an <a href="mailto:kontakt@webzech.de" className="text-blue-400 underline">kontakt@webzech.de</a>.
          </p>
        </div>
      </div>
    </div>
  );
};
