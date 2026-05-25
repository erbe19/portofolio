"use client";

// ============================================================================
// FILE: components/ThemeProvider.tsx
// FIX: Hapus guard "if (!mounted) return null" — itu yang menyebabkan
//      seluruh halaman hilang saat hydration. Ganti dengan sync state dari
//      data-theme attribute yang sudah diset inline script.
// ============================================================================

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // Baca dari data-theme yang sudah diset oleh inline script di layout.tsx
    const current = document.documentElement.getAttribute("data-theme") as Theme;
    if (current === "light" || current === "dark") {
      setTheme(current);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
