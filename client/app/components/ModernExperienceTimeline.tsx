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

const ExperienceItem = ({ exp, index }: { exp: Experience, index: number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

    return (
        <motion.div
            ref={ref}
            style={{ scale, opacity }}
            className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-20 mb-16 md:mb-24 group`}
        >
            {/* Background Big Year */}
            <div className={`absolute -top-40 ${index % 2 === 0 ? '-left-20' : '-right-20'} font-archivo text-[20vw] text-outline opacity-[0.03] select-none pointer-events-none`}>
                {exp.period.split('—')[0].trim()}
            </div>

            {/* Side Label (Vertical) */}
            <div className="hidden lg:flex flex-col items-center gap-4">
                <div className="w-[1px] h-20 bg-[#d4af37]/30" />
                <span className="font-spacemono text-[10px] text-[#d4af37] rotate-180 [writing-mode:vertical-lr] tracking-[1em] uppercase">
                    {exp.location}
                </span>
            </div>

            {/* Main Card */}
            <div className="flex-1 glass p-10 md:p-16 rounded-[3rem] border-white/5 relative overflow-hidden group-hover:border-[#d4af37]/20 transition-colors duration-500">
                <div className="absolute top-0 left-0 w-2 h-0 group-hover:h-full bg-[#d4af37] transition-all duration-700" />

                <div className="font-spacemono text-[#d4af37] text-xs mb-8 tracking-[0.4em] uppercase">
                    {exp.period} // {index + 1}
                </div>

                <h3 className="font-archivo text-4xl md:text-6xl mb-4 tracking-tighter text-white">
                    {exp.title}
                </h3>

                <div className="text-xl md:text-2xl font-light text-[#d4af37]/80 mb-10 italic">
                    @ {exp.company}
                </div>

                <p className="text-[#e8e5df]/60 text-lg leading-relaxed mb-8 max-w-2xl">
                    {exp.description}
                </p>

                {exp.details && exp.details.length > 0 && (
                    <ul className="space-y-4 mb-12 max-w-2xl">
                        {exp.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-4 group/item">
                                <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#d4af37]/40 group-hover/item:bg-[#d4af37] transition-colors" />
                                <span className="text-[#e8e5df]/70 text-base leading-relaxed">
                                    {detail}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}

                <div className="flex flex-wrap gap-4">
                    {exp.stack.map(s => (
                        <span key={s} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-spacemono tracking-widest text-[#d4af37] uppercase">
                            {s}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const ModernExperienceTimeline = ({ experiences }: Props) => {
    return (
        <div className="max-w-7xl mx-auto py-10 px-6 overflow-x-hidden">
            {experiences.map((exp, index) => (
                <ExperienceItem key={exp.company} exp={exp} index={index} />
            ))}
        </div>
    );
};

export default ModernExperienceTimeline;
