export type ProjectCategory = 
  | 'All'
  | 'AI & LLM'
  | 'Computer Vision'
  | 'Systems & Infra'
  | 'Developer Tooling'
  | 'Full-Stack';

export interface Project {
  id: string;
  title: string;
  hook: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  featured: boolean;
  githubUrl?: string;
  huggingfaceUrl?: string;
  liveUrl?: string;
  architectureHighlights: string[];
  systemSpecs?: {
    runtime?: string;
    throughputOrLatency?: string;
    licenseOrStatus?: string;
  };
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  duration: string;
  period: string;
  skills: string[];
  achievements: string[];
}

export interface SkillCategory {
  name: string;
  iconName: string;
  skills: string[];
}

export interface ResearchContribution {
  title: string;
  description: string;
  tags: string[];
}

export interface HackathonRecognition {
  title: string;
  host: string;
  result: string;
  location: string;
  year: string;
  description: string;
  tags: string[];
}

export interface OpenSourceProject {
  title: string;
  tech: string[];
  description: string;
  githubUrl: string;
  starsOrStatus: string;
}

export interface ConferenceExperience {
  role: string;
  event: string;
  year: string;
  description: string;
  focus: string;
}
