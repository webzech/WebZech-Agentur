import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'webentwicklung',
    slug: 'webentwicklung-agentur',
    title: 'Webentwicklung',
    shortDesc: 'Moderne, performante und responsive Websites für Unternehmen in Deutschland.',
    h1: 'Webentwicklung Agentur für moderne Websites und digitale Lösungen',
    primaryKeyword: 'Webentwicklung Agentur',
    secondaryKeywords: [
      'Webentwicklung Deutschland',
      'Webentwickler Bayern',
      'professionelle Webentwicklung',
      'individuelle Website erstellen lassen',
      'Unternehmenswebsite entwickeln'
    ],
    searchIntent: 'Commercial / Transactional',
    heroIntro: 'Wir entwickeln zukunftssichere Unternehmenswebsites, individuelle Webanwendungen und Schnittstellen, die durch messbare Geschwindigkeit, sauberen Code und intuitive Bedienung überzeugen.',
    problem: {
      title: 'Das Problem mit veralteten oder unfertigen Websites',
      points: [
        'Langsame Ladezeiten kosten wertvolle Google-Rankings und Besucher.',
        'Schlechte Darstellung auf Smartphones (über 65% des mobilen Traffics gehen verloren).',
        'Veraltete CMS-Systeme ohne Sicherheitsupdates sind anfällig für Ausfälle.',
        'Keine saubere technische Basis für gezielte Suchmaschinenoptimierung.'
      ]
    },
    solution: {
      title: 'Unser Ansatz: Technische Präzision ohne Agentur-Bürokratie',
      text: 'Bei Webzech sprechen Sie direkt mit den Entwicklern. Wir bauen Websites mit schlankem Code, optimierten Datenbankabfragen und standardisierter Schema.org-Struktur. Das Resultat: Bestnoten bei Googles Core Web Vitals, reibungslose Bedienung und ein digitales Aushängeschild, auf das Sie stolz sein können.'
    },
    features: [
      {
        title: 'Responsives & Modernes Design',
        description: 'Pixelgenaue Darstellung auf allen Bildschirmgrößen vom Smartphone bis zum 4K-Monitor.'
      },
      {
        title: 'Core Web Vitals Optimierung',
        description: 'Ladezeiten unter 1,2 Sekunden für Bestnoten im Google PageSpeed Index.'
      },
      {
        title: 'Sicherheit & DSGVO-Konformität',
        description: 'SSL-Verschlüsselung, datenschutzkonforme Schriftarten lokal gehostet und saubere Cookie-Steuerung.'
      },
      {
        title: 'Erweiterbare Architektur',
        description: 'Modulare Bausteine, sodass Sie in Zukunft mühelos neue Unterseiten, Rechner oder Shops anbinden können.'
      }
    ],
    process: [
      { step: '01', title: 'Erstgespräch & Anforderungsanalyse', desc: 'Wir klären Ihre Geschäftsziele, Zielgruppen und technischen Wünsche.' },
      { step: '02', title: 'Konzeption & Wireframing', desc: 'Strukturierte Seitenarchitektur mit klaren Conversion-Pfaden.' },
      { step: '03', title: 'UI/UX Design', desc: 'Individuelle Designentwürfe, abgestimmt auf Ihr Corporate Design.' },
      { step: '04', title: 'Entwicklung & Programmierung', desc: 'Sauberer Code nach neuesten Webstandards (HTML5, modern CSS, JS/React/WordPress).' },
      { step: '05', title: 'SEO & Performance-Audit', desc: 'Testing aller Core Web Vitals, Metatags, Redirects und Schema-Daten.' },
      { step: '06', title: 'Launch & Langzeit-Support', desc: 'Reibungsloser Domain-Umzug, Monitoring und kontinuierliche Pflege.' }
    ],
    forWhom: [
      'Mittelständische Unternehmen, die ihr veraltetes Portal erneuern möchten',
      'Lokale Betriebe und Handwerker, die regionale Kunden gewinnen wollen',
      'Dienstleister & Berater, die Vertrauen und Neukunden aufbauen müssen',
      'Startups mit Bedarf an zügiger und skalierbarer Umsetzung'
    ],
    deliverables: [
      'Vollständige Website schlüsselfertig eingerichtet',
      'Mobile-First Responsive Layout',
      'Grundlegendes On-Page SEO inkl. Metadaten & Sitemap',
      'DSGVO-konformes Impressum & Datenschutzerklärung-Template',
      'Schulungsvideo / Einweisung zur einfachen Inhaltspflege'
    ],
    faqs: [
      {
        q: 'Was kostet eine professionelle Website bei Webzech?',
        a: 'Kleinere, zielgerichtete Business-Websites starten bereits ab ca. 1.200 € bis 2.500 €. Umfangreichere Unternehmensauftritte mit mehreren Leistungsbereichen und individuellen Funktionen bewegen sich typischerweise zwischen 3.000 € und 5.500 €. Wir arbeiten immer mit transparenten Festpreisen.'
      },
      {
        q: 'Wie lange dauert die Entwicklung einer neuen Website?',
        a: 'Ein klar umrissenes Webprojekt ist in der Regel innerhalb von 2 bis 4 Wochen nach Vorliegen aller Inhalte fertiggestellt und online.'
      },
      {
        q: 'Kann ich Texte und Bilder später selbst austauschen?',
        a: 'Ja, absolut. Wir richten die Verwaltung so ein, dass Sie neue Texte, Neuigkeiten oder Referenzen ohne Programmierkenntnisse intuitiv selbst editieren können.'
      }
    ]
  },
  {
    id: 'webdesign',
    slug: 'webdesign',
    title: 'Webdesign',
    shortDesc: 'Ästhetisches, nutzerzentriertes Design, das Besucher in zahlende Kunden verwandelt.',
    h1: 'Professionelles Webdesign für Unternehmen in Deutschland',
    primaryKeyword: 'Webdesign Agentur',
    secondaryKeywords: ['Webdesigner Deutschland', 'modernes Webdesign', 'Homepage erstellen lassen', 'Website Redesign', 'UI UX Design Agentur'],
    searchIntent: 'Commercial',
    heroIntro: 'Ein erstklassiges Webdesign ist mehr als nur hübsche Farben: Es führt den Besucher intuitiv zu Ihren Kernleistungen und baut innerhalb von Sekunden echtes Kundenvertrauen auf.',
    problem: {
      title: 'Warum generisches 08/15-Design Kunden vergrault',
      points: [
        'Überladene Seiten ohne klaren visuellen Fokus überfordern Besucher.',
        'Fehlende Alleinstellungsmerkmale lassen Ihr Unternehmen austauschbar wirken.',
        'Komplizierte Navigation führt zu sofortigen Absprüngen zur Konkurrenz.',
        'Stockfotos ohne Persönlichkeit vermitteln keine Glaubwürdigkeit.'
      ]
    },
    solution: {
      title: 'Design → Development → SEO: Das harmonische Zusammenspiel',
      text: 'Wir trennen Gestaltung nicht von der Technik. Wir entwerfen Layouts, die Ihre Marke widerspiegeln, sofort verständlich sind und sich technisch ohne Leistungseinbußen umsetzen lassen.'
    },
    features: [
      {
        title: 'Klare typografische Hierarchie',
        description: 'Hochwertige Schriften, harmonische Kontraste und exzellente Lesbarkeit auf allen Bildschirmen.'
      },
      {
        title: 'Psychologische Conversion-Führung',
        description: 'Gezielte Platzierung von Handlungsaufforderungen (CTAs) an entscheidenden Lesepunkten.'
      },
      {
        title: 'Markengerechte Bildsprache',
        description: 'Fokus auf authentische Team-, Standort- und Produktpräsentationen.'
      },
      {
        title: 'Schnelle Prototypen',
        description: 'Interaktive Vorschau vor dem finalen Programmierstart für volles Mitspracherecht.'
      }
    ],
    process: [
      { step: '01', title: 'Brand Audit', desc: 'Analyse Ihrer Markenidentität und Zielgruppenbedürfnisse.' },
      { step: '02', title: 'Moodboard & Konzept', desc: 'Farben, Schriften und visueller Stil im Einklang mit Ihrer Branche.' },
      { step: '03', title: 'Desktop & Mobile Screendesigns', desc: 'Ausarbeitung aller Kernansichten.' },
      { step: '04', title: 'Feedback & Verfeinerung', desc: 'Feinschliff nach Ihren Wünschen.' }
    ],
    forWhom: [
      'Unternehmen mit veraltetem Design aus den 2010er Jahren',
      'Praxen, Kanzleien und Dienstleister mit hohem Anspruch an Seriosität',
      'Lokale Geschäfte, die sich von regionalen Mitbewerbern abheben wollen'
    ],
    deliverables: [
      'Komplettes Designsystem (Farben, Typografie, Abstände, Komponenten)',
      'Responsive Vorlagen für Startseite, Leistungsseiten und Kontakt',
      'Designübergabe oder direkte technische Umsetzung im Paket'
    ],
    faqs: [
      {
        q: 'Können Sie auch mein bestehendes Firmenlogo modernisieren?',
        a: 'Ja, wir prüfen auf Wunsch gerne Ihr bestehendes Logo und erstellen eine behutsame Auffrischung oder ein vollständiges Redesign.'
      },
      {
        q: 'Erhalte ich vorab Entwürfe zur Abstimmung?',
        a: 'Selbstverständlich. Bevor die Programmierung startet, stimmen wir den Gestaltungsentwurf gemeinsam ab.'
      }
    ]
  },
  {
    id: 'wordpress',
    slug: 'wordpress-agentur',
    title: 'WordPress & Elementor',
    shortDesc: 'Sichere, rasend schnelle WordPress Websites mit benutzerfreundlicher Pflege.',
    h1: 'WordPress Agentur für maßgeschneiderte Websites & Elementor Pro',
    primaryKeyword: 'WordPress Agentur',
    secondaryKeywords: ['WordPress Website erstellen', 'WordPress Entwickler', 'Elementor Website Agentur', 'WordPress SEO Deutschland', 'WordPress Wartung'],
    searchIntent: 'Commercial / Transactional',
    heroIntro: 'WordPress treibt über 40% des Internets an. Wir bauen WordPress- und Elementor-Websites, die sich spielend leicht pflegen lassen, ohne dass die Ladezeit oder Sicherheit leidet.',
    problem: {
      title: 'Die typischen Fallen herkömmlicher WordPress-Seiten',
      points: [
        'Überladene Themes und 40+ ungeprüfte Plugins verlangsamen die Website massiv.',
        'Sicherheitslücken durch fehlende Updates oder unsichere Drittanbieter-Erweiterungen.',
        'Zerschossene Layouts nach Updates und fehlende Backups.',
        'Schlechtes Backend, bei dem sich der Kunde nicht mehr zurechtfindet.'
      ]
    },
    solution: {
      title: 'Schlank, sicher und wartungsarm',
      text: 'Wir setzen auf ein minimalistisches Plugin-Setup, saubere Code-Strukturen und Elementor Pro mit optimierten Assets. Sie erhalten ein stabiles System, das schnell lädt und Freude bei der täglichen Bearbeitung macht.'
    },
    features: [
      {
        title: 'Elementor Pro Expertise',
        description: 'Visuelles Editieren ohne Layout-Chaos. Vorgefertigte Abschnitte für Ihr Team.'
      },
      {
        title: 'Performance Caching & Asset Clean-up',
        description: 'Keine unnötigen CSS/JS-Dateien im Hintergrund. PageSpeed-Werte über 90 Punkten.'
      },
      {
        title: 'Härtung & Sicherheitskonfiguration',
        description: 'Zwei-Faktor-Login, automatisierte Backups, Firewall und Schutz vor Brute-Force-Attacken.'
      },
      {
        title: 'DSGVO-konforme Integration',
        description: 'Lokale Google Fonts, Cookie-Einwilligungslösung und datenschutzsichere Kontaktformulare.'
      }
    ],
    process: [
      { step: '01', title: 'System-Setup', desc: 'Installation auf schnellem deutschen Hosting mit neuester PHP-Version.' },
      { step: '02', title: 'Theme & Child-Theme', desc: 'Individuell angepasstes Child-Theme für update-sichere Anpassungen.' },
      { step: '03', title: 'Elementor Template-Bau', desc: 'Erstellung wiederverwendbarer Module für Ihre Unterseiten.' },
      { step: '04', title: 'Inhaltspflege & Tests', desc: 'Einpflegen Ihrer Inhalte und finales Testing.' }
    ],
    forWhom: [
      'Unternehmen, die ihre Website regelmäßig mit News oder Referenzen füttern wollen',
      'Betriebe, die von teuren monatlichen Baukastensystemen (Wix/Jimdo) auf eine eigene Plattform wechseln möchten',
      'Kunden mit bestehender WordPress-Seite, die einen Relaunch oder Beschleunigung benötigen'
    ],
    deliverables: [
      'Individuelle WordPress-Installation inklusive Sicherheits-Härtung',
      'Elementor Pro Modulbibliothek',
      'Automatisiertes Backup-System auf externem Speicher',
      'Persönliches Erklärungsvideo für die Redaktion'
    ],
    faqs: [
      {
        q: 'Muss ich monatlich für WordPress bezahlen?',
        a: 'WordPress selbst ist als Open-Source-Software kostenlos. Sie zahlen lediglich Ihre normalen Hostingkosten (z.B. bei Hetzner oder All-Inkl ca. 5–15 € / Monat).'
      },
      {
        q: 'Können Sie meine bestehende WordPress-Website schneller machen?',
        a: 'Ja. Wir bieten gezielte Speed-Audits an, entfernen Altlasten, optimieren Datenbanken und richten effektives Caching ein.'
      }
    ]
  },
  {
    id: 'landingpages',
    slug: 'landingpages',
    title: 'Landingpages',
    shortDesc: 'Verkaufs- und anfragestarke Landingpages mit spürbar hoher Conversion Rate.',
    h1: 'Landingpage erstellen lassen für messbar mehr Leads & Anfragen',
    primaryKeyword: 'Landingpage erstellen lassen',
    secondaryKeywords: ['Landingpage Agentur', 'Conversion Landingpage', 'Landingpage Design', 'Google Ads Landingpage', 'Lead Landingpage'],
    searchIntent: 'Commercial / High Intent',
    heroIntro: 'Eine spezialisierte Landingpage hat genau eine Mission: Den Besucher ohne Ablenkung von Ihrem Angebot zu überzeugen und ihn zur Kontaktaufnahme oder zum Kauf zu bewegen.',
    problem: {
      title: 'Warum Standard-Startseiten bei Werbekampagnen versagen',
      points: [
        'Zu viele Links und Menüs lenken den bezahlten Besucher ab.',
        'Unklare Nutzenargumente führen zum Verlassen der Seite innerhalb von 5 Sekunden.',
        'Zu lange Formulare hemmen die Bereitschaft zur Kontaktaufnahme.',
        'Lange Ladezeiten erhöhen den Klickpreis (CPC) bei Google Ads spürbar.'
      ]
    },
    solution: {
      title: 'Psychologisch optimierter Aufbau mit klarem Call-to-Action',
      text: 'Wir strukturieren Ihre Landingpage nach erprobten Prinzipien: Starke Headline, greifbarer Nutzen, soziale Beweise (Trust), transparente Schritte und ein barrierefreies, vertrauensbildendes Anfrageformular.'
    },
    features: [
      {
        title: 'Single Focus Architecture',
        description: 'Keine ablenkende Hauptnavigation – der Fokus bleibt voll und ganz auf Ihrem Angebot.'
      },
      {
        title: 'Conversion-Formulare & WhatsApp Direct',
        description: 'Niedrige Hemmschwelle: Formular, Telefon-Klick oder direkter WhatsApp-Start.'
      },
      {
        title: 'A/B-Testing & Tracking Ready',
        description: 'Vorbereitet für datenschutzkonformes Event-Tracking (Google Tag Manager, Matomo).'
      },
      {
        title: 'Mobile Speed Turbo',
        description: 'Blitzschnelle Bereitstellung für Google Ads- und Social Media-Traffic.'
      }
    ],
    process: [
      { step: '01', title: 'Angebots- & Zielgruppenanalyse', desc: 'Herausarbeiten des Kernversprechens und der stärksten Einwandbehandlungen.' },
      { step: '02', title: 'Copywriting-Struktur', desc: 'Formulierung prägnanter Headlines und Bulletpoints.' },
      { step: '03', title: 'Design & Umsetzung', desc: 'Visuell packende Aufbereitung mit klaren Vertrauenselementen.' },
      { step: '04', title: 'Tracking-Einrichtung', desc: 'Verbindung zu Ihren Analyse-Tools und Conversion-Zielen.' }
    ],
    forWhom: [
      'Dienstleister mit Google Ads Kampagnen',
      'Handwerker für gezielte Notdienst- oder Projektanfragen',
      'Unternehmen zur Mitarbeitergewinnung (Recruiting Landingpages)',
      'Produkteinführungen und Webinar-Anmeldungen'
    ],
    deliverables: [
      'Fertige, conversion-optimierte Landingpage',
      'Integration von Kontaktformularen und Direktnachrichten',
      'Event-Tracking Setup zur Messung von Conversions',
      'Dankesseite (Thank-You-Page) mit Folgeschritten'
    ],
    faqs: [
      {
        q: 'Worin unterscheidet sich eine Landingpage von einer normalen Website?',
        a: 'Eine Website informiert umfassend über die gesamte Firma. Eine Landingpage konzentriert sich kompromisslos auf ein einziges Angebot und maximiert die Abschlussquote.'
      },
      {
        q: 'Funktioniert die Landingpage auch mit Google Ads?',
        a: 'Ja, sie ist exakt dafür optimiert. Durch die hohe Relevanz und Geschwindigkeit steigt der Google Ads Qualitätsfaktor, was Klickkosten senkt.'
      }
    ]
  },
  {
    id: 'business-website',
    slug: 'business-website',
    title: 'Business Websites',
    shortDesc: 'Repräsentative Unternehmensauftritte für Mittelstand, Handwerk und Kanzleien.',
    h1: 'Professionelle Business Website erstellen lassen für Unternehmen',
    primaryKeyword: 'Business Website erstellen lassen',
    secondaryKeywords: ['Unternehmenswebsite Agentur', 'Website für Firmen', 'Mittelstand Webdesign', 'seriöse Homepage Unternehmen'],
    searchIntent: 'Commercial',
    heroIntro: 'Ihre Unternehmenswebsite ist oft der wichtigste Erstkontakt für Geschäftspartner, Kunden und qualifizierte Bewerber. Wir schaffen einen souveränen, modernen Auftritt.',
    problem: {
      title: 'Die Herausforderung im deutschen B2B- & Mittelstands-Markt',
      points: [
        'Kunden recherchieren vor der Kontaktaufnahme intensiv online.',
        'Ein unmoderner Auftritt signalisiert unbewusst veraltete Unternehmensprozesse.',
        'Mitarbeitergewinnung scheitert an unattraktiven Karriereseiten.',
        'Fehlende Nachvollziehbarkeit des Leistungsspektrums.'
      ]
    },
    solution: {
      title: 'Glaubwürdigkeit, Struktur und regionale Stärke',
      text: 'Wir verknüpfen Ihre Leistungsbereiche, Referenzen, Teamvorstellung und Zertifizierungen zu einer logischen Architektur, die Einkäufer und Privatkunden gleichermaßen überzeugt.'
    },
    features: [
      { title: 'Strukturiertes Leistungsmenü', description: 'Übersichtliche Unterseiten für jede Ihrer Kernkompetenzen.' },
      { title: 'Karriere- & Bewerberbereich', description: 'Attraktive Stellenausschreibungen mit 1-Klick-Bewerbungsformular.' },
      { title: 'Projekt-Showcases', description: 'Vorstellung abgeschlossener Arbeiten zur Untermauerung Ihrer Fachkompetenz.' },
      { title: 'DSGVO-Sicherheit nach deutschem Recht', description: 'Vollständiges Impressum, Datenschutzerklärung und sichere Formularübertragung.' }
    ],
    process: [
      { step: '01', title: 'Unternehmens-Workshop', desc: 'Erfassung aller Leistungsbereiche und Zielkunden.' },
      { step: '02', title: 'Sitemap-Architektur', desc: 'Planung aller Haupt- und Unterseiten für optimale Auffindbarkeit.' },
      { step: '03', title: 'Content- & Bildkonzept', desc: 'Strukturierte Vorgaben für Texte und Fotos.' },
      { step: '04', title: 'Realisierung & Schulung', desc: 'Technische Umsetzung und Einführung Ihres Teams.' }
    ],
    forWhom: [
      'Gewerbebetriebe und Produktionsunternehmen',
      'Ingenieurbüros, Architekten und Sachverständige',
      'Steuerberater, Rechtsanwälte und Wirtschaftsprüfer',
      'Größere Handwerks- und Montagebetriebe'
    ],
    deliverables: [
      'Umfassende Firmenwebsite mit bis zu 15+ Unterseiten',
      'Leistungs- und Referenzkatalog',
      'Karriereportal mit Bewerberformular',
      'DSGVO-Basisdokumente und Cookie-Tool'
    ],
    faqs: [
      {
        q: 'Können bestehende Texte und Bilder übernommen werden?',
        a: 'Ja, wir prüfen Ihre bestehenden Materialien, optimieren Texte bei Bedarf redaktionell für SEO und bereiten Bilder technisch auf.'
      },
      {
        q: 'Werden E-Mails und Domains ebenfalls migriert?',
        a: 'Wir unterstützen Sie bei der DNS-Konfiguration, damit Ihre geschäftlichen E-Mail-Adressen unterbrechungsfrei weiterlaufen.'
      }
    ]
  },
  {
    id: 'seo',
    slug: 'seo-agentur',
    title: 'SEO & Google Ranking',
    shortDesc: 'Nachhaltige Suchmaschinenoptimierung für planbare Sichtbarkeit ohne leere Versprechen.',
    h1: 'SEO Agentur für nachhaltige Google-Sichtbarkeit und organische Leads',
    primaryKeyword: 'SEO Agentur',
    secondaryKeywords: ['Suchmaschinenoptimierung Deutschland', 'SEO Beratung', 'Onpage SEO Agentur', 'Google Ranking verbessern', 'SEO für Unternehmen'],
    searchIntent: 'Commercial / Informational',
    heroIntro: 'SEO mit nachhaltiger Strategie statt kurzfristiger Tricks: Wir sorgen dafür, dass Ihr Unternehmen für die Suchbegriffe gefunden wird, die Ihre Zielkunden tatsächlich eingeben.',
    problem: {
      title: 'Warum 90% aller Unternehmenswebsites bei Google unsichtbar bleiben',
      points: [
        'Texte wurden ohne vorherige Keyword-Recherche verfasst.',
        'Fehlende semantische Überschriftenstrukturen (H1, H2, H3) und mangelnde Meta-Tags.',
        'Google kann die Seitenarchitektur wegen technischer Mängel nicht effizient crawlen.',
        'Keine Relevanzsignale für regionale und kommerzielle Suchanfragen.'
      ]
    },
    solution: {
      title: 'Technisches Fundament + fundierte Keyword-Strategie',
      text: 'Wir versprechen keine unseriösen "Platz 1 über Nacht"-Garantien. Stattdessen analysieren wir das reale Suchvolumen in Ihrer Region, beheben technische Barrieren und bauen zielgerichtete Inhaltswelten auf, die Google nachhaltig belohnt.'
    },
    features: [
      { title: 'Fundierte Keyword- & SERP-Analyse', description: 'Ermittlung von Suchvolumen, Wettbewerbsdichte und Nutzerabsicht.' },
      { title: 'On-Page & Content-Optimierung', description: 'Präzise Optimierung von Texten, Überschriften, Bildern und internen Verlinkungen.' },
      { title: 'Technische SEO-Bereinigung', description: 'XML-Sitemap, Robots.txt, Canonical Tags und strukturierte Daten (JSON-LD).' },
      { title: 'Google Search Console Integration', description: 'Einreichung, Überwachung der Indexierung und Fehlerbehebung.' }
    ],
    process: [
      { step: '01', title: 'SEO-Audit', desc: 'Detaillierte Analyse des Ist-Zustands Ihrer Domain.' },
      { step: '02', title: 'Keyword-Mapping', desc: 'Zuordnung relevanter Suchbegriffe zu spezifischen Unterseiten.' },
      { step: '03', title: 'Technische Korrekturen', desc: 'Beseitigung von Crawling- und Ladezeitproblemen.' },
      { step: '04', title: 'Content-Verfeinerung', desc: 'Schärfung der Inhalte nach Nutzerabsicht (Search Intent).' },
      { step: '05', title: 'Monitoring & Reporting', desc: 'Regelmäßige Kontrolle der Ranking-Entwicklung in der Search Console.' }
    ],
    forWhom: [
      'Unternehmen, die unabhängig von teurer Pay-per-Click-Werbung werden wollen',
      'Firmen mit neu gestalteten Websites, die von Google noch ignoriert werden',
      'Dienstleister in umkämpften Branchen, die Marktanteile gewinnen möchten'
    ],
    deliverables: [
      'Umfassendes SEO-Audit und Keyword-Mapping-Dokument',
      'Vollständige On-Page-Optimierung aller Kernseiten',
      'Fehlerfreie Schema.org-Struktur (JSON-LD)',
      'Google Search Console Einbindung und Indexierungs-Check'
    ],
    faqs: [
      {
        q: 'Garantieren Sie Platz 1 bei Google?',
        a: 'Nein, und davor sollten Sie sich bei jeder Agentur hüten. Niemand besitzt den Google-Algorithmus. Wir garantieren jedoch erstklassige technische Standards und fundierte Inhaltsstrukturen nach aktuellen Google-Richtlinien.'
      },
      {
        q: 'Wie lange dauert es, bis SEO-Ergebnisse sichtbar werden?',
        a: 'Erste Indexierungen und Ranking-Verbesserungen zeigen sich meist nach 4 bis 12 Wochen. Nachhaltige organische Spitzenpositionen bauen sich über 3 bis 6 Monate auf.'
      }
    ]
  },
  {
    id: 'local-seo',
    slug: 'local-seo',
    title: 'Local SEO & Maps',
    shortDesc: 'Dominanz in Ihrer Stadt: Google Business Profile, Local Pack & Google Maps.',
    h1: 'Local SEO Agentur: Regionale Kunden gewinnen in Google & Maps',
    primaryKeyword: 'Local SEO Agentur',
    secondaryKeywords: ['Google My Business Optimierung', 'Local SEO Deutschland', 'Google Maps Ranking', 'lokale Suchmaschinenoptimierung', 'Google Business Profil Agentur'],
    searchIntent: 'Commercial / Local',
    heroIntro: 'Wenn Kunden in Ihrer Stadt nach Ihren Leistungen suchen, müssen Sie im begehrten Google Maps 3-Pack ganz oben stehen. Wir optimieren Ihren regionalen Auftritt von Grund auf.',
    problem: {
      title: 'Die verpasste Chance lokaler Laufkundschaft und Notdienst-Anfragen',
      points: [
        'Über 46% aller Google-Suchen haben einen lokalen Bezug (z.B. "Zahnarzt Passau" oder "Elektriker München").',
        'Unvollständige oder veraltete Google-Unternehmensprofile kosten täglich Aufträge.',
        'Widersprüchliche Kontaktdaten (NAP: Name, Address, Phone) verwirren Google.',
        'Fehlende strukturierte Standortdaten auf der eigenen Website.'
      ]
    },
    solution: {
      title: 'Ganzheitliche lokale Optimierung für echte Vor-Ort-Anfragen',
      text: 'Wir verknüpfen Ihr Google Business Profil mit Ihrer Website, richten passgenaue lokale Landingpages ein und hinterlegen maschinenlesbare LocalBusiness-Schemas. So signalisieren wir Google unmissverständlich Ihre regionale Relevanz.'
    },
    features: [
      { title: 'Google Business Profile Optimierung', description: 'Vollständige Kategorienwahl, Fotos, Öffnungszeiten und Leistungsbeschreibungen.' },
      { title: 'NAP-Konsistenz (Name, Adresse, Telefon)', description: 'Einheitliche Firmendaten über alle relevanten Branchenverzeichnisse.' },
      { title: 'Lokale Landingpages & Content', description: 'Gezielte Zielgebietsseiten mit echtem regionalem Mehrwert statt Doorway-Pages.' },
      { title: 'LocalBusiness Schema Markup', description: 'Präzise Geokoordinaten und Adress-Schemas für den Google Bot.' }
    ],
    process: [
      { step: '01', title: 'Standort- & Wettbewerbsaudit', desc: 'Analyse Ihrer lokalen Wettbewerber im Google Maps 3-Pack.' },
      { step: '02', title: 'Unternehmensprofil-Tuning', desc: 'Optimierung aller Attribute, Kategorien und Unterseiten-Links.' },
      { step: '03', title: 'Lokales Schema-Setup', desc: 'Einbettung der LocalBusiness-Strukturdaten in Ihre Website.' },
      { step: '04', title: 'Bewertungs-Leitfaden', desc: 'Strategie zur kontinuierlichen Gewinnung echter Kundenbewertungen.' }
    ],
    forWhom: [
      'Handwerker, Dachdecker, Sanitärbetriebe und Elektriker',
      'Arztpraxen, Zahnärzte und Physiotherapeuten',
      'Restaurants, Cafés und lokale Gastronomie',
      'Kanzleien, Notare, Berater und Fahrschulen'
    ],
    deliverables: [
      'Vollständig optimiertes Google Business Profil',
      'Lokales Inhaltskonzept für Ihre Zielregionen',
      'LocalBusiness Schema.org JSON-LD Script',
      'Praxis-Checkliste für Kundenrezensionen'
    ],
    faqs: [
      {
        q: 'Muss ich ein physisches Büro haben, um bei Google Maps zu erscheinen?',
        a: 'Unternehmen mit Einzugsgebiet (z.B. mobile Handwerker oder Dienstleister) können ein Einzugsgebiet ohne öffentliche Privatadresse angeben und dennoch im Local Pack ranken.'
      },
      {
        q: 'Wie wichtig sind Google Bewertungen für das Ranking?',
        a: 'Bewertungen sind einer der stärksten Ranking- und Vertrauensfaktoren im Local Pack. Wir zeigen Ihnen, wie Sie systematisch echte 5-Sterne-Rezensionen von zufriedenen Kunden sammeln.'
      }
    ]
  },
  {
    id: 'technical-seo',
    slug: 'technical-seo',
    title: 'Technical SEO',
    shortDesc: 'Core Web Vitals, Crawling, saubere Indexierung und Schema.org-Architektur.',
    h1: 'Technical SEO: Höchstleistung für Ladezeit, Crawlbarkeit & Core Web Vitals',
    primaryKeyword: 'Technical SEO Agentur',
    secondaryKeywords: ['Core Web Vitals optimieren', 'PageSpeed Verbesserung', 'Schema.org strukturierte Daten', 'technische Suchmaschinenoptimierung', 'Crawling Fehler beheben'],
    searchIntent: 'Commercial / Technical',
    heroIntro: 'Ohne ein sauberes technisches Fundament nützt der beste Text nichts. Wir machen Ihre Website für Google Bots und Besucher rasend schnell und fehlerfrei crawlbar.',
    problem: {
      title: 'Unsichtbare Bremsklötze, die Google abschrecken',
      points: [
        'Schlechte Werte bei LCP (Largest Contentful Paint) und CLS (Cumulative Layout Shift).',
        'Crawl-Budget-Verschwendung durch Redirect-Ketten und 404-Fehler.',
        'Fehlende oder syntaktisch fehlerhafte JSON-LD Strukturdaten.',
        'Falsch konfigurierte Canonical-Tags führen zu Duplicate Content.'
      ]
    },
    solution: {
      title: 'Präzises Code-Tuning und datengestützte Auditierung',
      text: 'Wir analysieren den Server-Antwortcode, komprimieren Ressourcen, beseitigen Render-Blocking-Skripte und implementieren standardkonformes Schema.org Markup.'
    },
    features: [
      { title: 'Core Web Vitals im grünen Bereich', description: 'Optimierung von LCP, INP und CLS auf PageSpeed-Werte über 90.' },
      { title: 'Schema.org JSON-LD Komplett-Setup', description: 'Organization, LocalBusiness, BreadcrumbList, Service, FAQ und Article.' },
      { title: 'Crawl- & Indexierungssteuerung', description: 'Perfekt konfigurierte robots.txt, XML-Sitemap und hreflang-Tags.' },
      { title: 'Mobile Usability & Barrierefreiheit', description: 'Einhaltung moderner Webstandards und WCAG AA Richtlinien.' }
    ],
    process: [
      { step: '01', title: 'Deep Technical Crawl', desc: 'Vollständiger Scan aller URLs auf Statuscodes und Broken Links.' },
      { step: '02', title: 'PageSpeed & Asset Optimierung', desc: 'Bilder in modernem WebP, Code-Minifizierung und Font-Preloading.' },
      { step: '03', title: 'Schema-Implementierung', desc: 'Saubere JSON-LD Skripte für alle Seitentypen.' },
      { step: '04', title: 'Audit-Prüfung', desc: 'Validierung im Google Rich Results Tool und PageSpeed Insights.' }
    ],
    forWhom: [
      'Websites mit unerklärlichem Ranking-Verlust',
      'Unternehmen vor oder nach einem großen Domain-Relaunch',
      'Komplexe Portale mit vielen Unterseiten'
    ],
    deliverables: [
      'Detaillierter technischer Audit-Report',
      'Behebung aller kritischen Crawling- und Ladezeitfehler',
      'Valides Schema.org Markup für Rich Snippets',
      'Saubere XML-Sitemap und robots.txt'
    ],
    faqs: [
      {
        q: 'Was sind Core Web Vitals?',
        a: 'Core Web Vitals sind offizielle Google-Leistungskennzahlen zur Nutzererfahrung: Wie schnell lädt der Hauptinhalt (LCP), wie schnell reagiert die Seite auf Klicks (INP) und verschieben sich Elemente beim Laden (CLS).'
      },
      {
        q: 'Bringen strukturierte Daten (Schema.org) direkte Rankings?',
        a: 'Sie helfen Google, Inhalte exakt zu verstehen und ermöglichen Rich Snippets (z.B. FAQs oder Sterne im Suchergebnis), was die Klickrate (CTR) signifikant steigert.'
      }
    ]
  },
  {
    id: 'website-wartung',
    slug: 'website-wartung',
    title: 'Website Wartung & Support',
    shortDesc: 'Sicherheit, Backups, Updates und persönliche Betreuung auf Abruf.',
    h1: 'Website Wartung & technischer Support für Unternehmen in Deutschland',
    primaryKeyword: 'Website Wartung',
    secondaryKeywords: ['WordPress Wartung Service', 'Website Support Deutschland', 'Sicherheitsupdates Website', 'Website Pflegevertrag', 'Homepage Betreuung'],
    searchIntent: 'Commercial / Service',
    heroIntro: 'Eine Website ist wie ein Firmenfahrzeug: Ohne regelmäßige Wartung drohen Sicherheitslücken, Ausfälle und Performance-Verlust. Wir halten Ihre digitale Präsenz fit.',
    problem: {
      title: 'Die Risiken vernachlässigter Webseiten',
      points: [
        'Hackerangriffe durch ungepatchte Sicherheitslücken in CMS oder Plugins.',
        'Fehlende Backups im Notfall bedeuten den Totalverlust von Inhalten und Rankings.',
        'Schleichende Verlangsamung und Inkompatibilitäten nach automatischen Server-Updates.',
        'Kein Ansprechpartner zur Hand, wenn kurzfristig eine wichtige Änderung anfällt.'
      ]
    },
    solution: {
      title: 'Sorgenfreier Rundum-Schutz durch Experten',
      text: 'Mit unseren Wartungspaketen kümmern wir uns im Hintergrund um wöchentliche Updates, externe Backups, 24/7-Uptime-Monitoring und Sicherheits-Scans. Sie haben bei Fragen oder Änderungswünschen direkten Entwicklerkontakt.'
    },
    features: [
      { title: 'Wöchentliche Sicherheits- & Plugin-Updates', description: 'Sorgfältige Überprüfung in einer Testumgebung vor dem Live-Gang.' },
      { title: 'Tägliche / Wöchentliche Backups', description: 'Verschlüsselt gespeichert auf externen deutschen Servern.' },
      { title: 'Uptime- & Sicherheits-Monitoring', description: 'Sofortige Alarmierung bei Serverausfällen oder verdächtigen Anmeldeversuchen.' },
      { title: 'Inklusiv-Support für Text- & Bildänderungen', description: 'Wir pflegen neue Mitarbeiter, Angebote oder Referenzen zeitnah für Sie ein.' }
    ],
    process: [
      { step: '01', title: 'Onboarding & Backup-Status', desc: 'Ersteinrichtung der Sicherungsroutinen und Sicherheits-Scan.' },
      { step: '02', title: 'Update-Rhythmus', desc: 'Regelmäßige Aktualisierungen von Core, Theme und Erweiterungen.' },
      { step: '03', title: 'Laufender Support', desc: 'Ticket- und E-Mail-Support mit kurzer Reaktionszeit.' }
    ],
    forWhom: [
      'Geschäftsführer und Selbstständige, die ihre Zeit lieber für ihr Kerngeschäft nutzen',
      'Unternehmen ohne eigene IT-Abteilung',
      'Websites mit sensiblen Kundenanfragen und DSGVO-Relevanz'
    ],
    deliverables: [
      'Laufende Sicherheits- und Systempflege',
      'Wöchentlicher Statusbericht / Monitoring',
      'Prioritärer Support bei Störungen',
      'Monatliches Zeitkontingent für Inhaltsanpassungen'
    ],
    faqs: [
      {
        q: 'Gibt es lange Vertragslaufzeiten bei der Website-Wartung?',
        a: 'Nein, wir setzen auf faire Zusammenarbeit. Unsere Wartungsverträge sind flexibel monatlich oder quartalsweise kündbar.'
      },
      {
        q: 'Können Sie auch eine Website warten, die nicht von Webzech gebaut wurde?',
        a: 'Ja, nach einem kurzen initialen Systemcheck übernehmen wir gerne die Wartung und Absicherung Ihrer bestehenden WordPress- oder Web-Präsenz.'
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((s) => s.slug === slug || s.id === slug);
}
