export interface KeywordMapEntry {
  pageUrl: string;
  pageName: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: 'Commercial' | 'Informational' | 'Local Commercial' | 'Transactional' | 'Technical';
  metaTitle: string;
  metaDesc: string;
  schemaType: string;
}

export const keywordMapData: KeywordMapEntry[] = [
  {
    pageUrl: '/',
    pageName: 'Startseite (Homepage)',
    primaryKeyword: 'Webentwicklung & SEO Deutschland',
    secondaryKeywords: ['Webentwicklung Agentur', 'professionelle Website erstellen lassen', 'WordPress Entwicklung Deutschland', 'Local SEO Agentur'],
    searchIntent: 'Commercial',
    metaTitle: 'Webzech – Webentwicklung, Websites & SEO für Unternehmen in Deutschland',
    metaDesc: 'Moderne Websites, WordPress & nachhaltiges SEO für Unternehmen und Betriebe in Deutschland. Direkt von den Entwicklern, transparent & DSGVO-konform.',
    schemaType: 'Organization, WebSite'
  },
  {
    pageUrl: '/webentwicklung-agentur/',
    pageName: 'Webentwicklung Service',
    primaryKeyword: 'Webentwicklung Agentur',
    secondaryKeywords: ['Webentwicklung Deutschland', 'Webentwickler Bayern', 'individuelle Website erstellen lassen', 'Unternehmenswebsite entwickeln'],
    searchIntent: 'Commercial',
    metaTitle: 'Webentwicklung Agentur – Moderne Websites & digitale Lösungen | Webzech',
    metaDesc: 'Zukunftssichere Webentwicklung für deutsche Unternehmen: Schnell, mobiloptimiert, sauber gecodet und mit Top Core Web Vitals.',
    schemaType: 'Service, BreadcrumbList'
  },
  {
    pageUrl: '/webdesign/',
    pageName: 'Webdesign Service',
    primaryKeyword: 'Webdesign Agentur',
    secondaryKeywords: ['Webdesigner Deutschland', 'modernes Webdesign', 'Homepage erstellen lassen', 'Website Redesign'],
    searchIntent: 'Commercial',
    metaTitle: 'Professionelles Webdesign für Unternehmen in Deutschland | Webzech',
    metaDesc: 'Ästhetisches und nutzerzentriertes Webdesign. Keine 08/15-Themes, sondern maßgeschneiderte Layouts, die Vertrauen stiften und Kunden gewinnen.',
    schemaType: 'Service, BreadcrumbList'
  },
  {
    pageUrl: '/wordpress-agentur/',
    pageName: 'WordPress & Elementor',
    primaryKeyword: 'WordPress Agentur',
    secondaryKeywords: ['WordPress Website erstellen', 'WordPress Entwickler', 'Elementor Website Agentur', 'WordPress SEO'],
    searchIntent: 'Commercial',
    metaTitle: 'WordPress Agentur für maßgeschneiderte Websites & Elementor Pro | Webzech',
    metaDesc: 'Schlanke, sichere WordPress-Websites mit Elementor Pro. Kinderleichte Pflege, Top-Geschwindigkeit und sichere Konfiguration.',
    schemaType: 'Service, BreadcrumbList'
  },
  {
    pageUrl: '/landingpages/',
    pageName: 'Landingpages Service',
    primaryKeyword: 'Landingpage erstellen lassen',
    secondaryKeywords: ['Landingpage Agentur', 'Conversion Landingpage', 'Landingpage Design', 'Google Ads Landingpage'],
    searchIntent: 'Transactional',
    metaTitle: 'Landingpage erstellen lassen für messbar mehr Leads & Anfragen | Webzech',
    metaDesc: 'Verkaufs- und anfragestarke Landingpages mit spürbar hoher Conversion-Rate. Perfekt für Google Ads, Social Ads und Kampagnen.',
    schemaType: 'Service, BreadcrumbList'
  },
  {
    pageUrl: '/business-website/',
    pageName: 'Business Website Service',
    primaryKeyword: 'Business Website erstellen lassen',
    secondaryKeywords: ['Unternehmenswebsite Agentur', 'Website für Firmen', 'Mittelstand Webdesign'],
    searchIntent: 'Commercial',
    metaTitle: 'Professionelle Business Website erstellen lassen für Unternehmen | Webzech',
    metaDesc: 'Repräsentative Firmenauftritte für Handwerk, Kanzleien und Mittelstand. Seriös, barrierearm und DSGVO-sicher.',
    schemaType: 'Service, BreadcrumbList'
  },
  {
    pageUrl: '/seo-agentur/',
    pageName: 'SEO & Google Ranking',
    primaryKeyword: 'SEO Agentur',
    secondaryKeywords: ['Suchmaschinenoptimierung Deutschland', 'SEO Beratung', 'Onpage SEO Agentur', 'Google Ranking verbessern'],
    searchIntent: 'Commercial',
    metaTitle: 'SEO Agentur für nachhaltige Google-Sichtbarkeit & organische Leads | Webzech',
    metaDesc: 'Nachhaltige Suchmaschinenoptimierung statt leerer Ranking-Versprechen. Fundierte Keyword-Strategie, technische Exzellenz und echte Leads.',
    schemaType: 'Service, BreadcrumbList'
  },
  {
    pageUrl: '/local-seo/',
    pageName: 'Local SEO & Maps',
    primaryKeyword: 'Local SEO Agentur',
    secondaryKeywords: ['Google My Business Optimierung', 'Local SEO Deutschland', 'Google Maps Ranking', 'Google Business Profil Agentur'],
    searchIntent: 'Local Commercial',
    metaTitle: 'Local SEO Agentur: Regionale Kunden gewinnen in Google & Maps | Webzech',
    metaDesc: 'Dominieren Sie das Google Maps 3-Pack in Ihrer Stadt. Lokale Landingpages, LocalBusiness Schema und vollständige GBP-Optimierung.',
    schemaType: 'Service, LocalBusiness, BreadcrumbList'
  },
  {
    pageUrl: '/technical-seo/',
    pageName: 'Technical SEO',
    primaryKeyword: 'Technical SEO Agentur',
    secondaryKeywords: ['Core Web Vitals optimieren', 'PageSpeed Verbesserung', 'Schema.org strukturierte Daten', 'technische Suchmaschinenoptimierung'],
    searchIntent: 'Technical',
    metaTitle: 'Technical SEO: Höchstleistung für Ladezeit & Core Web Vitals | Webzech',
    metaDesc: 'Wir beseitigen technische Bremsklötze: Core Web Vitals im grünen Bereich, sauberes Schema.org JSON-LD und fehlerfreie Indexierung.',
    schemaType: 'Service, BreadcrumbList'
  },
  {
    pageUrl: '/website-wartung/',
    pageName: 'Website Wartung',
    primaryKeyword: 'Website Wartung',
    secondaryKeywords: ['WordPress Wartung Service', 'Website Support Deutschland', 'Sicherheitsupdates Website', 'Website Pflegevertrag'],
    searchIntent: 'Commercial',
    metaTitle: 'Website Wartung & technischer Support für Unternehmen | Webzech',
    metaDesc: 'Sicherheit, wöchentliche Backups, Plugin-Updates und persönlicher Entwickler-Support. Monatlich kündbar und absolut verlässlich.',
    schemaType: 'Service, BreadcrumbList'
  },
  {
    pageUrl: '/ueber-uns/',
    pageName: 'Über uns (Founders)',
    primaryKeyword: 'Webzech Über uns',
    secondaryKeywords: ['Awais Abid Webentwickler', 'Werner Polatschek Webzech', 'Webagentur Gründer Bayern'],
    searchIntent: 'Informational',
    metaTitle: 'Über Webzech – Die Menschen hinter unseren Websites',
    metaDesc: 'Lernen Sie Awais Abid und Werner Polatschek kennen. Transparente Zusammenarbeit, technische Leidenschaft und persönliche Betreuung.',
    schemaType: 'AboutPage, Person'
  },
  {
    pageUrl: '/portfolio/',
    pageName: 'Portfolio & Referenzen',
    primaryKeyword: 'Webentwicklung Referenzen',
    secondaryKeywords: ['Website Portfolio', 'WordPress Fallstudien', 'Webdesign Beispiele Deutschland'],
    searchIntent: 'Commercial',
    metaTitle: 'Portfolio & Referenzen – Echte Webprojekte von Webzech',
    metaDesc: 'Echte Arbeiten und Fallstudien für lokale Betriebe, Dienstleister und GreenTech-Unternehmen in Bayern und Deutschland.',
    schemaType: 'CollectionPage, CreativeWork'
  },
  {
    pageUrl: '/webentwicklung-muenchen/',
    pageName: 'Standort München',
    primaryKeyword: 'Webentwicklung München',
    secondaryKeywords: ['Webdesign München', 'Website erstellen lassen München', 'WordPress Agentur München', 'SEO München'],
    searchIntent: 'Local Commercial',
    metaTitle: 'Webentwicklung München – Websites & Local SEO | Webzech',
    metaDesc: 'Professionelle Webentwicklung und Local SEO für Unternehmen, Kanzleien und Dienstleister in München und Umgebung.',
    schemaType: 'Service, LocalBusiness, BreadcrumbList'
  },
  {
    pageUrl: '/webentwicklung-passau/',
    pageName: 'Standort Passau',
    primaryKeyword: 'Webentwicklung Passau',
    secondaryKeywords: ['Webdesign Passau', 'Website erstellen lassen Passau', 'SEO Passau', 'WordPress Passau'],
    searchIntent: 'Local Commercial',
    metaTitle: 'Webentwicklung Passau – Professionelle Websites & SEO | Webzech',
    metaDesc: 'Maßgeschneiderte Webentwicklung und Local SEO für Betriebe, Handwerker und Freiberufler in Passau und Niederbayern.',
    schemaType: 'Service, LocalBusiness, BreadcrumbList'
  },
  {
    pageUrl: '/webentwicklung-vilshofen/',
    pageName: 'Standort Vilshofen',
    primaryKeyword: 'Webentwicklung Vilshofen',
    secondaryKeywords: ['Webdesign Vilshofen', 'Website erstellen Vilshofen', 'SEO Vilshofen an der Donau'],
    searchIntent: 'Local Commercial',
    metaTitle: 'Webentwicklung Vilshofen an der Donau – Websites & SEO | Webzech',
    metaDesc: 'Direkte Website-Erstellung und regionale Suchmaschinenoptimierung für Betriebe und Handwerker in Vilshofen an der Donau.',
    schemaType: 'Service, LocalBusiness, BreadcrumbList'
  },
  {
    pageUrl: '/kontakt/',
    pageName: 'Kontakt',
    primaryKeyword: 'Webzech Kontakt',
    secondaryKeywords: ['Website Projekt anfragen', 'Webentwickler Erstgespräch', 'Kostenlose Beratung Website'],
    searchIntent: 'Transactional',
    metaTitle: 'Kontakt & Projektanfrage – Kostenloses Erstgespräch | Webzech',
    metaDesc: 'Starten Sie Ihr Webprojekt mit Webzech. Schnelle Kontaktaufnahme per Formular, E-Mail oder direktem WhatsApp-Chat.',
    schemaType: 'ContactPage'
  },
  {
    pageUrl: '/preise/',
    pageName: 'Preise & Kalkulator',
    primaryKeyword: 'Was kostet eine Website',
    secondaryKeywords: ['Website Kosten Rechner', 'Webdesign Preise Deutschland', 'WordPress Website Kosten'],
    searchIntent: 'Commercial',
    metaTitle: 'Preise & Website-Kalkulator – Transparente Festpreise | Webzech',
    metaDesc: 'Ermitteln Sie unverbindlich Richtpreise für Ihre neue Website mit unserem interaktiven Website-Kosten-Kalkulator.',
    schemaType: 'WebApplication'
  }
];

