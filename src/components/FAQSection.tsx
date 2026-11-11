'use client';

import { FAQS } from '@/data/faq';
import { HelpCircle, ChevronDown } from 'lucide-react';

export function FAQSection() {
  return (
    <section
      id="faq"
      className="relative border-b border-[#E2DDD1] bg-[#FAF9F6] py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="section-container">
        {/* Editorial Section Header */}
        <div className="pb-8 border-b border-[#E2DDD1] mb-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#E65B35] font-semibold mb-2 flex items-center gap-2">
            <HelpCircle size={14} className="text-[#E65B35]" />
            <span>KNOWLEDGE BASE &amp; INTEL</span>
            <span className="w-8 h-px bg-[#E65B35]" />
          </div>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#242521] tracking-tight leading-tight"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-3 font-body text-sm sm:text-base text-[#5A5950] max-w-2xl">
            Factual answers regarding engineering background, technical specializations, flagship AI/UAV systems, and collaboration.
          </p>
        </div>

        {/* Semantic, Accessible Accordion (Native <details> for 100% Crawlability & Zero JS Overhead) */}
        <div className="divide-y divide-[#E2DDD1] border-y border-[#E2DDD1]">
          {FAQS.map((item, index) => (
            <details
              key={item.id}
              className="group py-5 transition-colors duration-150 open:bg-[#F4F1E8]/40"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E65B35] focus-visible:ring-offset-2 rounded-xs">
                <span className="font-display text-base sm:text-lg font-semibold text-[#242521] group-hover:text-[#E65B35] transition-colors flex items-baseline gap-3">
                  <span className="font-mono text-xs text-[#9B998E] font-normal">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <span>{item.question}</span>
                </span>
                <span className="shrink-0 p-1 rounded-full text-[#77766F] group-hover:text-[#242521] transition-transform duration-200 group-open:rotate-180">
                  <ChevronDown size={18} />
                </span>
              </summary>
              <div className="mt-4 pl-7 pr-4 font-body text-sm sm:text-base text-[#4A4940] leading-relaxed">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
