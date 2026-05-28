"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Tools & Technologies",
    icon: "⚙️",
    accent: "from-blue-500/10 to-indigo-500/5",
    items: [
      "AWS CLI", "Microsoft Azure", "Google Cloud Platform",
      "Wireshark", "Snort", "Security Onion", "Zeek",
      "Rapid7 InsightVM", "Nessus", "Metasploit Framework",
      "sqlmap", "OWASP ZAP", "Burp Suite", "Nmap/Zenmap",
      "JAMF Pro", "Microsoft Defender ATP", "Splunk",
      "Autopsy", "FTK Imager", "Volatility", "ExifTool",
      "BloodHound", "Hashcat", "PowerShell Empire",
    ],
  },
  {
    category: "Security Frameworks",
    icon: "🛡️",
    accent: "from-purple-500/10 to-violet-500/5",
    items: [
      "NIST (CSF, SP 800-53)", "MITRE ATT&CK", "OWASP Top 10",
      "HIPAA", "GDPR", "ISO/IEC 27001", "ITIL",
      "FAIR", "OCTAVE", "Cyber Kill Chain", "Unified Kill Chain",
    ],
  },
  {
    category: "Programming Languages",
    icon: "💻",
    accent: "from-emerald-500/10 to-teal-500/5",
    items: ["Python", "C", "C++", "Java", "SQL", "Perl", "Shell Scripting"],
  },
  {
    category: "Soft Skills",
    icon: "🧠",
    accent: "from-amber-500/10 to-orange-500/5",
    items: [
      "Critical Thinking & Problem Solving",
      "Communication",
      "Team Collaboration",
      "Adaptability & Learning",
      "Leadership",
      "Attention to Detail",
      "Technical Documentation",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 gradient-text inline-block"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: gi * 0.08 }}
              className={`glass rounded-2xl p-6 bg-gradient-to-br ${group.accent}`}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl" role="img" aria-label={group.category}>
                    {group.icon}
                  </span>
                  <h3 className="text-sm font-semibold text-[#667eea] uppercase tracking-widest">
                    {group.category}
                  </h3>
                </div>
                <span className="text-xs text-slate-600 bg-white/[0.05] border border-white/[0.07] px-2.5 py-0.5 rounded-full tabular-nums">
                  {group.items.length}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.05] border border-white/[0.07] text-slate-300 hover:border-[#667eea]/40 hover:text-white hover:bg-[#667eea]/10 transition-all duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
