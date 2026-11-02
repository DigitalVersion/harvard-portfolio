import { SECTION_LABELS, type ResumeData, type SectionKey } from "@/lib/resume/types";

// Web view of the one-page two-column layout. Mirrors ResumePDFTwoColumn.tsx:
// left = summary / projects / experience, right = education / skills /
// publications / awards. Collapses to one column on narrow screens.

const H = ({ children, first = false }: { children: React.ReactNode; first?: boolean }) => (
  <h2
    className={`text-[11px] font-bold uppercase tracking-wider text-[#1f3a68] border-b border-[#1f3a68] pb-0.5 mb-1.5 ${first ? "" : "mt-3"}`}
  >
    {children}
  </h2>
);

const Bullets = ({ items }: { items?: string[] }) =>
  items && items.length > 0 ? (
    <ul className="list-disc ml-4 space-y-0.5">
      {items.map((t, i) => {
        const m = t.match(/^\*\*(.+?)\*\*\s*([\s\S]*)$/);
        return <li key={i}>{m ? <><strong>{m[1]}</strong> {m[2]}</> : t}</li>;
      })}
    </ul>
  ) : null;

export default function ResumeHTMLTwoColumn({ data }: { data: ResumeData }) {
  const base = SECTION_LABELS[data.lang ?? "en"];
  const T = (k: SectionKey) => data.sectionTitles?.[k] ?? base[k];
  const p = data.personal;
  const contacts: { text: string; href?: string }[] = [];
  if (p.location) contacts.push({ text: p.location });
  if (p.email) contacts.push({ text: p.email, href: `mailto:${p.email}` });
  if (p.phone) contacts.push({ text: p.phone, href: `tel:${p.phone.replace(/\s+/g, "")}` });
  if (p.website) contacts.push({ text: p.website.replace(/^https?:\/\//, ""), href: p.website });
  if (p.orcid) contacts.push({ text: `ORCID ${p.orcid}`, href: `https://orcid.org/${p.orcid}` });

  return (
    <div className="w-full max-w-[900px] mx-auto bg-white text-gray-900 shadow-2xl rounded-sm p-6 sm:p-8 font-sans leading-snug text-[12px] my-6 border border-gray-200">
      <header className="border-b-2 border-[#1f3a68] pb-2 mb-3">
        <h1 className="text-2xl font-bold text-[#1f3a68]">{p.name}</h1>
        {p.title && <div className="text-xs text-gray-600">{p.title}</div>}
        <div className="flex flex-wrap gap-x-2 text-[11px] text-gray-700 mt-1">
          {contacts.map((c, i) => (
            <span key={i} className="flex gap-2">
              {i > 0 && <span className="text-gray-400">|</span>}
              {c.href ? (
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-[#1f3a68] hover:underline">
                  {c.text}
                </a>
              ) : (
                <span>{c.text}</span>
              )}
            </span>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[62fr_38fr] gap-4">
        <div className="md:pr-4 md:border-r border-[#c9d3e3]">
          {data.summary && <p className="bg-[#eef3fa] border-l-2 border-[#1f3a68] px-2 py-1.5">{data.summary}</p>}

          {data.projects.length > 0 && (
            <>
              <H>{T("projects")}</H>
              {data.projects.map((pr, i) => (
                <div key={i} className="mb-2">
                  <div className="flex justify-between gap-2">
                    <span className="font-bold">{pr.title}</span>
                    <span className="text-[11px] text-gray-600 whitespace-nowrap">{pr.period}</span>
                  </div>
                  {pr.role && <div className="italic text-[#1f3a68] text-[11px]">{pr.role}</div>}
                  {pr.lead && <p className="mb-0.5">{pr.lead}</p>}
                  <Bullets items={pr.achievements} />
                </div>
              ))}
            </>
          )}

          <H>{T("experience")}</H>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-2">
              <div className="flex justify-between gap-2">
                <span className={exp.compact ? "font-semibold" : "font-bold"}>{exp.company}</span>
                <span className="text-[11px] text-gray-600 whitespace-nowrap">
                  {exp.dateLabel ?? `${exp.startDate} – ${exp.endDate}`}
                </span>
              </div>
              {exp.position && <div className="italic text-[#1f3a68] text-[11px]">{exp.position}</div>}
              <Bullets items={exp.achievements} />
              {exp.projects?.map((sub, j) => (
                <div key={j} className="mt-1 ml-2">
                  <div className="flex justify-between gap-2">
                    <span className="font-semibold">{sub.name}</span>
                    <span className="text-[11px] text-gray-600 whitespace-nowrap">{sub.period}</span>
                  </div>
                  {sub.role && <div className="italic text-[#1f3a68] text-[11px]">{sub.role}</div>}
                  <Bullets items={sub.achievements} />
                </div>
              ))}
            </div>
          ))}
          {data.experienceNotes?.map((n, i) => (
            <p key={i} className="mt-1">
              <span className="font-bold text-[#1f3a68]">{n.label}: </span>
              {n.text}
            </p>
          ))}
        </div>

        <div>
          <H first>{T("education")}</H>
          {data.education.map((e, i) => (
            <div key={i} className="mb-2">
              <div className="flex justify-between gap-2">
                <span className="font-bold">{e.institution}</span>
                <span className="text-[11px] text-gray-600 whitespace-nowrap">
                  {e.startYear ? `${e.startYear} – ` : ""}
                  {e.graduationYear}
                </span>
              </div>
              <div className="italic text-[#1f3a68] text-[11px]">{e.degree}</div>
              {e.bullets?.map((b, j) => (
                <div key={j} className="text-[11px]">
                  {b}
                </div>
              ))}
            </div>
          ))}

          <H>{T("skills")}</H>
          {data.skills.map((sc, i) => (
            <div key={i} className="mb-1 text-[11px]">
              <div className="font-bold text-[#1f3a68]">{sc.category}</div>
              <div>{sc.items.join(", ")}</div>
            </div>
          ))}

          {data.publications && data.publications.length > 0 && (
            <>
              <H>{T("publications")}</H>
              <div className="text-[11px]">
                <Bullets items={data.publications} />
              </div>
            </>
          )}

          {((data.achievements?.length ?? 0) > 0 || (data.certifications?.length ?? 0) > 0) && (
            <>
              <H>{T("awards")}</H>
              <div className="text-[11px]">
                <Bullets items={[...(data.achievements ?? []), ...(data.certifications ?? [])]} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
