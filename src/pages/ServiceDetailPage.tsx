import React from 'react';
import { Link } from '../lib/router';
import { servicesData } from '../data/servicesData';
import { EnquiryForm } from '../components/ui/EnquiryForm';
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, Compass } from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
}

export function ServiceDetailPage({ slug }: ServiceDetailPageProps) {
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="py-32 bg-[#F4F0E8] text-center space-y-6 max-w-2xl mx-auto px-6">
        <h1 className="font-serif text-3xl sm:text-4xl text-[#252521]">
          Offering Not Found
        </h1>
        <p className="text-sm text-[#575752]">
          We could not locate the requested service. Please explore our full directory of services.
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#632D35] text-[#F4F0E8] text-xs uppercase tracking-widest font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to All Services
        </Link>
      </div>
    );
  }

  // Related other services
  const otherServices = servicesData.filter((s) => s.slug !== slug).slice(0, 2);

  return (
    <div className="space-y-0">
      {/* Editorial Header */}
      <section className="py-20 lg:py-28 bg-[#F4F0E8] border-b border-[#DAD3C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#777B60]">
            <Link href="/" className="hover:underline">KÜN</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services" className="hover:underline">Services</Link>
            <span aria-hidden="true">/</span>
            <span>{service.title}</span>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <span className="text-xs font-mono bg-[#252521] text-[#F4F0E8] px-2 py-0.5">
              {service.number}
            </span>
            <span className="text-xs uppercase tracking-widest text-[#777B60]">
              {service.category}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#252521] font-normal leading-[1.1] max-w-4xl text-balance">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl font-serif italic text-[#632D35] max-w-3xl leading-relaxed">
            "{service.subtitle}"
          </p>
        </div>
      </section>

      {/* Hero Visual & Lead Statement */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#DAD3C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Visual Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="border border-[#DAD3C7] bg-[#E8E2D8] overflow-hidden aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover filter saturate-[0.94]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-xs font-serif italic text-[#777B60] flex items-center justify-between">
                <span>{service.imageAlt}</span>
                <span className="font-mono text-[10px] uppercase">KÜN Archive</span>
              </div>

              {/* Setting note */}
              <div className="p-5 bg-[#F4F0E8] border border-[#DAD3C7] text-xs space-y-2">
                <div className="flex items-center gap-2 text-[#632D35] font-semibold uppercase tracking-wider text-[11px]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Clinical & Spatial Setting</span>
                </div>
                <p className="text-[#575752] leading-relaxed">
                  {service.setting}
                </p>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="lg:col-span-7 space-y-8 lg:pl-4">
              <div className="p-6 bg-[#ECE6DA] border-l-2 border-[#632D35] text-[#252521] font-serif italic text-lg sm:text-xl leading-relaxed">
                "{service.editorialLead}"
              </div>

              <div className="space-y-5 text-base text-[#575752] leading-relaxed">
                {service.overview.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Scope & Focus */}
              <div className="pt-6 border-t border-[#DAD3C7] space-y-4">
                <h3 className="font-serif text-2xl text-[#252521] font-medium">
                  Dimensions of Focus
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.scope.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-[#F4F0E8] border border-[#DAD3C7] text-xs sm:text-sm text-[#252521] flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#777B60] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Expect */}
              <div className="pt-6 border-t border-[#DAD3C7] space-y-4">
                <h3 className="font-serif text-2xl text-[#252521] font-medium">
                  What to Expect
                </h3>
                <ol className="space-y-3 pt-2">
                  {service.whatToExpect.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-4 text-sm text-[#575752] leading-relaxed"
                    >
                      <span className="font-mono text-xs text-[#632D35] font-bold shrink-0 pt-0.5">
                        0{idx + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Enquiry Section for this Service */}
      <section className="py-20 lg:py-28 bg-[#F4F0E8] border-b border-[#DAD3C7]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#777B60] font-semibold">
              Enquire About {service.title}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#252521] font-medium">
              Take the first step.
            </h2>
            <p className="text-sm text-[#575752] max-w-lg mx-auto">
              Our clinical and admissions team will contact you confidentially to discuss session formats, practitioner fit, and scheduling in Karachi.
            </p>
          </div>

          <div className="bg-[#FAF8F5] border border-[#DAD3C7] p-8 sm:p-12 shadow-sm">
            <EnquiryForm initialService={service.slug} />
          </div>
        </div>
      </section>

      {/* Other Offerings Rail */}
      <section className="py-16 bg-[#FAF8F5] border-b border-[#DAD3C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-[#DAD3C7]">
            <div className="text-xs uppercase tracking-widest text-[#777B60]">
              Other Disciplines
            </div>
            <Link
              href="/services"
              className="text-xs text-[#632D35] hover:underline inline-flex items-center gap-1 font-medium"
            >
              All Services <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="p-6 bg-[#F4F0E8] border border-[#DAD3C7] hover:border-[#632D35] transition-colors flex items-start justify-between gap-4 group"
              >
                <div className="space-y-1.5">
                  <span className="text-xs font-mono text-[#777B60]">{other.number}</span>
                  <h4 className="font-serif text-xl text-[#252521] group-hover:text-[#632D35] transition-colors font-medium">
                    {other.title}
                  </h4>
                  <p className="text-xs text-[#575752] line-clamp-2">
                    {other.shortDescription}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#777B60] group-hover:text-[#632D35] shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
