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

// Tailored for US CDC/DGHP "Public Health Specialist (Laboratory)" HCMC
// (erajobs vacancy 76507). Same facts as defaultResume, re-ordered and
// re-emphasized for a public-health-laboratory reader: CDC lab experience
// first, preventive-medicine degree and publications forward, AI work framed
// as public-sector program design and data analysis.
const cdcLabResume: ResumeData = {
  ...defaultResume,
  personal: {
    ...defaultResume.personal,
    title: "Public Health Laboratory Specialist",
  },
  summary:
    "Public health laboratory specialist with five years inside Vietnam's Ministry of Health system at the provincial CDC level, and a Master of Medical Sciences in preventive medicine from Kanazawa University with two peer-reviewed publications. Designed the barcode-based PCR traceability system that scaled CDC Vinh Long from under 300 to about 8,000 samples a day during COVID-19. Now designs and delivers digital-transformation and training programs for public-sector agencies at the Vinh Long Department of Science and Technology.",
  experience: [
    {
      company: "Vinh Long Provincial CDC",
      position: "Laboratory / Diagnostics Specialist (Medical Laboratory Technologist, Grade III)",
      location: "Vinh Long, Vietnam",
      startDate: "2021",
      endDate: "2026",
      achievements: [
        "Ran laboratory operations, reporting, and quality assurance within Vietnam's Ministry of Health provincial CDC system.",
        "Designed a barcode-based specimen traceability system for PCR testing, scaling throughput from under 300 to about 8,000 samples a day (~26x) during COVID-19; recognized in the Top 50 HIS-COVID Innovations 2021, a program supported by Vietnam's Ministry of Science and Technology.",
        "Cut diagnostic turnaround time by roughly 40% through workflow redesign, plate layout optimization, and quality-assurance monitoring during outbreak response.",
        "Performed diagnostic testing for provincial disease-control programs covering malaria, dengue, hepatitis, intestinal parasites, toxoplasmosis, toxocariasis, and measles, across molecular, microbiology, hematology, and biochemistry platforms.",
        "Took part in routine field epidemiology work: community outbreak investigations, immunization campaigns, and field specimen collection for provincial surveillance.",
        "Trained junior laboratory personnel and used data analysis to manage specimen routing and daily operations.",
      ],
    },
    {
      company: "Vinh Long Department of Science and Technology",
      position: "Specialist, Innovation and Digital Transformation Center",
      location: "Vinh Long, Vietnam",
      startDate: "May 2026",
      endDate: "Present",
      achievements: [
        "Design and implement digital-transformation and AI programs for public-sector agencies and provincial government units.",
        "Build training curricula and deliver hands-on implementation support for government personnel.",
        "Evaluate implementation pathways and advise provincial units on applying new technology safely and effectively.",
      ],
    },
    {
      company: "Turing",
      position: "AI Quality Analyst (Personalization) — Gemini-related projects",
      location: "Remote",
      startDate: "April 2026",
      endDate: "July 2026",
      achievements: [
        "Evaluated Vietnamese-language AI outputs against quality rubrics, task guidelines, and data-security requirements for a Google Gemini-related program.",
        "Worked 40 hours/week in English with a US-based team across PST timezone overlap.",
      ],
    },
    {
      company: "ATP & Hoc Vien AI",
      position: "Founder / Applied AI Systems Designer",
      location: "Remote, Vietnam",
      startDate: "2026",
      endDate: "Present",
      achievements: [
        "Built and operate hocvienai.help, an AI learning platform with automated student management, in use by paying customers.",
        "Designed data workflows connecting AI models with files, APIs, databases, and web systems.",
      ],
    },
  ],
  skills: [
    { category: "Lab systems", items: ["PCR workflow design", "Barcode traceability", "Quality assurance"] },
    { category: "Data analysis", items: ["Advanced spreadsheets", "Databases", "Workflow automation", "LLM evaluation"] },
    { category: "Program delivery", items: ["Training design", "Public-sector implementation", "Evaluation"] },
    { category: "Infra", items: ["Linux", "Docker", "Vercel"] },
  ],
  projects: [
    {
      title: "hocvienai.help",
      role: "Founder / Full-stack",
      period: "2026 – Present",
      url: "https://hocvienai.help",
      achievements: [
        "AI learning platform with an integrated chatbot and automated student management, in active use by paying customers.",
      ],
    },
  ],
};

