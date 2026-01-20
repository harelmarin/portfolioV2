'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Project } from './HomePage';
import VideoPreview from './VideoPreview';
import ProjectModal from './ProjectModal';
import { useState, useRef } from 'react';

interface Props {
    projects: Project[];
}

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // "Duo de Choc": Kickr is the massive anchor, CorsicAroma is the elegant companion
    const layouts = [
        'md:col-span-12 lg:col-span-10 lg:col-start-2 mb-40', // Kickr: Massive impact
        'md:col-span-12 lg:col-span-8 lg:col-start-3 mb-20',   // CorsicAroma: Elegant, slightly narrowed to focus the gaze
    ];

    const currentLayout = layouts[index % layouts.length];

    // Custom parallax intensity per project
    const parallaxRange = index === 0 ? [80, -80] : [40, -40];
    const y = useTransform(scrollYProgress, [0, 1], parallaxRange);

    const height = index === 0 ? 'h-[600px] md:h-[800px]' : 'h-[500px] md:h-[700px]';

    const handleProjectClick = () => {
        if (project.link) {
            window.open(project.link, '_blank');
        } else {
            setSelectedProject(project);
        }
    };

    return (
        <>
            <motion.div
                ref={container}
                style={{ y }}
                className={`${currentLayout} relative group cursor-pointer z-10`}
                onClick={handleProjectClick}
            >
                <div className="relative">
                    {/* Number indicator */}
                    <div className="absolute -top-6 -left-6 z-20 font-spacemono text-[#d4af37] text-xs bg-[#050505] border border-white/10 px-3 py-1 rounded-full">
                        0{index + 1}
                    </div>

                    <motion.div
                        className={`relative w-full ${height} overflow-hidden rounded-[2.5rem] bg-[#0c0c0c] border border-white/[0.03] transition-all duration-1000 group-hover:border-[#d4af37]/20 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.9)]`}
                    >
                        {/* Media */}
                        <div className="absolute inset-0 z-0">
                            <VideoPreview src={project.video} title={project.title} poster={project.image} />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-80 md:block hidden" />
                        </div>

                        {/* Overlay on hover (Desktop only) */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 md:flex hidden items-center justify-center backdrop-blur-[1px]">
                            <span className="px-8 py-3 border border-[#d4af37]/40 text-[#d4af37] font-spacemono text-[10px] uppercase tracking-[0.4em] bg-black/40 backdrop-blur-md rounded-full transition-all duration-500 hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37]">Découvrir</span>
                        </div>

                        {/* Desktop Text Info */}
                        <div className="absolute inset-x-0 bottom-0 z-10 p-10 md:p-16 md:block hidden">
                            <div className="font-spacemono text-[#d4af37]/60 text-[10px] uppercase tracking-[0.5em] mb-4">
                                {project.category}
                            </div>
                            <h3 className="font-integral text-3xl md:text-5xl lg:text-6xl mb-6 tracking-tight group-hover:text-[#d4af37] transition-colors duration-500">
                                {project.title}
                            </h3>
                            <div className="flex flex-wrap gap-3 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                                {project.stacks.map(s => (
                                    <span key={s} className="text-[9px] font-spacemono uppercase tracking-[0.3em] text-white/50 border border-white/5 px-3 py-1 rounded-full bg-white/5">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Mobile Text Info (Visible only on mobile, below the card) */}
                    <div className="mt-8 px-4 md:hidden block">
                        <div className="font-spacemono text-[#d4af37]/80 text-[10px] uppercase tracking-[0.5em] mb-2">
                            {project.category}
                        </div>
                        <h3 className="font-integral text-3xl mb-4 tracking-tight">
                            {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.stacks.map(s => (
                                <span key={s} className="text-[8px] font-spacemono uppercase tracking-[0.2em] text-white/40 border border-white/10 px-3 py-1 rounded-full">
                                    {s}
                                </span>
                            ))}
                        </div>
                        <div className="mt-6 flex">
                            <span className="text-[10px] font-spacemono text-[#d4af37] border-b border-[#d4af37]/30 pb-1 uppercase tracking-widest">Voir le projet</span>
                        </div>
                    </div>

                    {/* Abstract decoration element per card */}
                    <div className={`absolute -right-4 top-1/2 -translate-y-1/2 w-[1px] h-1/2 bg-gradient-to-b from-transparent via-[#d4af37]/20 to-transparent hidden lg:block`} />
                </div>
            </motion.div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    );
};

const ModernProjectGallery = ({ projects }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 py-10 relative px-4">
            {/* Background vertical lines for the "curated" feel */}
            <div className="absolute left-[8.33%] top-0 bottom-0 w-[1px] bg-white/[0.03] hidden lg:block" />
            <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-white/[0.03] hidden lg:block" />
            <div className="absolute left-[91.66%] top-0 bottom-0 w-[1px] bg-white/[0.03] hidden lg:block" />

            {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
            ))}
        </div>
    );
};

export default ModernProjectGallery;
