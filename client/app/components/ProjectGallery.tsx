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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative rounded-3xl border border-white/20 hover:border-white/50 bg-black/90 bg-opacity-95 transition-all overflow-hidden cursor-pointer"
            onClick={() => setSelectedProject(project)}
            style={{ minHeight: '420px' }}
          >
            <div className="relative w-full h-60 md:h-64 flex items-center justify-center bg-black/85 rounded-3xl overflow-hidden group/imagevid">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="object-cover w-full h-full transition-all duration-500"
                />
              ) : project.video ? (
                <VideoPreview src={project.video} title={project.title} />
              ) : null}
            </div>
            <div className="px-5 py-4 flex flex-col min-h-[120px] bg-transparent backdrop-blur">
              <h3 className="text-[1.18rem] md:text-[1.3rem] font-semibold mb-1 text-white font-integral group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-[0.98rem] text-white/90 mb-3 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stacks.map((stack, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-1 bg-[#232228] px-2 py-0.5 rounded-full text-xs md:text-sm font-medium text-white/80 border-none"
                  >
                    <span className="ml-1">{stack}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectGallery;