// Tailored for Educato (YC S24) Full Stack Software Engineer — product-minded
// engineer who built and operates an AI exam-prep platform end to end, with
// LLM-evaluation background and public open-source shipped code. Lab/medical
// history compressed into one systems-flavored entry.
const educatoResume: ResumeData = {
  ...defaultResume,
  personal: {
    ...defaultResume.personal,
    title: "Full Stack Engineer — AI Learning Platforms",
  },
  summary:
    "Product-minded full-stack engineer who built and operates hocvienai.help, an AI exam-prep learning platform with paying customers: Next.js/TypeScript frontend, API and database layer, auth, and LLM features end to end. LLM evaluation experience from a Google Gemini-related program at Turing, and public open-source work as the #3 contributor on a 1,000+ star Android SSH client. Strong TypeScript/React with production Vue 3 experience.",
  experience: [
    {
      company: "ATP & Hoc Vien AI",
      position: "Founder / Full-stack Engineer",
      location: "Remote, Vietnam",
      startDate: "2026",
      endDate: "Present",
      achievements: [
        "Built hocvienai.help, an AI exam-prep LMS, end to end with Next.js and TypeScript: courses, lessons, quizzes, flashcards, and media decks served to real paying customers in production.",
        "Integrated LLM features across the product: an embedded tutoring chatbot, AI-generated quizzes and flashcards by difficulty level, and an automated lesson media pipeline.",
        "Automated student management: enrollment, role-based access via admin sessions and magic links, and Discord community integration (one course = one role = one forum).",
        "Built multi-agent AI workflows connecting models with files, APIs, databases, and web systems; shipped a Vue 3 + Vite onboarding app to production on Cloudflare Pages.",
      ],
    },
    {
      company: "Haven (open source)",
      position: "Contributor — #3 on the project's contribution graph",
      location: "Remote",
      startDate: "July 2026",
      endDate: "August 2026",
      achievements: [
        "9 pull requests landed on main of a 1,032-star Android SSH/SFTP client (12 commits, +4,314/-106), including porting a floating text input from ConnectBot and fixing a silent-failure terminal bug the maintainer called \"clean work\".",
        "Added test-retry infrastructure to cut down flaky upstream tests; one further fix for SSH session timeouts open for review.",
      ],
    },
    {
      company: "Turing",
      position: "AI Quality Analyst (Personalization) — Gemini-related projects",
      location: "Remote",
      startDate: "April 2026",
      endDate: "July 2026",
      achievements: [
        "Evaluated Vietnamese-language LLM outputs against quality rubrics, task guidelines, and data-security requirements for a Google Gemini-related program.",
        "Worked 40 hours/week asynchronously with a US-based team across PST timezone overlap.",
      ],
    },
    {
      company: "Vinh Long Provincial CDC",
      position: "Laboratory / Data Systems Specialist",
      location: "Vinh Long, Vietnam",
      startDate: "2021",
      endDate: "2026",
      achievements: [
        "Designed and ran a barcode-based specimen traceability system for PCR testing, scaling throughput from under 300 to about 8,000 samples a day (~26x) and cutting turnaround time by roughly 40%; recognized in the Top 50 HIS-COVID Innovations 2021.",
      ],
    },
  ],
  skills: [
    { category: "Frontend", items: ["TypeScript", "React", "Next.js", "Vue 3", "Vite", "Three.js"] },
    { category: "Backend", items: ["Node.js", "API design", "SQL/Postgres", "Auth (sessions, magic links)"] },
    { category: "AI/LLM", items: ["LLM product features", "Multi-agent workflows", "LLM evaluation", "MCP (Model Context Protocol)"] },
    { category: "Infra", items: ["Linux", "Docker", "Vercel", "Cloudflare Pages", "Tailscale"] },
  ],
};

