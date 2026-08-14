"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ResumeApp from "@/components/resume/ResumeApp";

/** Root route: kept query-param driven (`?cvType=...`) for backward
 * compatibility with any existing links. New job-specific links should use
 * the path-based `/[cvType]` route instead (see app/[cvType]/page.tsx). */
function RootResume() {
  const searchParams = useSearchParams();
  const cvTypeParam = searchParams.get("cvType")?.toLowerCase();
  return <ResumeApp initialCvType={cvTypeParam ?? undefined} />;
}

export default function ResumePage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center bg-gray-900">
          <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <RootResume />
    </Suspense>
  );
}
