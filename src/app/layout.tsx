import type { Metadata } from 'next';
import { Instrument_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
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

const siteUrl = 'https://abhay-portfolio-six-jet.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Abhay Vishwakarma — Engineering / AI / Robotics',
    template: '%s | Abhay Vishwakarma',
  },
  description:
    'Editorial engineering portfolio of Abhay Vishwakarma — B.Tech Artificial Intelligence & Data Science at TCET Mumbai. Systems in autonomous UAV avionics, offline neural agency, robotics, and deterministic self-healing.',
  keywords: [
    'Abhay Vishwakarma',
    'Cooperative UAV Perception System',
    'Sentinel GCS',
    'MEDHA AI',
    'RecoverOps AI',
    'UAV Engineering',
    'Robotics',
    'MAVLink 2.0',
    'ArduPilot',
    'AI Systems',
    'Embedded Systems',
    'TCET Mumbai',
  ],
  authors: [{ name: 'Abhay Vishwakarma' }],
  creator: 'Abhay Vishwakarma',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Abhay Vishwakarma — Engineering Portfolio',
    title: 'Abhay Vishwakarma — Engineering / AI / Robotics',
    description:
      'Editorial engineering portfolio of Abhay Vishwakarma. Featured systems: Cooperative UAV Perception System, Sentinel GCS, MEDHA AI, and RecoverOps AI.',
    images: [
      {
        url: '/images/abhay-portrait.jpg',
        width: 800,
        height: 1200,
        alt: 'Abhay Vishwakarma — Engineering Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhay Vishwakarma — Engineering / AI / Robotics',
    description:
      'Editorial engineering portfolio of Abhay Vishwakarma — B.Tech AI & Data Science at TCET Mumbai.',
    images: ['/images/abhay-portrait.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abhay Vishwakarma',
    url: siteUrl,
    jobTitle: 'AI Systems & UAV Robotics Engineer',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Thakur College of Engineering and Technology (TCET)',
    },
    knowsAbout: [
      'Autonomous UAV Systems',
      'Artificial Intelligence',
      'Embedded Systems',
      'Avionics & GCS',
      'Robotics',
      'Deterministic Reliability Engineering',
    ],
    sameAs: [
      'https://github.com/AbhayLabs-07',
      'https://linkedin.com/in/abhay-vishwakarma-6a64153b2',
    ],
  };

  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#F4F1E8] text-[#242521] antialiased selection:bg-[#E65B35] selection:text-[#FAF9F6]">
        {children}
      </body>
    </html>
  );
}
