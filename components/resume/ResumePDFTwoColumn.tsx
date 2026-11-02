import { Document, Page, Text, View, StyleSheet, Link, Font } from "@react-pdf/renderer";
import { SECTION_LABELS, type ResumeData, type SectionKey } from "@/lib/resume/types";

// One-page, two-column layout (left: summary / projects / experience; right:
// education / skills / publications / awards). Fonts are registered by
// ResumePDF.tsx, which is the only caller.

// No automatic hyphenation: react-pdf's default splitter breaks words like
// "auto-mation" and mangles abbreviations ("M.Sc." rendered as "Sc").
Font.registerHyphenationCallback((word) => [word]);

const NAVY = "#1f3a68";
const RULE = "#c9d3e3";

const styles = StyleSheet.create({
  page: { fontFamily: "Roboto", fontSize: 8.5, lineHeight: 1.28, color: "#111111", paddingTop: 20, paddingBottom: 16, paddingHorizontal: 24 },
  header: { borderBottomWidth: 1.2, borderBottomColor: NAVY, paddingBottom: 5, marginBottom: 6 },
  name: { fontSize: 17, fontWeight: "bold", color: NAVY, lineHeight: 1.15, marginBottom: 2 },
  target: { fontSize: 8.8, color: "#555555", marginTop: 1 },
  contact: { flexDirection: "row", flexWrap: "wrap", marginTop: 3, fontSize: 8.2, color: "#333333" },
  sep: { marginHorizontal: 4, color: "#999999" },
  link: { color: NAVY, textDecoration: "none" },
  cols: { flexDirection: "row" },
  left: { width: "62%", paddingRight: 9, borderRightWidth: 0.6, borderRightColor: RULE },
  right: { width: "38%", paddingLeft: 9 },
  h: { fontSize: 9.3, fontWeight: "bold", color: NAVY, textTransform: "uppercase", letterSpacing: 0.4, borderBottomWidth: 0.6, borderBottomColor: NAVY, paddingBottom: 1.5, marginTop: 6, marginBottom: 3 },
  summary: { backgroundColor: "#eef3fa", borderLeftWidth: 2, borderLeftColor: NAVY, paddingVertical: 4, paddingHorizontal: 5, marginBottom: 1 },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  title: { fontWeight: "bold", fontSize: 8.9, flex: 1, paddingRight: 4 },
  subTitle: { fontWeight: "bold", fontSize: 8.5, flex: 1, paddingRight: 4 },
  date: { fontSize: 7.9, color: "#444444" },
  // No italic anywhere in this layout: the italic face loses "." and a leading
  // "M."/"B." in the PDF text layer (copy-paste / ATS), so roles use colour only.
  role: { fontSize: 8.1, color: NAVY, marginBottom: 1 },
  degree: { fontSize: 8.3, color: NAVY, marginBottom: 1 },
  item: { marginBottom: 3.5 },
  subItem: { marginTop: 2, marginLeft: 6 },
  bullet: { flexDirection: "row", marginBottom: 0.8 },
  dot: { width: 7 },
  btext: { flex: 1 },
  note: { flexDirection: "row", marginTop: 2 },
  noteLabel: { fontWeight: "bold", color: NAVY, marginRight: 3 },
  skillCat: { fontWeight: "bold", color: NAVY, marginTop: 2 },
  small: { fontSize: 8 },
});

const Bullets = ({ items }: { items?: string[] }) =>
  items && items.length > 0 ? (
    <View>
      {items.map((t, i) => (
        <View key={i} style={styles.bullet}>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.btext}>{t}</Text>
        </View>
      ))}
    </View>
  ) : null;

interface Props {
  data: ResumeData;
  type?: string;
}

