'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeHash, setActiveHash] = useState('#home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);


            const sections = ['home', 'mes-projets', 'experiences', 'contact'];
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveHash(`#${section}`);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: '#home' },
        { name: 'Projets', href: '#mes-projets' },
        { name: 'Parcours', href: '#experiences' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div className="fixed top-6 left-0 right-0 z-[50] flex justify-center pointer-events-none">
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-auto"
            >
                <nav className="flex items-center gap-1 p-1 bg-white/80 backdrop-blur-md border border-[#e4e4e7] rounded-full shadow-sm">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`relative px-4 py-2 font-inter text-[13px] font-medium transition-colors duration-300 ${activeHash === link.href ? 'text-black' : 'text-[#71717a] hover:text-black'
                                }`}
                        >
                            {activeHash === link.href && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-[#f4f4f5] rounded-full -z-0"
                                    transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                                />
                            )}
                            <span className="relative z-10">{link.name}</span>
                        </a>
                    ))}
                </nav>
            </motion.header>
        </div>
    );
};

export default FloatingHeader;
