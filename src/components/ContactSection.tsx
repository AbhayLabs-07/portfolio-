'use client';

import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative border-b border-[#E2DDD1] bg-[#FAF9F6] py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="section-container">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-6">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#E65B35] font-semibold flex items-center gap-2">
            <span>DIRECT INQUIRIES &amp; COLLABORATION</span>
            <span className="w-8 h-px bg-[#E65B35]" />
          </div>

          <h2
            id="contact-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#242521] tracking-tight leading-tight"
          >
            Have an interesting engineering problem?
          </h2>

          <p className="text-base sm:text-lg text-[#77766F] font-body leading-relaxed max-w-2xl">
            I build autonomous UAV software, embedded systems, and reliable AI infrastructure. Open to technical collaborations and engineering discussions.
          </p>

          {/* Clean Interactive Contact Icons */}
          <div className="flex items-center gap-3 pt-4">
            <a
              href="mailto:abhayvishwakarma200007@gmail.com"
              className="group p-4 bg-[#F4F1E8] hover:bg-[#FAF9F6] border border-[#E2DDD1] hover:border-[#E65B35] text-[#242521] hover:text-[#E65B35] rounded-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs focus-visible:outline-[#E65B35]"
              aria-label="Direct Email (abhayvishwakarma200007@gmail.com)"
            >
              <Mail size={20} className="transition-transform duration-200 group-hover:scale-110" />
              <span className="sr-only">Direct Email</span>
            </a>

            <a
              href="https://github.com/AbhayLabs-07"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-[#F4F1E8] hover:bg-[#FAF9F6] border border-[#E2DDD1] hover:border-[#242521] text-[#242521] hover:text-[#E65B35] rounded-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs focus-visible:outline-[#E65B35]"
              aria-label="GitHub Repositories (opens in new tab)"
            >
              <GithubIcon size={20} className="transition-transform duration-200 group-hover:scale-110" />
              <span className="sr-only">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/abhay-vishwakarma-6a64153b2"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-[#F4F1E8] hover:bg-[#FAF9F6] border border-[#E2DDD1] hover:border-[#315D80] text-[#242521] hover:text-[#315D80] rounded-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs focus-visible:outline-[#E65B35]"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              <LinkedinIcon size={20} className="transition-transform duration-200 group-hover:scale-110" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
