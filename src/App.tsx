import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchSection } from './components/ResearchSection';
import { RecognitionSection } from './components/RecognitionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  // Dark mode as default and primary identity
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('alp_portfolio_theme');
    return saved !== null ? saved === 'dark' : true;
  });

  // Resume Modal Visibility
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Skill filter selection shared between Skills and Projects
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('alp_portfolio_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-[#0b0f14] text-[#e2e8f0] antialiased selection:bg-emerald-500/20 selection:text-emerald-400 min-h-screen';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-slate-50 text-slate-900 antialiased selection:bg-emerald-500/20 selection:text-emerald-700 min-h-screen';
    }
  }, [darkMode]);

  const handleSelectSkill = (skill: string | null) => {
    setSelectedSkill(skill);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-[#0b0f14] text-[#e2e8f0]' : 'bg-slate-50 text-slate-900'} transition-colors duration-200`}>

      {/* Sticky Minimal Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main id="main-content" className="relative">
        {/* 1. Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onFilterSkill={handleSelectSkill}
        />

        {/* 2. About & Philosophy */}
        <AboutSection />

        {/* 3. Technical Skills Matrix */}
        <SkillsSection
          selectedSkill={selectedSkill}
          onSelectSkill={handleSelectSkill}
        />

        {/* 4. Experience Timeline */}
        <ExperienceSection
          onSelectSkill={handleSelectSkill}
        />

        {/* 5. Featured Projects & Systems Grid */}
        <ProjectsSection
          selectedSkill={selectedSkill}
          onClearSkillFilter={() => setSelectedSkill(null)}
          onSelectSkill={handleSelectSkill}
        />

        {/* 6. Applied Research & Investigations */}
        <ResearchSection
          onSelectSkill={handleSelectSkill}
        />

        {/* 7. Hackathons, Open Source & Conferences */}
        <RecognitionSection />

        {/* 8. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Printable / Exportable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
