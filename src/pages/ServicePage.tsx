import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, HelpCircle, ChevronDown, Layers, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { servicesData } from '../data/servicesData';
import { locationsData } from '../data/locationsData';

interface ServicePageProps {
  service: ServiceItem;
  lang: Language;
  onNavigate: (path: string) => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({ service, lang, onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const relatedServices = servicesData.filter((s) => s.slug !== service.slug).slice(0, 3);
  const featuredLocations = locationsData.slice(0, 4);

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Leistungen', href: '/webentwicklung-agentur/' },
          { label: service.title }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 text-center space-y-6">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
          <span>{service.primaryKeyword}</span>
          <span aria-hidden="true">·</span>
          <span>Webzech Deutschland</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-display text-balance">
          {service.h1}
        </h1>

        <p className="text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          {service.heroIntro}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => {
              const el = document.getElementById('kontakt-formular');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Kostenloses Erstgespräch anfragen</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('/preise/')}
            className="w-full sm:w-auto px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 text-sm font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Preise & Richtwerte ansehen
          </button>
        </div>
      </section>

      {/* Problem & Solution Dual Block */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem */}
          <div className="p-8 bg-neutral-900/80 border border-red-900/30 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-red-400 font-semibold text-xs uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>Häufige Hürden</span>
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              {service.problem.title}
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
              {service.problem.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold mt-0.5">✕</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="p-8 bg-neutral-900/80 border border-emerald-900/30 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Der Webzech Ansatz</span>
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              {service.solution.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {service.solution.text}
            </p>
            <div className="pt-2">
              <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Saubere Ausführung direkt durch erfahrene Entwickler
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Qualitätsmerkmale
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Was diese Leistung auszeichnet
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.features.map((feat, idx) => (
            <div key={idx} className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-2">
              <h3 className="text-base font-bold text-white font-display">
                {feat.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-neutral-900/60 border border-neutral-800 rounded-3xl space-y-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
              Schritt für Schritt
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Unser Vorgehen bei diesem Projekt
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((p, idx) => (
              <div key={idx} className="p-5 bg-neutral-950 border border-neutral-800/80 rounded-xl space-y-2">
                <div className="text-xl font-extrabold text-blue-500 font-mono">
                  {p.step}
                </div>
                <h4 className="font-semibold text-white text-sm font-display">
                  {p.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for & Deliverables */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white font-display">
              Für wen ist diese Leistung ideal?
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              {service.forWhom.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white font-display">
              Konkrete Ergebnisse (Deliverables)
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service-Specific FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Häufige Fragen
          </div>
          <h2 className="text-2xl font-bold text-white font-display">
            Fragen & Antworten zu {service.title}
          </h2>
        </div>

        <div className="space-y-3">
          {service.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden transition-colors"
              >
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

      {/* Internal Linking: Related Services & Locations */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-neutral-950 border border-neutral-800 rounded-2xl text-xs">
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm font-display">
              Verwandte Leistungen
            </h4>
            <div className="space-y-2">
              {relatedServices.map((rel) => (
                <button
                  key={rel.slug}
                  onClick={() => onNavigate(`/${rel.slug}/`)}
                  className="block text-left text-neutral-400 hover:text-blue-400 transition-colors"
                >
                  → {rel.title}: {rel.shortDesc}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 text-sm font-display">
              Regionale Verfügbarkeit
            </h4>
            <p className="text-neutral-400 mb-3 text-xs leading-relaxed">
              Wir bieten {service.title} für Unternehmen bundesweit sowie mit persönlicher Betreuung vor Ort in:
            </p>
            <div className="flex flex-wrap gap-2">
              {featuredLocations.map((loc) => (
                <button
                  key={loc.slug}
                  onClick={() => onNavigate(`/${loc.slug}/`)}
                  className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded text-neutral-300 hover:text-white transition-colors"
                >
                  {loc.city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Anchor */}
      <section id="kontakt-formular" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <ContactForm
          lang={lang}
          prefilledMessage={`Interesse an der Leistung "${service.title}". Bitte um ein unverbindliches Erstgespräch.`}
        />
      </section>
    </div>
  );
};
