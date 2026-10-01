import React from 'react';
import { CaseStudy, Language } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { MapPin, CheckCircle2, ArrowRight, Layers, Target, ShieldAlert, Rocket } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface CaseStudyPageProps {
  study: CaseStudy;
  lang: Language;
  onNavigate: (path: string) => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ study, lang, onNavigate }) => {
  const otherProjects = portfolioData.filter((p) => p.slug !== study.slug).slice(0, 2);

  return (
    <div className="space-y-16 md:space-y-24">
      <Breadcrumbs
        items={[
          { label: 'Portfolio', href: '/portfolio/' },
          { label: study.title }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 space-y-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
          <span>{study.industry}</span>
          <span aria-hidden="true">·</span>
          <span>{study.service}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 text-neutral-400">
            <MapPin className="w-3.5 h-3.5" />
            {study.location}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-display text-balance">
          {study.title}
        </h1>

        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl">
          {study.summary}
        </p>

        {/* Project Image */}
        <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 mt-8">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-72 sm:h-96 md:h-[450px] object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Meta Specs Bar */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-neutral-900/80 border border-neutral-800 rounded-2xl text-xs">
          <div>
            <span className="text-neutral-500 uppercase tracking-wider text-[10px] block">Kunde / Typ</span>
            <span className="font-semibold text-white mt-1 block">{study.clientType}</span>
          </div>
          <div>
            <span className="text-neutral-500 uppercase tracking-wider text-[10px] block">Standort</span>
            <span className="font-semibold text-white mt-1 block">{study.location}</span>
          </div>
          <div>
            <span className="text-neutral-500 uppercase tracking-wider text-[10px] block">Leistung</span>
            <span className="font-semibold text-white mt-1 block">{study.service}</span>
          </div>
          <div>
            <span className="text-neutral-500 uppercase tracking-wider text-[10px] block">Technologie</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {study.techStack.map((tech, i) => (
                <span key={i} className="text-neutral-300 font-mono text-[10px]">
                  {tech}{i < study.techStack.length - 1 ? ',' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge, Strategy, Results */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Objective & Challenge */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs uppercase tracking-wider">
              <Target className="w-4 h-4" />
              <span>Projektziel</span>
            </div>
            <h3 className="text-lg font-bold text-white font-display">Die Zielsetzung</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {study.objective}
            </p>
          </div>

          <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              <span>Herausforderung</span>
            </div>
            <h3 className="text-lg font-bold text-white font-display">Die Ausgangslage</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {study.challenge}
            </p>
          </div>
        </div>

        {/* Strategy */}
        <div className="p-8 sm:p-10 bg-neutral-900/60 border border-neutral-800 rounded-3xl space-y-4">
          <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs uppercase tracking-wider">
            <Rocket className="w-4 h-4" />
            <span>Umsetzungsstrategie</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
            Wie Webzech die Lösung implementiert hat
          </h3>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            {study.strategy}
          </p>
        </div>

        {/* Real Results */}
        <div className="p-8 bg-neutral-900 border border-emerald-900/40 rounded-3xl space-y-6">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>Erreichte Resultate</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
            Messbare Erfolge nach dem Relaunch
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {study.results.map((res, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-neutral-950/80 rounded-xl border border-neutral-800 text-xs sm:text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{res}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-bold text-white mb-6 font-display">Weitere Fallstudien</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {otherProjects.map((p) => (
            <div
              key={p.id}
              onClick={() => onNavigate(`/portfolio/${p.slug}/`)}
              className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-neutral-700 cursor-pointer transition-colors space-y-2"
            >
              <span className="text-[11px] text-blue-400 uppercase font-semibold">{p.industry}</span>
              <h4 className="text-base font-bold text-white font-display">{p.title}</h4>
              <p className="text-xs text-neutral-400 line-clamp-2">{p.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <ContactForm
          lang={lang}
          prefilledMessage={`Interesse an einem Projekt ähnlich wie "${study.title}".`}
        />
      </section>
    </div>
  );
};
