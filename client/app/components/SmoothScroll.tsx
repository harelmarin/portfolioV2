'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

declare global {
    interface Window {
        lenis: Lenis | undefined;
    }
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.1,
            touchMultiplier: 2,
            infinite: false,
        });

        window.lenis = lenis;

        // Global handle for anchor links
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');
            if (link && link.hash && link.hash.startsWith('#') && link.pathname === window.location.pathname) {
                e.preventDefault();
                lenis.scrollTo(link.hash, {
                    offset: 0,
                    duration: 1.5,
                });
            }
        };

        window.addEventListener('click', handleAnchorClick);

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            window.removeEventListener('click', handleAnchorClick);
            lenis.destroy();
            window.lenis = undefined;
        };
    }, []);

    return <>{children}</>;
}
