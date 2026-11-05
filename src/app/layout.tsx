import type { Metadata } from 'next';
import { Space_Grotesk, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
});

const siteUrl = 'https://abhay.dev'; // Update with actual deployed URL

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Abhay Vishwakarma — AI Engineer & Embedded Systems Developer',
    template: '%s | Abhay Vishwakarma',
  },
  description:
    'Portfolio of Abhay Vishwakarma — B.Tech AI & Data Science at TCET Mumbai. Building desktop AI agents, deterministic workflow engines, cooperative UAV systems, and full-stack web applications.',
  keywords: [
    'Abhay Vishwakarma',
    'AI Engineer',
    'Data Science',
    'Embedded Systems',
    'Robotics',
    'UAV',
    'TCET',
    'Full-Stack Developer',
    'Python',
    'Next.js',
  ],
  authors: [{ name: 'Abhay Vishwakarma' }],
  creator: 'Abhay Vishwakarma',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Abhay Vishwakarma',
    title: 'Abhay Vishwakarma — AI Engineer & Embedded Systems Developer',
    description:
      'Portfolio of Abhay Vishwakarma — B.Tech AI & Data Science at TCET Mumbai. Building desktop AI agents, deterministic workflow engines, cooperative UAV systems, and full-stack web applications.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhay Vishwakarma — AI Engineer & Embedded Systems Developer',
    description:
      'Portfolio of Abhay Vishwakarma — B.Tech AI & Data Science at TCET Mumbai.',
    creator: '@AbhayVishwakarma',
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
    sameAs: [
      'https://github.com/AbhayLabs-07',
      'https://linkedin.com/in/abhay-vishwakarma-6a64153b2',
    ],
    jobTitle: 'AI & Data Science Engineer',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Thakur College of Engineering and Technology',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mumbai',
        addressCountry: 'IN',
      },
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Data Science',
      'Embedded Systems',
      'Robotics',
      'UAV Systems',
      'Full-Stack Development',
    ],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${outfit.variable} ${jetbrainsMono.variable} h-full`}
      data-type="portfolio"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="page-type" content="portfolio" />
        <meta name="site-kind" content="software" />
        <link rel="canonical" href={siteUrl} />
      </head>
      <body className="min-h-full antialiased bg-[#12181F] text-[#F7F8FA] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
