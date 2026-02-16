'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from './HomePage';
import VideoPreview from './VideoPreview';
import { useState, useRef, useEffect } from 'react';

interface Props {
    projects: Project[];
}

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
    const container = useRef(null);
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        if (showVideo) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [showVideo]);

    const handleAction = () => {
        if (project.link) {
            window.open(project.link, '_blank');
        } else if (project.video) {
            setShowVideo(true);
        }
    };

    return (
        <>
            <motion.div
                ref={container}
                className="relative group cursor-pointer h-full"
                onClick={handleAction}
            >
                <div className="relative h-full bg-white border border-[#e4e4e7] p-3 rounded-[1.5rem] transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.03)] group-hover:border-black/10 flex flex-col">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-[#f4f4f5] flex-shrink-0">
                        <VideoPreview src={project.video} title={project.title} poster={project.image} />
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 md:flex hidden items-center justify-center">
                            <div className="px-6 py-2.5 bg-black text-white rounded-full font-inter text-[11px] font-bold tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                {project.link ? 'Visiter le site' : 'Plein écran'}
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 px-2 pb-2 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-3">
                            <span className="font-spacemono text-[9px] text-black/40 uppercase tracking-[0.2em] font-bold">
                                {project.category}
                            </span>
                            {project.isLive && (
                                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/5 border border-green-500/10">
                                    <span className="relative flex h-1 w-1">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-1 w-1 bg-green-500"></span>
                                    </span>
                                    <span className="font-spacemono text-[8px] font-bold text-green-600 uppercase tracking-widest">Live</span>
                                </div>
                            )}
                        </div>

                        <h3 className="font-archivo text-2xl md:text-3xl font-black text-black tracking-tighter mb-3 leading-tight">
                            {project.title}
                        </h3>

                        <p className="font-inter text-sm text-black/60 leading-relaxed mb-6 flex-grow">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mt-auto">
                            {project.stacks.map(s => (
                                <span key={s} className="text-[9px] font-inter font-bold text-black/30 px-2 py-0.5 rounded-md bg-[#f4f4f5] border border-black/5">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {showVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
                        onClick={() => setShowVideo(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden bg-black"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <video
                                src={project.video}
                                autoPlay
                                controls
                                className="w-full h-full object-contain"
                            />
                            <button
                                onClick={() => setShowVideo(false)}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-colors group"
                            >
                                <div className="relative w-4 h-4">
                                    <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white rotate-45 -translate-y-1/2" />
                                    <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white -rotate-45 -translate-y-1/2" />
                                </div>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const ModernProjectGallery = ({ projects }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
            ))}
        </div>
    );
};

export default ModernProjectGallery;
