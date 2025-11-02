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
  // Structured data pour les projets
  const projectsStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Portfolio de projets - Marin Harel',
    description: 'Collection de projets de développement web et mobile',
    itemListElement: projects.map((project, index) => ({
      '@type': 'SoftwareApplication',
      position: index + 1,
      name: project.title,
      description: project.description,
      applicationCategory: 'WebApplication',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/OnlineOnly',
      },
      creator: {
        '@type': 'Person',
        name: 'Marin Harel',
      },
    })),
  };

  // Structured data pour les expériences professionnelles
  const experiencesStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Expériences professionnelles - Marin Harel',
    itemListElement: experiences.map((exp, index) => ({
      '@type': 'OrganizationRole',
      position: index + 1,
      roleName: exp.title,
      startDate: exp.period.split('—')[0].trim(),
      endDate: exp.period.includes('—') ? exp.period.split('—')[1].trim() : undefined,
      worksFor: {
        '@type': 'Organization',
        name: exp.company,
        address: {
          '@type': 'PostalAddress',
          addressLocality: exp.location,
          addressCountry: 'FR',
        },
      },
    })),
  };

  return (
    <>
      {/* Structured Data pour les projets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsStructuredData),
        }}
      />
      {/* Structured Data pour les expériences */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(experiencesStructuredData),
        }}
      />
      <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0]">
        <main>
          <section className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-28 md:pt-32 pb-20 sm:pb-28 md:pb-40 flex justify-center" itemScope itemType="https://schema.org/Person">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 text-center flex flex-col items-center">
          <h1 className="font-integral text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.05em] sm:tracking-[0.08em] text-[#f5f5f0] mb-6 sm:mb-8 leading-[1.1]">
            <span className="block sm:inline" itemProp="givenName">Marin</span>
            <span className="block sm:inline sm:ml-10" itemProp="familyName">Harel</span>
          </h1>
          <div className="w-24 sm:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-6 sm:mb-10" />
          <div
            className="mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl lg:text-3xl min-h-[2.3em] font-light text-[#e8e5df] tracking-[0.12em] sm:tracking-[0.15em] flex justify-center items-center gap-2"
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
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e8e5df]/90 font-light max-w-2xl mb-8 sm:mb-12 leading-relaxed sm:leading-[2.2] tracking-wide px-4">
            Étudiant en Bachelor 3 à Aix Ynov, passionné de développement web &
            mobile, j'aime créer et mettre en place des projets innovants et
            intéressants.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-[#d4af37]/80">Basé à Aix-en-Provence</span>, toujours curieux d'explorer et d'apprendre !
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mt-2 sm:mt-4">
            <a
              href="#mes-projets"
              className="cursor-pointer px-6 sm:px-8 py-2.5 sm:py-3 border border-[#d4af37]/30 text-[#f5f5f0] font-light tracking-[0.1em] bg-transparent hover:bg-[#d4af37]/10 hover:border-[#d4af37]/60 focus:outline-none transition-all duration-500 text-xs sm:text-sm uppercase"
              style={{ 
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                letterSpacing: '0.12em'
              }}
            >
              Voir mes projets
            </a>
            <ContactButton />
            <a
              href="https://github.com/harelmarin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Voir le GitHub de Marin Harel"
              className="cursor-pointer p-2.5 sm:p-3 border border-[#d4af37]/30 text-[#f5f5f0]/70 bg-transparent hover:bg-[#d4af37]/10 hover:border-[#d4af37]/60 hover:text-[#f5f5f0] focus:outline-none transition-all duration-500 flex items-center justify-center group"
              style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                className="sm:w-5 sm:h-5 inline-block align-middle group-hover:scale-110 transition-transform duration-500"
                fill="currentColor"
              >
                <path d="M12 2C6.476 2 2 6.485 2 12.021c0 4.428 2.867 8.181 6.839 9.504.5.09.682-.217.682-.483v-1.693c-2.782.605-3.369-1.343-3.369-1.343-.454-1.153-1.11-1.461-1.11-1.461-.908-.62.07-.608.07-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.092-.648.35-1.09.636-1.341-2.221-.253-4.555-1.115-4.555-4.962 0-1.096.39-1.993 1.029-2.695-.103-.254-.447-1.276.098-2.658 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.908-1.295 2.746-1.025 2.746-1.025.547 1.382.202 2.404.1 2.658.64.702 1.027 1.599 1.027 2.695 0 3.857-2.337 4.705-4.565 4.955.359.309.678.92.678 1.855v2.75c0 .268.18.577.688.479C19.137 20.2 22 16.447 22 12.021 22 6.485 17.523 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section id="mes-projets" className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-20" itemScope itemType="https://schema.org/ItemList">
        <div className="text-center mb-12 sm:mb-20 md:mb-28">
          <h2 className="font-integral text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#f5f5f0] tracking-[0.08em] mb-4 sm:mb-6 inline-flex gap-2 items-center justify-center">
            Mes Projets
          </h2>
          <div className="mx-auto w-20 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </div>
        <ProjectGallery projects={projects} />
      </section>
      <section
        id="experiences"
        className="container mx-auto px-4 sm:px-6 pt-8 pb-20 sm:pb-32 mt-16 sm:mt-32"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div className="text-center mb-12 sm:mb-20 md:mb-28">
          <h2 className="font-integral text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#f5f5f0] tracking-[0.08em] mb-4 sm:mb-6 inline-flex items-center justify-center">
            Expériences professionnelles
          </h2>
          <div className="mx-auto w-24 sm:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </div>
        <ExperienceAccordion experiences={experiences} />
      </section>
        </main>
      <footer className="container mx-auto px-6 py-16 text-center border-t border-[#d4af37]/10" itemScope itemType="https://schema.org/WPFooter">
        <p className="text-[#e8e5df]/60 text-sm tracking-[0.1em] font-light uppercase">© 2025 - Conçu par <span itemProp="name">Marin Harel</span></p>
      </footer>
    </div>
    </>
  );
};

export default Home;
