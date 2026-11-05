'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 grid-pattern opacity-30 pointer-events-none"
        aria-hidden
      />

      {/* Gradient mesh */}
      <div className="mesh-bg" aria-hidden />

      {/* Red vertical accent line */}
      <div
        className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#D62828]/40 to-transparent hidden lg:block"
        aria-hidden
      />

      <div className="section-container relative z-10 flex flex-col justify-center min-h-screen py-24">
        {/* Pre-heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-[#D62828] uppercase">
            AI & Data Science Engineer
          </span>
          <span className="accent-line" aria-hidden />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-[clamp(3rem,8vw,6.5rem)] font-display font-bold text-[#F7F8FA] leading-[1.0] tracking-[-0.03em] mb-6"
        >
          Abhay
          <br />
          <span className="text-[#9BA3AE]">Vishwakarma</span>
        </motion.h1>

        {/* Descriptor */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
          className="max-w-[520px] text-[1.0625rem] leading-[1.6] text-[#9BA3AE] mb-10"
        >
          Building desktop AI agents, deterministic workflow engines,
          cooperative UAV systems, and institutional web platforms.
          B.Tech AI&nbsp;&amp;&nbsp;Data Science at TCET, Mumbai.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#D62828] text-[#F7F8FA] text-sm font-semibold font-display rounded-sm hover:bg-[#B82020] active:bg-[#9A1A1A] transition-colors duration-150 focus-visible:outline-[#D62828] focus-visible:outline-offset-2"
          >
            View Projects
            <ArrowDown size={15} aria-hidden />
          </a>
          <a
            href="https://github.com/AbhayLabs-07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 border border-[#252D38] text-[#9BA3AE] text-sm font-medium rounded-sm hover:border-[#9BA3AE] hover:text-[#F7F8FA] transition-colors duration-150 focus-visible:outline-[#D62828]"
            aria-label="GitHub (opens in new tab)"
          >
            <GithubIcon size={15} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/abhay-vishwakarma-6a64153b2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 border border-[#252D38] text-[#9BA3AE] text-sm font-medium rounded-sm hover:border-[#9BA3AE] hover:text-[#F7F8FA] transition-colors duration-150 focus-visible:outline-[#D62828]"
            aria-label="LinkedIn (opens in new tab)"
          >
            <LinkedinIcon size={15} />
            LinkedIn
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
          className="flex flex-wrap gap-8 border-t border-[#1E2630] pt-8"
        >
          {[
            { value: '5', label: 'Projects' },
            { value: 'AI + UAV + Web', label: 'Domains' },
            { value: 'TCET Mumbai', label: 'Institution' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display font-bold text-xl text-[#F7F8FA] mb-0.5">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-[#5A6472] tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#5A6472]"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
