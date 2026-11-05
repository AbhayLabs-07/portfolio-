// src/data/experience.ts
// Experience and leadership — only verified facts from the prompt.

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  description: string;
  highlights: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'erc-tcet',
    role: 'Developer & Technical Contributor',
    org: 'Electronics & Robotics Club (ERC) — TCET',
    period: '2026 – Present',
    description:
      'Contributing to the Electronics & Robotics Club at Thakur College of Engineering and Technology as the developer of the official ERC TCET website. The club focuses on autonomous robotics, UAV systems, embedded firmware, edge AI, and hardware engineering.',
    highlights: [
      'Designed and built the official ERC TCET website, deployed live on Vercel for Zephyr 2026 and the ERC Recruitment Drive 2026-27.',
      'Implemented animated hero sections, interactive project category filters, and Web Audio API integration.',
      'The club covers disciplines including Robotics, UAV/Drone Systems, Embedded Firmware, Edge AI & Computer Vision, and IoT & Wireless Telemetry.',
    ],
  },
  {
    id: 'tcet',
    role: 'B.Tech — Artificial Intelligence & Data Science',
    org: 'Thakur College of Engineering and Technology (TCET), Mumbai',
    period: 'Current',
    description:
      "Pursuing a Bachelor of Technology in Artificial Intelligence & Data Science. Working on projects spanning desktop AI agents, deterministic workflow engines, cooperative UAV systems, and institutional web platforms.",
    highlights: [
      'Domains of focus: AI & ML, Embedded Systems, Robotics & UAV, Full-Stack Web Development.',
      "Developed the AI & Data Science Department's official website.",
      'Active in the Electronics & Robotics Club (ERC TCET).',
    ],
  },
];
