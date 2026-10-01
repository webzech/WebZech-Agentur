import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { Language } from '../types';
import { foundersData } from '../data/foundersData';
import { CheckCircle2, ShieldCheck, HeartHandshake, Code, Target, MapPin, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  lang: Language;
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang, onNavigate }) => {
  return (
    <div className="space-y-16 md:space-y-24">
      <Breadcrumbs
        items={[{ label: 'Über uns' }]}
        onNavigate={onNavigate}
      />

      {/* Hero Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
          Über Webzech · Gründer & Philosophie
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight text-balance">
          Die Menschen hinter unseren Websites
        </h1>
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Webzech wurde aus einer einfachen Überzeugung gegründet: Unternehmen in Deutschland verdienen verlässliche, schnelle und technisch saubere Websites – ohne Agenturaufblähung und zu fairen Festpreisen.
        </p>
      </section>

      {/* Founders Deep Dive */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {foundersData.map((f) => (
            <div
              key={f.name}
              className="p-8 sm:p-10 bg-neutral-900 border border-neutral-800 rounded-3xl flex flex-col justify-between space-y-6 shadow-xl"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-5">
                  <img
                    src={f.photo}
                    alt={f.name}
                    className="w-24 h-24 rounded-2xl object-cover border-2 border-neutral-700 shadow-md shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white font-display">
                      {f.name}
                    </h3>
                    <div className="text-xs text-blue-400 font-semibold mt-0.5">
                      {f.role}
                    </div>
                    <div className="text-xs text-neutral-400 flex items-center gap-1.5 mt-1.5">
                      <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{f.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {f.bio}
                </p>

                <div className="p-4 bg-neutral-950/80 rounded-xl border border-neutral-800 text-xs italic text-neutral-400 leading-relaxed">
                  "{f.quote}"
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block">
                    Hauptverantwortlichkeiten:
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {f.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 text-xs">
                <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider block mb-2">
                  Expertise:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {f.expertise.map((exp, i) => (
                    <span key={i} className="px-2.5 py-1 bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-300 text-[11px]">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy & Collaboration Model */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-neutral-900/60 border border-neutral-800 rounded-3xl space-y-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
              Unsere Werte
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Wie wir bei Webzech arbeiten
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-display">Direkter Kontakt</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Sie sprechen nicht mit wechselnden Projektmanagern, sondern direkt mit den Gründern Awais Abid und Werner Polatschek.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-display">Transparente Festpreise</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Keine versteckten Stundensätze. Jedes Webprojekt wird vorab transparent kalkuliert und zum vereinbarten Festpreis umgesetzt.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-display">Technischer Anspruch</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Wir vermeiden überladene Baukästen und setzen auf saubere semantische Standards, Core Web Vitals und DSGVO-Konformität.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <ContactForm
          lang={lang}
          prefilledMessage="Hallo Awais, hallo Werner! Ich möchte mich gerne unverbindlich über eine Website-Zusammenarbeit informieren."
        />
      </section>
    </div>
  );
};
