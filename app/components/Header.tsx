"use client";

// ============================================================================
// FILE: components/Header.tsx
// ============================================================================

import React, { useState, useEffect, useRef } from "react";
import { Terminal, Menu, X, Sun, Moon } from "lucide-react";
import { sections } from "@/lib/data";
import { useTheme } from "@/components/ThemeProvider";

interface HeaderProps {
  scrolled: boolean;
  activeSection: string;
  scrollToSection: (id: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header = ({
  scrolled,
  activeSection,
  scrollToSection,
  isMenuOpen,
  setIsMenuOpen,
}: HeaderProps) => {
  const { theme, toggleTheme } = useTheme();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const activeEl = navRefs.current[activeSection];
    if (activeEl && !isMenuOpen) {
      setIndicatorStyle({ left: activeEl.offsetLeft, width: activeEl.offsetWidth, opacity: 1 });
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeSection, isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-100 transition-all duration-300 px-4 py-6">
      <div
        className="max-w-6xl mx-auto flex items-center justify-between px-8 py-3 rounded-full border transition-all duration-300"
        style={{
          background: scrolled ? "var(--nav-bg)" : "transparent",
          borderColor: scrolled ? "var(--border)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.12)" : "none",
        }}
      >
        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Terminal className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-black tracking-tighter" style={{ color: "var(--text-primary)" }}>
              ERBE<span className="text-accent">.</span>
            </span>
            <span className="text-[8px] font-bold tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
              Portfolio 2025
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 relative">
          <div
            className="absolute h-10 rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{
              ...indicatorStyle,
              background: "var(--accent-soft)",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "var(--accent-border)",
            }}
          />
          {sections.map((item) => (
            <button
              key={item.id}
              ref={(el) => { navRefs.current[item.id] = el; }}
              onClick={() => scrollToSection(item.id)}
              className="relative z-10 text-[10px] font-bold tracking-widest uppercase px-4 py-2 transition-all"
              style={{
                color: activeSection === item.id ? "var(--accent)" : "var(--text-secondary)",
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right: Theme toggle + mobile menu */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
            style={{
              background: "var(--bg-surface-alt)",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            style={{ color: "var(--text-primary)" }}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="absolute top-24 left-4 right-4 p-6 rounded-3xl md:hidden animate-in fade-in slide-in-from-top-4"
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border)",
          }}
        >
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full text-center py-4 text-xs font-bold uppercase tracking-widest transition-colors"
              style={{ color: "var(--text-secondary)" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
