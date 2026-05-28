"use client";

import { motion } from "framer-motion";

const certs = [
  {
    name: "ISC2 Certified in Cybersecurity (CC)",
    url: "https://www.credly.com/badges/1342fa92-054d-4f81-a751-c8e4e9905cb0/public_url",
  },
  {
    name: "CompTIA Security+",
    url: "https://www.credly.com/badges/dc3fd9bc-3cac-4946-a2ab-4ff586c98c29/public_url",
  },
  {
    name: "CompTIA Network+",
    url: "https://www.credly.com/badges/dc3fd9bc-3cac-4946-a2ab-4ff586c98c29/public_url",
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
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I&apos;m a cybersecurity engineer with a passion for building secure, reliable systems
              that make a real impact. My work blends network defense, cloud security, and automation
              — from creating <span className="text-white font-medium">SnortEduGuard</span>, an
              AI-powered academic intrusion detection system, to designing{" "}
              <span className="text-white font-medium">SecureScalr</span>, an AWS-based e-commerce
              platform built on best-practice architecture.
            </p>
            <p className="text-slate-400 leading-relaxed">
              At Maryland Athletics, I manage vulnerability remediation, strengthen compliance, and
              support day-to-day IT needs — all while exploring new ways to integrate cloud-native
              observability and smarter detection techniques. I hold a Master&apos;s in Engineering
              in Cybersecurity from the University of Maryland, College Park (GPA 3.66/4.0).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <h3 className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-4">
              Certifications
            </h3>
            <div className="flex flex-col gap-3">
              {certs.map((c) => (
                <a
                  key={c.name}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-hover rounded-xl px-5 py-4 text-slate-300 text-sm font-medium hover:text-white transition-all duration-200 flex items-center gap-3 group"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex-shrink-0" />
                  {c.name}
                  <span className="ml-auto text-slate-600 group-hover:text-[#667eea] transition-colors text-xs">↗</span>
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Collaborative Mindset", "Work Ethic", "Leadership", "Continuous Learning"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#667eea]/10 border border-[#667eea]/20 text-[#667eea]"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
