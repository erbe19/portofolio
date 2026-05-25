"use client";

// ============================================================================
// FILE: components/About.tsx
// ============================================================================

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { topStrengths } from "@/lib/data";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 scroll-mt-24 transition-colors duration-300"
      style={{ background: "var(--bg-surface-alt)" }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Bio */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
            About Me
          </h2>
          <div className="w-16 h-1 rounded-full" style={{ background: "var(--accent)" }} />

          <p className="leading-relaxed text-lg" style={{ color: "var(--text-secondary)" }}>
            An Informatics Graduate passionate about{" "}
            <span className="font-bold" style={{ color: "var(--text-primary)" }}>
              Product Analysis, System Development,
            </span>{" "}
            and{" "}
            <span className="font-bold" style={{ color: "var(--text-primary)" }}>
              Digital Innovation.
            </span>
          </p>

          <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Experienced in translating business needs into structured digital solutions through
            workflow analysis, product documentation, cross-functional collaboration, system
            validation, and project planning across web, mobile, AI, and automation platforms.
          </p>

          <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Driven by analytical thinking and continuous learning, I focus on building scalable
            products that create measurable impact and solve real operational challenges through
            technology.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { value: "3.42", label: "GPA Score", accent: true },
              { value: "11+", label: "Projects", accent: false },
              { value: "8+", label: "Tech Skills", accent: false },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-3xl text-center"
                style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
              >
                <div
                  className="text-2xl font-black"
                  style={{ color: stat.accent ? "var(--accent)" : "var(--text-primary)" }}
                >
                  {stat.value}
                </div>
                <div className="text-[9px] font-bold uppercase tracking-widest mt-1"
                  style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Top Strengths */}
        <div className="space-y-3">
          <h3 className="text-xs font-black uppercase tracking-widest mb-5"
            style={{ color: "var(--text-muted)" }}>
            Top Strengths
          </h3>
          {topStrengths.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 rounded-2xl transition-colors"
              style={{
                background: "var(--bg-muted)",
                border: "1px solid var(--border)",
              }}
            >
              <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "var(--accent)" }} />
              <span className="font-semibold text-sm" style={{ color: "var(--text-secondary)" }}>
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
