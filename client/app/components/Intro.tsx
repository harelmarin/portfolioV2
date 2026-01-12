'use client';
import { motion } from 'framer-motion';

interface IntroProps {
  onComplete: () => void;
  name?: string;
}

const Intro = ({ onComplete, name = 'MARIN HAREL' }: IntroProps) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] overflow-hidden">
      <div className="relative">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-integral text-6xl md:text-9xl font-bold tracking-tighter"
        >
          {name}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={() => {
            setTimeout(onComplete, 1000);
          }}
          className="h-[2px] w-full bg-[#d4af37] mt-4 origin-left"
        />

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-integral text-[15vw] md:text-[20rem] text-outline whitespace-nowrap pointer-events-none select-none -z-10"
        >
          BIENVENUE
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;

