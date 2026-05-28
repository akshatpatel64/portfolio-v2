"use client";

import { motion } from "framer-motion";

const certs = [
  {
    name: "AWS Certified Security – Specialty",
    url: "https://www.credly.com/",
    badge: "🔐",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    url: "https://www.credly.com/",
    badge: "☁️",
  },
  {
    name: "CompTIA Security+",
    url: "https://www.credly.com/badges/dc3fd9bc-3cac-4946-a2ab-4ff586c98c29/public_url",
    badge: "🛡️",
  },
  {
    name: "ISC2 Certified in Cybersecurity (CC)",
    url: "https://www.credly.com/badges/1342fa92-054d-4f81-a751-c8e4e9905cb0/public_url",
    badge: "✅",
  },
  {
    name: "Microsoft Azure AI Engineer Associate",
    url: "#",
    badge: "⏳",
    inProgress: true,
  },
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
              departmental workflows into AI automations that return time to Marketing,
              HR, and Operations — while applying least-privilege design and OWASP/NIST-aligned
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
              MEng Cybersecurity, University of Maryland College Park (GPA 3.66/4.0) ·
              First-authored Springer Nature publication at ICTIS 2023.
            </p>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <h3 className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-4">
              Certifications
            </h3>
            <div className="flex flex-col gap-2.5">
              {certs.map((c) => (
                <a
                  key={c.name}
                  href={c.url}
                  target={c.url === "#" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="glass glass-hover rounded-xl px-4 py-3.5 text-slate-300 text-sm font-medium hover:text-white transition-all duration-200 flex items-center gap-3 group"
                >
                  <span className="text-base flex-shrink-0">{c.badge}</span>
                  <span className="flex-1">{c.name}</span>
                  {c.inProgress ? (
                    <span className="text-[10px] font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full flex-shrink-0">
                      IN PROGRESS
                    </span>
                  ) : (
                    <span className="ml-auto text-slate-600 group-hover:text-[#667eea] transition-colors text-xs flex-shrink-0">
                      ↗
                    </span>
                  )}
                </a>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Security-First AI Design",
                "Least-Privilege Architecture",
                "Technical Documentation",
                "Continuous Learning",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#667eea]/10 border border-[#667eea]/20 text-[#667eea]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
