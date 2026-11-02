export interface PersonalInfo {
  name: string;
  title?: string;
  email?: string;
  phone?: string;
  location?: string;
  github?: string | null;
  linkedin?: string | null;
  website?: string | null;
  orcid?: string | null;
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
  /** Two-column only: text for the date column instead of "start – end" (e.g. "Contract, 04–07/2026"). */
  dateLabel?: string;
  /** Two-column only: render as a small sub-heading (same size as a sub-role). */
  compact?: boolean;
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
  /** Two-column only: one-sentence lead shown under the role line. */
  lead?: string;
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
  "summary" | "education" | "experience" | "projects" | "skills" | "codingProfiles" | "achievements" | "certifications" | "publications" | "awards",
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
    publications: "Publications",
    awards: "Awards & Certificates",
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
    publications: "Công bố",
    awards: "Giải thưởng và chứng chỉ",
  },
};

export type SectionKey = keyof (typeof SECTION_LABELS)["en"];

export interface ResumeData {
  /** Language of the section headings (content language is up to the data). Defaults to "en". */
  lang?: ResumeLang;
  /** "two-column": one-page layout — left = summary / projects / experience,
   * right = education / skills / publications / awards. Defaults to single column. */
  layout?: "single" | "two-column";
  /** Per-variant heading overrides (e.g. projects: "Projects (independent / open source)"). */
  sectionTitles?: Partial<Record<SectionKey, string>>;
  /** Two-column only: compact labelled lines at the end of Experience
   * (e.g. { label: "Contract", text: "..." }), not full entries. */
  experienceNotes?: { label: string; text: string }[];
  /** Two-column only: publications listed in the right column. */
  publications?: string[];
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
