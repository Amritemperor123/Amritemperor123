import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink 
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  EXPERIENCE_LIST, 
  SKILL_CATEGORIES, 
  PROJECTS, 
  HACKATHON_RECOGNITION, 
  RESEARCH_OVERVIEW 
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textResume = `
${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.githubUrl} | LinkedIn: ${PERSONAL_INFO.linkedinUrl}

SUMMARY:
${PERSONAL_INFO.summaryNarrative.join('\n\n')}

EXPERIENCE:
${EXPERIENCE_LIST.map(e => `
${e.role.toUpperCase()} — ${e.company} (${e.location})
${e.period} (${e.duration})
Stack: ${e.skills.join(', ')}
${e.achievements.map(a => `• ${a}`).join('\n')}
`).join('\n')}

FEATURED PROJECTS:
${PROJECTS.filter(p => p.featured).map(p => `
${p.title.toUpperCase()}
${p.hook}
Stack: ${p.tags.join(', ')}
${p.architectureHighlights.map(h => `• ${h}`).join('\n')}
`).join('\n')}

TECHNICAL SKILLS:
${SKILL_CATEGORIES.map(c => `${c.name}: ${c.skills.join(', ')}`).join('\n')}

EDUCATION:
${PERSONAL_INFO.education} — Noida, India

HONORS & RECOGNITIONS:
• ${HACKATHON_RECOGNITION.title} (${HACKATHON_RECOGNITION.result}) — ${HACKATHON_RECOGNITION.host}
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        id="resume-modal-dialog"
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded border border-slate-700 bg-[#090d16] text-slate-200 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Header (Hidden when printing) */}
        <div className="print:hidden px-4 sm:px-6 py-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-semibold">{PERSONAL_INFO.name} — Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-copy-btn"
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied ATS Text' : 'Copy Text'}</span>
            </button>

            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="px-3 py-1.5 rounded bg-emerald-500 hover:bg-emerald-400 text-xs font-mono font-semibold text-slate-950 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              id="resume-modal-close-btn"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Clean Resume Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 font-sans space-y-8 print:p-0 print:text-black print:bg-white">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-black">
            <h1 className="text-3xl sm:text-4xl font-bold font-mono text-slate-100 tracking-tight print:text-black uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <div className="text-emerald-400 font-mono text-sm sm:text-base font-medium mt-1 print:text-emerald-700">
              {PERSONAL_INFO.title}
            </div>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-slate-400 mt-3 print:text-slate-700">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-emerald-400" />
                {PERSONAL_INFO.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-emerald-400" />
                {PERSONAL_INFO.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-400" />
                {PERSONAL_INFO.location}
              </span>
              <span>•</span>
              <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline text-slate-300 print:text-black">
                github.com/Amritemperor123
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:underline text-slate-300 print:text-black">
                linkedin.com/in/amrit-lal-paswan
              </a>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-2 border-b border-slate-800/80 pb-1 print:text-black">
              Engineering Profile &amp; Core Focus
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed print:text-slate-900">
              {PERSONAL_INFO.summaryNarrative[0]} {PERSONAL_INFO.summaryNarrative[1]}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-4 border-b border-slate-800/80 pb-1 print:text-black">
              Professional &amp; Research Experience
            </h2>
            <div className="space-y-6">
              {EXPERIENCE_LIST.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="font-mono text-sm font-bold text-slate-200 print:text-black">
                      {exp.role} — <span className="text-emerald-400 print:text-emerald-800 font-semibold">{exp.company}</span>
                    </div>
                    <div className="text-xs font-mono text-slate-400 print:text-slate-700">
                      {exp.period} ({exp.duration}) | {exp.location}
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 print:text-slate-600">
                    Stack: {exp.skills.join(', ')}
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-300 print:text-slate-900 pt-1">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="leading-relaxed">{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Featured Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-4 border-b border-slate-800/80 pb-1 print:text-black">
              Featured Systems &amp; Technical Projects
            </h2>
            <div className="space-y-5">
              {PROJECTS.filter(p => p.featured).map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="font-mono text-sm font-bold text-slate-200 print:text-black">
                      {proj.title} <span className="text-xs font-normal text-slate-400">({proj.category})</span>
                    </div>
                    <div className="text-xs font-mono text-emerald-400 print:text-slate-700">
                      {proj.systemSpecs?.throughputOrLatency || 'Engineered from scratch'}
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-800">
                    {proj.hook}
                  </p>
                  <div className="text-[11px] font-mono text-slate-400 print:text-slate-600">
                    Tech: {proj.tags.join(', ')}
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs text-slate-300 print:text-slate-900 pt-0.5">
                    {proj.architectureHighlights.map((hl, i) => (
                      <li key={i} className="leading-relaxed">{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-3 border-b border-slate-800/80 pb-1 print:text-black">
              Technical Skill Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300 print:text-slate-900">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.name} className="py-1">
                  <strong className="text-slate-100 print:text-black">{cat.name}:</strong>{' '}
                  <span className="text-slate-400 print:text-slate-700">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Honors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-2 border-b border-slate-800/80 pb-1 print:text-black">
                Education
              </h2>
              <div className="font-mono text-xs">
                <div className="font-bold text-slate-200 print:text-black">{PERSONAL_INFO.education}</div>
                <div className="text-slate-400 print:text-slate-700">{PERSONAL_INFO.location}</div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-2 border-b border-slate-800/80 pb-1 print:text-black">
                Honors &amp; Recognition
              </h2>
              <div className="font-mono text-xs">
                <div className="font-bold text-slate-200 print:text-black">
                  {HACKATHON_RECOGNITION.title} ({HACKATHON_RECOGNITION.result})
                </div>
                <div className="text-slate-400 print:text-slate-700">{HACKATHON_RECOGNITION.host}</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
