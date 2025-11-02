'use client';
import React, { useState } from 'react';

const EMAIL = 'marinh1812@gmail.com';

const ContactButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      tabIndex={0}
      aria-label="Copier l'e-mail"
      onClick={handleCopy}
      className={`cursor-pointer relative px-6 sm:px-8 py-2.5 sm:py-3 border border-[#d4af37]/30 text-[#f5f5f0] font-light tracking-[0.1em] bg-transparent hover:bg-[#d4af37]/10 hover:border-[#d4af37]/60 focus:outline-none transition-all duration-500 text-xs sm:text-sm uppercase flex items-center gap-2 sm:gap-3 select-all`}
      style={{ 
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        letterSpacing: '0.12em'
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        className="text-[#d4af37]"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M21 8.97V16A2 2 0 0 1 19 18H5A2 2 0 0 1 3 16V8.97M21 8.97A2 2 0 0 0 19 6H5a2 2 0 0 0-2 2.97m18 0L12 14.5 3 8.97"
        />
      </svg>
      <span className="font-light">{EMAIL}</span>
      {copied && (
        <span className="absolute left-1/2 -bottom-10 -translate-x-1/2 px-4 py-2 bg-[#0f0f0f] border border-[#d4af37]/40 text-[#d4af37] text-xs tracking-[0.1em] uppercase transition-all duration-500">
          Adresse copiée&nbsp;!
        </span>
      )}
    </button>
  );
};

export default ContactButton;
