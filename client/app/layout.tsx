import './globals.css';
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
  title: 'Marin Harel | Développeur Web & Mobile Ajaccio / Aix-en-Provence',
  description:
    "Développeur web et mobile basé à Ajaccio / Aix-en-Provence. Spécialisé Full-stack React, Next.js, Java Spring.",
  keywords: [
    'Marin Harel',
    'Développeur Web',
    'Développeur Mobile',
    'Développeur Full-stack',
    'React',
    'Next.js',
    'Java Spring',
    'Ajaccio',
    'Aix-en-Provence',
    'Freelance',
    'Portfolio',
    'Logiciel',
  ],
  authors: [{ name: 'Marin Harel', url: 'https://github.com/harelmarin' }],
  creator: 'Marin Harel',
  publisher: 'Marin Harel',
  alternates: {
    canonical: 'https://marinharel.fr',
    languages: {
      'fr-FR': 'https://marinharel.fr',
    },
  },
  openGraph: {
    title: 'Marin Harel | Développeur Web & Mobile',
    description:
      "Portfolio de Marin Harel, développeur full-stack spécialisé React & Spring. Découvrez mes projets et mon parcours à Ajaccio et Aix-en-Provence.",
    url: 'https://marinharel.fr',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Portfolio Marin Harel',
    images: [
      {
        url: '/img/kickr.png',
        width: 1200,
        height: 630,
        alt: 'Aperçu du Portfolio de Marin Harel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marin Harel | Développeur Web & Mobile',
    description:
      "Développeur full-stack basé à Ajaccio / Aix-en-Provence. Spécialisé en React, Next.js et Java Spring.",
    images: ['/img/kickr.png'],
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
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta name="author" content="Marin Harel" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="Ajaccio / Aix-en-Provence" />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Marin Harel',
              jobTitle: 'Développeur Logiciel Full-stack',
              url: 'https://marinharel.fr',
              image: 'https://marinharel.fr/img/kickr.png',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Ajaccio / Aix-en-Provence',
                addressRegion: 'Corse / PACA',
                addressCountry: 'FR',
              },
              email: 'marinh1812@gmail.com',
              sameAs: [
                'https://github.com/harelmarin',
              ],
              knowsAbout: [
                'React',
                'Next.js',
                'Java Spring Boot',
                'Java 21',
                'JavaFX',
                'TypeScript',
                'Docker',
                'DevOps',
                'Full-stack development',
              ],
            }),
          }}
        />
      </head>
      <body className={`${archivo.variable} ${inter.variable} ${spaceMono.variable} bg-white text-black font-sans antialiased overflow-x-hidden`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
