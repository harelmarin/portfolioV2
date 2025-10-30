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
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#141014] transition-opacity duration-700 ${
        isLeaving ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <h1
          className={`font-integral text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-700 to-indigo-800 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {name}
        </h1>
        <div
          className={`mt-6 h-1 w-32 mx-auto bg-gradient-to-r from-purple-700 to-indigo-800 rounded-full transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        />
      </div>
    </div>
  );
};

export default Intro;
