// src/data/skills.ts
// Technical competencies directly evidenced across Abhay's 4 flagship projects:
// AIM, MEDHA AI, RecoverOps AI, and Sentinel GCS.

export interface SkillItem {
  name: string;
  category?: string;
  provenIn: string;
}

export interface SkillDomain {
  id: string;
  title: string;
  code: string;
  description: string;
  primaryFocus: string;
  provenProjects: string[];
  skills: SkillItem[];
}

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    id: 'ai-nlp-vision',
    title: 'AI Systems, Neural Inference & Computer Vision',
    code: '01 // INTELLIGENCE',
    primaryFocus: 'Offline Neural Inference, Edge Computer Vision & Voice Biometrics',
    provenProjects: ['MEDHA AI', 'AIM Drone System'],
    description:
      'Designing and deploying lightweight neural inference networks, real-time edge vision pipelines, and voice biometrics without reliance on cloud black-boxes.',
    skills: [
      { name: 'Python 3.10 / 3.11', provenIn: 'MEDHA AI & RecoverOps' },
      { name: 'Custom Pure-Python Neural Nets', provenIn: 'MEDHA AI' },
      { name: 'YOLOv8 Aerial Perception', provenIn: 'AIM Drone System' },
      { name: 'OpenCV Real-Time Streams', provenIn: 'AIM Drone System' },
      { name: 'Voice Biometrics (MFCC)', provenIn: 'MEDHA AI' },
      { name: 'Voice Activity Detection (VAD)', provenIn: 'MEDHA AI' },
      { name: 'NVIDIA CUDA / cuDNN', provenIn: 'AIM Drone System' },
      { name: 'Multi-Turn Context Resolution', provenIn: 'MEDHA AI' },
    ],
  },
  {
    id: 'uav-avionics',
    title: 'Autonomous Avionics, Telemetry & GCS',
    code: '02 // AVIONICS',
    primaryFocus: 'Ground Control Stations, MAVLink Protocols & Flight Interlocks',
    provenProjects: ['Sentinel GCS', 'AIM Drone System'],
    description:
      'Engineering mission-critical Ground Control Stations, flight safety interlocks, multi-vehicle telemetry dispatchers, and hardware radio serial bridges.',
    skills: [
      { name: 'MAVLink 2.0 Protocol', provenIn: 'Sentinel GCS & AIM' },
      { name: 'ArduPilot & Pixhawk Autopilots', provenIn: 'Sentinel GCS & AIM' },
      { name: 'ArduCopter / ArduPlane SITL', provenIn: 'Sentinel GCS' },
      { name: 'Tactical GCS UI (React / MapLibre)', provenIn: 'Sentinel GCS' },
      { name: 'Aerospace Safety Interlocks', provenIn: 'Sentinel GCS' },
      { name: 'Multi-Vehicle Fleet Coordination', provenIn: 'Sentinel GCS' },
      { name: 'DataFlash Log Parsing (.bin/.tlog)', provenIn: 'Sentinel GCS' },
      { name: 'Hardware FPV Video (MediaCodec)', provenIn: 'Sentinel GCS' },
    ],
  },
  {
    id: 'embedded-kinematics',
    title: 'Embedded Firmware & Geospatial Kinematics',
    code: '03 // EMBEDDED & KINEMATICS',
    primaryFocus: 'Low-Latency Wireless Relays, Ray Projection & Trajectory Engines',
    provenProjects: ['AIM Drone System', 'Sentinel GCS'],
    description:
      'Developing microcontroller firmware bridges, mathematical 3D ray projection onto WGS-84 Earth models, and wind-aware minimum-turn-radius path planning.',
    skills: [
      { name: 'ESP32 Firmware & Relays', provenIn: 'AIM Drone System' },
      { name: 'Sub-ms ESP-NOW Wireless Frames', provenIn: 'AIM Drone System' },
      { name: '3D Kinematic Ray Projection', provenIn: 'AIM Drone System' },
      { name: 'WGS-84 Geodetic Transforms', provenIn: 'AIM Drone System' },
      { name: 'Dubins Path Planning (6 Families)', provenIn: 'Sentinel GCS' },
      { name: 'Wind Vector Triangle (Crab Angle)', provenIn: 'Sentinel GCS' },
      { name: 'USB OTG Serial (CDC/FTDI/CP210x)', provenIn: 'Sentinel GCS' },
      { name: 'Offline DEM Elevation Grids', provenIn: 'Sentinel GCS' },
    ],
  },
  {
    id: 'systems-reliability',
    title: 'Reliability Engineering & Workflow Orchestration',
    code: '04 // RELIABILITY',
    primaryFocus: 'Deterministic State Machines, Bounded Self-Healing & Sandboxing',
    provenProjects: ['RecoverOps AI', 'MEDHA AI'],
    description:
      'Constructing resilient systems with closed fault taxonomies, independent verification contracts, non-idempotent task guards, and zero-dependency architectures.',
    skills: [
      { name: 'Deterministic Workflow Loops', provenIn: 'RecoverOps AI' },
      { name: 'Causal Fault Classification', provenIn: 'RecoverOps AI' },
      { name: 'Independent State Verification', provenIn: 'RecoverOps AI' },
      { name: 'Path-Jailed Security Sandboxes', provenIn: 'RecoverOps AI' },
      { name: 'Parameterized SQLite Persistence', provenIn: 'RecoverOps & MEDHA' },
      { name: 'Docker & Reproducible Makefiles', provenIn: 'RecoverOps AI' },
      { name: 'Chrome CDP & Playwright Automation', provenIn: 'MEDHA AI' },
      { name: 'Windows UI Automation (UIA)', provenIn: 'MEDHA AI' },
    ],
  },
  {
    id: 'cross-platform',
    title: 'Cross-Platform Architecture & Full-Stack Systems',
    code: '05 // PLATFORMS',
    primaryFocus: 'Rust Native Bridges, Tauri v2 Mobile, React 18 & Next.js',
    provenProjects: ['Sentinel GCS', 'Portfolio Engine'],
    description:
      'Bridging compiled native libraries (Rust / C++) with high-framerate modern frontends and native mobile containers.',
    skills: [
      { name: 'Rust Core Engines (ARM64/x86)', provenIn: 'Sentinel GCS' },
      { name: 'Tauri v2 Mobile Container', provenIn: 'Sentinel GCS' },
      { name: 'Android Native JNI Bridges', provenIn: 'Sentinel GCS' },
      { name: 'React 18 / Next.js', provenIn: 'Sentinel GCS & Portfolio' },
      { name: 'TypeScript & Modern CSS', provenIn: 'Sentinel GCS & Portfolio' },
      { name: 'Framer Motion Micro-Interactions', provenIn: 'Portfolio' },
      { name: 'Linux / WSL2 Development', provenIn: 'All Systems' },
    ],
  },
];
