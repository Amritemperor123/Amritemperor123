import React, { useState, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  ArrowRight, 
  FileText, 
  Mail, 
  Check, 
  Copy, 
  Sparkles,
  Play,
  RotateCcw
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onFilterSkill?: (skill: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  // Rotating typewriter role
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = PERSONAL_INFO.roleRotations;

  // Interactive Terminal State
  const [terminalInput, setTerminalInput] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: 'whoami',
      output: 'Amrit Lal Paswan — AI Systems & Software Engineer (Noida, India)'
    },
    {
      cmd: 'status',
      output: '● [ACTIVE] Open to opportunities in AI Infra, Distributed Systems & LLM Tooling'
    },
    {
      cmd: 'cat ethos.txt',
      output: 'Architecture-first. Local-first. Deterministic infrastructure. Privacy-conscious.'
    }
  ]);

  // Typewriter effect logic
  useEffect(() => {
    const currentFullRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedRole(currentFullRole.slice(0, displayedRole.length + 1));
        if (displayedRole.length + 1 === currentFullRole.length) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Backspacing
        setDisplayedRole(currentFullRole.slice(0, displayedRole.length - 1));
        if (displayedRole.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex, roles]);

  // Handle terminal command execution
  const handleRunCommand = (commandToRun?: string) => {
    const cmd = (commandToRun || terminalInput).trim().toLowerCase();
    if (!cmd) return;

    let output = '';
    switch (cmd) {
      case 'help':
        output = 'Available commands: whoami, status, stack, projects, contact, resume, clear, exit';
        break;
      case 'whoami':
        output = 'Amrit Lal Paswan — AI Systems & Software Engineer | B.Tech CSE';
        break;
      case 'status':
        output = '● Open to opportunities for AI Systems, Backend Infrastructure, and Developer Tooling.';
        break;
      case 'stack':
      case 'skills':
        output = 'C, C++, Python, PyTorch, llama.cpp, Docker, Kafka, FastAPI, React, PostgreSQL, PostGIS';
        break;
      case 'projects':
        output = 'Featured: LM Studio CLI Agent, Multi-Agent Orchestrator, 8B Medical LLM, Wordrobe, Sandwitch, Kafka-Microservice';
        const projEl = document.getElementById('projects');
        if (projEl) projEl.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        output = `Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | GitHub: ${PERSONAL_INFO.githubUsername}`;
        const contactEl = document.getElementById('contact');
        if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'resume':
      case 'cv':
        output = 'Launching resume view dialog...';
        onOpenResume();
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      case 'exit':
        output = 'Process terminated with code 0. Thanks for visiting!';
        break;
      default:
        output = `bash: command not found: ${cmd}. Type 'help' for available commands.`;
    }

    setTerminalHistory((prev) => [...prev, { cmd, output }]);
    setTerminalInput('');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Monospace Name, Identity, Positioning & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-emerald-400 font-medium">Open to opportunities</span>
              <span className="text-slate-600">·</span>
              <span>Noida, India</span>
            </div>

            {/* Name in high-impact monospace typography */}
            <div>
              <h1 
                id="hero-name"
                className="font-mono text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 uppercase"
              >
                {PERSONAL_INFO.name}
              </h1>

              {/* Cycling Role with Blinking Cursor */}
              <div 
                id="hero-role-cycle"
                className="mt-2.5 font-mono text-lg sm:text-xl text-emerald-400 font-medium flex items-center min-h-[32px]"
              >
                <span className="text-slate-500 mr-2">$</span>
                <span>{displayedRole}</span>
                <span className="w-2 h-5 ml-1 bg-emerald-400 animate-cursor-blink inline-block"></span>
              </div>
            </div>

            {/* Core positioning statement */}
            <p 
              id="hero-positioning"
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
            >
              Engineers <strong className="text-slate-100 font-semibold">privacy-first LLM developer tools</strong>, 
              containerized execution environments, and <strong className="text-slate-100 font-semibold">domain-adapted AI systems</strong> end-to-end. 
              Focused on Linux-first runtime efficiency and local hardware acceleration.
            </p>

            {/* Action CTAs */}
            <div id="hero-ctas" className="pt-1 flex flex-wrap items-center gap-3">
              <a
                id="hero-cta-projects"
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-semibold text-xs transition-colors cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-cta-resume"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 font-mono text-xs transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>Curriculum Vitae</span>
              </button>

              <a
                id="hero-cta-contact"
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 font-mono text-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact</span>
              </a>
            </div>

            {/* Quick contact / credentials snippet */}
            <div className="pt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-400 border-t border-slate-800/60">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-500">Email:</span>
                <span className="text-slate-300 select-all">{PERSONAL_INFO.email}</span>
                <button
                  id="hero-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="p-1 hover:text-emerald-400 text-slate-500 transition-colors cursor-pointer"
                  title="Copy email"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <span className="hidden sm:inline text-slate-700">|</span>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-500">Phone:</span>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="text-slate-300 hover:text-emerald-400 transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Signature Terminal Prompt Motif */}
          <div className="lg:col-span-5">
            <div 
              id="hero-terminal-card"
              className="rounded border border-slate-800 bg-[#070a0e] shadow-xl overflow-hidden font-mono text-xs"
            >
              {/* Terminal Window Title Bar */}
              <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                  </div>
                  <span className="ml-2 text-slate-400 text-[11px]">amrit@dev: ~</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-500">
                  <button 
                    onClick={() => handleRunCommand('clear')}
                    title="Reset terminal"
                    className="p-1 hover:text-slate-300 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Terminal Content Body */}
              <div className="p-4 space-y-3 max-h-[320px] overflow-y-auto">
                <div className="text-slate-500 text-[11px] leading-relaxed pb-1 border-b border-slate-800/60">
                  Amrit Lal Paswan — AI Systems Console<br />
                  Try running commands: <span className="text-emerald-400">'whoami'</span>, <span className="text-emerald-400">'stack'</span>, <span className="text-emerald-400">'projects'</span>
                </div>

                {/* History */}
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <span className="text-emerald-400">amrit@dev:~$</span>
                      <span className="font-semibold text-slate-100">{item.cmd}</span>
                    </div>
                    <div className="pl-4 text-slate-400 text-[11px] leading-relaxed whitespace-pre-wrap border-l border-slate-800/80">
                      {item.output}
                    </div>
                  </div>
                ))}

                {/* Live Input Line */}
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleRunCommand();
                  }}
                  className="flex items-center gap-1.5 pt-1"
                >
                  <span className="text-emerald-400 font-bold shrink-0">amrit@dev:~$</span>
                  <input
                    id="hero-terminal-input"
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="type command..."
                    className="w-full bg-transparent text-slate-200 placeholder-slate-600 focus:outline-none font-mono text-xs"
                    autoComplete="off"
                    spellCheck="false"
                  />
                  <button
                    type="submit"
                    className="p-1 text-slate-500 hover:text-emerald-400 transition-colors shrink-0 cursor-pointer"
                    aria-label="Run command"
                  >
                    <Play className="w-3 h-3" />
                  </button>
                </form>
              </div>

              {/* Quick Command Chips */}
              <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800 flex flex-wrap items-center gap-1 text-[11px]">
                <span className="text-slate-500 mr-1 text-[10px]">Commands:</span>
                {['projects', 'stack', 'whoami', 'contact', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleRunCommand(cmd)}
                    className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:text-emerald-300 transition-colors cursor-pointer"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
