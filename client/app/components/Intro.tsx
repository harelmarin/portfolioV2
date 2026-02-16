'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface IntroProps {
  onComplete: () => void;
  name?: string;
}

const Intro = ({ onComplete, name = 'MARIN HAREL' }: IntroProps) => {
  const characters = name.split('');
  const [glowIntensity, setGlowIntensity] = useState(0);

  useEffect(() => {
    // Gradual glow intensity towards the end
    const timeout = setTimeout(() => {
      setGlowIntensity(1);
    }, 1000); // Faster glow
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#fcfcfc] overflow-hidden">
      {/* Subtle Blue Inset Glow per Reference */}
      <motion.div
        animate={{
          boxShadow: `inset 0 0 ${60 + glowIntensity * 100}px rgba(59, 130, 246, ${0.03 + glowIntensity * 0.04})`
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="relative z-10">
        {/* Minimalist Character Reveal - Compact & Bold */}
        <h1 className="flex font-archivo text-4xl md:text-6xl font-black tracking-tighter text-black uppercase transform scale-y-110">
          {characters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.04, // Very fast writing speed
                ease: [0.16, 1, 0.3, 1]
              }}
              onAnimationComplete={() => {
                if (i === characters.length - 1) {
                  // Reduced waiting time significantly
                  setTimeout(onComplete, 500);
                }
              }}
              className={char === ' ' ? 'mr-4' : ''}
            >
              {char}
            </motion.span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default Intro;
