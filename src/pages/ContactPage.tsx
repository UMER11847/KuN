import React from 'react';
import { Link } from '../lib/router';
import { EnquiryForm } from '../components/ui/EnquiryForm';
import { brandConfig } from '../data/brandConfig';
import { ArrowUpRight, MapPin, Shield, Clock, HelpCircle } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="space-y-0">
      {/* Editorial Header */}
      <section className="py-20 lg:py-28 bg-[#F4F0E8] border-b border-[#DAD3C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#777B60]">
            <Link href="/" className="hover:underline">KÜN</Link>
            <span aria-hidden="true">/</span>
            <span>Make an Enquiry</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#252521] font-normal leading-[1.1] text-balance">
            Find your way in.
          </h1>

          <p className="text-base sm:text-lg text-[#575752] max-w-2xl leading-relaxed">
            Every journey with KÜN begins with an unhurried, confidential dialogue.
            Share a few details below and our team will guide you to the appropriate consultation, assessment, or experience.
          </p>
        </div>
      </section>

      {/* Main Form & Practice Details Grid */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#DAD3C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-[#F4F0E8] border border-[#DAD3C7] p-8 sm:p-12 shadow-sm">
              <div className="mb-8 space-y-2 pb-6 border-b border-[#DAD3C7]">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#252521] font-medium">
                  Confidential Enquiry Form
                </h2>
                <p className="text-xs sm:text-sm text-[#575752]">
                  Please share your preferred service and contact preferences. We review all submissions within 24–48 hours.
                </p>
              </div>

              <EnquiryForm />
            </div>

            {/* Sidebar Column: Practice Logistics, Karachi Context & FAQs */}
            <div className="lg:col-span-5 space-y-8">
              {/* Practice Location & Sanctuary Note */}
              <div className="p-8 bg-[#F4F0E8] border border-[#DAD3C7] space-y-5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#632D35] font-semibold">
                  <MapPin className="w-4 h-4" />
                  <span>Karachi Sanctuary</span>
                </div>
                <div className="space-y-2 text-sm text-[#575752] leading-relaxed">
                  <p className="font-serif text-xl text-[#252521]">
                    Karachi, Sindh, Pakistan
                  </p>
                  <p>
                    To safeguard client confidentiality and maintain a tranquil environment for ongoing therapy and animal-assisted sessions, our physical address is shared directly with clients upon appointment confirmation.
                  </p>
                  <p className="text-xs text-[#777B60]">
                    In-person sessions held in quiet, private consultation suites. Secure telehealth available globally.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DAD3C7] flex items-center justify-between text-xs">
                  <span className="text-[#575752]">Official Channel:</span>
                  <a
                    href={brandConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#632D35] hover:underline font-medium inline-flex items-center gap-1"
                  >
                    Instagram {brandConfig.instagramHandle} <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="p-8 bg-[#FAF8F5] border border-[#DAD3C7] space-y-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#777B60] font-semibold">
                  <Clock className="w-4 h-4" />
                  <span>The Intake Sequence</span>
                </div>
                <ol className="space-y-3 text-xs sm:text-sm text-[#575752]">
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-[#632D35] font-bold">1.</span>
                    <span><strong>Review:</strong> Our clinical coordinator reviews your preferred service and scheduling parameters.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-[#632D35] font-bold">2.</span>
                    <span><strong>Contact:</strong> We reach out via your preferred method (Email, WhatsApp, or Phone) with practitioner availability.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-[#632D35] font-bold">3.</span>
                    <span><strong>Introductory Session:</strong> You attend a 50-minute initial appointment to assess therapeutic compatibility.</span>
                  </li>
                </ol>
              </div>

              {/* Confidentiality Commitment */}
              <div className="p-6 bg-[#ECE6DA] border border-[#DAD3C7] text-xs space-y-2 text-[#575752] leading-relaxed">
                <div className="flex items-center gap-2 font-medium text-[#252521] uppercase tracking-wider text-[11px]">
                  <Shield className="w-3.5 h-3.5 text-[#632D35]" />
                  <span>Ethical Safeguards</span>
                </div>
                <p>
                  All correspondence is held in strict clinical confidentiality. We do not sell or share enquiry data with third parties.
                </p>
                <p className="text-[#632D35] font-serif italic text-xs pt-1">
                  "If you are in immediate psychiatric crisis, please seek immediate emergency medical care at the nearest hospital."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
