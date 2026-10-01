import { CaseStudy } from '../types';

export const portfolioData: CaseStudy[] = [
  {
    id: 'vilshofen-local-service',
    slug: 'vilshofen-service-wordpress',
    title: 'Lokaler Dienstleister Vilshofen – WordPress & Local SEO',
    clientType: 'Regionales Handwerks- und Dienstleistungsunternehmen',
    industry: 'Handwerk & Bauservice',
    location: 'Vilshofen an der Donau, Bayern',
    service: 'WordPress Relaunch, Elementor Pro & Local SEO',
    summary: 'Relaunch einer in die Jahre gekommenen Firmenhomepage zu einem modernen, mobilen Buchungs- und Anfrageportal mit gezielter Google Maps 3-Pack Optimierung.',
    objective: 'Steigerung der qualifizierten Anrufe und Angebotsanfragen aus Vilshofen und dem Landkreis Passau bei gleichzeitiger Senkung des Pflegeaufwands.',
    challenge: 'Die alte Website war auf Smartphones kaum bedienbar, Ladezeiten lagen über 4,8 Sekunden und bei regionalen Google-Suchbegriffen war die Firma auf Seite 3 abgerutscht.',
    strategy: 'Neuentwicklung auf einem schlanken WordPress-Setup mit maßgeschneiderten Elementor-Templates, lokaler Schema-Auszeichnung (LocalBusiness), WebP-Bildkompression und Einbindung eines 1-Klick-Anruf- und WhatsApp-Buttons für Mobilnutzer.',
    techStack: ['WordPress', 'Elementor Pro', 'Local SEO Schema', 'Caching Engine', 'WebP'],
    results: [
      'Ladezeit von 4,8 s auf 0,9 s gesenkt (Google PageSpeed Score 96)',
      'Einstieg in die Top-3 bei Google Maps für Vilshofen und Umland',
      'Verdopplung der monatlichen Direktkontakte über Telefon & WhatsApp',
      'Eigenständige Pflege von Urlaubszeiten und Referenzen durch den Inhaber'
    ],
    image: '/src/assets/images/case_study_vilshofen_1790830683532.jpg'
  },
  {
    id: 'computer-it-service-landingpage',
    slug: 'computer-it-service-landingpage',
    title: 'Computer & IT-Service Bayern – High-Converting Landingpage',
    clientType: 'IT-Dienstleister & Reparaturservice',
    industry: 'IT & EDV-Dienstleistungen',
    location: 'Niederbayern & München',
    service: 'Conversion Landingpage & Google Ads Vorbereitung',
    summary: 'Entwicklung einer fokussierten Landingpage für IT-Notdienst, PC-Reparatur und Geschäftskunden-Support mit extrem niedriger Absprungrate.',
    objective: 'Maximale Conversion-Rate für bezahlte Google Suchkampagnen mit sofortiger Identifikation des akuten Kundenproblems.',
    challenge: 'Bestehende AdWords-Besucher sprangen sofort wieder ab, da auf der alten Homepage Preise, Notdienstnummern und Einzugsgebiete unklar waren.',
    strategy: 'Strikte Single-Focus-Architektur mit Sofort-Hilfe-Schritten, transparenter Festpreisübersicht, Kundenstimmen und direkter Anruf-Funktion ohne Ablenkung.',
    techStack: ['Responsive HTML/CSS', 'JavaScript Micro-Interactions', 'Schema TechArticle', 'Click-to-Call Tracking'],
    results: [
      'Conversion-Rate von Google Ads Besuchern stieg von 2,1% auf 8,4%',
      'Durchschnittliche Verweildauer auf der Landingpage: 2 Min. 45 Sek.',
      'Core Web Vitals Bestnoten (LCP 0,8 s, CLS 0,00)',
      'Sinkender Klickpreis durch verbesserten Google Qualitätsfaktor'
    ],
    image: '/src/assets/images/hero_webzech_studio_1790830570463.jpg'
  },
  {
    id: 'solagrow-company-website',
    slug: 'solagrow-company-website',
    title: 'SolaGrow – Moderne Unternehmenswebsite & B2B-Präsenz',
    clientType: 'Nachhaltiges Technologie- & Umweltunternehmen',
    industry: 'GreenTech & Nachhaltige Agrarwirtschaft',
    location: 'Deutschland / Überregional',
    service: 'Corporate Webdesign, Fullstack-Entwicklung & SEO',
    summary: 'Ganzheitliche Konzeption und Entwicklung eines repräsentativen, zukunftsorientierten Webauftritts für ein aufstrebendes Unternehmen im Bereich nachhaltige Agrarsysteme.',
    objective: 'Aufbau einer seriösen Markenidentität für B2B-Partner, Investoren und gewerbliche Agrarbetriebe.',
    challenge: 'Erklärung komplexer, innovativer Technologien in ansprechender, leicht verständlicher Sprache mit sauberer modularer Struktur für künftige Produktlinien.',
    strategy: 'Entwicklung eines cleanen, modernen Erscheinungsbilds mit maßgeschneiderten Infografiken, übersichtlicher Leistungsnavigation und einem strukturierten B2B-Anfrageformular.',
    techStack: ['Moderne Webkomponenten', 'Tailwind Design System', 'Strukturierte Daten', 'DSGVO-Hosting'],
    results: [
      'Professioneller Webauftritt, der bei Investorengesprächen und Partnern Vertrauen stiftet',
      'Vollständige Mobil- und Tablet-Optimierung für Landwirte und Einkäufer vor Ort',
      'Strukturierte Anfrageerfassung mit allen relevanten Projektdaten',
      'Optimale Ladezeiten trotz hochauflösender Bildstrecken'
    ],
    image: '/src/assets/images/case_study_vilshofen_1790830683532.jpg'
  },
  {
    id: 'arztpraxis-redesign',
    slug: 'arztpraxis-redesign-onlinebuchung',
    title: 'Fachpraxis für Allgemeinmedizin – Barrierearmes Praxisportal',
    clientType: 'Ärztliche Gemeinschaftspraxis',
    industry: 'Gesundheitswesen & Medizin',
    location: 'München, Bayern',
    service: 'Praxis-Webdesign, Barrierearmut & Online-Rezeptservice',
    summary: 'Relaunch einer Praxiswebsite mit Online-Terminvergabe, digitaler Rezeptvorbestellung und barrierearmem Kontrastdesign für alle Altersgruppen.',
    objective: 'Entlastung der Telefonzentrale am Vormittag und übersichtliche Patienteninformation zu Sprechzeiten und Akutsprechstunden.',
    challenge: 'Sehr hohe telefonische Auslastung durch banale Rezeptabfragen und ältere Patienten, die auf unübersichtlichen Seiten keine Telefonnummer fanden.',
    strategy: 'Große, kontrastreiche Typografie, prominente Notfall- und Sprechzeitenbox direkt im Header und verschlüsselte Vorbestellformulare für Dauermedikamente.',
    techStack: ['Barrierefreies HTML5/WCAG AA', 'DSGVO-End-to-End Verschlüsselung', 'Lokale Schriftarten', 'Schema MedicalClinic'],
    results: [
      'Über 35% aller Folgerezepte laufen nun papierlos über die Website',
      'Entlastung des Praxisteams um durchschnittlich 1,5 Stunden Telefonzeit täglich',
      'Durchweg positive Rückmeldungen von älteren und jüngeren Patienten',
      'Top-Platzierung bei Google Maps im Münchner Stadtbezirk'
    ],
    image: '/src/assets/images/hero_webzech_studio_1790830570463.jpg'
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return portfolioData.find((p) => p.slug === slug || p.id === slug);
}
