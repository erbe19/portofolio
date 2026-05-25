// ============================================================================
// FILE: lib/data.ts
// ============================================================================

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/rizky-bachtiar-528647306",
  github: "https://github.com/erbe19",
  email: "mailto:rbachtiar71@gmail.com",
};

export const sections = [
  { id: "home", label: "Beranda" },
  { id: "about", label: "Tentang" },
  { id: "skills", label: "Keahlian" },
  { id: "projects", label: "Proyek" },
  { id: "contact", label: "Kontak" },
];

// NOTE: skill icons (JSX) dipindahkan ke komponen Skills.tsx
// agar file data.ts murni TypeScript tanpa JSX dependency.
export const skillsData = [
  {
    name: "Fullstack Web",
    iconKey: "layout",
    details: "React.js, Laravel, PHP, TailwindCSS",
    level: "90%",
    color: "blue",
  },
  {
    name: "AI & ML",
    iconKey: "cpu",
    details: "Python, Machine Learning, Data Science",
    level: "85%",
    color: "purple",
  },
  {
    name: "Mobile Dev",
    iconKey: "globe",
    details: "Flutter, Mobile UI/UX",
    level: "75%",
    color: "emerald",
  },
];

export const projects = [
  {
    title: "General News & Article Portal",
    description:
      "Membangun portal berita lengkap dengan sistem manajemen konten selama magang di PT. Winnicode.",
    tech: ["React", "Laravel", "MySQL"],
    details:
      "Sistem mencakup dashboard admin, optimasi SEO, dan integrasi API otomatis.",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Real-time News App",
    description:
      "Aplikasi berita yang mengonsumsi data dari API eksternal secara real-time.",
    tech: ["JavaScript", "Tailwind", "REST API"],
    details: "Menggunakan fetching asinkron untuk update data tanpa refresh.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "AI Integration Project",
    description:
      "Implementasi Machine Learning menggunakan Python untuk analisis data.",
    tech: ["Python", "Scikit-Learn", "ML"],
    details: "Fokus pada pemrosesan data historis untuk prediksi tren.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

