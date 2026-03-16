import { Project, Experience } from '../types';

export const projects: Project[] = [
  {
    title: 'kickrhq.com',
    category: 'Application Web Fullstack',
    description:
      "Plateforme sociale de notation footballistique. KickrHQ agrège des données de matchs pour permettre aux utilisateurs de noter leurs rencontres et suivre l'activité de leurs proches. Architecture Spring Boot / React auto-hébergée sur VPS personnel.",
    detailedDescription:
      "Plateforme complète dédiée aux passionnés de football et de statistiques. KickrHQ agrège, analyse et visualise des données de matchs en temps réel. Développée avec une approche 'Clean Architecture', l'application garantit performance et maintenabilité. Le backend Spring Boot gère des millions d'événements, tandis que le frontend React offre une expérience utilisateur fluide et interactive. L'infrastructure, entièrement conteneurisée et orchestrée sur un VPS privé, démontre une maîtrise complète du cycle de vie logiciel, du code au déploiement.",
    image: '/img/kickr.png',
    altImage: 'Interface de la plateforme footballistique KickrHQ montrant les statistiques de match.',
    video: '',
    stacks: ['Spring Boot', 'React', 'Docker', 'VPS'],
    link: 'https://kickrhq.com',
    isLive: true,
    stackDetails: {
      frontend: 'React, Vite, Tailwind',
      backend: 'Spring Boot 3, Java 21, PostgreSQL',
      infra: 'Docker, Nginx, GitHub Actions, VPS Debian',
    }
  },
  {
    title: 'CorsicAroma',
    category: 'Application Web / Design UX',
    description:
      "Application web de recommandation personnalisée d'huiles essentielles corses. Un système basé sur un questionnaire intelligent exploitant la puissance de Supabase pour des conseils sur mesure.",
    detailedDescription:
      "Une immersion numérique dans l'univers des senteurs corses. Ce projet allie design émotionnel et efficacité technique pour guider l'utilisateur vers l'huile essentielle idéale. Au-delà du catalogue e-commerce, l'application propose un questionnaire intelligent qui cerne les besoins de l'utilisateur pour formuler des recommandations personnalisées. L'interface, minimaliste et élégante, met en valeur l'identité visuelle de la marque, tandis que Supabase assure une gestion des données temps réel performante et sécurisée.",
    image: '',
    altImage: 'Aperçu de l\'application CorsicAroma spécialisée dans les huiles essentielles corses.',
    video: '/img/CorsicAroma-pres.mp4',
    stacks: ['React', 'Tailwind', 'Supabase', 'Git'],
    stackDetails: {
      frontend: 'React, Tailwind CSS, Framer Motion',
      backend: 'Supabase (PostgreSQL), Edge Functions',
      infra: 'Vercel, Git'
    }
  },
  {
    title: 'TinyMonitor',
    category: 'Logiciel Système / Widget Desktop',
    description:
      "Widget léger de surveillance des performances système pour macOS et Windows. Suivi en temps réel du CPU, de la RAM et du disque avec une esthétique soignée.",
    detailedDescription:
      "TinyMonitor est un widget de bureau minimaliste conçu pour garder un œil sur les performances de votre machine sans l'encombrer. Développé avec Java 21 et JavaFX, il offre une interface moderne et sombre (Dark Mode) qui s'intègre parfaitement à votre environnement de travail. L'application utilise la bibliothèque OSHI pour récupérer des données système précises et est distribuée sous forme d'installateurs natifs grâce à jpackage. Un projet mettant l'accent sur la performance, la légèreté et l'automatisation via GitHub Actions.",
    image: '/img/TinyMoniter.png',
    altImage: 'Capture d\'écran de l\'application TinyMonitor montrant le widget de surveillance CPU et RAM.',
    video: '',
    stacks: ['Java 21', 'JavaFX', 'Maven', 'OSHI', 'GitHub Actions'],
    link: 'https://github.com/harelmarin/TinyMonitor',
    isLive: false,
    stackDetails: {
      frontend: 'JavaFX, CSS',
      backend: 'Java 21, OSHI',
      infra: 'GitHub Actions (CI/CD), Maven'
    }
  },
];

export const experiences: Experience[] = [
  {
    title: 'Alternant Développeur logiciel',
    company: 'Glintware',
    period: '2025 — 2026',
    location: 'Ajaccio / Aix-en-Provence',
    stack: ['Java', 'Spring', 'Docker', 'Git'],
    description: `Alternance dans une startup éditrice de solution logicielle. J'ai travaillé en équipe sur un projet Java Spring, pris part à la maintenance, aux tests et à l'évolution fonctionnelle d'une application métier.`,
    details: [
      'Développement et maintenance d’applications Java Spring en POO',
      'Implémentation de nouvelles fonctionnalités et refactoring',
      'Tests unitaires et qualité logicielle',
      'Participation aux dailies et revues de code',
    ],
  },
  {
    title: 'Stage — Web service et interface',
    company: 'CorsicAroma',
    period: '2025',
    location: 'Corse',
    stack: ['React', 'Supabase', 'Figma', 'GitHub'],
    description: `Projet numérique autour des huiles essentielles corses. J'ai conçu une appli web interactive, un questionnaire dynamique et une base Supabase pour des recommandations personnalisées, en lien direct avec le client pour l’UX globale.`,
    details: [
      'Interface web réactive et responsive',
      'Modélisation base relationnelle sous Supabase',
      'Maquettes et parcours utilisateur (Figma)',
      'Questionnaire dynamique avec recommandations',
    ],
  },
];
