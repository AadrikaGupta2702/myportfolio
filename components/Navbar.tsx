"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 border-b border-white/10 text-xl p-2">
      <div className="w-full flex items-center justify-between py-4 px-6 md:px-12">
        {/* Brand */}
        <h1
          onClick={() => scrollTo("hero")}
          className="text-4xl font-bold cursor-pointer"
        >
          Aadrika.
        </h1>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Nav links */}
        <ul
          className={`md:flex gap-8 items-center font-medium ${
            open
              ? "absolute top-14 left-0 bg-black w-full py-4"
              : "hidden md:flex"
          }`}
        >
          {["about", "projects", "contact"].map((section) => (
            <li
              key={section}
              className="cursor-pointer hover:text-[--color-accent] text-gray-300 transition"
              onClick={() => scrollTo(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}

          {/* Download CV Button */}
          <li>
            <a
              href="/images/stock/cv.pdf"
              download
              className="px-4 py-2 bg-white/[0.3] text-black font-bold rounded-md hover:bg-[var(--color-hehe)] hover:text-black transition"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
