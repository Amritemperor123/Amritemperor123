import React from 'react';
import { Microscope, Compass, CheckCircle2, BookmarkCheck, Activity } from 'lucide-react';
import { RESEARCH_OVERVIEW } from '../data/portfolioData';

interface ResearchSectionProps {
  onSelectSkill?: (skill: string) => void;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({ onSelectSkill }) => {
  return (
    <section id="research" className="py-16 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-10">
          <h2 className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 uppercase">
            Applied Research &amp; R&amp;D
          </h2>
        </div>

        {/* Narrative Overview */}
        <div className="border border-slate-800 bg-[#090d16] p-6 mb-10">
          <div className="font-mono text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
            Research Focus
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            {RESEARCH_OVERVIEW.summary}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Research Contributions */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
              Key Research Contributions
            </h3>

            <div className="space-y-6">
              {RESEARCH_OVERVIEW.contributions.map((item, idx) => (
                <div
                  key={idx}
                  className="border-l-2 border-slate-800 hover:border-emerald-500 pl-4 py-1 transition-colors space-y-2"
                >
                  <h4 className="font-mono text-sm font-bold text-slate-100">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Interests Tags */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
              Research Domains
            </h3>

            <div className="border border-slate-800 bg-[#090d16] p-6 space-y-4 font-mono text-xs">
              <p className="text-slate-400 text-xs leading-relaxed font-sans">
                Active fields for research collaboration, postgraduate exploration, and industrial systems R&amp;D:
              </p>

              <div className="flex flex-wrap gap-1.5">
                {RESEARCH_OVERVIEW.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 text-xs"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Lab Association:</span>
                <span className="text-slate-200 font-mono">NCC Lab, IIT BHU</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
