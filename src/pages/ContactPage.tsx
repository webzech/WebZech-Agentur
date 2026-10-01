import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { Language } from '../types';
import { Mail, Phone, MessageSquare, Clock, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  lang: Language;
  onNavigate: (path: string) => void;
  prefilledEstimate?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  lang,
  onNavigate,
  prefilledEstimate = ''
}) => {
  return (
    <div className="space-y-16 md:space-y-24">
      <Breadcrumbs
        items={[{ label: 'Kontakt' }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
          Projekt starten · Kostenloses Erstgespräch
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight text-balance">
          Sprechen wir über Ihren neuen Webauftritt
        </h1>
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Erzählen Sie uns von Ihren Zielen. Wir prüfen Ihre Wünsche vorab und melden uns innerhalb von 24 Stunden mit ersten konkreten Lösungsvorschlägen.
        </p>
      </section>

      {/* Dual Column: Direct Contact Info + Form */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Direct Info */}
          <div className="space-y-6">
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-4">
              <h3 className="text-lg font-bold text-white font-display">
                Direkter Kontakt
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Sie sprechen direkt mit den Gründern Awais Abid & Werner Polatschek.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <a
                  href="mailto:kontakt@webzech.de"
                  className="flex items-center gap-3 p-3 bg-neutral-950 rounded-xl border border-neutral-800 text-neutral-200 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="font-mono">kontakt@webzech.de</span>
                </a>

                <a
                  href="https://wa.me/4915123456789?text=Hallo%20Webzech-Team,%20ich%20habe%20eine%20Projektanfrage."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 bg-neutral-950 rounded-xl border border-neutral-800 text-neutral-200 hover:text-emerald-400 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp Chat starten</span>
                </a>

                <div className="flex items-center gap-3 p-3 bg-neutral-950 rounded-xl border border-neutral-800 text-neutral-300">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Bayern & remote bundesweit</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Reaktionsversprechen</span>
              </div>
              <h4 className="text-base font-bold text-white font-display">
                Schnelle Rückmeldung
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Wir garantieren eine qualifizierte Rückmeldung an Werktagen innerhalb von maximal 24 Stunden.
              </p>
            </div>

            <div className="p-6 bg-neutral-900/60 border border-neutral-800 rounded-2xl space-y-2 text-xs text-neutral-400">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>100% DSGVO-sicher</span>
              </div>
              <p>
                Ihre Daten werden streng vertraulich behandelt und ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
              </p>
            </div>
          </div>

          {/* Right Column: High-Converting Form */}
          <div className="lg:col-span-2">
            <ContactForm
              lang={lang}
              prefilledMessage={prefilledEstimate}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
