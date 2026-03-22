import React, { useState } from "react";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

function Projects() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  const projects = [
    {
      title: "Rupee Wise App",
      img: project2,
      tech: "React Native • JavaScript • Regex • Context API",
      link: "#",
      code: "https://github.com/shanthinikannan-17/Rwise",
    },
    {
      title: "Car Management System",
      img: project3,
      tech: "PHP • MySQL • HTML • CSS",
      link: "#",
      code: "https://github.com/shanthinikannan-17/car-management-system",
    },
  ];

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative py-24 px-6 overflow-hidden text-white"
    >
      {/* base dark gradient like other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />

      {/* soft cyan wave following mouse */}
      <div
        className="pointer-events-none absolute -inset-40 opacity-60 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(56,189,248,0.28), transparent 55%)`,
        }}
      />

      <div className="relative max-w-6xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80 mb-2">
          --- Selected Work ---
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold mb-10 bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 
                         backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.55)]
                         hover:border-cyan-300/80 hover:bg-white/10 transition-colors duration-200 text-left"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-1">
                  {p.title}
                </h3>

                <p className="text-slate-300 text-sm md:text-[15px] mb-4">
                  {p.tech}
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full bg-cyan-500 text-slate-950 
                               text-xs md:text-sm font-medium
                               shadow-md shadow-cyan-500/30
                               hover:bg-cyan-400 hover:-translate-y-0.5
                               transition-transform transition-colors duration-200"
                  >
                    🔗 Live
                  </a>

                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full border border-cyan-300/80 
                               text-xs md:text-sm font-medium text-cyan-200
                               hover:bg-cyan-300 hover:text-slate-950
                               hover:-translate-y-0.5
                               transition-transform transition-colors duration-200"
                  >
                    💻 Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
