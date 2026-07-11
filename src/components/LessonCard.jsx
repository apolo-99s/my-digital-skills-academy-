// ─────────────────────────────────────────────
// LessonCard.jsx
// Responsibility: single lesson row in skill view
// Used by: Academy.jsx (skill view)
// ─────────────────────────────────────────────

export default function LessonCard({
  lesson,
  index,
  language,
  skill,
  onClick,
}) {
  const isAr = language === "ar";

  return (
    <div
      onClick={onClick}
      style={{
        background: "#0D0D14",
        border: "1px solid #1C1C28",
        borderRadius: 12,
        padding: "18px 20px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 14,
        transition: "all 0.15s",
        direction: isAr ? "rtl" : "ltr",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = skill.color + "66";
        e.currentTarget.style.background = "#111118";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "#1C1C28";
        e.currentTarget.style.background = "#0D0D14";
      }}
    >
      {/* Number badge */}
      <span style={{
        width: 32,
        height: 32,
        background: skill.color + "22",
        border: `1px solid ${skill.color}44`,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        color: skill.accent,
        fontWeight: 700,
        flexShrink: 0,
      }}>
        {index + 1}
      </span>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <div style={{
          fontWeight: 600,
          fontSize: 15,
          color: "#E5E7EB",
          marginBottom: 3,
        }}>
          {lesson.title[language]}
        </div>
        <div style={{ fontSize: 12, color: "#4B5563" }}>
          {lesson.steps[language].length} steps · includes exercise
        </div>
      </div>

      {/* Arrow */}
      <span style={{
        color: "#374151",
        fontSize: 20,
        flexShrink: 0,
        transform: isAr ? "rotate(180deg)" : "none",
      }}>
        →
      </span>
    </div>
  );
}
