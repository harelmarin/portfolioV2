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
      className={`cursor-pointer relative px-6 py-3 border border-black/10 text-black font-inter text-[12px] font-bold rounded-full hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-3`}
    >
      <span>Contact</span>
      {copied && (
        <span className="absolute left-1/2 -bottom-12 -translate-x-1/2 px-4 py-2 bg-black text-white text-[10px] rounded-lg tracking-wider uppercase font-bold whitespace-nowrap z-50">
          Email Copied
        </span>
      )}
    </button>
  );
};

export default ContactButton;
