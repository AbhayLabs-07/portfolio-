'use client';

import { motion } from 'framer-motion';
import { SKILL_DOMAINS } from '@/data/skills';

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative border-t border-[#1E2630]"
      aria-labelledby="skills-heading"
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
              Capabilities
            </span>
            <span className="accent-line" aria-hidden />
          </div>
          <h2
            id="skills-heading"
            className="text-[clamp(2.25rem,5vw,3.5rem)] font-display font-bold text-[#F7F8FA] leading-[1.1] tracking-tight"
          >
            Technical Skills
          </h2>
        </motion.div>

        {/* Domain grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_DOMAINS.map((domain, i) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: 'easeOut',
              }}
              className="bg-[#191F27] border border-[#252D38] p-6 hover:border-[#D62828]/20 transition-colors duration-200"
            >
              <h3 className="font-display font-semibold text-[#F7F8FA] mb-1 text-base">
                {domain.title}
              </h3>
              <p className="text-xs text-[#5A6472] leading-relaxed mb-5">
                {domain.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {domain.skills.map((skill) => (
                  <span key={skill.name} className="tech-tag">
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
