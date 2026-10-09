import React, { useState } from 'react';
import { Link } from '../lib/router';
import { servicesData, ServiceItem } from '../data/servicesData';
import { ArrowRight, Check } from 'lucide-react';

export function ServicesIndexPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = servicesData.filter((service) => {
    if (activeCategory === 'all') return true;
    return service.category === activeCategory;
  });

  return (
    <div className="space-y-0">
      {/* Editorial Header */}
      <section className="py-20 lg:py-28 bg-[#F4F0E8] border-b border-[#DAD3C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#777B60]">
            <Link href="/" className="hover:underline">KÜN</Link>
            <span aria-hidden="true">/</span>
            <span>What We Offer</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#252521] font-normal leading-[1.1] text-balance">
            A spectrum of psychological & experiential care.
          </h1>

          <p className="text-base sm:text-lg text-[#575752] max-w-2xl leading-relaxed">
            From clinical psychotherapy and objective psychological evaluations to animal-assisted partnerships,
            retreats, and an unhurried café sanctuary in Karachi.
          </p>

          {/* Interactive Filter Controls (Segmented control) */}
          <div className="pt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#777B60] mr-2">Filter By:</span>
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs font-medium transition-colors ${
                activeCategory === 'all'
                  ? 'bg-[#632D35] text-[#F4F0E8]'
                  : 'bg-[#FAF8F5] text-[#575752] border border-[#DAD3C7] hover:text-[#252521]'
              }`}
            >
              All Offerings (6)
            </button>
            <button
              onClick={() => setActiveCategory('Clinical & Consultative')}
              className={`px-4 py-2 text-xs font-medium transition-colors ${
                activeCategory === 'Clinical & Consultative'
                  ? 'bg-[#632D35] text-[#F4F0E8]'
                  : 'bg-[#FAF8F5] text-[#575752] border border-[#DAD3C7] hover:text-[#252521]'
              }`}
            >
              Clinical & Consultative (3)
            </button>
            <button
              onClick={() => setActiveCategory('Experiential & Spatial')}
              className={`px-4 py-2 text-xs font-medium transition-colors ${
                activeCategory === 'Experiential & Spatial'
                  ? 'bg-[#632D35] text-[#F4F0E8]'
                  : 'bg-[#FAF8F5] text-[#575752] border border-[#DAD3C7] hover:text-[#252521]'
              }`}
            >
              Experiential & Spatial (3)
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid & Deep Dive */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#DAD3C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service: ServiceItem) => (
              <div
                key={service.slug}
                className="bg-[#F4F0E8] border border-[#DAD3C7] flex flex-col justify-between hover:border-[#632D35] transition-all group"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E8E2D8] border-b border-[#DAD3C7]">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover filter saturate-[0.92] group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#252521]/80 text-[#F4F0E8] text-[11px] font-mono px-2 py-0.5 tracking-wider">
                      {service.number}
                    </div>
                  </div>

                  <div className="p-7 space-y-4">
                    <div className="text-xs uppercase tracking-wider text-[#777B60] font-medium">
                      {service.category}
                    </div>
                    <h3 className="font-serif text-2xl text-[#252521] font-medium leading-snug group-hover:text-[#632D35] transition-colors">
                      <Link href={`/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#575752] leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {/* Scope Preview */}
                    <div className="pt-2 border-t border-[#DAD3C7]/80 space-y-2">
                      <div className="text-[11px] uppercase tracking-wider text-[#777B60] font-semibold">
                        Key Dimensions:
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#575752]">
                        {service.scope.slice(0, 2).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#777B60] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0 border-t border-[#DAD3C7]/60 mt-4 flex items-center justify-between">
                  <span className="text-[11px] text-[#777B60]">{service.setting.split(' ')[0]} Format</span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs uppercase tracking-widest text-[#632D35] font-medium inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Consultation Fit Callout */}
          <div className="bg-[#ECE6DA] border border-[#DAD3C7] p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#252521] font-medium">
                Not sure which offering aligns with your current need?
              </h3>
              <p className="text-sm text-[#575752] leading-relaxed">
                You do not need to diagnose yourself or select the definitive path before reaching out.
                Our team can help guide you toward the most appropriate consultation or experience.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-[#632D35] text-[#F4F0E8] text-xs uppercase tracking-widest font-medium hover:bg-[#4C2128] transition-colors whitespace-nowrap shrink-0 shadow-sm inline-flex items-center gap-2"
            >
              <span>Schedule an Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