const ResumePDFTwoColumn = ({ data, type = "default" }: Props) => {
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
    <Document title={`Resume - ${p.name} (${type})`}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{p.name}</Text>
          {p.title && <Text style={styles.target}>{p.title}</Text>}
          <View style={styles.contact}>
            {contacts.map((c, i) => (
              <View key={i} style={{ flexDirection: "row" }}>
                {i > 0 && <Text style={styles.sep}>|</Text>}
                {c.href ? (
                  <Link src={c.href} style={styles.link}>
                    {c.text}
                  </Link>
                ) : (
                  <Text>{c.text}</Text>
                )}
              </View>
            ))}
          </View>
        </View>

        <View style={styles.cols}>
          {/* LEFT */}
          <View style={styles.left}>
            {data.summary && (
              <View style={styles.summary}>
                <Text>{data.summary}</Text>
              </View>
            )}

            {data.projects.length > 0 && (
              <View>
                <Text style={styles.h}>{T("projects")}</Text>
                {data.projects.map((pr, i) => (
                  <View key={i} style={styles.item}>
                    <View style={styles.row}>
                      <Text style={styles.title}>{pr.title}</Text>
                      {pr.period && <Text style={styles.date}>{pr.period}</Text>}
                    </View>
                    {pr.role && <Text style={styles.role}>{pr.role}</Text>}
                    <Bullets items={pr.achievements} />
                  </View>
                ))}
              </View>
            )}

            <View>
              <Text style={styles.h}>{T("experience")}</Text>
              {data.experience.map((exp, i) => (
                <View key={i} style={styles.item}>
                  <View style={styles.row}>
                    <Text style={styles.title}>{exp.company}</Text>
                    <Text style={styles.date}>
                      {exp.startDate} – {exp.endDate}
                    </Text>
                  </View>
                  {exp.position && <Text style={styles.role}>{exp.position}</Text>}
                  <Bullets items={exp.achievements} />
                  {exp.projects?.map((sub, j) => (
                    <View key={j} style={styles.subItem}>
                      <View style={styles.row}>
                        <Text style={styles.subTitle}>{sub.name}</Text>
                        {sub.period && <Text style={styles.date}>{sub.period}</Text>}
                      </View>
                      {sub.role && <Text style={styles.role}>{sub.role}</Text>}
                      <Bullets items={sub.achievements} />
                    </View>
                  ))}
                </View>
              ))}
              {data.experienceNotes?.map((n, i) => (
                <View key={i} style={styles.note}>
                  <Text style={styles.btext}>
                    <Text style={styles.noteLabel}>{n.label}: </Text>
                    {n.text}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* RIGHT */}
          <View style={styles.right}>
            <Text style={[styles.h, { marginTop: 0 }]}>{T("education")}</Text>
            {data.education.map((e, i) => (
              <View key={i} style={styles.item}>
                <View style={styles.row}>
                  <Text style={styles.title}>{e.institution}</Text>
                  <Text style={styles.date}>
                    {e.startYear ? `${e.startYear} – ` : ""}
                    {e.graduationYear}
                  </Text>
                </View>
                <Text style={styles.degree}>{e.degree}</Text>
                {e.bullets?.map((b, j) => (
                  <Text key={j} style={styles.small}>
                    {b}
                  </Text>
                ))}
              </View>
            ))}

            <Text style={styles.h}>{T("skills")}</Text>
            {data.skills.map((sc, i) => (
              <View key={i}>
                <Text style={styles.skillCat}>{sc.category}</Text>
                <Text style={styles.small}>{sc.items.join(", ")}</Text>
              </View>
            ))}

            {data.publications && data.publications.length > 0 && (
              <View>
                <Text style={styles.h}>{T("publications")}</Text>
                <View style={styles.small}>
                  <Bullets items={data.publications} />
                </View>
              </View>
            )}

            {((data.achievements?.length ?? 0) > 0 || (data.certifications?.length ?? 0) > 0) && (
              <View>
                <Text style={styles.h}>{T("awards")}</Text>
                <View style={styles.small}>
                  <Bullets items={[...(data.achievements ?? []), ...(data.certifications ?? [])]} />
                </View>
              </View>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDFTwoColumn;
