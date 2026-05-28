"use client";

import { motion } from "framer-motion";

const posts = [
  {
    title: "MCP vs Agentic AI: The Difference Almost Everyone Gets Wrong",
    date: "March 16, 2026",
    description:
      "Calling MCP 'basically agentic AI' is like calling a power strip a project manager. A clear breakdown of what each actually does and why the distinction matters for AI engineers.",
    url: "https://medium.com/@patelaksht24/mcp-vs-agentic-ai-the-difference-almost-everyone-gets-wrong-f9b9fb3616a1",
    tags: ["AI", "MCP", "Agentic AI"],
  },
  {
    title: "How to Do Threat Modelling with STRIDE (Step by Step on a Simple Web App)",
    date: "December 5, 2025",
    description:
      "A step-by-step walkthrough of threat modelling using the STRIDE framework applied to a simple web application with browser storage, cloud backend, and OAuth.",
    url: "https://medium.com/@patelaksht24/how-to-do-threat-modelling-with-stride-step-by-step-on-a-simple-web-app-3f22e0299c51",
    tags: ["AppSec", "STRIDE", "Threat Modelling"],
  },
  {
    title: "Credentials with 2FA: How It Works and How Attackers Bypass It",
    date: "September 5, 2024",
    description:
      "Explore the techniques used by attackers to bypass Two-Factor Authentication (2FA), including a breakdown of ReelPhish and other sophisticated tools.",
    url: "https://medium.com/@patelaksht24/credentials-with-2fa-how-it-works-and-how-attackers-bypass-it-1ff4a0133fb2",
    tags: ["2FA", "Phishing", "Authentication"],
  },
  {
    title: "Cisco Duo Security Breach: Third-Party Vendor Compromised",
    date: "April 2, 2024",
    description:
      "A deep dive into the Cisco Duo security breach where a third-party telephony provider was compromised, exposing MFA SMS and VOIP data.",
    url: "https://medium.com/@patelaksht24/cisco-duo-security-breach-third-party-vendor-compromised-exposing-mfa-sms-and-voip-data-c707026cc256",
    tags: ["Breach Analysis", "MFA", "Incident Response"],
  },
  {
    title: "From Zero to Security+: My Journey, Struggles, and Success in Just One Month",
    date: "July 24, 2024",
    description:
      "My experience preparing for the CompTIA Security+ exam, overcoming challenges, and the strategies that led to my success in just one month of focused preparation.",
    url: "https://medium.com/@patelaksht24/from-zero-to-security-my-journey-struggles-and-success-in-just-one-month-8348fa4bd32a",
    tags: ["Certification", "CompTIA Security+", "Career"],
  },
];

export default function Posts() {
  return (
    <section id="posts" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold gradient-text inline-block"
          >
            Writing
          </motion.h2>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="https://medium.com/@patelaksht24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#667eea] hover:underline flex items-center gap-1"
          >
            All posts ↗
          </motion.a>
        </div>

        <div className="flex flex-col gap-4">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass glass-hover rounded-2xl p-6 flex flex-col md:flex-row gap-4 md:items-start group cursor-pointer"
            >
              <div className="flex-1">
                <h3 className="text-white font-semibold leading-snug mb-2 group-hover:text-[#667eea] transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] bg-[#667eea]/10 border border-[#667eea]/20 text-[#667eea]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-1 flex-shrink-0">
                <span className="text-xs text-slate-500">{post.date}</span>
                <span className="text-slate-600 group-hover:text-[#667eea] transition-colors text-lg">↗</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
