// ============================================================================
// FILE: app/layout.tsx
// FIX: tambah suppressHydrationWarning di <html> agar React tidak complaint
//      saat inline script mengubah data-theme sebelum hydration selesai.
// ============================================================================

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rizky Bachtiar — Portfolio 2025",
  description:
    "Informatics Graduate & AI Enthusiast. Fullstack Developer specializing in React, Laravel, and Machine Learning.",
};

const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      var theme = (stored === 'light' || stored === 'dark') ? stored : 'dark';
      document.documentElement.setAttribute('data-theme', theme);
    } catch(e) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  })();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
