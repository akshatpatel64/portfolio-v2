"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    name: "MomentumEngine – Secure Agentic AI Research Platform",
    role: "Agentic AI Engineer & Architect",
    period: "2025 – Present",
    url: "https://umd.box.com/s/qngivg0ntqss16apukcfxfe9f82gosya",
    summary:
      "Architected a secure agentic AI research platform on AWS Bedrock combining an 8-factor deterministic ranking engine with LLM agents for candidate comparison, explanation generation, and weekly review. Designed a 4-layer trust architecture spanning raw inputs, normalized claims, canonical facts, and traceable agent outputs — using freshness scoring, anomaly checks, and evidence-backed responses to reduce hallucination risk. Achieved 83.4% setup accuracy in historical evaluation.",
    tags: ["professional", "Agentic AI", "AWS Bedrock", "LLM", "AI Security"],
  },
  {
    name: "TeleTrackr – Observability Pipeline on EKS",
    role: "DevOps & Observability Engineer",
    period: "April – May 2025",
    url: "https://umd.box.com/s/xkrhkssfcat712v59q9sdji4l643uxp3",
    summary:
      "Designed and deployed a full-stack observability pipeline for a microservices e-commerce platform on Amazon EKS. Integrated OpenTelemetry for trace/metrics, Prometheus for alerting, and Grafana for visualization. Automated Helm-based deployments via GitHub Actions CI/CD with rollback safety. Configured AlertManager for real-time Gmail notifications on pod failures.",
    tags: ["academic", "Kubernetes", "OpenTelemetry", "DevOps", "CI/CD"],
  },
  {
    name: "SnortEduGuard – Student Integrity Surveillance System",
    role: "Security Engineer",
    period: "April 2025",
    url: "https://github.com/akshatpatel64/SnortEduGuard",
    summary:
      "Built a real-time academic IDS using Snort 3, Flask, and AI. Implemented 40+ custom rules detecting AI tools (ChatGPT, Claude), VPNs, and C2 behavior (DNS tunneling, Nmap). Integrated NLP with spaCy for Smart Search and alert summarization. Developed Exam Mode with default-deny policy to flag unauthorized traffic during proctored sessions.",
    tags: ["hobby", "Snort", "NLP", "Network Security"],
  },
  {
    name: "SecureScalr – AWS Powered E-Commerce Solution",
    role: "Cloud Architect",
    period: "March 2024 – April 2025",
    url: "https://umd.box.com/s/yb1taaurwy4y93bcrlyfl0imanihyxfw",
    summary:
      "Designed and validated a secure multi-tier AWS e-commerce architecture with private EC2 application tiers, ALB + Auto Scaling, Multi-AZ RDS, CloudFront-backed S3, WAF, ACM, IAM roles, and Secrets Manager. Sustained 55K+ JMeter requests under load while blocking 1,500+ simulated malicious requests. Validated under AWS Well-Architected Framework.",
    tags: ["academic", "AWS", "Cloud Architecture", "DevSecOps"],
  },
  {
    name: "Digital Forensic Investigation – Rebel Malware Analysis",
    role: "Digital Forensic Investigator",
    period: "Nov – Dec 2024",
    url: "https://umd.box.com/s/r1gpe0itrmk1apiakxu9jltpg2vrwjj0",
    summary:
      "Investigated a suspected malware developer's workstation analyzing the 'Rebel' framework. Recovered encrypted files, reconstructed deleted data, uncovered persistence techniques and C2 exfiltration. Used Autopsy, FTK Imager, VeraCrypt, Wireshark, and PhotoRec.",
    tags: ["academic", "Malware Analysis", "Digital Forensics"],
  },
  {
    name: "Penetration Testing – The Masked DJ's Infrastructure",
    role: "Penetration Tester",
    period: "Nov – Dec 2024",
    url: "https://umd.box.com/s/kwlgrfsz797g10xoq6ngosub5784zjz7",
    summary:
      "Identified critical vulnerabilities including misconfigured SMB/RDP, weak passwords, and EternalBlue. Used Nmap, Impacket, and AWS CLI — achieving root on Active Directory and web servers. Delivered MFA, network segmentation, and patch management recommendations.",
    tags: ["academic", "Penetration Testing", "Threat Assessment"],
  },
  {
    name: "Penetration Testing Challenge – Web App Exploitation",
    role: "Ethical Hacker",
    period: "Sept – Oct 2024",
    url: "https://umd.box.com/s/bzdro3hdhe8m3lh80h3hmqvhmuuuieqz",
    summary:
      "Structured pentest finding plaintext FTP credentials via Nmap, Gobuster, and Wireshark — enabling SSH access and privilege escalation through .bash_history analysis and Hydra brute-force.",
    tags: ["academic", "Penetration Testing", "Vulnerability Exploitation"],
  },
  {
    name: "CMMC 2.0 Level 1 Compliance – Web App Security",
    role: "Auditor",
    period: "Feb – March 2024",
    url: "https://umd.box.com/s/z21bncq40ta1v9yrp9tzjsvqlr6bzk1t",
    summary:
      "Assessed the Michael Scott Paper Company's web application for CMMC 2.0 Level 1 requirements. Identified gaps in access control, file upload security, and external connections with detailed compliance recommendations.",
    tags: ["professional", "Compliance", "CMMC 2.0"],
  },
  {
    name: "Risk Assessment of Autonomous Vehicle Telematics",
    role: "Independent Researcher",
    period: "Jan – Feb 2024",
    url: "https://umd.box.com/s/fs8jck71ekap5x4hcd4mpkv1cmnzg396",
    summary:
      "Comprehensive risk assessment for a self-driving vehicle telematics system. Applied DREAD to estimate quantitative risk values and linked results to STRIDE to address threat scenarios in autonomous vehicles.",
    tags: ["hobby", "DREAD", "STRIDE", "Risk Assessment"],
  },
  {
    name: "Security Assessment & AWS Architecture – MedCircle",
    role: "Cloud Security Engineer",
    period: "Jan – Feb 2024",
    url: "https://umd.box.com/s/cfiea73mr58apmwskl8iw6v98lcneliw",
    summary:
      "Mitigated security vulnerabilities in a healthcare company's cloud infrastructure. Focused on IAM policies, unencrypted data, vulnerable VMs, and monitoring gaps — providing HIPAA-aligned recommendations.",
    tags: ["academic", "AWS", "Healthcare Security", "HIPAA"],
  },
  {
    name: "Security Architecture Redesign – CustomerFirst Bank",
    role: "Team Lead",
    period: "Feb – April 2024",
    url: "https://umd.box.com/s/7yddrsbre3e8rlot59tl7f4irb7uqle5",
    summary:
      "Developed a comprehensive security enhancement plan for a compromised company network within a $500K budget. Fortified Linux/Windows networks with monitoring systems, breach management strategies, and policy improvements using MITRE ATT&CK and OWASP ZAP.",
    tags: ["professional", "MITRE ATT&CK", "Architecture"],
  },
  {
    name: "Drone Authentication System",
    role: "Developer",
    period: "June – Aug 2021",
    url: "https://github.com/akshatpatel64/Drone-Authentication-System",
    summary:
      "GPS + GSM + Arduino system that monitors drone access to restricted zones, cutting power if unauthorized entry is attempted and verifying credentials against a Drone Authentication Center before allowing flight.",
    tags: ["academic", "IoT", "Security", "Arduino"],
  },
  {
    name: "IDS for CHARUSAT University",
    role: "Network Security Engineer",
    period: "Dec 2020 – Jan 2021",
    url: "https://github.com/akshatpatel64/IDS-Intrusion-Detection-System-",
    summary:
      "Snort-based IDS differentiating legitimate from malicious IPs on CHARUSAT's network. Features continuous monitoring, student IP restrictions, IPS integration, and a real-time logging dashboard eliminating manual CMD checks.",
    tags: ["professional", "Snort", "Network Security"],
  },
];

