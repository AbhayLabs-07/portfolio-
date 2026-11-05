'use client';

import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-t border-[#1E2630]"
      aria-labelledby="about-heading"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
          {/* Left column — label + heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs tracking-[0.2em] text-[#D62828] uppercase">
                About
              </span>
              <span className="accent-line" aria-hidden />
            </div>
            <h2
              id="about-heading"
              className="text-[clamp(2.25rem,5vw,3.5rem)] font-display font-bold text-[#F7F8FA] leading-[1.1] tracking-tight mb-6"
            >
              Building systems
              <br />
              <span className="text-[#9BA3AE]">that think, fly,</span>
              <br />
              and ship.
            </h2>

            {/* Domain tags */}
            <div className="flex flex-wrap gap-2 mt-8" aria-label="Technical domains">
              {[
                'AI Systems',
                'Embedded Systems',
                'UAV Research',
                'Full-Stack',
              ].map((tag) => (
                <span key={tag} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right column — bio text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="space-y-5 text-[1.0625rem] leading-[1.65] text-[#9BA3AE]"
          >
            <p>
              I&apos;m a B.Tech student in Artificial Intelligence &amp; Data Science at
              Thakur College of Engineering and Technology (TCET), Mumbai. My work
              spans the full spectrum from bare-metal embedded firmware to production
              web applications — with a particular focus on systems where hardware,
              software, and intelligence have to operate reliably together.
            </p>
            <p>
              On the AI side, I build agents that work offline, classify intent with
              custom neural networks, and automate complex desktop workflows with explicit
              risk controls. On the hardware side, I work with ESP32 firmware, ArduPilot
              flight controllers, and MAVLink telemetry to research cooperative UAV
              perception and geospatial localization. On the web, I ship production sites
              for engineering communities — including the official ERC TCET platform.
            </p>
            <p>
              I prioritize correctness and determinism: every system I build has explicit
              failure handling, real test coverage, and honest status labels. I don&apos;t
              claim capabilities I haven&apos;t verified.
            </p>

            {/* Education block */}
            <div className="border-l-2 border-[#D62828] pl-5 mt-8 space-y-1">
              <div className="font-display font-semibold text-[#F7F8FA] text-sm">
                B.Tech — Artificial Intelligence &amp; Data Science
              </div>
              <div className="text-sm text-[#9BA3AE]">
                Thakur College of Engineering and Technology (TCET), Mumbai
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
