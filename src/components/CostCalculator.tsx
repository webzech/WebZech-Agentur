import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { getT } from '../data/translations';

interface CostCalculatorProps {
  lang: Language;
  onSelectEstimate: (summary: string) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ lang, onSelectEstimate }) => {
  const t = getT(lang);

  const [projectType, setProjectType] = useState<'landingpage' | 'business' | 'wordpress' | 'custom'>('business');
  const [pagesScope, setPagesScope] = useState<'1' | 'small' | 'medium' | 'large'>('small');
  const [hasLocalSeo, setHasLocalSeo] = useState<boolean>(true);
  const [hasCopywriting, setHasCopywriting] = useState<boolean>(false);
  const [hasMultilingual, setHasMultilingual] = useState<boolean>(false);
  const [hasMaintenance, setHasMaintenance] = useState<boolean>(true);

  // Dynamic price calculation
  const calculatePrice = () => {
    let baseMin = 1200;
    let baseMax = 1800;
    let weeks = '2–3 Wochen';

    if (projectType === 'landingpage') {
      baseMin = 1200;
      baseMax = 1900;
      weeks = '1–2 Wochen';
    } else if (projectType === 'business') {
      baseMin = 2200;
      baseMax = 3200;
      weeks = '2–4 Wochen';
    } else if (projectType === 'wordpress') {
      baseMin = 1800;
      baseMax = 2800;
      weeks = '2–3 Wochen';
    } else if (projectType === 'custom') {
      baseMin = 3500;
      baseMax = 5200;
      weeks = '3–6 Wochen';
    }

    // Page scope multiplier
    if (pagesScope === '1') {
      baseMin *= 0.85;
      baseMax *= 0.85;
    } else if (pagesScope === 'medium') {
      baseMin += 800;
      baseMax += 1200;
    } else if (pagesScope === 'large') {
      baseMin += 1600;
      baseMax += 2400;
    }

    // Addons
    if (hasLocalSeo) {
      baseMin += 450;
      baseMax += 650;
    }
    if (hasCopywriting) {
      baseMin += 500;
      baseMax += 850;
    }
    if (hasMultilingual) {
      baseMin += 600;
      baseMax += 950;
    }

    return {
      min: Math.round(baseMin / 50) * 50,
      max: Math.round(baseMax / 50) * 50,
      weeks,
      monthly: hasMaintenance ? '120 €/Monat' : 'Keine laufenden Kosten'
    };
  };

  const estimate = calculatePrice();

  const handleApplyToContact = () => {
    const typeLabel = {
      landingpage: 'Landingpage',
      business: 'Business Website',
      wordpress: 'WordPress / Elementor',
      custom: 'Individuelle Webanwendung'
    }[projectType];

    const scopeLabel = {
      '1': '1 Seite (Single Page)',
      small: '2–5 Unterseiten',
      medium: '6–12 Unterseiten',
      large: '13+ Unterseiten'
    }[pagesScope];

    const addons = [];
    if (hasLocalSeo) addons.push('Local SEO');
    if (hasCopywriting) addons.push('Texterstellung');
    if (hasMultilingual) addons.push('Mehrsprachigkeit');
    if (hasMaintenance) addons.push('Wartung & Support');

    const summary = `Kalkulator-Auswahl: ${typeLabel} | Umfang: ${scopeLabel} | Richtwert: ${estimate.min} € – ${estimate.max} € netto | Zusatzmodule: ${addons.length > 0 ? addons.join(', ') : 'Keine'}`;
    onSelectEstimate(summary);
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight font-display">
            {t.common.calculatorTitle}
          </h2>
          <p className="text-neutral-400 text-xs md:text-sm">
            {t.common.calculatorSub}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left 2 Cols: Form Selection */}
        <div className="md:col-span-2 space-y-6">
          {/* Step 1: Project Type */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-2.5">
              1. Art des Webprojekts
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { id: 'business', title: 'Business Website', sub: 'Für Firmen & Mittelstand' },
                { id: 'landingpage', title: 'Landingpage', sub: 'High-Converting Single Page' },
                { id: 'wordpress', title: 'WordPress & Elementor', sub: 'Einfache Selbstverwaltung' },
                { id: 'custom', title: 'Individueller Webcode', sub: 'Bespoke React / Fullstack' }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setProjectType(item.id as any)}
                  className={`text-left p-3.5 rounded-xl border transition-all ${
                    projectType === item.id
                      ? 'border-blue-500 bg-blue-500/10 text-white shadow-sm'
                      : 'border-neutral-800 bg-neutral-950/60 text-neutral-300 hover:border-neutral-700'
                  }`}
                >
                  <div className="font-semibold text-sm">{item.title}</div>
                  <div className="text-[11px] text-neutral-400">{item.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Page count */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-2.5">
              2. Geschätzter Seitenumfang
            </label>
            <div className="grid grid-cols-4 gap-2 text-center text-xs font-medium">
              {[
                { id: '1', label: '1 Seite' },
                { id: 'small', label: '2–5 Seiten' },
                { id: 'medium', label: '6–12 Seiten' },
                { id: 'large', label: '13+ Seiten' }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPagesScope(item.id as any)}
                  className={`py-2.5 px-2 rounded-lg border transition-all ${
                    pagesScope === item.id
                      ? 'border-blue-500 bg-blue-600 text-white font-semibold'
                      : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Add-on Modules */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-2.5">
              3. Sinnvolle Zusatzmodule
            </label>
            <div className="space-y-2">
              {[
                {
                  id: 'localseo',
                  active: hasLocalSeo,
                  toggle: () => setHasLocalSeo(!hasLocalSeo),
                  title: 'Local SEO & Google Maps 3-Pack',
                  desc: 'Lokale Strukturdaten, GBP-Verknüpfung und Standorte'
                },
                {
                  id: 'copywriting',
                  active: hasCopywriting,
                  toggle: () => setHasCopywriting(!hasCopywriting),
                  title: 'Redaktionelle Texterstellung',
                  desc: 'Suchmaschinenoptimierte Fachinhalte von unseren Textern'
                },
                {
                  id: 'multi',
                  active: hasMultilingual,
                  toggle: () => setHasMultilingual(!hasMultilingual),
                  title: 'Mehrsprachigkeit (z.B. DE / EN)',
                  desc: 'Saubere hreflang-Architektur & Sprachumschalter'
                },
                {
                  id: 'maint',
                  active: hasMaintenance,
                  toggle: () => setHasMaintenance(!hasMaintenance),
                  title: 'Wartung & Sicherheits-Updates',
                  desc: 'Wöchentliche Backups, DSGVO-Updates & Notdienst'
                }
              ].map((addon) => (
                <div
                  key={addon.id}
                  onClick={addon.toggle}
                  className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-colors ${
                    addon.active
                      ? 'border-blue-500/50 bg-blue-950/20 text-white'
                      : 'border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                        addon.active ? 'bg-blue-600 text-white' : 'border border-neutral-700 bg-neutral-900'
                      }`}
                    >
                      {addon.active && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white">{addon.title}</div>
                      <div className="text-[11px] text-neutral-400">{addon.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Price Summary Card */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Unverbindlicher Richtpreis</span>
            </div>

            <div className="mb-4">
              <div className="text-3xl font-bold text-white tracking-tight tabular-nums font-display">
                {estimate.min.toLocaleString('de-DE')} € – {estimate.max.toLocaleString('de-DE')} €
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">
                Netto-Richtwert zzgl. MwSt. als transparenter Festpreis.
              </div>
            </div>

            <div className="space-y-3 py-3 border-t border-b border-neutral-800/80 text-xs text-neutral-300">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-neutral-400">
                  <Clock className="w-3.5 h-3.5" /> Zeitrahmen:
                </span>
                <span className="font-semibold text-white">{estimate.weeks}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Laufende Kosten:</span>
                <span className="font-semibold text-white">{estimate.monthly}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Eigentum:</span>
                <span className="font-semibold text-emerald-400">100% Ihr Eigentum</span>
              </div>
            </div>

            <div className="mt-4 text-[11px] text-neutral-400 leading-relaxed">
              Jedes Angebot von Webzech ist ein verlässlicher Festpreis ohne nachträgliche Mehrkosten.
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleApplyToContact}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs md:text-sm rounded-xl transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Dieses Paket unverbindlich anfragen</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
