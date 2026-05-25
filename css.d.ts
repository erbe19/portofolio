// ============================================================================
// FILE: css.d.ts  (taruh di root project, sejajar dengan tsconfig.json)
// FIX: Deklarasi module CSS agar TypeScript tidak error saat import .css
// ============================================================================
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}
