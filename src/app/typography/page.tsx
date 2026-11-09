'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Sparkles,
  Sliders,
} from 'lucide-react';

interface FontOption {
  id: string;
  name: string;
  tagline: string;
  headingFont: string;
  bodyFont: string;
  headingClass: string;
  bodyClass: string;
  monoClass: string;
  vibe: string;
  recommended: boolean;
  characteristics: string[];
  awwwardsRating: string;
}

const FONT_OPTIONS: FontOption[] = [
  {
    id: 'option-2',
    name: 'Option 2: Space Grotesk + DM Sans',
    tagline: 'Brutalist Aerospace & Telemetry Protocol',
    headingFont: 'Space Grotesk (Weights: 600, 700)',
    bodyFont: 'DM Sans (Weights: 400, 500)',
    headingClass: 'font-space-grotesk tracking-tight',
    bodyClass: 'font-dm-sans',
    monoClass: 'font-mono',
    vibe: 'Raw, engineered aerospace feel inspired by Space Mono, NASA telemetry terminals, and contemporary high-tech Awwwards sites. Zero generic fluff.',
    recommended: true,
    characteristics: [
      'Engineered proportional cuts inspired by monospace terminal typography',
      'Distinctive geometric ink-traps and squared-off punctuation',
      'High contrast against soft paper-ivory backgrounds',
      'Pairs seamlessly with MAVLink packet telemetry and hexacopter schematics',
    ],
    awwwardsRating: '9.8 / 10 — Best fit for Autonomous UAVs & Robotics',
  },
  {
    id: 'option-1',
    name: 'Option 1: Sora + Inter',
    tagline: 'Cybernetic Precision & Modern AI Systems',
    headingFont: 'Sora (Weights: 600, 700)',
    bodyFont: 'Inter (Weights: 400, 500)',
    headingClass: 'font-sora tracking-tight',
    bodyClass: 'font-inter',
    monoClass: 'font-mono',
    vibe: 'Clean, futuristic, high-legibility tech aesthetic. Evokes neural network research, linear algebra, and silicon hardware design.',
    recommended: false,
    characteristics: [
      'Low stroke contrast with wide apertures designed for crisp screen display',
      'Mathematical geometric curves with subtle rounded modern terminals',
      'Inter provides flawless body reading across dense multi-sentence specifications',
      'Polished modern developer look popularized by modern AI labs',
    ],
    awwwardsRating: '9.3 / 10 — Highly polished AI developer feel',
  },
  {
    id: 'option-3',
    name: 'Option 3: Manrope + IBM Plex Sans',
    tagline: 'European Industrial Robotics & Systems Architecture',
    headingFont: 'Manrope (Weights: 700, 800)',
    bodyFont: 'IBM Plex Sans (Weights: 400, 500)',
    headingClass: 'font-manrope tracking-tight',
    bodyClass: 'font-body',
    monoClass: 'font-mono',
    vibe: 'Authoritative, robust industrial design. Combines modern Swiss geometric grotesque with IBM engineered precision.',
    recommended: false,
    characteristics: [
      'Semi-rounded geometric grotesque with tall x-height and open counters',
      'IBM Plex Sans preserves the established engineered body structure',
      'Extremely sturdy headline presence with heavy structural anchoring',
      'Feels like an enterprise robotics research facility or industrial lab',
    ],
    awwwardsRating: '9.1 / 10 — Solid industrial systems engineering look',
  },
  {
    id: 'option-4',
    name: 'Option 4 (Awwwards Alternative): Syne + Inter',
    tagline: 'Avant-Garde Architectural & High-Impact Statement',
    headingFont: 'Syne (Weights: 700, 800)',
    bodyFont: 'Inter (Weights: 400, 500)',
    headingClass: 'font-syne tracking-tight',
    bodyClass: 'font-inter',
    monoClass: 'font-mono',
    vibe: 'Bold, sculptural, high-fashion tech portfolio aesthetic commonly awarded on Awwwards Site of the Day.',
    recommended: false,
    characteristics: [
      'Sculptural, wide uppercase and expressive geometric letterforms',
      'Maximum dramatic impact on hero titles and numbers',
      'Requires careful line-height discipline to prevent crowding',
      'Ultra-contemporary creative agency tone',
    ],
    awwwardsRating: '9.4 / 10 — High-fashion Awwwards creative punch',
  },
  {
    id: 'baseline',
    name: 'Current Baseline: Instrument Serif + IBM Plex Sans',
    tagline: 'Literary Editorial / Academic Journal',
    headingFont: 'Instrument Serif Italic (Weight: 400)',
    bodyFont: 'IBM Plex Sans (Weight: 400)',
    headingClass: 'font-display italic',
    bodyClass: 'font-body',
    monoClass: 'font-mono',
    vibe: 'Current live site styling: literary, intellectual, editorial magazine aesthetic.',
    recommended: false,
    characteristics: [
      'Traditional editorial serif with high stroke contrast',
      'Feels more like an academic paper or literary review than an avionics lab',
      'Italic rendering reduces aggressive engineering impact of telemetry headlines',
      'Beautiful for prose, but lacks the high-tech terminal punch of modern robotics',
    ],
    awwwardsRating: '7.8 / 10 — Editorial, but misaligned with UAV/Robotics ethos',
  },
];

