import type { Metadata } from 'next';
import Script from 'next/script';
import { FAQS } from '@/data/faq';
import {
  Instrument_Serif,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
  Sora,
  Inter,
  Space_Grotesk,
  DM_Sans,
  Manrope,
  Syne,
} from 'next/font/google';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  style: ['normal', 'italic'],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
});

// Candidate Font Combinations for Awwwards-style Typography Redesign
const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700', '800'],
});

const siteUrl = 'https://abhay-portfolio-six-jet.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Abhay Vishwakarma | AI Engineer, Embedded Systems & UAV Developer',
    template: '%s | Abhay Vishwakarma',
  },
  description:
    'Official portfolio of Abhay Vishwakarma — AI & Data Science Engineer at TCET Mumbai. Systems in autonomous UAV perception, offline desktop AI agents (MEDHA AI), self-healing engines (RecoverOps AI), and tactical ground control stations (Sentinel GCS).',
  applicationName: 'Abhay Vishwakarma Portfolio',
  keywords: [
    // Primary Keywords
    'Abhay Vishwakarma',
    'Abhay Vishwakarma AI Engineer',
    'Abhay Vishwakarma Portfolio',
    'AI and Data Science Engineer Mumbai',
    'Embedded Systems Developer',
    'AI Engineer Portfolio',
    // Secondary Keywords
    'UAV Systems Developer',
    'Robotics Developer',
    'Computer Vision Developer',
    'ESP32 Developer',
    'ArduPilot Developer',
    'AI Agent Developer',
    'Python Developer',
    'Full Stack Developer Mumbai',
    // Long-Tail & Flagship Terms
    'AI and Data Science student at TCET Mumbai',
    'Offline AI desktop assistant developer',
    'Cooperative UAV perception and localization',
    'Embedded systems and robotics projects',
    'AI and machine learning portfolio',
    'Aerial Intelligence Munitions',
    'A.I.M.',
    'MEDHA AI',
    'RecoverOps AI',
    'Sentinel GCS',
    'MAVLink 2.0',
    'WGS-84 Ray Projection Geodesy',
  ],
  authors: [{ name: 'Abhay Vishwakarma', url: siteUrl }],
  creator: 'Abhay Vishwakarma',
  publisher: 'Abhay Vishwakarma',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Abhay Vishwakarma | Engineering Portfolio',
    title: 'Abhay Vishwakarma | AI Engineer, Embedded Systems & UAV Developer',
    description:
      'Official engineering portfolio of Abhay Vishwakarma. Featured systems: Aerial Intelligence Munitions, MEDHA AI, RecoverOps AI, and Sentinel GCS.',
    firstName: 'Abhay',
    lastName: 'Vishwakarma',
    username: 'AbhayLabs-07',
    gender: 'male',
    images: [
      {
        url: '/images/abhay-portrait.jpg',
        width: 800,
        height: 1200,
        alt: 'Abhay Vishwakarma — AI Engineer, Embedded Systems & UAV Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhay Vishwakarma | AI Engineer, Embedded Systems & UAV Developer',
    description:
      'Official engineering portfolio of Abhay Vishwakarma — B.Tech AI & Data Science at TCET Mumbai. Systems in autonomous UAV perception, robotics, and offline intelligence.',
    images: ['/images/abhay-portrait.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Mumbai',
    'geo.position': '19.0760;72.8777',
    ICBM: '19.0760, 72.8777',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Abhay Vishwakarma — Engineering Portfolio',
        description:
          'Editorial engineering portfolio of Abhay Vishwakarma — B.Tech Artificial Intelligence & Data Science at TCET Mumbai. Systems in autonomous UAV avionics, offline neural agency, robotics, and deterministic self-healing.',
        publisher: {
          '@id': `${siteUrl}/#person`,
        },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: 'Abhay Vishwakarma — Engineering Portfolio',
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@id': `${siteUrl}/#person`,
        },
        mainEntity: {
          '@id': `${siteUrl}/#person`,
        },
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Abhay Vishwakarma',
        alternateName: ['Abhay D Vishwakarma', 'AbhayLabs-07'],
        givenName: 'Abhay',
        familyName: 'Vishwakarma',
        url: siteUrl,
        image: `${siteUrl}/images/abhay-portrait.jpg`,
        jobTitle: 'AI & Robotics Systems Engineer',
        description:
          'Systems engineer, autonomous UAV researcher, and undergraduate student in Artificial Intelligence & Data Science at Thakur College of Engineering and Technology (TCET), Mumbai. Specializes in Autonomous UAV Perception, Avionics, Offline Neural Agents, Robotics, and Deterministic Reliability Engineering.',
        gender: 'https://schema.org/Male',
        nationality: {
          '@type': 'Country',
          name: 'India',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Mumbai',
          addressRegion: 'Maharashtra',
          addressCountry: 'India',
        },
        homeLocation: {
          '@type': 'Place',
          name: 'Mumbai, Maharashtra, India',
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 19.076,
            longitude: 72.8777,
          },
        },
        affiliation: {
          '@type': 'CollegeOrUniversity',
          name: 'Thakur College of Engineering and Technology (TCET), Mumbai',
          url: 'https://www.tcetmumbai.in/',
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'Thakur College of Engineering and Technology (TCET), Mumbai',
          url: 'https://www.tcetmumbai.in/',
        },
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'degree',
            name: 'Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science',
            recognizedBy: {
              '@type': 'CollegeOrUniversity',
              name: 'Thakur College of Engineering and Technology (TCET), Mumbai',
            },
          },
        ],
        knowsAbout: [
          'Autonomous UAV Systems',
          'Aerial Robotics',
          'ArduPilot & MAVLink 2.0',
          'YOLOv8 Computer Vision',
          'WGS-84 Geodesy & Ray Projection',
          'Offline Neural Architectures',
          'MFCC Voice Biometrics',
          'Deterministic Reliability Engineering',
          'Tactical Ground Control Stations',
          'ESP-NOW Radio Telemetry',
          'Embedded Systems (ESP32, STM32, Arduino)',
          'Python 3.11',
          'Rust',
          'React 19 & Next.js',
          'Tauri v2',
          'MapLibre GL 3D',
        ],
        sameAs: [
          'https://github.com/AbhayLabs-07',
          'https://linkedin.com/in/abhay-vishwakarma-6a64153b2',
          'https://github.com/AbhayLabs-07/Aerial-Intelligence-Munitions-A.I.M-',
          'https://github.com/AbhayLabs-07/MEDHA-AI',
          'https://github.com/AbhayLabs-07/recoverops-ai.git',
          'https://github.com/AbhayLabs-07/sentinel.git',
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/#projects`,
        name: 'Selected Engineering Systems by Abhay Vishwakarma',
        description:
          'Flagship production systems across Autonomous UAV Perception, Offline Neural Agency, Deterministic Self-Healing, and Tactical Ground Controls.',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'SoftwareSourceCode',
              name: 'Aerial Intelligence Munitions (A.I.M.)',
              description:
                'Two-tier autonomous UAV architecture decoupling high-altitude standoff aerial perception from agile waypoint navigation, utilizing real-time YOLOv8 object detection, WGS-84 ray projection geodesy, and ESP-NOW wireless relay.',
              codeRepository:
                'https://github.com/AbhayLabs-07/Aerial-Intelligence-Munitions-A.I.M-',
              programmingLanguage: 'Python',
              runtimePlatform: 'ArduPilot, MAVLink 2.0, ESP32',
              creator: {
                '@id': `${siteUrl}/#person`,
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'SoftwareSourceCode',
              name: 'MEDHA AI',
              description:
                'Private offline neural desktop agent for local autonomous task execution on consumer x86 hardware without cloud telemetry, validated by 71 automated test cases.',
              codeRepository: 'https://github.com/AbhayLabs-07/MEDHA-AI',
              programmingLanguage: 'Python',
              runtimePlatform: 'Windows UIA, Playwright CDP',
              creator: {
                '@id': `${siteUrl}/#person`,
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'SoftwareSourceCode',
              name: 'RecoverOps AI',
              description:
                'Deterministic workflow self-healing engine classifying runtime failures into closed taxonomies with bounded recovery budgets, validated by 76 fault-simulation tests.',
              codeRepository:
                'https://github.com/AbhayLabs-07/recoverops-ai.git',
              programmingLanguage: 'Python',
              runtimePlatform: 'Python 3.11 stdlib, SQLite',
              creator: {
                '@id': `${siteUrl}/#person`,
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 4,
            item: {
              '@type': 'SoftwareSourceCode',
              name: 'Sentinel GCS',
              description:
                'Tactical UAV Ground Control Station with 3D MapLibre terrain, compiled Rust MAVLink 2.0 telemetry core, and Android Tauri v2 container, backed by 194 regression tests.',
              codeRepository: 'https://github.com/AbhayLabs-07/sentinel.git',
              programmingLanguage: 'Rust, TypeScript',
              runtimePlatform: 'React 18, Tauri v2, ArduPilot',
              creator: {
                '@id': `${siteUrl}/#person`,
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 5,
            item: {
              '@type': 'CreativeWork',
              name: 'AI & Data Science Department Portal (TCET)',
              description:
                'Institutional single-page application and academic portal representing the AI & Data Science Department at Thakur College of Engineering and Technology (TCET), Mumbai.',
              creator: {
                '@id': `${siteUrl}/#person`,
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 6,
            item: {
              '@type': 'CreativeWork',
              name: 'ERC TCET Community Platform',
              description:
                'Community platform for the Electronics & Robotics Club at TCET Mumbai featuring interactive project showcases and technical domain hubs.',
              creator: {
                '@id': `${siteUrl}/#person`,
              },
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Projects',
            item: `${siteUrl}/#projects`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Engineering Lab',
            item: `${siteUrl}/#engineering-lab`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'FAQ',
            item: `${siteUrl}/#faq`,
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Contact',
            item: `${siteUrl}/#contact`,
          },
        ],
      },
      {
        '@type': 'CollegeOrUniversity',
        '@id': 'https://www.tcetmumbai.in/#organization',
        name: 'Thakur College of Engineering and Technology (TCET), Mumbai',
        url: 'https://www.tcetmumbai.in/',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kandivali East, Mumbai',
          addressRegion: 'Maharashtra',
          addressCountry: 'India',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        name: 'Abhay Vishwakarma — Frequently Asked Questions',
        mainEntity: FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  const fontVariables = [
    instrumentSerif.variable,
    ibmPlexSans.variable,
    ibmPlexMono.variable,
    sora.variable,
    inter.variable,
    spaceGrotesk.variable,
    dmSans.variable,
    manrope.variable,
    syne.variable,
  ].join(' ');

  return (
    <html lang="en" className={`${fontVariables} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="bg-[#F4F1E8] text-[#242521] antialiased selection:bg-[#E65B35] selection:text-[#FAF9F6]">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KBB53NWZ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-KBB53NWZ"
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
