export interface Project {
  slug: string;
  name: string;
  role: string;
  period: string;
  url: string;
  tags: string[];
  summary: string;
  overview: string;
  challenge: string;
  solution: string;
  techStack: { name: string; description: string }[];
  outcomes: string[];
}

export const projects: Project[] = [
  {
    slug: "momentum-engine",
    name: "MomentumEngine – Secure Agentic AI Research Platform",
    role: "Agentic AI Engineer & Architect",
    period: "2025 – Present",
    url: "https://umd.box.com/s/qngivg0ntqss16apukcfxfe9f82gosya",
    tags: ["professional", "Agentic AI", "AWS Bedrock", "LLM", "AI Security"],
    summary:
      "Architected a secure agentic AI research platform on AWS Bedrock combining an 8-factor deterministic ranking engine with LLM agents for candidate comparison, explanation generation, and weekly review.",
    overview:
      "MomentumEngine is a secure agentic AI research platform designed to eliminate hallucination risk in AI-generated research summaries. It combines a deterministic ranking engine with LLM agents — so every claim is grounded in traceable, evidence-backed data before the model generates prose.",
    challenge:
      "AI-generated research summaries are fast but unreliable: they hallucinate facts, cite non-existent sources, and give no way to trace a claim back to its origin. Building a trustworthy research assistant means you can't just prompt a model and hope — you need a verifiable trust architecture that separates what the model knows from what the data proves.",
    solution:
      "Designed a 4-layer trust architecture: raw inputs are normalized into claims, claims are validated against canonical facts, and LLM agents only synthesize outputs after deterministic pre-processing has already ranked, scored, and verified the underlying data. An 8-factor ranking engine handles freshness scoring, anomaly detection, and source credibility weighting before any LLM touch. Agents then handle candidate comparison, explanation generation, and periodic review — constrained to the already-verified fact layer.",
    techStack: [
      { name: "AWS Bedrock", description: "Foundation model hosting (Claude 3 Sonnet) with guardrails" },
      { name: "Python", description: "Core pipeline, ranking engine, agent orchestration" },
      { name: "Amazon DynamoDB", description: "Canonical fact store with TTL-based freshness" },
      { name: "AWS Lambda", description: "Event-driven agent invocation and pipeline steps" },
      { name: "S3", description: "Raw input storage and artifact versioning" },
      { name: "OWASP Top 10 for LLMs", description: "Threat model applied to prompt injection and data poisoning risks" },
    ],
    outcomes: [
      "83.4% setup accuracy in historical evaluation against ground-truth data",
      "Zero uncited claims in governed outputs — every response traces to a canonical fact",
      "4-layer trust architecture eliminates direct LLM access to unverified inputs",
      "Freshness scoring and anomaly checks reduce stale-data hallucinations",
    ],
  },
  {
    slug: "teletrackr",
    name: "TeleTrackr – Observability Pipeline on EKS",
    role: "DevOps & Observability Engineer",
    period: "April – May 2025",
    url: "https://umd.box.com/s/xkrhkssfcat712v59q9sdji4l643uxp3",
    tags: ["academic", "Kubernetes", "OpenTelemetry", "DevOps", "CI/CD"],
    summary:
      "Designed and deployed a full-stack observability pipeline for a microservices e-commerce platform on Amazon EKS with OpenTelemetry, Prometheus, and Grafana.",
    overview:
      "TeleTrackr is a production-grade observability pipeline built for a microservices e-commerce platform running on Amazon EKS. It provides distributed tracing, metrics collection, alerting, and real-time dashboards — with automated CI/CD deployment and rollback safety built in.",
    challenge:
      "Microservices platforms generate traces and metrics across dozens of pods with no unified view. Pod failures go undetected for minutes, root-cause analysis requires digging through raw logs, and there's no automated way to catch regressions after deploys. Manual monitoring doesn't scale past a handful of services.",
    solution:
      "Instrumented all microservices with OpenTelemetry SDKs for distributed tracing and metrics export. Prometheus scrapes metrics from all pods on a 15-second interval and evaluates alerting rules. Grafana visualizes the full trace-to-metric pipeline with per-service dashboards. AlertManager routes pod failure alerts to Gmail in real time. Helm-based deployments are automated via GitHub Actions CI/CD with built-in rollback on failed health checks.",
    techStack: [
      { name: "Amazon EKS", description: "Kubernetes cluster hosting all microservices and observability components" },
      { name: "OpenTelemetry", description: "Distributed tracing and metrics instrumentation across all services" },
      { name: "Prometheus", description: "Metrics collection, storage, and alerting rule evaluation" },
      { name: "Grafana", description: "Dashboard visualization for traces, metrics, and service health" },
      { name: "AlertManager", description: "Alert routing and Gmail notification on pod failures" },
      { name: "Helm + GitHub Actions", description: "Declarative deployment with CI/CD automation and rollback safety" },
    ],
    outcomes: [
      "Real-time Gmail alerts delivered within 30 seconds of pod failure detection",
      "Zero-downtime Helm rollbacks validated across 3 deployment scenarios",
      "Full trace-to-dashboard pipeline operational with sub-second metrics resolution",
      "CI/CD pipeline with automated health check gating prevents bad deploys from reaching production",
    ],
  },
  {
    slug: "snorteduguard",
    name: "SnortEduGuard – Student Integrity Surveillance System",
    role: "Security Engineer",
    period: "April 2025",
    url: "https://github.com/akshatpatel64/SnortEduGuard",
    tags: ["hobby", "Snort", "NLP", "Network Security"],
    summary:
      "Real-time academic IDS using Snort 3, Flask, and AI with 40+ custom rules detecting AI tools, VPNs, and C2 behavior. Includes NLP-powered Smart Search and Exam Mode.",
    overview:
      "SnortEduGuard is a real-time academic integrity IDS that detects AI tool usage, VPN evasion, and command-and-control behavior on educational networks. It goes beyond signature-matching by adding NLP-powered alert summarization and a default-deny Exam Mode for proctored sessions.",
    challenge:
      "Academic integrity monitoring relied on manual log review and couldn't catch AI tool usage (ChatGPT, Claude) or VPN-based evasion in real time. Proctored sessions had no automated enforcement layer — instructors had to manually watch network logs during exams.",
    solution:
      "Built 40+ custom Snort 3 rules targeting AI tool API calls, VPN handshakes, DNS tunneling, and Nmap scan signatures. Integrated a Flask backend that processes Snort alerts and feeds them to a spaCy NLP pipeline for automatic categorization and plain-English summarization. Exam Mode applies a default-deny policy that flags any unauthorized outbound traffic the moment a proctored session starts.",
    techStack: [
      { name: "Snort 3", description: "Core IDS engine with 40+ custom rules for AI tools, VPNs, C2 behavior" },
      { name: "Python + Flask", description: "Backend alert processor and web dashboard" },
      { name: "spaCy", description: "NLP pipeline for Smart Search and alert summarization" },
      { name: "DNS Analysis", description: "Detection of DNS tunneling and covert channel exfiltration" },
    ],
    outcomes: [
      "40+ custom Snort 3 rules covering AI tools, VPN protocols, and C2 behavior",
      "spaCy NLP pipeline reduces alert review time with plain-English summaries",
      "Exam Mode enforces default-deny with zero false negatives on unauthorized outbound traffic",
      "Real-time dashboard eliminates manual CMD log review during proctored sessions",
    ],
  },
  {
    slug: "securescalr",
    name: "SecureScalr – AWS Powered E-Commerce Solution",
    role: "Cloud Architect",
    period: "March 2024 – April 2025",
    url: "https://umd.box.com/s/yb1taaurwy4y93bcrlyfl0imanihyxfw",
    tags: ["academic", "AWS", "Cloud Architecture", "DevSecOps"],
    summary:
      "Secure multi-tier AWS e-commerce architecture with private EC2 tiers, ALB + Auto Scaling, Multi-AZ RDS, CloudFront, WAF, and Secrets Manager — validated under AWS Well-Architected Framework.",
    overview:
      "SecureScalr is a production-validated, secure multi-tier e-commerce architecture on AWS. It demonstrates how to design a scalable, resilient, and secure cloud system from the ground up — applying least-privilege IAM, encrypted data stores, edge protection via WAF, and Well-Architected Framework principles throughout.",
    challenge:
      "Design a cloud architecture that passes the AWS Well-Architected Framework review, sustains real load (55K+ requests), blocks simulated attacks, and applies defense-in-depth at every layer — from the edge to the database.",
    solution:
      "Built a multi-tier architecture with private EC2 application tier hidden behind a public ALB + Auto Scaling Group. Multi-AZ RDS ensures database availability during zone failures. CloudFront caches and serves S3 static assets at edge. WAF rules block common attack patterns (SQLi, XSS, rate abuse) before traffic reaches EC2. ACM provides TLS termination. IAM roles enforce least privilege per tier. Secrets Manager handles all credential rotation.",
    techStack: [
      { name: "AWS EC2 + ALB", description: "Private application tier with load balancing and auto scaling" },
      { name: "Multi-AZ RDS", description: "Managed relational database with automatic failover" },
      { name: "CloudFront + S3", description: "Edge-cached static asset delivery" },
      { name: "WAF + ACM", description: "Web application firewall and TLS certificate management" },
      { name: "IAM + Secrets Manager", description: "Least-privilege access control and credential management" },
      { name: "JMeter", description: "Load testing tool for performance and attack simulation" },
    ],
    outcomes: [
      "55,000+ JMeter requests sustained under load testing without degradation",
      "1,500+ simulated malicious requests blocked by WAF rules",
      "AWS Well-Architected Framework review passed across all 6 pillars",
      "Multi-AZ RDS failover validated — zero data loss during simulated AZ outage",
    ],
  },
  {
    slug: "rebel-malware-analysis",
    name: "Digital Forensic Investigation – Rebel Malware Analysis",
    role: "Digital Forensic Investigator",
    period: "Nov – Dec 2024",
    url: "https://umd.box.com/s/r1gpe0itrmk1apiakxu9jltpg2vrwjj0",
    tags: ["academic", "Malware Analysis", "Digital Forensics"],
    summary:
      "Forensic investigation of a suspected malware developer's workstation analyzing the 'Rebel' framework — recovering encrypted files, reconstructed deleted data, and uncovering C2 exfiltration.",
    overview:
      "A forensic investigation of a suspected malware developer's workstation, focused on analyzing the 'Rebel' malware framework. The goal was to recover deleted and encrypted artifacts, understand the malware's persistence mechanisms, and trace its C2 exfiltration channels — building a complete evidence chain for attribution.",
    challenge:
      "The suspect had deliberately encrypted key files, wiped logs, and used anti-forensic techniques to slow investigation. The primary artifacts — encryption keys, deleted staging files, and C2 traffic — had to be recovered from disk images and memory without corrupting the chain of custody.",
    solution:
      "Acquired and analyzed full disk images using FTK Imager and Autopsy. Recovered deleted files using PhotoRec, and decrypted protected archives by identifying key material in recovered artifacts. Used Wireshark to analyze captured network traffic and reconstruct C2 communication patterns. Documented every recovery step to maintain chain of custody.",
    techStack: [
      { name: "Autopsy", description: "Primary forensic analysis platform for disk image examination" },
      { name: "FTK Imager", description: "Forensic disk imaging with hash verification" },
      { name: "VeraCrypt", description: "Encrypted volume analysis and key recovery" },
      { name: "PhotoRec", description: "Deleted file recovery from unallocated disk space" },
      { name: "Wireshark", description: "Network traffic capture and C2 communication analysis" },
    ],
    outcomes: [
      "Recovered encrypted files and reconstructed deleted staging artifacts",
      "Identified Rebel framework persistence mechanisms (registry keys, scheduled tasks)",
      "Traced C2 exfiltration channels through Wireshark packet analysis",
      "Delivered complete forensic timeline report with chain-of-custody documentation",
    ],
  },
  {
    slug: "pentest-masked-dj",
    name: "Penetration Testing – The Masked DJ's Infrastructure",
    role: "Penetration Tester",
    period: "Nov – Dec 2024",
    url: "https://umd.box.com/s/kwlgrfsz797g10xoq6ngosub5784zjz7",
    tags: ["academic", "Penetration Testing", "Threat Assessment"],
    summary:
      "Identified critical vulnerabilities including misconfigured SMB/RDP, weak passwords, and EternalBlue — achieving root on Active Directory and web servers with MFA and segmentation recommendations.",
    overview:
      "A structured penetration test of a hybrid infrastructure including Active Directory and web servers. The engagement focused on identifying exploitable paths from network reconnaissance to root-level system compromise, then translating findings into a prioritized remediation report.",
    challenge:
      "The target environment had a mix of Windows AD infrastructure and Linux web servers — both internet-facing with legacy configurations. The challenge was to find the attack chain from external access to full AD compromise within the scope of the engagement.",
    solution:
      "Ran Nmap for service discovery and OS fingerprinting. Identified misconfigured SMB shares and weak NTLM hashes via Impacket. Exploited EternalBlue (MS17-010) to achieve root on the AD domain controller. Pivoted to web servers using captured credentials and AWS CLI misconfiguration. Delivered a full report covering root cause, exploit chain, and prioritized remediation.",
    techStack: [
      { name: "Nmap", description: "Network discovery, service enumeration, OS fingerprinting" },
      { name: "Impacket", description: "SMB/NTLM attacks and lateral movement" },
      { name: "Metasploit + EternalBlue", description: "MS17-010 exploitation for AD root access" },
      { name: "AWS CLI", description: "Cloud credential abuse and IAM misconfiguration exploitation" },
    ],
    outcomes: [
      "Root access achieved on Active Directory domain controller via EternalBlue",
      "Web server compromise via credential reuse from AD hash extraction",
      "3 critical findings: EternalBlue, misconfigured SMB, weak credentials",
      "Remediation report delivered covering MFA enforcement, network segmentation, and patch management",
    ],
  },
  {
    slug: "pentest-web-app",
    name: "Penetration Testing Challenge – Web App Exploitation",
    role: "Ethical Hacker",
    period: "Sept – Oct 2024",
    url: "https://umd.box.com/s/bzdro3hdhe8m3lh80h3hmqvhmuuuieqz",
    tags: ["academic", "Penetration Testing", "Vulnerability Exploitation"],
    summary:
      "Structured pentest finding plaintext FTP credentials via Nmap and Wireshark — enabling SSH access and privilege escalation through .bash_history analysis and Hydra brute-force.",
    overview:
      "A structured web application penetration test against a deliberately vulnerable environment. The goal was to trace the full compromise chain — from unauthenticated external access through FTP credential discovery, SSH login, and privilege escalation to root.",
    challenge:
      "The challenge was to find the initial foothold without prior knowledge of the environment — no credentials, no source code. The attack surface included a web application, an FTP service, and SSH, each with different misconfiguration patterns to discover.",
    solution:
      "Ran Nmap to enumerate all open services and identify FTP with anonymous access hints. Captured cleartext FTP credentials via Wireshark during a passive traffic capture phase. Used Gobuster to brute-force directory listings and expose an admin panel. Analyzed .bash_history on the compromised account for previously run commands revealing credential reuse. Completed privilege escalation to root via Hydra brute-force on a sudo-enabled account.",
    techStack: [
      { name: "Nmap", description: "Initial service and port enumeration" },
      { name: "Wireshark", description: "Plaintext credential capture from FTP traffic" },
      { name: "Gobuster", description: "Directory brute-force for hidden endpoints" },
      { name: "Hydra", description: "Password brute-force for privilege escalation" },
      { name: "Burp Suite", description: "Web application interception and parameter analysis" },
    ],
    outcomes: [
      "Full compromise chain documented: anonymous FTP → SSH → root",
      "Plaintext credentials discovered via Wireshark passive capture",
      "Privilege escalation achieved through .bash_history analysis and Hydra brute-force",
      "Attack narrative and remediation steps delivered in structured report",
    ],
  },
  {
    slug: "cmmc-compliance",
    name: "CMMC 2.0 Level 1 Compliance – Web App Security",
    role: "Auditor",
    period: "Feb – March 2024",
    url: "https://umd.box.com/s/z21bncq40ta1v9yrp9tzjsvqlr6bzk1t",
    tags: ["professional", "Compliance", "CMMC 2.0"],
    summary:
      "Assessed the Michael Scott Paper Company's web application for CMMC 2.0 Level 1 requirements, identifying access control gaps, file upload vulnerabilities, and external connection weaknesses.",
    overview:
      "A compliance assessment of a web application against CMMC 2.0 Level 1 requirements — the baseline required for DoD contractor certification. The engagement identified gaps across access control, data protection, and external connection management, then produced a prioritized remediation roadmap.",
    challenge:
      "CMMC 2.0 Level 1 covers 17 practices across 6 domains. The target web application was not built with DoD compliance in mind — shared accounts, unvalidated file uploads, and missing audit logging were not edge cases but baseline conditions of the system.",
    solution:
      "Audited the application against all 17 CMMC Level 1 practices using the NIST SP 800-171 control mapping. Performed manual testing for access control (shared credentials, no MFA), file upload handling (no MIME validation, arbitrary extension upload), and external connection logging (no egress monitoring). Produced a gap report with practice-by-practice findings and a tiered remediation roadmap.",
    techStack: [
      { name: "CMMC 2.0 Framework", description: "17-practice Level 1 assessment structure" },
      { name: "NIST SP 800-171", description: "Control mapping for CMMC practice requirements" },
      { name: "Burp Suite", description: "File upload testing and request interception" },
      { name: "Manual Code Review", description: "Access control and session management analysis" },
    ],
    outcomes: [
      "17 CMMC Level 1 practices assessed across 6 domains",
      "8 compliance gaps identified including shared accounts, missing MFA, unvalidated uploads",
      "Remediation roadmap tiered by criticality and implementation effort",
      "Report structured for direct use in DoD contractor compliance review",
    ],
  },
  {
    slug: "av-risk-assessment",
    name: "Risk Assessment of Autonomous Vehicle Telematics",
    role: "Independent Researcher",
    period: "Jan – Feb 2024",
    url: "https://umd.box.com/s/fs8jck71ekap5x4hcd4mpkv1cmnzg396",
    tags: ["hobby", "DREAD", "STRIDE", "Risk Assessment"],
    summary:
      "Comprehensive DREAD + STRIDE risk assessment for a self-driving vehicle telematics system, quantifying threat scenarios across GPS, CAN bus, OTA updates, and V2X communications.",
    overview:
      "A structured risk assessment of an autonomous vehicle telematics system using DREAD quantitative scoring combined with STRIDE threat categorization. The goal was to translate abstract attack surfaces — GPS, CAN bus, OTA updates, V2X communication — into measurable risk values with actionable mitigations.",
    challenge:
      "AV telematics systems have a uniquely high-stakes threat model: a successful attack can endanger lives, not just data. Standard qualitative risk ratings (high/medium/low) don't capture the nuance needed for safety-critical systems. Quantitative scoring tied to specific threat scenarios was required.",
    solution:
      "Applied DREAD across 5 attack surfaces: GPS spoofing, CAN bus injection, OTA firmware tampering, V2X communication interception, and remote API abuse. Scored each scenario on Damage, Reproducibility, Exploitability, Affected Users, and Discoverability. Linked results to STRIDE categories (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) to map each threat to specific mitigation controls.",
    techStack: [
      { name: "DREAD Framework", description: "5-dimension quantitative threat scoring" },
      { name: "STRIDE Threat Model", description: "Threat categorization across 6 attack types" },
      { name: "Risk Quantification", description: "Composite scoring for prioritized remediation" },
    ],
    outcomes: [
      "5 attack surfaces analyzed: GPS, CAN bus, OTA updates, V2X, remote API",
      "12+ threat scenarios scored with DREAD composite values",
      "STRIDE-mapped mitigations provided for all high-severity findings",
      "Risk prioritization framework adaptable to other safety-critical IoT systems",
    ],
  },
  {
    slug: "medcircle-security",
    name: "Security Assessment & AWS Architecture – MedCircle",
    role: "Cloud Security Engineer",
    period: "Jan – Feb 2024",
    url: "https://umd.box.com/s/cfiea73mr58apmwskl8iw6v98lcneliw",
    tags: ["academic", "AWS", "Healthcare Security", "HIPAA"],
    summary:
      "Identified security vulnerabilities in a healthcare company's AWS infrastructure — over-permissive IAM, unencrypted PHI, vulnerable VMs, and missing audit logging — with HIPAA-aligned remediation.",
    overview:
      "A cloud security assessment of MedCircle's AWS infrastructure focused on HIPAA Security Rule compliance. The engagement identified critical vulnerabilities including unencrypted PHI at rest, over-permissive IAM roles, vulnerable EC2 instances, and absent audit logging — then provided a HIPAA-aligned remediation roadmap.",
    challenge:
      "Healthcare cloud infrastructure has a dual failure mode: it can fail security review for technical vulnerabilities and separately fail HIPAA compliance for missing administrative controls. MedCircle's environment had both — technical gaps (unencrypted S3, over-permissive IAM) and compliance gaps (no CloudTrail, no access logging on PHI data stores).",
    solution:
      "Assessed IAM policies for least-privilege violations, reviewed S3 bucket configurations for public access and encryption settings, examined EC2 patch levels and security group rules, and audited CloudTrail enablement and log retention. Mapped each finding to the corresponding HIPAA Security Rule provision and provided prioritized, implementation-ready remediation steps.",
    techStack: [
      { name: "AWS IAM", description: "Over-permissive role and policy analysis" },
      { name: "CloudTrail", description: "Audit logging gap identification and remediation" },
      { name: "S3 Encryption", description: "PHI data-at-rest encryption assessment" },
      { name: "VPC Security Groups", description: "Network access control review" },
      { name: "HIPAA Security Rule", description: "Compliance mapping for all technical safeguard requirements" },
    ],
    outcomes: [
      "6 critical findings including unencrypted PHI at rest in S3 buckets",
      "IAM least-privilege redesign proposed — eliminated 3 overly permissive admin roles",
      "CloudTrail enablement and log retention policy implemented per HIPAA requirement",
      "HIPAA Technical Safeguards roadmap delivered with implementation timeline",
    ],
  },
  {
    slug: "customer-first-bank",
    name: "Security Architecture Redesign – CustomerFirst Bank",
    role: "Team Lead",
    period: "Feb – April 2024",
    url: "https://umd.box.com/s/7yddrsbre3e8rlot59tl7f4irb7uqle5",
    tags: ["professional", "MITRE ATT&CK", "Architecture"],
    summary:
      "Led a security enhancement plan for a compromised bank within a $500K budget — hardening Linux/Windows networks with SIEM, breach management playbooks, and MITRE ATT&CK-mapped remediation.",
    overview:
      "A comprehensive security architecture redesign for a financial institution that had suffered a network compromise. Led a team to develop a $500K security enhancement plan covering network hardening, SIEM deployment, breach management, and policy reform — all mapped to observed attacker TTPs using MITRE ATT&CK.",
    challenge:
      "The bank had an active compromise with indicators still present in the environment. The challenge was designing a remediation plan that both addressed the immediate breach and built long-term defensive architecture — within a fixed $500K budget and without disrupting banking operations during the hardening period.",
    solution:
      "Mapped all observed attacker activity to MITRE ATT&CK techniques to understand the full kill chain. Used OWASP ZAP to assess web application vulnerabilities. Designed hardened Linux/Windows configurations, deployed SIEM for centralized log analysis and alerting, developed breach management playbooks for future incident response, and updated security policies to align with CIS Benchmarks.",
    techStack: [
      { name: "MITRE ATT&CK", description: "TTP mapping for observed breach indicators and remediation coverage" },
      { name: "OWASP ZAP", description: "Web application vulnerability assessment" },
      { name: "SIEM", description: "Centralized log collection, correlation, and alerting" },
      { name: "Linux/Windows Hardening", description: "CIS Benchmark-aligned system configuration" },
      { name: "Security Policy", description: "Incident response playbooks and acceptable use policies" },
    ],
    outcomes: [
      "$500K security budget allocated across 7 control domains with ROI justification",
      "All observed attacker TTPs mapped to MITRE ATT&CK with remediation controls",
      "SIEM deployment enabling real-time threat detection and alert triage",
      "Breach management playbook deployed — reduces mean time to respond for future incidents",
    ],
  },
  {
    slug: "drone-authentication",
    name: "Drone Authentication System",
    role: "Developer",
    period: "June – Aug 2021",
    url: "https://github.com/akshatpatel64/Drone-Authentication-System",
    tags: ["academic", "IoT", "Security", "Arduino"],
    summary:
      "GPS + GSM + Arduino system that monitors drone access to restricted zones, cutting power on unauthorized entry and verifying credentials against a Drone Authentication Center.",
    overview:
      "A hardware security system that prevents unauthorized drone access to restricted airspace using GPS geofencing, GSM communication, and Arduino-based control logic. The system automatically disables motor power on zone violation and authenticates the drone identity before permitting flight resumption.",
    challenge:
      "Drone incursions into restricted zones — airports, military installations, event venues — happen faster than human operators can respond. An automated, hardware-level enforcement system was needed that could detect zone violations instantly and act without waiting for human intervention.",
    solution:
      "Built a GPS + GSM + Arduino system that continuously reads the drone's GPS coordinates and compares them against a geofenced restricted zone boundary. On unauthorized entry, the system triggers an immediate motor power cutoff via a relay module, transmits a violation alert via GSM to the Drone Authentication Center, and requires credential verification before flight can resume.",
    techStack: [
      { name: "Arduino", description: "Main control logic for GPS reading and relay actuation" },
      { name: "GPS Module", description: "Real-time position tracking and geofence boundary calculation" },
      { name: "GSM Module", description: "Alert transmission and two-way credential verification" },
      { name: "C++", description: "Embedded firmware for the Arduino control loop" },
      { name: "Geofencing", description: "Coordinate-based boundary definition for restricted zones" },
    ],
    outcomes: [
      "Automatic motor cutoff triggered within 1 second of restricted zone entry",
      "Credential verification loop prevents flight resumption without authentication",
      "Prototype validated in controlled test environment with simulated zone boundaries",
      "Hardware-only enforcement requires no cloud dependency for core safety function",
    ],
  },
  {
    slug: "charusat-ids",
    name: "IDS for CHARUSAT University",
    role: "Network Security Engineer",
    period: "Dec 2020 – Jan 2021",
    url: "https://github.com/akshatpatel64/IDS-Intrusion-Detection-System-",
    tags: ["professional", "Snort", "Network Security"],
    summary:
      "Snort-based IDS for CHARUSAT's network with continuous monitoring, student IP restrictions, IPS integration, and a real-time logging dashboard — eliminating manual CMD log review.",
    overview:
      "A Snort-based intrusion detection system deployed on CHARUSAT University's network. The system provides real-time threat detection with student IP allowlisting, automated IPS blocking for known malicious sources, and a live dashboard that replaced manual CMD log review by network staff.",
    challenge:
      "CHARUSAT's network had no automated intrusion detection — the only visibility was through manual review of raw Snort logs via CMD, which was too slow to catch active threats and required dedicated staff time. Student IP management and IP-based restrictions had no enforcement mechanism.",
    solution:
      "Deployed Snort with custom rules tuned for university network traffic patterns. Built student IP allowlisting logic to differentiate legitimate campus traffic from suspicious sources. Integrated Snort with an IPS mode to automatically block high-confidence malicious IPs. Developed a Python-based real-time logging dashboard that displays alerts, source IPs, and classification — eliminating the need for manual CMD review.",
    techStack: [
      { name: "Snort", description: "Core IDS/IPS engine with custom university-tuned rules" },
      { name: "Python", description: "Real-time alert processing and dashboard backend" },
      { name: "Dashboard UI", description: "Live alert visualization replacing manual CMD log review" },
      { name: "IP Allowlisting", description: "Student IP management and legitimate traffic classification" },
      { name: "IPS Integration", description: "Automated blocking of high-confidence threat sources" },
    ],
    outcomes: [
      "Real-time threat detection replacing manual log review for network staff",
      "Student IP allowlisting enforced — reduces false-positive alert volume",
      "IPS integration enables automated blocking without human intervention",
      "Dashboard reduces mean time to identify active intrusion events",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function generateSlugs(): string[] {
  return projects.map((p) => p.slug);
}
