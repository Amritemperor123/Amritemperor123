import React from 'react';
import {
  Trophy,
  GitPullRequest,
  Radio,
  Github,
  ExternalLink,
  Calendar,
  MapPin,
  Award,
  Sparkles
} from 'lucide-react';
import {
  HACKATHON_RECOGNITION,
  OPEN_SOURCE_PROJECTS,
  WORKSHOPS_CONFERENCES
} from '../data/portfolioData';

export const RecognitionSection: React.FC = () => {
  return (
    <section id="recognition" className="py-16 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Section Header */}
        <div>
          <h2 className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 uppercase">
            Recognition, Open Source &amp; Talks
          </h2>
        </div>

        {/* Hackathon & Recognition Banner */}
        <div className="border border-amber-500/40 bg-[#090d16] p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs bg-amber-500/20 text-grey-300 font-bold border border-amber-500/40">
                {HACKATHON_RECOGNITION.result}
              </span>
              <span className="text-xs text-slate-400">
                {HACKATHON_RECOGNITION.year}
              </span>
            </div>
            <div className="text-xs text-slate-400">
              {HACKATHON_RECOGNITION.location}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xl sm:text-2xl font-bold text-slate-100">
              {HACKATHON_RECOGNITION.title}
            </h3>
            <div className="text-xs font-mono text-grey-400/90 mt-1">
              {HACKATHON_RECOGNITION.host}
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            {HACKATHON_RECOGNITION.description}
          </p>

          <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-xs">
            {HACKATHON_RECOGNITION.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-grey-200/90"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Two-Column Grid: Open Source & Conferences */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Open Source Contribution */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
              Open Source Work
            </h3>

            {OPEN_SOURCE_PROJECTS.map((osp, idx) => (
              <div
                key={idx}
                className="border border-slate-800 bg-[#090d16] p-6 space-y-3"
              >
                <div className="flex items-center justify-between font-mono">
                  <h4 className="text-base font-bold text-slate-100">
                    {osp.title}
                  </h4>
                  <a
                    href={osp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                    title="View repository on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {osp.description}
                </p>

                <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                  <div className="flex flex-wrap gap-1">
                    {osp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 text-[10px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={osp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 text-xs"
                  >
                    <span>View Code</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Workshops & Conferences */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
              Conferences &amp; Exhibitions
            </h3>

            {WORKSHOPS_CONFERENCES.map((conf, idx) => (
              <div
                key={idx}
                className="border border-slate-800 bg-[#090d16] p-6 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono">
                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                      {conf.role}
                    </span>
                    <h4 className="text-base font-bold text-slate-100 mt-1.5">
                      {conf.event}
                    </h4>
                  </div>
                  <span className="text-xs text-slate-400">
                    {conf.year}
                  </span>
                </div>

                <div className="font-mono text-xs text-emerald-400">
                  Focus: {conf.focus}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {conf.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
