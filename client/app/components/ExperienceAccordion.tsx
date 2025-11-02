'use client';
import React, { useState } from 'react';

type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  stack: string[];
  media: null | { type: 'video'; src: string };
  description: string;
  details: string[];
};

interface ExperienceAccordionProps {
  experiences: Experience[];
}

const ExperienceAccordion = ({ experiences }: ExperienceAccordionProps) => {
  const [openExpIdx, setOpenExpIdx] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {experiences.map((exp, idx) => {
        const isOpen = openExpIdx === idx;
        return (
          <div
            key={`${exp.company}-${exp.period}`}
            className={`border border-[#d4af37]/10 hover:border-[#d4af37]/30 bg-[#0f0f0f] transition-all duration-700 overflow-hidden group cursor-pointer ${isOpen ? 'opacity-100' : 'opacity-90'}`}
            style={{ transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)' }}
          >
            <button
              className="w-full text-left px-10 py-8 flex items-center justify-between gap-12 group cursor-pointer"
              onClick={() => setOpenExpIdx(isOpen ? null : idx)}
              style={{ background: 'transparent' }}
            >
              <div className="flex flex-col flex-1">
                <span className="text-xs text-[#e8e5df]/60 mb-2 tracking-[0.1em] uppercase font-light">
                  {exp.period} • {exp.location}
                </span>
                <span className="text-xl md:text-3xl font-integral text-[#f5f5f0] font-bold tracking-[0.05em] mb-3">
                  {exp.title}{' '}
                  <span className="font-normal text-[#d4af37]/80">
                    — {exp.company}
                  </span>
                </span>
                <div className="flex flex-wrap gap-3 mt-2">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs text-[#e8e5df]/70 bg-transparent border border-[#d4af37]/20 px-3 py-1 font-light tracking-wide uppercase"
                      style={{ letterSpacing: '0.08em' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <span className="inline-block h-[1px] w-12 bg-gradient-to-r from-[#d4af37]/40 via-[#d4af37]/20 to-transparent mt-4 opacity-60 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <span
                className={`text-[#d4af37] transition-transform duration-500 text-2xl ${isOpen ? 'rotate-90' : ''}`}
              >
                ›
              </span>
            </button>

            {isOpen && (
              <div className="px-10 pb-8 pt-4 grid md:grid-cols-5 gap-8 border-t border-[#d4af37]/10">
                <div className="md:col-span-3">
                  <p className="text-sm md:text-base text-[#e8e5df]/80 mb-6 font-light leading-relaxed tracking-wide">
                    {exp.description}
                  </p>
                  <ul className="list-none space-y-3 text-sm md:text-base text-[#e8e5df]/70 font-light leading-relaxed">
                    {exp.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <span className="text-[#d4af37]/60 mt-2">—</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2 flex items-center">
                  {exp.media?.type === 'video' && (
                    <video
                      src={exp.media.src}
                      className="w-full border border-[#d4af37]/10 bg-[#0a0a0a] max-h-[240px] md:max-h-[220px]"
                      muted
                      controls
                      playsInline
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceAccordion;
