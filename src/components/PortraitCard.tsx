'use client';

import Image from 'next/image';

interface PortraitCardProps {
  priority?: boolean;
  className?: string;
}

export function PortraitCard({ priority = true, className = '' }: PortraitCardProps) {
  return (
    <figure className={`relative flex flex-col w-full max-w-[380px] sm:max-w-[420px] mx-auto lg:ml-auto ${className}`}>
      {/* Editorial Frame with Crisp Hairline */}
      <div className="relative aspect-[3/4] w-full bg-[#EAE6DC] border border-[#CCC6B8] overflow-hidden rounded-xs shadow-[0_4px_24px_rgba(36,37,33,0.06)]">
        <Image
          src="/images/abhay-portrait.jpg"
          alt="Abhay Vishwakarma — Engineering, AI & Robotics"
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
          className="object-cover object-top grayscale contrast-[1.06] hover:grayscale-0 transition-all duration-700 ease-out"
        />
        {/* Subtle physical print border vignette */}
        <div className="absolute inset-0 border border-black/5 pointer-events-none" />
      </div>

      {/* Editorial Caption */}
      <figcaption className="mt-3 flex items-baseline justify-between font-mono text-xs text-[#77766F] border-t border-[#E2DDD1] pt-2.5">
        <span className="text-[#242521] font-semibold tracking-tight">Abhay Vishwakarma</span>
        <span className="text-[11px] uppercase tracking-wider text-[#77766F]">
          Mumbai, India · Open to internships
        </span>
      </figcaption>
    </figure>
  );
}
