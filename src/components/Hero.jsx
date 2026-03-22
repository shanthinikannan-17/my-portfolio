import { useState } from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";

export default function Hero() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center justify-center text-center 
                 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
                 text-slate-100 relative overflow-hidden"
    >
      {/* subtle gradient blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-32 -left-40 h-72 w-72 rounded-full bg-pink-500 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500 blur-3xl" />
      </div>

      {/* wavy mouse-follow glow */}
      <div
        className="pointer-events-none absolute -inset-40 opacity-70 transition-all duration-300"
        style={{
          background: `
            radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(236,72,153,0.30), transparent 55%),
            radial-gradient(circle at ${100 - pos.x}% ${100 - pos.y}%, rgba(79,70,229,0.22), transparent 55%)
          `,
        }}
      />

      {/* glass card */}
      <div
        className="relative max-w-3xl px-6 py-10 md:px-10 md:py-14 
                   bg-white/5 border border-white/10 rounded-3xl
                   backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.55)]
                   flex flex-col items-center"
      >
        <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-slate-300 mb-4">
          {/* optional small subtitle, can fill later */}
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 leading-tight">
          Hi, I'm <span className="text-pink-400">Shanthini Kannan</span>
        </h1>

        <h2 className="text-lg md:text-2xl text-slate-200 mb-6 flex items-center justify-center gap-2">
          <span className="text-slate-400">I am a</span>
          <span className="font-semibold">
            <Typewriter
              words={[
                "Fullstack Developer",
                "React Native Developer",
                "Frontend Enthusiast",
                "Builder of Elegant Apps",
              ]}
              loop
              cursor={false}
            />
          </span>
          <Cursor cursorColor="#fb7185" />
        </h2>

        <p className="text-sm md:text-base text-slate-300 mb-8 max-w-xl">
          I craft performant web and mobile experiences with clean code,
          modern UI patterns, and a strong focus on usability and detail.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a
            href="#projects"
            className="px-7 py-3 rounded-full bg-pink-500 text-slate-50 text-sm md:text-base 
                       font-medium shadow-lg shadow-pink-500/40
                       hover:bg-pink-400 hover:-translate-y-0.5 hover:shadow-pink-400/60
                       transition-transform transition-shadow duration-200"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-7 py-3 rounded-full border border-slate-500/70 text-slate-100 
                       text-sm md:text-base font-medium
                       hover:border-pink-400 hover:text-pink-300 hover:bg-white/5
                       transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* small bottom accent line */}
        <div className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
      </div>
    </section>
  );
}
