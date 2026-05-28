import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getProjectBySlug, generateSlugs } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return generateSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Akshat Patel`,
    description: project.summary,
  };
}

const techTags = new Set(["professional", "academic", "hobby"]);

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const displayTags = project.tags.filter((t) => !techTags.has(t));

  return (
    <div
      style={{ background: "#0d0d14", minHeight: "100vh", color: "#f1f5f9" }}
    >
      {/* Top nav bar */}
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          background: "rgba(13,13,20,0.85)",
          backdropFilter: "blur(12px)",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: "768px",
            margin: "0 auto",
            padding: "0 24px",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              color: "#94a3b8",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            className="hover:text-white"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            All Projects
          </Link>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AK
          </span>
        </div>
      </div>

      {/* Article */}
      <article
        style={{
          maxWidth: "768px",
          margin: "0 auto",
          padding: "64px 24px 96px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          {/* Tags */}
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}
          >
            {displayTags.map((t) => (
              <span
                key={t}
                style={{
                  padding: "4px 12px",
                  borderRadius: "4px",
                  fontSize: "11px",
                  fontWeight: 500,
                  background: "rgba(102,126,234,0.1)",
                  border: "1px solid rgba(102,126,234,0.2)",
                  color: "#667eea",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(26px, 5vw, 38px)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#f1f5f9",
              marginBottom: "16px",
            }}
          >
            {project.name}
          </h1>

          {/* Meta */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px 16px",
              fontSize: "14px",
              color: "#64748b",
            }}
          >
            <span style={{ color: "#94a3b8", fontWeight: 500 }}>{project.role}</span>
            <span>·</span>
            <span>{project.period}</span>
          </div>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(102,126,234,0.3) 0%, transparent 100%)",
              marginTop: "32px",
            }}
          />
        </div>

        {/* Overview */}
        <Section label="Overview">
          <p style={{ color: "#cbd5e1", lineHeight: 1.8, fontSize: "16px" }}>
            {project.overview}
          </p>
        </Section>

        {/* Challenge */}
        <Section label="The Challenge">
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "15px" }}>
            {project.challenge}
          </p>
        </Section>

        {/* Solution */}
        <Section label="The Solution">
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "15px" }}>
            {project.solution}
          </p>
        </Section>

        {/* Tech Stack */}
        <Section label="Tech Stack">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {project.techStack.map((t) => (
              <div
                key={t.name}
                style={{
                  display: "flex",
                  gap: "12px",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#7c8cf8",
                    flexShrink: 0,
                    minWidth: "140px",
                  }}
                >
                  {t.name}
                </span>
                <span style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.5 }}>
                  {t.description}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* Outcomes */}
        <Section label="Outcomes">
          <ul style={{ display: "flex", flexDirection: "column", gap: "10px", padding: 0, margin: 0, listStyle: "none" }}>
            {project.outcomes.map((o) => (
              <li
                key={o}
                style={{
                  display: "flex",
                  gap: "12px",
                  fontSize: "14px",
                  color: "#94a3b8",
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: "#667eea", flexShrink: 0, marginTop: "2px" }}>
                  ▸
                </span>
                {o}
              </li>
            ))}
          </ul>
        </Section>

        {/* External link */}
        <div style={{ marginTop: "56px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <Link
            href="/#projects"
            style={{
              fontSize: "14px",
              color: "#475569",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
            className="hover:text-slate-300"
          >
            ← Back to all projects
          </Link>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 22px",
              borderRadius: "100px",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "white",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            View Artifact ↗
          </a>
        </div>
      </article>
    </div>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: "40px" }}>
      <h2
        style={{
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#334155",
          marginBottom: "16px",
        }}
      >
        {label}
      </h2>
      {children}
    </section>
  );
}
