import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CostCalculator } from '../components/CostCalculator';
import { ContactForm } from '../components/ContactForm';
import { Language } from '../types';
import { CheckCircle2, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';

interface PricingPageProps {
  lang: Language;
  onNavigate: (path: string) => void;
  onOpenCalculatorEstimate: (estimate: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  lang,
  onNavigate,
  onOpenCalculatorEstimate
}) => {
  return (
    <div className="space-y-16 md:space-y-24">
      <Breadcrumbs
        items={[{ label: 'Preise & Kalkulator' }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
          Transparenz & Planungssicherheit
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight text-balance">
          Transparente Festpreise für Ihre Website
        </h1>
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Keine versteckten Agenturaufschläge oder unklaren Stundensätze. Bei Webzech wissen Sie vor dem Start genau, welche Investition Sie erwartet.
        </p>
      </section>

      {/* 3 Core Packages */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Package 1 */}
          <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-3xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                  Starter / Kampagnen
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  Conversion Landingpage
                </h3>
              </div>

              <div className="py-2">
                <span className="text-3xl font-extrabold text-white tabular-nums font-display">
                  ab 1.200 €
                </span>
                <span className="text-xs text-neutral-500 block mt-0.5">Einmaliger Festpreis zzgl. MwSt.</span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Perfekt für gezielte Google Ads Kampagnen, Notdienste oder ein bestimmtes Produktangebot.
              </p>

              <ul className="space-y-2.5 text-xs text-neutral-300 pt-2 border-t border-neutral-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  1 fokussierte Zielseite (Single Page)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Mobil- & Desktop-Optimierung
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Direktes Kontaktformular & WhatsApp
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Schnelle Ladezeit & Core Web Vitals
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  DSGVO-konforme Umsetzung
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenCalculatorEstimate('Paket-Auswahl: Conversion Landingpage (ab 1.200 € netto)')}
              className="w-full py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
            >
              Landingpage anfragen
            </button>
          </div>

          {/* Package 2 (Featured) */}
          <div className="p-8 bg-neutral-900 border-2 border-blue-500 rounded-3xl flex flex-col justify-between space-y-6 shadow-2xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Beliebteste Wahl
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block mb-1">
                  Mittelstand & Betriebe
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  Business Website
                </h3>
              </div>

              <div className="py-2">
                <span className="text-3xl font-extrabold text-white tabular-nums font-display">
                  ab 2.400 €
                </span>
                <span className="text-xs text-neutral-500 block mt-0.5">Einmaliger Festpreis zzgl. MwSt.</span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Der komplette, professionelle Webauftritt für Handwerker, Dienstleister, Praxen und Firmen.
              </p>

              <ul className="space-y-2.5 text-xs text-neutral-300 pt-2 border-t border-neutral-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  Bis zu 8 individuell gestaltete Unterseiten
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  WordPress & Elementor Pro zur einfachen Selbstpflege
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  Umfassendes On-Page SEO & Schema.org Setup
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  Lokale Verknüpfung (Google Maps / Business Profil)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  Karriere- oder Referenzbereich
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  Persönliches Redaktions-Schulungsvideo
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenCalculatorEstimate('Paket-Auswahl: Business Website (ab 2.400 € netto)')}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl transition-colors shadow-lg shadow-blue-900/40 cursor-pointer"
            >
              Business Website anfragen
            </button>
          </div>

          {/* Package 3 */}
          <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-3xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                  Maßanfertigung
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  Portal & B2B Plattform
                </h3>
              </div>

              <div className="py-2">
                <span className="text-3xl font-extrabold text-white tabular-nums font-display">
                  ab 4.200 €
                </span>
                <span className="text-xs text-neutral-500 block mt-0.5">Einmaliger Festpreis zzgl. MwSt.</span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Für anspruchsvolle Unternehmensplattformen mit Mehrsprachigkeit, Rechnern oder API-Schnittstellen.
              </p>

              <ul className="space-y-2.5 text-xs text-neutral-300 pt-2 border-t border-neutral-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  15+ Seiten oder modulare Custom-Komponenten
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  Mehrsprachigkeit (DE, EN, RU, UK) mit hreflang
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  Individuelle Anfrage-Rechner oder Filter-Kataloge
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  Spezielle Sicherheits- und Firewall-Härtung
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  Prioritärer technischer Direktsupport
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenCalculatorEstimate('Paket-Auswahl: Portal & B2B Plattform (ab 4.200 € netto)')}
              className="w-full py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
            >
              Plattform-Projekt besprechen
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <CostCalculator
          lang={lang}
          onSelectEstimate={(est) => onOpenCalculatorEstimate(est)}
        />
      </section>

      {/* FAQ on Pricing */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <h3 className="text-xl font-bold text-white text-center font-display mb-6">
          Häufige Fragen zu Preisen und Abrechnung
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-neutral-300">
          <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl space-y-1.5">
            <h4 className="font-semibold text-white">Gibt es versteckte Folgekosten?</h4>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Nein. Die Website gehört nach der Bezahlung zu 100% Ihnen. Sie zahlen lediglich Ihre normalen Server- und Domainkosten (ca. 5–15 € / Monat bei deutschen Hostern).
            </p>
          </div>

          <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl space-y-1.5">
            <h4 className="font-semibold text-white">Wie läuft die Zahlung ab?</h4>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Üblicherweise 50% Anzahlung bei Projektstart und 50% Restbetrag erst nach Ihrer finalen Freigabe und erfolgreichem Live-Gang.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <ContactForm lang={lang} />
      </section>
    </div>
  );
};
