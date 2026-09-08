import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { EXPERIENCE_LIST } from '../data/portfolioData';

interface ExperienceSectionProps {
  onSelectSkill?: (skill: string) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onSelectSkill }) => {
  return (
    <section id="experience" className="py-16 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-10">
          <h2 className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 uppercase">
            Work &amp; Research Experience
          </h2>
        </div>

        {/* Experience Stream */}
        <div className="space-y-12">
          {EXPERIENCE_LIST.map((exp) => (
            <div key={exp.id} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 pb-10 border-b border-slate-800/60 last:border-0 last:pb-0">

              {/* Left Column: Role & Metadata */}
              <div className="lg:col-span-4 space-y-1.5 font-mono">
                <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                  {exp.period}
                </div>
                <h3 className="text-lg font-bold text-slate-100">
                  {exp.role}
                </h3>
                <div className="text-sm font-semibold text-slate-300">
                  {exp.company}
                </div>
                <div className="text-xs text-slate-500">
                  {exp.location} · {exp.duration}
                </div>
              </div>

              {/* Right Column: Key Engineering Deliverables */}
              <div className="lg:col-span-8 space-y-4">
                <ul className="space-y-2.5 text-sm text-slate-300 font-sans leading-relaxed">
                  {exp.achievements.map((achievement, aIdx) => (
                    <li key={aIdx} className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-emerald-400">
                      {achievement}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Row */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => onSelectSkill && onSelectSkill(skill)}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-emerald-300 transition-colors cursor-pointer"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