// Tailored for TikTok "Brand Partnership Manager – Healthcare" (HCMC, Business
// Development & Sales). Angle: healthcare commercial insider — 3 years selling
// diagnostics to labs/hospitals, 5 years inside the public health system,
// hospital data analysis (Power BI), and a paid AI-training product with real
// customers. Same facts as profile.md, re-ordered; no ad/media claims.
const tiktokHealthcareResume: ResumeData = {
  ...defaultResume,
  personal: {
    ...defaultResume.personal,
    title: "Healthcare Commercial & Data Professional",
  },
  education: defaultResume.education.map((e) =>
    e.degree === "Bachelor of Laboratory Science" ? { ...e, degree: "Bachelor of Medical Laboratory Science" } : e,
  ),
  summary:
    "Healthcare commercial and data professional combining three years of customer-facing B2B sales to clinical laboratories and hospitals with five years inside Vietnam's public health system at the provincial CDC level. Analyzes clinical and operational data (Power BI, hospital data) and has driven adoption of a new workflow across a provincial health system under pandemic pressure, working with health authorities and government officials. Currently operates a commercial AI education platform with paying customers and trains government and business users in English and Vietnamese.",
  experience: [
    {
      company: "Diagnostics distributors (multiple)",
      position: "Sales Representative — Laboratory Consumables & Diagnostics Equipment",
      location: "Mekong Delta, Vietnam",
      startDate: "2015",
      endDate: "2018",
      achievements: [
        "Customer-facing B2B sales of laboratory consumables and diagnostics equipment to hospitals and clinical laboratories across the Mekong Delta.",
        "Built commercial relationships with clinical buyers, using technical insight gained while working in parallel as a part-time laboratory technician.",
      ],
    },
    {
      company: "Hoan My Cuu Long Hospital",
      position: "Data Analyst (within the 2015–2018 period)",
      location: "Can Tho, Vietnam",
      startDate: "2015",
      endDate: "2018",
      achievements: [
        "Hospital data analysis and Power BI reporting for clinical and administrative management.",
      ],
    },
    {
      company: "Vinh Long Provincial CDC",
      position: "Laboratory / Diagnostics Specialist",
      location: "Vinh Long, Vietnam",
      startDate: "2021",
      endDate: "May 2026",
      achievements: [
        "Drove adoption of a new workflow across a provincial health system under pandemic pressure: designed and implemented a barcode-based specimen traceability system that scaled PCR throughput from under 300 to about 4,000 samples a day (~13x) and cut turnaround time by roughly 40%; recognized in the Top 50 HIS-COVID Innovations 2021 (Vietnam Ministry of Science and Technology).",
        "Maintains active working relationships with CDC Vinh Long and neighboring Mekong Delta CDCs — first-hand understanding of how public healthcare institutions evaluate, procure, and adopt new tools.",
        "Performed diagnostics across hematology, microbiology, biochemistry, and molecular platforms; supported outbreak response; trained junior personnel.",
      ],
    },
    {
      company: "Vinh Long Department of Science and Technology",
      position: "Specialist, Innovation and Startup Department — Innovation and Digital Transformation Center",
      location: "Vinh Long, Vietnam",
      startDate: "May 2026",
      endDate: "Present",
      achievements: [
        "Design, implement, and teach digital-transformation and applied-AI training programs for government personnel — aligning stakeholders across provincial departments on technology adoption.",
        "Advise local startups and SMBs on applying AI to operations through the official provincial innovation hub (SIHUB).",
      ],
    },
    {
      company: "ATP & Hoc Vien AI",
      position: "Founder / Applied AI Systems Designer",
      location: "Remote, Vietnam",
      startDate: "2026",
      endDate: "Present",
      achievements: [
        "Founded and operate hocvienai.help, a commercial AI learning platform with an integrated chatbot and automated student management, in use by real paying customers.",
        "Train business owners and teams on AI fluency using official Anthropic Academy content (1:1 VIP intensive, small group, on-site), and design multi-agent workflows to automate business operations.",
      ],
    },
    {
      company: "Turing",
      position: "AI Quality Analyst (Personalization) — Google Gemini-related program",
      location: "Remote",
      startDate: "April 2026",
      endDate: "July 2026",
      achievements: [
        "Evaluated Vietnamese-language AI responses and personalization behavior against quality rubrics, task guidelines, and data-security requirements.",
        "Worked 40 hours/week in English with a US-based team across PST timezone overlap.",
      ],
    },
  ],
  skills: [
    { category: "Commercial", items: ["B2B healthcare sales", "Client relationship management", "Stakeholder engagement", "Training & enablement"] },
    { category: "Data analysis", items: ["Power BI", "Advanced spreadsheets", "Databases", "LLM evaluation"] },
    { category: "Healthcare domain", items: ["Clinical laboratory diagnostics", "Public health system (provincial CDC)", "PCR workflow design"] },
    { category: "AI & web", items: ["Multi-agent orchestration", "MCP (Model Context Protocol)", "Next.js", "TypeScript"] },
  ],
  projects: [
    {
      title: "hocvienai.help",
      role: "Founder / Full-stack",
      period: "2026 – Present",
      url: "https://hocvienai.help",
      achievements: [
        "AI learning platform with an integrated chatbot and automated student management, in active use by paying customers.",
      ],
    },
  ],
  certifications: [
    "Certificate of Completion — Google Cloud Gen AI Academy APAC 2026, Cohort 3 (Hack2Skill)",
  ],
};

