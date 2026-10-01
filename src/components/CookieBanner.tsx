import React, { useState, useEffect } from 'react';
import { ShieldCheck, Settings, Check } from 'lucide-react';
import { Language } from '../types';
import { getT } from '../data/translations';

interface CookieBannerProps {
  lang: Language;
  onOpenPrivacy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ lang, onOpenPrivacy }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const t = getT(lang);

  useEffect(() => {
    const consent = localStorage.getItem('webzech_cookie_consent');
    if (!consent) {
      setIsOpen(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('webzech_cookie_consent', JSON.stringify({ essential: true, analytics: true }));
    setIsOpen(false);
  };

  const handleOnlyEssential = () => {
    localStorage.setItem('webzech_cookie_consent', JSON.stringify({ essential: true, analytics: false }));
    setIsOpen(false);
  };

  const handleSaveSettings = () => {
    localStorage.setItem('webzech_cookie_consent', JSON.stringify({ essential: true, analytics: analyticsConsent }));
    setIsOpen(false);
    setShowSettings(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-lg z-50 bg-neutral-900/95 backdrop-blur-md border border-neutral-800 rounded-xl shadow-2xl p-5 text-sm text-neutral-300">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-semibold text-white text-base mb-1">{t.common.cookieConsentTitle}</h3>
          <p className="text-neutral-400 text-xs leading-relaxed mb-3">
            {t.common.cookieConsentText}{' '}
            <button
              onClick={onOpenPrivacy}
              className="text-blue-400 underline hover:text-blue-300 transition-colors"
            >
              Datenschutzerklärung
            </button>
            .
          </p>

          {showSettings && (
            <div className="my-3 pt-3 border-t border-neutral-800 space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 bg-neutral-950/60 rounded border border-neutral-800">
                <div>
                  <span className="font-medium text-white block">Technisch essenziell</span>
                  <span className="text-neutral-500">Für Seitenfunktion & Session-Speicherung. Immer aktiv.</span>
                </div>
                <span className="text-emerald-400 font-mono text-[11px] px-2 py-0.5 bg-emerald-500/10 rounded">Aktiv</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-neutral-950/60 rounded border border-neutral-800">
                <div>
                  <span className="font-medium text-white block">Datenschutzfreundliche Analyse</span>
                  <span className="text-neutral-500">Anonyme Besucherzählung ohne Cross-Site-Tracking.</span>
                </div>
                <input
                  type="checkbox"
                  checked={analyticsConsent}
                  onChange={(e) => setAnalyticsConsent(e.target.checked)}
                  className="rounded border-neutral-700 bg-neutral-900 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                />
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2 pt-1">
            {!showSettings ? (
              <>
                <button
                  onClick={handleAcceptAll}
                  className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg text-xs transition-colors flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  {t.common.acceptAll}
                </button>
                <button
                  onClick={handleOnlyEssential}
                  className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-medium rounded-lg text-xs transition-colors"
                >
                  {t.common.onlyEssential}
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="p-1.5 text-neutral-400 hover:text-white transition-colors ml-auto"
                  title="Einstellungen anpassen"
                >
                  <Settings className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleSaveSettings}
                  className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg text-xs transition-colors"
                >
                  {t.common.saveSettings}
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-3 py-1.5 text-neutral-400 hover:text-white text-xs transition-colors"
                >
                  Zurück
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
