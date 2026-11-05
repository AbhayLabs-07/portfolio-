'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowUpRight, ChevronRight } from 'lucide-react';
import { PROJECTS, type Project } from '@/data/projects';

// Architecture diagram for RecoverOps AI
function ArchDiagram() {
  const nodes = ['FailureSimulator', 'RecoveryManager', 'Verifier', 'Storage'];
  return (
    <div className="my-6 p-5 bg-[#0E1318] border border-[#1E2630] rounded-sm" aria-label="RecoverOps AI architecture diagram">
      <div className="font-mono text-xs text-[#5A6472] mb-4 tracking-wide uppercase">Architecture — Phase 1</div>
      <div className="flex flex-col gap-0">
        <div className="flex items-center gap-2 mb-0.5">
          <div className="font-mono text-xs text-[#1560D4] font-medium px-2 py-1 bg-[#0D3A80]/30 border border-[#1560D4]/30 rounded-sm">
            WorkflowExecutor
          </div>
        </div>
        {nodes.map((node) => (
          <div key={node} className="flex items-center gap-2">
            <div className="w-px h-5 bg-[#252D38] ml-3" aria-hidden />
            <div className="font-mono text-[0.6875rem] text-[#9BA3AE] px-2 py-1 bg-[#191F27] border border-[#252D38] rounded-sm flex items-center gap-2">
              <ChevronRight size={10} className="text-[#5A6472]" aria-hidden />
              {node}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Status badge
function StatusBadge({ status }: { status: Project['status'] }) {
  const colors: Record<Project['status'], string> = {
    'Phase 1': 'text-[#1560D4] border-[#1560D4]/30 bg-[#0D3A80]/20',
    'Prototype': 'text-[#9BA3AE] border-[#252D38] bg-[#191F27]',
    'Live': 'text-emerald-400 border-emerald-400/30 bg-emerald-900/20',
    'In development': 'text-amber-400 border-amber-400/30 bg-amber-900/20',
  };
  return (
    <span
      className={`font-mono text-[0.6875rem] tracking-wide px-2.5 py-1 border rounded-sm ${colors[status]}`}
      aria-label={`Status: ${status}`}
    >
      {status}
    </span>
  );
}

// Project modal
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap
  useEffect(() => {
    const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    first?.focus();

    const trap = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key !== 'Tab') return;
      if (!focusable || focusable.length === 0) return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener('keydown', trap);
    return () => document.removeEventListener('keydown', trap);
  }, [onClose]);

  // Scroll lock
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0A0D11]/90 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* Panel */}
      <motion.div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-title-${project.id}`}
        className="relative z-10 w-full sm:max-w-2xl max-h-[90vh] bg-[#191F27] border border-[#252D38] rounded-t-2xl sm:rounded-sm overflow-y-auto"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#191F27] border-b border-[#252D38] px-6 py-4 flex items-start justify-between gap-4 z-10">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[0.625rem] text-[#5A6472] tracking-widest uppercase">
                Project {project.index.toString().padStart(2, '0')}
              </span>
            </div>
            <h2
              id={`modal-title-${project.id}`}
              className="font-display font-bold text-xl text-[#F7F8FA] leading-tight"
            >
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#5A6472] hover:text-[#F7F8FA] transition-colors duration-150 rounded focus-visible:outline-[#D62828] flex-shrink-0 mt-0.5"
            aria-label="Close project details"
          >
            <X size={18} aria-hidden />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-6">
          {/* Status + role */}
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} />
            <span className="font-mono text-xs text-[#5A6472]">{project.role} · {project.context}</span>
          </div>

          {/* Tagline */}
          <p className="text-[#F7F8FA] font-medium text-base leading-snug border-l-2 border-[#D62828] pl-4">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-[#9BA3AE] text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Architecture diagram for RecoverOps */}
          {project.id === 'recoverops-ai' && <ArchDiagram />}

          {/* Highlights */}
          <div>
            <h3 className="font-mono text-xs text-[#5A6472] tracking-wide uppercase mb-3">
              Highlights
            </h3>
            <ul className="space-y-3">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-sm text-[#9BA3AE] leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-[#D62828] flex-shrink-0" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <h3 className="font-mono text-xs text-[#5A6472] tracking-wide uppercase mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-2 border-t border-[#1E2630]">
            {project.links.map((link) => {
              const isPrivate = link.label.includes('private');
              const isLive = link.label === 'Live Site';
              return (
                <a
                  key={link.href}
                  href={isPrivate ? undefined : link.href}
                  target={link.external && !isPrivate ? '_blank' : undefined}
                  rel={link.external && !isPrivate ? 'noopener noreferrer' : undefined}
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-[#D62828] rounded ${
                    isPrivate
                      ? 'text-[#5A6472] pointer-events-none cursor-default px-4 py-2 border border-[#1E2630]'
                      : isLive
                      ? 'px-4 py-2 bg-[#D62828] text-[#F7F8FA] hover:bg-[#B82020]'
                      : 'px-4 py-2 border border-[#252D38] text-[#9BA3AE] hover:text-[#F7F8FA] hover:border-[#9BA3AE]'
                  }`}
                  aria-label={`${link.label}${link.external && !isPrivate ? ' (opens in new tab)' : ''}`}
                  aria-disabled={isPrivate}
                >
                  {link.label}
                  {link.external && !isPrivate && (
                    <ExternalLink size={13} aria-hidden />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Project card
function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: (p: Project) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group relative bg-[#191F27] border border-[#252D38] hover:border-[#D62828]/30 transition-colors duration-200 cursor-pointer h-full"
      onClick={() => onClick(project)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(project); }}}
      tabIndex={0}
      role="button"
      aria-label={`View details: ${project.title}`}
    >
      {/* Top accent */}
      <div
        className={`h-px w-full ${
          project.accentColor === 'red'
            ? 'bg-gradient-to-r from-[#D62828] via-[#D62828]/30 to-transparent'
            : 'bg-gradient-to-r from-[#1560D4] via-[#1560D4]/30 to-transparent'
        }`}
        aria-hidden
      />

      <div className="p-6 md:p-8">
        {/* Number + status */}
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-[0.625rem] text-[#5A6472] tracking-widest">
            {project.index.toString().padStart(2, '0')}
          </span>
          <StatusBadge status={project.status} />
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl text-[#F7F8FA] leading-tight mb-3 group-hover:text-white transition-colors duration-150">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-sm text-[#9BA3AE] leading-relaxed mb-5 line-clamp-2">
          {project.tagline}
        </p>

        {/* Tech tags — first 4 */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
          {project.tech.length > 4 && (
            <span className="tech-tag text-[#5A6472]">+{project.tech.length - 4}</span>
          )}
        </div>

        {/* Open detail */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#5A6472] font-mono">{project.role}</span>
          <span className="flex items-center gap-1 text-xs font-medium text-[#9BA3AE] group-hover:text-[#F7F8FA] transition-colors duration-150">
            Details
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" aria-hidden />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleClose = useCallback(() => setActiveProject(null), []);

  return (
    <section
      id="projects"
      className="relative border-t border-[#1E2630]"
      aria-labelledby="projects-heading"
    >
      <div className="section-container">
        {/* Heading row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs tracking-[0.2em] text-[#D62828] uppercase">
              Projects
            </span>
            <span className="accent-line" aria-hidden />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2
              id="projects-heading"
              className="text-[clamp(2.25rem,5vw,3.5rem)] font-display font-bold text-[#F7F8FA] leading-[1.1] tracking-tight"
            >
              Featured Work
            </h2>
            <p className="text-sm text-[#5A6472] font-mono max-w-xs">
              Five projects — click any card for full detail
            </p>
          </div>
        </motion.div>

        {/* Grid — 5 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1E2630]">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={
                project.index === 5
                  ? 'md:col-span-2 bg-[#12181F]'
                  : 'bg-[#12181F]'
              }
            >
              <ProjectCard project={project} onClick={setActiveProject} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal portal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  );
}
