import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons';

export function Footer() {
  return (
    <footer
      className="border-t border-[#1E2630]"
      role="contentinfo"
    >
      <div
        className="max-w-[1200px] mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="flex items-center gap-6">
          <span className="font-mono text-xs text-[#5A6472]">
            Abhay Vishwakarma
          </span>
          <span className="font-mono text-xs text-[#5A6472]">·</span>
          <span className="font-mono text-xs text-[#5A6472]">
            TCET Mumbai
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/AbhayLabs-07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5A6472] hover:text-[#9BA3AE] transition-colors duration-150 focus-visible:outline-[#D62828] rounded"
            aria-label="GitHub (opens in new tab)"
          >
            <GithubIcon size={15} />
          </a>
          <a
            href="https://linkedin.com/in/abhay-vishwakarma-6a64153b2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5A6472] hover:text-[#9BA3AE] transition-colors duration-150 focus-visible:outline-[#D62828] rounded"
            aria-label="LinkedIn (opens in new tab)"
          >
            <LinkedinIcon size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
