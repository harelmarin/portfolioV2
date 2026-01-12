'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Typewriter from './Typewriter';
import ContactButton from './ContactButton';
import { useRef } from 'react';

const ModernHero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    return (
        <section ref={containerRef} className="relative min-h-[120vh] flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Year Outline */}
            <motion.div
                style={{ y: y2, opacity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.015] whitespace-nowrap z-0"
            >
                <h2 className="font-integral text-[20vw] md:text-[25vw] leading-none text-outline uppercase">
                    CRÉATIF
                </h2>
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div style={{ scale }} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                    {/* Destructured Name */}
                    <div className="md:col-span-8 flex flex-col relative">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            style={{ y: y1 }}
                        >
                            <h1 className="font-integral text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.75] tracking-tighter mix-blend-difference">
                                MARIN
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            style={{ y: y2 }}
                            className="md:ml-32 mt-[-10px] sm:mt-[-20px]"
                        >
                            <h1 className="font-integral text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.75] tracking-tighter text-[#d4af37]">
                                HAREL
                            </h1>
                        </motion.div>

                        {/* Floating decoration lines */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 2, delay: 1 }}
                            className="absolute -left-10 top-1/2 w-40 h-[1px] bg-[#d4af37]/30 hidden md:block"
                        />
                    </div>

                    {/* Intro Text & CTA */}
                    <div className="md:col-span-4 flex flex-col justify-end h-full pt-10 md:pt-0">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="glass p-8 md:p-10 rounded-[2rem] border-t border-l border-white/10 backdrop-blur-2xl relative"
                        >
                            {/* Corner accent */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#d4af37] rounded-tl-xl" />

                            <div className="font-spacemono text-[#d4af37] text-xs mb-6 tracking-[0.3em] uppercase">
                // Portfolio 26'
                            </div>
                            <div className="text-2xl md:text-3xl font-light mb-8 text-[#e8e5df] min-h-[1.5em] leading-tight">
                                <Typewriter
                                    words={['Innovation', 'Code', 'Design', 'Exploration']}
                                />
                            </div>
                            <p className="text-[#e8e5df]/60 text-base leading-relaxed mb-10 font-light">
                                Conception et développement d'applications numériques modernes, performantes et centrées sur l'expérience utilisateur.
                            </p>

                            <div className="flex flex-wrap gap-6">
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="#mes-projets"
                                    className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs transition-all hover:bg-[#d4af37]"
                                >
                                    Projets
                                </motion.a>
                                <ContactButton />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 will-change-transform"
            >
                <span className="font-spacemono text-[10px] text-[#d4af37] tracking-[0.5em] uppercase">Défiler pour entrer</span>
                <div className="w-[1px] h-20 bg-gradient-to-b from-[#d4af37] to-transparent" />
            </motion.div>
        </section>
    );
};

export default ModernHero;
