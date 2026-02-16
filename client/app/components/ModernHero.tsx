'use client';
import { motion } from 'framer-motion';
import ContactButton from './ContactButton';

const ModernHero = () => {
    return (
        <section className="relative section-container min-h-[90vh] flex flex-col items-center justify-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center"
            >
                <div className="flex items-center gap-2 mb-10 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                    </span>
                    <span className="font-inter text-[10px] font-bold text-blue-800 uppercase tracking-wider">
                        Disponible pour une alternance 2026
                    </span>
                </div>

                <h1 className="font-archivo text-4xl md:text-6xl font-black tracking-tighter text-black mb-8 leading-tight">
                    Développeur Logiciel<br />
                    <span className="text-black/40" role="text" aria-label="Étudiant en troisième année">Étudiant en 3ème année.</span>
                </h1>

                <p className="text-lg md:text-xl font-inter font-medium text-black/60 max-w-lg mb-12 leading-relaxed">
                    Passionné par la conception d'applications robustes et l'ingénierie logicielle, avec une appétence pour le DevOps.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                    <a
                        href="#mes-projets"
                        className="px-8 py-3 bg-black text-white rounded-full font-inter text-[13px] font-black transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/5"
                    >
                        Mes Projets
                    </a>
                    <a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-8 py-3 bg-white border border-black/10 text-black rounded-full font-inter text-[13px] font-black transition-all hover:border-black hover:bg-black/5 active:scale-95"
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
                    <ContactButton />
                </div>
            </motion.div>

            {/* Scroll Indicator - Hidden on mobile to avoid overlap */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            >
                <span className="text-[10px] font-spacemono uppercase tracking-widest text-black/30">Scroll</span>
                <motion.div
                    animate={{ height: [0, 40, 0], y: [0, 0, 40] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] bg-black/20"
                />
            </motion.div>
        </section>
    );
};

export default ModernHero;
