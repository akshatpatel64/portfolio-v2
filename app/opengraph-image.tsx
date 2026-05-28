import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Akshat Patel — AI Engineer & Cybersecurity";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0d0d14",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Gradient orb — top right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(102,126,234,0.22) 0%, transparent 70%)",
          }}
        />
        {/* Gradient orb — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: 60,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(118,75,162,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 44,
              height: 2,
              background: "linear-gradient(90deg, #667eea, #764ba2)",
            }}
          />
          <div
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "#667eea",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            AI Engineer · Secure Agentic AI & Automation
          </div>
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            fontSize: 100,
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: 28,
            letterSpacing: "-0.025em",
          }}
        >
          <span style={{ color: "#f1f5f9" }}>Akshat&nbsp;</span>
          <span style={{ color: "#7c8cf8" }}>Patel</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 25,
            color: "#64748b",
            fontWeight: 400,
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Building secure AI systems at the intersection of agentic AI and
          cybersecurity.
        </div>

        {/* Bottom row */}
        <div
          style={{
            position: "absolute",
            bottom: 52,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            {[
              "AWS Certified Security",
              "CompTIA Security+",
              "MEng UMD",
            ].map((tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 13,
                  color: "#475569",
                  background: "rgba(102,126,234,0.08)",
                  border: "1px solid rgba(102,126,234,0.2)",
                  padding: "5px 14px",
                  borderRadius: 100,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 15, color: "#334155", fontWeight: 500 }}>
            Maryland Athletics
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
