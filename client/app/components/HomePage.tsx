import FloatingHeader from './FloatingHeader';
import ModernHero from './ModernHero';
import ModernProjectGallery from './ModernProjectGallery';
import ModernExperienceTimeline from './ModernExperienceTimeline';
import BackgroundEffects from './BackgroundEffects';
import ContactButton from './ContactButton';
import { motion } from 'framer-motion';

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
      "Plateforme d'analyse et de statistiques footballistiques. Architecture robuste entièrement auto-hébergée sur VPS personnel via Docker pour un contrôle total de l'infrastructure.",
    image: '/img/kickr.png',
    video: '',
    stacks: ['Spring Boot', 'React', 'Docker', 'VPS'],
    link: 'https://kickrhq.com',
    isLive: true,
    stackDetails: {
      frontend: 'React / Vite',
      backend: 'Spring Boot 3 / Java 21',
      infra: 'Docker, GitHub Actions (CI/CD), VPS',
    }
  },
  {
    title: 'CorsicAroma',
    category: 'Application Web / Design UX',
    description:
      "Interface web de recommandation d'huiles essentielles corses.",
    image: '',
    video: '/img/CorsicAroma-pres.mp4',
    stacks: ['React', 'Tailwind', 'Supabase', 'Git'],
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
        <div id="home" className="mb-32">
          <ModernHero />
        </div>

        {/* Section Projets */}
        <section id="mes-projets" className="section-container mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            PROJETS SÉLECTIONNÉS
          </motion.div>
          <ModernProjectGallery projects={projects} />
        </section>

        {/* Section Expérience */}
        <section id="experiences" className="section-container mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            PARCOURS
          </motion.div>
          <ModernExperienceTimeline experiences={experiences} />
        </section>

        {/* Section Contact Minimaliste - Hero Style */}
        <section id="contact" className="section-container pb-40 border-t border-transparent flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex flex-col items-center">
              <span className="font-spacemono text-[10px] text-blue-600 uppercase tracking-[0.2em] font-bold block mb-8 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Contact
              </span>

              <h2 className="font-archivo text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 text-black leading-[0.9] uppercase">
                Recherche<br />d'Alternance<br />pour 2026.
              </h2>

              <p className="text-black/60 text-lg md:text-2xl mb-12 font-medium max-w-xl mx-auto leading-relaxed">
                Disponible sur Aix-en-Provence ou Ajaccio.
              </p>

              <div className="flex flex-wrap gap-4 items-center justify-center">
                <ContactButton />
                <a
                  href="https://github.com/harelmarin"
                  target="_blank"
                  className="px-6 py-3 rounded-full border border-black/10 bg-white hover:bg-black hover:text-white hover:border-black transition-all duration-300 font-inter text-[13px] font-bold text-black"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="w-full py-10">
        <div className="section-container flex flex-col items-center justify-center text-black/40 text-[10px] font-spacemono font-bold uppercase tracking-widest gap-2">
          <div className="flex gap-4">
            <span>© 2026 Marin Harel</span>
            <span>—</span>
            <span>Aix-en-Provence, FR</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
