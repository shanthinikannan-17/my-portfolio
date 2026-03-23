import { useState } from "react";
import { FaBook, FaHeadphones, FaPaintBrush } from "react-icons/fa";

const interests = [
  {
    title: "Reading",
    icon: FaBook,
    images: ["/images/books1.jpg", "/images/books2.jpg", "/images/books3.jpg"],
    description:
      "I enjoy Tamil novels and self-help books that improve thinking and creativity.",
  },
  {
  title: "Podcasts",
  icon: FaHeadphones,
  images: ["/images/podcast1.jpg", "/images/podcast2.jpg"],
  description:
    "Listening to podcasts about technology, personal growth and something new about my opinions.",
  link: "https://open.spotify.com/show/24IiVqJ3MPxQDUXICZ91ED?si=p6pXb4w9Toi3uSkgILkjSA"
},
  {
    title: "Art & Painting",
    icon: FaPaintBrush,
    images: ["/images/art1.jpg", "/images/art2.jpg"],
    description:
      "Creative drawing and painting that helps me relax and explore design ideas.",
  },
];

export default function Interests() {
  const [selected, setSelected] = useState(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <section
      id="interests"
      onMouseMove={handleMouseMove}
      className="relative py-24 px-6 overflow-hidden text-white"
    >
      {/* base dark bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />

      {/* soft wavy glow */}
      <div
        className="pointer-events-none absolute -inset-40 opacity-60 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(56,189,248,0.25), transparent 55%)`,
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80 mb-2">
            --- Outside of Code ---
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
            Interests &amp; Hobbies
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {interests.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setSelected(item)}
                className="group relative w-full cursor-pointer outline-none"
              >
                <div
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 
                             backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.55)]
                             flex flex-col items-center text-center
                             transform transition-transform transition-colors
                             duration-300 ease-out
                             group-hover:-translate-y-2 group-hover:rotate-1 group-hover:scale-[1.03]
                             hover:border-cyan-300/80 hover:bg-white/10"
                >
                  <div
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full 
                               bg-cyan-500/15 border border-cyan-400/40 text-cyan-300
                               transition-transform duration-300 group-hover:scale-110"
                  >
                    <Icon className="text-2xl" />
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-300/90 mt-2">
                    Tap to see more.
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative mx-4 max-w-lg w-full rounded-2xl bg-slate-900/90 
                       border border-white/10 backdrop-blur-xl 
                       p-6 md:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.75)]
                       animate-[fadeIn_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-300">
                {selected.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold">
                {selected.title}
              </h3>
            </div>

            <p className="text-sm md:text-[15px] text-slate-200 mb-5">
              {selected.description}
            </p>

            {selected.link && (
  <a
    href={selected.link}
    target="_blank"
    rel="noreferrer"
    className="inline-block mb-4 text-cyan-300 underline hover:text-cyan-400"
  >
    🎧 Listen on Spotify
  </a>
)}

            <div className="grid grid-cols-2 gap-3">
              {selected.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="rounded-lg object-cover h-28 md:h-32 w-full 
                             border border-white/10"
                  alt=""
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mt-6 inline-flex items-center justify-center rounded-full px-5 py-2 
                         text-xs md:text-sm font-medium text-slate-50
                         bg-slate-800/80 border border-slate-600/80
                         hover:bg-slate-700 hover:border-cyan-400
                         transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
