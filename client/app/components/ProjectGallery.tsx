'use client';
import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import VideoPreview from './VideoPreview';
import type { Project } from './HomePage';

interface ProjectGalleryProps {
  projects: Project[];
}

const ProjectGallery = ({ projects }: ProjectGalleryProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative border border-[#d4af37]/10 hover:border-[#d4af37]/30 bg-[#0f0f0f] transition-all duration-700 overflow-hidden cursor-pointer"
            onClick={() => setSelectedProject(project)}
            style={{ 
              minHeight: '500px',
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="relative w-full h-72 md:h-80 flex items-center justify-center bg-[#0a0a0a] overflow-hidden group/imagevid">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105"
                  style={{ transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)' }}
                />
              ) : project.video ? (
                <div className="w-full h-full">
                  <VideoPreview src={project.video} title={project.title} poster={project.image} />
                </div>
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <div className="px-8 py-8 flex flex-col min-h-[180px] bg-[#0f0f0f]">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#f5f5f0] font-integral tracking-[0.05em] group-hover:text-[#d4af37] transition-colors duration-500">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-[#e8e5df]/80 mb-6 line-clamp-3 leading-relaxed font-light tracking-wide">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#d4af37]/10">
                {project.stacks.map((stack, i) => (
                  <div
                    key={i}
                    className="flex items-center bg-transparent border border-[#d4af37]/20 px-3 py-1 text-xs font-light text-[#e8e5df]/70 tracking-wide uppercase"
                    style={{ letterSpacing: '0.08em' }}
                  >
                    {stack}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectGallery;
