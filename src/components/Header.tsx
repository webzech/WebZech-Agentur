import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Globe, ArrowRight, Code, Palette, Laptop, Sparkles, MapPin, Building2, Shield } from 'lucide-react';
import { Language } from '../types';
import { getT } from '../data/translations';
import { servicesData } from '../data/servicesData';
import { locationsData } from '../data/locationsData';
import { industriesData } from '../data/industriesData';

interface HeaderProps {
  currentPath: string;
  lang: Language;
  onNavigate: (path: string) => void;
  onLanguageChange: (newLang: Language) => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  lang,
  onNavigate,
  onLanguageChange,
  onOpenContact
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'services' | 'industries' | 'regions' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSectionOpen, setMobileSectionOpen] = useState<string | null>(null);

  const t = getT(lang);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMegaMenu = () => setActiveMegaMenu(null);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-lg'
          : 'bg-neutral-950/70 backdrop-blur-sm border-b border-neutral-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single Text Element Wordmark (Strict Top Bar Contract) */}
        <div className="flex items-center">
          <button
            onClick={() => {
              closeMegaMenu();
              onNavigate('/');
            }}
            className="text-2xl font-bold tracking-tight text-white font-display flex items-center gap-1.5 focus:outline-none group cursor-pointer"
          >
            <span>Webzech</span>
            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block group-hover:scale-125 transition-transform" />
          </button>
        </div>

        {/* Zone 2: Navigation Links with Mega Dropdowns */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-neutral-300">
          {/* Services Menu */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMegaMenu('services')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <button
              onClick={() => {
                closeMegaMenu();
                onNavigate('/webentwicklung-agentur/');
              }}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:text-white transition-colors cursor-pointer ${
                currentPath.includes('agentur') || currentPath.includes('webdesign') || currentPath.includes('seo')
                  ? 'text-blue-400 font-semibold'
                  : ''
              }`}
            >
              <span>{t.nav.services}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMegaMenu === 'services' ? 'rotate-180' : ''}`} />
            </button>

            {/* Mega Menu Dropdown */}
            {activeMegaMenu === 'services' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[540px]">
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 shadow-2xl grid grid-cols-2 gap-3 text-xs">
                  {servicesData.map((s) => (
                    <button
                      key={s.slug}
                      onClick={() => {
                        closeMegaMenu();
                        onNavigate(`/${s.slug}/`);
                      }}
                      className="text-left p-2.5 rounded-xl hover:bg-neutral-800/70 transition-colors flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="p-2 bg-neutral-950 border border-neutral-800 rounded-lg text-blue-400 group-hover:text-white group-hover:border-blue-500/50 transition-colors shrink-0">
                        <Code className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {s.title}
                        </div>
                        <div className="text-neutral-400 text-[11px] line-clamp-1 mt-0.5">
                          {s.shortDesc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Industries Menu */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMegaMenu('industries')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <button
              className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:text-white transition-colors cursor-pointer ${
                currentPath.includes('/branchen/') ? 'text-blue-400 font-semibold' : ''
              }`}
            >
              <span>{t.nav.industries}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMegaMenu === 'industries' ? 'rotate-180' : ''}`} />
            </button>

            {activeMegaMenu === 'industries' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[460px]">
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 shadow-2xl grid grid-cols-2 gap-2 text-xs">
                  {industriesData.map((ind) => (
                    <button
                      key={ind.slug}
                      onClick={() => {
                        closeMegaMenu();
                        onNavigate(`/branchen/${ind.slug}/`);
                      }}
                      className="text-left p-2.5 rounded-lg hover:bg-neutral-800 transition-colors flex items-center gap-2 group cursor-pointer"
                    >
                      <Building2 className="w-3.5 h-3.5 text-neutral-400 group-hover:text-blue-400 shrink-0" />
                      <span className="font-medium text-neutral-200 group-hover:text-white truncate">
                        {ind.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Regions Menu */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMegaMenu('regions')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <button
              className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:text-white transition-colors cursor-pointer ${
                currentPath.includes('webentwicklung-') && !currentPath.includes('agentur')
                  ? 'text-blue-400 font-semibold'
                  : ''
              }`}
            >
              <span>{t.nav.regions}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMegaMenu === 'regions' ? 'rotate-180' : ''}`} />
            </button>

            {activeMegaMenu === 'regions' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[460px]">
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 shadow-2xl grid grid-cols-2 gap-2 text-xs">
                  {locationsData.map((loc) => (
                    <button
                      key={loc.slug}
                      onClick={() => {
                        closeMegaMenu();
                        onNavigate(`/${loc.slug}/`);
                      }}
                      className="text-left p-2.5 rounded-lg hover:bg-neutral-800 transition-colors flex items-center justify-between group cursor-pointer"
                    >
                      <span className="font-medium text-neutral-200 group-hover:text-white flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-blue-400" />
                        {loc.city}
                      </span>
                      <span className="text-[10px] text-neutral-500 font-mono">{loc.state}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Regular Nav Links */}
          <button
            onClick={() => onNavigate('/portfolio/')}
            className={`px-3 py-2 hover:text-white transition-colors cursor-pointer ${
              currentPath === '/portfolio/' ? 'text-blue-400 font-semibold' : ''
            }`}
          >
            {t.nav.portfolio}
          </button>

          <button
            onClick={() => onNavigate('/ueber-uns/')}
            className={`px-3 py-2 hover:text-white transition-colors cursor-pointer ${
              currentPath === '/ueber-uns/' ? 'text-blue-400 font-semibold' : ''
            }`}
          >
            {t.nav.about}
          </button>

          <button
            onClick={() => onNavigate('/preise/')}
            className={`px-3 py-2 hover:text-white transition-colors cursor-pointer ${
              currentPath === '/preise/' ? 'text-blue-400 font-semibold' : ''
            }`}
          >
            {t.nav.pricing}
          </button>

          <button
            onClick={() => onNavigate('/blog/')}
            className={`px-3 py-2 hover:text-white transition-colors cursor-pointer ${
              currentPath === '/blog/' ? 'text-blue-400 font-semibold' : ''
            }`}
          >
            {t.nav.blog}
          </button>

          <button
            onClick={() => onNavigate('/faq/')}
            className={`px-3 py-2 hover:text-white transition-colors cursor-pointer ${
              currentPath === '/faq/' ? 'text-blue-400 font-semibold' : ''
            }`}
          >
            {t.nav.faq}
          </button>
        </nav>

        {/* Zone 3: Language Selector + Primary Action CTA */}
        <div className="flex items-center gap-3">
          {/* Language Selector (DE | EN | RU | UK) */}
          <div className="hidden sm:flex items-center bg-neutral-900 border border-neutral-800 rounded-lg p-1 text-[11px] font-mono text-neutral-400">
            {(['de', 'en', 'ru', 'uk'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => onLanguageChange(l)}
                className={`px-2 py-0.5 rounded transition-all uppercase cursor-pointer ${
                  lang === l
                    ? 'bg-blue-600 text-white font-bold'
                    : 'hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Primary Action Button */}
          <button
            onClick={onOpenContact}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-all shadow-md shadow-blue-900/20 whitespace-nowrap cursor-pointer flex items-center gap-1.5"
          >
            <span>{t.nav.ctaButton}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Navigation öffnen"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800 p-6 overflow-y-auto z-50">
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-4">
            <span className="text-xs text-neutral-400 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> Sprache wählen:
            </span>
            <div className="flex items-center gap-1 bg-neutral-900 p-1 rounded-lg text-xs font-mono">
              {(['de', 'en', 'ru', 'uk'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    onLanguageChange(l);
                  }}
                  className={`px-2.5 py-1 rounded uppercase ${
                    lang === l ? 'bg-blue-600 text-white font-bold' : 'text-neutral-400'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 text-sm font-medium">
            {/* Services Group */}
            <div>
              <button
                onClick={() => setMobileSectionOpen(mobileSectionOpen === 'services' ? null : 'services')}
                className="w-full flex items-center justify-between py-2 text-left font-semibold text-white border-b border-neutral-800"
              >
                <span>{t.nav.services}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSectionOpen === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSectionOpen === 'services' && (
                <div className="pl-4 py-2 space-y-2 text-xs text-neutral-400 border-l border-neutral-800 ml-2 mt-2">
                  {servicesData.map((s) => (
                    <button
                      key={s.slug}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onNavigate(`/${s.slug}/`);
                      }}
                      className="block text-left w-full py-1 hover:text-white"
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Group */}
            <div>
              <button
                onClick={() => setMobileSectionOpen(mobileSectionOpen === 'industries' ? null : 'industries')}
                className="w-full flex items-center justify-between py-2 text-left font-semibold text-white border-b border-neutral-800"
              >
                <span>{t.nav.industries}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSectionOpen === 'industries' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSectionOpen === 'industries' && (
                <div className="pl-4 py-2 space-y-2 text-xs text-neutral-400 border-l border-neutral-800 ml-2 mt-2">
                  {industriesData.map((i) => (
                    <button
                      key={i.slug}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onNavigate(`/branchen/${i.slug}/`);
                      }}
                      className="block text-left w-full py-1 hover:text-white"
                    >
                      {i.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Regions Group */}
            <div>
              <button
                onClick={() => setMobileSectionOpen(mobileSectionOpen === 'regions' ? null : 'regions')}
                className="w-full flex items-center justify-between py-2 text-left font-semibold text-white border-b border-neutral-800"
              >
                <span>{t.nav.regions}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSectionOpen === 'regions' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSectionOpen === 'regions' && (
                <div className="pl-4 py-2 space-y-2 text-xs text-neutral-400 border-l border-neutral-800 ml-2 mt-2 grid grid-cols-2 gap-1">
                  {locationsData.map((loc) => (
                    <button
                      key={loc.slug}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onNavigate(`/${loc.slug}/`);
                      }}
                      className="block text-left w-full py-1 hover:text-white truncate"
                    >
                      {loc.city}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Flat Links */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/portfolio/');
              }}
              className="block w-full text-left py-2 font-semibold text-white border-b border-neutral-800"
            >
              {t.nav.portfolio}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/ueber-uns/');
              }}
              className="block w-full text-left py-2 font-semibold text-white border-b border-neutral-800"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/preise/');
              }}
              className="block w-full text-left py-2 font-semibold text-white border-b border-neutral-800"
            >
              {t.nav.pricing}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/blog/');
              }}
              className="block w-full text-left py-2 font-semibold text-white border-b border-neutral-800"
            >
              {t.nav.blog}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/faq/');
              }}
              className="block w-full text-left py-2 font-semibold text-white border-b border-neutral-800"
            >
              {t.nav.faq}
            </button>
          </div>

          <div className="pt-6 mt-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 bg-blue-600 text-white font-semibold text-center rounded-xl shadow-lg"
            >
              {t.nav.ctaButton}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
