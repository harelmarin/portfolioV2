'use client';
import { motion } from 'framer-motion';

const HorizontalMarquee = ({
    text,
    speed = 30,
    direction = 1,
    className = ""
}: {
    text: string,
    speed?: number,
    direction?: 1 | -1,
    className?: string
}) => {
    const initialX = direction === 1 ? '0%' : '-50%';
    const animateX = direction === 1 ? '-50%' : '0%';

    return (
        <div className={`py-8 md:py-12 overflow-hidden whitespace-nowrap border-y border-black/[0.03] bg-black/[0.01] relative flex ${className}`}>
            <motion.div
                className="flex flex-row flex-nowrap shrink-0"
                initial={{ x: initialX }}
                animate={{ x: animateX }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {/* We repeat the content to ensure seamless loop */}
                {[...Array(10)].map((_, i) => (
                    <span key={i} aria-hidden="true" className="font-archivo text-5xl md:text-8xl lg:text-9xl text-black font-black px-4 md:px-10 uppercase tracking-tighter flex items-center select-none">
                        {text} <span className="text-black/10 mx-6 md:mx-12">•</span>
                    </span>
                ))}
            </motion.div>
            <motion.div
                className="flex flex-row flex-nowrap shrink-0"
                initial={{ x: initialX }}
                animate={{ x: animateX }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {[...Array(10)].map((_, i) => (
                    <span key={i} aria-hidden="true" className="font-archivo text-5xl md:text-8xl lg:text-9xl text-outline px-4 md:px-10 uppercase tracking-tighter flex items-center select-none">
                        {text} <span className="text-black/5 mx-6 md:mx-12">•</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default HorizontalMarquee;
