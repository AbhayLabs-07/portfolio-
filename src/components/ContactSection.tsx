'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative border-t border-[#1E2630]"
      aria-labelledby="contact-heading"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs tracking-[0.2em] text-[#D62828] uppercase">
                Contact
              </span>
              <span className="accent-line" aria-hidden />
            </div>
            <h2
              id="contact-heading"
              className="text-[clamp(2.25rem,5vw,3.5rem)] font-display font-bold text-[#F7F8FA] leading-[1.1] tracking-tight mb-6"
            >
              Get in touch
            </h2>
            <p className="text-[#9BA3AE] text-[1.0625rem] leading-relaxed max-w-sm">
              For project discussions, collaboration, or any enquiry — reach me
              through GitHub or LinkedIn. I respond to relevant messages.
            </p>

            {/* Note about contact info */}
            <p className="mt-4 text-xs text-[#5A6472] font-mono leading-relaxed">
              * No public email is listed. Reach out via the links below.
            </p>
          </motion.div>

          {/* Right — link cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-col gap-4"
          >
            <a
              href="https://github.com/AbhayLabs-07"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 bg-[#191F27] border border-[#252D38] hover:border-[#D62828]/30 transition-colors duration-200 focus-visible:outline-[#D62828] rounded-sm"
              aria-label="GitHub profile — AbhayLabs-07 (opens in new tab)"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#0E1318] border border-[#252D38] flex items-center justify-center">
                  <GithubIcon size={18} className="text-[#9BA3AE]" />
                </div>
                <div>
                  <div className="font-display font-semibold text-[#F7F8FA] text-sm mb-0.5">
                    GitHub
                  </div>
                  <div className="font-mono text-xs text-[#5A6472]">
                    github.com/AbhayLabs-07
                  </div>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-[#5A6472] group-hover:text-[#F7F8FA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"
                aria-hidden
              />
            </a>

            <a
              href="https://linkedin.com/in/abhay-vishwakarma-6a64153b2"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 bg-[#191F27] border border-[#252D38] hover:border-[#1560D4]/30 transition-colors duration-200 focus-visible:outline-[#D62828] rounded-sm"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#0E1318] border border-[#252D38] flex items-center justify-center">
                  <LinkedinIcon size={18} className="text-[#9BA3AE]" />
                </div>
                <div>
                  <div className="font-display font-semibold text-[#F7F8FA] text-sm mb-0.5">
                    LinkedIn
                  </div>
                  <div className="font-mono text-xs text-[#5A6472]">
                    Abhay Vishwakarma
                  </div>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-[#5A6472] group-hover:text-[#F7F8FA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"
                aria-hidden
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
