'use client';

const SKILL_DOMAINS = [
  {
    domain: 'Programming Languages',
    skills: ['C++', 'Python 3.10 / 3.11', 'TypeScript', 'Rust (MAVLink Core)', 'C', 'SQL'],
  },
  {
    domain: 'AI & Edge Perception',
    skills: ['Ultralytics YOLOv8', 'OpenCV', 'Custom Pure-Python NNs', 'Voice Biometrics (MFCC)', 'WGS-84 Geodesy'],
  },
  {
    domain: 'Embedded Systems & Hardware',
    skills: ['ESP32', 'Arduino', 'ESP-NOW Radio Frames', 'UART / SPI / I2C Buses', 'Sensors & IMUs', 'USB OTG Serial'],
  },
  {
    domain: 'UAV Avionics & Flight Control',
    skills: ['ArduPilot (ArduCopter/Plane)', 'MAVLink 2.0 Protocol', 'Pixhawk / Cube Autopilots', 'Mission Planner', 'Dubins Path Planning', 'SITL Simulation'],
  },
  {
    domain: 'Frontend & System Runtime',
    skills: ['React 18', 'Next.js (App Router)', 'Tailwind CSS', 'Tauri v2 (Android Container)', 'PyQt5', 'MapLibre GL 3D', 'Playwright CDP', 'Docker'],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative border-b border-[#E2DDD1] bg-[#FAF9F6] py-16 md:py-20"
      aria-labelledby="skills-heading"
    >
      <div className="section-container">
        
        {/* Compact Editorial Section Header */}
        <div className="pb-8 border-b border-[#E2DDD1] mb-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#E65B35] font-semibold mb-2 flex items-center gap-2">
            <span>TECHNICAL REPERTOIRE</span>
            <span className="w-8 h-px bg-[#E65B35]" />
          </div>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-display font-bold text-[#242521] tracking-tight leading-tight"
          >
            Technical Skills
          </h2>
        </div>

        {/* Clean Text-Based Technical Competencies List (No Box Tags) */}
        <div className="divide-y divide-[#E2DDD1] border-y border-[#E2DDD1]">
          {SKILL_DOMAINS.map((group) => (
            <div
              key={group.domain}
              className="py-5 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-3 md:gap-6 items-baseline"
            >
              <div className="font-mono text-xs font-semibold text-[#242521] uppercase tracking-wider">
                {group.domain}
              </div>
              <p className="font-body text-sm sm:text-base text-[#242521] leading-relaxed">
                {group.skills.map((skill, idx) => (
                  <span key={skill} className="inline-block">
                    <span className="font-medium text-[#242521]">{skill}</span>
                    {idx < group.skills.length - 1 && (
                      <span className="mx-2.5 text-[#CCC6B8] select-none">/</span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
