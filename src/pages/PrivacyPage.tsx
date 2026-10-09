import React from 'react';
import { Link } from '../lib/router';
import { brandConfig } from '../data/brandConfig';
import { ShieldCheck, Lock, FileText, ArrowLeft } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div className="space-y-0">
      {/* Editorial Header */}
      <section className="py-20 lg:py-28 bg-[#F4F0E8] border-b border-[#DAD3C7]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#777B60]">
            <Link href="/" className="hover:underline">KÜN</Link>
            <span aria-hidden="true">/</span>
            <span>Privacy & Confidentiality</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#252521] font-normal leading-[1.1] text-balance">
            Privacy, ethics & confidentiality.
          </h1>

          <p className="text-base sm:text-lg text-[#575752] leading-relaxed">
            Protecting your personal and psychological boundaries is the foundational covenant of our practice.
          </p>
        </div>
      </section>

      {/* Policy Details */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#DAD3C7]">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-12 text-sm text-[#575752] leading-relaxed font-sans">
          {/* Section 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-[#632D35]" />
              <h2 className="font-serif text-2xl text-[#252521] font-medium">
                1. Clinical Confidentiality
              </h2>
            </div>
            <p>
              At KÜN Holistic Mental Health Services, information shared within therapeutic sessions, psychometric assessments, and consultations is governed by strict psychological professional ethics and confidentiality guidelines.
            </p>
            <p>
              Therapists and practitioners do not disclose the contents of clinical dialogues, notes, or client identities to family members, employers, or third parties without your explicit, written consent.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#632D35]" />
              <h2 className="font-serif text-2xl text-[#252521] font-medium">
                2. Legal & Ethical Exceptions to Confidentiality
              </h2>
            </div>
            <p>
              In accordance with universal mental health ethics and legal statutes, confidentiality may only be overridden in exceptional circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#252521]/80">
              <li>Where there is clear, imminent risk of severe physical harm or suicide to the client or an identified other person</li>
              <li>Where child abuse, neglect, or harm to a vulnerable dependent is disclosed or suspected</li>
              <li>Where legally mandated by a formal, valid order issued by a court of competent jurisdiction</li>
            </ul>
            <p className="text-xs text-[#777B60]">
              Whenever ethically possible, any necessary disclosure is discussed transparently with the client prior to taking action.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#632D35]" />
              <h2 className="font-serif text-2xl text-[#252521] font-medium">
                3. Website Enquiry Information
              </h2>
            </div>
            <p>
              Information submitted through our website enquiry portal (name, email, preferred contact method, and message) is used strictly to coordinate initial consultation logistics.
            </p>
            <p>
              We advise clients not to transmit sensitive diagnostic or medical histories via web forms. We do not sell, rent, or share personal contact data with advertising networks or external commercial vendors.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4 border-t border-[#DAD3C7] pt-8">
            <h2 className="font-serif text-xl text-[#252521] font-medium">
              4. Questions Regarding Your Privacy
            </h2>
            <p>
              If you have any questions regarding how your records or correspondence are handled, please contact our administrative desk through our verified channels or on Instagram {brandConfig.instagramHandle}.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#632D35] font-medium hover:underline"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Return to Enquiry Portal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
