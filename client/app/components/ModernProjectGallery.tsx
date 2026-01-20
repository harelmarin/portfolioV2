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
                        className={`relative w-full ${height} overflow-hidden rounded-[2rem] bg-[#111] border border-white/10 transition-all duration-700 group-hover:border-[#d4af37]/40 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)]`}
                    >
                        {/* Media */}
                        <div className="absolute inset-0 z-0">
                            <VideoPreview src={project.video} title={project.title} poster={project.image} />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                            <span className="px-6 py-2 border border-[#d4af37] text-[#d4af37] font-integral text-xs uppercase tracking-[0.3em]">Découvrir</span>
                        </div>

                        {/* Text Info (Always visible partially, fully on hover) */}
                        <div className="absolute inset-x-0 bottom-0 z-10 p-8 md:p-12">
                            <div className="font-spacemono text-[#d4af37] text-[10px] uppercase tracking-[0.4em] mb-2 sm:mb-4">
                                {project.category}
                            </div>
                            <h3 className="font-integral text-3xl md:text-5xl mb-4 group-hover:text-[#d4af37] transition-colors duration-300">
                                {project.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                {project.stacks.map(s => (
                                    <span key={s} className="text-[10px] font-spacemono uppercase tracking-widest text-white/50">
                                        {s} /
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

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
