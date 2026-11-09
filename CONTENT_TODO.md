# Content Action Items (CONTENT_TODO.md)

This file tracks all factual information, assets, and repository updates required from Abhay Vishwakarma to complete the portfolio documentation. The live portfolio UI is entirely free of placeholders, rendering neutral fallbacks until these values are provided.

---

## Task 1: Experience — Internship Organization Name
- **Role**: Software Developer & Drone Specialist Internship
- **Dates**: 25 May 2026 – 5 July 2026
- **Current Live Fallback**: Renders `"Software Developer & Drone Specialist Internship"` in place of the organization.
- **Action Required**: Provide the official name of the organization/company/lab where this internship was conducted.
- **Where to update**: Add `organization: "Your Organization Name"` to the `engineering-internship` entry in [`src/data/experience.ts`](file:///c:/Users/Abhay%20D%20Vishwakarma/.gemini/antigravity/scratch/abhay-portfolio/src/data/experience.ts#L86).

---

## Task 2: Project Performance Metrics ("Measurable Result" Blocks)
Each project card now supports two discrete rows: **Verification** (unit/regression test counts) and **Performance** (hardware-in-the-loop and latency metrics). Please provide factual performance figures for the following projects:

### 1. Aerial Intelligence Munitions (`aim-project`)
- **Geolocation Error**: Target error margin in metres (e.g., `±X.X m ground accuracy at Y m AGL`)
- **Detection Framerate (FPS)**: YOLOv8 inference speed on onboard/ground GPU (e.g., `XX FPS at 640x640`)
- **Relay Latency**: Air-to-ground or ESP-NOW peer-to-peer transmission latency (e.g., `< XX ms`)
- **Flight Testing**: Number of autonomous field test flights or flight hours logged
- **Where to update**: Set `performance: "..."` under `bullets` in [`src/data/projects.ts`](file:///c:/Users/Abhay%20D%20Vishwakarma/.gemini/antigravity/scratch/abhay-portfolio/src/data/projects.ts#L40).

### 2. RecoverOps AI (`recoverops-ai`)
- **Recovery Latency**: Time to classify causal fault and execute bounded remediation (e.g., `< XX ms execution overhead`)
- **State Assertion Overhead**: Microsecond latency of declarative contract validation
- **Where to update**: Set `performance: "..."` under `bullets` in [`src/data/projects.ts`](file:///c:/Users/Abhay%20D%20Vishwakarma/.gemini/antigravity/scratch/abhay-portfolio/src/data/projects.ts#L125).

*(Note: MEDHA AI and Sentinel GCS already have factual performance metrics configured: "Sub-50ms local neural intent classification and zero external network latency" and "Verified USB OTG hardware radio bridges up to 921,600 baud".)*

---

## Task 3: Engineering Lab Evidence URLs
The Engineering Lab modules now display a `"Hands-on"` badge by default. If you provide an `evidenceUrl`, the module badge upgrades to a clickable link: `"Verified · View evidence"`.

Please supply public URLs (GitHub repos, commit diffs, technical writeups, or hardware bench logs) for any of the 4 modules:
1. **LAB-01 Embedded Systems & Microcontroller Firmware**: e.g., ESP-NOW firmware repo or oscilloscope trace
2. **LAB-02 UAV Engineering & Autonomous Avionics**: e.g., ArduPilot SITL / Rust MAVLink repo link
3. **LAB-03 Artificial Intelligence & Computer Vision**: e.g., Pure-Python neural network repository / ray projection math proof
4. **LAB-04 Software Infrastructure & Systems Reliability**: e.g., RecoverOps deterministic testing logs
- **Where to update**: Add `evidenceUrl: "https://..."` to the corresponding module in [`src/components/EngineeringLabSection.tsx`](file:///c:/Users/Abhay%20D%20Vishwakarma/.gemini/antigravity/scratch/abhay-portfolio/src/components/EngineeringLabSection.tsx#L20).

---

## Task 4: Project Media Assets
The folder [`public/media/projects/`](file:///c:/Users/Abhay%20D%20Vishwakarma/.gemini/antigravity/scratch/abhay-portfolio/public/media/projects) has been created. The media player supports WebP/JPG images or looping, muted MP4/WebM videos (with `poster` image, `playsInline`, and automatic `prefers-reduced-motion` compliance).

Suggested files to place in `public/media/projects/`:
1. `aim-flight-test.mp4` / `aim-flight-test-poster.jpg`: Standoff mother-drone aerial video with YOLOv8 bounding boxes and WGS-84 ray projection overlay.
2. `sentinel-gcs-hud.mp4` / `sentinel-gcs-poster.jpg`: Screen capture of tactical React 18 HUD + MapLibre GL 3D terrain elevation map with live MAVLink attitude indicators.
3. `medha-voice-demo.mp4` / `medha-voice-poster.jpg`: Screen recording demonstrating offline acoustic wake-word activation and local Playwright CDP browser automation.
4. `recoverops-simulation.mp4` / `recoverops-poster.jpg`: Terminal recording showing deterministic self-healing recovery loop surviving simulated network drops and corrupted SQLite payloads.
- **Where to attach**: Add `media: { type: 'video', src: '/media/projects/...mp4', poster: '/media/projects/...jpg', alt: '...' }` to the project object in [`src/data/projects.ts`](file:///c:/Users/Abhay%20D%20Vishwakarma/.gemini/antigravity/scratch/abhay-portfolio/src/data/projects.ts).

---

## Task 6: Project 01 Naming Consistency & GitHub Repository
- **Current Project Title**: "Aerial Intelligence Munitions"
- **Current GitHub Repository URL**: `https://github.com/AbhayLabs-07/Aerial-Intelligence-Munitions-A.I.M-`
- **Status**: Updated to match your repository name and cover badge. Ensure repository visibility on GitHub is set to **Public** so visitors can inspect the codebase.

---

## Task 7: External Link Accessibility & Resume Audit
Running `npm run check:links` performs a live HTTP check on all references. The latest audit reveals:

1. **`public/resume.pdf`**:
   - Status: **Confirmed present** on disk (934 bytes).
   - Note: The current PDF is a placeholder stub. Please replace `public/resume.pdf` with your complete, up-to-date engineering resume.
2. **GitHub Profile & RecoverOps**:
   - `https://github.com/AbhayLabs-07` -> **200 OK**
   - `https://linkedin.com/in/abhay-vishwakarma-6a64153b2` -> **200 OK**
   - `https://github.com/AbhayLabs-07/recoverops-ai.git` -> **200 OK**
3. **Private or Pending Repositories (HTTP 404)**:
   - `https://github.com/AbhayLabs-07/sentinel.git` -> **404 Not Found**
   - `https://github.com/AbhayLabs-07/MEDHA-AI.git` -> **404 Not Found**
   - `https://github.com/AbhayLabs-07/Aerial-Intelligence-Munitions-A.I.M-.git` -> **404 Not Found**
   - **Action Required**: Set visibility to **Public** for these repositories on GitHub or update the URLs if the repositories are published under different repository slugs.

