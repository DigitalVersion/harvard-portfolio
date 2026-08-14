import ResumeApp from "@/components/resume/ResumeApp";
import { resumes } from "@/lib/resume/data";

// Static export requires every dynamic segment to be enumerated at build
// time — one clean URL per known cvType (e.g. /interview-resources),
// alongside the query-param-driven root route kept for backward
// compatibility. "default" is intentionally excluded here since it already
// lives at "/".
export function generateStaticParams() {
  return Object.keys(resumes)
    .filter((cvType) => cvType !== "default")
    .map((cvType) => ({ cvType }));
}

export const dynamicParams = false;

export default async function CvTypePage({ params }: { params: Promise<{ cvType: string }> }) {
  const { cvType } = await params;
  return <ResumeApp initialCvType={cvType} />;
}
