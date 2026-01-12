'use client';
import React, { useState } from 'react';

const EMAIL = 'marinh1812@gmail.com';

const ContactButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      tabIndex={0}
      aria-label="Copier l'e-mail"
      onClick={handleCopy}
      className={`cursor-pointer relative px-8 py-4 border border-white/20 text-[#f5f5f0] font-integral tracking-[0.2em] bg-transparent hover:bg-white hover:text-black focus:outline-none transition-all duration-500 text-xs uppercase flex items-center gap-3`}
    >
      <span>Copier le mail</span>
      {copied && (
        <span className="absolute left-1/2 -bottom-10 -translate-x-1/2 px-4 py-2 bg-[#0f0f0f] border border-[#d4af37]/40 text-[#d4af37] text-xs tracking-[0.1em] uppercase transition-all duration-500">
          Adresse copiée&nbsp;!
        </span>
      )}
    </button>
  );
};

export default ContactButton;
