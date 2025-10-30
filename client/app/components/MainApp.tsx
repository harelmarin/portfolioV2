'use client';
import React, { useState } from 'react';
import Intro from './Intro';
import Home from './HomePage';

export default function MainApp() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && (
        <Intro name="Harel Marin" onComplete={() => setIntroComplete(true)} />
      )}
      {introComplete && (
        <div className="animate-fade-in">
          <Home />
        </div>
      )}
    </>
  );
}
