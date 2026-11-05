// src/data/skills.ts
// Skill domains — evidenced by the five projects or the prompt identity section.

export interface Skill {
  name: string;
  /** Optional: tool/library/framework name used in display */
  label?: string;
}

export interface SkillDomain {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    id: 'ai-ml',
    title: 'AI / ML & Data',
    description: 'From custom neural net inference to large language model integration and computer vision pipelines.',
    skills: [
      { name: 'Python' },
      { name: 'Custom Neural Networks' },
      { name: 'YOLOv8 (Ultralytics)' },
      { name: 'OpenCV' },
      { name: 'LLM Integration' },
      { name: 'Voice Biometrics' },
      { name: 'Voice Activity Detection' },
      { name: 'Intent Classification' },
      { name: 'SQLite' },
    ],
  },
  {
    id: 'embedded-hardware',
    title: 'Embedded & Hardware',
    description: 'Microcontroller firmware, real-time communication protocols, and hardware-software integration.',
    skills: [
      { name: 'ESP32 Firmware' },
      { name: 'ArduPilot' },
      { name: 'MAVLink' },
      { name: 'pymavlink' },
      { name: 'ESP-NOW' },
      { name: 'Serial / UART' },
      { name: 'C / C++ (Embedded)' },
    ],
  },
  {
    id: 'robotics-uav',
    title: 'Robotics & UAV',
    description: 'Cooperative UAV architectures, aerial perception, telemetry integration, and geospatial research.',
    skills: [
      { name: 'UAV / Drone Systems' },
      { name: 'RTSP Video Streams' },
      { name: 'GPS & Telemetry' },
      { name: 'Coordinate Transformation (WGS-84)' },
      { name: 'Ray Projection' },
      { name: 'Gimbal & Camera Control' },
      { name: 'Waypoint Navigation' },
    ],
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Web',
    description: 'Modern web applications with performance, accessibility, and clean architecture.',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Three.js' },
      { name: 'Web Audio API' },
      { name: 'Framer Motion' },
      { name: 'HTML / CSS' },
    ],
  },
  {
    id: 'tools-automation',
    title: 'Tools & Automation',
    description: 'Desktop automation, browser control, development tooling, and workflow engineering.',
    skills: [
      { name: 'Playwright' },
      { name: 'Chrome DevTools Protocol' },
      { name: 'Windows UI Automation' },
      { name: 'PyQt5' },
      { name: 'Docker' },
      { name: 'Git' },
      { name: 'Vercel' },
      { name: 'Makefile' },
    ],
  },
];

