import React, { useState } from 'react';
import { X, Search, FileCode, CheckCircle, Table, Link2, Copy, Check } from 'lucide-react';
import { keywordMapData, technicalSeoChecklist } from '../data/seoArchitectureData';

interface SeoViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SeoViewerModal: React.FC<SeoViewerModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'keywords' | 'sitemap' | 'schema' | 'linking' | 'checklist'>('keywords');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- Homepage -->
  <url>
    <loc>https://webzech.de/</loc>
    <xhtml:link rel="alternate" hreflang="de" href="https://webzech.de/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://webzech.de/en/" />
    <xhtml:link rel="alternate" hreflang="ru" href="https://webzech.de/ru/" />
    <xhtml:link rel="alternate" hreflang="uk" href="https://webzech.de/uk/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://webzech.de/" />
    <lastmod>2026-03-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Services -->
  <url>
    <loc>https://webzech.de/webentwicklung-agentur/</loc>
    <xhtml:link rel="alternate" hreflang="de" href="https://webzech.de/webentwicklung-agentur/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://webzech.de/en/web-development-agency/" />
    <lastmod>2026-03-30</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://webzech.de/webdesign/</loc>
    <xhtml:link rel="alternate" hreflang="de" href="https://webzech.de/webdesign/" />
    <lastmod>2026-03-30</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://webzech.de/wordpress-agentur/</loc>
    <lastmod>2026-03-30</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://webzech.de/landingpages/</loc>
    <lastmod>2026-03-30</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://webzech.de/seo-agentur/</loc>
    <lastmod>2026-03-30</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://webzech.de/local-seo/</loc>
    <lastmod>2026-03-30</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://webzech.de/technical-seo/</loc>
    <lastmod>2026-03-30</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://webzech.de/website-wartung/</loc>
    <lastmod>2026-03-30</lastmod>
    <priority>0.8</priority>
  </url>
  <!-- Locations -->
  <url><loc>https://webzech.de/webentwicklung-muenchen/</loc><priority>0.85</priority></url>
  <url><loc>https://webzech.de/webentwicklung-passau/</loc><priority>0.85</priority></url>
  <url><loc>https://webzech.de/webentwicklung-vilshofen/</loc><priority>0.85</priority></url>
  <url><loc>https://webzech.de/webentwicklung-berlin/</loc><priority>0.8</priority></url>
  <url><loc>https://webzech.de/webentwicklung-hamburg/</loc><priority>0.8</priority></url>
  <url><loc>https://webzech.de/webentwicklung-frankfurt/</loc><priority>0.8</priority></url>
  <url><loc>https://webzech.de/webentwicklung-duesseldorf/</loc><priority>0.8</priority></url>
  <url><loc>https://webzech.de/webentwicklung-bayern/</loc><priority>0.85</priority></url>
  <!-- Portfolio & Pages -->
  <url><loc>https://webzech.de/portfolio/</loc><priority>0.8</priority></url>
  <url><loc>https://webzech.de/ueber-uns/</loc><priority>0.8</priority></url>
  <url><loc>https://webzech.de/kontakt/</loc><priority>0.9</priority></url>
  <url><loc>https://webzech.de/preise/</loc><priority>0.8</priority></url>
  <url><loc>https://webzech.de/faq/</loc><priority>0.7</priority></url>
  <url><loc>https://webzech.de/blog/</loc><priority>0.8</priority></url>
