'use client';

import Image from 'next/image';
import { ArrowUpRight, ImageIcon } from 'lucide-react';
import { GithubIcon } from '@/components/icons/SocialIcons';
import { PROJECTS, type Project } from '@/data/projects';

interface ProjectScreenshotPlaceholderProps {
  project: Project;
}

function ProjectScreenshotFrame({ project }: ProjectScreenshotPlaceholderProps) {
  if (project.hasRealScreenshot && project.coverImage) {
    return (
      <div className="relative aspect-[16/10] w-full bg-[#EAE6DC] border border-[#CCC6B8] rounded-xs overflow-hidden group">
        <Image
          src={project.coverImage}
          alt={`${project.title} photographic documentation`}
          fill
          className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
          sizes="(max-width: 1024px) 100vw, 600px"
        />
        <div className="absolute top-3 left-3 bg-[#FAF9F6]/95 border border-[#CCC6B8] px-2.5 py-1 font-mono text-[11px] text-[#242521]">
          PROJECT {project.number} {'//'} {project.status.toUpperCase()}
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] w-full bg-[#F4F1E8] border border-dashed border-[#CCC6B8] rounded-xs flex flex-col items-center justify-center p-6 text-center select-none technical-grid">
      <div className="p-3 bg-[#FAF9F6] border border-[#E2DDD1] text-[#77766F] rounded-xs mb-3">
        <ImageIcon size={22} className="text-[#E65B35]" />
      </div>
      <div className="font-mono text-xs font-semibold text-[#E65B35] tracking-wide mb-1">
        &#123;&#123;TODO: screenshot&#125;&#125;
      </div>
      <div className="font-mono text-[11px] text-[#77766F]">
        UI screenshot placeholder ({project.title})
      </div>
      <div className="absolute top-3 left-3 bg-[#FAF9F6]/95 border border-[#CCC6B8] px-2.5 py-1 font-mono text-[11px] text-[#242521]">
        PROJECT {project.number} {'//'} {project.status.toUpperCase()}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative border-b border-[#E2DDD1] bg-[#FAF9F6] py-20 md:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="section-container">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E2DDD1] mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#E65B35] font-semibold mb-3 flex items-center gap-2">
              <span>PROJECT SHOWCASE</span>
              <span className="w-8 h-px bg-[#E65B35]" />
            </div>
            <h2
              id="projects-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-display italic text-[#242521] tracking-tight leading-tight"
            >
              Selected Engineering Systems
            </h2>
          </div>
          <div className="font-mono text-xs text-[#77766F] max-w-sm">
            Four flagship implementations across autonomous UAV perception, offline neural agency, deterministic workflows, and tactical ground control.
          </div>
        </div>

        {/* 2x2 Grid of Uniform Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between bg-[#FAF9F6] border border-[#E2DDD1] p-6 sm:p-8 rounded-xs hover:border-[#CCC6B8] transition-colors"
            >
              <div className="space-y-6">
                {/* Visual Panel */}
                <ProjectScreenshotFrame project={project} />

                {/* Header & Category */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs text-[#77766F] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 bg-[#F4F1E8] border border-[#E2DDD1] text-[#242521] rounded-xs font-semibold">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="font-display italic text-2xl sm:text-3xl text-[#242521] leading-tight mb-2">
                    {project.title}
                  </h3>

                  {/* One-Line Description */}
                  <p className="text-sm sm:text-base text-[#77766F] font-body leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* One-Line My Role */}
                  <div className="font-mono text-xs text-[#242521] bg-[#F4F1E8] border-l-2 border-[#E65B35] px-3 py-2 rounded-xs mb-6">
                    <span className="text-[#E65B35] font-semibold">My role:</span>{' '}
                    <span>{project.role}</span>
                  </div>

                  {/* Structured 3 Bullets: What it does, What I built, Measurable result */}
                  <div className="space-y-3 pt-4 border-t border-[#E2DDD1] mb-6 font-mono text-xs">
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#E65B35] font-bold text-sm leading-none mt-0.5">↳</span>
                      <div className="text-[#242521] leading-relaxed">
                        <strong className="text-[#77766F] uppercase text-[10px] block tracking-wider">
                          What it does
                        </strong>
                        {project.bullets.whatItDoes}
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <span className="text-[#315D80] font-bold text-sm leading-none mt-0.5">↳</span>
                      <div className="text-[#242521] leading-relaxed">
                        <strong className="text-[#77766F] uppercase text-[10px] block tracking-wider">
                          What I built
                        </strong>
                        {project.bullets.whatIBuilt}
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <span className="text-[#242521] font-bold text-sm leading-none mt-0.5">↳</span>
                      <div className="text-[#242521] leading-relaxed">
                        <strong className="text-[#77766F] uppercase text-[10px] block tracking-wider">
                          Measurable result
                        </strong>
                        {project.bullets.measurableResult}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E2DDD1]">
                    {project.tech.map((t) => (
                      <span key={t} className="editorial-tag text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links (No Dead or Disabled Case Study Buttons) */}
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-[#E2DDD1]">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#242521] hover:bg-[#E65B35] text-[#FAF9F6] text-xs font-mono uppercase tracking-wider font-semibold rounded-xs transition-colors focus-visible:outline-[#E65B35]"
                    aria-label={`${project.title} ${link.label} (opens in new tab)`}
                  >
                    <GithubIcon size={14} />
                    <span>{link.label}</span>
                    <ArrowUpRight size={12} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
