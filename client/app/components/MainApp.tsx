'use client';
import React, { useState } from 'react';
import Intro from './Intro';
import Home from './HomePage';
import { AnimatePresence, motion } from 'framer-motion';
import SmoothScroll from './SmoothScroll';
import CustomCursor from './CustomCursor';

export default function MainApp() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!introComplete ? (
        <motion.div
          key="intro"
          exit={{ opacity: 0, y: -20, scale: 1.1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Intro name="MARIN HAREL" onComplete={() => setIntroComplete(true)} />
        </motion.div>
      ) : (
        <SmoothScroll>
          <CustomCursor />
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Home />
          </motion.div>
        </SmoothScroll>
      )}
    </AnimatePresence>
  );
}

