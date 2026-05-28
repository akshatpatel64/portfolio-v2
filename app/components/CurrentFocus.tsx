"use client";

import { motion } from "framer-motion";

const bullets = [
  {
    text: "Building and deploying staff-facing AI agents and governed automation workflows using Microsoft Foundry and Copilot Studio at Maryland Athletics.",
    link: null,
  },
  {
    text: "Leading vulnerability management across 600+ endpoints using Rapid7 InsightVM, applying NIST AI RMF and OWASP LLM Top 10 thinking to AI-risk reviews.",
    link: null,
  },
  {
    text: null,
    jsx: (
      <>
        Developing{" "}
        <a
          href="https://umd.box.com/s/qngivg0ntqss16apukcfxfe9f82gosya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#667eea] hover:underline italic font-medium"
        >
          MomentumEngine
        </a>{" "}
        — a secure agentic AI research platform combining an 8-factor deterministic ranking engine
        with LLM agents on AWS Bedrock.
      </>
    ),
  },
  {
    text: "Pursuing the Microsoft Azure AI Engineer Associate certification.",
    link: null,
  },
  {
    text: null,
    jsx: (
      <>
        Writing at the intersection of AI engineering and cybersecurity on{" "}
        <a
          href="https://medium.com/@patelaksht24"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#667eea] hover:underline"
        >
          Medium
        </a>
        .
      </>
    ),
  },
  {
    text: null,
    jsx: (
      <>
        Always open to collaborating — feel free to message me on{" "}
        <a
          href="https://www.linkedin.com/in/akshat-patel64"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#667eea] hover:underline"
        >
          LinkedIn
        </a>{" "}
        or drop an{" "}
        <a
          href="mailto:patelaksht24@gmail.com"
          className="text-[#667eea] hover:underline"
        >
          email
        </a>{" "}
        if you&apos;d like to work on something together.
      </>
    ),
  },
];

export default function CurrentFocus() {
  return (
    <section id="focus" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 gradient-text inline-block"
        >
          Current Focus
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4">
          {bullets.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-xl p-5 flex gap-4 items-start"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mt-0.5">
                {i + 1}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {b.jsx ?? b.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
