"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "AI Engineering & Agents",
    icon: "🤖",
    accent: "from-violet-500/10 to-purple-500/5",
    items: [
      "Microsoft Foundry",
      "Foundry Agent Service",
      "Microsoft Copilot Studio",
      "Microsoft Teams Agents",
      "Power Platform",
      "Prompt Engineering",
      "Custom Agents / Copilots",
      "Tool / Function Calling",
      "Knowledge Grounding",
      "Retrieval-Augmented Generation (RAG)",
      "LLM Response Evaluation",
      "Guardrails",
      "Workflow Automation",
      "AI Workflow Design",
    ],
  },
  {
    category: "Cloud & AI Infrastructure",
    icon: "☁️",
    accent: "from-blue-500/10 to-cyan-500/5",
    items: [
      "AWS",
      "Amazon Bedrock",
      "Lambda",
      "S3",
      "RDS",
      "VPC",
      "IAM",
      "WAF",
      "KMS",
      "CloudTrail",
      "CloudWatch",
      "Secrets Manager",
      "Route 53",
      "Docker",
      "Terraform",
      "Amazon EKS",
    ],
  },
  {
    category: "AI Security & Governance",
    icon: "🔐",
    accent: "from-rose-500/10 to-pink-500/5",
    items: [
      "NIST AI RMF",
      "OWASP Top 10 for LLM Applications",
      "Prompt-Injection Risk",
      "Data Classification Review",
      "RBAC",
      "Least Privilege",
      "SSO / MFA",
      "Access Policies",
      "Secrets Management",
      "Secure SDLC",
    ],
  },
  {
    category: "Security Operations",
    icon: "🛡️",
    accent: "from-indigo-500/10 to-blue-500/5",
    items: [
      "Rapid7 InsightVM",
      "Splunk",
      "Security Onion",
      "ELK Stack",
      "CrowdStrike",
      "Snort",
      "Wireshark",
      "Vulnerability Management",
      "SIEM-Aligned Triage",
      "Endpoint Security",
    ],
  },
  {
    category: "MLOps / Observability",
    icon: "📊",
    accent: "from-emerald-500/10 to-teal-500/5",
    items: [
      "OpenTelemetry",
      "Prometheus",
      "Grafana",
      "GitHub Actions",
      "Response Monitoring",
      "Tracing",
      "Alerting",
      "Reliability Validation",
      "Deployment Rollback Testing",
    ],
  },
  {
    category: "Security Testing",
    icon: "🔍",
    accent: "from-orange-500/10 to-amber-500/5",
    items: [
      "Burp Suite",
      "OWASP ZAP",
      "Nmap",
      "Metasploit",
      "Nikto",
      "Autopsy",
      "FTK Imager",
    ],
  },
  {
    category: "Programming & Data",
    icon: "💻",
    accent: "from-sky-500/10 to-blue-500/5",
    items: [
      "Python",
      "SQL",
      "PowerShell",
      "Bash",
      "JavaScript",
      "Pandas",
      "Excel Automation",
      "JSON",
      "REST APIs",
      "Data Validation",
      "Reporting Automation",
    ],
  },
  {
    category: "Enterprise Platforms",
    icon: "🏢",
    accent: "from-slate-500/10 to-gray-500/5",
    items: [
      "Microsoft 365",
      "Google Workspace",
      "Intune MDM",
      "JAMF",
      "HelpScout",
      "1Password",
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
              transition={{ duration: 0.5, delay: (gi % 4) * 0.07 }}
              className={`glass rounded-2xl p-6 bg-gradient-to-br ${group.accent}`}
            >
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
