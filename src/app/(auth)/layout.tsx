"use client"; //hooks can only be used in client side components
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";

const AuthNavLinks = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Forgot Password", href: "/forgot-password" },
  { name: "Logout", href: "/logout" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); //usePathname is a hook, therefore it can only be used in client side components
  const [input, setInput] = useState("");
  const value = Math.random();
  console.log(value);
  const isError = value > 0.5;
  if (isError) throw new Error("Not implemented");
  /*
this is very important
if the layout componets thows a error, only a error scren higher in the hiearchy can catch it and display it
having a error screen in the same file as the layout component will not work, and the app will crash
*/

  return (
    <div className="flex flex-col items-center justify-start">
      <h1 className="text-2xl font-bold">Auth Layout</h1>
      <div className="flex flex-row justify-evenly w-full">
        {AuthNavLinks.map((link) => {
          //check if the current path is the same as the link href
          //if so, the link is active, and we can style it accordingly
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={link.name}
              href={link.href}
              //if the link is active, we add a different style
              className={`${
                isActive ? "text-amber-400 font-bold" : "text-amber-100"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type here"
        className="mt-5"
      />
      <h1 className="mt-5">Children goes below</h1>
      {children}
    </div>
  );
}
