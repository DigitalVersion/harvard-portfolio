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

// Tailored for MIMS Pte Ltd "Medical & Society Engagement Manager" (HCMC).
// Angle: medical professional with an active Mekong Delta public-health
// network, education-program design/delivery, and a research background.
// Same profile.md facts; no CME / event-management / pharma claims.
const medicalEngagementResume: ResumeData = {
  ...merckMedicalAdvisorResume,
  personal: {
    ...defaultResume.personal,
    title: "Medical Scientist · Healthcare Education & Stakeholder Engagement",
  },
  summary:
    "Medical scientist and public health professional with a Master of Medical Sciences from Kanazawa University, Japan, two peer-reviewed publications, and an active working network across CDC Vinh Long and neighboring Mekong Delta CDCs. Designs and delivers training programs for provincial government personnel, business teams, and laboratory staff, and has driven adoption of a new barcode-based workflow across a provincial health system under pandemic pressure. Earlier customer-facing experience selling diagnostics to hospitals and clinical laboratories across the Mekong Delta.",
  experience: [
    {
      company: "Vinh Long Provincial CDC",
      position: "Laboratory / Diagnostics Specialist",
      location: "Vinh Long, Vietnam",
      startDate: "2021",
      endDate: "May 2026",
      achievements: [
        "Maintains active working relationships with CDC Vinh Long and neighboring Mekong Delta CDCs — a live channel into the region's preventive-health system; took part in community outbreak investigations, immunization campaigns, and field specimen collection.",
        "Drove adoption of a new barcode-based specimen traceability workflow across the provincial health system under pandemic pressure: PCR throughput scaled from under 300 to about 4,000 samples a day (~13x), turnaround time cut by roughly 40%; recognized in the Top 50 HIS-COVID Innovations 2021 (Vietnam Ministry of Science and Technology).",
        "Performed diagnostics across molecular, microbiology, hematology, and biochemistry platforms for provincial disease-control programs; designed and delivered quality-assurance training for junior laboratory personnel.",
      ],
    },
    {
      company: "Vinh Long Department of Science and Technology",
      position: "Specialist, Innovation and Startup Department — Innovation and Digital Transformation Center",
      location: "Vinh Long, Vietnam",
      startDate: "May 2026",
      endDate: "Present",
      achievements: [
        "Design, implement, and teach digital-transformation and applied-AI training programs for provincial government officials, aligning stakeholders across public departments on technology adoption.",
        "Support local startups and SMBs adopting digital and AI tools through the official provincial innovation hub (SIHUB).",
      ],
    },
    {
      company: "ATP & Hoc Vien AI",
      position: "Founder / Trainer — Applied AI Systems",
      location: "Remote, Vietnam",
      startDate: "2026",
      endDate: "Present",
      achievements: [
        "Deliver training programs to business owners and teams using official Anthropic Academy content (Claude 101, AI Fluency Framework, MCP, Multi-Agent Systems) in 1:1 intensive, small-group, and on-site formats.",
        "Founded and operate hocvienai.help, a learning platform with an integrated AI chatbot and automated student management, serving paying customers.",
      ],
    },
    {
      company: "Diagnostics distributors (multiple)",
      position: "Sales Representative — Laboratory Consumables & Diagnostics Equipment",
      location: "Mekong Delta, Vietnam",
      startDate: "2015",
      endDate: "2018",
      achievements: [
        "Built commercial relationships with hospital and clinical laboratory customers across the Mekong Delta; used a medical laboratory background to understand buyer needs, while working in parallel as a part-time laboratory technician.",
        "Hospital data analysis using Power BI at Hoan My Cuu Long Hospital within the same period.",
      ],
    },
    {
      company: "Turing",
      position: "AI Quality Analyst (Personalization) — Google Gemini-related program",
      location: "Remote",
      startDate: "April 2026",
      endDate: "July 2026",
      achievements: [
        "Evaluated Vietnamese-language AI responses against quality rubrics and data-security requirements, working 40 hours/week in English with a US-based team across PST timezone overlap.",
      ],
    },
  ],
  skills: [
    { category: "Health-system engagement", items: ["Provincial CDC network (Mekong Delta)", "Public-sector stakeholder alignment", "Hospital & laboratory customer relationships"] },
    { category: "Education & communication", items: ["Training program design & delivery", "Scientific writing (peer-reviewed)", "Fluent English"] },
    { category: "Scientific", items: ["Molecular & clinical diagnostics", "PCR workflow design", "Quality assurance", "Epidemiology fieldwork"] },
    { category: "Data & AI", items: ["Power BI", "LLM evaluation", "Workflow automation"] },
  ],
};

