"use client";

import { useParams } from "next/navigation";

export default function ProjectsNotFound() {
  const params = useParams();
  const projectID = params.projectID;

  return (
    <main className="flex flex-col items-center justify-start">
      <h1>Project number {projectID} was not found</h1>
    </main>
  );
}
