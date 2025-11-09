"use client";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-center px-6">
      <div className="z-10 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Hey, I'm{" "}
          <span className="text-sky-500 hover:text-sky-400 transition">
            Yash Dingar
          </span>
        </h1>

        <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
          Frontend Developer · Student · Passionate about creating immersive
          digital experiences with{" "}
          <span className="text-sky-400 font-medium">React</span>,{" "}
          <span className="text-sky-400 font-medium">Next.js</span>, and modern
          web technologies.
        </p>

        <a
          href="#projects"
          className="inline-block px-6 py-3 mt-2 text-sm sm:text-base lg:text-lg bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg"
        >
          View My Work
        </a>
      </div>

      {/* Optional background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
    </section>
  );
}
