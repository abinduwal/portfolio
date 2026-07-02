export interface Profile {
  name: string;
  title: string;
  secondaryTitle: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  upwork?: string;
  instagram?: string;
  domain: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
  responsibilities: string[];
  projects?: string[];
}

export interface ProjectItem {
  title: string;
  type: string;
  company?: string;
  role: string;
  description: string;
  features: string[];
  techStack: string[];
  status: string;
  link?: string;
  featured: boolean;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  displayTitle: string;
}

export interface OtherWorkItem {
  title: string;
  description: string;
  status: string;
}
