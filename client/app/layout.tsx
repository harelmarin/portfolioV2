import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Marin Harel | Développeur Web & Mobile à Aix-en-Provence',
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
  ],
  openGraph: {
    title: 'Portfolio - Marin Harel | Développeur Web & Mobile',
    description:
      "Portfolio de Marin Harel, développeur web et mobile spécialisé Fullstack JavaScript/TypeScript: React, Next.js, Node, Java, Spring, à la recherche d'une alternance 2025.",
    url: 'https://harelmarin.github.io/Portfolio/',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Portfolio Marin Harel',
    images: [
      {
        url: '/img/CorsicAroma.png',
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
    images: ['/img/CorsicAroma.png'],
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
        <meta property="og:image" content="/img/CorsicAroma.png" />
        <meta property="og:type" content="website" />
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
        <meta name="twitter:image" content="/img/CorsicAroma.png" />
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
              url: 'https://harelmarin.github.io/Portfolio/',
              address: {
                addressLocality: 'Aix-en-Provence',
                addressCountry: 'France',
              },
              email: 'marinh1812@gmail.com',
              alumniOf: 'Ynov Campus',
              sameAs: ['https://harelmarin.github.io/Portfolio/'],
            }),
          }}
        />
      </head>
      <body className="bg-[#0f0f12] text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
