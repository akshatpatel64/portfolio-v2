"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Maryland Athletics",
    url: "https://umterps.com/",
    location: "College Park, MD",
    positions: [
      {
        title: "Sr. IT Security & AI Automation Specialist",
        period: "July 2025 – Present",
        bullets: [
          "Built and deployed staff-facing Microsoft Foundry / Copilot Studio agents in Microsoft Teams, translating departmental workflows into governed AI automations with reusable instructions, controlled data handling, and user-focused interaction design.",
          "Delivered AI-enabled workflow automation for Athletics staff, returning time to Marketing, Development, HR, Business, and Leadership by reducing repetitive manual work across link generation, campaign review, reporting, and operational information retrieval.",
          "Built a tracking-link generator agent for Marketing that standardized UTM campaign URL naming and reduced link creation time from 5–8 minutes to 1–2 minutes per request.",
          "Designing an AI-assisted Email Performance & Revenue Tracking workflow that ingests 2 weekly Excel exports, validates campaign data, evaluates CTR/unsubscribe/bounce-rate thresholds, and produces AP-style insights for faster campaign review.",
          "Run AI office hours and discovery sessions across 5 departments, documenting 8+ AI use cases and converting ambiguous staff pain points into secure automation requirements and agent designs.",
          "Lead weekly vulnerability management and remediation reviews using Rapid7 InsightVM, partnering with DIT to prioritize and track critical findings across 600+ endpoints, servers, and SaaS-connected systems.",
          "Apply security-first agent design across all AI workflows: least-privilege access, approved data sources, user permission boundaries, prompt/output review, and risk-aware deployment planning.",
        ],
      },
      {
        title: "Information Security & IT Support Intern",
        period: "June 2024 – August 2024",
        bullets: [
          "Supported security alert review and case documentation by analyzing endpoint, authentication, and network activity for escalation to central IT.",
          "Provided Tier 1/Tier 2 IT support in a fast-paced higher-ed environment, resolving most Tier 1 tickets within 1 hour across Intune and JAMF-managed systems.",
          "Coordinated a data inventory audit across 500+ assets and 50+ staff and vendors, improving visibility into system ownership, data handling, and retention.",
          "Documented incidents using NIST and MITRE ATT&CK terminology and delivered 4 security awareness newsletters on social engineering and typosquatting.",
        ],
      },
      {
        title: "Terp Host",
        period: "January 2024 – June 2024",
        bullets: [
          "Assisted in marketing strategy and fan experience at UMD Athletics events across multiple sports.",
        ],
      },
    ],
  },
  {
    company: "University of Maryland – College of Information",
    url: "https://ischool.umd.edu",
    location: "College Park, MD",
    positions: [
      {
        title: "Adjunct Professor",
        period: "September 2025 – December 2025",
        bullets: [
          "Lecturer for INST346 Infrastructure, Architecture & Technologies and INST464 Decision Making for Cybersecurity.",
          "Responsible for 200+ students, delivering lectures, labs, and case studies integrating real-world security tools and scenarios.",
          "Designed project-based assessments to strengthen applied technical skills and critical thinking.",
        ],
      },
      {
        title: "Graduate Teaching Assistant",
        period: "August 2024 – May 2025",
        bullets: [
          "Assisted Dean Dr. Keith Marzullo in delivering instruction for INST 346 (Technologies, Infrastructure and Architecture).",
          "Led lab sessions on network security and distributed systems; guided students on complex technical concepts in network architecture and data management.",
        ],
      },
    ],
  },
  {
    company: "Medium",
    url: "https://medium.com/@patelaksht24",
    location: "Remote",
    positions: [
      {
        title: "Independent Writer",
        period: "May 2023 – Present",
        bullets: [
          "Write on AI engineering, cybersecurity, and threat modelling — covering topics from STRIDE threat models and MCP vs. Agentic AI distinctions to 2FA bypass techniques and incident breakdowns.",
          "Provide actionable recommendations for preemptive and responsive cyber defense strategies.",
        ],
      },
    ],
  },
  {
    company: "Dotsquares",
    url: "https://www.dotsquares.com/",
    location: "Remote (University Placement)",
    positions: [
      {
        title: "Cybersecurity Co-op — Detection Engineering & Secure Application Review",
        period: "August 2022 – May 2023",
        bullets: [
          "Engineered and deployed a Snort-based IDS/IPS on a live university network segment, writing and tuning custom rules across 7+ attack categories including DoS/DDoS, backdoor, SMTP, and application-detection rule sets.",
          "Validated detection and prevention effectiveness through controlled attack-scenario testing, achieving 95%+ detection and blocking coverage for defined unauthorized-traffic scenarios.",
          "Built a real-time monitoring dashboard with a mobile-friendly interface surfacing alerts, logs, and packet activity from 1M+ daily captured packets.",
          "Identified and helped remediate 30+ critical vulnerabilities in a university e-governance platform, including misconfigurations, authentication/session weaknesses, SQL injection, XSS, and input-validation flaws.",
        ],
      },
    ],
  },
  {
    company: "Charotar University of Science and Technology (CHARUSAT)",
    url: "https://www.charusat.ac.in/",
    location: "Gujarat, India",
    positions: [
      {
        title: "Security Researcher — Privacy-Preserving Cloud Search",
        period: "July 2021 – August 2022",
        bullets: [
          "Led a 13.5-month cloud-security research effort on privacy-preserving search over encrypted cloud data, comparing SSE, PEKS, proxy re-encryption, and multi-user searchable-encryption models.",
          "Analyzed key leakage risks including index privacy, search-pattern leakage, access-pattern leakage, keyword-guessing attacks, and file-injection attacks.",
          "Synthesized mitigation approaches including ORAM, PIR, secure indexing, and forward/backward privacy for privacy-preserving cloud-storage designs.",
          "First-authored a Springer Nature conference paper published in ICTIS 2023 (LNNS Vol. 719).",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 gradient-text inline-block"
        >
          Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#667eea]/50 via-[#764ba2]/30 to-transparent hidden md:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, ei) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: ei * 0.06 }}
                className="md:pl-8 relative"
              >
                <div className="hidden md:block absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2]" />

                <div className="mb-3">
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-white hover:text-[#667eea] transition-colors duration-200"
                  >
                    {exp.company}
                  </a>
                  <span className="text-slate-600 text-sm ml-2">· {exp.location}</span>
                </div>

                <div className="flex flex-col gap-6">
                  {exp.positions.map((pos, pi) => (
                    <div key={pos.title} className={pi > 0 ? "pl-4 border-l border-white/[0.06]" : ""}>
                      <div className="flex flex-wrap items-baseline gap-3 mb-3">
                        <span className="text-slate-200 font-semibold">{pos.title}</span>
                        <span className="text-xs text-[#667eea] font-medium bg-[#667eea]/10 px-2 py-0.5 rounded-full">
                          {pos.period}
                        </span>
                      </div>
                      <ul className="flex flex-col gap-2">
                        {pos.bullets.map((b) => (
                          <li key={b} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                            <span className="text-[#667eea] mt-1.5 flex-shrink-0">▸</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
