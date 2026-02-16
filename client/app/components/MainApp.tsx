'use client';
import React, { useState } from 'react';
import Intro from './Intro';
import Home from './HomePage';
import { AnimatePresence, motion } from 'framer-motion';
import SmoothScroll from './SmoothScroll';

export default function MainApp() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="relative overflow-hidden bg-white min-h-screen">
      <AnimatePresence>
        {!introComplete && (
          <motion.div
            key="intro-content"
            initial={{ y: 0 }}
            exit={{
              y: "-100%",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[100] bg-[#fcfcfc] flex items-center justify-center transform-gpu"
          >
            <Intro name="MARIN HAREL" onComplete={() => setIntroComplete(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className={introComplete ? 'relative' : 'fixed inset-0 opacity-0 pointer-events-none'}>
        <SmoothScroll>
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={introComplete ? {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
            } : { opacity: 0, y: 20 }}
          >
            <Home />
          </motion.div>
        </SmoothScroll>
      </div>
    </div>
  );
}
