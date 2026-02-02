'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HorizontalMarquee = ({ text, speed = 20, direction = 1 }: { text: string, speed?: number, direction?: 1 | -1 }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Use a large negative offset to ensure the marquee is already full and flowing from both sides
    const xBase = -3000;
    const movement = useTransform(scrollYProgress, [0, 1], [xBase, xBase + (direction * 1000)]);

    return (
        <div ref={containerRef} className="py-20 overflow-hidden whitespace-nowrap border-y border-white/5 bg-white/[0.02] relative">
            <motion.div style={{ x: movement }} className="flex">
                {[...Array(20)].map((_, i) => (
                    <span key={i} className="font-archivo text-3xl md:text-5xl text-outline px-8 uppercase transition-colors hover:text-[#d4af37] tracking-[0.2em] flex items-center">
                        {text} <span className="text-[#d4af37]/50 ml-10 select-none">•</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default HorizontalMarquee;
