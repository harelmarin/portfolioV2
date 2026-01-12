import ModernHero from './ModernHero';
import ModernProjectGallery from './ModernProjectGallery';
import ModernExperienceTimeline from './ModernExperienceTimeline';
import BackgroundEffects from './BackgroundEffects';
import HorizontalMarquee from './HorizontalMarquee';
import { motion } from 'framer-motion';

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  video: string;
  stacks: string[];
};

const projects: Project[] = [
  {
    title: 'CorsicAroma',
    category: 'Web App / UX Design',
    description:
      "Interface web de recommandation d'huiles essentielles corses.",
    image: '',
    video: '/img/CorsicAroma-pres.mp4',
    stacks: ['React', 'Tailwind', 'Supabase', 'Git'],
  },

  {
    title: 'Wethefoot',
    category: 'E-commerce',
    description: 'Boutique en ligne de vêtements de foot',
    image: '',
    video: '/img/wethefoot.mp4',
    stacks: ['JavaScript', 'Git'],
  },

  {
    title: 'U Buscu',
    category: 'E-commerce / Artisanal',
    description:
      'Site e-commerce pour un producteur artisanal corse. Commande en ligne, fiches produits avec animations et backoffice simplifié.',
    image: '',
    video: '/img/Buscu.mp4',
    stacks: ['Next', 'Tailwind', 'Git'],
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
  {
    title: 'Stage — Site vitrine',
    company: 'U Buscu',
    period: '2024',
    location: 'Sari-d’Orcino, Corse',
    stack: ['HTML', 'CSS', 'JavaScript'],
    description: `Création du site vitrine pour présenter une fromagerie-artisan, de la prise de brief à la mise en ligne, avec travail sur le contenu, les maquettes et l’illustration, aux côtés de la fondatrice.`,
    details: [
      'Création d’un site vitrine (QR code sur emballages)',
      'Rédaction de contenu, prises de visuels et mise en page',
      'Itérations design après retours client',
    ],
  },
];

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />

      <main className="relative z-10">
        <ModernHero />

        <HorizontalMarquee text="Expérience Digitale" speed={30} direction={1} />

        {/* Section Projets */}
        <section id="mes-projets" className="container mx-auto px-6 py-16">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-2xl">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-16 h-[1px] bg-[#d4af37]" />
                <span className="font-spacemono text-[#d4af37] text-xs tracking-[0.5em] uppercase">// RÉALISATIONS</span>
              </motion.div>
              <h2 className="font-integral text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.85]">
                MES <span className="text-outline">PROJETS</span>
              </h2>
            </div>
            <p className="font-spacemono text-sm text-white/30 uppercase tracking-[0.2em] md:text-right max-w-xs">
              Une sélection de mes travaux les plus marquants.
            </p>
          </div>
          <ModernProjectGallery projects={projects} />
        </section>

        <HorizontalMarquee text="Parcours Professionnel" speed={25} direction={-1} />

        {/* Section Expérience */}
        <section id="experiences" className="py-16">
          <div className="container mx-auto px-6 mb-20 md:text-right flex flex-col items-end">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="font-spacemono text-[#d4af37] text-xs tracking-[0.5em] uppercase">// CURRICULUM</span>
              <div className="w-16 h-[1px] bg-[#d4af37]" />
            </motion.div>
            <h2 className="font-integral text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.85]">
              LE <span className="text-outline">PARCOURS</span>
            </h2>
          </div>
          <ModernExperienceTimeline experiences={experiences} />
        </section>

        {/* Call to Action Final */}
        <section className="container mx-auto px-6 py-24 text-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative z-10"
          >
            <h2 className="font-integral text-5xl md:text-7xl lg:text-9xl mb-12 tracking-tighter leading-none">
              UNE <span className="text-outline">ALTERNANCE ?</span>
            </h2>
            <p className="text-[#e8e5df]/40 font-spacemono text-lg md:text-xl max-w-3xl mx-auto mb-20 tracking-wider">
              ACTUELLEMENT À LA RECHERCHE D'UNE OPPORTUNITÉ POUR 2026. DISCUTONS DE NOTRE FUTURE COLLABORATION.
            </p>
            <div className="flex justify-center flex-col md:flex-row gap-8 items-center">
              <motion.a
                whileHover={{ scale: 1.1, backgroundColor: '#fff', color: '#000' }}
                href="mailto:marinh1812@gmail.com"
                className="px-10 md:px-20 py-6 md:py-8 border border-white/20 text-white font-integral text-lg md:text-xl uppercase tracking-[0.2em] rounded-full transition-all duration-500 hover:border-white shadow-[0_0_50_px_rgba(255,255,255,0.05)]"
              >
                Parlons-en
              </motion.a>
              <div className="font-spacemono text-[#d4af37] text-sm animate-pulse tracking-widest">
                DISPONIBLE POUR ALTERNANCE // 2026
              </div>
            </div>
          </motion.div>

          {/* Background Text Deco */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] -z-10 select-none pointer-events-none">
            <span className="font-integral text-[30vw]">COLLAB</span>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-center border-t border-white/5 gap-10">
        <div className="flex flex-col gap-4">
          <p className="font-spacemono text-[10px] text-white/30 uppercase tracking-[0.5em]">
            © 2026 MARIN HAREL
          </p>
          <div className="flex gap-10">
            <a href="https://github.com/harelmarin" target="_blank" className="font-spacemono text-[10px] text-white/30 hover:text-[#d4af37] transition-colors uppercase tracking-[0.5em]">GitHub</a>
          </div>
        </div>
        <div className="font-integral text-2xl text-white/10 tracking-widest uppercase">
          MARIN HAREL
        </div>
      </footer>
    </div>
  );
};

export default Home;
