import React, { useState } from 'react';
import {
  Code2,
  Cpu,
  Terminal,
  Server,
  Layout,
  Database,
  Cloud,
  Microchip,
  Wrench,
  Search,
  Filter,
  Check,
  ExternalLink
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsSectionProps {
  selectedSkill: string | null;
  onSelectSkill: (skill: string | null) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ selectedSkill, onSelectSkill }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSkillClick = (skill: string) => {
    if (selectedSkill === skill) {
      onSelectSkill(null);
    } else {
      onSelectSkill(skill);
      const projEl = document.getElementById('projects');
      if (projEl) {
        projEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="skills" className="py-16 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 uppercase">
              Technical Capabilities
            </h2>
          </div>

          {/* Search & Filter bar */}
          <div className="flex items-center gap-3">
            {selectedSkill && (
              <button
                onClick={() => onSelectSkill(null)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 font-mono text-xs hover:bg-emerald-500/20 transition-colors cursor-pointer"
              >
                <span>Filter: <strong>{selectedSkill}</strong></span>
                <span className="text-slate-400 hover:text-white">&times;</span>
              </button>
            )}

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter stack..."
                className="pl-8 pr-3 py-1.5 rounded border border-slate-800 bg-[#090d16] text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 w-44 sm:w-56"
              />
            </div>
          </div>
        </div>

        {/* Matrix Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {SKILL_CATEGORIES.map((category) => {
            const filteredSkills = category.skills.filter((s) =>
              s.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (searchQuery && filteredSkills.length === 0) {
              return null;
            }

            return (
              <div
                key={category.name}
                className="border-t-2 border-slate-800 pt-4 pb-2 space-y-3"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
                    {category.name}
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">
                    {filteredSkills.length} items
                  </span>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {filteredSkills.map((skill) => {
                    const isSelected = selectedSkill === skill;
                    return (
                      <button
                        key={skill}
                        onClick={() => handleSkillClick(skill)}
                        title={`Click to filter projects using ${skill}`}
                        className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-500 text-slate-950 font-bold'
                            : 'bg-slate-900/90 text-slate-300 hover:text-emerald-300 border border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-4 border-t border-slate-800/60 text-xs font-mono text-slate-500 flex items-center justify-between">
          <span>Click any skill to highlight corresponding engineering projects across the site.</span>
        </div>

      </div>
    </section>
  );
};
