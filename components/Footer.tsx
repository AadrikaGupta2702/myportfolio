"use client";

import { Linkedin, Instagram, Twitter, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[--color-section-dark] text-gray-300 border-t border-white/10 py-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section - Branding */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-2xl font-bold text-[--color-accent]">
            Aadrika Gupta
          </h2>
          <p className="text-sm text-gray-400">
            Crafting clean, functional, and creative product experiences.
          </p>
        </div>

        {/* Middle Section - Navigation */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {["about", "projects", "contact"].map((section) => (
            <li
              key={section}
              onClick={() => scrollTo(section)}
              className="cursor-pointer hover:text-[--color-accent] transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>

        {/* Right Section - Social Links */}
        <div className="flex gap-6 text-xl justify-center">
          <a
                  href="https://www.instagram.com/aadrika.0212/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[--color-accent] transition"
                >
                  <Instagram size={22} />
                </a>
                <a
                  href="https://x.com/AadrikaG2611"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[--color-accent] transition"
                >
                  <Twitter size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/aadrika-gupta-32a3222b8/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[--color-accent] transition"
                >
                  <Linkedin size={22} />
                </a>
          
                <a
                  href="https://www.behance.net/aadrikagupta1"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[--color-accent] transition"
                >
                  <Image
                    src="/images/logos/behance.png"
                    alt="LinkedIn"
                    width={22}
                    height={22}
                    className="hover:opacity-80 transition"
                  />
                </a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-[90%] mx-auto h-px bg-white/10 my-6"></div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Aadrika Gupta. All rights reserved.
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollTop}
        className="absolute right-8 bottom-8 p-3 rounded-full bg-[--color-accent] text-black hover:bg-[--color-accent-light] transition shadow-lg"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
