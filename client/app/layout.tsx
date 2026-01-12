import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const integral = localFont({
  src: '../public/font/IntegralCF-Bold.ttf',
  variable: '--font-integral',
  display: 'swap',
});

const paralucent = localFont({
  src: '../public/font/ParalucentCondMedium.otf',
  variable: '--font-paralucent',
  display: 'swap',
});

const spaceMono = localFont({
  src: '../public/font/SpaceMono-Bold.ttf',
  variable: '--font-spacemono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://marinharel.fr'),
  title: {
    default: 'Portfolio - Marin Harel | Développeur Web & Mobile à Aix-en-Provence',
    template: '%s | Marin Harel',
  },
  description:
    "Portfolio de Marin Harel, développeur web et mobile à Aix-en-Provence, passionné par la création d'applications modernes, en recherche d'alternance 2025. Full-stack JS/TS, React, Next.js, Java, Spring, Supabase.",
  keywords: [
    'Marin Harel',
    'Développeur Web',
    'Développeur Mobile',
    'Portfolio',
    'Alternance',
    'Aix-en-Provence',
    'Full-stack',
    'React',
    'JavaScript',
    'TypeScript',
    'Supabase',
    'Next.js',
    'Spring',
    'Prisma',
    'Git',
    'Développeur Full-stack',
    'Développeur React',
    'Portfolio développeur Aix-en-Provence',
    'Alternance développement web',
  ],
  authors: [{ name: 'Marin Harel', url: 'https://marinharel.fr' }],
  creator: 'Marin Harel',
  publisher: 'Marin Harel',
  alternates: {
    canonical: 'https://marinharel.fr',
  },
  openGraph: {
    title: 'Portfolio - Marin Harel | Développeur Web & Mobile',
    description:
      "Portfolio de Marin Harel, développeur web et mobile spécialisé Fullstack JavaScript/TypeScript: React, Next.js, Node, Java, Spring, à la recherche d'une alternance 2025.",
    url: 'https://marinharel.fr',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Portfolio Marin Harel',
    images: [
      {
        url: 'https://marinharel.fr/img/CorsicAroma.png',
        width: 1200,
        height: 675,
        alt: 'Project CorsicAroma - Marin Harel Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marin Harel | Portfolio Développeur à Aix',
    description:
      "Portfolio de Marin Harel, développeur web full-stack en recherche d'alternance à Aix-en-Provence.",
    creator: '@marinH',
    images: ['https://marinharel.fr/img/CorsicAroma.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Vous pouvez ajouter vos codes de vérification ici
    // google: 'votre-code-google',
    // yandex: 'votre-code-yandex',
    // yahoo: 'votre-code-yahoo',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#141014" />
        {/* Balise Open Graph (fallback) */}
        <meta
          property="og:title"
          content="Portfolio - Marin Harel | Développeur Web & Mobile à Aix-en-Provence"
        />
        <meta
          property="og:description"
          content="Portfolio de Marin Harel, développeur web et mobile à Aix-en-Provence, en recherche d'alternance 2025. React, Next.js, Java, Supabase..."
        />
        <meta property="og:image" content="https://marinharel.fr/img/CorsicAroma.png" />
        <meta property="og:url" content="https://marinharel.fr" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <link rel="canonical" href="https://marinharel.fr" />
        {/* Twitter Card fallback */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Marin Harel | Portfolio Développeur à Aix"
        />
        <meta
          name="twitter:description"
          content="Portfolio de Marin Harel, développeur web full-stack en recherche d'alternance à Aix-en-Provence."
        />
        <meta name="twitter:image" content="https://marinharel.fr/img/CorsicAroma.png" />
        <meta name="author" content="Marin Harel" />
        <meta name="geo.region" content="FR-93" />
        <meta name="geo.placename" content="Aix-en-Provence" />
        {/* Schema.org Person */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Marin Harel',
              jobTitle: 'Développeur Web & Mobile',
              url: 'https://marinharel.fr',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Aix-en-Provence',
                addressRegion: 'Provence-Alpes-Côte d\'Azur',
                addressCountry: 'FR',
              },
              email: 'marinh1812@gmail.com',
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'Ynov Campus',
              },
              sameAs: [
                'https://marinharel.fr',
                'https://github.com/harelmarin',
              ],
              knowsAbout: [
                'Développement Web',
                'Développement Mobile',
                'React',
                'Next.js',
                'JavaScript',
                'TypeScript',
                'Java',
                'Spring',
                'Supabase',
              ],
            }),
          }}
        />
      </head>
      <body className={`${integral.variable} ${paralucent.variable} ${spaceMono.variable} bg-[#050505] text-[#f5f5f0] font-sans antialiased overflow-x-hidden`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
