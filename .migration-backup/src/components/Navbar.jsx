// ─────────────────────────────────────────────
// Navbar.jsx
// Responsibility: language switcher + branding
// Used by: Academy.jsx, Landing.jsx
// ─────────────────────────────────────────────
import { translations } from "../data/translations";

function LangButton({ lang, current, onSelect }) {
  const active = current === lang;
  return (
    <button
      onClick={() => onSelect(lang)}
      style={{
        background: active ? "#7C3AED" : "transparent",
        border: `1px solid ${active ? "#7C3AED" : "#1C1C28"}`,
        color: active ? "#fff" : "#6B7280",
        borderRadius: 8,
        padding: "5px 12px",
        fontSize: 13,
        fontWeight: active ? 700 : 400,
        cursor: "pointer",
        transition: "all 0.15s",
      }}
    >
      {lang === "ar" ? "ع" : lang.toUpperCase()}
    </button>
  );
}

export default function Navbar({ language, setLanguage, showBack, onBack }) {
  const t = translations[language];
  const isAr = language === "ar";

  return (
    <nav
      style={{
        padding: "16px 24px",
        borderBottom: "1px solid #111118",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 10,
        background: "#060608",
        position: "sticky",
        top: 0,
        zIndex: 100,
        direction: isAr ? "rtl" : "ltr",
      }}
    >
      {/* Left: back button or brand */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {showBack && (
          <button
            onClick={onBack}
            style={{
              background: "transparent",
              border: "1px solid #1C1C28",
              color: "#6B7280",
              borderRadius: 8,
              padding: "6px 12px",
              cursor: "pointer",
              fontSize: 13,
            }}
          >
            {isAr ? "→" : "←"} {t.backSkills}
          </button>
        )}
        {!showBack && (
          <div style={{ fontWeight: 800, fontSize: 16, color: "#fff" }}>
            <span style={{ color: "#7C3AED" }}>Digital</span>Skills.dz
          </div>
        )}
      </div>

      {/* Right: language switcher */}
      <div style={{ display: "flex", gap: 6 }}>
        <LangButton lang="fr" current={language} onSelect={setLanguage} />
        <LangButton lang="ar" current={language} onSelect={setLanguage} />
        <LangButton lang="en" current={language} onSelect={setLanguage} />
      </div>
    </nav>
  );
}
