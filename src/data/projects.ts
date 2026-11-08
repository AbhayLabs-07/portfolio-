// src/data/projects.ts
// Four flagship projects: Cooperative UAV Perception System, MEDHA AI, RecoverOps AI, and Sentinel GCS.
// Consistent editorial schema, factual metrics, and verified engineering roles.

export type ProjectStatus = 'Prototype' | 'In development' | 'Stable';

export interface ProjectLink {
  label: string;
  href: string;
  external: boolean;
  type?: 'github' | 'live' | 'report';
}

export interface ProjectBullets {
  whatItDoes: string;
  whatIBuilt: string;
  measurableResult: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  status: ProjectStatus;
  description: string;
  role: string;
  bullets: ProjectBullets;
  coverImage?: string;
  hasRealScreenshot: boolean;
  tech: string[];
  links: ProjectLink[];
}

export const PROJECTS: Project[] = [
  {
    id: 'aim-project',
    number: '01',
    title: 'Cooperative UAV Perception System',
    subtitle: 'Two-Tier Autonomous Aerial Perception & Coordination',
    category: 'Autonomous UAV Systems & Aerial Robotics',
    status: 'Prototype',
    description:
      'Two-tier autonomous UAV architecture decoupling high-altitude standoff aerial perception from agile waypoint navigation.',
    role: 'Lead UAV Systems & Perception Programmer',
    bullets: {
      whatItDoes:
        'Mother UAV streams stabilized aerial video to a ground command station running real-time YOLOv8 object detection.',
      whatIBuilt:
        'Mathematical ray projection engine intersecting camera attitude transforms with a WGS-84 Earth ellipsoid to produce geolocated detections, dispatched via low-latency ESP-NOW radio relay.',
      measurableResult:
        'Validated hardware-in-the-loop autonomous MAVLink waypoint handover with sub-second coordinate resolution in flight tests.',
    },
    coverImage: '/images/projects/aim-cover.jpg',
    hasRealScreenshot: true,
    tech: [
      'Python 3.11',
      'YOLOv8',
      'OpenCV',
      'MAVLink 2.0',
      'ArduPilot',
      'ESP32',
      'WGS-84 Geodesy',
    ],
    links: [
      {
        label: 'GitHub Repository',
        href: 'https://github.com/AbhayLabs-07/Aerial-Intelligence-Munitions-A.I.M-.git',
        external: true,
        type: 'github',
      },
    ],
  },
  {
    id: 'medha-ai',
    number: '02',
    title: 'MEDHA AI',
    subtitle: 'Offline-First Desktop AI Assistant & Computer-Use Automation',
    category: 'Local Neural Agency & Computer-Use',
    status: 'In development',
    description:
      'Offline-first Windows desktop assistant that executes local automation and browser workflows without external cloud APIs.',
    role: 'Creator & AI Systems Architect',
    bullets: {
      whatItDoes:
        'Executes voice commands, Windows application lifecycles, and web workflows locally and air-gapped on standard x86 hardware.',
      whatIBuilt:
        'Custom feed-forward neural network from scratch in pure Python (zero heavy ML dependencies), featuring acoustic wake-word detection, MFCC voice biometrics, and Playwright CDP / Windows UIA automation.',
      measurableResult:
        '71 automated test cases passing with sub-50ms local neural intent classification and zero external network latency.',
    },
    coverImage: '/images/projects/medha-cover.jpg',
    hasRealScreenshot: true,
    tech: [
      'Python 3.10+',
      'PyQt5',
      'Neural Networks',
      'Voice Biometrics',
      'Playwright CDP',
      'Windows UIA',
      'SQLite',
    ],
    links: [
      {
        label: 'GitHub Repository',
        href: 'https://github.com/AbhayLabs-07/MEDHA-AI.git',
        external: true,
        type: 'github',
      },
    ],
  },
  {
    id: 'recoverops-ai',
    number: '03',
    title: 'RecoverOps AI',
    subtitle: 'Deterministic Self-Healing Workflow Orchestration Engine',
    category: 'Reliability Engineering & Distributed Systems',
    status: 'Stable',
    description:
      'Deterministic workflow engine focused on reliable automated recovery, bounded execution budgets, and causal fault classification.',
    role: 'Systems Architect & Core Developer',
    bullets: {
      whatItDoes:
        'Eliminates naive infinite retry storms by classifying runtime failures into a closed taxonomy with strictly bounded recovery budgets.',
      whatIBuilt:
        'Zero-dependency Python execution core featuring path-jailed filesystem sandboxing, declarative state assertions, and transactional audit logging with SQLite.',
      measurableResult:
        '76 automated unit and fault-simulation tests passing across simulated network dropouts, missing dependencies, and corrupt payloads.',
    },
    coverImage: '/images/projects/recoverops-cover.jpg',
    hasRealScreenshot: true,
    tech: [
      'Python 3.11 (stdlib)',
      'SQLite',
      'Docker',
      'Makefile',
      'Test-Driven Architecture',
    ],
    links: [
      {
        label: 'GitHub Repository',
        href: 'https://github.com/AbhayLabs-07/recoverops-ai.git',
        external: true,
        type: 'github',
      },
    ],
  },
  {
    id: 'sentinel-gcs',
    number: '04',
    title: 'Sentinel GCS',
    subtitle: 'Tactical UAV Ground Control Station with Flight-Critical Safety Interlocks',
    category: 'Avionics, Telemetry & Flight Control',
    status: 'In development',
    description:
      'Cross-platform UAV ground control station for mission planning, telemetry visualization, and autonomous flight workflows.',
    role: 'Lead Full-Stack & Telemetry Developer',
    bullets: {
      whatItDoes:
        'Provides mission planning, real-time attitude telemetry display, and waypoint commands for ArduPilot multirotor, VTOL, and fixed-wing UAVs.',
      whatIBuilt:
        'Tactical React 18 HUD with MapLibre GL 3D terrain visualization, integrated with a compiled Rust MAVLink 2.0 telemetry core and Android Tauri v2 container.',
      measurableResult:
        '194-test regression suite passing across 15 test suites with verified USB OTG hardware radio bridges up to 921,600 baud.',
    },
    coverImage: '/images/projects/sentinel-cover.jpg',
    hasRealScreenshot: true,
    tech: [
      'React 18',
      'Rust',
      'Tauri v2',
      'MAVLink 2.0',
      'MapLibre GL',
      'ArduPilot',
      'USB OTG',
    ],
    links: [
      {
        label: 'GitHub Repository',
        href: 'https://github.com/AbhayLabs-07/sentinel.git',
        external: true,
        type: 'github',
      },
    ],
  },
];
