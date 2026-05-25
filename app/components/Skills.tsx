"use client";

// ============================================================================
// FILE: components/Skills.tsx
// ============================================================================

import React from "react";
import { Cpu, Globe, Layout } from "lucide-react";
import { skillsData } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  layout: <Layout className="w-6 h-6" />,
  cpu: <Cpu className="w-6 h-6" />,
  globe: <Globe className="w-6 h-6" />,
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 scroll-mt-24 transition-colors duration-300"
      style={{ background: "var(--bg-surface-alt)" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16 tracking-tight"
          style={{ color: "var(--text-primary)" }}>
          Tech Stack
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skillsData.map((s, i) => (
            <div
              key={i}
              className="p-8 rounded-[2.5rem] flex flex-col items-center text-center group transition-all duration-300"
              style={{
                background: "var(--bg-muted)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent-border)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{
                  background: "var(--bg-surface)",
                  color: "var(--accent)",
                  border: "1px solid var(--border)",
                }}
              >
                {iconMap[s.iconKey]}
              </div>
              <h4 className="text-xl font-black mb-2" style={{ color: "var(--text-primary)" }}>
                {s.name}
              </h4>
              <p className="text-xs mb-6 uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                {s.details}
              </p>
              <div className="w-full h-1.5 rounded-full overflow-hidden"
                style={{ background: "var(--border)" }}>
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ width: s.level, background: "var(--accent)" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
