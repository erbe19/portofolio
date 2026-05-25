"use client";

// ============================================================================
// FILE: components/Footer.tsx
// ============================================================================

import React from "react";
import { SOCIAL_LINKS } from "@/lib/data";

const Footer = () => {
  return (
    <footer
      className="py-12 px-6 transition-colors duration-300"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-xl font-black tracking-tighter" style={{ color: "var(--text-primary)" }}>
          ERBE<span style={{ color: "var(--accent)" }}>.</span>
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]"
          style={{ color: "var(--text-muted)" }}>
          © 2025 RIZKY BACHTIAR. ALL RIGHTS RESERVED.
        </span>
        <div className="flex gap-6">
          {[
            { href: SOCIAL_LINKS.github, label: "Github" },
            { href: SOCIAL_LINKS.linkedin, label: "Linkedin" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase text-[10px] font-black tracking-widest transition-colors"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
