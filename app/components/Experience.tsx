"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Maryland Athletics",
    url: "https://umterps.com/",
    location: "College Park, MD",
    positions: [
      {
        title: "Sr. IT Security & Support Specialist",
        period: "June 2025 – Present",
        bullets: [
          "Lead weekly vulnerability review sessions using Rapid7 InsightVM, collaborating with DIT to prioritize and remediate high-risk findings across 600+ assets.",
          "Validate vulnerabilities through targeted exploit simulation, reducing false positives by 28% and improving remediation accuracy.",
          "Manage endpoint security including encryption enforcement, Intune MDM enrollment, and access policy troubleshooting.",
          "Develop reusable Terraform modules to replicate and migrate infrastructure from Azure to AWS.",
        ],
      },
      {
        title: "Information Security Engineer & IT Support Intern",
        period: "June 2024 – August 2024",
        bullets: [
          "Resolved over 200 IT tickets, maintaining 99.9% system uptime across campus.",
          "Updated IDS rules, reducing potential security threats by 25%.",
          "Conducted internal security audits aligning operations with HIPAA, PCI, and SOX regulations.",
          "Delivered 10+ seminars on social engineering and typosquatting, eliminating incident reports.",
        ],
      },
      {
        title: "Terp Host",
        period: "January 2024 – June 2024",
        bullets: [
          "Assisted in marketing strategy and fan experience at UMD Athletics, enhancing fan engagement during matches.",
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
          "Responsible for 200+ students collectively, delivering lectures, labs, and real-world case studies.",
          "Designed project-based assessments to strengthen applied technical skills and critical thinking.",
        ],
      },
      {
        title: "Graduate Teaching Assistant",
        period: "August 2024 – May 2025",
        bullets: [
          "Assisted Dean Dr. Keith Marzullo in delivering instruction for INST 346.",
          "Led lab sessions focused on network security and distributed systems.",
          "Provided guidance on complex technical concepts in network architecture and data management.",
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
          "Write weekly reports on severe cybersecurity events with detailed technical breakdowns.",
          "Provide actionable recommendations for preemptive and responsive cyber defense strategies.",
          "Cover topics ranging from AI security, threat modelling, to incident response and certification journeys.",
        ],
      },
    ],
  },
  {
    company: "Charotar University of Science & Technology (CHARUSAT)",
    url: "https://www.charusat.ac.in/",
    location: "Gujarat, India",
    positions: [
      {
        title: "Cybersecurity Intern",
        period: "January 2023 – May 2023",
        bullets: [
          "Led development of an advanced IDS, detecting 95%+ unauthorized network activities using customized Snort rules.",
          "Engineered a user-friendly interface analyzing 10,00,000+ network packets daily.",
          "Conducted cybersecurity research on e-governance website, identifying 30+ security loopholes.",
        ],
      },
    ],
  },
  {
    company: "Source Automation",
    url: "https://confluids.com/news/source-automation-is-now-cfi",
    location: "Texas, USA (Remote)",
    positions: [
      {
        title: "Freelancer",
        period: "February 2023 – August 2023",
        bullets: [
          "Researched and wrote in-depth technical articles on automation and control systems.",
          "Produced clear user manuals and technical documentation for software applications.",
          "Collaborated with engineers to translate complex technical concepts into accessible content.",
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
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#667eea]/50 via-[#764ba2]/30 to-transparent hidden md:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, ei) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: ei * 0.07 }}
                className="md:pl-8 relative"
              >
                {/* Timeline dot */}
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
