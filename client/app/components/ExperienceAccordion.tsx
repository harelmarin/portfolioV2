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
    <div className="max-w-4xl mx-auto space-y-4">
      {experiences.map((exp, idx) => {
        const isOpen = openExpIdx === idx;
        return (
          <div
            key={`${exp.company}-${exp.period}`}
            className={`rounded-2xl border border-white/30 hover:border-white/50 bg-[#121316] backdrop-blur transition-all duration-300 overflow-hidden group cursor-pointer ${isOpen ? 'opacity-100' : 'opacity-90'}`}
          >
            <button
              className="w-full text-left px-7 py-5 flex items-center justify-between gap-8 group cursor-pointer"
              onClick={() => setOpenExpIdx(isOpen ? null : idx)}
              style={{ background: 'transparent' }}
            >
              <div className="flex flex-col">
                <span className="text-xs text-white/70 mb-0.5">
                  {exp.period} • {exp.location}
                </span>
                <span className="text-lg md:text-2xl font-integral text-gray-100 font-medium tracking-tight mb-1">
                  {exp.title}{' '}
                  <span className="font-normal text-white/80">
                    — {exp.company}
                  </span>
                </span>
                <div className="flex flex-wrap gap-2 mt-0.5">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs text-white/80 bg-[#232228] px-2 py-0.5 rounded-full font-normal border-none"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <span className="inline-block h-0.5 w-8 rounded-full bg-gradient-to-r from-white/20 via-white/5 to-transparent mt-3 mb-1 opacity-60 group-hover:opacity-85 transition-all duration-300" />
              </div>
              <span
                className={`text-gray-100 transition-transform ${
                  isOpen ? 'rotate-90' : ''
                }`}
              >
                ›
              </span>
            </button>

            {isOpen && (
              <div className="px-7 pb-6 pt-2 grid md:grid-cols-5 gap-4 animate-fade-expand">
                <div className="md:col-span-3">
                  <p className="text-base md:text-lg text-white/90 mb-3 font-normal leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-inside text-[1.08rem] text-white/90 space-y-1 pl-2">
                    {exp.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2 flex items-center">
                  {exp.media?.type === 'video' && (
                    <video
                      src={exp.media.src}
                      className="w-full rounded-xl border-none bg-black max-h-[200px] md:max-h-[190px] shadow-md"
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
