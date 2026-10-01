import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { SeoViewerModal } from './components/SeoViewerModal';
import { SeoHead } from './components/SeoHead';

import { HomePage } from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';
import { LocationPage } from './pages/LocationPage';
import { IndustryPage } from './pages/IndustryPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { AboutPage } from './pages/AboutPage';
import { PricingPage } from './pages/PricingPage';
import { FaqPage } from './pages/FaqPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { ImpressumPage } from './pages/ImpressumPage';
import { DatenschutzPage } from './pages/DatenschutzPage';

import { servicesData, getServiceBySlug } from './data/servicesData';
import { locationsData, getLocationBySlug } from './data/locationsData';
import { industriesData, getIndustryBySlug } from './data/industriesData';
import { portfolioData, getCaseStudyBySlug } from './data/portfolioData';
import { blogPosts, getBlogPostBySlug } from './data/blogData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [lang, setLang] = useState<Language>(() => {
    const path = window.location.pathname;
    if (path.startsWith('/en/')) return 'en';
    if (path.startsWith('/ru/')) return 'ru';
    if (path.startsWith('/uk/')) return 'uk';
    return 'de';
  });

  const [isSeoModalOpen, setIsSeoModalOpen] = useState(false);
  const [calculatorEstimate, setCalculatorEstimate] = useState<string>('');

  // Sync browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      const path = window.location.pathname;
      if (path.startsWith('/en/')) setLang('en');
      else if (path.startsWith('/ru/')) setLang('ru');
      else if (path.startsWith('/uk/')) setLang('uk');
      else setLang('de');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    // Ensure clean leading slash
    let target = path.startsWith('/') ? path : `/${path}`;
    window.history.pushState({}, '', target);
    setCurrentPath(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    let clean = currentPath.replace(/^\/(en|ru|uk)\//, '/');
    if (clean === '/') {
      const nextPath = newLang === 'de' ? '/' : `/${newLang}/`;
      window.history.pushState({}, '', nextPath);
      setCurrentPath(nextPath);
    } else {
      const nextPath = newLang === 'de' ? clean : `/${newLang}${clean}`;
      window.history.pushState({}, '', nextPath);
      setCurrentPath(nextPath);
    }
  };

  const handleOpenEstimateInContact = (estimateText: string) => {
    setCalculatorEstimate(estimateText);
    navigateTo('/kontakt/');
  };

  // Strip language prefix for route matching
  const normalizedPath = currentPath
    .replace(/^\/(en|ru|uk)\//, '/')
    .replace(/^\/(en|ru|uk)$/, '/');

  // Route Resolution
  const renderContent = () => {
    // 1. Home
    if (normalizedPath === '/' || normalizedPath === '') {
      return (
        <>
          <SeoHead
            title="Webzech – Webentwicklung & SEO für Unternehmen in Deutschland"
            description="Professionelle Websites, WordPress & nachhaltige Suchmaschinenoptimierung für Betriebe und Firmen in Deutschland. Persönlich, transparent & DSGVO-konform."
            path="/"
            lang={lang}
          />
          <HomePage
            lang={lang}
            onNavigate={navigateTo}
            onOpenCalculatorEstimate={handleOpenEstimateInContact}
          />
        </>
      );
    }

    // 2. Services
    const serviceMatch = servicesData.find(
      (s) => normalizedPath === `/${s.slug}/` || normalizedPath === `/${s.slug}`
    );
    if (serviceMatch) {
      return (
        <>
          <SeoHead
            title={`${serviceMatch.title} Agentur Deutschland | Webzech`}
            description={`${serviceMatch.shortDesc} Professionelle Umsetzung für Unternehmen in Deutschland.`}
            path={`/${serviceMatch.slug}/`}
            lang={lang}
            schema={{
              '@type': 'Service',
              name: serviceMatch.title,
              serviceType: serviceMatch.primaryKeyword,
              provider: { '@type': 'Organization', name: 'Webzech' }
            }}
          />
          <ServicePage
            service={serviceMatch}
            lang={lang}
            onNavigate={navigateTo}
          />
        </>
      );
    }

    // 3. Locations
    const locationMatch = locationsData.find(
      (l) => normalizedPath === `/${l.slug}/` || normalizedPath === `/${l.slug}`
    );
    if (locationMatch) {
      return (
        <>
          <SeoHead
            title={locationMatch.titleTag}
            description={locationMatch.metaDesc}
            path={`/${locationMatch.slug}/`}
            lang={lang}
            schema={{
              '@type': 'LocalBusiness',
              name: `Webzech Webentwicklung & SEO ${locationMatch.city}`,
              address: {
                '@type': 'PostalAddress',
                addressLocality: locationMatch.city,
                addressRegion: locationMatch.state,
                addressCountry: 'DE'
              },
              areaServed: locationMatch.city
            }}
          />
          <LocationPage
            location={locationMatch}
            lang={lang}
            onNavigate={navigateTo}
          />
        </>
      );
    }

    // 4. Industry Pages
    if (normalizedPath.startsWith('/branchen/')) {
      const indSlug = normalizedPath.replace('/branchen/', '').replace('/', '');
      const indMatch = getIndustryBySlug(indSlug);
      if (indMatch) {
        return (
          <>
            <SeoHead
              title={`${indMatch.name} Webdesign & Website erstellen lassen | Webzech`}
              description={`${indMatch.tagline} Maßgeschneiderte Websites für Betriebe in Deutschland.`}
              path={`/branchen/${indMatch.slug}/`}
              lang={lang}
            />
            <IndustryPage
              industry={indMatch}
              lang={lang}
              onNavigate={navigateTo}
            />
          </>
        );
      }
    }

    // 5. Portfolio & Case Studies
    if (normalizedPath === '/portfolio/' || normalizedPath === '/portfolio' || normalizedPath === '/referenzen/' || normalizedPath === '/referenzen') {
      return (
        <>
          <SeoHead
            title="Portfolio & Webdesign-Referenzen | Webzech Deutschland"
            description="Entdecken Sie echte Webprojekte, WordPress-Lösungen und Landingpages von Webzech für Betriebe in Bayern und ganz Deutschland."
            path="/portfolio/"
            lang={lang}
          />
          <PortfolioPage
            lang={lang}
            onNavigate={navigateTo}
          />
        </>
      );
    }

    if (normalizedPath.startsWith('/portfolio/')) {
      const caseSlug = normalizedPath.replace('/portfolio/', '').replace('/', '');
      const caseMatch = getCaseStudyBySlug(caseSlug);
      if (caseMatch) {
        return (
          <>
            <SeoHead
              title={`${caseMatch.title} – Fallstudie | Webzech`}
              description={`${caseMatch.summary} Echte Ergebnisse und technische Details.`}
              path={`/portfolio/${caseMatch.slug}/`}
              lang={lang}
            />
            <CaseStudyPage
              study={caseMatch}
              lang={lang}
              onNavigate={navigateTo}
            />
          </>
        );
      }
    }

    // 6. About
    if (normalizedPath === '/ueber-uns/' || normalizedPath === '/ueber-uns') {
      return (
        <>
          <SeoHead
            title="Über Webzech – Die Menschen hinter unseren Websites"
            description="Lernen Sie Awais Abid und Werner Polatschek kennen. Ehrliche Zusammenarbeit, höchste technische Ansprüche und persönliche Betreuung."
            path="/ueber-uns/"
            lang={lang}
          />
          <AboutPage
            lang={lang}
            onNavigate={navigateTo}
          />
        </>
      );
    }

    // 7. Pricing
    if (normalizedPath === '/preise/' || normalizedPath === '/preise') {
      return (
        <>
          <SeoHead
            title="Preise & Website-Kalkulator – Transparente Festpreise | Webzech"
            description="Berechnen Sie den Richtpreis für Ihre Website mit unserem transparenten Kostenkalkulator. Keine versteckten Gebühren."
            path="/preise/"
            lang={lang}
          />
          <PricingPage
            lang={lang}
            onNavigate={navigateTo}
            onOpenCalculatorEstimate={handleOpenEstimateInContact}
          />
        </>
      );
    }

    // 8. FAQ
    if (normalizedPath === '/faq/' || normalizedPath === '/faq') {
      return (
        <>
          <SeoHead
            title="Häufige Fragen (FAQ) zu Websites & SEO | Webzech"
            description="Antworten auf die wichtigsten Fragen zu Website-Kosten, Dauer, WordPress, SEO und technischer Betreuung."
            path="/faq/"
            lang={lang}
          />
          <FaqPage
            lang={lang}
            onNavigate={navigateTo}
          />
        </>
      );
    }

    // 9. Blog
    if (normalizedPath === '/blog/' || normalizedPath === '/blog') {
      return (
        <>
          <SeoHead
            title="Ratgeber & SEO-Blog für deutsche Unternehmen | Webzech"
            description="Aktuelle Fachartikel zu Webentwicklung, WordPress, Local SEO und Kostenoptimierung für Websites in Deutschland."
            path="/blog/"
            lang={lang}
          />
          <BlogPage
            lang={lang}
            onNavigate={navigateTo}
          />
        </>
      );
    }

    if (normalizedPath.startsWith('/blog/')) {
      const blogSlug = normalizedPath.replace('/blog/', '').replace('/', '');
      const blogMatch = getBlogPostBySlug(blogSlug);
      if (blogMatch) {
        return (
          <>
            <SeoHead
              title={`${blogMatch.title} | Webzech Ratgeber`}
              description={blogMatch.excerpt}
              path={`/blog/${blogMatch.slug}/`}
              lang={lang}
              schema={{
                '@type': 'Article',
                headline: blogMatch.title,
                datePublished: '2026-02-01',
                author: { '@type': 'Organization', name: 'Webzech' }
              }}
            />
            <BlogPostPage
              post={blogMatch}
              lang={lang}
              onNavigate={navigateTo}
            />
          </>
        );
      }
    }

    // 10. Contact
    if (normalizedPath === '/kontakt/' || normalizedPath === '/kontakt') {
      return (
        <>
          <SeoHead
            title="Kontakt & Kostenloses Erstgespräch | Webzech"
            description="Starten Sie Ihr Webprojekt. Direkter Kontakt zu Awais Abid & Werner Polatschek per Formular, E-Mail oder WhatsApp."
            path="/kontakt/"
            lang={lang}
          />
          <ContactPage
            lang={lang}
            onNavigate={navigateTo}
            prefilledEstimate={calculatorEstimate}
          />
        </>
      );
    }

    // 11. Impressum & Privacy
    if (normalizedPath === '/impressum/' || normalizedPath === '/impressum') {
      return (
        <>
          <SeoHead
            title="Impressum | Webzech Deutschland"
            description="Rechtliche Angaben und Impressum für Webzech."
            path="/impressum/"
            lang={lang}
          />
          <ImpressumPage onNavigate={navigateTo} />
        </>
      );
    }

    if (normalizedPath === '/datenschutz/' || normalizedPath === '/datenschutz') {
      return (
        <>
          <SeoHead
            title="Datenschutzerklärung | Webzech"
            description="Informationen zur DSGVO-konformen Verarbeitung Ihrer personenbezogenen Daten."
            path="/datenschutz/"
            lang={lang}
          />
          <DatenschutzPage onNavigate={navigateTo} />
        </>
      );
    }

    // 12. Fallback / 404 (with clean routing back home)
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-white font-display">
          Seite nicht gefunden (404)
        </h1>
        <p className="text-neutral-400 text-sm">
          Die angeforderte Adresse existiert nicht oder wurde verschoben.
        </p>
        <button
          onClick={() => navigateTo('/')}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold transition-colors"
        >
          Zurück zur Startseite
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans">
      <Header
        currentPath={normalizedPath}
        lang={lang}
        onNavigate={navigateTo}
        onLanguageChange={handleLanguageChange}
        onOpenContact={() => navigateTo('/kontakt/')}
      />

      <main className="flex-1 w-full">
        {renderContent()}
      </main>

      <Footer
        lang={lang}
        onNavigate={navigateTo}
        onLanguageChange={handleLanguageChange}
        onOpenSeoAudit={() => setIsSeoModalOpen(true)}
      />

      <CookieBanner
        lang={lang}
        onOpenPrivacy={() => navigateTo('/datenschutz/')}
      />

      <SeoViewerModal
        isOpen={isSeoModalOpen}
        onClose={() => setIsSeoModalOpen(false)}
      />
    </div>
  );
}
