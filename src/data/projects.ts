// src/data/projects.ts
// Typed project data — all content traceable to prompt or verified repository.

export type ProjectStatus = 'Phase 1' | 'Prototype' | 'Live' | 'In development';

export interface ProjectLink {
  label: string;
  href: string;
  external: boolean;
}

export interface Project {
  id: string;
  index: number;
  title: string;
  tagline: string;
  role: string;
  context: string;
  description: string;
  highlights: string[];
  tech: string[];
  status: ProjectStatus;
  links: ProjectLink[];
  /** Architecture component labels for the diagram (optional) */
  architecture?: string[];
  accentColor: 'red' | 'blue';
}

export const PROJECTS: Project[] = [
  {
    id: 'medha-ai',
    index: 1,
    title: 'MEDHA AI',
    tagline: 'Mental & Executive Desktop Hybrid Assistant — an offline-first Windows desktop voice and computer-use agent.',
    role: 'Solo developer',
    context: 'Personal research project',
    description:
      'A Python-based Windows desktop AI assistant with a custom PyQt5 HUD. MEDHA listens for its wake word, verifies speaker identity through voice biometrics, classifies intent with a custom pure-Python neural network, and executes multi-step automation tasks — from browser and Gmail automation to Windows UI control — with risk classification and confirmation safeguards at each step.',
    highlights: [
      'Wake word detection, voice activity detection, and voice biometrics — all running locally on the host machine.',
      'Custom pure-Python neural network for intent classification; no ML framework dependency required at inference.',
      'Multi-turn conversational context tracking with SQLite persistence and offline speech fallback.',
      'Chrome and Edge browser automation via Playwright and Chrome DevTools Protocol; Windows UI Automation for desktop application control.',
      'Hybrid online/local LLM architecture with risk classification and explicit confirmation safeguards before destructive actions.',
    ],
    tech: ['Python', 'PyQt5', 'SQLite', 'Playwright', 'Chrome DevTools Protocol', 'Windows UI Automation', 'Voice Biometrics'],
    status: 'Prototype',
    links: [
      // Repository is not public under AbhayLabs-07 — no link added per content-integrity rules.
      {
        label: 'GitHub (private)',
        href: 'https://github.com/AbhayLabs-07',
        external: true,
      },
    ],
    accentColor: 'red',
  },
  {
    id: 'recoverops-ai',
    index: 2,
    title: 'RecoverOps AI',
    tagline: 'A deterministic, self-healing workflow engine built for the OmniRush Buildathon.',
    role: 'Solo developer',
    context: 'OmniRush Buildathon',
    description:
      'RecoverOps AI executes predefined workflows, diagnoses known failures using a closed set of deterministic task actions, applies bounded recovery strategies, and independently verifies success before reporting. Phase 1 ships with zero third-party runtime dependencies, no LLM, and no external services — reliability through strict determinism.',
    highlights: [
      'Deterministic failure simulation across six action types: success, transient_service, timeout, missing_file, invalid_data, and unrecoverable.',
      'RecoveryManager maps known failure types to predefined strategies — retry, reset, restore, sanitize, or escalate — bounded by per-task and per-workflow budgets.',
      'Independent Verifier checks declared success criteria explicitly; a completed action without verification never counts as success.',
      'Full SQLite audit persistence using parameterized SQL and transaction context managers; non-idempotent tasks escalate rather than retry blindly.',
      'Comprehensive test suite covering transient failures, timeouts, invalid data, verification failures, budget exhaustion, and SQLite persistence. Docker and Makefile included.',
    ],
    tech: ['Python 3.11', 'SQLite', 'unittest', 'Docker', 'Makefile'],
    status: 'Phase 1',
    architecture: ['WorkflowExecutor', 'FailureSimulator', 'RecoveryManager', 'Verifier', 'Storage'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/AbhayLabs-07/recoverops-ai',
        external: true,
      },
    ],
    accentColor: 'blue',
  },
  {
    id: 'drone-system',
    index: 3,
    title: 'Cooperative UAV Perception & Geospatial Localization System',
    tagline: 'Research into cooperative UAV architecture, aerial computer vision, MAVLink telemetry, and WGS-84 geospatial localization.',
    role: 'Systems & software engineer',
    context: 'Academic research project — TCET',
    description:
      'A research system exploring how a Mother-Child drone pair can coordinate aerial perception with ground-truth geospatial localization. The Mother drone streams live RTSP video through a YOLO-based detection pipeline while MAVLink telemetry provides GPS position, altitude, roll/pitch/yaw, and camera gimbal orientation. Ray projection and WGS-84 coordinate transformation concepts underpin the localization research. An ESP32 firmware relay bridges communication between aircraft. This is research-stage work; no precision figures are claimed without documented test results.',
    highlights: [
      'Mother-Child cooperative UAV architecture: Mother as aerial perception and reconnaissance platform, Child drone for autonomous waypoint navigation via ArduPilot-compatible flight controllers.',
      'Live RTSP video feed with YOLOv8-based object detection using Ultralytics; real-time inference pipeline integrated with MAVLink telemetry.',
      'MAVLink telemetry integration: GPS position and altitude, roll/pitch/yaw attitude, and camera/gimbal orientation from the Mother drone.',
      'Ray projection and WGS-84 coordinate transformation concepts for research-stage geospatial localization; accuracy is not claimed without verified test results.',
      'ESP32 firmware communication relay bridging the Mother and Child platforms; ArduPilot-compatible flight controller integration for waypoint navigation.',
    ],
    tech: ['Python', 'OpenCV', 'YOLOv8 (Ultralytics)', 'pymavlink', 'ESP32 Firmware', 'ArduPilot', 'RTSP', 'WGS-84'],
    status: 'In development',
    links: [
      // Repository not found as public under AbhayLabs-07.
      // Safety review: linking only to profile, not to any targeting-related files.
      {
        label: 'GitHub Profile',
        href: 'https://github.com/AbhayLabs-07',
        external: true,
      },
    ],
    accentColor: 'blue',
  },
  {
    id: 'ai-ds-website',
    index: 4,
    title: 'AI & Data Science Department Website',
    tagline: "The official web presence for TCET's Artificial Intelligence & Data Science Department.",
    role: 'Developer',
    context: 'Institutional web project — TCET AI & DS Department',
    description:
      "Built and maintained the department website for the AI & Data Science department at Thakur College of Engineering and Technology. The site serves as the primary institutional web presence for the department, presenting academic programmes, faculty, and department initiatives to students, faculty, and prospective applicants.",
    highlights: [
      'Institutional single-page application representing the AI & Data Science Department at TCET, Mumbai.',
      'Designed to communicate academic programmes, department identity, and research focus clearly to multiple audiences.',
      'Developed as a separate project from other institutional web properties; not the same as the TCET R&D portal.',
      'Full department information architecture — programmes, faculty, and department initiatives.',
    ],
    tech: ['Web development'],
    // Note: Repository not found public under AbhayLabs-07. Tech stack unverified — not claimed beyond "web development".
    status: 'Live',
    links: [
      {
        label: 'GitHub Profile',
        href: 'https://github.com/AbhayLabs-07',
        external: true,
      },
    ],
    accentColor: 'red',
  },
  {
    id: 'erc-tcet-website',
    index: 5,
    title: 'ERC TCET Website',
    tagline: 'Community platform for the Electronics & Robotics Club at Thakur College of Engineering and Technology.',
    role: 'Developer',
    context: 'ERC TCET — Electronics & Robotics Club',
    description:
      "The official website for ERC TCET, the student-driven hardware and robotics engineering community at TCET Mumbai. Built as a full single-page application with animated hero sections, an interactive project showcase with category filters, and a team directory. Live for Zephyr 2026 and the Recruitment Drive 2026-27.",
    highlights: [
      "Animated hero with multi-phrase cycling headline: 'Building machines. Exploring intelligence. Engineering the future.'",
      "Interactive project showcase with category filters: Robotics, UAV & Drone Systems, Artificial Intelligence, and more.",
      'Club discipline pages covering Robotics, UAV/Drone Systems, Embedded Systems, Edge AI & Computer Vision, IoT & Wireless Telemetry, and High-Speed PCB Design.',
      'Web Audio API integration with an accessible mute toggle for audio-enhanced sections.',
      'Deployed to Vercel; supports Zephyr 2026 and the ERC Recruitment Drive 2026-27.',
    ],
    tech: ['React', 'Tailwind CSS', 'Three.js', 'Web Audio API', 'Vercel'],
    // Tech confirmed consistent with observed live site behavior (SPA, audio effects, Vercel deployment).
    // Three.js and Web Audio API stated in prompt; treat as stated-not-independently-verified.
    status: 'Live',
    links: [
      {
        label: 'Live Site',
        href: 'https://erc-website-alpha.vercel.app/',
        external: true,
      },
    ],
    accentColor: 'red',
  },
];

