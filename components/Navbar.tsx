"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <h1
          onClick={() => scrollTo("hero")}
          className="text-xl font-bold cursor-pointer"
        >
          Yash Dingar
        </h1>

        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <ul
          className={`md:flex gap-8 font-medium ${
            open
              ? "absolute top-14 left-0 bg-black w-full py-4"
              : "hidden md:flex"
          }`}
        >
          {["about", "services", "projects", "contact"].map((section) => (
            <li
              key={section}
              className="cursor-pointer hover:text-sky-400 text-gray-300"
              onClick={() => scrollTo(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