// Tailored for Merck Healthcare "(Senior) Medical Advisor" (HCMC, Research &
// Science). Angle: scientist-communicator in public health — MMedSc Kanazawa,
// two peer-reviewed publications, five years of CDC diagnostics and epidemic
// response, scientific training/education, international research and team
// exposure. Sales 2015–2018 compressed to one customer-facing line. No pharma,
// medical-affairs, or KOL-management claims.
const merckMedicalAdvisorResume: ResumeData = {
  ...defaultResume,
  personal: {
    ...defaultResume.personal,
    title: "Medical Scientist · Public Health Diagnostics · Scientific Education",
  },
  summary:
    "Medical scientist and public health professional with a Master of Medical Sciences (MMedSc) from Kanazawa University, Japan, a Bachelor of Medical Laboratory Science, and over five years of diagnostic, research, and epidemic-response experience at a provincial CDC. Two peer-reviewed international publications in preventive medicine (first-author, Obesity Science & Practice 2021; co-author, Journal of Pain Research 2020). Fluent English communicator who designs and delivers technical training for government officials and professionals, and has worked within international research and US-based teams.",
  education: [
    {
      institution: "Kanazawa University, Japan",
      degree: "Master of Medical Sciences (MMedSc) — Environmental and Preventive Medicine / Public Health",
      location: "Kanazawa, Japan",
      graduationYear: "2020",
      startYear: "2018",
      bullets: [
        "Took part in health check-up data collection for two peer-reviewed studies, working in an international academic research environment.",
        "First-author: Hara A., Nguyen M. Phat, et al. \"Effect of β3-adrenergic receptor gene polymorphism and lifestyle on overweight in Japanese rural residents.\" Obesity Science & Practice. 2021;8(2):199-207. doi:10.1002/osp4.560",
        "Co-author: Suzuki K., Tsujiguchi H., Miyagi S., Nguyen M. Phat, et al. \"Association between serum 25-hydroxyvitamin D concentrations and chronic pain: Effects of drinking habits.\" Journal of Pain Research. 2020;13:2987-2996. doi:10.2147/JPR.S277979",
      ],
    },
    {
      institution: "Can Tho University of Medicine and Pharmacy, Vietnam",
      degree: "Bachelor of Medical Laboratory Science",
      location: "Can Tho, Vietnam",
      graduationYear: "2015",
      startYear: "2011",
    },
  ],
  experience: [
    {
      company: "Vinh Long Provincial CDC",
      position: "Laboratory / Diagnostics Specialist",
      location: "Vinh Long, Vietnam",
      startDate: "2021",
      endDate: "May 2026",
      achievements: [
        "Designed and implemented a barcode-based specimen traceability system for high-volume PCR testing, scaling throughput from under 300 to about 4,000 samples a day (~13x) and reducing turnaround time by roughly 40%; adopted across the provincial health system during the COVID-19 peak and recognized in the Top 50 HIS-COVID Innovations 2021 (Vietnam Ministry of Science and Technology).",
        "Performed diagnostics across molecular, microbiology, hematology, and biochemistry platforms for provincial disease-control programs (malaria, dengue, hepatitis, intestinal parasites, toxoplasmosis, toxocariasis, measles); supported outbreak response and field specimen collection for provincial surveillance.",
        "Trained junior laboratory personnel on quality assurance; took part in community outbreak investigations and immunization campaigns; maintains active working relationships with CDC Vinh Long and neighboring Mekong Delta CDCs.",
      ],
    },
    {
      company: "Vinh Long Department of Science and Technology",
      position: "Specialist, Innovation and Startup Department — Innovation and Digital Transformation Center",
      location: "Vinh Long, Vietnam",
      startDate: "May 2026",
      endDate: "Present",
      achievements: [
        "Design, implement, and teach digital-transformation and applied-AI training programs for provincial government personnel, with scientific and technical accuracy for a non-specialist audience.",
        "Provide technical support to local startups and SMBs adopting digital and AI tools through the official provincial innovation hub (SIHUB).",
      ],
    },
    {
      company: "ATP & Hoc Vien AI",
      position: "Founder / Trainer — Applied AI Systems",
      location: "Remote, Vietnam",
      startDate: "2026",
      endDate: "Present",
      achievements: [
        "Deliver structured technical education to business users using official Anthropic Academy content (1:1 VIP intensive, small group, on-site).",
        "Built and operate hocvienai.help, an AI learning platform with automated student management, in use by paying customers.",
      ],
    },
    {
      company: "Turing",
      position: "AI Quality Analyst (Personalization) — Google Gemini-related program",
      location: "Remote",
      startDate: "April 2026",
      endDate: "July 2026",
      achievements: [
        "Evaluated Vietnamese-language AI responses against quality rubrics, task guidelines, and data-security requirements.",
        "Worked 40 hours/week in English with a US-based team across PST timezone overlap.",
      ],
    },
    {
      company: "Diagnostics distributors (multiple) · Hoan My Cuu Long Hospital",
      position: "Diagnostics industry experience (customer-facing) · Hospital data analysis",
      location: "Mekong Delta, Vietnam",
      startDate: "2015",
      endDate: "2018",
      achievements: [
        "Customer-facing sales of laboratory consumables and diagnostics equipment to clinical laboratories; part-time laboratory technician in parallel; hospital data analysis using Power BI at Hoan My Cuu Long Hospital.",
      ],
    },
  ],
  skills: [
    { category: "Scientific", items: ["Molecular & clinical diagnostics", "PCR workflow design", "Quality assurance", "Epidemiology fieldwork"] },
    { category: "Education & communication", items: ["Training design & delivery", "Scientific writing (peer-reviewed)", "Fluent English", "Stakeholder engagement (public sector)"] },
    { category: "Data & AI", items: ["Power BI", "LLM evaluation", "Workflow automation", "Databases"] },
  ],
  projects: [],
  codingProfiles: [],
  certifications: [
    "Certificate of Completion — Google Cloud Gen AI Academy APAC 2026, Cohort 3 (Hack2Skill)",
  ],
  achievements: [
    "Top 50 HIS-COVID Innovations 2021 — Vietnam Ministry of Science and Technology (Entry No. 9)",
  ],
};

export const resumes: Record<string, ResumeData> = {
  default: defaultResume,
  // Per-job variants live here. Each key becomes a clean URL at
  // cv.agentdo.agency/<key>. Content is a full ResumeData copy (not a diff)
  // so each variant can re-order/re-emphasize projects independently.
  "interview-resources": defaultResume,
  "cdc-lab-hcmc": cdcLabResume,
  educato: educatoResume,
  "tiktok-healthcare": tiktokHealthcareResume,
  "merck-medical-advisor": merckMedicalAdvisorResume,
};

export const resumeData = resumes.default;

/** Finds a top-level project (e.g. "Project Name") by title. */
export function findProject(title: string) {
  return resumeData.projects.find((p) => p.title === title) ?? null;
}
