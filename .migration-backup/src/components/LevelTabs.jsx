// ─────────────────────────────────────────────
// LevelTabs.jsx
// Responsibility: display level tabs + level info
// Used by: Academy.jsx (skill view)
// ─────────────────────────────────────────────

const LEVEL_STYLES = {
  Beginner:     { bg: "#052E16", border: "#16A34A", text: "#4ADE80" },
  Intermediate: { bg: "#1E3A5F", border: "#2563EB", text: "#60A5FA" },
  Advanced:     { bg: "#450A0A", border: "#DC2626", text: "#F87171" },
  Master:       { bg: "#431407", border: "#EA580C", text: "#FB923C" },
};

// Map any language name back to the English key for style lookup
function getLevelKey(name) {
  const map = {
    // French
    "Débutant": "Beginner",
    "Intermédiaire": "Intermediate",
    "Avancé": "Advanced",
    "Maître": "Master",
    // Arabic
    "مبتدئ": "Beginner",
    "متوسط": "Intermediate",
    "متقدم": "Advanced",
    "محترف": "Master",
    // English (passthrough)
    "Beginner": "Beginner",
    "Intermediate": "Intermediate",
    "Advanced": "Advanced",
    "Master": "Master",
  };
  return map[name] || "Beginner";
}

export default function LevelTabs({
  skill,
  language,
  activeLevelIdx,
  onSelectLevel,
  t,
}) {
  const isAr = language === "ar";
  const level = skill.levels[activeLevelIdx];
  const levelName = level.name[language];
  const key = getLevelKey(levelName);
  const ls = LEVEL_STYLES[key];

  return (
    <div style={{ direction: isAr ? "rtl" : "ltr" }}>

      {/* Tabs */}
      <div style={{
        display: "flex",
        gap: 8,
        marginBottom: 24,
        flexWrap: "wrap",
      }}>
        {skill.levels.map((l, i) => {
          const lName = l.name[language];
          const lKey = getLevelKey(lName);
          const lStyle = LEVEL_STYLES[lKey];
          const active = activeLevelIdx === i;
          return (
            <button
              key={i}
              onClick={() => onSelectLevel(i)}
              style={{
                background: active ? lStyle.bg : "transparent",
                border: `2px solid ${active ? lStyle.border : "#1C1C28"}`,
                borderRadius: 10,
                padding: "9px 16px",
                cursor: "pointer",
                color: active ? lStyle.text : "#4B5563",
                fontWeight: active ? 700 : 400,
                fontSize: 13,
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "all 0.15s",
              }}
            >
              {l.badge} {lName}
            </button>
          );
        })}
      </div>

      {/* Level info card */}
      <div style={{
        background: ls.bg,
        border: `1px solid ${ls.border}40`,
        borderRadius: 12,
        padding: 20,
        marginBottom: 24,
      }}>
        <div style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          marginBottom: 10,
        }}>
          <span style={{ fontSize: 30 }}>{level.badge}</span>
          <div>
            <div style={{
              fontSize: 20,
              fontWeight: 800,
              color: "#fff",
            }}>
              {levelName}
            </div>
            <div style={{ fontSize: 12, color: "#4B5563" }}>
              {level.duration[language]}
            </div>
          </div>
          <div style={{
            marginLeft: isAr ? 0 : "auto",
            marginRight: isAr ? "auto" : 0,
            background: "#00000030",
            borderRadius: 8,
            padding: "8px 14px",
            textAlign: "center",
          }}>
            <div style={{
              fontSize: 22,
              fontWeight: 800,
              color: ls.text,
            }}>
              {level.lessons.length}
            </div>
            <div style={{ fontSize: 10, color: "#4B5563" }}>
              {t.lessons}
            </div>
          </div>
        </div>
        <p style={{ color: "#6B7280", fontSize: 13, margin: 0 }}>
          <strong style={{ color: "#9CA3AF" }}>{t.goal}:</strong>{" "}
          {level.goal[language]}
        </p>
      </div>
    </div>
  );
}
