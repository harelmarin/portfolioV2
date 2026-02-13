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
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <>
            <motion.div
                ref={container}
                className="relative group cursor-pointer"
                onClick={() => project.link ? window.open(project.link, '_blank') : setSelectedProject(project)}
            >
                <div className="relative bg-white border border-[#e4e4e7] p-3 rounded-[1.5rem] transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.03)] group-hover:border-black/10">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-[#f4f4f5]">
                        <VideoPreview src={project.video} title={project.title} poster={project.image} />
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 md:flex hidden items-center justify-center">
                            <div className="px-6 py-2.5 bg-black text-white rounded-full font-inter text-[11px] font-bold tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                Voir le projet
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 px-2 pb-2">
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

                        <h3 className="font-archivo text-2xl md:text-3xl font-black text-black tracking-tighter mb-4">
                            {project.title}
                        </h3>

                        <div className="flex flex-wrap gap-1.5">
                            {project.stacks.map(s => (
                                <span key={s} className="text-[9px] font-inter font-bold text-black/30 px-2 py-0.5 rounded-md bg-[#f4f4f5] border border-black/5">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
            {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
            ))}
        </div>
    );
};

export default ModernProjectGallery;