</urlset>`;

  const copySitemap = () => {
    navigator.clipboard.writeText(sitemapXml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-6 overflow-y-auto">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-neutral-800 bg-neutral-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600/10 border border-blue-500/20 rounded-lg text-blue-400">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-display">
                Webzech SEO-Architektur & Audit-Deliverable (Master Prompt §58)
              </h2>
              <p className="text-xs text-neutral-400">
                Vollständige Dokumentation: Keyword-Map, hreflang-Sitemap, Schema-Verknüpfung und technischer Audit.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 px-5 pt-3 border-b border-neutral-800 bg-neutral-950/30 overflow-x-auto text-xs">
          {[
            { id: 'keywords', label: '1. Keyword-Map', icon: Table },
            { id: 'sitemap', label: '2. XML Sitemap & Hreflang', icon: FileCode },
            { id: 'schema', label: '3. Schema.org JSON-LD Map', icon: FileCode },
            { id: 'linking', label: '4. Internes Linking', icon: Link2 },
            { id: 'checklist', label: '5. Technische SEO Checklist', icon: CheckCircle }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-2.5 px-4 font-medium border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-white bg-neutral-800/40'
                    : 'border-transparent text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-1 text-sm text-neutral-300">
          {activeTab === 'keywords' && (
            <div className="space-y-4">
              <p className="text-xs text-neutral-400 leading-relaxed">
                Jede URL besitzt ein primäres Fokus-Keyword, semantische Neben-Keywords, eine ermittelte Nutzerabsicht (Search Intent) und maßgeschneiderte Meta-Tags.
              </p>
              <div className="overflow-x-auto border border-neutral-800 rounded-xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-neutral-950 text-neutral-400 border-b border-neutral-800 font-semibold">
                      <th className="p-3">Seite / URL</th>
                      <th className="p-3">Primary Keyword</th>
                      <th className="p-3">Search Intent</th>
                      <th className="p-3">Title Tag (SERP)</th>
                      <th className="p-3">Schema Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800/60 font-mono text-[11px]">
                    {keywordMapData.map((item, idx) => (
                      <tr key={idx} className="hover:bg-neutral-800/30 transition-colors">
                        <td className="p-3 text-blue-400 font-semibold">{item.pageUrl}</td>
                        <td className="p-3 text-white font-sans">{item.primaryKeyword}</td>
                        <td className="p-3 text-neutral-400 font-sans">
                          <span className="px-2 py-0.5 rounded bg-neutral-800 text-[10px] text-neutral-300">
                            {item.searchIntent}
                          </span>
                        </td>
                        <td className="p-3 text-neutral-300 font-sans truncate max-w-xs">{item.metaTitle}</td>
                        <td className="p-3 text-purple-400">{item.schemaType}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'sitemap' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-neutral-400">
                  Google-konforme XML-Sitemap mit bidirektionalen xhtml:link hreflang-Tags für de, en, ru, uk und x-default.
                </p>
                <button
                  onClick={copySitemap}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Kopiert!' : 'XML Kopieren'}</span>
                </button>
              </div>
              <pre className="p-4 bg-neutral-950 border border-neutral-800 rounded-xl text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed max-h-96">
                {sitemapXml}
              </pre>
            </div>
          )}

          {activeTab === 'schema' && (
            <div className="space-y-4">
              <p className="text-xs text-neutral-400">
                Strukturierte Daten nach Schema.org, die direkt per JSON-LD im DOM hinterlegt sind:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-xl space-y-2">
                  <div className="text-blue-400 font-semibold">1. Organization & Founders</div>
                  <pre className="text-[11px] font-mono text-neutral-300 leading-tight">
{`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Webzech",
  "url": "https://webzech.de",
  "founder": [
    { "@type": "Person", "name": "Awais Abid" },
    { "@type": "Person", "name": "Werner Polatschek" }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "DE",
    "addressRegion": "Bayern"
  }
}`}
                  </pre>
                </div>
                <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-xl space-y-2">
                  <div className="text-purple-400 font-semibold">2. LocalBusiness (Regionale Seiten)</div>
                  <pre className="text-[11px] font-mono text-neutral-300 leading-tight">
{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Webzech Webentwicklung & SEO",
  "areaServed": ["München", "Passau", "Vilshofen", "Bayern"],
  "priceRange": "€€",
  "serviceType": [
    "Webentwicklung", "Webdesign", 
    "WordPress", "Local SEO"
  ]
}`}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'linking' && (
            <div className="space-y-4 text-xs">
              <p className="text-neutral-400">
                Das interne Verlinkungsnetzwerk folgt einer semantischen Silo-Architektur:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-xl">
                  <div className="font-bold text-white mb-2">Service Hubs → Standorte</div>
                  <p className="text-neutral-400 text-[11px] leading-relaxed">
                    Jede Leistungsseite verlinkt auf die passenden Standort-Seiten (z.B. Webentwicklung → München & Vilshofen) zur Stärkung lokaler Keyword-Signale.
                  </p>
                </div>
                <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-xl">
                  <div className="font-bold text-white mb-2">Blog → Leistungs-Funnel</div>
                  <p className="text-neutral-400 text-[11px] leading-relaxed">
                    Jeder Fachartikel verlinkt kontextuell auf die entsprechende Dienstleistung und das Kontaktformular zur Maximierung der Lead-Conversion.
                  </p>
                </div>
                <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-xl">
                  <div className="font-bold text-white mb-2">Portfolio → Services</div>
                  <p className="text-neutral-400 text-[11px] leading-relaxed">
                    Fallstudien referenzieren die eingesetzten Technologien (WordPress, Elementor, Local SEO) und führen direkt in den Kalkulator.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'checklist' && (
            <div className="space-y-4">
              <div className="overflow-x-auto border border-neutral-800 rounded-xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-neutral-950 text-neutral-400 border-b border-neutral-800 font-semibold">
                      <th className="p-3">Audit Kriterium</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Technische Umsetzung</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800/60 font-sans">
                    {technicalSeoChecklist.map((c, i) => (
                      <tr key={i} className="hover:bg-neutral-800/30 transition-colors">
                        <td className="p-3 font-semibold text-white">{c.item}</td>
                        <td className="p-3">
                          <span className="inline-flex items-center gap-1 text-emerald-400 text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded font-medium">
                            <CheckCircle className="w-3 h-3" />
                            {c.status}
                          </span>
                        </td>
                        <td className="p-3 text-neutral-300 text-[11px]">{c.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-neutral-950/80 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
          <span>Webzech Technical SEO Deliverable Version 2026.1</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};
