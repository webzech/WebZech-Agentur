import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Language } from '../types';

interface ImpressumPageProps {
  onNavigate: (path: string) => void;
}

export const ImpressumPage: React.FC<ImpressumPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <Breadcrumbs
        items={[{ label: 'Impressum' }]}
        onNavigate={onNavigate}
      />

      <div className="p-8 sm:p-12 bg-neutral-900 border border-neutral-800 rounded-3xl space-y-8 text-neutral-300 text-xs sm:text-sm leading-relaxed">
        <div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-display mb-2">
            Impressum
          </h1>
          <p className="text-neutral-400">
            Angaben gemäß § 5 TMG / § 18 MStV für Webzech
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-bold text-white font-display">Dienstanbieter</h2>
          <p>
            <strong>Webzech</strong><br />
            Webentwicklung & Digitalagentur<br />
            Inhaber: Awais Abid & Werner Polatschek<br />
            Standort: Bayern, Deutschland
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-bold text-white font-display">Kontakt</h2>
          <p>
            E-Mail: <a href="mailto:kontakt@webzech.de" className="text-blue-400 underline">kontakt@webzech.de</a><br />
            Website: <a href="https://webzech.de" className="text-blue-400 underline">https://webzech.de</a>
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-bold text-white font-display">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            Awais Abid & Werner Polatschek<br />
            Bayern, Deutschland
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-bold text-white font-display">EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer" className="text-blue-400 underline">
              https://ec.europa.eu/consumers/odr/
            </a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </div>
  );
};
