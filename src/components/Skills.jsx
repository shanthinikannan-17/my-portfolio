import React, { useState } from "react";

export default function Skills() {
  const skills = {
    programming: ["Java", "Python", "JavaScript"],
    webMobile: ["React.js", "React Native", "Node.js", "HTML", "CSS"],
    backend: ["REST API Integration", "Authentication", "Regex Data Processing"],
    database: ["MySQL", "SQL"],
    data: ["Excel", "Power BI"],
    tools: ["GitHub", "VS Code", "Eclipse", "Android Emulator", "Pycharm"],
  };

  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <section
      id="skills"
      onMouseMove={handleMouseMove}
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* base light gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />

      {/* soft wave that follows mouse */}
      <div
        className="pointer-events-none absolute -inset-40 opacity-60 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(56,189,248,0.35), transparent 55%)`,
        }}
      />

      <div className="relative max-w-6xl mx-auto text-center text-slate-100">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
          Technologies &amp; Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-7">
          {/* Programming */}
          <SkillCard title="Programming" items={skills.programming} />
          {/* Web & Mobile */}
          <SkillCard title="Web & Mobile" items={skills.webMobile} />
          {/* Backend */}
          <SkillCard title="Backend" items={skills.backend} />
          {/* Database */}
          <SkillCard title="Database" items={skills.database} />
          {/* Data */}
          <SkillCard title="Data & Visualization" items={skills.data} />
          {/* Tools */}
          <SkillCard title="Tools" items={skills.tools} />
        </div>
      </div>
    </section>
  );
}

/**
 * @typedef {Object} SkillCardProps
 * @property {string} title
 * @property {string[]} items
 */

/**
 * @param {SkillCardProps} props
 */
function SkillCard({ title, items }) {
  return (
    <div className="p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_14px_40px_rgba(0,0,0,0.55)] text-left hover:border-cyan-300/80 hover:bg-white/10 transition-colors duration-200">
      <h3 className="text-lg md:text-xl font-semibold mb-4 text-cyan-300">
        {title}
      </h3>
      <ul className="space-y-1.5 text-slate-200 text-sm md:text-[15px]">
        {items.map((s) => (
          <li key={s}>• {s}</li>
        ))}
      </ul>
    </div>
  );
}
