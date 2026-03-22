import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };


  return (
    <section
      id="education"
      onMouseMove={handleMouseMove}
      className="relative py-24 px-6 overflow-hidden text-white"
    >
      {/* base dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />

      {/* soft wavy glow following mouse */}
      <div
        className="pointer-events-none absolute -inset-40 opacity-60 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(56,189,248,0.25), transparent 55%)`,
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80 mb-2">
          --- My Academics ---
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold mb-10 bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* MCA */}
          <EduCard
            degree="Master of Computer Applications (MCA)"
            college="Srinivasan College of Arts and Science, Perambalur"
            yearRange="2023 – 2025"
          />

          {/* BCA */}
          <EduCard
            degree="Bachelor of Computer Applications (BCA)"
            college="STET Women’s College, Mannargudi"
            yearRange="2020 – 2023"
          />
        </div>
      </div>
    </section>
  );
}

function EduCard({ degree, college, yearRange }) {
  return (
    <div
      className="group relative p-7 md:p-8 rounded-2xl bg-white/5 border border-white/10 
                 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.55)]
                 hover:border-cyan-300/80 hover:bg-white/10 
                 transition-colors duration-300"
    >
      {/* icon circle with subtle animation */}
      <div
        className="mb-4 inline-flex items-center justify-center h-10 w-10 rounded-full 
                   bg-cyan-500/15 border border-cyan-400/40 text-cyan-300
                   transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.05]"
      >
        <FaGraduationCap className="text-base" />
      </div>

      <h3 className="text-lg md:text-xl font-semibold mb-2 transition-transform duration-300 group-hover:-translate-y-0.5">
        {degree}
      </h3>

      <p className="text-slate-200 text-sm md:text-[15px] mb-2">
        {college}
      </p>

      <p className="text-cyan-300 text-xs md:text-sm font-medium">
        {yearRange}
      </p>

      {/* small bottom accent line with hover width animation */}
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-300 group-hover:w-24" />
    </div>
  );
}
