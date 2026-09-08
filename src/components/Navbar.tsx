import React, { useState } from 'react';
import { 
  Terminal, 
  Moon, 
  Sun, 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Menu, 
  X 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Recognition', href: '#recognition' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      id="navbar"
      className="sticky top-0 z-40 w-full backdrop-blur-md border-b transition-colors duration-200 bg-[#090d16]/85 border-slate-800/80 text-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-15 flex items-center justify-between">
        {/* Clean Logo / Prompt */}
        <a 
          id="nav-logo"
          href="#" 
          className="flex items-center gap-1.5 group font-mono text-sm tracking-tight text-slate-200 hover:text-emerald-400 transition-colors"
        >
          <Terminal className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
          <span className="font-bold text-slate-100">amrit</span>
          <span className="text-emerald-500">@</span>
          <span className="text-slate-400">dev</span>
          <span className="text-emerald-400 font-semibold">:~$</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              id={`nav-link-${link.name.toLowerCase()}`}
              href={link.href}
              className="px-3 py-1.5 text-xs font-mono text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 rounded transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions (Socials + Resume + Theme + Mobile Toggle) */}
        <div id="nav-actions" className="flex items-center gap-1.5 sm:gap-2">
          {/* GitHub link */}
          <a
            id="nav-github-link"
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 rounded transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* LinkedIn link */}
          <a
            id="nav-linkedin-link"
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 rounded transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Email link */}
          <a
            id="nav-email-link"
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Send Email"
            className="p-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 rounded transition-colors hidden sm:inline-flex"
          >
            <Mail className="w-4 h-4" />
          </a>

          <div className="h-4 w-px bg-slate-800 mx-1 hidden sm:block"></div>

          {/* Resume Modal trigger */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500 transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Resume</span>
            <span className="sm:hidden">CV</span>
          </button>

          {/* Theme Toggle (Dark / Light) */}
          <button
            id="theme-toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="p-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 rounded transition-colors cursor-pointer"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-1.5 md:hidden text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 rounded transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="md:hidden border-t border-slate-800 bg-[#090d16]/95 px-4 pt-3 pb-5 space-y-1 font-mono text-sm"
        >
          <div className="text-[10px] text-slate-500 uppercase tracking-wider px-3 py-1">Navigation</div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 transition-colors"
            >
              <span className="text-emerald-500 mr-2">›</span>
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between px-3">
            <span className="text-xs text-slate-400">Status:</span>
            <span className="text-xs text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Open to opportunities
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