export const technicalSeoChecklist = [
  { item: 'HTTPS / TLS-Verschlüsselung', status: 'Aktiviert', note: 'Zertifikate erzwingen sicheren Datentransport für Formulare & Analytics.' },
  { item: 'XML-Sitemap-Generierung', status: 'Implementiert', note: 'Vollständige sitemap.xml mit allen Sprachen (de, en, ru, uk).' },
  { item: 'Robots.txt & Crawling-Steuerung', status: 'Konfiguriert', note: 'Disallow für interne Utility-Routen, Freigabe aller kanonischen Inhaltsseiten.' },
  { item: 'Selbstreferenzierende Canonical-Tags', status: 'Aktiviert', note: 'Jede Sprachversion verlinkt sauber auf ihre eindeutige kanonische URL.' },
  { item: 'Hreflang-Verlinkung', status: 'Implementiert', note: 'Gegenseitige Verweise: hreflang="de", "en", "ru", "uk" und x-default.' },
  { item: 'Mobile-First & Responsivität', status: 'Getestet', note: '100% flüssige Skalierung von 320px bis 2560px ohne horizontalen Scroll.' },
  { item: 'Core Web Vitals Optimierung', status: 'Eingehalten', note: 'LCP < 1.2s, CLS < 0.02, minimales Blocking und preloaded Fonts.' },
  { item: 'Schema.org JSON-LD Strukturdaten', status: 'Aktiviert', note: 'Organization, LocalBusiness, Service, BreadcrumbList, FAQPage, Article.' },
  { item: '301 / 404 Fehlerseiten-Handling', status: 'Konfiguriert', note: 'Sprechende 404-Fehlerseite mit intelligenter Rückführung zu Hauptseiten.' },
  { item: 'Barrierefreiheit & WCAG AA Kontraste', status: 'Erfüllt', note: 'Kontrastwerte >= 4.5:1, Fokusringe, Screenreader-Attribute und semantisches HTML.' },
  { item: 'DSGVO & Lokale Schriften', status: 'Konform', note: 'Keine ungesicherte Drittanbieter-Datenübertragung vor Zustimmung; lokale Schriften.' }
];
