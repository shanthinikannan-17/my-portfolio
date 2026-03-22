import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";

export default function About() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      className="relative py-24 px-6 overflow-hidden text-white"
    >
      {/* Base dark background */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Existing background glows */}
      <div className="absolute w-80 h-80 bg-purple-500/25 blur-[120px] rounded-full top-10 left-10" />
      <div className="absolute w-80 h-80 bg-cyan-500/25 blur-[120px] rounded-full bottom-10 right-10" />

      {/* Soft wavy mouse-follow highlight */}
      <div
        className="pointer-events-none absolute -inset-40 opacity-60 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(56,189,248,0.28), transparent 55%)`,
        }}
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80 mb-2">
            --- Who I Am ---
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-gray-300/90 leading-relaxed mb-4 text-sm md:text-base">
            I'm a Software Developer passionate about building modern mobile and web
            applications. I recently completed my MCA and gained hands-on experience
            in React Native, JavaScript, Node.js, and MySQL through internships and
            academic projects.
          </p>

          <p className="text-gray-300/90 leading-relaxed mb-6 text-sm md:text-base">
            I enjoy working on full-stack systems, API integrations, and data
            processing logic. I’m especially interested in building applications that
            solve real-world problems. My goal is to grow as a developer while
            contributing to impactful software projects.
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["React Native", "JavaScript", "Node.js", "MySQL", "REST APIs"].map(
              (item) => (
                <span
                  key={item}
                  className="text-xs md:text-[13px] rounded-full px-3 py-1 
                             bg-slate-900/60 border border-slate-700/70 
                             text-cyan-100/90 shadow-sm"
                >
                  {item}
                </span>
              )
            )}
          </div>

          {/* Resume Button */}
          <a
            href="public/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full 
                       bg-gradient-to-r from-cyan-500 to-purple-500 
                       text-sm md:text-base font-medium
                       shadow-lg shadow-cyan-500/30
                       hover:shadow-purple-500/40 hover:-translate-y-0.5
                       transition-transform transition-shadow duration-200"
          >
            <FaDownload className="text-sm md:text-base" />
            <span>View Resume</span>
          </a>
        </div>

        {/* Right Card */}
        <div
          className="bg-white/5 backdrop-blur-xl border border-white/10 
                     rounded-2xl p-7 md:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.55)]"
        >
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-cyan-300">
            Quick Highlights
          </h3>

          <ul className="space-y-3 text-gray-200 text-sm md:text-base">
            <li>✔ React Native & fullstack development</li>
            <li>✔ API integration & data processing</li>
            <li>✔ Strong problem-solving mindset</li>
            <li>✔ Experience with real-world projects</li>
          </ul>

          <div className="mt-6 h-px w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <p className="mt-4 text-xs md:text-sm text-gray-400">
            Open to roles in frontend, mobile, and fullstack development.
          </p>
        </div>
      </div>
    </section>
  );
}
