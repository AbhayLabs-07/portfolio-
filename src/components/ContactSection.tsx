'use client';

import { ArrowUpRight, Mail, FileText } from 'lucide-react';
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
        <div className="pb-12 border-b border-[#E2DDD1] mb-16">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#E65B35] font-semibold mb-3 flex items-center gap-2">
            <span>DIRECT INQUIRIES &amp; COLLABORATION</span>
            <span className="w-8 h-px bg-[#E65B35]" />
          </div>
          <h2
            id="contact-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-display italic text-[#242521] tracking-tight leading-tight max-w-3xl mb-4"
          >
            Have an interesting engineering problem?
          </h2>
          <p className="text-base sm:text-lg text-[#77766F] font-body max-w-2xl leading-relaxed">
            I&apos;m looking for internships and collaborations in robotics, embedded systems, and AI. If you&apos;re working on something in UAV software or edge vision, I&apos;d like to hear about it.
          </p>
        </div>

        {/* 2-Column Contact Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          
          {/* Primary Channels: Email, LinkedIn, GitHub */}
          <div className="space-y-4">
            
            {/* Email Card */}
            <a
              href="mailto:abhayvishwakarma200007@gmail.com"
              className="group p-5 sm:p-6 bg-[#F4F1E8] border border-[#E2DDD1] hover:border-[#E65B35] rounded-xs flex items-center justify-between transition-colors focus-visible:outline-[#E65B35]"
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="p-3 bg-[#FAF9F6] border border-[#E2DDD1] text-[#E65B35] rounded-xs shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-xs uppercase text-[#77766F] tracking-wider">
                    Direct Email
                  </div>
                  <div className="font-mono text-xs sm:text-base font-semibold text-[#242521] mt-0.5 group-hover:text-[#E65B35] transition-colors break-all">
                    abhayvishwakarma200007@gmail.com
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[#77766F] group-hover:text-[#E65B35] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/abhay-vishwakarma-6a64153b2"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 sm:p-6 bg-[#F4F1E8] border border-[#E2DDD1] hover:border-[#315D80] rounded-xs flex items-center justify-between transition-colors focus-visible:outline-[#E65B35]"
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="p-3 bg-[#FAF9F6] border border-[#E2DDD1] text-[#315D80] rounded-xs shrink-0">
                  <LinkedinIcon size={18} />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-xs uppercase text-[#77766F] tracking-wider">
                    Professional Network
                  </div>
                  <div className="font-mono text-xs sm:text-base font-semibold text-[#242521] mt-0.5 group-hover:text-[#315D80] transition-colors break-all">
                    linkedin.com/in/abhay-vishwakarma-6a64153b2
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[#77766F] group-hover:text-[#315D80] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/AbhayLabs-07"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 sm:p-6 bg-[#F4F1E8] border border-[#E2DDD1] hover:border-[#242521] rounded-xs flex items-center justify-between transition-colors focus-visible:outline-[#E65B35]"
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="p-3 bg-[#FAF9F6] border border-[#E2DDD1] text-[#242521] rounded-xs shrink-0">
                  <GithubIcon size={18} />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-xs uppercase text-[#77766F] tracking-wider">
                    Code Repositories
                  </div>
                  <div className="font-mono text-xs sm:text-base font-semibold text-[#242521] mt-0.5 group-hover:text-[#E65B35] transition-colors break-all">
                    github.com/AbhayLabs-07
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[#77766F] group-hover:text-[#242521] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
            </a>
          </div>

          {/* Right Column: Geographic Base & Resume Download */}
          <div className="p-8 bg-[#F4F1E8] border border-[#E2DDD1] rounded-xs space-y-6 font-mono text-xs">
            <div>
              <div className="text-[#E65B35] font-semibold uppercase tracking-wider mb-1">
                Geographic Location
              </div>
              <div className="text-sm font-semibold text-[#242521]">
                Mumbai, Maharashtra, India
              </div>
              <div className="text-[#77766F] mt-1">
                Timezone: Indian Standard Time (IST / UTC+05:30)
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2DDD1]">
              <div className="text-[#77766F] uppercase tracking-wider mb-1 font-semibold">
                Engineering Availability
              </div>
              <p className="text-[#242521] font-body text-xs leading-relaxed">
                Open to technical internships, engineering appointments, and collaborative robotics/avionics development.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E2DDD1]">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#242521] hover:bg-[#E65B35] text-[#FAF9F6] uppercase tracking-wider font-semibold rounded-xs transition-colors focus-visible:outline-[#E65B35]"
              >
                <FileText size={14} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
