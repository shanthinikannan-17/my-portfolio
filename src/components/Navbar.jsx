import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("hero");

  const sections = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;

      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollY >= top && scrollY < top + height) {
            setActive(sec.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-50">

      {/* Floating Navbar */}
      <div className="relative px-8 py-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl">

        {/* Moving Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-xl opacity-20 animate-pulse"></div>

        <nav className="relative flex gap-6 items-center">

          {/* Logo */}
          <h1
            onClick={() => scrollToSection("hero")}
            className="cursor-pointer text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Shanthini kannan
          </h1>

          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`px-4 py-1 rounded-full text-sm transition duration-300
              
              ${
                active === sec.id
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-md"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {sec.name}
            </button>
          ))}

        </nav>

      </div>

    </div>
  );
}