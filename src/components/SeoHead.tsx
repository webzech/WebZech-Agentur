import React, { useEffect } from 'react';
import { Language } from '../types';

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  lang: Language;
  schema?: Record<string, any>;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  path,
  lang,
  schema
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Helper to set/update meta tag
    const setMeta = (nameAttr: string, nameValue: string, content: string) => {
      let meta = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(nameAttr, nameValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', `https://webzech.de${path}`);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'Webzech');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    // 3. Set HTML lang
    document.documentElement.lang = lang;

    // 4. Update Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://webzech.de${path}`);

    // 5. Update JSON-LD structured data
    let scriptTag = document.querySelector('#webzech-jsonld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('id', 'webzech-jsonld');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }

    const defaultOrganizationSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://webzech.de/#organization',
          name: 'Webzech',
          url: 'https://webzech.de',
          description: 'Webentwicklung, Websites, WordPress und Local SEO für Unternehmen in Deutschland.',
          founders: [
            {
              '@type': 'Person',
              name: 'Awais Abid',
              jobTitle: 'Founder & Lead Developer'
            },
            {
              '@type': 'Person',
              name: 'Werner Polatschek',
              jobTitle: 'Co-Founder & Business Partner'
            }
          ],
          areaServed: {
            '@type': 'Country',
            name: 'Germany'
          }
        },
        schema || {
          '@type': 'WebSite',
          '@id': 'https://webzech.de/#website',
          url: 'https://webzech.de',
          name: 'Webzech',
          inLanguage: lang
        }
      ]
    };

    scriptTag.textContent = JSON.stringify(defaultOrganizationSchema);
  }, [title, description, path, lang, schema]);

  return null;
};
