import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Portfolio - Marin Harel | Développeur Web & Mobile',
    short_name: 'Marin Harel',
    description: "Portfolio de Marin Harel, développeur web et mobile à Ajaccio / Aix-en-Provence.",
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#141014',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}

