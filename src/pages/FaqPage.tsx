import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { Language } from '../types';
import { Search, ChevronDown, HelpCircle, CheckCircle2 } from 'lucide-react';

interface FaqPageProps {
  lang: Language;
  onNavigate: (path: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ lang, onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const allFaqs = [
    {
      cat: 'Kosten & Preise',
      q: 'Was kostet eine professionelle Website bei Webzech?',
      a: 'Unsere zielgerichteten Landingpages starten ab 1.200 € netto. Vollständige Unternehmensauftritte mit mehreren Leistungsbereichen, individueller Konzeption und SEO liegen in der Regel zwischen 2.400 € und 5.000 € netto. Wir arbeiten immer mit verbindlichen Festpreisen.'
    },
    {
      cat: 'Ablauf & Dauer',
      q: 'Wie lange dauert die Erstellung einer neuen Website?',
      a: 'Eine Standard-Unternehmenswebsite ist in der Regel innerhalb von 2 bis 4 Wochen nach Vorliegen aller Inhalte (Texte, Bildmaterial, Logo) fertiggestellt und live. Schnelle Landingpages realisieren wir oft in 7 bis 10 Werktagen.'
    },
    {
      cat: 'Technologie & CMS',
      q: 'Erstellt Webzech WordPress Websites?',
      a: 'Ja, sehr gerne! Wir sind auf maßgeschneiderte, schlanke WordPress-Websites mit Elementor Pro spezialisiert. Sie erhalten ein stabiles, sicheres System, das Sie nach der Übergabe kinderleicht selbst mit Texten und Fotos befüllen können.'
    },
    {
      cat: 'Bestehende Webseiten',
      q: 'Kann ich meine bestehende Website überarbeiten oder beschleunigen lassen?',
      a: 'Ja. Wir führen häufig Website-Relaunches und Speed-Audits durch: Wir modernisieren das Design, verbessern die mobile Bedienung und optimieren die Core Web Vitals, ohne dass Ihre bisherigen Google-Rankings verloren gehen.'
    },
    {
      cat: 'SEO & Auffindbarkeit',
      q: 'Ist Suchmaschinenoptimierung (SEO) bei neuen Webseiten inklusive?',
      a: 'Jede von uns erstellte Website beinhaltet solides technisches und On-Page Basis-SEO: Valides HTML, optimierte Überschriften (H1-H3), XML-Sitemap, Robots.txt, schnelle Ladezeiten und grundlegende Schema.org Strukturdaten. Für intensives regionales Local SEO oder erweiterte Keyword-Kampagnen bieten wir spezialisierte Zusatzpakete an.'
    },
    {
      cat: 'Erweiterbarkeit',
      q: 'Kann ich meine Website später flexibel erweitern?',
      a: 'Absolut. Wir programmieren modular und zukunftssicher. Sie können jederzeit neue Unterseiten, Blogbeiträge, Karriereseiten oder interaktive Anfrage-Rechner nachrüsten lassen.'
    },
    {
      cat: 'Zusammenarbeit & Regionen',
      q: 'In welchen Regionen arbeitet Webzech?',
      a: 'Wir betreuen Kunden in ganz Deutschland remote über Videokonferenzen und Telefon. Da unsere Wurzeln in Bayern liegen (Raum Passau / Vilshofen / München), sind hier nach Absprache auch persönliche Termine vor Ort möglich.'
    },
    {
      cat: 'Rechtliches & DSGVO',
      q: 'Sind die Websites rechtssicher nach DSGVO aufgebaut?',
      a: 'Ja. Wir hosten Google Fonts lokal, binden datenschutzkonforme Cookie-Einwilligungen ein, nutzen SSL-Zertifikate und stellen Ihnen saubere Vorlagen für Impressum und Datenschutzerklärung bereit.'
    }
  ];

  const filtered = allFaqs.filter(
    (f) =>
      f.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.a.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-16 md:space-y-24">
      <Breadcrumbs
        items={[{ label: 'FAQ' }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
          Antworten auf einen Blick
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight text-balance">
          Häufig gestellte Fragen (FAQ)
        </h1>
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Hier finden Sie ehrliche und transparente Antworten zu unseren Leistungen, Kosten, Abläufen und Technologien.
        </p>

        {/* Search input */}
        <div className="max-w-md mx-auto relative mt-6">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Suchbegriff eingeben (z.B. Kosten, WordPress, SEO)..."
            className="w-full pl-10 pr-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </section>

      {/* Accordions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-neutral-500 text-sm">
            Keine passende Antwort gefunden. Sprechen Sie uns gerne direkt an!
          </div>
        ) : (
          filtered.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between text-sm sm:text-base font-semibold text-white hover:text-blue-400 transition-colors cursor-pointer gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-neutral-500 uppercase px-2 py-0.5 bg-neutral-950 rounded border border-neutral-800 shrink-0">
                      {faq.cat}
                    </span>
                    <span>{faq.q}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-blue-400' : 'text-neutral-500'}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-850">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })
        )}
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <ContactForm
          lang={lang}
          prefilledMessage="Ich habe eine Frage, die in den FAQs nicht beantwortet wurde:"
        />
      </section>
    </div>
  );
};
