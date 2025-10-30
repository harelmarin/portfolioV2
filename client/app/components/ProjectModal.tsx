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
    <div className="fixed z-40 inset-0 bg-black/80 flex items-center justify-center" onClick={onClose}>
      <div
        onClick={stopPropagation}
        className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl backdrop-blur border border-[#26223c] bg-[#141014]/70"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-300 hover:text-purple-400 text-3xl z-10"
          aria-label="Fermer"
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 6L6 18M6 6l12 12"
            />
          </svg>
        </button>
        {project.video && (
          <video
            src={project.video}
            controls
            autoPlay
            className="block w-full h-[clamp(320px,50vw,600px)] object-contain rounded-3xl border border-[#26223c] bg-black"
          />
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
