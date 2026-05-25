// ============================================================================
// FILE: lib/data.ts
// ============================================================================

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/rizky-bachtiar-528647306",
  github: "https://github.com/erbe19",
  email: "https://mail.google.com/mail/?view=cm&to=rbachtiar71@gmail.com",
};

export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const projects = [
  {
    title: "Pilar Project Management System",
    role: "Product Analyst / System Analyst",
    description:
      "Analisis sistem manajemen proyek lapangan mencakup workflow observasi, discovery meeting stakeholder, dan mapping laporan harian, QC, budgeting, serta supplier flow.",
    tech: ["System Analysis", "Workflow Mapping", "PRD", "Timeline Planning"],
    details: "Requirement gathering & process optimization untuk sistem manajemen proyek skala enterprise.",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Digispace YDSF — HRIS System",
    role: "Product Coordinator / QA Support",
    description:
      "Koordinasi pengembangan sistem HRIS & Employee Management, mencakup bug validation, feedback client, dan monitoring development milestone.",
    tech: ["Product Coordination", "QA", "HRIS", "Stakeholder Comm."],
    details: "Progress sync meeting, dokumentasi, dan validasi fitur sistem pengelolaan karyawan.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Cekat AI Implementation",
    role: "AI Product Support / Technical Documentation",
    description:
      "Mendukung implementasi produk AI — meliputi product progress reporting, meeting documentation, dan technical coordination lintas tim.",
    tech: ["AI Product", "Documentation", "Technical Comm.", "Coordination"],
    details: "AI workflow testing, knowledge base management, dan conversational AI validation.",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Portfolio Website",
    role: "Fullstack Frontend Developer",
    description:
      "Membangun portfolio website profesional dengan Next.js, dark/light mode, smooth scrolling, dan animasi modern menggunakan Tailwind CSS.",
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    details: "Responsive design, section navigation, UI debugging, dan Next.js troubleshooting end-to-end.",
    gradient: "from-sky-500/20 to-cyan-500/20",
  },
  {
    title: "Laravel News Portal CMS",
    role: "Fullstack Developer",
    description:
      "Membangun portal berita lengkap dengan sistem manajemen konten — CRUD berita, category & user management, dynamic pages, dan dashboard admin.",
    tech: ["Laravel", "MySQL", "PHP", "Dashboard"],
    details: "Sistem mencakup menu management, optimasi SEO, dan integrasi API otomatis.",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Sales Analytics Dashboard",
    role: "Data Analyst / Developer",
    description:
      "Dashboard analitik penjualan berbasis Python dengan visualisasi data interaktif, time-series decomposition, dan business recommendation insight.",
    tech: ["Python", "Dash", "Plotly", "Pandas"],
    details: "Sales trend analysis, product performance insights, dan prediksi tren berbasis ML.",
    gradient: "from-rose-500/20 to-pink-500/20",
  },
];

export const skillsData = [
  {
    name: "Product & System Analysis",
    iconKey: "clipboard",
    details: "PRD Writing · Requirement Gathering · Workflow Mapping · Business Process Analysis",
    level: "92%",
    color: "blue",
  },
  {
    name: "Project Planning",
    iconKey: "gantt",
    details: "Timeline Planning · Gantt Chart · WBS · Manhours Estimation · Sprint Tracking",
    level: "88%",
    color: "indigo",
  },
  {
    name: "QA & Software Testing",
    iconKey: "check",
    details: "Functional Testing · UAT · Bug Tracking · Regression Testing · Feature Validation",
    level: "85%",
    color: "emerald",
  },
  {
    name: "AI & Automation",
    iconKey: "cpu",
    details: "AI Product Implementation · Workflow Testing · Conversational AI · Prompt Analysis",
    level: "80%",
    color: "purple",
  },
  {
    name: "Frontend Development",
    iconKey: "layout",
    details: "Next.js · React · TypeScript · TailwindCSS · Framer Motion · Responsive UI",
    level: "82%",
    color: "sky",
  },
  {
    name: "Backend & Data",
    iconKey: "database",
    details: "Laravel · PHP · Python · Dash · Pandas · MySQL · REST API",
    level: "75%",
    color: "rose",
  },
];

export const topStrengths = [
  "System Analysis",
  "Product Requirement Analysis",
  "Project Coordination",
  "Software Testing & QA",
  "AI Product Support",
  "Business Workflow Mapping",
  "Technical Documentation",
  "Laravel & Modern Web Dev",
];
