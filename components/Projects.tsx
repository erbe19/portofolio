"use client";

// ============================================================================
// FILE: components/Projects.tsx
// ============================================================================

import React from "react";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { projects } from "@/lib/data";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 scroll-mt-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
            Featured Projects
          </h2>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Selected work across product analysis, development & AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group p-7 rounded-[2rem] transition-all duration-300 flex flex-col gap-4"
              style={{
                background: "var(--bg-muted)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-hover)";
                (e.currentTarget as HTMLDivElement).style.background = "var(--bg-surface-alt)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLDivElement).style.background = "var(--bg-muted)";
              }}
            >
              {/* Header */}
              <div className="flex justify-between items-start">
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)", border: "1px solid var(--accent-border)" }}
                >
                  <Briefcase size={9} />
                  {p.role}
                </div>
                <ArrowUpRight
                  size={16}
                  className="transition-colors shrink-0"
                  style={{ color: "var(--text-muted)" }}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-black leading-tight" style={{ color: "var(--text-primary)" }}>
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
                {p.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg"
                    style={{
                      background: "var(--accent-soft)",
                      color: "var(--accent)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Details */}
              <p
                className="text-[10px] italic pt-3"
                style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}
              >
                {p.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
