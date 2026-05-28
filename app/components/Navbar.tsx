"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Focus",      href: "#focus" },
  { label: "Posts",      href: "#posts" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight active section as user scrolls
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-25% 0px -65% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d14]/85 backdrop-blur-xl border-b border-white/[0.07] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" aria-label="Home">
          <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
            <defs>
              <linearGradient id="nav-g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#667eea"/>
                <stop offset="100%" stopColor="#764ba2"/>
              </linearGradient>
            </defs>
            {/* A: left leg */}
            <line x1="2" y1="28" x2="15.5" y2="4" stroke="url(#nav-g)" strokeWidth="2.6" strokeLinecap="round"/>
            {/* Shared stem */}
            <line x1="15.5" y1="4" x2="15.5" y2="28" stroke="url(#nav-g)" strokeWidth="2.6" strokeLinecap="round"/>
            {/* A: crossbar */}
            <line x1="7.5" y1="20" x2="15.5" y2="20" stroke="url(#nav-g)" strokeWidth="2.6" strokeLinecap="round"/>
            {/* K: upper arm */}
            <line x1="15.5" y1="15" x2="29.5" y2="4" stroke="url(#nav-g)" strokeWidth="2.6" strokeLinecap="round"/>
            {/* K: lower arm */}
            <line x1="15.5" y1="15" x2="29.5" y2="27" stroke="url(#nav-g)" strokeWidth="2.6" strokeLinecap="round"/>
          </svg>
        </a>

        {/* Desktop links with animated active underline */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href} className="relative py-1">
                <a
                  href={l.href}
                  className={`text-sm transition-colors duration-200 ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(90deg, #667eea, #764ba2)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <a
          href="https://umd.box.com/s/tzconsgykzqemq2webwd7glzqt6iq7ll"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-[#667eea]/40 text-[#667eea] hover:bg-[#667eea]/10 transition-all duration-200"
        >
          Resume
        </a>

        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-[#0d0d14]/95 backdrop-blur-xl border-b border-white/[0.07]"
          >
            <ul className="flex flex-col gap-4 px-6 pt-4 pb-6">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`text-sm ${
                      active === l.href.slice(1)
                        ? "text-white font-medium"
                        : "text-slate-400"
                    } hover:text-white transition-colors`}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-white/[0.06]">
                <a
                  href="https://umd.box.com/s/tzconsgykzqemq2webwd7glzqt6iq7ll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#667eea] text-sm font-medium"
                >
                  Resume ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
