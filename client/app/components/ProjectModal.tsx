'use client'
import React from 'react';
import type { Project } from './HomePage';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();
  return (
    <div 
      className="fixed z-40 inset-0 bg-[#0a0a0a]/95 backdrop-blur-sm flex items-center justify-center transition-opacity duration-500" 
      onClick={onClose}
      style={{ transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
    >
      <div
        onClick={stopPropagation}
        className="relative w-full max-w-4xl mx-4 overflow-hidden border border-[#d4af37]/20 bg-[#0f0f0f] shadow-2xl"
        style={{ 
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.15)'
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#e8e5df]/60 hover:text-[#d4af37] z-10 transition-colors duration-500 group"
          aria-label="Fermer"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {project.video && (
          <video
            src={project.video}
            controls
            autoPlay
            className="block w-full h-[clamp(400px,60vh,800px)] object-contain bg-[#0a0a0a]"
          />
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
