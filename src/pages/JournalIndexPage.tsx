import React, { useState } from 'react';
import { Link } from '../lib/router';
import { journalArticles, JournalArticle } from '../data/journalData';
import { ArrowRight, BookOpen } from 'lucide-react';

export function JournalIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'all',
    'Emotional Landscapes',
    'Clinical Insights',
    'Animal-Assisted Care',
    'Spatial Reflection',
  ];

  const filteredArticles = journalArticles.filter((article) => {
    if (selectedCategory === 'all') return true;
    return article.category === selectedCategory;
  });

  return (
    <div className="space-y-0">
      {/* Editorial Header */}
      <section className="py-20 lg:py-28 bg-[#F4F0E8] border-b border-[#DAD3C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#777B60]">
            <Link href="/" className="hover:underline">KÜN</Link>
            <span aria-hidden="true">/</span>
            <span>Journal & Perspectives</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#252521] font-normal leading-[1.1] text-balance">
            Perspectives on the human condition.
          </h1>

          <p className="text-base sm:text-lg text-[#575752] max-w-2xl leading-relaxed">
            Thoughtful essays, clinical distillations, and reflections from the KÜN team on navigating emotion, neuroscience, animal care, and modern urban pace.
          </p>

          {/* Category Filter Controls */}
          <div className="pt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#777B60] mr-2">Category:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#632D35] text-[#F4F0E8]'
                    : 'bg-[#FAF8F5] text-[#575752] border border-[#DAD3C7] hover:text-[#252521]'
                }`}
              >
                {cat === 'all' ? 'All Perspectives' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Stream */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#DAD3C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {filteredArticles.map((article: JournalArticle) => (
              <article
                key={article.slug}
                className="bg-[#F4F0E8] border border-[#DAD3C7] p-8 sm:p-10 flex flex-col justify-between space-y-6 hover:border-[#632D35] transition-all group"
              >
                <div className="space-y-5">
                  {/* Clean unboxed metadata with subtle typographic separators */}
                  <div className="text-xs text-[#777B60] flex items-center gap-2">
                    <span className="font-medium text-[#632D35]">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.date}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl text-[#252521] font-medium leading-snug group-hover:text-[#632D35] transition-colors">
                    <Link href={`/journal/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-xs font-serif italic text-[#777B60]">
                    {article.subtitle}
                  </p>

                  <p className="text-sm text-[#575752] leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#DAD3C7] flex items-center justify-between text-xs">
                  <span className="text-[#777B60]">{article.author}</span>
                  <Link
                    href={`/journal/${article.slug}`}
                    className="text-[#632D35] font-medium inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    Read Perspective <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Reading & Clinical Editorial Notice */}
          <div className="p-6 bg-[#ECE6DA] border border-[#DAD3C7] text-xs text-[#575752] leading-relaxed flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-[#632D35] shrink-0 mt-0.5" />
            <p>
              <span className="font-semibold text-[#252521]">Editorial Note: </span>
              These essays and perspectives are intended for reflective, informational, and educational purposes.
              They explore psychological theory and lived experience and do not constitute formal clinical diagnoses or psychiatric medical treatment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
