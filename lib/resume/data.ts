import type { ResumeData } from "./types";

const defaultResume: ResumeData = {
  personal: {
    name: "Nguyen Minh Phat",
    title: "Applied AI Systems Designer",
    email: "minhphat1@gmail.com",
    location: "Can Tho, Vietnam",
    github: "https://github.com/kanazawahere",
    linkedin: "https://www.linkedin.com/in/phat-nguyen-9b53365a",
    website: "https://hocvienai.help",
  },
  summary:
    "Applied AI systems designer and medical laboratory scientist with an MMedSc from Kanazawa University, Japan. Built a barcode-based PCR traceability workflow that scaled CDC Vinh Long from under 300 to about 8,000 samples a day and cut turnaround time by roughly 40%. Now focused on practical AI agents, AI-LMS infrastructure, and public-sector and SMB AI adoption.",
  education: [
    {
      institution: "Kanazawa University, Japan",
      degree: "Master of Medical Sciences (MMedSc) — Environmental and Preventive Medicine / Public Health",
      location: "Kanazawa, Japan",
      graduationYear: "2020",
      startYear: "2018",
    },
    {
      institution: "Can Tho University of Medicine and Pharmacy, Vietnam",
      degree: "Bachelor of Laboratory Science",
      location: "Can Tho, Vietnam",
      graduationYear: "2015",
      startYear: "2011",
    },
  ],
  experience: [
    {
      company: "Vinh Long Department of Science and Technology",
      position: "Specialist, Innovation and Startup Department",
      location: "Vinh Long, Vietnam",
      startDate: "May 2026",
      endDate: "Present",
      achievements: [
        "Support local startups and SMBs applying AI and digital technologies.",
        "Design practical AI training and implementation pathways for public-sector and business users.",
      ],
    },
    {
      company: "ATP & Hoc Vien AI",
      position: "Founder / Applied AI Systems Designer",
      location: "Remote, Vietnam",
      startDate: "2026",
      endDate: "Present",
      achievements: [
        "Built and operate hocvienai.help, an AI-LMS with an integrated chatbot and automated student management, in use by real paying customers.",
        "Built ATP (Agent Tactics Protocol), a framework/toolkit for deploying AI agents in real business operations.",
        "Designed multi-agent workflows connecting AI models with files, APIs, databases, web systems, and remote machines.",
      ],
    },
    {
      company: "Turing",
      position: "AI Quality Analyst (Personalization) / AI Contractor — Gemini-related projects",
      location: "Remote",
      startDate: "April 2026",
      endDate: "July 2026",
      achievements: [
        "Evaluated Vietnamese-language AI responses and personalization behavior against quality rubrics, task guidelines, and data-security requirements for a Google Gemini-related program.",
        "Worked 40 hours/week with PST timezone overlap.",
      ],
    },
    {
      company: "Vinh Long Provincial CDC",
      position: "Laboratory / Diagnostics Specialist",
      location: "Vinh Long, Vietnam",
      startDate: "2021",
      endDate: "2026",
      achievements: [
        "Designed a barcode-based specimen traceability system for PCR testing, scaling throughput from under 300 to about 8,000 samples a day (~26x).",
        "Reduced diagnostic turnaround time by roughly 40% through workflow redesign, plate layout optimization, and quality-assurance monitoring.",
        "Recognized in the Top 50 HIS-COVID Innovations 2021, a program supported by Vietnam's Ministry of Science and Technology.",
        "Performed diagnostics across hematology, microbiology, biochemistry, and molecular platforms; supported outbreak response; trained junior personnel.",
      ],
    },
  ],
  skills: [
    { category: "AI systems", items: ["Multi-agent orchestration", "MCP (Model Context Protocol)", "LLM evaluation", "RAG"] },
    { category: "Web", items: ["Next.js", "React", "TypeScript", "Three.js"] },
    { category: "Infra", items: ["Linux", "Docker", "Tailscale", "Vercel"] },
    { category: "Lab systems", items: ["PCR workflow design", "Barcode traceability", "Quality assurance"] },
  ],
  projects: [
    {
      title: "Haven (open-source contributor)",
      role: "Regular contributor, #3 on GitHub's contribution graph",
      period: "July - August 2026",
      githubUrl: "https://github.com/GlassHaven/Haven/pull/535",
      achievements: [
        "Regular contributor to Haven, a 1,032-star open-source Android SSH/SFTP client, over the past month. Currently #3 contributor on the project's GitHub graph (12 commits, +4,314/-106).",
        "9 pull requests landed on main, via official merge or maintainer-applied git am with authorship preserved. Examples: porting a floating text input from ConnectBot (PR #439), fixing a silent-failure terminal bug the maintainer called \"clean work\" (PR #535), and adding test-retry to cut down flaky upstream tests (PR #475).",
        "One additional fix, for SSH session timeouts, is currently open for review (PR #537).",
      ],
    },
    {
      title: "hocvienai.help",
      role: "Founder / Full-stack",
      period: "2026 – Present",
      url: "https://hocvienai.help",
      achievements: [
        "AI-LMS with an integrated chatbot and automated student management, in active use by paying customers.",
      ],
    },
  ],
  codingProfiles: [
    { platform: "GitHub", username: "kanazawahere", url: "https://github.com/kanazawahere" },
    { platform: "GitHub", username: "DigitalVersion", url: "https://github.com/DigitalVersion" },
  ],
  certifications: [],
  achievements: [
    "Top 50 HIS-COVID Innovations 2021 — Vietnam Ministry of Science and Technology (Entry No. 9)",
    "First-author: Hara A., Nguyen M. Phat, et al. \"Effect of β3-adrenergic receptor gene polymorphism and lifestyle on overweight in Japanese rural residents.\" Obesity Science & Practice. 2021;8(2):199-207. doi:10.1002/osp4.560",
    "Co-author: Suzuki K., Tsujiguchi H., Miyagi S., Nguyen M. Phat, et al. \"Association between serum 25-hydroxyvitamin D concentrations and chronic pain: Effects of drinking habits.\" Journal of Pain Research. 2020;13:2987-2996. doi:10.2147/JPR.S277979",
  ],
};

export const resumes: Record<string, ResumeData> = {
  default: defaultResume,
  // Per-job variants live here. Each key becomes a clean URL at
  // cv.agentdo.agency/<key>. Content is a full ResumeData copy (not a diff)
  // so each variant can re-order/re-emphasize projects independently.
  "interview-resources": defaultResume,
};

export const resumeData = resumes.default;

/** Finds a top-level project (e.g. "Project Name") by title. */
export function findProject(title: string) {
  return resumeData.projects.find((p) => p.title === title) ?? null;
}
