"use client";

// ============================================================================
// FILE: components/Hero.tsx
// ============================================================================

import React from "react";
import { Linkedin, Mail, ChevronRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center px-6 overflow-hidden scroll-mt-32"
    >
      <div className="absolute top-1/4 -left-20 w-96 h-96 blur-[120px] rounded-full"
        style={{ background: "rgba(59,130,246,0.08)" }} />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 blur-[120px] rounded-full"
        style={{ background: "rgba(99,102,241,0.08)" }} />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left */}
        <div className="space-y-8 relative z-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
            style={{ background: "var(--bg-surface-alt)", border: "1px solid var(--border)" }}
          >
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
            <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>
              Product Analyst · System Analyst · Developer
            </span>
          </div>

          <div className="relative">
            <h1 className="text-8xl md:text-[9rem] font-black leading-[0.85] tracking-tighter italic"
              style={{ color: "var(--text-primary)" }}>
              RIZKY
            </h1>
            <h1 className="text-6xl md:text-[5rem] font-black leading-[0.85] tracking-tighter italic"
              style={{ color: "var(--text-primary)" }}>
              BACHTIAR
            </h1>
            <div className="absolute -inset-4 rounded-2xl -z-10 opacity-40"
              style={{ border: "1px solid var(--accent-border)" }} />
          </div>

          <p className="text-xl md:text-2xl max-w-lg leading-snug" style={{ color: "var(--text-secondary)" }}>
            Bridging{" "}
            <span className="font-bold" style={{ color: "var(--text-primary)" }}>Business Needs</span>
            {" "}with{" "}
            <span className="font-bold" style={{ color: "var(--text-primary)" }}>Digital Solutions</span>
            {" "}through product analysis, system development & AI.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="group flex items-center gap-3 px-8 py-4 text-white rounded-xl font-bold transition-all"
              style={{ background: "var(--accent)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "0 0 24px var(--shadow-accent)")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "none")}
            >
              <span className="text-xs uppercase tracking-widest">View My Work</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex gap-3">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-4 rounded-xl transition-all"
                style={{ background: "var(--bg-surface-alt)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>
                <Linkedin size={20} />
              </a>
              <a href={SOCIAL_LINKS.email}
                className="p-4 rounded-xl transition-all"
                style={{ background: "var(--bg-surface-alt)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="relative flex justify-center items-center z-10">
          <div
            className="absolute inset-0 border border-dashed rounded-full animate-[spin_20s_linear_infinite] scale-110"
            style={{ borderColor: "var(--border)" }}
          />
          <div
            className="relative w-full max-w-112.5 aspect-4/5 rounded-[4rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700"
            style={{ border: "1px solid var(--border)", background: "var(--bg-surface-alt)" }}
          >
            <img
              src="\images\rb.jpg"
              alt="Rizky Bachtiar"
              className="w-full h-full object-cover brightness-90 contrast-110 transition-all duration-700"
              style={{ filter: "grayscale(100%)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%) brightness(1) contrast(1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLImageElement).style.filter = "grayscale(100%) brightness(0.9) contrast(1.1)";
              }}
            />
            <div
              className="absolute inset-0 flex items-end p-6 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }}
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-white/70">
                Rizky Bachtiar
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
