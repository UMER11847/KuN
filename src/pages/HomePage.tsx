import React from 'react';
import { Link } from '../lib/router';
import { servicesData } from '../data/servicesData';
import { journalArticles } from '../data/journalData';
import { brandConfig } from '../data/brandConfig';
import { images } from '../data/images';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export function HomePage() {
  const featuredArticles = journalArticles.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* ───────────────────────────────────────────────────────────
          1. HERO SECTION: Typographic Editorial Composition
      ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden border-b border-[#DAD3C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Top subtle editorial kicker */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#DAD3C7]/70 text-xs text-[#777B60] tracking-widest uppercase">
            <div>Karachi, Pakistan · In-Person & Virtual Care</div>
            <div className="hidden sm:block">Holistic Psychological Practice</div>
          </div>

          <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
            {/* Left: Asymmetric Hero Statement & CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8 pr-0 lg:pr-6">
              <div className="space-y-6">
                <span className="text-xs uppercase tracking-widest text-[#777B60] font-medium block">
                  A Distinctive Sanctuary for Care
                </span>
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.05] tracking-tight text-[#252521] text-balance font-normal">
                  Being human
                  <br />
                  <span className="italic font-light text-[#632D35]">is a whole</span>
                  <br />
                  experience.
                </h1>
                <p className="text-base sm:text-lg text-[#575752] max-w-xl leading-relaxed pt-2">
                  KÜN brings together clinical psychotherapy, psychological assessments, forensic mental health,
                  animal-assisted partnerships, retreats, and a sensory-gentle café in Karachi.
                </p>
              </div>

              {/* Action buttons & subtle secondary line */}
              <div className="pt-4 space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/services"
                    className="px-7 py-3.5 bg-[#632D35] text-[#F4F0E8] text-xs uppercase tracking-widest font-medium hover:bg-[#4C2128] transition-colors inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>Explore What We Offer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/about"
                    className="px-6 py-3.5 border border-[#DAD3C7] text-[#252521] text-xs uppercase tracking-widest font-medium hover:bg-[#E8E2D8] transition-colors"
                  >
                    The KÜN Approach
                  </Link>
                </div>

                <div className="text-xs text-[#777B60] pt-2 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#777B60] rounded-full opacity-60" />
                  <span>Honoring emotional depth, scientific rigor, and spatial stillness</span>
                </div>
              </div>
            </div>

            {/* Right: Architectural Photographic Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-full min-h-[380px] lg:min-h-[520px] bg-[#E8E2D8] overflow-hidden border border-[#DAD3C7] group">
                <img
                  src={images.sanctuary}
                  alt="Atmospheric light falling into quiet architectural sanctuary space"
                  className="w-full h-full object-cover object-center filter saturate-[0.92] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle scrim for reading caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#252521]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-[#F4F0E8] text-xs font-serif italic">
                  Fig. 1 — Quietude as a foundation for inquiry. Karachi sanctuary interior.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          2. AN INTRODUCTION TO KÜN: Editorial Monograph
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#DAD3C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#777B60] font-semibold">
                Introduction
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#252521] leading-tight font-medium">
                Mental health as a multidimensional human reality.
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6 text-[#575752] text-base sm:text-lg leading-relaxed">
              <p className="editorial-drop-cap">
                For generations, conventional mental health has operated from an adversarial stance:
                locating a symptom, naming a pathology, and attempting to eradicate it through sheer intellectual willpower.
                Yet human suffering is rarely an isolated error code. It is an embodied conversation between our past, our nervous system,
                the pace of our environment, and our capacity for authentic relationship.
              </p>
              <p>
                In Arabic and Sufi philosophy, the word <strong className="font-serif text-[#632D35] font-semibold text-xl">KÜN (كُنْ)</strong> translates to
                <em className="font-serif italic text-[#252521]"> "Be"</em> or <em className="font-serif italic text-[#252521]">"Exist"</em>.
                It is an invitation to cease the endless exhausting labor of performance and return to conscious presence.
                Whether you arrive for confidential psychotherapy, comprehensive psychometric assessments,
                grounding with a therapy dog, or simply an unhurried tea in our café, KÜN exists to hold that space.
              </p>
              <div className="pt-4 flex items-center gap-6">
                <Link
                  href="/about"
                  className="text-xs uppercase tracking-widest text-[#632D35] font-medium hover:underline inline-flex items-center gap-1.5"
                >
                  Read The Full Philosophy <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          3. WHAT WE OFFER: Art-Directed Service Collection
      ─────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#F4F0E8] border-b border-[#DAD3C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#DAD3C7]">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#777B60] font-semibold">
                Our Services
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252521] font-medium">
                Different expressions of care.
              </h2>
            </div>
            <p className="text-sm text-[#575752] max-w-md">
              Each discipline is shaped with deliberate clinical integrity, sensory consideration, and ethical boundaries.
            </p>
          </div>

          {/* Curated Service List — Asymmetric Editorial Presentation */}
          <div className="space-y-12">
            {servicesData.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.slug}
                  className="bg-[#FAF8F5] border border-[#DAD3C7] p-8 sm:p-12 transition-all hover:border-[#632D35]/50 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Visual Media Column */}
                    <div
                      className={`lg:col-span-5 relative overflow-hidden bg-[#E8E2D8] border border-[#DAD3C7] aspect-[4/3] ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover filter saturate-[0.92] group-hover:scale-105 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-[#252521]/80 text-[#F4F0E8] text-[11px] font-mono px-2 py-0.5 tracking-wider">
                        {service.number}
                      </div>
                    </div>

                    {/* Editorial Content Column */}
                    <div
                      className={`lg:col-span-7 space-y-6 ${
                        isEven ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="text-xs text-[#777B60] tracking-wider uppercase font-medium">
                          {service.badgeKicker}
                        </div>
                        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#252521] font-medium leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-sm text-[#777B60] font-serif italic">
                          {service.subtitle}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-[#575752] leading-relaxed">
                        {service.shortDescription}
                      </p>

                      <div className="pt-2 flex flex-wrap items-center gap-6 text-xs">
                        <Link
                          href={`/services/${service.slug}`}
                          className="px-5 py-2.5 bg-[#252521] text-[#F4F0E8] uppercase tracking-widest font-medium hover:bg-[#632D35] transition-colors inline-flex items-center gap-2"
                        >
                          <span>Discover Offering</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        <span className="text-[#777B60]">
                          Format: {service.setting}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-[#632D35] hover:underline"
            >
              <span>View Comprehensive Service Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4. SPOTLIGHT: Animal-Assisted Therapy
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#ECE6DA] border-b border-[#DAD3C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative overflow-hidden border border-[#DAD3C7] bg-[#FAF8F5]">
                <img
                  src={images.animalAssistedTherapy}
                  alt="Attentive therapy dog resting in quiet room with client"
                  className="w-full h-auto object-cover filter saturate-[0.95]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-3 text-xs font-serif text-[#777B60] italic">
                Fig. 2 — Certified animal-assisted partnerships at our Karachi sanctuary courtyard.
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 lg:pl-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#777B60] font-semibold">
                  Dedicated Feature
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#252521] font-medium leading-tight">
                  Presence without demand: Animal-assisted therapy.
                </h2>
              </div>

              <p className="text-base text-[#575752] leading-relaxed">
                When words feel too exhausting or defense mechanisms are elevated, the calm physiological presence of an animal offers an immediate anchor. Animals do not require explanations or social masks; their rhythmic breath and quiet companionship help down-regulate an overloaded nervous system.
              </p>

              <blockquote className="py-4 border-y border-[#DAD3C7] text-base font-serif italic text-[#252521]">
                "In the presence of an animal, the nervous system remembers safety before the intellect finds the words for it."
              </blockquote>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/services/animal-assisted-therapy"
                  className="px-6 py-3 bg-[#632D35] text-[#F4F0E8] text-xs uppercase tracking-widest font-medium hover:bg-[#4C2128] transition-colors inline-flex items-center gap-2"
                >
                  <span>Explore Animal-Assisted Therapy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          5. EXPERIENCES: Retreats & Experience Café
      ─────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#FAF8F5] border-b border-[#DAD3C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#777B60] font-semibold">
              Spatial Care & Community
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252521] font-medium">
              Spaces designed for unhurried presence.
            </h2>
            <p className="text-base text-[#575752] leading-relaxed">
              Mental health does not only live in 50-minute clinical appointments. It lives in the spaces we inhabit, the cadence of our days, and the permission to pause.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Experience Café Card */}
            <div className="bg-[#F4F0E8] border border-[#DAD3C7] p-8 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="aspect-[16/10] overflow-hidden border border-[#DAD3C7] bg-[#E8E2D8]">
                  <img
                    src={images.experienceCafe}
                    alt="Warm minimalist café corner with herbal infusion and books"
                    className="w-full h-full object-cover filter saturate-[0.92] hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-[#777B60] font-medium">
                    Sanctuary in Karachi
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#252521] font-medium">
                    The KÜN Experience Café
                  </h3>
                  <p className="text-sm text-[#575752] leading-relaxed">
                    A sensory-gentle hospitality sanctuary designed to buffer the noise of the city. Featuring indirect lighting, curated literature on psychology and philosophy, calming botanical infusions, and an unpressured setting to sit, reflect, or converse.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#DAD3C7] flex items-center justify-between">
                <span className="text-xs text-[#777B60]">Karachi Sanctuary</span>
                <Link
                  href="/services/experience-cafe"
                  className="text-xs uppercase tracking-widest text-[#632D35] font-medium hover:underline inline-flex items-center gap-1"
                >
                  Discover The Café <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Retreats Card */}
            <div className="bg-[#F4F0E8] border border-[#DAD3C7] p-8 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="aspect-[16/10] overflow-hidden border border-[#DAD3C7] bg-[#E8E2D8]">
                  <img
                    src={images.retreat}
                    alt="Courtyard retreat setting with stone pavers and natural foliage"
                    className="w-full h-full object-cover filter saturate-[0.92] hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-[#777B60] font-medium">
                    Curated Pauses
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#252521] font-medium">
                    Retreats & Immersive Immersions
                  </h3>
                  <p className="text-sm text-[#575752] leading-relaxed">
                    Small-cohort experiential pauses outside urban noise. Combining somatic inquiry, nervous system regulation, structured group reflection, and contact with natural elements to restore clarity.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#DAD3C7] flex items-center justify-between">
                <span className="text-xs text-[#777B60]">Small Cohorts (10–14)</span>
                <Link
                  href="/services/retreats-and-experiences"
                  className="text-xs uppercase tracking-widest text-[#632D35] font-medium hover:underline inline-flex items-center gap-1"
                >
                  Explore Retreats <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          6. MOMENT OF REFLECTION: Editorial Interlude
      ─────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#252521] text-[#FAF8F5] border-b border-[#3A3A35] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8">
          <span className="text-xs uppercase tracking-widest text-[#777B60] font-semibold block">
            A Moment of Reflection
          </span>
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed tracking-tight text-balance">
            "Healing is neither linear nor isolated; it unfolds in quiet rooms,
            shared tables, and the permission to simply exist."
          </p>
          <div className="pt-4 flex items-center justify-center gap-4 text-xs font-serif italic text-[#DAD3C7]/60">
            <span>KÜN — Karachi</span>
            <span aria-hidden="true">·</span>
            <span>Est. for Whole Human Wellbeing</span>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          7. JOURNAL / PERSPECTIVES: Thoughtful Previews
      ─────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#F4F0E8] border-b border-[#DAD3C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#DAD3C7]">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#777B60] font-semibold">
                Perspectives
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#252521] font-medium">
                Essays, inquiry & reflections.
              </h2>
            </div>
            <Link
              href="/journal"
              className="text-xs uppercase tracking-widest text-[#632D35] font-medium hover:underline inline-flex items-center gap-1.5"
            >
              Browse All Articles <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-[#FAF8F5] border border-[#DAD3C7] p-7 flex flex-col justify-between space-y-6 hover:border-[#632D35] transition-colors group"
              >
                <div className="space-y-4">
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="text-xs text-[#777B60] flex items-center gap-2">
                    <span>{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#252521] font-medium group-hover:text-[#632D35] transition-colors leading-snug">
                    <Link href={`/journal/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#575752] leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DAD3C7] flex items-center justify-between text-xs">
                  <span className="text-[#777B60]">{article.date}</span>
                  <Link
                    href={`/journal/${article.slug}`}
                    className="text-[#632D35] font-medium inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    Read Essay <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          8. FINAL CONVERSION: There's More Than One Way to Begin
      ─────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#FAF8F5] border-b border-[#DAD3C7]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8">
          <span className="text-xs uppercase tracking-widest text-[#777B60] font-semibold block">
            Begin With Us
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#252521] font-normal tracking-tight text-balance">
            There’s more than one way to begin.
          </h2>
          <p className="text-base sm:text-lg text-[#575752] max-w-2xl mx-auto leading-relaxed">
            Whether you are seeking individual psychotherapy, clarity through an assessment,
            curious about animal-assisted therapy, or wish to visit our Experience Café in Karachi,
            we invite you to take an unhurried first step.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#632D35] text-[#F4F0E8] text-xs uppercase tracking-widest font-medium hover:bg-[#4C2128] transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <span>Make an Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={brandConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-[#DAD3C7] text-[#252521] text-xs uppercase tracking-widest font-medium hover:bg-[#E8E2D8] transition-colors inline-flex items-center gap-2"
            >
              <span>Find Us on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#777B60]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
