// ─────────────────────────────────────────────
// Footer.jsx
// Responsibility: site footer with language text
// Used by: Academy.jsx, Landing.jsx
// ─────────────────────────────────────────────
import { translations } from "../data/translations";

export default function Footer({ language }) {
  const t = translations[language];

  return (
    <div style={{
      padding: "18px 24px",
      borderTop: "1px solid #111118",
      textAlign: "center",
      fontSize: 12,
      color: "#1F2937",
      background: "#060608",
      direction: language === "ar" ? "rtl" : "ltr",
    }}>
      {t.footer}
    </div>
  );
}
