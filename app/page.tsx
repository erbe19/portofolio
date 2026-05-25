"use client";

// ============================================================================
// FILE: app/page.tsx
// FIX: Perbaiki logika active section detection agar akurat di semua section,
//      termasuk section pendek seperti "kontak" di bagian bawah halaman.
// ============================================================================

import React, { useState, useEffect } from "react";
import { sections } from "@/lib/data";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Jika sudah di paling bawah halaman, paksa aktif section terakhir
      if (scrollY + windowHeight >= documentHeight - 10) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      // Cari section yang saat ini paling terlihat di viewport
      // dengan mengecek section mana yang titik tengahnya paling dekat
      // dengan 40% dari atas viewport
      const viewportTrigger = scrollY + windowHeight * 0.4;

      let currentSection = sections[0].id;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        if (element.offsetTop <= viewportTrigger) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Jalankan sekali saat mount untuk set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden transition-colors duration-300"
      style={{ background: "var(--bg-base)", color: "var(--text-primary)" }}
    >
      <Header
        scrolled={scrolled}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main className="relative z-10 pt-28 md:pt-32">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
