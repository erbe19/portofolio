"use client";

// ============================================================================
// FILE: components/About.tsx
// ============================================================================

import React from "react";
import { CheckCircle2 } from "lucide-react";

const softSkills = ["Leadership", "Problem Solving", "Adaptability", "Team Collaboration"];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 scroll-mt-24 transition-colors duration-300"
      style={{ background: "var(--bg-surface-alt)" }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
            About Me
          </h2>
          <div className="w-16 h-1 rounded-full" style={{ background: "var(--accent)" }} />
          <p className="leading-relaxed text-lg" style={{ color: "var(--text-secondary)" }}>
          Saya adalah seorang developer yang percaya bahwa teknologi bukan hanya tentang menulis kode, 
          tetapi tentang menciptakan solusi yang memberi dampak nyata. Berbekal pengalaman di pengembangan web, 
          analisis sistem, dan kolaborasi produk, saya terus belajar dan berkembang untuk membangun aplikasi yang inovatif, scalable, dan user-friendly.
            {/* Lulusan Teknik Informatika dari{" "}
            <span className="font-bold" style={{ color: "var(--text-primary)" }}>ITENAS Bandung</span>{" "}
            dengan IPK 3.42. Memiliki pengalaman sebagai Fullstack Developer selama magang di{" "}
            <span className="font-bold" style={{ color: "var(--text-primary)" }}>PT. Winnicode Garuda Teknologi</span>. */}
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { value: "3.42", label: "GPA Score", accent: true },
              { value: "10+", label: "Projects Done", accent: false },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-3xl"
                style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
              >
                <div
                  className="text-3xl font-black"
                  style={{ color: stat.accent ? "var(--accent)" : "var(--text-primary)" }}
                >
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest mt-1"
                  style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {softSkills.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-5 rounded-2xl transition-colors"
              style={{
                background: "var(--bg-muted)",
                border: "1px solid var(--border)",
              }}
            >
              <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: "var(--accent)" }} />
              <span className="font-bold" style={{ color: "var(--text-secondary)" }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
