'use client';

import { motion } from 'framer-motion';
import { EXPERIENCE } from '@/data/experience';
import { GraduationCap, Cpu } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  'erc-tcet': Cpu,
  'tcet': GraduationCap,
};

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative border-t border-[#1E2630]"
      aria-labelledby="experience-heading"
    >
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs tracking-[0.2em] text-[#D62828] uppercase">
              Background
            </span>
            <span className="accent-line" aria-hidden />
          </div>
          <h2
            id="experience-heading"
            className="text-[clamp(2.25rem,5vw,3.5rem)] font-display font-bold text-[#F7F8FA] leading-[1.1] tracking-tight"
          >
            Experience &amp; Education
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical rule */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-[#1E2630] hidden md:block"
            aria-hidden
          />

          <div className="space-y-10">
            {EXPERIENCE.map((item, i) => {
              const Icon = ICONS[item.id] ?? Cpu;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: 'easeOut',
                  }}
                  className="md:pl-16 relative"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#191F27] border border-[#252D38] hidden md:flex items-center justify-center"
                    aria-hidden
                  >
                    <Icon size={16} className="text-[#D62828]" />
                  </div>

                  {/* Card */}
                  <div className="bg-[#191F27] border border-[#252D38] p-6 md:p-8">
                    {/* Period */}
                    <div className="font-mono text-xs text-[#5A6472] tracking-wide mb-3">
                      {item.period}
                    </div>

                    {/* Role */}
                    <h3 className="font-display font-semibold text-lg text-[#F7F8FA] mb-1">
                      {item.role}
                    </h3>
                    <div className="text-sm text-[#1560D4] mb-4 font-medium">
                      {item.org}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#9BA3AE] leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2.5">
                      {item.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-sm text-[#9BA3AE] leading-relaxed"
                        >
                          <span
                            className="mt-1.5 w-1 h-1 rounded-full bg-[#D62828] flex-shrink-0"
                            aria-hidden
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
