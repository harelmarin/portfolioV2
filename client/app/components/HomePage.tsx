import FloatingHeader from './FloatingHeader';
import ModernHero from './ModernHero';
import ModernProjectGallery from './ModernProjectGallery';
import ModernExperienceTimeline from './ModernExperienceTimeline';
import BackgroundEffects from './BackgroundEffects';
import ContactButton from './ContactButton';
import { motion } from 'framer-motion';
import HorizontalMarquee from './HorizontalMarquee';
import Magnetic from './Magnetic';

// ... (previous code)
export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  video: string;
  stacks: string[];
  link?: string;
  isLive?: boolean;
  detailedDescription?: string;
  stackDetails?: {
    frontend?: string;
    backend?: string;
    infra?: string;
  };
};

const projects: Project[] = [
  {
    title: 'kickrhq.com',
    category: 'Application Web Fullstack',
    description:
      "Plateforme sociale de notation footballistique. KickrHQ agrège des données de matchs pour permettre aux utilisateurs de noter leurs rencontres et suivre l'activité de leurs proches. Architecture Spring Boot / React auto-hébergée sur VPS personnel.",
    detailedDescription:
      "Plateforme complète dédiée aux passionnés de football et de statistiques. KickrHQ agrège, analyse et visualise des données de matchs en temps réel. Développée avec une approche 'Clean Architecture', l'application garantit performance et maintenabilité. Le backend Spring Boot gère des millions d'événements, tandis que le frontend React offre une expérience utilisateur fluide et interactive. L'infrastructure, entièrement conteneurisée et orchestrée sur un VPS privé, démontre une maîtrise complète du cycle de vie logiciel, du code au déploiement.",
    image: '/img/kickr.png',
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
    video: '/img/CorsicAroma-pres.mp4',
    stacks: ['React', 'Tailwind', 'Supabase', 'Git'],
    stackDetails: {
      frontend: 'React, Tailwind CSS, Framer Motion',
      backend: 'Supabase (PostgreSQL), Edge Functions',
      infra: 'Vercel, Git'
    }
  },
];

const experiences = [
  {
    title: 'Alternant Développeur logiciel',
    company: 'Glintware',
    period: '2025 — 2026',
    location: 'Aix-en-Provence',
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

const Home = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <BackgroundEffects />
      <FloatingHeader />

      <main className="relative z-10 pt-20">
        <div id="home" className="mb-20">
          <ModernHero />
        </div>

        <HorizontalMarquee text="Mes Projets" speed={40} direction={-1} className="mb-12" />

        <h2 className="sr-only">Mes Projets</h2>
        {/* Section Projets */}
        <section id="mes-projets" className="section-container mb-80">
          <ModernProjectGallery projects={projects} />
        </section>

        {/* Section Expérience */}
        <h2 className="sr-only">Mes Expériences</h2>
        <HorizontalMarquee text="Mes Expériences" speed={50} direction={1} className="mb-12" />
        <section id="experiences" className="section-container mb-64">
          <ModernExperienceTimeline experiences={experiences} />
        </section>

        {/* Section Contact Minimaliste - Hero Style */}
        <h2 className="sr-only">Me Contacter</h2>
        <HorizontalMarquee text="Me Contacter" speed={60} direction={-1} className="mb-12" />
        <section id="contact" className="section-container pb-32 md:pb-40 mb-12 md:mb-0 border-t border-transparent flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex flex-col items-center">

              <h3 className="font-archivo text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 text-black leading-[0.9] uppercase">
                Recherche<br />d'Alternance<br />pour 2026.
              </h3>

              <p className="text-black/60 text-lg md:text-2xl mb-12 font-medium max-w-xl mx-auto leading-relaxed">
                Disponible sur Aix-en-Provence ou Ajaccio.
              </p>

              <div className="flex flex-wrap gap-4 items-center justify-center">
                <Magnetic>
                  <ContactButton />
                </Magnetic>
                <Magnetic>
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-8 py-3 bg-white border border-black/10 text-black rounded-full font-inter text-[13px] font-black transition-all hover:border-black hover:bg-black/5 active:scale-95 block"
                  >
                    <span>Mon CV</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:translate-y-0.5"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="https://github.com/harelmarin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-full border border-black/20 bg-white hover:bg-black hover:text-white hover:border-black transition-all duration-300 font-inter text-[13px] font-black text-black block"
                  >
                    GitHub
                  </a>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="w-full py-8 md:py-12 mt-12 border-t border-black/5">
        <div className="section-container flex flex-col md:flex-row items-center justify-between text-black/60 text-[11px] md:text-[12px] font-spacemono font-bold uppercase tracking-widest gap-4">
          <div className="flex gap-2 md:gap-4">
            <span>© 2026 Marin Harel</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-black/10" />
          <div className="flex gap-4">
            <span>Aix-en-Provence, FR</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
