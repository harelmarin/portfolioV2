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
                style={{ y: y2, opacity: opacity.get() * 0.015 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0"
            >
                <h2 className="font-archivo text-[15vw] md:text-[18vw] leading-none text-outline uppercase tracking-[0.1em]">
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
                            <h1 className="font-archivo text-5xl sm:text-6xl md:text-7xl lg:text-[8.5rem] leading-[0.8] tracking-[-0.04em] mix-blend-difference">
                                MARIN
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            style={{ y: y2 }}
                            className="md:ml-24 mt-0"
                        >
                            <h1 className="font-archivo text-5xl sm:text-6xl md:text-7xl lg:text-[8.5rem] leading-[0.8] tracking-[-0.04em] text-[#d4af37]">
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
                            transition={{ duration: 1.2, delay: 0.8 }}
                            className="p-8 md:p-10 rounded-[2rem] border border-white/5 backdrop-blur-xl relative"
                        >
                            {/* Subtle corner accent */}
                            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#d4af37]/30 rounded-tl-xl" />

                            <div className="font-spacemono text-[#d4af37]/60 text-[10px] mb-2 tracking-[0.4em] uppercase">
                                // Portfolio 26'
                            </div>
                            <div className="flex items-center gap-2 mb-8">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#d4af37]"></span>
                                </span>
                                <span className="font-spacemono text-[#d4af37]/80 text-[10px] tracking-[0.2em] uppercase">Disponible Alternance 2026</span>
                            </div>
                            <div className="text-xl md:text-2xl font-light mb-8 text-[#e8e5df] min-h-[1.5em] leading-tight tracking-wide">
                                <Typewriter
                                    words={['INNOVATION', 'ARCHITECTURE', 'DIGITAL CRAFT']}
                                />
                            </div>
                            <p className="text-[#e8e5df]/40 text-sm leading-relaxed mb-10 font-light tracking-wide">
                                Ingénieur logiciel spécialisé dans la conception d'applications robustes et d'expériences numériques de haute précision.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <motion.a
                                    whileHover={{ scale: 1.02, backgroundColor: '#d4af37', color: '#000' }}
                                    whileTap={{ scale: 0.98 }}
                                    href="#mes-projets"
                                    className="px-8 py-4 border border-white/10 text-white font-spacemono uppercase tracking-[0.2em] text-[10px] transition-all"
                                >
                                    Découvrir
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
