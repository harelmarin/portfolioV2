'use client';
import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            setIsHovered(!!target.closest('a, button, .cursor-pointer'));
        };

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mouseover', handleHover);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#d4af37] pointer-events-none z-[9999] hidden md:block"
            style={{
                x: cursorX,
                y: cursorY,
                scale: isHovered ? 2.5 : 1,
                backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
            }}
            transition={{ scale: { duration: 0.3 } }}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#d4af37] rounded-full" />
        </motion.div>
    );
};

export default CustomCursor;
