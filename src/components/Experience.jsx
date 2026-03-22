import React, { useState } from "react";

export default function Experience() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <section
      id="experience"
      onMouseMove={handleMouseMove}
      className="relative py-24 px-6 overflow-hidden text-white"
    >
      {/* plain dark base like skills */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />

      {/* single soft wave that follows mouse */}
      <div
        className="pointer-events-none absolute -inset-40 opacity-60 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(56,189,248,0.28), transparent 55%)`,
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Internship */}
          <div
            className="p-7 md:p-8 rounded-2xl bg-white/5 border border-white/10 
                       backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.55)]
                       hover:border-cyan-300/80 hover:bg-white/10 
                       transition-colors duration-200"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-1">
              Mobile Application Development Intern
            </h3>

            <p className="text-cyan-300 text-xs md:text-sm mb-3">
              Skandax Nexus Pvt Ltd — Chennai · Oct 2025 – Jan 2026
            </p>

            <p className="text-slate-200 text-sm md:text-[15px] leading-relaxed">
              Developed and maintained mobile applications using React Native,
              JavaScript, and RESTful APIs. Integrated frontend components with
              backend services and implemented authentication and data processing
              workflows.
            </p>
          </div>

          {/* Data Management */}
          <div
            className="p-7 md:p-8 rounded-2xl bg-white/5 border border-white/10 
                       backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.55)]
                       hover:border-cyan-300/80 hover:bg-white/10 
                       transition-colors duration-200"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-1">
              Junior Assistant — Data Management System
            </h3>

            <p className="text-cyan-300 text-xs md:text-sm mb-3">
              Dhanalakshmi Srinivasan Educational and Charitable Trust
              <br />
              Mar 2025 – Jul 2025
            </p>

            <p className="text-slate-200 text-sm md:text-[15px] leading-relaxed">
              Managed and maintained student databases using Excel while ensuring
              data accuracy and regular updates. Handled admission data entry,
              verification, and updates on institutional portals and official
              websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
