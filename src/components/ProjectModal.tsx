import React from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Terminal, 
  Layers, 
  Cpu, 
  CheckCircle2 
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectSkill?: (skill: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onSelectSkill }) => {
  if (!project) return null;

  return (
    <div 
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        id="project-modal-dialog"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded border border-slate-700 bg-[#090d16] text-slate-200 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="project-modal-close"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-100 rounded hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Status */}
        <div className="flex items-center gap-2 mb-3 font-mono text-xs">
          <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-400">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-amber-500/30">
              Featured Architecture
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-mono text-2xl sm:text-3xl font-bold text-slate-100 mb-2">
          {project.title}
        </h3>

        {/* One line hook */}
        <p className="text-slate-400 font-mono text-xs sm:text-sm mb-6 leading-relaxed">
          {project.hook}
        </p>

        {/* Full Overview Description */}
        <div className="space-y-4 text-slate-300 text-sm leading-relaxed mb-6 font-sans">
          <p>{project.description}</p>
        </div>

        {/* System Specs (if available) */}
        {project.systemSpecs && (
          <div className="p-4 rounded border border-slate-800 bg-slate-900/60 font-mono text-xs mb-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.systemSpecs.runtime && (
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Runtime Engine</span>
                <span className="text-slate-200 font-medium">{project.systemSpecs.runtime}</span>
              </div>
            )}
            {project.systemSpecs.throughputOrLatency && (
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Latency / Throughput</span>
                <span className="text-emerald-400 font-medium">{project.systemSpecs.throughputOrLatency}</span>
              </div>
            )}
            {project.systemSpecs.licenseOrStatus && (
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Artifact Status</span>
                <span className="text-slate-300">{project.systemSpecs.licenseOrStatus}</span>
              </div>
            )}
          </div>
        )}

        {/* Architecture Highlights */}
        <div className="mb-6 space-y-3">
          <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
            Architecture Highlights
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
            {project.architectureHighlights.map((highlight, idx) => (
              <li key={idx} className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-emerald-400 leading-relaxed">
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Stack Tags */}
        <div className="mb-8 space-y-2">
          <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">
            Tech Stack:
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  if (onSelectSkill) onSelectSkill(tag);
                  onClose();
                }}
                className="px-2.5 py-1 rounded text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-300 hover:border-slate-700 transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-semibold transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Inspect Repository</span>
            </a>
          )}

          {project.huggingfaceUrl && (
            <a
              href={project.huggingfaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono text-xs font-semibold transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Model Weights</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 rounded border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 font-mono text-xs transition-colors ml-auto cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
