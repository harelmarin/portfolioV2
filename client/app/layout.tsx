import './globals.css';
import CustomCursor from './components/CustomCursor';
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next';
import { Archivo, Inter } from 'next/font/google';
import localFont from 'next/font/local';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-archivo',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceMono = localFont({
  src: '../public/font/SpaceMono-Bold.ttf',
  variable: '--font-spacemono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://marinharel.fr'),
  title: 'Marin Harel | Développeur Web & Mobile Aix-en-Provence',
  description:
    "Développeur web et mobile à Aix-en-Provence. Spécialisé Full-stack React, Next.js, Java Spring. En recherche d'alternance pour 2026.",
  keywords: [
    'Marin Harel',
    'Développeur Web',
    'Développeur Mobile',
    'Portfolio',
    'Alternance',
    'Aix-en-Provence',
    'Full-stack',
    'React',
    'Next.js',
    'Spring',
  ],
  authors: [{ name: 'Marin Harel' }],
  creator: 'Marin Harel',
  publisher: 'Marin Harel',
  alternates: {
    canonical: 'https://marinharel.fr',
  },
  openGraph: {
    title: 'Marin Harel | Développeur Web & Mobile',
    description:
      "Portfolio de Marin Harel, développeur full-stack spécialisé React & Spring. Recherche alternance 2026.",
    url: 'https://marinharel.fr',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Portfolio Marin Harel',
    images: [
      {
        url: '/img/kickr.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio de Marin Harel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marin Harel | Développeur Web & Mobile',
    description:
      "Développeur full-stack en recherche d'alternance 2026 à Aix-en-Provence.",
    images: ['/img/kickr.png'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="description" content="Développeur web et mobile à Aix-en-Provence. Spécialisé Full-stack React, Next.js, Java Spring. En recherche d'alternance pour 2026." />
        <meta name="author" content="Marin Harel" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="Aix-en-Provence" />
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
              sameAs: [
                'https://github.com/harelmarin',
              ],
              knowsAbout: [
                'React',
                'Next.js',
                'Java Spring',
                'Full-stack development',
              ],
            }),
          }}
        />
      </head>
      <body className={`${archivo.variable} ${inter.variable} ${spaceMono.variable} bg-white text-black font-sans antialiased overflow-x-hidden`}>
        <CustomCursor />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
