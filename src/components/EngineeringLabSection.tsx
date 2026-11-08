'use client';

import { Cpu, Radio, Network, Terminal } from 'lucide-react';

const LAB_MODULES = [
  {
    id: 'embedded-systems',
    code: 'LAB-01 // HARDWARE',
    title: 'Embedded Systems & Microcontroller Firmware',
    icon: <Radio size={16} className="text-[#E65B35]" />,
    focus: 'ESP32, Arduino, sensors, transceivers & hardware buses',
    specs: [
      { label: 'Protocols', value: 'SPI, I2C, UART, ESP-NOW direct radio frames' },
      { label: 'Baud Rates', value: 'Up to 921,600 baud serial bridges' },
      { label: 'Microcontrollers', value: 'ESP32 dual-core, ATmega328P, Arduino' },
      { label: 'Firmware Dev', value: 'C++, Arduino IDE, PlatformIO, FreeRTOS tasks' },
    ],
    technicalNotes:
      'Engineered direct ESP-NOW peer-to-peer radio frames bypassing Wi-Fi AP association to achieve low-latency air-to-air telemetry packet dispatch between UAV airframes.',
  },
  {
    id: 'uav-engineering',
    code: 'LAB-02 // AVIONICS',
    title: 'UAV Engineering & Autonomous Avionics',
    icon: <Network size={16} className="text-[#315D80]" />,
    focus: 'Flight controllers, MAVLink telemetry, mission planning & ground control',
    specs: [
      { label: 'Autopilots', value: 'ArduPilot (ArduCopter / ArduPlane), PX4' },
      { label: 'Protocol', value: 'MAVLink 2.0 binary packet parser & telemetry' },
      { label: 'Hardware Bridge', value: 'USB OTG CDC-ACM, FTDI, CP210x, CH34x' },
      { label: 'Simulation', value: 'ArduPilot SITL, Gazebo, MapLibre 3D Terrain' },
    ],
    technicalNotes:
      'Implemented safety-interlock logic state machines in Rust, enforcing 7-point pre-flight checks, geofencing limits, airborne disarm protection, and 3D Dubins minimum-turn path trajectories.',
  },
  {
    id: 'artificial-intelligence',
    code: 'LAB-03 // INTELLIGENCE',
    title: 'Artificial Intelligence & Computer Vision',
    icon: <Cpu size={16} className="text-[#E65B35]" />,
    focus: 'Edge vision, offline neural networks, voice biometrics & mathematical transforms',
    specs: [
      { label: 'Vision Inference', value: 'YOLOv8 real-time aerial detection with CUDA' },
      { label: 'Geodesy Engine', value: '3D Ray projection onto WGS-84 Earth ellipsoid' },
      { label: 'Custom NN', value: 'Pure-Python feedforward network (zero ML deps)' },
      { label: 'Acoustics', value: 'PyAudio wake-word & MFCC voice biometrics' },
    ],
    technicalNotes:
      'Developed vector mathematics projecting camera ray angles and aircraft attitude (roll/pitch/yaw) onto WGS-84 coordinate space to calculate real-world geolocated detections in real time.',
  },
  {
    id: 'software-engineering',
    code: 'LAB-04 // SYSTEMS',
    title: 'Software Infrastructure & Systems Reliability',
    icon: <Terminal size={16} className="text-[#315D80]" />,
    focus: 'Desktop systems, deterministic engines, sandboxing & OS automation',
    specs: [
      { label: 'Orchestration', value: 'Deterministic closed fault classification engine' },
      { label: 'Sandboxing', value: 'Path-jailed file sandbox & hardware interlocks' },
      { label: 'Persistence', value: 'ACID SQLite with parameterized transaction logging' },
      { label: 'Desktop Agents', value: 'Playwright CDP + Windows UI Automation (UIA)' },
    ],
    technicalNotes:
      'Architected air-gapped recovery loops in pure Python standard library that evaluate explicit post-condition domain contracts rather than trusting process exit codes.',
  },
];

export function EngineeringLabSection() {
  return (
    <section
      id="engineering-lab"
      className="relative border-b border-[#E2DDD1] bg-[#F4F1E8] py-20 md:py-28"
      aria-labelledby="engineering-lab-heading"
    >
      <div className="section-container">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E2DDD1] mb-14">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#E65B35] font-semibold mb-3 flex items-center gap-2">
              <span>RESEARCH &amp; HARDWARE</span>
              <span className="w-8 h-px bg-[#E65B35]" />
            </div>
            <h2
              id="engineering-lab-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-display italic text-[#242521] tracking-tight leading-tight"
            >
              The Engineering Lab
            </h2>
          </div>
          <div className="font-mono text-xs text-[#77766F] max-w-sm">
            Technical explorations across embedded microcontroller circuits, autonomous UAV avionics, edge computer vision, and deterministic software infrastructure.
          </div>
        </div>

        {/* 4 Laboratory Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LAB_MODULES.map((module) => (
            <div
              key={module.id}
              className="bg-[#FAF9F6] border border-[#E2DDD1] p-6 sm:p-8 rounded-xs flex flex-col justify-between hover:border-[#CCC6B8] transition-colors"
            >
              <div>
                {/* Module Code & Icon */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E2DDD1] mb-5">
                  <span className="font-mono text-xs text-[#77766F] uppercase tracking-wider">
                    {module.code}
                  </span>
                  <div className="p-1.5 bg-[#F4F1E8] border border-[#E2DDD1] rounded-xs">
                    {module.icon}
                  </div>
                </div>

                {/* Title & Focus */}
                <h3 className="font-display italic text-2xl sm:text-3xl text-[#242521] mb-2 leading-snug">
                  {module.title}
                </h3>
                <div className="font-mono text-xs text-[#E65B35] font-medium mb-5">
                  {module.focus}
                </div>

                {/* Technical Specifications Table */}
                <div className="space-y-2 mb-6">
                  {module.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex flex-col sm:flex-row sm:items-baseline justify-between p-2 bg-[#F4F1E8] border border-[#E2DDD1] rounded-xs text-xs font-mono"
                    >
                      <span className="text-[#77766F] font-semibold uppercase">{spec.label}</span>
                      <span className="text-[#242521] sm:text-right mt-0.5 sm:mt-0">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Technical Field Notes */}
                <div className="p-4 bg-[#FAF9F6] border-l-2 border-[#315D80] border-y border-r border-[#E2DDD1] rounded-xs font-body text-xs text-[#77766F] leading-relaxed">
                  <span className="font-mono text-[10px] text-[#242521] font-semibold uppercase block mb-1">
                    Engineering Field Note
                  </span>
                  {module.technicalNotes}
                </div>
              </div>

              {/* Status footer with no unverified benchmark claims */}
              <div className="pt-4 mt-6 border-t border-[#E2DDD1] flex items-center justify-between font-mono text-[11px] text-[#77766F]">
                <span>{module.focus.split(',')[0]}</span>
                <span className="text-[#242521] font-semibold uppercase">Verified Module</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
