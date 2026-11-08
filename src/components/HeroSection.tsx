'use client';

import { ArrowDown, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons';
import { PortraitCard } from '@/components/PortraitCard';

export function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex flex-col justify-center pt-24 pb-16 md:pt-32 md:pb-20 border-b border-[#E2DDD1] technical-grid"
      aria-label="Introduction and Portfolio"
    >
      <div className="section-container">
        {/* Editorial 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Statement, Name & Narrative */}
          <div className="flex flex-col justify-between space-y-8">
            <div>
              {/* Category Lead */}
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#E65B35] font-semibold mb-3 flex items-center gap-2">
                <span>ENGINEERING / AI / ROBOTICS</span>
                <span className="w-6 h-px bg-[#E65B35]" />
              </div>

              {/* Large Name */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-medium text-[#242521] tracking-tight mb-4">
                Abhay Vishwakarma
              </h1>

              {/* Headline with Instrument Serif — No quote marks */}
              <h2 className="text-[clamp(2.75rem,5.2vw,4.5rem)] font-display italic text-[#242521] leading-[1.02] tracking-tight mb-6">
                Building intelligence beyond the screen.
              </h2>

              {/* Merged Intro Paragraph */}
              <p className="text-base sm:text-lg text-[#77766F] font-body leading-relaxed max-w-xl">
                B.Tech student in AI &amp; Data Science at Thakur College of Engineering and Technology, Mumbai. I build UAV software, embedded systems, and reliable AI infrastructure.
              </p>
            </div>

            {/* Actions & Annotations */}
            <div className="space-y-8 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToProjects}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#E65B35] hover:bg-[#CF4D29] text-[#FAF9F6] text-xs font-mono uppercase tracking-wider font-semibold rounded-xs transition-colors duration-150 cursor-pointer shadow-[0_2px_8px_rgba(230,91,53,0.2)] focus-visible:outline-[#E65B35]"
                >
                  <span>Explore Projects</span>
                  <ArrowDown size={14} aria-hidden />
                </button>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FAF9F6] border border-[#CCC6B8] hover:border-[#242521] text-[#242521] text-xs font-mono uppercase tracking-wider font-medium rounded-xs transition-colors duration-150 focus-visible:outline-[#E65B35]"
                >
                  <FileText size={14} className="text-[#77766F]" aria-hidden />
                  <span>Download Resume</span>
                </a>

                {/* Social Icon Links */}
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/AbhayLabs-07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#FAF9F6] border border-[#CCC6B8] hover:border-[#242521] text-[#242521] hover:text-[#E65B35] rounded-xs transition-colors focus-visible:outline-[#E65B35]"
                    aria-label="GitHub Profile (opens in new tab)"
                  >
                    <GithubIcon size={16} />
                  </a>
                  <a
                    href="https://linkedin.com/in/abhay-vishwakarma-6a64153b2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#FAF9F6] border border-[#CCC6B8] hover:border-[#315D80] text-[#242521] hover:text-[#315D80] rounded-xs transition-colors focus-visible:outline-[#E65B35]"
                    aria-label="LinkedIn Profile (opens in new tab)"
                  >
                    <LinkedinIcon size={16} />
                  </a>
                </div>
              </div>

              {/* Subtle Technical Annotation */}
              <div className="pt-6 border-t border-[#E2DDD1] flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-[#77766F]">
                <div>
                  <span className="text-[#242521] font-semibold">Mumbai, India</span> · AI &amp; Data Science
                </div>
                <div className="text-[11px] uppercase tracking-wider">
                  Engineering Portfolio / 2026
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Card */}
          <div className="flex justify-center lg:justify-end">
            <PortraitCard priority={true} />
          </div>

        </div>
      </div>
    </section>
  );
}
