"use client";

// ============================================================================
// FILE: components/Contact.tsx
// ============================================================================

import React from "react";
import { SOCIAL_LINKS } from "@/lib/data";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-3xl mx-auto text-center space-y-8 p-12 rounded-[3rem] shadow-2xl"
        style={{
          background: "linear-gradient(135deg, var(--accent) 0%, #4f46e5 100%)",
          boxShadow: "0 24px 80px var(--shadow-accent)",
        }}
      >
        <h2 className="text-4xl md:text-5xl font-black text-white">
          Let&apos;s Work Together
        </h2>
        <p className="text-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
          Interested in collaborating or have a project in mind?
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={SOCIAL_LINKS.email}
            className="px-10 py-4 bg-white rounded-xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform shadow-lg"
            style={{ color: "var(--accent)" }}
          >
            Send Email
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-xl font-black uppercase text-xs tracking-widest transition-colors text-white"
            style={{ background: "rgba(0,0,0,0.25)" }}
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
