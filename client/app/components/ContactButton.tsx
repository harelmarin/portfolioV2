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
      className={`cursor-pointer relative px-5 py-2 rounded-full border border-purple-500/40 text-purple-200 font-normal bg-transparent hover:bg-purple-700/10 hover:text-purple-100 focus:outline-none focus:ring-2 ring-purple-400/30 shadow-sm flex items-center gap-2 transition-all select-all`}
      style={{ transition: 'all .14s cubic-bezier(.4,0,.2,1)' }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        className="text-purple-400"
      >
        <path
          d="M21 8.97V16A2 2 0 0 1 19 18H5A2 2 0 0 1 3 16V8.97M21 8.97A2 2 0 0 0 19 6H5a2 2 0 0 0-2 2.97m18 0L12 14.5 3 8.97"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-medium">{EMAIL}</span>
      {copied && (
        <span className="absolute left-1/2 -bottom-7 -translate-x-1/2 px-3 py-1 bg-[#332257] text-purple-100 text-xs rounded-lg shadow ring-1 ring-purple-600/30 transition-all animate-fade-in">
          Adresse copiée&nbsp;!
        </span>
      )}
    </button>
  );
};

export default ContactButton;
