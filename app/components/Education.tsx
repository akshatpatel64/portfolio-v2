"use client";

import { motion } from "framer-motion";

const degrees = [
  {
    name: "Master of Engineering in Cybersecurity",
    institution: "University of Maryland, College Park",
    url: "https://umd.edu/",
    period: "August 2023 – May 2025",
    gpa: "3.66 / 4.0",
    courses: [
      "ENPM691 Hacking of C Programs and UNIX Binaries",
      "ENPM694 Networks and Protocols",
      "ENPM665 Cloud Security",
      "ENPM693 Network Security",
      "ENPM686 Information Assurance",
      "ENPM685 Security Tools for Information Security",
      "ENPM634 Penetration Testing",
      "ENPM687 Digital Forensics and Incident Response",
      "ENPM695 Secure Operating Systems",
      "ENPM818N Cloud Computing",
    ],
  },
  {
    name: "Bachelor of Technology in Electronics & Communication Engineering",
    institution: "Charotar University of Science and Technology",
    url: "https://www.charusat.ac.in/",
    period: "July 2019 – May 2023",
    gpa: "9.64 / 10 (CGPA)",
    extras: [
      "First-authored Springer Nature conference paper: \"Privacy Challenges and Solutions in Implementing Searchable Encryption for Cloud Storage\" — published at ICTIS 2023 (LNNS Vol. 719)",
      "Led 13.5-month cloud-security research on privacy-preserving search over encrypted cloud data with Dr. Trushit Upadhyaya and Dr. Upesh Patel",
      "Club Coordinator at Code for Cause · Board member for university magazine · Internshala Student Partner",
    ],
  },
  {
    name: "Schooling (K–12)",
    institution: "Kendriya Vidhyalaya No. 1",
    url: "https://mrcahmedabad.kvs.ac.in/",
    period: "2007 – 2019",
    gpa: "8.72 / 10 (GPA)",
    extras: ["Ashoka House Captain"],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 gradient-text inline-block"
        >
          Education
        </motion.h2>

        <div className="flex flex-col gap-6">
          {degrees.map((deg, i) => (
            <motion.div
              key={deg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-white font-bold text-lg">{deg.name}</h3>
                  <a
                    href={deg.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#667eea] text-sm hover:underline"
                  >
                    {deg.institution}
                  </a>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-sm text-slate-400">{deg.period}</div>
                  <div className="text-sm font-semibold text-[#667eea] mt-0.5">{deg.gpa}</div>
                </div>
              </div>

              {deg.courses && (
                <div className="mt-4">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Key Courses</p>
                  <div className="flex flex-wrap gap-2">
                    {deg.courses.map((c) => (
                      <span
                        key={c}
                        className="px-2.5 py-1 rounded-md text-xs bg-white/[0.04] border border-white/[0.07] text-slate-400"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {deg.extras && (
                <ul className="mt-4 flex flex-col gap-2">
                  {deg.extras.map((e) => (
                    <li key={e} className="text-slate-400 text-sm flex gap-2 leading-relaxed">
                      <span className="text-[#667eea] mt-1 flex-shrink-0">▸</span>
                      {e}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
