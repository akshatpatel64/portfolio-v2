"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const socials = [
  { icon: LinkedInIcon, href: "https://linkedin.com/in/akshat-patel64",  label: "LinkedIn" },
  { icon: GitHubIcon,   href: "https://github.com/akshatpatel64",         label: "GitHub" },
  { icon: MediumIcon,   href: "https://medium.com/@patelaksht24",         label: "Medium" },
  { icon: Mail,         href: "mailto:patelaksht24@gmail.com",            label: "Email" },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
});

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Animated dot grid */}
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />

      {/* Animated ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 60, -30, 50, 0], y: [0, -40, 70, -25, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
          className="absolute top-1/4 left-[15%] w-[500px] h-[500px] bg-[#667eea]/8 rounded-full blur-[90px]"
        />
        <motion.div
          animate={{ x: [0, -70, 40, -50, 0], y: [0, 50, -40, 70, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
          className="absolute bottom-1/4 right-[10%] w-[420px] h-[420px] bg-[#764ba2]/8 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ x: [0, 30, -60, 20, 0], y: [0, 60, 20, -50, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#667eea]/5 rounded-full blur-[60px]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full pt-24 pb-16 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          {/* Text side */}
          <div className="flex-1 text-center md:text-left">
            <motion.p
              {...fadeUp(0.1)}
              className="text-sm font-medium text-[#667eea] tracking-widest uppercase mb-4"
            >
              AI Engineer · Secure Agentic AI &amp; Automation · Maryland Athletics
            </motion.p>

            <motion.h1
              {...fadeUp(0.22)}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-4 pb-1"
            >
              Akshat{" "}
              <span className="gradient-text">Patel</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.34)}
              className="text-xl md:text-2xl text-slate-400 font-light mb-6 max-w-xl"
            >
              Building secure AI systems at the intersection of{" "}
              <span className="text-slate-200 font-medium">agentic AI</span>{" "}
              and{" "}
              <span className="text-slate-200 font-medium">cybersecurity</span>.
            </motion.p>

            <motion.p
              {...fadeUp(0.44)}
              className="text-slate-500 text-base mb-8 max-w-lg leading-relaxed"
            >
              Microsoft Foundry & Copilot Studio · Vulnerability management 600+ endpoints ·
              AWS Certified Security – Specialty · MEng Cybersecurity, UMD
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.54)}
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-10"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-full text-white font-medium text-sm hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg shadow-[#667eea]/25"
                style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }}
              >
                View Projects
              </a>
              <a
                href="https://umd.box.com/s/qngivg0ntqss16apukcfxfe9f82gosya"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full glass glass-hover text-sm font-medium text-slate-300 transition-all duration-200 active:scale-95"
              >
                MomentumEngine ↗
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              {...fadeUp(0.64)}
              className="flex gap-3 justify-center md:justify-start"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full glass glass-hover text-slate-400 hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="flex-shrink-0"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              {/* Rotating gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-3px] rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #667eea, #764ba2, #667eea33, #667eea)",
                }}
              />
              <div className="absolute inset-0 rounded-full overflow-hidden bg-[#0d0d14]">
                <Image
                  src="/akshat-profile.jpg"
                  alt="Akshat Patel"
                  fill
                  sizes="(max-width: 768px) 224px, 288px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 blur-2xl -z-10 scale-125" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-slate-600 tracking-[0.25em] uppercase">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#667eea]/40 to-transparent bounce-slow" />
      </motion.div>
    </section>
  );
}
