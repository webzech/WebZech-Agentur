import React from 'react';
import { BlogPost, Language } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { Clock, Calendar, ArrowRight, UserCheck, Sparkles, BookOpen } from 'lucide-react';
import { blogPosts } from '../data/blogData';

interface BlogPostPageProps {
  post: BlogPost;
  lang: Language;
  onNavigate: (path: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, lang, onNavigate }) => {
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="space-y-16 md:space-y-24">
      <Breadcrumbs
        items={[
          { label: 'Blog', href: '/blog/' },
          { label: post.title }
        ]}
        onNavigate={onNavigate}
      />

      {/* Article Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 space-y-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
          <span className="text-blue-400 font-semibold uppercase tracking-wider">{post.category}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.publishedDate}
          </span>
          <span aria-hidden="true">·</span>
          <span>Autor: Webzech Redaktion</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-display text-balance">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal border-l-2 border-blue-500 pl-4 py-1 italic">
          {post.excerpt}
        </p>
      </section>

      {/* Article Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-neutral-300 text-sm sm:text-base leading-relaxed">
        {post.content.map((sec, idx) => (
          <div key={idx} className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display pt-4">
              {sec.h2}
            </h2>
            {sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-neutral-300 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        ))}

        {/* Blog -> Service Funnel Box (Section 46 of Master Prompt) */}
        <div className="mt-12 p-8 bg-blue-950/20 border border-blue-500/30 rounded-3xl space-y-4">
          <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Passende Leistung von Webzech</span>
          </div>
          <h3 className="text-xl font-bold text-white font-display">
            Möchten Sie dieses Vorhaben professionell umsetzen lassen?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            Als spezialisierte Agentur für {post.relatedServiceTitle} unterstützen wir Sie von der fundierten Keyword-Analyse bis zur schlüsselfertigen Website.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate(`/${post.relatedServiceSlug}/`)}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl transition-all shadow-md shadow-blue-900/30 flex items-center gap-2 cursor-pointer"
            >
              <span>Mehr zu {post.relatedServiceTitle}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate('/preise/')}
              className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
            >
              Zum Website-Kalkulator
            </button>
          </div>
        </div>
      </section>

      {/* Other Posts */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-bold text-white mb-6 font-display">Weitere interessante Ratgeber</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherPosts.map((p) => (
            <div
              key={p.slug}
              onClick={() => onNavigate(`/blog/${p.slug}/`)}
              className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-neutral-700 cursor-pointer transition-colors space-y-2"
            >
              <span className="text-[11px] text-blue-400 uppercase font-semibold">{p.category}</span>
              <h4 className="text-base font-bold text-white font-display">{p.title}</h4>
              <p className="text-xs text-neutral-400 line-clamp-2">{p.excerpt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <ContactForm
          lang={lang}
          prefilledMessage={`Anfrage nach dem Lesen des Artikels "${post.title}".`}
        />
      </section>
    </div>
  );
};
