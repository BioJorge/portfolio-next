"use client"; //to be able to recover from an error,
//we need to use the client directive, in both page and error components
import Link from "next/link";
export default function ProjectsPage() {
  const value = Math.random();
  console.log(value);
  const isError = value > 0.5;
  if (isError) throw new Error("Not implemented");
  return (
    <main className="flex flex-col items-center justify-start">
      <h1>Projects</h1>
      <Link href="projects/1">1</Link>
      <Link href="projects/2">2</Link>
      <Link href="projects/3">3</Link>
    </main>
  );
}
