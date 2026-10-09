import React from 'react';
import { Link } from '../lib/router';
import { brandConfig } from '../data/brandConfig';
import { ArrowRight, Compass, Heart, ShieldCheck, Sparkles } from 'lucide-react';

export function AboutPage() {
  const pillars = [
    {
      title: 'Multidimensional Humanity',
      subtitle: 'Beyond isolated symptom management',
      description:
        'We do not view emotional distress as an isolated system glitch to be abruptly silenced. Distress is an embodied response to history, relational dynamics, and societal load. True care attends to mind, body, environment, and meaning.',
      icon: Compass,
    },
    {
      title: 'Grounded Psychological Rigor',
      subtitle: 'Scientific discernment with deep humility',
      description:
        'Our clinical practices—from psychotherapeutic modalities to standardized psychometric evaluations and forensic consultations—are grounded in rigorous clinical ethics and evidence-based standards, applied with compassion.',
      icon: ShieldCheck,
    },
    {
      title: 'Spatial & Sensory Sanctuary',
      subtitle: 'Environments designed to regulate the nervous system',
      description:
        'Physical environments actively communicate to our nervous systems. In Karachi, where sensory overstimulation is continuous, our consultation suites and Experience Café are designed with indirect lighting, natural textures, and acoustic quietude.',
      icon: Sparkles,
    },
    {
      title: 'Non-Judgmental Presence',
      subtitle: 'A container of safety and autonomy',
      description:
        'Healing cannot occur under the threat of evaluation. Whether sitting with a clinical therapist or resting beside a therapy animal, you are met with unconditional dignity and the permission to simply be.',
      icon: Heart,
    },
  ];

  return (
    <div className="space-y-0">
      {/* Header Monograph */}
      <section className="py-20 lg:py-28 bg-[#F4F0E8] border-b border-[#DAD3C7]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#777B60]">
            <Link href="/" className="hover:underline">KÜN</Link>
            <span aria-hidden="true">/</span>
            <span>The Approach</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#252521] font-normal leading-[1.1] text-balance">
            Reclaiming the dignity of being human.
          </h1>

          <p className="text-lg sm:text-xl font-serif italic text-[#632D35] leading-relaxed">
            "In Arabic and contemplative thought, the root KÜN (كُنْ) signifies the command to exist.
            It is the foundation of our work: creating spaces where you no longer have to perform, defend, or prove yourself."
          </p>
        </div>
      </section>

      {/* Narrative Section 1: The Philosophy & The Karachi Context */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#DAD3C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#777B60] font-semibold">
                Origins & Context
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#252521] leading-tight font-medium">
                Cultivating Stillness in an Accelerated City.
              </h2>
              <div className="pt-2 text-xs text-[#777B60] font-mono">
                Karachi, Pakistan · Physical & Virtual Presence
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#575752] text-base leading-relaxed">
              <p className="editorial-drop-cap">
                Karachi is a city of extraordinary resilience, culture, and relentless motion. Yet living in a dense, bustling metropolis places continuous demands on the autonomic nervous system. The sound of traffic, high-stakes professional pressures, complex familial expectations, and economic velocity leave little room for quiet emotional digestion.
              </p>
              <p>
                KÜN was founded out of a recognition that mental health care cannot remain confined to sterile clinical cubicles. Healing is not merely an intellectual debate between a therapist and a client; it is an integrated experience that touches how we breathe, the rooms we step into, the food and teas we consume, and the relationships we nurture.
              </p>
              <p>
                By bringing together traditional psychotherapy, structured psychological assessments, forensic insight, animal-assisted therapy, reflective retreats, and a sensory-gentle café, KÜN offers a spectrum of care tailored to where each person currently stands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Composition Interlude */}
      <section className="bg-[#252521] text-[#FAF8F5] py-16 border-b border-[#3A3A35]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-serif text-[#F4F0E8]">6 Core Disciplines</div>
              <div className="text-xs text-[#777B60] uppercase tracking-wider">Clinical to Experiential</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-serif text-[#F4F0E8]">Karachi & Virtual</div>
              <div className="text-xs text-[#777B60] uppercase tracking-wider">In-Person & Secure Online</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-serif text-[#F4F0E8]">Strict Confidentiality</div>
              <div className="text-xs text-[#777B60] uppercase tracking-wider">Professional Clinical Ethics</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Practice */}
      <section className="py-24 lg:py-32 bg-[#F4F0E8] border-b border-[#DAD3C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#777B60] font-semibold">
              Our Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#252521] font-medium">
              How we approach care.
            </h2>
            <p className="text-sm text-[#575752]">
              Every touchpoint across KÜN is held to four guiding convictions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-[#FAF8F5] border border-[#DAD3C7] p-8 sm:p-10 space-y-4 hover:border-[#632D35] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="w-5 h-5 text-[#632D35]" />
                    <span className="text-xs font-mono text-[#777B60]">0{idx + 1}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#252521] font-medium">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-serif italic text-[#777B60]">
                    {pillar.subtitle}
                  </div>
                  <p className="text-sm text-[#575752] leading-relaxed pt-2">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing Callout */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#DAD3C7] text-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#777B60] font-semibold block">
            An Open Door
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#252521] font-medium">
            You do not need to be in crisis to begin.
          </h2>
          <p className="text-base text-[#575752] leading-relaxed">
            Many people wait until exhaustion or rupture forces them to seek support.
            At KÜN, we welcome you whether you are navigating an acute threshold or simply seeking a more grounded relationship with yourself.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="px-7 py-3.5 bg-[#632D35] text-[#F4F0E8] text-xs uppercase tracking-widest font-medium hover:bg-[#4C2128] transition-colors inline-flex items-center gap-2"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 border border-[#DAD3C7] text-[#252521] text-xs uppercase tracking-widest font-medium hover:bg-[#E8E2D8] transition-colors"
            >
              Make an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
