import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jorge Filho portfolio",
  description: "Jorge Filho portfolio, powered by Next.js",
};

export default function RootLayout({
  //the component passed on page.tsx is passed as children here, to render the app
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-5 flex flex-col h-dvh justify-between border-2 border-amber-400">
        <header className="flex flex-row justify-between p-5 text-center uppercase border-2 border-emerald-400 ">
          header
          <Link href="/">Back</Link>
        </header>
        <main className="border-2 border-sky-500 grow">{children}</main>
        <footer className="p-5 text-center uppercase border-2 border-pink-500 ">
          footer
        </footer>
      </body>
    </html>
  );
}
