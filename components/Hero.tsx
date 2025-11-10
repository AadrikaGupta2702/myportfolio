"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] md:h-screen flex items-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/stock/hero.png"
        alt="Yash Dingar"
        fill
        priority
        className="object-cover object-[65%_center] md:object-[60%_center] lg:object-[70%_center]"
      />

      {/* Text overlay */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <p className="text-sky-400 text-lg md:text-xl font-medium mb-4">
            Full Stack Developer
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-sky-400">Yash Dingar</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
          Frontend Developer · Student · Passionate about creating immersive
          digital experiences with{" "}
          <span className="text-sky-400 font-medium">React</span>,{" "}
          <span className="text-sky-400 font-medium">Next.js</span>, and modern
          web technologies.
        </p>
        </div>
      </div>

    </section>
  );
}
