import ProjectGallery from './ProjectGallery';
import Typewriter from './Typewriter';
import ExperienceAccordion from './ExperienceAccordion';
import ContactButton from './ContactButton';

export type Project = {
  title: string;
  description: string;
  image: string;
  video: string;
  stacks: string[];
};

const projects: Project[] = [
  {
    title: 'CorsicAroma',
    description:
      "Interface web de recommandation d'huiles essentielles corses.",
    image: '',
    video: '/img/CorsicAroma-pres.mp4',
    stacks: ['React', 'Tailwind', 'Supabase', 'Git'],
  },
  {
    title: 'CultureClash',
    description: 'Application mobile de Quizz culturel avec websocket',
    image: '',
    video: '/img/Culture.mp4',
    stacks: [
      'React Native',
      'Tailwind',
      'MySQL',
      'NestJS',
      'Prisma',
      'Websocket',
      'Git',
    ],
  },

  {
    title: 'Interface Gestion de garage',
    description: 'Interface de gestion de garage pour un garage automobile',
    image: '',
    video: '/img/Garage.mp4',
    stacks: ['React', 'Tailwind', 'NestJS', 'Prisma', 'Git', 'MySQL'],
  },

  {
    title: 'Wethefoot',
    description: 'Boutique en ligne de vêtements de foot',
    image: '',
    video: '/img/wethefoot.mp4',
    stacks: ['JavaScript', 'Git'],
  },

  {
    title: 'U Buscu',
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
    media: null,
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
    media: { type: 'video' as const, src: '/img/CorsicAroma-pres.mp4' },
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
    media: { type: 'video' as const, src: '/img/Buscu.mp4' },
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
    <div className="min-h-screen bg-[#141014] text-white">
      <section className="container mx-auto px-6 pt-20 pb-20 md:pb-28 flex justify-center">
        <div className="w-full max-w-2xl mx-auto px-8 py-12 text-center flex flex-col items-center bg-black/70 border border-white/10 rounded-[2.5rem] backdrop-blur-sm">
          <h1 className="font-integral text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-800 mb-4">
            Marin Harel
          </h1>
          <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-purple-700 to-indigo-800 mb-7 opacity-90" />
          <div
            className="mb-4 text-lg md:text-2xl min-h-[2.3em] font-semibold text-purple-300 flex justify-center items-center gap-2"
            aria-label="Présentation animée"
          >
            <Typewriter
              words={[
                'Étudiant',
                'Développeur Full-stack',
                'Passionné',
                'Créatif',
                'Curieux',
              ]}
            />
          </div>
          <p className="text-base md:text-lg text-white/90 font-normal max-w-xl mb-8 leading-[1.7]">
            Étudiant en Bachelor 3 à Aix Ynov, passionné de développement web &
            mobile, j'aime créer et mettre en place des projets innovants et
            interressants.
            <br />
            Basé à Aix-en-Provence, toujours curieux d'explorer et d'apprendre !
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-1">
            <a
              href="#mes-projets"
              className="cursor-pointer px-5 py-2 rounded-full border border-white/15 text-white/90 font-normal bg-transparent hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 ring-white/10 shadow-sm flex items-center gap-2 transition-all"
              style={{ transition: 'all .14s cubic-bezier(.4,0,.2,1)' }}
            >
              Voir mes projets
            </a>
            <ContactButton />
            <a
              href="https://github.com/harelmarin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Voir le GitHub de Marin Harel"
              className="cursor-pointer p-2 rounded-full border border-white/15 text-white/80 bg-transparent hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 ring-white/10 shadow-sm flex items-center gap-1 transition-all w-10 h-10 justify-center group"
              style={{ transition: 'all .14s cubic-bezier(.4,0,.2,1)' }}
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="currentColor"
                className="inline-block align-middle group-hover:scale-110 transition-transform duration-150"
              >
                <path d="M12 2C6.476 2 2 6.485 2 12.021c0 4.428 2.867 8.181 6.839 9.504.5.09.682-.217.682-.483v-1.693c-2.782.605-3.369-1.343-3.369-1.343-.454-1.153-1.11-1.461-1.11-1.461-.908-.62.07-.608.07-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.092-.648.35-1.09.636-1.341-2.221-.253-4.555-1.115-4.555-4.962 0-1.096.39-1.993 1.029-2.695-.103-.254-.447-1.276.098-2.658 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.908-1.295 2.746-1.025 2.746-1.025.547 1.382.202 2.404.1 2.658.64.702 1.027 1.599 1.027 2.695 0 3.857-2.337 4.705-4.565 4.955.359.309.678.92.678 1.855v2.75c0 .268.18.577.688.479C19.137 20.2 22 16.447 22 12.021 22 6.485 17.523 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section id="mes-projets" className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-integral text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-800 tracking-tight mb-2 inline-flex gap-2 items-center justify-center">
            <span role="img" aria-label="projets"></span> Mes Projets
          </h2>
          <div
            className="mx-auto rounded-full h-[5px] w-28 bg-gradient-to-r from-purple-700 to-indigo-800 opacity-95"
            style={{ boxShadow: '0 2px 8px 0 rgba(101,62,255,0.13)' }}
          />
        </div>
        <ProjectGallery projects={projects} />
      </section>
      <section
        id="experiences"
        className="container mx-auto px-6 pt-4 pb-20 mt-20"
      >
        <div className="text-center mb-10">
          <h2 className="font-integral text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-800 tracking-tight mb-2 inline-flex items-center justify-center">
            Expériences professionnelles
          </h2>
          <div
            className="mx-auto rounded-full h-[5px] w-36 bg-gradient-to-r from-purple-700 to-indigo-800 opacity-95"
            style={{ boxShadow: '0 2px 8px 0 rgba(101,62,255,0.13)' }}
          />
        </div>
        <ExperienceAccordion experiences={experiences} />
      </section>
      <footer className="container mx-auto px-6 py-12 text-center">
        <p className="text-gray-200">© 2025 - Conçu par Marin Harel</p>
      </footer>
    </div>
  );
};

export default Home;
