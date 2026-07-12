// ─────────────────────────────────────────────
// SkillCard.jsx
// Responsibility: display one skill on home page
// Used by: Academy.jsx (home view)
// ─────────────────────────────────────────────
import { translations } from "../data/translations";

export default function SkillCard({ skill, language, onClick }) {
  const t = translations[language];
  const isAr = language === "ar";

  return (
    <div
      onClick={onClick}
      style={{
        background: skill.bg,
        border: `2px solid ${skill.color}30`,
        borderRadius: 16,
        padding: 26,
        cursor: "pointer",
        transition: "all 0.2s",
        direction: isAr ? "rtl" : "ltr",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = skill.color;
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = skill.color + "30";
        e.currentTarget.style.transform = "none";
      }}
    >
      {/* Icon */}
      <div style={{ fontSize: 44, marginBottom: 14 }}>{skill.icon}</div>

      {/* Subtitle */}
      <div style={{
        fontSize: 10,
        color: skill.accent,
        letterSpacing: 2,
        textTransform: "uppercase",
        marginBottom: 6,
      }}>
        {skill.subtitle[language]}
      </div>

      {/* Title */}
      <h2 style={{
        fontSize: 22,
        fontWeight: 800,
        color: "#fff",
        margin: "0 0 8px",
      }}>
        {skill.title[language]}
      </h2>

      {/* Tagline */}
      <p style={{
        color: "#6B7280",
        fontSize: 13,
        lineHeight: 1.5,
        margin: "0 0 18px",
      }}>
        {skill.tagline[language]}
      </p>

      {/* Stats */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        marginBottom: 18,
        borderTop: "1px solid #ffffff10",
        paddingTop: 14,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
          <span style={{ color: "#4B5563" }}>{t.firstClient}</span>
          <span style={{ color: skill.accent, fontWeight: 600 }}>
            {skill.firstClient[language]}
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
          <span style={{ color: "#4B5563" }}>{t.earningRange}</span>
          <span style={{ color: skill.accent, fontWeight: 600, fontSize: 11 }}>
            {skill.earning}
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
          <span style={{ color: "#4B5563" }}>{t.startWith}</span>
          <span style={{ color: "#9CA3AF", fontSize: 11 }}>{skill.startTool}</span>
        </div>
      </div>

      {/* CTA */}
      <div style={{
        background: skill.color,
        borderRadius: 8,
        padding: "10px",
        textAlign: "center",
        fontWeight: 700,
        fontSize: 14,
        color: "#fff",
      }}>
        {t.startLearning}
      </div>
    </div>
  );
}
