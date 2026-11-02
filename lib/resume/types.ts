export interface PersonalInfo {
  name: string;
  title?: string;
  email?: string;
  phone?: string;
  location?: string;
  github?: string | null;
  linkedin?: string | null;
  website?: string | null;
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  graduationYear: string;
  startYear?: string | null;
  gpa?: string;
  bullets?: string[];
}

export interface ExperienceProject {
  name: string;
  period?: string;
  role?: string;
  techStack?: string[];
  achievements?: string[];
  link?: string;
  url?: string;
  githubUrl?: string;
  liveUrl?: string;
  evidence?: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements?: string[];
  projects?: ExperienceProject[];
}

export interface ProjectItem {
  title: string;
  role?: string;
  period?: string;
  location?: string;
  evidence?: string;
  link?: string;
  url?: string;
  githubUrl?: string;
  liveUrl?: string;
  achievements?: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface CodingProfile {
  platform: string;
  username: string;
  url: string;
}

export type ResumeLang = "en" | "vi";

/** Section headings per language. Web view and PDF both read from here so
 * they never drift apart. */
export const SECTION_LABELS: Record<ResumeLang, Record<
  "summary" | "education" | "experience" | "projects" | "skills" | "codingProfiles" | "achievements" | "certifications",
  string
>> = {
  en: {
    summary: "Summary",
    education: "Education",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    codingProfiles: "Coding Profiles",
    achievements: "Achievements",
    certifications: "Certifications",
  },
  vi: {
    summary: "Tóm tắt",
    education: "Học vấn",
    experience: "Kinh nghiệm",
    projects: "Dự án",
    skills: "Kỹ năng",
    codingProfiles: "Hồ sơ lập trình",
    achievements: "Thành tích và công bố",
    certifications: "Chứng chỉ",
  },
};

export interface ResumeData {
  /** Language of the section headings (content language is up to the data). Defaults to "en". */
  lang?: ResumeLang;
  personal: PersonalInfo;
  summary?: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  /** Optional: split experience into several titled sections (e.g. research
   * projects vs employment). When set, replaces the single Experience section
   * in both web and PDF views. */
  /** `breakBefore`: PDF only, start this section on a new page (avoids an orphaned heading). */
  experienceGroups?: { title: string; items: ExperienceItem[]; breakBefore?: boolean }[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  codingProfiles?: CodingProfile[];
  certifications?: string[];
  achievements?: string[];
}

export type CvType = string;
