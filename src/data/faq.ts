// src/data/faq.ts
// Factual Q&A repository powering both the on-page FAQ Section and the JSON-LD FAQPage Schema.
// Grounded strictly in verified engineering work, academic credentials, and project implementations.

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'who-is-abhay',
    question: 'Who is Abhay Vishwakarma?',
    answer:
      'Abhay Vishwakarma is an AI & Data Science Engineer, AI Systems Developer, and Embedded Systems Specialist based in Mumbai, India. He is pursuing his Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science at Thakur College of Engineering and Technology (TCET), Mumbai. His engineering focus centers on autonomous UAV perception, tactical ground control systems, offline neural desktop agents, and deterministic self-healing software.',
  },
  {
    id: 'specialization',
    question: 'What does Abhay Vishwakarma specialize in?',
    answer:
      'Abhay specializes in the convergence of machine intelligence and physical hardware. Key specializations include autonomous UAV perception and MAVLink telemetry, real-time computer vision (YOLOv8 & OpenCV), mathematical ray-projection geodesy on the WGS-84 ellipsoid, offline neural classification, deterministic system recovery engines, and low-latency embedded communications (ESP-NOW, ESP32, STM32).',
  },
  {
    id: 'education',
    question: "What is Abhay's educational background?",
    answer:
      'Abhay is pursuing a Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science at Thakur College of Engineering and Technology (TCET), an autonomous engineering institution affiliated with the University of Mumbai, Maharashtra, India. His coursework spans algorithms, machine learning mathematics, computer vision, and systems engineering.',
  },
  {
    id: 'ai-projects',
    question: 'What AI projects has Abhay developed?',
    answer:
      'Abhay has built several flagship AI systems, including: (1) MEDHA AI, an offline-first Windows desktop AI assistant powered by a pure-Python feed-forward neural classifier; (2) Aerial Intelligence Munitions (Cooperative UAV Perception System), a two-tier autonomous UAV architecture combining real-time YOLOv8 aerial tracking with WGS-84 ray projection; and (3) RecoverOps AI, a deterministic workflow self-healing engine classifying failure modes into bounded recovery budgets.',
  },
  {
    id: 'medha-ai',
    question: 'What is MEDHA AI?',
    answer:
      'MEDHA AI is an offline-first, zero-telemetry Windows desktop AI assistant created by Abhay Vishwakarma. Built from scratch in pure Python without heavy ML library overhead, it features acoustic wake-word classification, MFCC voice biometrics, and desktop/browser workflow automation via Playwright CDP and Windows UIAutomation, executing local tasks with sub-50ms intent latency.',
  },
  {
    id: 'recoverops-ai',
    question: 'What is RecoverOps AI?',
    answer:
      'RecoverOps AI is a deterministic self-healing workflow execution engine designed by Abhay Vishwakarma. It replaces naive infinite retry loops with a closed taxonomy of runtime failures, strictly bounded recovery budgets, path-jailed sandboxing, and transactional audit logging with SQLite, validated against 76 automated fault-simulation tests.',
  },
  {
    id: 'embedded-systems',
    question: "What is Abhay's experience with embedded systems?",
    answer:
      'Abhay designs embedded firmware and hardware interfaces for ESP32 and STM32 microcontrollers. His work includes peer-to-peer radio protocols like ESP-NOW for multi-UAV coordinate synchronization, sensor fusion across IMUs, barometers, and GPS/RTK modules, and hardware USB OTG telemetry bridges operating up to 921,600 baud.',
  },
  {
    id: 'uav-drone-tech',
    question: 'Does Abhay work on UAV and drone technologies?',
    answer:
      'Yes. Abhay has extensive hands-on experience in autonomous UAV avionics and flight control. He develops with ArduPilot (ArduCopter/Plane) and MAVLink 2.0 protocols, engineered the Sentinel GCS tactical ground control station, built ray-projection target localization engines, and served as Chairperson & sole drone technology instructor for an intensive 4-day technical workshop at TCET.',
  },
  {
    id: 'technologies',
    question: 'What technologies does Abhay use?',
    answer:
      'Abhay works across multiple technical stacks: Languages (Python 3.11, C++, Rust, TypeScript, SQL), AI & Perception (YOLOv8, OpenCV, NumPy, Scikit-learn, MFCC audio DSP), Avionics & Hardware (ArduPilot, MAVLink 2.0, ESP-NOW, ESP32, STM32, Arduino), and Systems & Frontend (React 19, Next.js, Tauri v2, MapLibre GL 3D, SQLite, Docker, Linux).',
  },
  {
    id: 'collaboration',
    question: 'How can someone collaborate with Abhay?',
    answer:
      'Abhay is open to technical collaboration on autonomous UAVs, robotics research, AI systems engineering, and open-source software. You can connect with him via GitHub (github.com/AbhayLabs-07), LinkedIn (linkedin.com/in/abhay-vishwakarma-6a64153b2), or directly via email at abhayvishwakarma2007@gmail.com.',
  },
];
