import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Layers, 
  Search, 
  Filter, 
  ChevronRight, 
  Star,
  CheckCircle2,
  Terminal,
  Cpu,
  ArrowUpRight
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  selectedSkill: string | null;
  onClearSkillFilter: () => void;
  onSelectSkill: (skill: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  selectedSkill,
  onClearSkillFilter,
  onSelectSkill
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'AI & LLM',
    'Computer Vision',
    'Systems & Infra',
    'Developer Tooling',
    'Full-Stack'
  ];

  // Filtering logic
  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = activeCategory === 'All' || proj.category === activeCategory;

    const matchesSkill = !selectedSkill || proj.tags.some(
      (t) => t.toLowerCase() === selectedSkill.toLowerCase()
    );

    const matchesSearch = !searchQuery || 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.hook.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSkill && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="font-mono text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1">
              04 / Portfolio
            </div>
            <h2 className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 uppercase">
              Engineered Systems &amp; Projects
            </h2>
          </div>
          <span className="font-mono text-xs text-slate-500">
            {filteredProjects.length} systems indexed
          </span>
        </div>

        {/* Filter Controls Row: Categories & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800/60">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="flex items-center gap-2">
            <div className="relative w-full md:w-64">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full pl-8 pr-3 py-1.5 rounded border border-slate-800 bg-[#090d16] text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/60"
              />
            </div>
          </div>

        </div>

        {/* Active Skill Filter Banner */}
        {selectedSkill && (
          <div className="mb-6 p-3 rounded bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between font-mono text-xs text-emerald-400">
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-emerald-400" />
              <span>Filtering projects with skill: <strong className="text-emerald-300 underline">{selectedSkill}</strong></span>
            </div>
            <button
              onClick={onClearSkillFilter}
              className="text-slate-400 hover:text-slate-200 text-[11px] underline cursor-pointer"
            >
              Clear Filter
            </button>
          </div>
        )}

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center rounded border border-dashed border-slate-800 bg-slate-900/30 font-mono text-sm text-slate-500">
            No systems match the active filter criteria.
            <div className="mt-3">
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                  onClearSkillFilter();
                }}
                className="px-3 py-1 rounded bg-slate-800 text-slate-300 hover:text-white text-xs cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}

        {/* Core Featured Architectures */}
        {featuredProjects.length > 0 && (
          <div className="mb-14 space-y-6">
            <div className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider">
              Core Featured Architectures
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="border border-slate-800 bg-[#090d16] p-6 hover:border-slate-700 transition-colors flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Category & Direct Links */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 font-mono text-xs">
                      <span className="text-emerald-400 font-semibold uppercase tracking-wider text-[11px]">
                        {project.category}
                      </span>

                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub repo for ${project.title}`}
                            className="text-slate-400 hover:text-emerald-400 transition-colors"
                            title="View source on GitHub"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}

                        {project.huggingfaceUrl && (
                          <a
                            href={project.huggingfaceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Hugging Face weights for ${project.title}`}
                            className="text-slate-400 hover:text-amber-400 transition-colors"
                            title="View model on Hugging Face"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
                          title="Open full architectural details"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="font-mono text-xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    {/* One line hook */}
                    <p className="mt-1 text-slate-400 font-mono text-xs leading-relaxed">
                      {project.hook}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-slate-300 text-sm leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-4 pt-3 border-t border-slate-800/60 space-y-1.5 text-xs text-slate-400 font-sans">
                      {project.architectureHighlights.slice(0, 2).map((highlight, hIdx) => (
                        <div key={hIdx} className="relative pl-3.5 before:content-['•'] before:absolute before:left-0 before:text-emerald-400">
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer: Tech Stack Tags & Details Button */}
                  <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 5).map((tag) => (
                        <button
                          key={tag}
                          onClick={() => onSelectSkill(tag)}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800 hover:text-emerald-300 transition-colors cursor-pointer"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="self-start sm:self-auto font-mono text-xs text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1 cursor-pointer shrink-0"
                    >
                      <span>Architectural Specs</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* Engineering Systems Index / Ledger View */}
        {otherProjects.length > 0 && (
          <div>
            <div className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider mb-4">
              System Ledger &amp; Tooling Index
            </div>

            <div className="border border-slate-800 bg-[#090d16] divide-y divide-slate-800/80 font-mono text-xs">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-4 hover:bg-slate-900/50 transition-colors grid grid-cols-1 md:grid-cols-12 gap-3 items-center"
                >
                  <div className="md:col-span-4 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-emerald-400 font-semibold uppercase">{project.category}</span>
                    </div>
                    <h4 
                      onClick={() => setSelectedProject(project)}
                      className="font-bold text-slate-100 text-sm hover:text-emerald-300 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h4>
                  </div>

                  <div className="md:col-span-5 text-slate-400 text-xs font-sans leading-relaxed line-clamp-2">
                    {project.hook}
                  </div>

                  <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-slate-800">
                    <div className="flex flex-wrap gap-1 max-w-[160px]">
                      {project.tags.slice(0, 2).map((tag) => (
                        <button
                          key={tag}
                          onClick={() => onSelectSkill(tag)}
                          className="px-1.5 py-0.5 rounded text-[10px] bg-slate-900 text-slate-400 border border-slate-800 hover:text-emerald-300 transition-colors cursor-pointer"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-slate-100 transition-colors"
                          title="View on GitHub"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer"
                      >
                        Details &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectSkill={onSelectSkill}
      />
    </section>
  );
};
