'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type Experience = {
    title: string;
    company: string;
    period: string;
    location: string;
    stack: string[];
    description: string;
    details: string[];
};

interface Props {
    experiences: Experience[];
}

const ExperienceItem = ({ exp }: { exp: Experience }) => {
    return (
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-20 group">
            <div className="md:w-32 flex-shrink-0">
                <span className="font-spacemono text-[11px] text-black/60 uppercase tracking-widest font-bold">
                    {exp.period}
                </span>
            </div>

            <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                    <h3 className="font-archivo text-xl font-black text-black tracking-tight">
                        {exp.title}
                    </h3>
                    <div className="h-[1px] w-4 bg-[#f4f4f5]" />
                    <span className="text-[12px] font-bold text-blue-500">{exp.company}</span>
                </div>

                <p className="text-black/60 text-sm leading-relaxed mb-6 font-medium max-w-xl">
                    {exp.description}
                </p>

                <ul className="space-y-3 mb-8">
                    {exp.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-black/40 flex-shrink-0" />
                            <span className="text-black/60 text-[13px] leading-relaxed font-medium">
                                {detail}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                    {exp.stack.map(s => (
                        <span key={s} className="text-[10px] font-bold text-black/50 px-2 py-1 rounded-md bg-[#f4f4f5] border border-black/5 uppercase tracking-widest">
                            {s}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ModernExperienceTimeline = ({ experiences }: Props) => {
    return (
        <div>
            {experiences.map((exp) => (
                <ExperienceItem key={exp.company} exp={exp} />
            ))}
        </div>
    );
};

export default ModernExperienceTimeline;
