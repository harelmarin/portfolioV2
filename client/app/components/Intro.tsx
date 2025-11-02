'use client';
import { useEffect, useState } from 'react';

interface IntroProps {
  onComplete: () => void;
  name?: string;
}

const Intro = ({ onComplete, name = 'Marin Harel' }: IntroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const enterTimeout = setTimeout(() => setIsVisible(true), 120);
    const leaveTimeout = setTimeout(() => setIsLeaving(true), 2500);
    const completeTimeout = setTimeout(() => onComplete(), 3200);
    return () => {
      clearTimeout(enterTimeout);
      clearTimeout(leaveTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] transition-opacity duration-700 ${
        isLeaving ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)' }}
    >
      <div className="text-center">
        <h1
          className={`font-integral text-6xl md:text-8xl lg:text-9xl font-bold text-[#f5f5f0] tracking-[0.08em] transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          {name}
        </h1>
        <div
          className={`mt-8 h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s' }}
        />
      </div>
    </div>
  );
};

export default Intro;
