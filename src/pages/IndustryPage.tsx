import React, { useState } from 'react';
import { Building2, CheckCircle2, AlertCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { IndustryItem, Language } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { industriesData } from '../data/industriesData';

interface IndustryPageProps {
  industry: IndustryItem;
  lang: Language;
  onNavigate: (path: string) => void;
}

export const IndustryPage: React.FC<IndustryPageProps> = ({ industry, lang, onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const otherIndustries = industriesData.filter((i) => i.slug !== industry.slug);

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Branchen', href: '/webentwicklung-agentur/' },
          { label: industry.name }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 text-center space-y-6">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
          <Building2 className="w-3.5 h-3.5" />
          <span>Branchenfokus · {industry.name}</span>
          <span aria-hidden="true">·</span>
          <span>Webzech</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-display text-balance">
          {industry.h1}
        </h1>

        <p className="text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          {industry.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => {
              const el = document.getElementById('kontakt-formular');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Kostenloses Erstgespräch vereinbaren</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Challenges & Must-Haves */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Specific Challenges */}
          <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-red-400 font-semibold text-xs uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>Typische Hürden in dieser Branche</span>
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              Worauf es bei {industry.name} wirklich ankommt
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
              {industry.specificChallenges.map((ch, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold mt-0.5">✕</span>
                  <span>{ch}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Must Have Features */}
          <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Unverzichtbare Funktionen</span>
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              Was wir für Ihren Erfolg integrieren
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
              {industry.mustHaveFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solution & Results */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-neutral-900/80 border border-neutral-800 rounded-3xl space-y-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
              Die Lösung
            </div>
            <h3 className="text-2xl font-bold text-white font-display">
              Passgenaue Umsetzung für Ihren Betrieb
            </h3>
          </div>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            {industry.solutionText}
          </p>
          <div className="p-4 bg-neutral-950/70 border border-neutral-800 rounded-xl text-xs sm:text-sm text-emerald-400 font-medium">
            Erwartbares Ergebnis: {industry.resultsExpected}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Branchenfragen
          </div>
          <h2 className="text-2xl font-bold text-white font-display">
            Häufige Fragen zu {industry.name}
          </h2>
        </div>

        <div className="space-y-3">
          {industry.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between text-sm font-semibold text-white hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180 text-blue-400' : 'text-neutral-500'}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-neutral-850">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Other Industries Navigation */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-xs">
        <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-2xl space-y-3">
          <span className="font-semibold text-white block">Weitere Branchenlösungen:</span>
          <div className="flex flex-wrap gap-2">
            {otherIndustries.map((oi) => (
              <button
                key={oi.slug}
                onClick={() => onNavigate(`/branchen/${oi.slug}/`)}
                className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded border border-neutral-800 transition-colors"
              >
                {oi.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section Anchor */}
      <section id="kontakt-formular" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <ContactForm
          lang={lang}
          prefilledMessage={`Anfrage für eine Website im Bereich "${industry.name}".`}
        />
      </section>
    </div>
  );
};
