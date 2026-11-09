'use client';

import { useMemo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TIMELINE_ENTRIES, type TimelineEntry } from '@/data/experience';

export function ExperienceSection() {
  // Sort experience entries in strict reverse-chronological order by start date
  const sortedEntries = useMemo(() => {
    return [...TIMELINE_ENTRIES].sort((a, b) => {
      const timeA = new Date(a.startDate).getTime();
      const timeB = new Date(b.startDate).getTime();
      return timeB - timeA;
    });
  }, []);

  return (
    <section
      id="experience"
      className="relative border-b border-[#E2DDD1] bg-[#F4F1E8] py-20 md:py-28"
      aria-labelledby="experience-heading"
    >
      <div className="section-container">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E2DDD1] mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#E65B35] font-semibold mb-3 flex items-center gap-2">
              <span>CHRONOLOGY &amp; TRACK RECORD</span>
              <span className="w-8 h-px bg-[#E65B35]" />
            </div>
            <h2
              id="experience-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-display italic text-[#242521] tracking-tight leading-tight"
            >
              Experience &amp; Education
            </h2>
          </div>
          <div className="font-mono text-xs text-[#77766F] max-w-sm">
            Academic degree program, systems architecture research, open-source aerospace avionics, and collegiate robotics engineering.
          </div>
        </div>

        {/* Clean Editorial Timeline */}
        <div className="space-y-12">
          {sortedEntries.map((entry: TimelineEntry) => {
            const orgDisplay =
              entry.organization && entry.organization.trim().length > 0
                ? entry.organization
                : 'Software Developer & Drone Specialist Internship';

            return (
              <div
                key={entry.id}
                className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-12 pb-12 border-b border-[#E2DDD1] last:border-b-0 last:pb-0"
              >
                {/* Left Column: Metadata */}
                <div className="space-y-2 font-mono">
                  <div className="text-xs uppercase tracking-wider text-[#E65B35] font-semibold">
                    {entry.category}
                  </div>
                  <div className="text-sm font-semibold text-[#242521]">
                    {entry.date}
                  </div>
                  <div className="text-xs text-[#77766F]">
                    {orgDisplay}
                  </div>
                </div>

                {/* Right Column: Role & Narrative */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display italic text-2xl sm:text-3xl text-[#242521]">
                      {entry.position}
                    </h3>
                    {entry.link && (
                      <a
                        href={entry.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-[#77766F] hover:text-[#242521] transition-colors focus-visible:outline-[#E65B35]"
                        aria-label={`${entry.position} ${entry.link.label} (opens in new tab)`}
                      >
                        <span>{entry.link.label}</span>
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>

                  <p className="text-base text-[#77766F] leading-relaxed font-body">
                    {entry.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-1.5 pt-2 font-mono text-xs text-[#242521]">
                    {entry.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="text-[#E65B35]">↳</span>
                        <span className="leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
