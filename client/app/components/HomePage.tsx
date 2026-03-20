import FloatingHeader from './FloatingHeader';
import ModernHero from './ModernHero';
import ModernProjectGallery from './ModernProjectGallery';
import ModernExperienceTimeline from './ModernExperienceTimeline';
import BackgroundEffects from './BackgroundEffects';
import ContactButton from './ContactButton';
import { motion } from 'framer-motion';
import HorizontalMarquee from './HorizontalMarquee';
import Magnetic from './Magnetic';
import { projects, experiences } from '../data/portfolioData';

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
        
        <section id="mes-projets" className="section-container mb-64">
          <ModernProjectGallery projects={projects} />
        </section>

        
        <h2 className="sr-only">Mes Expériences</h2>
        <HorizontalMarquee text="Mes Expériences" speed={50} direction={1} className="mb-12" />
        <section id="experiences" className="section-container mb-64">
          <ModernExperienceTimeline experiences={experiences} />
        </section>

        
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
                Basé à<br />Ajaccio / Aix.
              </h3>

              <p className="text-black/60 text-lg md:text-2xl mb-12 font-medium max-w-xl mx-auto leading-relaxed">
                N'hésitez pas à me contacter pour toute collaboration.
              </p>

              <div className="flex flex-wrap gap-4 items-center justify-center">
                <Magnetic>
                  <ContactButton />
                </Magnetic>
                <Magnetic>
                  <a
                    href="/cv.pdf"
                    download="CV_Marin_Harel.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-8 py-3 bg-white border border-black/10 text-black rounded-full font-inter text-[13px] font-black transition-all hover:border-black hover:bg-black/5 active:scale-95 block cursor-pointer"
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
                    className="px-8 py-3 rounded-full border border-black/20 bg-white hover:bg-black hover:text-white hover:border-black transition-all duration-300 font-inter text-[13px] font-black text-black block cursor-pointer"
                    
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
            <span>Ajaccio / Aix-en-Provence, FR</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
