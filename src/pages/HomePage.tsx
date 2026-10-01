import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Laptop, Search, Award, MapPin, Code2, Layers, Cpu, Users, ChevronRight, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { getT } from '../data/translations';
import { servicesData } from '../data/servicesData';
import { foundersData } from '../data/foundersData';
import { portfolioData } from '../data/portfolioData';
import { CostCalculator } from '../components/CostCalculator';
import { ContactForm } from '../components/ContactForm';

interface HomePageProps {
  lang: Language;
  onNavigate: (path: string) => void;
  onOpenCalculatorEstimate: (estimate: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  lang,
  onNavigate,
  onOpenCalculatorEstimate
}) => {
  const t = getT(lang);
  const [activeTab, setActiveTab] = useState<'all' | 'wordpress' | 'landingpage'>('all');

  const filteredProjects = activeTab === 'all'
    ? portfolioData
    : activeTab === 'wordpress'
    ? portfolioData.filter((p) => p.techStack.includes('WordPress'))
    : portfolioData.filter((p) => p.service.includes('Landingpage'));

  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 md:pt-20 pb-16 overflow-hidden">
        {/* Subtle geometric background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Top Kicker - Unboxed Text Metadata according to zero-pill discipline */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <span>Webentwicklung</span>
              <span aria-hidden="true">·</span>
              <span>Websites</span>
              <span aria-hidden="true">·</span>
              <span>Landingpages</span>
              <span aria-hidden="true">·</span>
              <span>SEO für Deutschland</span>
            </div>

            {/* Headline H1 with text-wrap: balance */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-display text-balance">
              {t.hero.h1}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto font-normal">
              {t.hero.subtext}
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                onClick={() => onNavigate('/kontakt/')}
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-xl shadow-blue-900/30 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('/portfolio/')}
                className="w-full sm:w-auto px-7 py-3.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.hero.secondaryCta}</span>
              </button>
            </div>

            {/* Trust Signal Line without fake statistics */}
            <div className="pt-6 text-xs text-neutral-400 flex flex-wrap items-center justify-center gap-4">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Persönlich geführt von Awais Abid & Werner Polatschek
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Transparente Festpreise ohne Nachforderungen
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                100% DSGVO-konform nach deutschem Recht
              </span>
            </div>
          </div>

          {/* Visual Showcase: Studio & Architecture Preview */}
          <div className="mt-12 md:mt-16 max-w-5xl mx-auto relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900">
            <img
              src="/src/assets/images/hero_webzech_studio_1790830570463.jpg"
              alt="Webzech – Webentwicklung und Digitalagentur Studio in Deutschland"
              className="w-full h-72 sm:h-96 md:h-[460px] object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Subtle Gradient Scrim with workflow stages */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent flex flex-col justify-end p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-neutral-950/80 backdrop-blur-md p-4 rounded-xl border border-neutral-800/80 text-xs">
                <div>
                  <div className="text-neutral-400 text-[10px] uppercase tracking-wider">01. Konzeption</div>
                  <div className="font-semibold text-white mt-0.5">Strategie & UX</div>
                </div>
                <div>
                  <div className="text-neutral-400 text-[10px] uppercase tracking-wider">02. Entwicklung</div>
                  <div className="font-semibold text-white mt-0.5">Clean Code & WordPress</div>
                </div>
                <div>
                  <div className="text-neutral-400 text-[10px] uppercase tracking-wider">03. Performance</div>
                  <div className="font-semibold text-white mt-0.5">Core Web Vitals &lt; 1s</div>
                </div>
                <div>
                  <div className="text-neutral-400 text-[10px] uppercase tracking-wider">04. Sichtbarkeit</div>
                  <div className="font-semibold text-white mt-0.5">Google Maps & SEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE CORE PILLARS (TRUST SECTION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 bg-neutral-900/60 border border-neutral-800 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              {t.quickStats.focus1}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {t.quickStats.focus1Desc} Sie erhalten vor Projektstart ein verbindliches Festpreisangebot mit detailliertem Leistungskatalog.
            </p>
          </div>

          <div className="p-6 md:p-8 bg-neutral-900/60 border border-neutral-800 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              {t.quickStats.focus2}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {t.quickStats.focus2Desc} Wir bauen keine Websites, die erst im Nachhinein mühsam für Suchmaschinen optimiert werden müssen.
            </p>
          </div>

          <div className="p-6 md:p-8 bg-neutral-900/60 border border-neutral-800 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              {t.quickStats.focus3}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {t.quickStats.focus3Desc} Direkte, schnelle Abstimmung per Telefon, WhatsApp oder Video-Meeting ohne stille Post über Agentur-Assistenten.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SERVICES BENTO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              Leistungsübersicht
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
              Digitale Lösungen mit technischer Substanz
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/webentwicklung-agentur/')}
            className="text-sm text-neutral-300 hover:text-white flex items-center gap-1.5 self-start md:self-auto transition-colors"
          >
            <span>{t.common.allServices}</span>
            <ChevronRight className="w-4 h-4 text-blue-400" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((s) => (
            <div
              key={s.slug}
              onClick={() => onNavigate(`/${s.slug}/`)}
              className="p-6 md:p-8 bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 rounded-2xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500 uppercase">
                    {s.primaryKeyword}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors font-display">
                  {s.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {s.shortDesc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800/60 flex items-center justify-between text-xs text-neutral-300 font-medium">
                <span>Leistungsdetails & Ablauf</span>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROCESS SECTION (Section 22 of Master Prompt) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Transparenter Ablauf
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Von der Idee zum erfolgreichen Website-Launch
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Strukturierte Schritte ohne Überraschungen: So läuft ein Projekt mit Webzech ab.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {[
            { step: '01', title: 'Erstgespräch & Beratung', desc: 'Wir klären Ihre Ziele, Zielgruppe, Wunschfunktionen und den zeitlichen Rahmen unverbindlich ab.' },
            { step: '02', title: 'Analyse & Konzeption', desc: 'Wettbewerbsanalyse, Keyword-Recherche für Deutschland und Erstellung der optimalen Seitenstruktur.' },
            { step: '03', title: 'Design & Prototyping', desc: 'Individuelle Screendesigns für Desktop und Mobilgeräte, abgestimmt auf Ihr Corporate Design.' },
            { step: '04', title: 'Saubere Entwicklung', desc: 'Umsetzung mit modernen Webtechnologien oder WordPress & Elementor Pro mit minimalen Abhängigkeiten.' },
            { step: '05', title: 'SEO & Performance-Audit', desc: 'Überprüfung aller Core Web Vitals, Schema.org Markup, robots.txt, Sitemap und DSGVO-Check.' },
            { step: '06', title: 'Launch & Betreuung', desc: 'Sicherer Umzug auf Ihre Live-Domain, Einweisung zur Selbstpflege und dauerhafter Support.' }
          ].map((item) => (
            <div key={item.step} className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl relative">
              <span className="text-2xl font-extrabold text-blue-500/30 font-mono block mb-2">
                {item.step}
              </span>
              <h3 className="text-base font-bold text-white mb-2 font-display">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FOUNDERS SECTION (Sections 3 & 24 of Master Prompt) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900/80 border border-neutral-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Die Gründer
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
              Zwei Menschen. Ein gemeinsames Ziel: bessere digitale Auftritte.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Bei Webzech gibt es keine anonymen Callcenter oder ausgelagerte Subunternehmer. Sie arbeiten direkt mit den Inhabern zusammen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {foundersData.map((founder) => (
              <div
                key={founder.name}
                className="p-6 sm:p-8 bg-neutral-950 border border-neutral-800 rounded-2xl flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={founder.photo}
                      alt={founder.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-neutral-700 shadow-md shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white font-display">
                        {founder.name}
                      </h3>
                      <div className="text-xs text-blue-400 font-medium">
                        {founder.role}
                      </div>
                      <div className="text-[11px] text-neutral-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {founder.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {founder.bio}
                  </p>

                  <div className="p-3 bg-neutral-900/80 rounded-xl border border-neutral-800/80 text-xs italic text-neutral-400">
                    "{founder.quote}"
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-850">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                    Kernkompetenzen:
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-xs text-neutral-400">
                    {founder.expertise.map((exp, i) => (
                      <span key={i} className="text-neutral-300 text-xs">
                        {exp} {i < founder.expertise.length - 1 && '·'}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('/ueber-uns/')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              <span>Mehr über Webzech und unsere Arbeitsweise erfahren</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. PORTFOLIO PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              Ausgewählte Projekte
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Echte Arbeiten für deutsche Betriebe
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'all' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Alle Projekte
            </button>
            <button
              onClick={() => setActiveTab('wordpress')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'wordpress' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              WordPress & Handwerk
            </button>
            <button
              onClick={() => setActiveTab('landingpage')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'landingpage' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Landingpages
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onNavigate(`/portfolio/${project.slug}/`)}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-60 sm:h-72 overflow-hidden bg-neutral-950 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono text-neutral-300 border border-neutral-800">
                    {project.location}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                    {project.industry}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors font-display">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 flex items-center justify-between text-xs font-semibold text-neutral-300">
                <span>Fallstudie ansehen</span>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. INTERACTIVE COST CALCULATOR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CostCalculator
          lang={lang}
          onSelectEstimate={(summary) => {
            onOpenCalculatorEstimate(summary);
          }}
        />
      </section>

      {/* 8. CONTACT & INQUIRY SECTION */}
      <section id="kontakt-sektion" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <ContactForm lang={lang} />
      </section>
    </div>
  );
};
