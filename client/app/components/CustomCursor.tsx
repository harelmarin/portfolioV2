'use client';
import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [cursorText, setCursorText] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Precise dot (fast)
    const dotX = useSpring(mouseX, { damping: 30, stiffness: 250 });
    const dotY = useSpring(mouseY, { damping: 30, stiffness: 250 });

    // Elastic ring (laggy/liquid)
    const ringX = useSpring(mouseX, { damping: 20, stiffness: 100 });
    const ringY = useSpring(mouseY, { damping: 20, stiffness: 100 });

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) {
                setIsVisible(true);
                document.body.classList.add('custom-cursor-active');
            }
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const hoverElement = target.closest('a, button, .cursor-pointer, [data-cursor]');

            if (hoverElement) {
                setIsHovered(true);
                const text = hoverElement.getAttribute('data-cursor');
                setCursorText(text || '');
            } else {
                setIsHovered(false);
                setCursorText('');
            }
        };

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mouseover', handleHover);
            document.body.classList.remove('custom-cursor-active');
        };
    }, [mouseX, mouseY, isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* The Trail/Ring */}
            <motion.div
                className="fixed top-0 left-0 flex items-center justify-center pointer-events-none z-[99999] hidden md:flex mix-blend-difference"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: isHovered ? (cursorText ? 80 : 60) : 40,
                    height: isHovered ? (cursorText ? 80 : 60) : 40,
                    borderRadius: '50%',
                    border: '1px solid white',
                    backgroundColor: isHovered ? 'rgba(255, 255, 255, 1)' : 'transparent',
                }}
                transition={{
                    width: { type: 'spring', damping: 25, stiffness: 200 },
                    height: { type: 'spring', damping: 25, stiffness: 200 },
                    backgroundColor: { duration: 0.2 }
                }}
            >
                {cursorText && (
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-[10px] font-black uppercase text-black tracking-tighter"
                    >
                        {cursorText}
                    </motion.span>
                )}
            </motion.div>

            {/* The Center Dot */}
            <motion.div
                className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[100000] hidden md:block mix-blend-difference"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: '-50%',
                    translateY: '-50%',
                    scale: isHovered ? 0 : 1,
                }}
            />
        </>
    );
};

export default CustomCursor;