const filters = ["All", "Professional", "Academic", "Hobby"];
const techTags = new Set(["professional", "academic", "hobby"]);

// 3D tilt handlers
const onTiltMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const cx = (e.clientX - rect.left) / rect.width - 0.5;
  const cy = (e.clientY - rect.top) / rect.height - 0.5;
  el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
  el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  el.style.transition = "transform 0.08s linear";
  el.style.transform = `perspective(800px) rotateX(${-cy * 12}deg) rotateY(${cx * 12}deg) scale(1.02)`;
};

const onTiltLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const el = e.currentTarget;
  el.style.transition = "transform 0.55s cubic-bezier(0.23, 1, 0.32, 1)";
  el.style.transform = "";
};

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) =>
          p.tags.some((t) => t.toLowerCase() === active.toLowerCase())
        );

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 gradient-text inline-block"
        >
          Projects
        </motion.h2>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                active === f
                  ? "text-white shadow-lg shadow-[#667eea]/20"
                  : "glass glass-hover text-slate-400 hover:text-white"
              }`}
              style={
                active === f
                  ? { background: "linear-gradient(135deg, #667eea, #764ba2)" }
                  : undefined
              }
            >
              {f}
              {active !== f && (
                <span className="ml-1.5 text-xs text-slate-600">
                  {f === "All"
                    ? projects.length
                    : projects.filter((p) =>
                        p.tags.some((t) => t.toLowerCase() === f.toLowerCase())
                      ).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid with AnimatePresence for smooth filter transitions */}
        <motion.div layout className="grid md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((p) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, scale: 0.88, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tilt-card glass glass-hover rounded-2xl p-6 flex flex-col gap-3 group block h-full"
                  onMouseMove={onTiltMove}
                  onMouseLeave={onTiltLeave}
                >
                  <div className="flex items-start justify-between gap-3 relative z-10">
                    <h3 className="text-white font-semibold leading-snug group-hover:text-[#667eea] transition-colors duration-200 text-[15px]">
                      {p.name}
                    </h3>
                    <span className="text-slate-600 group-hover:text-[#667eea] transition-colors flex-shrink-0 mt-0.5 text-base">
                      ↗
                    </span>
                  </div>

                  <div className="flex gap-2 text-xs text-slate-500 relative z-10">
                    <span className="font-medium text-slate-400">{p.role}</span>
                    <span>·</span>
                    <span>{p.period}</span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 relative z-10">
                    {p.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-1 relative z-10">
                    {p.tags
                      .filter((t) => !techTags.has(t))
                      .map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[11px] bg-[#667eea]/10 border border-[#667eea]/20 text-[#667eea]"
                        >
                          {t}
                        </span>
                      ))}
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
