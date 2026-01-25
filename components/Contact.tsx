"use client";
import { useState } from "react";
import { Mail, Phone, Instagram, Linkedin, Twitter, } from "lucide-react";
import Image from "next/image";


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (err) {
      setStatus("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-[--color-section-dark] text-white py-16 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-12">
        {/* LEFT SIDE — CONTACT INFO */}
        <div className="w-full flex justify-center items-center">
  <div className="w-full md:w-1/2 space-y-8 text-center">
    <h2 className="text-4xl font-bold mb-4 text-[--color-accent]">
      Contact Me
    </h2>

    <p className="text-gray-300 max-w-md mx-auto">
      Have a question or want to collaborate? Feel free to reach out — I’d
      love to connect!
    </p>

    <div className="space-y-5 text-gray-300">
      {/* Email */}
      <div className="flex items-center gap-4 justify-center">
        <Mail className="text-[var(--color-hehe)]" size={20} />
        <span className="text-base">aadrika.gupta02@gmail.com</span>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-4 justify-center">
        <Phone className="text-[var(--color-hehe)]" size={20} />
        <span className="text-base">+91 9005178095</span>
      </div>
    </div>

    {/* Social Links */}
    <div className="flex gap-6 text-xl mt-6 justify-center">
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
</div>
      </div>
    </section>
  );
}
