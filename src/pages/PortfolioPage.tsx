import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MapPin, Sparkles, Filter } from 'lucide-react';
import { Language } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { portfolioData } from '../data/portfolioData';

interface PortfolioPageProps {
  lang: Language;
  onNavigate: (path: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ lang, onNavigate }) => {
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all'
    ? portfolioData
    : portfolioData.filter((p) => p.industry.toLowerCase().includes(filter.toLowerCase()) || p.service.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="space-y-16 md:space-y-24">
      <Breadcrumbs
        items={[{ label: 'Portfolio' }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
          Referenzen & Fallstudien
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight text-balance">
          Echte Webprojekte. Messbare Ergebnisse.
        </h1>
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Entdecken Sie ausgewählte Arbeiten für Dienstleister, Handwerker und Unternehmen in Bayern und Deutschland.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-xl max-w-md mx-auto mt-6 text-xs">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              filter === 'all' ? 'bg-neutral-800 text-white font-semibold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Alle Projekte
          </button>
          <button
            onClick={() => setFilter('Handwerk')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              filter === 'Handwerk' ? 'bg-neutral-800 text-white font-semibold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Handwerk & Bauservice
          </button>
          <button
            onClick={() => setFilter('Landingpage')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              filter === 'Landingpage' ? 'bg-neutral-800 text-white font-semibold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Landingpages
          </button>
          <button
            onClick={() => setFilter('Medizin')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              filter === 'Medizin' ? 'bg-neutral-800 text-white font-semibold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Praxis & B2B
          </button>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              onClick={() => onNavigate(`/portfolio/${project.slug}/`)}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-64 sm:h-80 overflow-hidden bg-neutral-950 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-mono text-neutral-300 border border-neutral-800 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold uppercase tracking-wider">
                    <span>{project.industry}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-neutral-400">{project.service}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors font-display">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-[11px] font-mono px-2 py-0.5 bg-neutral-950 rounded text-neutral-400 border border-neutral-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 border-t border-neutral-850 flex items-center justify-between text-xs font-semibold text-neutral-300">
                <span>Detaillierte Fallstudie lesen</span>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
