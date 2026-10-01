import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { blogPosts } from '../data/blogData';
import { Language } from '../types';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';

interface BlogPageProps {
  lang: Language;
  onNavigate: (path: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ lang, onNavigate }) => {
  return (
    <div className="space-y-16 md:space-y-24">
      <Breadcrumbs
        items={[{ label: 'Blog & Ratgeber' }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
          Wissen & SEO-Praxis
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight text-balance">
          Ratgeber für Websites, SEO & Webentwicklung
        </h1>
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Praxisnahe Tipps, Marktpreise und Leitfäden für deutsche Unternehmer, Handwerker und Selbstständige.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              onClick={() => onNavigate(`/blog/${post.slug}/`)}
              className="p-8 bg-neutral-900 border border-neutral-800 rounded-3xl hover:border-neutral-700 transition-all cursor-pointer group flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-neutral-400">
                  <span className="text-blue-400 font-semibold">{post.category}</span>
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
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors font-display">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-semibold text-neutral-300">
                <span className="text-blue-400 group-hover:underline">Vollständigen Artikel lesen</span>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
