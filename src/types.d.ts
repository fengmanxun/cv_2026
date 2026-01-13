export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  emailTitle: string;
  phone: string;
  phoneTitle: string;
  wechatqr: string;
  wechatqrTitle: string;
  wechatid: string;
  wechatidTitle: string;
}

export interface Experience {
  title: string;
  company: string;
  years: string;
  description: string[];
}

export interface Education {
  degree: string;
  university: string;
  years: string;
}

export interface Skills {
  programmingLanguages: string[];
  frontend: string[];
  backend: string[];
  tools: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  summaryTitle: string;
  experience: Experience[];
  experienceTitle: string;
  education: Education[];
  educationTitle: string;
  skills: Skills;
  skillsTitle: string;
  projects: Project[];
  projectsTitle: string;
}
