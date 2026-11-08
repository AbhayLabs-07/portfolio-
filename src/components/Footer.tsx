import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons';

export function Footer() {
  return (
    <footer
      className="border-t border-[#E2DDD1] bg-[#F4F1E8]"
      role="contentinfo"
    >
      <div className="section-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#77766F]">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-center sm:text-left">
          <span className="text-[#242521] font-semibold">Abhay Vishwakarma</span>
          <span>·</span>
          <span>TCET Mumbai</span>
          <span>·</span>
          <span>AI &amp; Data Science</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/AbhayLabs-07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#77766F] hover:text-[#242521] transition-colors duration-150 focus-visible:outline-[#E65B35] rounded-xs"
            aria-label="GitHub (opens in new tab)"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://linkedin.com/in/abhay-vishwakarma-6a64153b2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#77766F] hover:text-[#315D80] transition-colors duration-150 focus-visible:outline-[#E65B35] rounded-xs"
            aria-label="LinkedIn (opens in new tab)"
          >
            <LinkedinIcon size={16} />
          </a>
          <span className="text-[#CCC6B8]">|</span>
          <span className="text-[11px] uppercase tracking-wider text-[#77766F]">
            © 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
