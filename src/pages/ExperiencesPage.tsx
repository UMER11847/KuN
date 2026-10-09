import React from 'react';
import { Link } from '../lib/router';
import { brandConfig } from '../data/brandConfig';
import { ArrowRight, Coffee, Trees, BookOpen, VolumeX, Sparkles } from 'lucide-react';

export function ExperiencesPage() {
  const cafeSensoryFeatures = [
    {
      title: 'Acoustic Moderation',
      description: 'Sound-dampening architectural materials to prevent the aggressive reverb common to modern commercial eateries.',
      icon: VolumeX,
    },
    {
      title: 'Curated Contemplative Library',
      description: 'Open bookshelves with curated titles spanning developmental psychology, somatic science, poetry, and philosophy.',
      icon: BookOpen,
    },
    {
      title: 'Botanical & Single-Origin Menu',
      description: 'Nervous-system supportive herbal tisanes (chamomile, ashwagandha, lavender, lemon balm) alongside light artisanal single-origin coffees.',
      icon: Coffee,
    },
    {
      title: 'Pressure-Free Hospitality',
      description: 'No pressure to turn tables quickly or order continuously. An intentional space to sit, write, or converse without friction.',
      icon: Sparkles,
    },
  ];

  return (
    <div className="space-y-0">
      {/* Editorial Magazine Hero */}
      <section className="py-20 lg:py-28 bg-[#F4F0E8] border-b border-[#DAD3C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#777B60]">
            <Link href="/" className="hover:underline">KÜN</Link>
            <span aria-hidden="true">/</span>
            <span>Spatial & Experiential</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#252521] font-normal leading-[1.1] text-balance">
            Sanctuaries for sensory rest & communal presence.
          </h1>

          <p className="text-base sm:text-lg text-[#575752] max-w-2xl leading-relaxed">
            KÜN expands mental health beyond clinical consultation into daily tactile life through our Karachi Experience Café and curated small-group retreats.
          </p>
        </div>
      </section>

      {/* Feature 1: The Experience Café */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#DAD3C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#777B60] font-semibold">
                  Hospitality & Stillness
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#252521] font-medium leading-tight">
                  The KÜN Experience Café
                </h2>
                <div className="text-sm font-serif italic text-[#632D35]">
                  Karachi, Pakistan · A sensory-gentle refuge
                </div>
              </div>

              <p className="text-base text-[#575752] leading-relaxed">
                Most urban cafés are machines designed for sensory stimulation: blaring playlists, chrome surfaces bouncing sound, and the subtle pressure to finish quickly.
              </p>

              <p className="text-base text-[#575752] leading-relaxed">
                The KÜN Experience Café was engineered with the opposite goal: to provide an immediate downshift for the nervous system. With textured clay walls, indirect amber lighting, unvarnished oak tables, and calming botanicals, it is a room where you are permitted to drop your social armor.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-[#632D35] text-[#F4F0E8] text-xs uppercase tracking-widest font-medium hover:bg-[#4C2128] transition-colors inline-flex items-center gap-2"
                >
                  <span>Ask About Café Hours & Access</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/services/experience-cafe"
                  className="px-6 py-3 border border-[#DAD3C7] text-[#252521] text-xs uppercase tracking-widest font-medium hover:bg-[#E8E2D8] transition-colors"
                >
                  Read Spatial Details
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="border border-[#DAD3C7] bg-[#E8E2D8] overflow-hidden aspect-[4/3] group">
                <img
                  src="/src/assets/images/kun_experience_cafe_1791583774534.jpg"
                  alt="Customer enjoying herbal tea and philosophy book in tranquil café"
                  className="w-full h-full object-cover filter saturate-[0.94] group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-2.5 text-xs font-serif italic text-[#777B60] flex items-center justify-between">
                <span>The Experience Café — Sensory-gentle hospitality</span>
                <span>Karachi</span>
              </div>
            </div>
          </div>

          {/* Sensory Architectural Features */}
          <div className="pt-8 border-t border-[#DAD3C7] space-y-6">
            <h3 className="font-serif text-2xl text-[#252521] font-medium">
              Sensory Architecture Elements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cafeSensoryFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="p-6 bg-[#F4F0E8] border border-[#DAD3C7] space-y-3"
                  >
                    <Icon className="w-5 h-5 text-[#632D35]" />
                    <h4 className="font-serif text-lg text-[#252521] font-medium">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-[#575752] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Retreats & Mindful Immersions */}
      <section className="py-20 lg:py-28 bg-[#ECE6DA] border-b border-[#DAD3C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#777B60] font-semibold">
                  Restorative Immersions
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#252521] font-medium leading-tight">
                  KÜN Retreats & Group Pauses
                </h2>
                <div className="text-sm font-serif italic text-[#632D35]">
                  Small Cohorts · Sindh Nature & Coastal Sanctuaries
                </div>
              </div>

              <p className="text-base text-[#575752] leading-relaxed">
                When cognitive fatigue accumulates, intellectualizing our stress is not enough. Our nervous systems need an altered rhythm.
              </p>

              <p className="text-base text-[#575752] leading-relaxed">
                KÜN curates intimate experiential retreats for cohorts of 10 to 14 participants. Guided by psychological practitioners and somatic facilitators, these gatherings combine restorative silence, guided group inquiry, somatic movement, and clean nourishment.
              </p>

              {/* Demo note regarding schedule availability */}
              <div className="p-4 bg-[#F4F0E8] border border-[#DAD3C7] text-xs text-[#575752] space-y-1">
                <div className="font-medium text-[#252521] uppercase tracking-wider text-[11px]">
                  Upcoming Cohort Schedule Notice
                </div>
                <p>
                  Retreat dates and themes are announced seasonally to maintain small, cohesive cohorts.
                  Enquire below to receive preliminary details regarding upcoming retreat openings.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-[#632D35] text-[#F4F0E8] text-xs uppercase tracking-widest font-medium hover:bg-[#4C2128] transition-colors inline-flex items-center gap-2"
                >
                  <span>Enquire About Upcoming Retreats</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="border border-[#DAD3C7] bg-[#FAF8F5] overflow-hidden aspect-[4/3] group">
                <img
                  src="/src/assets/images/kun_retreat_mindfulness_1791583790140.jpg"
                  alt="Courtyard meditation in quiet natural sanctuary"
                  className="w-full h-full object-cover filter saturate-[0.94] group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-2.5 text-xs font-serif italic text-[#777B60] flex items-center justify-between">
                <span>Contemplative stillness at our retreat grounds</span>
                <span>Near Karachi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#DAD3C7] text-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#252521] font-medium">
            Experience KÜN in Karachi
          </h2>
          <p className="text-base text-[#575752] leading-relaxed">
            Interested in visiting the Experience Café or joining our next somatic retreat cohort?
            Send an introductory enquiry to receive opening hours, location details, and invitations.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-[#632D35] text-[#F4F0E8] text-xs uppercase tracking-widest font-medium hover:bg-[#4C2128] transition-colors inline-flex items-center gap-2"
            >
              <span>Connect With Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
