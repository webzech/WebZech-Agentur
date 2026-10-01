import React from 'react';
import { Globe, MapPin, Mail, Phone, ArrowUpRight, Search, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { getT } from '../data/translations';
import { servicesData } from '../data/servicesData';
import { locationsData } from '../data/locationsData';
import { industriesData } from '../data/industriesData';

interface FooterProps {
  lang: Language;
  onNavigate: (path: string) => void;
  onLanguageChange: (newLang: Language) => void;
  onOpenSeoAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onNavigate,
  onLanguageChange,
  onOpenSeoAudit
}) => {
  const t = getT(lang);

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800/80">
          {/* Column 1: Webzech Brand & Trust */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-1.5 text-white font-bold text-xl font-display">
              <span>Webzech</span>
              <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
            </div>
            <p className="text-neutral-400 leading-relaxed text-xs">
              {t.footer.aboutWebzech}
            </p>
            <div className="space-y-1.5 text-xs text-neutral-300 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Bayern & bundesweit remote</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="mailto:kontakt@webzech.de" className="hover:text-white transition-colors">
                  kontakt@webzech.de
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenSeoAudit}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg text-[11px] text-blue-400 font-medium transition-colors"
              >
                <Search className="w-3.5 h-3.5" />
                <span>SEO-Architektur & Audit</span>
              </button>
            </div>
          </div>

          {/* Column 2: Leistungen */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-4">
              {t.footer.colServices}
            </h4>
            <ul className="space-y-2.5">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <button
                    onClick={() => onNavigate(`/${s.slug}/`)}
                    className="text-neutral-400 hover:text-white transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Branchen */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-4">
              {t.footer.colIndustries}
            </h4>
            <ul className="space-y-2.5">
              {industriesData.map((ind) => (
                <li key={ind.slug}>
                  <button
                    onClick={() => onNavigate(`/branchen/${ind.slug}/`)}
                    className="text-neutral-400 hover:text-white transition-colors text-left"
                  >
                    {ind.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Regionen */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-4">
              {t.footer.colRegions}
            </h4>
            <ul className="space-y-2.5">
              {locationsData.map((loc) => (
                <li key={loc.slug}>
                  <button
                    onClick={() => onNavigate(`/${loc.slug}/`)}
                    className="text-neutral-400 hover:text-white transition-colors text-left"
                  >
                    Webentwicklung {loc.city}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Unternehmen & Legal */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-4">
              {t.footer.colCompany}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => onNavigate('/ueber-uns/')} className="hover:text-white transition-colors">
                  Über Webzech (Gründer)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/portfolio/')} className="hover:text-white transition-colors">
                  Portfolio & Fallstudien
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/preise/')} className="hover:text-white transition-colors">
                  Preise & Kalkulator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/blog/')} className="hover:text-white transition-colors">
                  Ratgeber & SEO-Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/faq/')} className="hover:text-white transition-colors">
                  Häufige Fragen (FAQ)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/kontakt/')} className="hover:text-white transition-colors">
                  Kontakt & Erstgespräch
                </button>
              </li>
              <li className="pt-2 border-t border-neutral-850">
                <button onClick={() => onNavigate('/impressum/')} className="hover:text-white transition-colors">
                  Impressum
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/datenschutz/')} className="hover:text-white transition-colors">
                  Datenschutzerklärung
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Language, Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            <span>© {new Date().getFullYear()} Webzech. {t.footer.rights}</span>
            <span className="mx-2">·</span>
            <span>Awais Abid & Werner Polatschek</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              100% DSGVO-konform
            </span>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 rounded px-1.5 py-0.5 font-mono text-[10px]">
              <Globe className="w-3 h-3 text-neutral-400 mr-1" />
              {(['de', 'en', 'ru', 'uk'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => onLanguageChange(l)}
                  className={`px-1 rounded uppercase ${
                    lang === l ? 'text-white font-bold' : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
