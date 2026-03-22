import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("service_1n7zh7b", "template_stmanisha", form, "PfwS2vBNR974u20wx")
      .then(() => {
        setStatus({ message: "Message sent successfully!", type: "success" });
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        setStatus({ message: "Failed to send message.", type: "error" });
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      onMouseMove={handleMouseMove}
      className="relative py-24 px-6 overflow-hidden text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-slate-900" />

      <div
        className="pointer-events-none absolute -inset-40 opacity-60 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(56,189,248,0.22), transparent 55%)`,
        }}
      />

      <div className="relative max-w-xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80 mb-2">
            --- Contact ---
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="mt-3 text-xs md:text-sm text-slate-300">
            I’m open to roles, collaborations, and new ideas. Drop a message
            and I’ll reply as soon as I can.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-2xl bg-white/5 border border-white/10 
                     backdrop-blur-xl p-6 md:p-7 shadow-[0_18px_60px_rgba(0,0,0,0.75)]"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-3.5 rounded-xl bg-black/30 border border-gray-700/80 
                       focus:border-cyan-400/80 outline-none text-sm md:text-[15px]
                       transition-colors"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-3.5 rounded-xl bg-black/30 border border-gray-700/80 
                       focus:border-cyan-400/80 outline-none text-sm md:text-[15px]
                       transition-colors"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            required
            className="p-3.5 rounded-xl bg-black/30 border border-gray-700/80 
                       focus:border-cyan-400/80 outline-none resize-none text-sm md:text-[15px]
                       transition-colors"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-2 py-3 rounded-full font-semibold text-sm md:text-base
                       bg-gradient-to-r from-cyan-500 to-purple-500 
                       hover:from-cyan-400 hover:to-purple-400
                       disabled:opacity-60 disabled:cursor-not-allowed
                       shadow-lg shadow-cyan-500/30
                       hover:-translate-y-0.5 transition-transform transition-colors duration-200"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status.message && (
            <p
              className={`mt-1 text-xs md:text-sm ${
                status.type === "success" ? "text-emerald-300" : "text-rose-300"
              }`}
            >
              {status.message}
            </p>
          )}

          <div className="mt-4 flex items-center justify-center gap-4 text-lg">
            <a
              href="https://github.com/shanthinikannan-17"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full 
                         bg-white/5 border border-white/10 
                         hover:bg-cyan-500 hover:text-slate-950
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
                         hover:bg-cyan-500 hover:text-slate-950
                         transition-colors transition-transform duration-200 hover:-translate-y-0.5"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:shanthinikannan7@gmail.com"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full 
                         bg-white/5 border border-white/10 
                         hover:bg-cyan-500 hover:text-slate-950
                         transition-colors transition-transform duration-200 hover:-translate-y-0.5"
            >
              <FaEnvelope />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
