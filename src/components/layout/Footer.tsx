import React from 'react';
import { Link } from '../../lib/router';
import { servicesData } from '../../data/servicesData';
import { brandConfig } from '../../data/brandConfig';
import { ThemeToggle } from '../ui/ThemeToggle';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#252521] text-[#DAD3C7] pt-16 pb-12 border-t border-[#3A3A35]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Tier: Brand Statement & Primary Directives */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#3A3A35]">
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#F4F0E8]">
                {brandConfig.name}
              </span>
              <span className="text-sm font-serif text-[#777B60] italic">
                {brandConfig.wordmarkArabic}
              </span>
            </div>
            <p className="text-xl sm:text-2xl font-serif text-[#F4F0E8]/90 font-light leading-snug max-w-md">
              "{brandConfig.tagline}"
            </p>
            <p className="text-sm text-[#DAD3C7]/70 leading-relaxed max-w-md">
              A distinctive digital and physical sanctuary in Karachi, Pakistan.
              Bringing together clinical psychotherapy, psychological assessments, forensic insight,
              animal partnerships, and contemplative hospitality.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs">
              <span className="text-[#777B60] uppercase tracking-widest">Connect</span>
              <a
                href={brandConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F4F0E8] hover:text-[#DAD3C7] inline-flex items-center gap-1 underline underline-offset-4 decoration-[#777B60]"
              >
                Instagram {brandConfig.instagramHandle}
                <ArrowUpRight className="w-3 h-3 text-[#777B60]" />
              </a>
            </div>
          </div>

          {/* Offerings Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#777B60]">
              What We Offer
            </div>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[#DAD3C7]/80 hover:text-[#F4F0E8] transition-colors inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation & Practice Details */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#777B60]">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-[#DAD3C7]/80">
              <li>
                <Link href="/about" className="hover:text-[#F4F0E8] transition-colors">
                  The KÜN Approach
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F4F0E8] transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-[#F4F0E8] transition-colors">
                  Retreats & Experience Café
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-[#F4F0E8] transition-colors">
                  Journal & Perspectives
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F4F0E8] transition-colors">
                  Make an Enquiry
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#F4F0E8] transition-colors">
                  Privacy & Confidentiality
                </Link>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#3A3A35]/60 text-xs text-[#DAD3C7]/60 space-y-1">
              <div className="font-medium text-[#DAD3C7]">Karachi, Pakistan</div>
              <div>In-person consultations & virtual appointments</div>
            </div>
          </div>
        </div>

        {/* Ethical Notice & Crisis Disclaimer */}
        <div className="py-8 border-b border-[#3A3A35] text-xs text-[#DAD3C7]/60 leading-relaxed space-y-3">
          <p>
            <span className="text-[#DAD3C7] font-medium">Care & Safety Disclaimer: </span>
            {brandConfig.crisisDisclaimer}
          </p>
          <p>
            <span className="text-[#DAD3C7] font-medium">Clinical Confidentiality: </span>
            {brandConfig.ethicsStatement}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DAD3C7]/50">
          <div>
            © {new Date().getFullYear()} KÜN — Holistic Mental Health Services. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#F4F0E8] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#F4F0E8] transition-colors">
              Enquiry Portal
            </Link>
            <a
              href={brandConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4F0E8] transition-colors"
            >
              Instagram
            </a>
            <span className="text-[#3A3A35]">|</span>
            <ThemeToggle variant="labelled" className="p-0 text-xs text-[#DAD3C7]/60 hover:text-[#F4F0E8]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
