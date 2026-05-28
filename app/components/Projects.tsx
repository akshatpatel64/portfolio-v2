"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "@/lib/projects";

const filters = ["All", "Professional", "Academic", "Hobby"];
const techTags = new Set(["professional", "academic", "hobby"]);

// 3D tilt handlers
const onTiltMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const cx = (e.clientX - rect.left) / rect.width - 0.5;
  const cy = (e.clientY - rect.top) / rect.height - 0.5;
  el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
  el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  el.style.transition = "transform 0.08s linear";
  el.style.transform = `perspective(800px) rotateX(${-cy * 12}deg) rotateY(${cx * 12}deg) scale(1.02)`;
};

const onTiltLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const el = e.currentTarget;
  el.style.transition = "transform 0.55s cubic-bezier(0.23, 1, 0.32, 1)";
  el.style.transform = "";
};

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) =>
          p.tags.some((t) => t.toLowerCase() === active.toLowerCase())
        );

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 gradient-text inline-block"
        >
          Projects
        </motion.h2>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                active === f
                  ? "text-white shadow-lg shadow-[#667eea]/20"
                  : "glass glass-hover text-slate-400 hover:text-white"
              }`}
              style={
                active === f
                  ? { background: "linear-gradient(135deg, #667eea, #764ba2)" }
                  : undefined
              }
            >
              {f}
              {active !== f && (
                <span className="ml-1.5 text-xs text-slate-600">
                  {f === "All"
                    ? projects.length
                    : projects.filter((p) =>
                        p.tags.some((t) => t.toLowerCase() === f.toLowerCase())
                      ).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid with AnimatePresence for smooth filter transitions */}
        <motion.div layout className="grid md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((p) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, scale: 0.88, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href={`/projects/${p.slug}`}
                  className="tilt-card glass glass-hover rounded-2xl p-6 flex flex-col gap-3 group block h-full"
                  onMouseMove={onTiltMove}
                  onMouseLeave={onTiltLeave}
                >
                  <div className="flex items-start justify-between gap-3 relative z-10">
                    <h3 className="text-white font-semibold leading-snug group-hover:text-[#667eea] transition-colors duration-200 text-[15px]">
                      {p.name}
                    </h3>
                    <span className="text-slate-600 group-hover:text-[#667eea] transition-colors flex-shrink-0 mt-0.5 text-base">
                      ↗
                    </span>
                  </div>

                  <div className="flex gap-2 text-xs text-slate-500 relative z-10">
                    <span className="font-medium text-slate-400">{p.role}</span>
                    <span>·</span>
                    <span>{p.period}</span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 relative z-10">
                    {p.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-1 relative z-10">
                    {p.tags
                      .filter((t) => !techTags.has(t))
                      .map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[11px] bg-[#667eea]/10 border border-[#667eea]/20 text-[#667eea]"
                        >
                          {t}
                        </span>
                      ))}
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
