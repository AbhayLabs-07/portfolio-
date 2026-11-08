'use client';

import Image from 'next/image';
import { GraduationCap, Compass } from 'lucide-react';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-b border-[#E2DDD1] bg-[#FAF9F6] py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="section-container">
        
        {/* Editorial Section Header */}
        <div className="pb-12 border-b border-[#E2DDD1] mb-16">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#E65B35] font-semibold mb-3 flex items-center gap-2">
            <span>BIOGRAPHY &amp; BACKGROUND</span>
            <span className="w-8 h-px bg-[#E65B35]" />
          </div>
          <h2
            id="about-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-display italic text-[#242521] tracking-tight leading-tight max-w-3xl"
          >
            &ldquo;An engineer interested in the intersection of intelligence, machines, and systems.&rdquo;
          </h2>
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Photograph, Education & Resume link */}
          <div className="space-y-8">
            {/* Editorial Speaker / Engineering Context Photograph */}
            <figure className="relative bg-[#EAE6DC] border border-[#CCC6B8] rounded-xs overflow-hidden shadow-[0_2px_12px_rgba(36,37,33,0.04)]">
              <div className="relative aspect-[4/5] w-full bg-[#EAE6DC]">
                <Image
                  src="/images/abhay-speaking.jpg"
                  alt="Abhay Vishwakarma lecturing at TCET Mumbai"
                  fill
                  className="object-cover contrast-[1.05]"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
                <div className="absolute inset-0 border border-black/5 pointer-events-none" />
              </div>
              <figcaption className="px-3.5 py-2.5 bg-[#F4F1E8] border-t border-[#E2DDD1] flex items-center justify-between font-mono text-[11px] text-[#77766F]">
                <span className="text-[#242521] font-medium">TCET Mumbai</span>
                <span>Drone Workshop &amp; Technical Lecture</span>
              </figcaption>
            </figure>

            {/* Academic Credential Card (Bio Card) */}
            <div className="p-6 bg-[#F4F1E8] border border-[#E2DDD1] rounded-xs space-y-3 font-mono">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#E65B35] font-semibold">
                <GraduationCap size={15} />
                <span>Formal Education</span>
              </div>
              <div className="text-sm font-semibold text-[#242521] font-body">
                Bachelor of Technology (B.Tech)
              </div>
              <div className="text-xs text-[#77766F] leading-relaxed">
                Department of Artificial Intelligence &amp; Data Science<br />
                Thakur College of Engineering and Technology (TCET), Mumbai
              </div>
              <div className="text-[11px] text-[#77766F] pt-2 border-t border-[#E2DDD1]">
                Enrolled: September 2025 · TCET Mumbai
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Engineering Interests */}
          <div className="space-y-8">
            <div className="space-y-5 text-base sm:text-lg text-[#242521] leading-relaxed font-body">
              <p>
                I am pursuing a B.Tech in Artificial Intelligence &amp; Data Science at{' '}
                <strong className="text-[#242521] font-semibold">Thakur College of Engineering and Technology, Mumbai</strong>.
              </p>
              <p className="text-[#77766F]">
                My interests extend beyond software development into robotics, UAV avionics, embedded systems, computer vision, and reliable engineering infrastructure.
              </p>
              <p className="text-[#77766F]">
                I enjoy building systems that connect physical hardware with intelligent software — where high-frequency MAVLink radio packets, camera gimbal attitude transforms, and deterministic recovery loops must reliably perform under real-world conditions.
              </p>
            </div>

            {/* Core Engineering Disciplines */}
            <div className="pt-6 border-t border-[#E2DDD1]">
              <div className="font-mono text-xs uppercase tracking-wider text-[#77766F] font-semibold mb-4 flex items-center gap-2">
                <Compass size={14} className="text-[#E65B35]" />
                <span>Primary Engineering Interests</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                {[
                  {
                    title: 'Autonomous UAV Avionics',
                    desc: 'MAVLink 2.0 protocols, ArduPilot flight controllers, tactical GCS architectures, and USB OTG serial transceivers.',
                  },
                  {
                    title: 'Edge Computer Vision',
                    desc: 'Real-time YOLOv8 object detection, camera projection geometry, and coordinate intersection with WGS-84 Earth models.',
                  },
                  {
                    title: 'Embedded Firmware',
                    desc: 'Microcontroller architecture (ESP32, Arduino), low-latency ESP-NOW radio frames, sensor integration, and FreeRTOS.',
                  },
                  {
                    title: 'Deterministic Reliability',
                    desc: 'Self-healing workflow engines, bounded execution budgets, independent verification contracts, and sandboxed runtimes.',
                  },
                ].map((interest) => (
                  <div
                    key={interest.title}
                    className="p-4 bg-[#F4F1E8] border border-[#E2DDD1] rounded-xs space-y-1.5"
                  >
                    <div className="font-semibold text-[#242521]">{interest.title}</div>
                    <div className="text-[11px] text-[#77766F] leading-relaxed">{interest.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