// Tailored for Pacific Informatics (Zymo Research's Vietnam subsidiary)
// "Business Development Specialist / Bioinformatics Solution" (HCMC, Hybrid,
// Mid-Senior). The posting had no JD; tailored to the company's business:
// bioinformatics/NGS data-analysis services + Zymo kits/reagents sold to labs,
// hospitals, institutes, genomics companies. Angle: has been both the customer
// and the seller in the Vietnamese lab market — 2015–18 B2B diagnostics sales,
// 5 years as a daily kit/reagent user inside a CDC molecular lab who built the
// lab's own PCR data pipeline (~4,000 samples/day), plus Python/TypeScript/SQL
// and a first-author genetic-association paper. Prose via /nha-van (NotebookLM)
// + humanizer pass. No claims of selling bioinformatics/NGS products, NGS
// wet-lab, or oncology experience.
const bioinformaticsBdResume: ResumeData = {
  ...defaultResume,
  personal: {
    ...defaultResume.personal,
    title: "Bioinformatics & Diagnostics Business Development · Lab Scientist with Data Engineering Background",
  },
  summary:
    "Brings experience from both sides of the Vietnamese laboratory market: sold laboratory consumables and diagnostics equipment to hospitals and clinical labs across the Mekong Delta (2015–2018), then spent five years as a daily user of extraction kits and PCR reagents inside a provincial CDC molecular diagnostics lab. Built that lab's data pipeline — barcode traceability from collection to PCR result to provincial report, handling ~4,000 samples a day — and now works in Python, TypeScript, SQL, and AI systems, so can speak with both lab buyers and a bioinformatics team. Holds an MSc from Kanazawa University and a first-author genetic-association paper (β3-adrenergic receptor polymorphism), enough to hold a genomics conversation with scientists. Backed by an active network of CDC, hospital, and laboratory contacts across the Mekong Delta.",
  education: [
    {
      institution: "Kanazawa University, Japan",
      degree: "Master of Medical Sciences (MMedSc) — Environmental and Preventive Medicine / Public Health",
      location: "Kanazawa, Japan",
      graduationYear: "2020",
      startYear: "2018",
      bullets: [
        "Coursework and research in English; field data collection and statistical analysis for two published epidemiological studies.",
        "First-author: Hara A., Nguyen M. Phat, et al. \"Effect of β3-adrenergic receptor gene polymorphism and lifestyle on overweight in Japanese rural residents.\" Obesity Science & Practice. 2021;8(2):199-207. doi:10.1002/osp4.560 (ADRB3 Trp64Arg genotyping, n=600, multivariable logistic regression)",
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
      company: "Diagnostics distributors (multiple)",
      position: "Sales Representative — Laboratory Consumables & Diagnostics Equipment",
      location: "Mekong Delta, Vietnam",
      startDate: "2015",
      endDate: "2018",
      achievements: [
        "Handled customer-facing B2B sales of laboratory consumables and diagnostics equipment to hospitals and clinical laboratories throughout the Mekong Delta.",
        "Built relationships with clinical buyers, including lab heads and hospital purchasing, using technical insight from parallel part-time work as a laboratory technician to understand how labs evaluate and buy kits and instruments.",
        "Conducted hospital data analysis and Power BI reporting at Hoan My Cuu Long Hospital within the same period to support clinical and administrative management.",
      ],
    },
    {
      company: "Vinh Long Provincial CDC",
      position: "Laboratory / Diagnostics Specialist (Medical Laboratory Technologist)",
      location: "Vinh Long, Vietnam",
      startDate: "May 2021",
      endDate: "Apr 2026",
      achievements: [
        "Served as a daily buyer-side user of extraction kits and PCR reagents for molecular diagnostics (qPCR/RT-PCR for SARS-CoV-2, hepatitis, intestinal parasites, toxoplasmosis, toxocariasis) and hematology, microbiology, and biochemistry platforms; biosafety certificate, Pasteur Institute (2021).",
        "Designed and built a barcode-based specimen traceability and reporting pipeline (collection → PCR result → provincial case report) replacing handwritten transcription, scaling daily PCR throughput from under 300 to ~4,000 samples (~13x) and cutting turnaround ~40% through workflow and 96-well plate-layout redesign; migrated label printing from BarTender to open-source OpenLabel, still in production; recognized in the Top 50 HIS-COVID Innovations 2021 (Vietnam Ministry of Science and Technology).",
        "Worked daily with clinicians, epidemiologists, and public health officers on outbreak investigations and field specimen collection across the province, while training junior laboratory staff on diagnostic protocols and quality standards.",
        "Maintains active working relationships with CDC Vinh Long and neighboring Mekong Delta CDCs, with first-hand knowledge of how public health laboratories evaluate, procure, and adopt new diagnostic tools.",
      ],
    },
    {
      company: "Vinh Long Department of Science and Technology",
      position: "Specialist, Innovation and Digital Transformation Center",
      location: "Vinh Long, Vietnam",
      startDate: "May 2026",
      endDate: "Present",
      achievements: [
        "Designs and delivers digital-transformation and applied-AI training programs for government agencies, covering program planning, budgeting, monitoring, and reporting.",
        "Supports local startups and SMBs adopting AI through the provincial innovation hub (SIHUB).",
      ],
    },
    {
      company: "ATP & Hoc Vien AI",
      position: "Founder / Full-stack Engineer",
      location: "Remote, Vietnam",
      startDate: "2026",
      endDate: "Present",
      achievements: [
        "Built and operates hocvienai.help, a Next.js/TypeScript + Postgres learning platform with LLM features (chatbot, generated quizzes and flashcards), used by paying customers.",
        "Builds multi-agent AI workflows connecting LLMs to files, APIs, and databases via MCP (Model Context Protocol).",
      ],
    },
    {
      company: "Turing",
      position: "AI Quality Analyst (Personalization) — Google Gemini-related program",
      location: "Remote",
      startDate: "April 2026",
      endDate: "July 2026",
      achievements: [
        "Rubric-based evaluation of Vietnamese LLM outputs under quality and data-security requirements, working 40 hours/week in English with a US-based (PST) team.",
      ],
    },
  ],
  skills: [
    { category: "Commercial (lab market)", items: ["B2B sales to hospitals & clinical labs", "Client relationship management", "Public-sector stakeholder engagement", "Training & enablement", "Fluent English"] },
    { category: "Molecular & clinical diagnostics", items: ["qPCR/RT-PCR", "DNA/RNA extraction workflows", "SNP genotyping (research)", "Biosafety", "Quality assurance"] },
    { category: "Data & software", items: ["Python", "TypeScript/Node.js", "SQL/Postgres", "Power BI", "Multivariable regression / epidemiological analysis", "Linux, Docker, Git"] },
    { category: "AI/LLM", items: ["Multi-agent orchestration", "MCP", "RAG", "LLM evaluation"] },
  ],
  projects: [],
  codingProfiles: [],
  certifications: [
    "Certificate of Completion — Google Cloud Gen AI Academy APAC 2026, Cohort 3 (Hack2Skill)",
    "Biosafety certificate — Pasteur Institute (2021)",
  ],
  achievements: [
    "Top 50 HIS-COVID Innovations 2021 — Vietnam Ministry of Science and Technology (Entry No. 9)",
  ],
};

// Tailored for Pacific Informatics (Zymo Research's Vietnam subsidiary, "PI")
// per the GM's own words (Tran Lam): dealers sell, PI supports dealers; this
// role bundles Bioinformatics services with Zymo kits into one "full solution",
// finds research/product partners around Microbiome, must be able to do
// bioinformatics and know the products like a Specialist, and wants start-up
// style BD. Four pillars in order: builder/start-up → data/computational
// foundation → product specialist from the user side → network for research
// partners. Prose via /nha-van (NotebookLM, 1 idea per ask) + humanizer pass.
// Truth constraints: ~4,000 samples/day (never 8,000); no claim of having done
// NGS/microbiome analysis (only "foundation"); no NGS wet-lab or oncology.
const pacificInformaticsResume: ResumeData = {
  ...defaultResume,
  personal: {
    ...defaultResume.personal,
    title: "Full-Solution Specialist · Lab Scientist × Data Builder × Start-up Operator",
  },
  summary:
    "Able to pair Zymo kits with bioinformatics services into one full solution for the customer, after five years as a daily lab user of extraction and PCR kits and, today, building software and data systems. Reaches potential research partners through an active CDC and hospital network across the Mekong Delta and a current post at the provincial innovation hub under the Vinh Long Department of Science and Technology. Works in start-up mode now: founded ATP and built hocvienai.help to paying customers, through an early period with no revenue. Strong data foundation (Python, TypeScript, SQL; a ~4,000-samples-a-day PCR data pipeline; a first-author genetic association paper), but has not yet run NGS or microbiome analysis as a specialist, and learns by doing real work.",
  education: [
    {
      institution: "Kanazawa University, Japan",
      degree: "Master of Medical Sciences (MMedSc) — Environmental and Preventive Medicine / Public Health",
      location: "Kanazawa, Japan",
      graduationYear: "2020",
      startYear: "2018",
      bullets: [
        "Coursework and research in English; field data collection and statistical analysis for two published epidemiological studies.",
        "First-author: Hara A., Nguyen M. Phat, et al. \"Effect of β3-adrenergic receptor gene polymorphism and lifestyle on overweight in Japanese rural residents.\" Obesity Science & Practice. 2021;8(2):199-207. doi:10.1002/osp4.560 (ADRB3 Trp64Arg genotyping, n=600, multivariable logistic regression)",
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
      company: "Vinh Long Department of Science and Technology",
      position: "Specialist, Innovation and Digital Transformation Center (provincial SIHUB)",
      location: "Vinh Long, Vietnam",
      startDate: "May 2026",
      endDate: "Present",
      achievements: [
        "Supports local startups and SMBs adopting AI, and designs and delivers digital-transformation training programs for government agencies, including planning, budgeting, monitoring, and reporting.",
        "Holds a working door into public institutions and research-minded units in the Mekong Delta, useful for research and product partnerships.",
      ],
    },
    {
      company: "ATP & Hoc Vien AI",
      position: "Founder / Full-stack Engineer (start-up, self-funded)",
      location: "Remote, Vietnam",
      startDate: "2026",
      endDate: "Present",
      achievements: [
        "Built and operates hocvienai.help solo: a Next.js/TypeScript + Postgres learning platform with LLM features (chatbot, generated quizzes and flashcards), used by paying customers.",
        "Developed the ATP (Agent Tactics Protocol) framework and multi-agent AI workflows via MCP (Model Context Protocol), connecting LLMs to files, APIs, databases, and remote machines.",
        "Built the product through an early period with no revenue, before customers paid.",
      ],
    },
    {
      company: "Vinh Long Provincial CDC",
      position: "Laboratory / Diagnostics Specialist (Medical Laboratory Technologist)",
      location: "Vinh Long, Vietnam",
      startDate: "May 2021",
      endDate: "Apr 2026",
      achievements: [
        "Used DNA/RNA extraction kits and PCR reagents daily for qPCR/RT-PCR (SARS-CoV-2, hepatitis, intestinal parasites, toxoplasmosis, toxocariasis), alongside hematology, microbiology, and biochemistry platforms; biosafety certificate, Pasteur Institute (2021).",
        "Designed and built a barcode specimen traceability data pipeline from collection to PCR result to provincial report, scaling daily throughput from under 300 to ~4,000 samples (~13x) and cutting turnaround time ~40% through workflow and 96-well plate-layout redesign; migrated label printing from BarTender to open-source OpenLabel, still in production. Top 50 HIS-COVID Innovations 2021 (Vietnam Ministry of Science and Technology).",
        "Trained junior staff on protocols and quality standards, and worked daily with clinicians, epidemiologists, and public health officers on outbreak investigations and field specimen collection.",
        "Maintains active working relationships with CDC Vinh Long, other Mekong Delta CDCs, and hospitals, with first-hand knowledge of how public labs evaluate, procure, and adopt new tools.",
      ],
    },
    {
      company: "Diagnostics distributors (multiple)",
      position: "Sales Representative — Laboratory Consumables & Diagnostics Equipment",
      location: "Mekong Delta, Vietnam",
      startDate: "2015",
      endDate: "2018",
      achievements: [
        "Sold laboratory consumables and diagnostics equipment B2B to hospitals and clinical labs across the Mekong Delta.",
        "Built relationships with laboratory heads and hospital purchasing departments, with technical credibility from parallel part-time work as a lab technician.",
        "Knows from the dealer seat what a vendor's specialist must supply to distributors: technical answers, demos, training, and application support.",
        "Performed hospital data analysis and Power BI reporting at Hoan My Cuu Long Hospital in the same period.",
      ],
    },
    {
      company: "Turing",
      position: "AI Quality Analyst (Personalization) — Google Gemini-related program",
      location: "Remote",
      startDate: "April 2026",
      endDate: "July 2026",
      achievements: [
        "Ran rubric-based evaluation of Vietnamese LLM outputs under quality and data-security requirements, 40 hours a week in English with a US-based (PST) team.",
      ],
    },
  ],
  skills: [
    { category: "Data & software", items: ["Python", "TypeScript/Node.js", "SQL/Postgres", "Bash", "Power BI", "Multivariable regression / epidemiological analysis", "Linux, Docker, Git", "Multi-agent orchestration, MCP, RAG, LLM evaluation"] },
    { category: "Diagnostics & lab", items: ["qPCR/RT-PCR", "DNA/RNA extraction workflows", "SNP genotyping (research)", "Barcode traceability & LIS-style pipelines", "Biosafety", "Quality assurance", "Staff training"] },
    { category: "Business development & partnerships", items: ["B2B sales to hospitals & clinical labs", "Dealer/distributor support insight", "Public-sector & research-institution engagement", "Training & enablement", "Fluent English"] },
  ],
  projects: [],
  codingProfiles: [],
  certifications: [
    "Certificate of Completion — Google Cloud Gen AI Academy APAC 2026, Cohort 3 (Hack2Skill)",
    "Biosafety certificate — Pasteur Institute (2021)",
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
  "medical-engagement": medicalEngagementResume,
  "bioinformatics-bd": bioinformaticsBdResume,
  "pacific-informatics": pacificInformaticsResume,
};

export const resumeData = resumes.default;

/** Finds a top-level project (e.g. "Project Name") by title. */
export function findProject(title: string) {
  return resumeData.projects.find((p) => p.title === title) ?? null;
}
