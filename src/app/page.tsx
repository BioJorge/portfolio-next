"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1>Hello world</h1>
      {/* Links is the next.js best practice to navigate between opages*/}
      <Link href="/register">register</Link>
      <Link href="/login">login</Link>
      <Link href="/logout">logout</Link>
      <Link href="/forgot-password">forgot-password</Link>
      <Link href="/contacts">Contactos</Link>
      <Link href="/about">sobre</Link>
      <Link href="/blogs">blogs</Link>
      <Link href="/projects">Projetos</Link>
      <Link href="/catchAllSegments">catch-all-segments</Link>
      <Link href="/dashboard">Dashboard</Link>
    </main>
  );
}
