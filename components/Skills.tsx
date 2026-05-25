"use client";

// ============================================================================
// FILE: components/Skills.tsx
// ============================================================================

import React from "react";
import { Cpu, Layout, Database, ClipboardList, CheckSquare, BarChart2 } from "lucide-react";
import { skillsData } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  clipboard: <ClipboardList className="w-6 h-6" />,
  gantt:     <BarChart2 className="w-6 h-6" />,
  check:     <CheckSquare className="w-6 h-6" />,
  cpu:       <Cpu className="w-6 h-6" />,
  layout:    <Layout className="w-6 h-6" />,
  database:  <Database className="w-6 h-6" />,
};

const colorMap: Record<string, string> = {
  blue:   "var(--accent)",
  indigo: "#818cf8",
  emerald:"#34d399",
  purple: "#a78bfa",
  sky:    "#38bdf8",
  rose:   "#fb7185",
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 scroll-mt-24 transition-colors duration-300"
      style={{ background: "var(--bg-surface-alt)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
            Skills & Expertise
          </h2>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Core competencies across product, development & analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((s, i) => (
            <div
              key={i}
              className="p-7 rounded-[2rem] flex flex-col gap-4 group transition-all duration-300"
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
              {/* Icon + Name row */}
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    color: colorMap[s.color] ?? "var(--accent)",
                  }}
                >
                  {iconMap[s.iconKey]}
                </div>
                <h4 className="text-base font-black leading-tight" style={{ color: "var(--text-primary)" }}>
                  {s.name}
                </h4>
              </div>

              {/* Details */}
              <p className="text-[11px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {s.details}
              </p>

              {/* Progress bar */}
              <div className="space-y-1.5 mt-auto">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold uppercase tracking-widest"
                    style={{ color: "var(--text-muted)" }}>Proficiency</span>
                  <span className="text-[10px] font-black"
                    style={{ color: colorMap[s.color] ?? "var(--accent)" }}>{s.level}</span>
                </div>
                <div className="w-full h-1.5 rounded-full overflow-hidden"
                  style={{ background: "var(--border)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: s.level, background: colorMap[s.color] ?? "var(--accent)" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
