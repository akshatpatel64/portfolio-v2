"use client";

import { motion } from "framer-motion";

/* Inline SVG icons — no emoji, no icon library dependency */
const ShieldCheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const CloudIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const ClockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const certs = [
  {
    name: "AWS Certified Security – Specialty",
    url: "https://www.credly.com/",
    Icon: ShieldCheckIcon,
  },
  {
    name: "AWS Certified Cloud Practitioner",
    url: "https://www.credly.com/",
    Icon: CloudIcon,
  },
  {
    name: "CompTIA Security+",
    url: "https://www.credly.com/badges/dc3fd9bc-3cac-4946-a2ab-4ff586c98c29/public_url",
    Icon: ShieldCheckIcon,
  },
  {
    name: "ISC2 Certified in Cybersecurity (CC)",
    url: "https://www.credly.com/badges/1342fa92-054d-4f81-a751-c8e4e9905cb0/public_url",
    Icon: ShieldCheckIcon,
  },
  {
    name: "Microsoft Azure AI Engineer Associate",
    url: "#",
    Icon: ClockIcon,
    inProgress: true,
  },
];

const traits = [
  "Security-First AI Design",
  "Least-Privilege Architecture",
  "Technical Documentation",
  "Continuous Learning",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 gradient-text inline-block"
        >
          About
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-5">
              I&apos;m an{" "}
              <span className="text-white font-semibold">AI Engineer</span> with a
              security-first background, building staff-facing agents, governed AI workflows,
              and secure automation systems at Maryland Athletics. Using{" "}
              <span className="text-white font-medium">Microsoft Foundry</span> and{" "}
              <span className="text-white font-medium">Copilot Studio</span>, I translate
              departmental workflows into AI automations that return time to Marketing, HR,
              and Operations — while applying least-privilege design and OWASP/NIST-aligned
              risk thinking throughout.
            </p>
            <p className="text-slate-400 leading-relaxed mb-5">
              Beyond the day-to-day, I built{" "}
              <span className="text-white font-medium">MomentumEngine</span> — a secure
              agentic AI research platform on AWS Bedrock combining a deterministic ranking
              engine with LLM agents — and have hands-on depth in vulnerability management,
              cloud security, and detection engineering.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              MEng Cybersecurity, University of Maryland College Park (GPA 3.66 / 4.0) ·
              First-authored Springer Nature publication at ICTIS 2023.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {traits.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#667eea]/10 border border-[#667eea]/20 text-[#667eea]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
              Certifications
            </h3>
            <div className="flex flex-col gap-2">
              {certs.map((c) => (
                <a
                  key={c.name}
                  href={c.url}
                  target={c.url === "#" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3.5 px-4 py-3.5 rounded-xl border transition-all duration-200 ${
                    c.inProgress
                      ? "border-amber-500/20 bg-amber-500/5 cursor-default"
                      : "border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#667eea]/30 hover:shadow-[0_4px_20px_rgba(102,126,234,0.12)]"
                  }`}
                >
                  {/* Icon */}
                  <span
                    className={`flex-shrink-0 transition-colors duration-200 ${
                      c.inProgress
                        ? "text-amber-400"
                        : "text-slate-500 group-hover:text-[#667eea]"
                    }`}
                  >
                    <c.Icon />
                  </span>

                  {/* Name */}
                  <span
                    className={`text-sm font-medium flex-1 transition-colors duration-200 ${
                      c.inProgress
                        ? "text-amber-300"
                        : "text-slate-300 group-hover:text-white"
                    }`}
                  >
                    {c.name}
                  </span>

                  {/* Badge or arrow */}
                  {c.inProgress ? (
                    <span className="text-[10px] font-bold tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full flex-shrink-0">
                      IN PROGRESS
                    </span>
                  ) : (
                    <span className="text-slate-700 group-hover:text-[#667eea] text-xs transition-colors duration-200 flex-shrink-0">
                      ↗
                    </span>
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