export default function TypographyPreviewPage() {
  const [selectedOptionId, setSelectedOptionId] = useState<string>('option-2');
  const [activeTab, setActiveTab] = useState<'side-by-side' | 'interactive-mock' | 'matrix'>('side-by-side');

  const activeOption = FONT_OPTIONS.find((o) => o.id === selectedOptionId) || FONT_OPTIONS[0];

  return (
    <div className="min-h-screen bg-[#F4F1E8] text-[#242521] selection:bg-[#E65B35] selection:text-[#FAF9F6] pb-24">
      {/* Top Banner & Navigation */}
      <header className="sticky top-0 z-50 bg-[#F4F1E8]/95 backdrop-blur-md border-b border-[#E2DDD1]">
        <div className="max-w-[1360px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#77766F] hover:text-[#242521] transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to Portfolio</span>
            </Link>
            <span className="text-[#CCC6B8]">/</span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#E65B35]">
              Typography Laboratory
            </span>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1 bg-[#FAF9F6] border border-[#CCC6B8] p-1 rounded-xs font-mono text-xs">
            <button
              onClick={() => setActiveTab('side-by-side')}
              className={`px-3 py-1 rounded-xs transition-colors cursor-pointer ${
                activeTab === 'side-by-side'
                  ? 'bg-[#242521] text-[#FAF9F6] font-semibold'
                  : 'text-[#77766F] hover:text-[#242521]'
              }`}
            >
              Side-by-Side View
            </button>
            <button
              onClick={() => setActiveTab('interactive-mock')}
              className={`px-3 py-1 rounded-xs transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'interactive-mock'
                  ? 'bg-[#242521] text-[#FAF9F6] font-semibold'
                  : 'text-[#77766F] hover:text-[#242521]'
              }`}
            >
              <Sliders size={12} />
              <span>Live Switcher</span>
            </button>
            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-3 py-1 rounded-xs transition-colors cursor-pointer ${
                activeTab === 'matrix'
                  ? 'bg-[#242521] text-[#FAF9F6] font-semibold'
                  : 'text-[#77766F] hover:text-[#242521]'
              }`}
            >
              Design Evaluation
            </button>
          </div>
        </div>
      </header>

      {/* Hero Intro */}
      <div className="max-w-[1360px] mx-auto px-6 pt-12 pb-10 border-b border-[#E2DDD1]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#E65B35] font-semibold flex items-center gap-2">
              <Sparkles size={14} />
              <span>AWWWARDS-STYLE TYPOGRAPHY DIRECTION</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-semibold tracking-tight text-[#242521]">
              Typography Redesign Preview
            </h1>
            <p className="text-base text-[#77766F] max-w-3xl leading-relaxed">
              Evaluating modern, high-tech sans-serif typography candidates against Abhay Vishwakarma&apos;s autonomous UAV, robotics, and AI systems portfolio. Compare each stack using real project telemetry and narrative copy before final commitment.
            </p>
          </div>

          <div className="p-4 bg-[#FAF9F6] border border-[#E2DDD1] rounded-xs font-mono text-xs space-y-1.5 shrink-0">
            <div className="text-[#E65B35] font-semibold uppercase">Lead Recommendation</div>
            <div className="font-bold text-[#242521]">Option 2: Space Grotesk + DM Sans</div>
            <div className="text-[11px] text-[#77766F]">Aerospace precision &amp; brutalist telemetry cuts</div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-[1360px] mx-auto px-6 pt-10">
        
        {/* TAB 1: SIDE BY SIDE COMPARISON */}
        {activeTab === 'side-by-side' && (
          <div className="space-y-12">
            <div className="text-xs font-mono text-[#77766F] uppercase tracking-wider flex items-center justify-between">
              <span>Comparing 5 Typographic Ecosystems on Identical UI Components</span>
              <span className="text-[#E65B35]">Click any card to select for interactive testing</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {FONT_OPTIONS.map((option) => {
                const isSelected = selectedOptionId === option.id;
                return (
                  <div
                    key={option.id}
                    onClick={() => setSelectedOptionId(option.id)}
                    className={`bg-[#FAF9F6] border rounded-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#E65B35] shadow-[0_4px_24px_rgba(230,91,53,0.12)] ring-1 ring-[#E65B35]'
                        : 'border-[#E2DDD1] hover:border-[#CCC6B8]'
                    }`}
                  >
                    {/* Card Header */}
                    <div className="p-5 border-b border-[#E2DDD1] bg-[#F4F1E8]/60 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-semibold text-[#242521]">
                            {option.name}
                          </span>
                          {option.recommended && (
                            <span className="px-2 py-0.5 bg-[#E65B35] text-[#FAF9F6] font-mono text-[10px] uppercase tracking-widest font-bold rounded-xs">
                              Recommended
                            </span>
                          )}
                          {option.id === 'baseline' && (
                            <span className="px-2 py-0.5 bg-[#CCC6B8] text-[#242521] font-mono text-[10px] uppercase tracking-widest font-bold rounded-xs">
                              Current Live
                            </span>
                          )}
                        </div>
                        <div className="font-mono text-[11px] text-[#77766F] mt-0.5">
                          {option.tagline}
                        </div>
                      </div>

                      <div className="text-right font-mono text-[11px] text-[#E65B35] font-semibold">
                        {option.awwwardsRating.split('—')[0]}
                      </div>
                    </div>

                    {/* Live Content Demonstration */}
                    <div className="p-6 sm:p-8 space-y-6">
                      {/* 1. Header Typography */}
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-[#77766F] mb-1">
                          Heading Stack: {option.headingFont}
                        </div>
                        <h2 className={`text-2xl sm:text-3xl text-[#242521] leading-tight font-semibold ${option.headingClass}`}>
                          Building intelligence beyond the screen.
                        </h2>
                      </div>

                      {/* 2. Subhead / Section Title */}
                      <div>
                        <h3 className={`text-xl sm:text-2xl text-[#242521] font-semibold mb-1 ${option.headingClass}`}>
                          Aerial Intelligence Munitions
                        </h3>
                        <div className="font-mono text-xs text-[#E65B35]">
                          Two-Tier Autonomous Aerial Perception &amp; Coordination
                        </div>
                      </div>

                      {/* 3. Body Typography */}
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-[#77766F] mb-1">
                          Body Stack: {option.bodyFont}
                        </div>
                        <p className={`text-sm sm:text-base text-[#77766F] leading-relaxed ${option.bodyClass}`}>
                          B.Tech student in AI &amp; Data Science at Thakur College of Engineering and Technology, Mumbai. I build autonomous UAV software, real-time MAVLink telemetry protocols, and deterministic self-healing systems.
                        </p>
                      </div>

                      {/* 4. Telemetry Specs & Field Note */}
                      <div className="p-4 bg-[#F4F1E8] border border-[#E2DDD1] rounded-xs space-y-2">
                        <div className="flex items-center justify-between font-mono text-[11px]">
                          <span className="text-[#77766F] uppercase">Verification</span>
                          <span className="text-[#242521] font-semibold">194-test regression suite</span>
                        </div>
                        <div className="flex items-center justify-between font-mono text-[11px]">
                          <span className="text-[#77766F] uppercase">Telemetry Link</span>
                          <span className="text-[#E65B35] font-semibold">921,600 baud serial bridge</span>
                        </div>
                        <p className={`text-xs text-[#77766F] pt-2 border-t border-[#E2DDD1] leading-relaxed ${option.bodyClass}`}>
                          &ldquo;Engineered direct ESP-NOW peer-to-peer radio frames bypassing Wi-Fi AP association to achieve low-latency air-to-air telemetry packet dispatch between UAV airframes.&rdquo;
                        </p>
                      </div>

                      {/* 5. Buttons & Badges */}
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <button className="px-4 py-2 bg-[#E65B35] text-[#FAF9F6] text-xs font-mono uppercase tracking-wider font-semibold rounded-xs shadow-xs">
                          Explore Projects
                        </button>
                        <button className="px-4 py-2 bg-[#FAF9F6] border border-[#CCC6B8] text-[#242521] text-xs font-mono uppercase tracking-wider font-medium rounded-xs">
                          Download Resume
                        </button>
                        <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 bg-[#F4F1E8] border border-[#E2DDD1] text-[#242521] rounded-xs font-semibold">
                          Hands-on
                        </span>
                      </div>
                    </div>

                    {/* Vibe Summary */}
                    <div className="p-4 bg-[#FAF9F6] border-t border-[#E2DDD1] font-mono text-[11px] text-[#77766F] flex items-center justify-between">
                      <span className="truncate pr-4">{option.vibe}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedOptionId(option.id);
                          setActiveTab('interactive-mock');
                        }}
                        className="text-[#E65B35] hover:underline font-semibold shrink-0"
                      >
                        Inspect Full Mock &rarr;
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: LIVE SWITCHER / FULL PAGE MOCK VIEW */}
        {activeTab === 'interactive-mock' && (
          <div className="space-y-8">
            {/* Control Bar */}
            <div className="p-6 bg-[#FAF9F6] border border-[#E2DDD1] rounded-xs space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-[#E65B35] font-semibold">
                    Active Typography Stack
                  </div>
                  <h2 className="text-xl font-mono font-bold text-[#242521] mt-0.5">
                    {activeOption.name}
                  </h2>
                </div>

                {/* Pill Switcher */}
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  {FONT_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedOptionId(opt.id)}
                      className={`px-3 py-1.5 rounded-xs transition-colors cursor-pointer border ${
                        selectedOptionId === opt.id
                          ? 'bg-[#E65B35] text-[#FAF9F6] border-[#E65B35] font-semibold shadow-xs'
                          : 'bg-[#F4F1E8] border-[#CCC6B8] text-[#242521] hover:border-[#242521]'
                      }`}
                    >
                      {opt.name.split(':')[0]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E2DDD1] font-mono text-xs">
                <div>
                  <span className="text-[#77766F] block text-[10px] uppercase">Headings Stack</span>
                  <span className="font-semibold text-[#242521]">{activeOption.headingFont}</span>
                </div>
                <div>
                  <span className="text-[#77766F] block text-[10px] uppercase">Body Stack</span>
                  <span className="font-semibold text-[#242521]">{activeOption.bodyFont}</span>
                </div>
                <div>
                  <span className="text-[#77766F] block text-[10px] uppercase">Awwwards Persona</span>
                  <span className="font-semibold text-[#E65B35]">{activeOption.tagline}</span>
                </div>
              </div>
            </div>

            {/* MOCK PORTFOLIO INTERFACE */}
            <div className="bg-[#FAF9F6] border border-[#CCC6B8] rounded-xs shadow-[0_8px_30px_rgba(36,37,33,0.06)] overflow-hidden">
              
              {/* Mock Nav */}
              <div className="h-16 px-8 border-b border-[#E2DDD1] bg-[#F4F1E8] flex items-center justify-between">
                <div className="font-mono text-xs font-bold tracking-[0.16em] uppercase text-[#242521] flex items-center gap-2">
                  <span>ABHAY VISHWAKARMA</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E65B35]" />
                </div>
                <div className="hidden md:flex items-center gap-6 font-mono text-xs uppercase text-[#77766F]">
                  <span className="text-[#242521] font-semibold border-b border-[#E65B35] pb-0.5">Projects</span>
                  <span>Engineering</span>
                  <span>About</span>
                  <span>Experience</span>
                  <span>Contact</span>
                </div>
                <div className="px-2.5 py-1 bg-[#FAF9F6] border border-[#CCC6B8] font-mono text-xs uppercase text-[#242521]">
                  Download Resume
                </div>
              </div>

              {/* Mock Hero Section */}
              <div className="p-8 sm:p-14 border-b border-[#E2DDD1] technical-grid">
                <div className="max-w-3xl space-y-6">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#E65B35] font-semibold flex items-center gap-2">
                    <span>ENGINEERING / AI / ROBOTICS</span>
                    <span className="w-6 h-px bg-[#E65B35]" />
                  </div>

                  <h1 className={`text-4xl sm:text-6xl text-[#242521] font-bold leading-[1.05] ${activeOption.headingClass}`}>
                    Building intelligence beyond the screen.
                  </h1>

                  <p className={`text-base sm:text-lg text-[#77766F] leading-relaxed max-w-2xl ${activeOption.bodyClass}`}>
                    B.Tech student in Artificial Intelligence &amp; Data Science at Thakur College of Engineering and Technology, Mumbai. I build autonomous UAV software, real-time MAVLink telemetry systems, and deterministic self-healing software infrastructure.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button className="px-6 py-3 bg-[#E65B35] text-[#FAF9F6] font-mono text-xs uppercase tracking-wider font-semibold rounded-xs shadow-[0_2px_8px_rgba(230,91,53,0.25)]">
                      Explore Projects &darr;
                    </button>
                    <button className="px-6 py-3 bg-[#FAF9F6] border border-[#CCC6B8] text-[#242521] font-mono text-xs uppercase tracking-wider font-medium rounded-xs">
                      Download Resume
                    </button>
                  </div>
                </div>
              </div>

              {/* Mock Project Showcase Section */}
              <div className="p-8 sm:p-14 border-b border-[#E2DDD1]">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#E2DDD1] mb-10">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#E65B35] font-semibold mb-2">
                      PROJECT SHOWCASE
                    </div>
                    <h2 className={`text-3xl sm:text-4xl text-[#242521] font-bold leading-tight ${activeOption.headingClass}`}>
                      Selected Engineering Systems
                    </h2>
                  </div>
                  <div className="font-mono text-xs text-[#77766F] max-w-xs">
                    Four flagship implementations across UAV avionics, offline neural agency, and tactical ground control.
                  </div>
                </div>

                {/* 2-Card Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Card 1: AIM */}
                  <article className="p-6 bg-[#FAF9F6] border border-[#E2DDD1] rounded-xs space-y-4">
                    <div className="aspect-[16/10] bg-[#EAE6DC] border border-[#CCC6B8] rounded-xs flex items-center justify-center font-mono text-xs text-[#77766F] relative overflow-hidden">
                      <div className="absolute top-3 left-3 bg-[#FAF9F6]/95 border border-[#CCC6B8] px-2.5 py-1 font-mono text-[11px] text-[#242521]">
                        PROJECT 01 // PROTOTYPE
                      </div>
                      <span className="font-mono text-xs text-[#77766F]">Aerial Intelligence Munitions [Hexacopter V2]</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase text-[#77766F]">Autonomous UAV Systems</span>
                      <span className="font-mono text-[10px] uppercase px-2 py-0.5 bg-[#F4F1E8] border border-[#E2DDD1] font-semibold">Prototype</span>
                    </div>

                    <h3 className={`text-2xl text-[#242521] font-bold ${activeOption.headingClass}`}>
                      Aerial Intelligence Munitions
                    </h3>

                    <p className={`text-sm text-[#77766F] leading-relaxed ${activeOption.bodyClass}`}>
                      Two-tier autonomous UAV architecture decoupling high-altitude standoff aerial perception from agile waypoint navigation.
                    </p>

                    <div className="font-mono text-xs text-[#242521] bg-[#F4F1E8] border-l-2 border-[#E65B35] px-3 py-2 rounded-xs">
                      <span className="text-[#E65B35] font-semibold">My role:</span> Lead UAV Systems &amp; Perception Programmer
                    </div>

                    <div className="space-y-2 pt-3 border-t border-[#E2DDD1] font-mono text-xs">
                      <div className="flex items-start gap-2">
                        <span className="text-[#E65B35] font-bold">↳</span>
                        <div><strong>Verification:</strong> Validated hardware-in-the-loop autonomous MAVLink waypoint handover.</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E2DDD1]">
                      {['Python 3.11', 'YOLOv8', 'MAVLink 2.0', 'ArduPilot', 'ESP32'].map((t) => (
                        <span key={t} className="editorial-tag text-[10px]">{t}</span>
                      ))}
                    </div>
                  </article>

                  {/* Card 2: Sentinel GCS */}
                  <article className="p-6 bg-[#FAF9F6] border border-[#E2DDD1] rounded-xs space-y-4">
                    <div className="aspect-[16/10] bg-[#EAE6DC] border border-[#CCC6B8] rounded-xs flex items-center justify-center font-mono text-xs text-[#77766F] relative overflow-hidden">
                      <div className="absolute top-3 left-3 bg-[#FAF9F6]/95 border border-[#CCC6B8] px-2.5 py-1 font-mono text-[11px] text-[#242521]">
                        PROJECT 04 // IN DEVELOPMENT
                      </div>
                      <span className="font-mono text-xs text-[#77766F]">Sentinel GCS [Tactical React 18 / Rust Telemetry]</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase text-[#77766F]">Avionics &amp; Telemetry</span>
                      <span className="font-mono text-[10px] uppercase px-2 py-0.5 bg-[#F4F1E8] border border-[#E2DDD1] font-semibold">In Development</span>
                    </div>

                    <h3 className={`text-2xl text-[#242521] font-bold ${activeOption.headingClass}`}>
                      Sentinel GCS
                    </h3>

                    <p className={`text-sm text-[#77766F] leading-relaxed ${activeOption.bodyClass}`}>
                      Cross-platform tactical UAV ground control station with flight-critical safety interlocks and MapLibre GL 3D terrain.
                    </p>

                    <div className="font-mono text-xs text-[#242521] bg-[#F4F1E8] border-l-2 border-[#E65B35] px-3 py-2 rounded-xs">
                      <span className="text-[#E65B35] font-semibold">My role:</span> Lead Full-Stack &amp; Telemetry Developer
                    </div>

                    <div className="space-y-2 pt-3 border-t border-[#E2DDD1] font-mono text-xs">
                      <div className="flex items-start gap-2">
                        <span className="text-[#242521] font-bold">↳</span>
                        <div><strong>Verification:</strong> 194-test regression suite passing across 15 test suites.</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#E65B35] font-bold">↳</span>
                        <div><strong>Performance:</strong> Verified USB OTG hardware radio bridges up to 921,600 baud.</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E2DDD1]">
                      {['React 18', 'Rust', 'Tauri v2', 'MAVLink 2.0', 'USB OTG'].map((t) => (
                        <span key={t} className="editorial-tag text-[10px]">{t}</span>
                      ))}
                    </div>
                  </article>
                </div>
              </div>

              {/* Mock Engineering Lab Note */}
              <div className="p-8 sm:p-14 bg-[#F4F1E8]">
                <div className="max-w-2xl space-y-3">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#E65B35] font-semibold">
                    THE ENGINEERING LAB // FIELD NOTE
                  </div>
                  <h3 className={`text-2xl text-[#242521] font-bold ${activeOption.headingClass}`}>
                    Embedded Systems &amp; Microcontroller Firmware
                  </h3>
                  <p className={`text-sm text-[#77766F] leading-relaxed ${activeOption.bodyClass}`}>
                    Engineered direct ESP-NOW peer-to-peer radio frames bypassing Wi-Fi AP association to achieve low-latency air-to-air telemetry packet dispatch between UAV airframes.
                  </p>
                  <div className="pt-2 font-mono text-xs text-[#242521] font-semibold uppercase flex items-center gap-1 text-[#E65B35]">
                    <span>Hands-on · Verified in Flight</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: DESIGN EVALUATION MATRIX */}
        {activeTab === 'matrix' && (
          <div className="space-y-8">
            <div className="p-6 bg-[#FAF9F6] border border-[#E2DDD1] rounded-xs">
              <h2 className="text-xl font-mono font-bold text-[#242521] mb-2">
                Typographic Evaluation Matrix for Abhay Vishwakarma
              </h2>
              <p className="text-sm text-[#77766F] font-body leading-relaxed max-w-3xl">
                Analysis of visual tension, screen readability, aerospace personality, and Awwwards styling criteria.
              </p>
            </div>

            <div className="overflow-x-auto border border-[#E2DDD1] rounded-xs bg-[#FAF9F6]">
              <table className="w-full text-left font-mono text-xs border-collapse">
                <thead>
                  <tr className="bg-[#F4F1E8] border-b border-[#E2DDD1] text-[#77766F]">
                    <th className="p-4 uppercase font-semibold">Typographic Stack</th>
                    <th className="p-4 uppercase font-semibold">Aesthetic Profile</th>
                    <th className="p-4 uppercase font-semibold">Visual Tension</th>
                    <th className="p-4 uppercase font-semibold">Screen Readability</th>
                    <th className="p-4 uppercase font-semibold">Aerospace Fit</th>
                    <th className="p-4 uppercase font-semibold">Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2DDD1]">
                  <tr className="bg-[#FAECE7]/30">
                    <td className="p-4 font-bold text-[#E65B35]">
                      Option 2: Space Grotesk + DM Sans
                      <span className="block text-[10px] text-[#77766F] font-normal">Headings: Space Grotesk / Body: DM Sans</span>
                    </td>
                    <td className="p-4 text-[#242521]">Brutalist Aerospace &amp; MAVLink Terminal</td>
                    <td className="p-4 text-[#242521]">Exceptional: squared ink-traps counter smooth body curves</td>
                    <td className="p-4 text-[#242521]">9.8 / 10: DM Sans provides crisp, low-fatigue reading</td>
                    <td className="p-4 text-[#E65B35] font-bold">10 / 10 — Perfect match</td>
                    <td className="p-4 text-[#E65B35] font-bold">Recommended Winner</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#242521]">
                      Option 1: Sora + Inter
                      <span className="block text-[10px] text-[#77766F] font-normal">Headings: Sora / Body: Inter</span>
                    </td>
                    <td className="p-4 text-[#77766F]">Modern Neural Agency &amp; Cybernetic AI</td>
                    <td className="p-4 text-[#77766F]">Very High: geometric roundness meets neutral Inter</td>
                    <td className="p-4 text-[#77766F]">10 / 10: Inter is gold standard UI text</td>
                    <td className="p-4 text-[#77766F]">9 / 10 — High-end software focus</td>
                    <td className="p-4 text-[#242521]">Strong Runner-Up</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#242521]">
                      Option 3: Manrope + IBM Plex Sans
                      <span className="block text-[10px] text-[#77766F] font-normal">Headings: Manrope / Body: IBM Plex Sans</span>
                    </td>
                    <td className="p-4 text-[#77766F]">Industrial Robotics &amp; Enterprise Systems</td>
                    <td className="p-4 text-[#77766F]">Moderate: harmonious geometric family</td>
                    <td className="p-4 text-[#77766F]">9.5 / 10: IBM Plex Sans is ergonomically tested</td>
                    <td className="p-4 text-[#77766F]">8.8 / 10 — Very solid, slightly corporate</td>
                    <td className="p-4 text-[#77766F]">Reliable Classic</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#242521]">
                      Option 4: Syne + Inter
                      <span className="block text-[10px] text-[#77766F] font-normal">Headings: Syne / Body: Inter</span>
                    </td>
                    <td className="p-4 text-[#77766F]">Avant-Garde Architectural &amp; Studio Design</td>
                    <td className="p-4 text-[#77766F]">Extreme: hyper-sculptural headlines</td>
                    <td className="p-4 text-[#77766F]">9.5 / 10 (Inter) / Headings require wide space</td>
                    <td className="p-4 text-[#77766F]">8.5 / 10 — High fashion, less telemetry-grounded</td>
                    <td className="p-4 text-[#77766F]">Awwwards Showcase Choice</td>
                  </tr>
                  <tr className="bg-[#FAF9F6]">
                    <td className="p-4 font-bold text-[#77766F]">
                      Current: Instrument Serif + IBM Plex Sans
                      <span className="block text-[10px] text-[#77766F] font-normal">Headings: Instrument Serif / Body: IBM Plex Sans</span>
                    </td>
                    <td className="p-4 text-[#77766F]">Literary Journal / Bookish Editorial</td>
                    <td className="p-4 text-[#77766F]">High, but traditional serif contrast</td>
                    <td className="p-4 text-[#77766F]">9.0 / 10</td>
                    <td className="p-4 text-[#77766F]">6.5 / 10 — Clashes with autonomous drones &amp; hardware</td>
                    <td className="p-4 text-[#77766F]">Replace with Option 2</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Recommendation Deep-Dive Callout */}
            <div className="p-8 bg-[#FAF9F6] border-l-4 border-[#E65B35] border-y border-r border-[#E2DDD1] rounded-xs space-y-4">
              <div className="font-mono text-xs uppercase tracking-wider text-[#E65B35] font-semibold flex items-center gap-2">
                <Check size={16} />
                <span>Executive Recommendation: Option 2 (Space Grotesk + DM Sans)</span>
              </div>
              <h3 className="font-space-grotesk text-2xl font-bold text-[#242521]">
                Why Space Grotesk + DM Sans transforms your portfolio into an Awwwards-grade engineering artifact
              </h3>
              <div className="space-y-3 text-sm text-[#77766F] leading-relaxed font-dm-sans">
                <p>
                  <strong>1. Grounded in Aerospace &amp; Telemetry Heritage:</strong> Space Grotesk was derived directly from Space Mono, designed to bridge proportional display typography with raw monospace terminal aesthetics. When combined with your hardware projects (MAVLink 2.0 at 921,600 baud, ArduPilot SITL, ESP32 relays, and WGS-84 ellipsoids), it feels authentically machined and engineered, rather than decorated.
                </p>
                <p>
                  <strong>2. Elimination of the &ldquo;Literary Arts&rdquo; Clash:</strong> Your current Instrument Serif italic communicates bookish or fashion-editorial sensibilities. Space Grotesk completely eliminates that friction, delivering clean, rigid, masculine engineering power without sacrificing elegance.
                </p>
                <p>
                  <strong>3. DM Sans as the Ideal Companion:</strong> While Space Grotesk commands attention on large titles, DM Sans handles dense multi-paragraph descriptions with neutral, low-contrast geometric geometry that prevents visual fatigue on screens.
                </p>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
