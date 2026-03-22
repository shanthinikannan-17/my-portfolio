import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-r from-slate-950 via-black to-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-6 md:py-7 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: name + text */}
        <div className="text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-1">
            --- Portfolio ---
          </p>
          <p className="text-sm text-slate-300">
            © {new Date().getFullYear()} <span className="text-cyan-300">Shanthini Kannan</span>. All rights reserved.
          </p>
        </div>

        {/* Right: social icons in glass pills */}
        <div className="flex items-center gap-3 text-lg">
          <a
            href="https://github.com/shanthinikannan-17"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full 
                       bg-white/5 border border-white/10 
                       text-slate-300 hover:text-slate-950 hover:bg-cyan-500
                       transition-colors transition-transform duration-200 hover:-translate-y-0.5"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shanthini17/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full 
                       bg-white/5 border border-white/10 
                       text-slate-300 hover:text-slate-950 hover:bg-cyan-500
                       transition-colors transition-transform duration-200 hover:-translate-y-0.5"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:shanthinikannan7@gmail.com"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full 
                       bg-white/5 border border-white/10 
                       text-slate-300 hover:text-slate-950 hover:bg-cyan-500
                       transition-colors transition-transform duration-200 hover:-translate-y-0.5"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
