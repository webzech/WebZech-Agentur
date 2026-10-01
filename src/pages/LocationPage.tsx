import React, { useState } from 'react';
import { MapPin, CheckCircle2, ArrowRight, ChevronDown, Building, ShieldCheck } from 'lucide-react';
import { LocationItem, Language } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { portfolioData } from '../data/portfolioData';
import { servicesData } from '../data/servicesData';
import { locationsData } from '../data/locationsData';

interface LocationPageProps {
  location: LocationItem;
  lang: Language;
  onNavigate: (path: string) => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ location, lang, onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const nearbyLocations = locationsData.filter((l) => l.slug !== location.slug).slice(0, 4);

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Regionen', href: '/webentwicklung-bayern/' },
          { label: location.city }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 text-center space-y-6">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
          <MapPin className="w-3.5 h-3.5" />
          <span>{location.city} · {location.state}</span>
          <span aria-hidden="true">·</span>
          <span>Webzech</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-display text-balance">
          {location.h1}
        </h1>

        <p className="text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          {location.heroText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => {
              const el = document.getElementById('kontakt-formular');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Projekt in {location.city} anfragen</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 bg-neutral-900/70 border border-neutral-800 rounded-xl text-xs text-neutral-400 max-w-2xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Echte Dienstleistung für {location.city}: Remote-Abstimmung per Video oder persönliche Termine in Bayern.</span>
        </div>
      </section>

      {/* Local Context & Importance */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-neutral-900/80 border border-neutral-800 rounded-3xl space-y-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
              Standortfokus {location.city}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Warum eine professionelle Website in {location.city} wichtig ist
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            {location.regionalContext}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {location.whyNeeded.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-neutral-950/70 rounded-xl border border-neutral-800/80 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services available for this location */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Unser Leistungsspektrum
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Digitale Leistungen für Unternehmen in {location.city}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {servicesData.slice(0, 8).map((s) => (
            <div
              key={s.slug}
              onClick={() => onNavigate(`/${s.slug}/`)}
              className="p-5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-xl cursor-pointer group flex flex-col justify-between space-y-3 transition-colors"
            >
              <div>
                <h3 className="font-bold text-white text-sm group-hover:text-blue-400 transition-colors font-display">
                  {s.title}
                </h3>
                <p className="text-neutral-400 text-[11px] mt-1 line-clamp-2">
                  {s.shortDesc}
                </p>
              </div>
              <span className="text-blue-400 text-[11px] font-medium flex items-center gap-1">
                Details ansehen →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Target Businesses */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-4">
          <h3 className="text-xl font-bold text-white font-display">
            Für welche Branchen und Betriebe in {location.city}?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-300">
            {location.localBusinessesTarget.map((target, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 bg-neutral-950/60 rounded-lg border border-neutral-800">
                <Building className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{target}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Case Study */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
            Referenzprojekt
          </div>
          <h3 className="text-xl font-bold text-white font-display">
            Beispielhafter Projektablauf
          </h3>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <img
            src={portfolioData[0].image}
            alt={portfolioData[0].title}
            className="w-full h-64 md:h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="p-6 md:p-8 space-y-4 flex flex-col justify-between">
            <div>
              <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                {portfolioData[0].industry} · {portfolioData[0].location}
              </div>
              <h4 className="text-lg font-bold text-white mt-1 font-display">
                {portfolioData[0].title}
              </h4>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                {portfolioData[0].summary}
              </p>
            </div>
            <div className="space-y-2 pt-2 border-t border-neutral-800 text-xs">
              {portfolioData[0].results.slice(0, 2).map((res, i) => (
                <div key={i} className="flex items-center gap-2 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Häufige Fragen
          </div>
          <h2 className="text-2xl font-bold text-white font-display">
            Fragen zu Webprojekten in {location.city}
          </h2>
        </div>

        <div className="space-y-3">
          {location.faqs.map((faq, idx) => {
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

      {/* Nearby Regions Linking */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-neutral-400">
        <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-semibold text-white block">Weitere Regionen & Standorte:</span>
            <span>Wir unterstützen Betriebe auch in benachbarten Wirtschaftsräumen.</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {nearbyLocations.map((nb) => (
              <button
                key={nb.slug}
                onClick={() => onNavigate(`/${nb.slug}/`)}
                className="px-3 py-1 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded border border-neutral-800 transition-colors"
              >
                {nb.city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Form */}
      <section id="kontakt-formular" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <ContactForm
          lang={lang}
          prefilledMessage={`Anfrage für ein Webprojekt / SEO in ${location.city}.`}
        />
      </section>
    </div>
  );
};
