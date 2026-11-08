// src/data/experience.ts
// Verified engineering experience, leadership, and education history for Abhay Vishwakarma.

export interface TimelineEntry {
  id: string;
  category: 'Education' | 'Engineering' | 'Leadership' | 'Development' | 'Internship';
  date: string;
  organization: string;
  position: string;
  description: string;
  highlights: string[];
  link?: { label: string; href: string };
}

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: 'sentinel-fullstack',
    category: 'Development',
    date: 'October 2026',
    organization: 'Sentinel GCS Project',
    position: 'Lead Full-Stack & Telemetry Developer',
    description:
      'Initiated and led the full-stack Sentinel GCS application development during the first week of October, architecting the integration between the tactical React 18 frontend, compiled Rust MAVLink 2.0 telemetry core, and Tauri v2 Android container.',
    highlights: [
      'Engineered cross-platform ground control station architecture supporting both desktop and mobile field units.',
      'Implemented real-time MAVLink telemetry serialization and safety-interlock logic state machines.',
      'Constructed a 194-test regression suite ensuring datalink safety and pre-flight validation.',
    ],
    link: {
      label: 'GitHub Repository',
      href: 'https://github.com/AbhayLabs-07/sentinel.git',
    },
  },
  {
    id: 'recoverops-ai',
    category: 'Development',
    date: 'October 2026',
    organization: 'RecoverOps AI',
    position: 'Systems Architect & Core Developer',
    description:
      'Architected and implemented RecoverOps AI, a deterministic, offline-first self-healing workflow orchestration engine built purely on the Python 3.11 standard library with zero third-party runtime dependencies.',
    highlights: [
      'Eliminated naive retry storms through closed-set causal fault classification and bounded remediation budgets.',
      'Implemented independent declarative state verification contracts and path-jailed security sandboxes.',
      'Validated engine resilience across 76 automated unit and fault-simulation tests.',
    ],
    link: {
      label: 'GitHub Repository',
      href: 'https://github.com/AbhayLabs-07/recoverops-ai.git',
    },
  },
  {
    id: 'erc-tcet-vice-chairperson',
    category: 'Leadership',
    date: 'September 2026 – Present',
    organization: 'Electronics & Robotics Club (ERC TCET)',
    position: 'Vice Chairperson',
    description:
      'Serving as Vice Chairperson of the Electronics & Robotics Club at Thakur College of Engineering and Technology (TCET), guiding technical initiatives, robotics development, and embedded research.',
    highlights: [
      'Directing club technical roadmaps across autonomous robotics, aerial systems, and microcontroller firmware.',
      'Mentoring student engineering cohorts in embedded circuit design, sensor buses, and telemetry links.',
    ],
  },
  {
    id: 'medha-ai',
    category: 'Development',
    date: 'August 2026',
    organization: 'MEDHA AI',
    position: 'Creator & AI Systems Architect',
    description:
      'Designed and developed MEDHA AI, an offline-first Windows desktop AI assistant combining offline acoustic neural classification with universal desktop and browser automation.',
    highlights: [
      'Created custom feed-forward neural network from scratch in pure Python with zero heavy ML dependencies.',
      'Built multi-tier acoustic stack featuring PyAudio wake-word detection and MFCC voice biometrics.',
      'Integrated Chrome DevTools Protocol (CDP) via Playwright alongside native Windows UI Automation (UIA).',
    ],
    link: {
      label: 'GitHub Repository',
      href: 'https://github.com/AbhayLabs-07/MEDHA-AI.git',
    },
  },
  {
    id: 'engineering-internship',
    category: 'Internship',
    date: '25 May 2026 – 5 July 2026',
    organization: '{{TODO: Internship Organization Name}}',
    position: 'Software Developer & Drone Specialist',
    description:
      'Worked as Software Developer and Drone Specialist focusing on real-time telemetry communication, flight control protocols, and cooperative drone workflows.',
    highlights: [
      'Developed low-latency MAVLink telemetry handlers and ESP-NOW wireless relays between airframes.',
      'Implemented 3D mathematical ray projection algorithms intersecting camera attitude transforms with WGS-84 coordinate models.',
      'Conducted field flight tests and hardware-in-the-loop telemetry validation.',
    ],
  },
  {
    id: 'innovation-club-chairperson',
    category: 'Leadership',
    date: 'May 2026',
    organization: 'Innovation & Prototyping Club',
    position: 'Chairperson & Lead Instructor',
    description:
      'Led the Innovation & Prototyping Club and organized an intensive four-day technical workshop, serving as the sole lecturer and instructor for the drone technology division.',
    highlights: [
      'Hosted a four-day technical workshop: two days focused on hardware and software, two days dedicated to drone technology.',
      'Delivered curriculum on drone aerodynamics, flight controllers, avionics, and MAVLink telemetry as the sole instructor.',
      'Instructed engineering participants on assembling, calibrating, and programming autonomous UAV systems.',
    ],
  },
  {
    id: 'btech-education',
    category: 'Education',
    date: 'September 2025 – Present',
    organization: 'Thakur College of Engineering and Technology (TCET), Mumbai',
    position: 'B.Tech in Artificial Intelligence & Data Science',
    description:
      'Undergraduate engineering degree specializing in artificial intelligence, neural architectures, data science, robotics, and embedded systems.',
    highlights: [
      'Foundational coursework across algorithms, machine learning mathematics, computer vision, and systems engineering.',
      'Hands-on engineering in autonomous robotics, cooperative multi-UAV architectures, and deterministic systems.',
    ],
  },
];
