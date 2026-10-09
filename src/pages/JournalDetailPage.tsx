import React from 'react';
import { Link } from '../lib/router';
import { journalArticles } from '../data/journalData';
import { ArrowLeft, ArrowRight, Share2, BookOpen } from 'lucide-react';

interface JournalDetailPageProps {
  slug: string;
}

export function JournalDetailPage({ slug }: JournalDetailPageProps) {
  const article = journalArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="py-32 bg-[#F4F0E8] text-center space-y-6 max-w-2xl mx-auto px-6">
        <h1 className="font-serif text-3xl sm:text-4xl text-[#252521]">
          Article Not Found
        </h1>
        <p className="text-sm text-[#575752]">
          We could not locate this perspective piece. Please explore our full journal index.
        </p>
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#632D35] text-[#F4F0E8] text-xs uppercase tracking-widest font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Journal
        </Link>
      </div>
    );
  }

  const relatedArticles = journalArticles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <article className="space-y-0">
      {/* Editorial Essay Header */}
      <header className="py-20 lg:py-28 bg-[#F4F0E8] border-b border-[#DAD3C7]">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#777B60]">
            <Link href="/" className="hover:underline">KÜN</Link>
            <span aria-hidden="true">/</span>
            <Link href="/journal" className="hover:underline">Journal</Link>
            <span aria-hidden="true">/</span>
            <span>{article.category}</span>
          </div>

          <div className="text-xs text-[#777B60] flex items-center gap-2">
            <span>{article.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>{article.date}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#252521] font-normal leading-[1.1] text-balance">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl font-serif italic text-[#632D35] leading-relaxed">
            "{article.subtitle}"
          </p>

          <div className="pt-4 border-t border-[#DAD3C7] flex items-center justify-between text-xs text-[#777B60]">
            <span>By {article.author}</span>
            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
              className="inline-flex items-center gap-1.5 hover:text-[#252521] transition-colors"
              title="Copy article link"
            >
              <Share2 className="w-3.5 h-3.5" /> Share Reflection
            </button>
          </div>
        </div>
      </header>

      {/* Essay Body — Constrained 65–75ch Reading Measure */}
      <div className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#DAD3C7]">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 space-y-8 text-base sm:text-lg text-[#252521]/90 leading-relaxed font-sans">
          {/* Paragraph 1 with Drop Cap */}
          <p className="editorial-drop-cap">
            {article.contentParagraphs[0]}
          </p>

          {/* Paragraph 2 */}
          {article.contentParagraphs[1] && (
            <p>{article.contentParagraphs[1]}</p>
          )}

          {/* Pull Quote with Hairline Borders (No thick left border) */}
          <div className="my-10 py-8 border-y border-[#DAD3C7] text-center space-y-2">
            <blockquote className="font-serif text-2xl sm:text-3xl text-[#632D35] italic font-light leading-snug">
              "{article.pullQuote}"
            </blockquote>
            <cite className="text-xs uppercase tracking-widest text-[#777B60] not-italic block pt-2">
              — KÜN Perspectives
            </cite>
          </div>

          {/* Subsequent Paragraphs */}
          {article.contentParagraphs.slice(2).map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}

          {/* Key Takeaways Box */}
          <div className="mt-12 p-8 bg-[#F4F0E8] border border-[#DAD3C7] space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#632D35] font-semibold">
              <BookOpen className="w-4 h-4" />
              <span>Reflective Takeaways</span>
            </div>
            <ul className="space-y-2.5 text-sm text-[#575752]">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#777B60] shrink-0 mt-0.5">
                    {idx + 1}.
                  </span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Author & Disclaimer Note */}
          <div className="pt-8 border-t border-[#DAD3C7] text-xs text-[#777B60] space-y-2 leading-relaxed">
            <p>
              Published by the KÜN Editorial & Clinical Insights collective in Karachi, Pakistan.
              We welcome thoughtful responses and dialogue regarding these essays.
            </p>
          </div>
        </div>
      </div>

      {/* Related Perspectives */}
      <section className="py-16 bg-[#F4F0E8] border-b border-[#DAD3C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-[#DAD3C7]">
            <span className="text-xs uppercase tracking-widest text-[#777B60]">
              Continue Reading
            </span>
            <Link
              href="/journal"
              className="text-xs text-[#632D35] hover:underline inline-flex items-center gap-1 font-medium"
            >
              All Articles <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/journal/${rel.slug}`}
                className="p-6 bg-[#FAF8F5] border border-[#DAD3C7] hover:border-[#632D35] transition-colors flex items-start justify-between gap-4 group"
              >
                <div className="space-y-2">
                  <div className="text-xs text-[#777B60]">
                    {rel.category} · {rel.readTime}
                  </div>
                  <h4 className="font-serif text-xl text-[#252521] group-hover:text-[#632D35] transition-colors font-medium">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#575752] line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#777B60] group-hover:text-[#632D35] shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
