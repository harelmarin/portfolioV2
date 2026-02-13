'use client';
import React, { useState } from 'react';
import Intro from './Intro';
import Home from './HomePage';
import { AnimatePresence, motion } from 'framer-motion';
import SmoothScroll from './SmoothScroll';

export default function MainApp() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!introComplete ? (
        <motion.div
          key="intro"
          exit={{ opacity: 0, y: -50, rotateX: 10, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-white transform-gpu origin-top"
        >
          <Intro name="MARIN HAREL" onComplete={() => setIntroComplete(true)} />
        </motion.div>
      ) : (
        <SmoothScroll>
          <motion.div
            key="home"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Home />
          </motion.div>
        </SmoothScroll>
      )}
    </AnimatePresence>
  );
}

