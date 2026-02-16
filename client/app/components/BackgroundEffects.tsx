'use client';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-white">
            {/* Very subtle Grid */}
            <div className="absolute inset-0 bg-grid opacity-30" />

            {/* Static Subtle Blue Blobs (Inspired by the intro glow) */}
            <div
                className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vw] bg-blue-50/40 rounded-full blur-[120px]"
            />

            <div
                className="absolute -bottom-1/4 -right-1/4 w-[50vw] h-[50vw] bg-gray-50/40 rounded-full blur-[150px]"
            />

            {/* Light Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.2)_100%)]" />
        </div>
    );
};

export default BackgroundEffects;
