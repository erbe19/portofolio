"use client";

// ============================================================================
// FILE: components/Projects.tsx
// ============================================================================

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 scroll-mt-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16 tracking-tight"
          style={{ color: "var(--text-primary)" }}>
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group p-8 rounded-[2.5rem] transition-all duration-300"
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
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-md"
                      style={{
                        background: "var(--accent-soft)",
                        color: "var(--accent)",
                        border: "1px solid var(--accent-border)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ArrowUpRight
                  className="transition-colors shrink-0 ml-2"
                  style={{ color: "var(--text-muted)" }}
                />
              </div>
              <h3 className="text-2xl font-black mb-4" style={{ color: "var(--text-primary)" }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                {p.description}
              </p>
              <p
                className="text-[10px] italic pt-4"
                style={{
                  color: "var(--text-muted)",
                  borderTop: "1px solid var(--border)",
                }}
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
