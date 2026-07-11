// ─────────────────────────────────────────────
// LessonView.jsx
// Responsibility: full lesson content display
// Used by: Academy.jsx (lesson view)
// ─────────────────────────────────────────────
import { useState } from "react";

const LEVEL_STYLES = {
  Beginner:     { bg: "#052E16", border: "#16A34A", text: "#4ADE80", badge: "🌱" },
  Intermediate: { bg: "#1E3A5F", border: "#2563EB", text: "#60A5FA", badge: "⚡" },
  Advanced:     { bg: "#450A0A", border: "#DC2626", text: "#F87171", badge: "🔥" },
  Master:       { bg: "#431407", border: "#EA580C", text: "#FB923C", badge: "👑" },
};

function getLevelKey(name) {
  const map = {
    "Débutant": "Beginner", "Intermédiaire": "Intermediate",
    "Avancé": "Advanced", "Maître": "Master",
    "مبتدئ": "Beginner", "متوسط": "Intermediate",
    "متقدم": "Advanced", "محترف": "Master",
    "Beginner": "Beginner", "Intermediate": "Intermediate",
    "Advanced": "Advanced", "Master": "Master",
  };
  return map[name] || "Beginner";
}

// ── Image component with mixed layouts ────────
function LessonImage({ src, alt, layout, isMobile }) {
  const isTop = layout === "top" || isMobile;
  return (
    <div style={{
      width: isTop ? "100%" : "38%",
      flexShrink: 0,
      borderRadius: 12,
      overflow: "hidden",
      marginBottom: isTop ? 20 : 0,
    }}>
      <img
        src={src}
        alt={alt || "lesson"}
        loading="lazy"
        style={{
          width: "100%",
          height: isTop ? 220 : "100%",
          minHeight: isTop ? "auto" : 220,
          objectFit: "cover",
          display: "block",
          borderRadius: 12,
        }}
      />
    </div>
  );
}

export default function LessonView({
  skill,
  level,
  lesson,
  lessonIdx,
  totalLessons,
  language,
  t,
  onBack,
  onPrev,
  onNext,
  onNextLevel,
  hasNextLesson,
  hasPrevLesson,
  hasNextLevel,
  nextLevelName,
}) {
  const [openStep, setOpenStep] = useState(null);
  const isAr = language === "ar";
  const isMobile = window.innerWidth < 640;

  const levelName = level.name[language];
  const key = getLevelKey(levelName);
  const ls = LEVEL_STYLES[key];

  const steps = lesson.steps[language];
  const method = lesson.method[language];
  const exercise = lesson.exercise[language];
  const tip = lesson.tip[language];
  const layout = lesson.layout || "top";
  const showImageLeft = layout === "left" && !isMobile;
  const showImageRight = layout === "right" && !isMobile;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#060608",
        color: "#E5E7EB",
        fontFamily: "system-ui, sans-serif",
        direction: isAr ? "rtl" : "ltr",
      }}
    >
      {/* Sticky top bar */}
      <div style={{
        background: "#0A0A12",
        borderBottom: "1px solid #1C1C28",
        padding: "14px 20px",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}>
        <div style={{
          maxWidth: 780,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexWrap: "wrap",
        }}>
          <button
            onClick={onBack}
            style={{
              background: "transparent",
              border: "1px solid #1C1C28",
              color: "#6B7280",
              borderRadius: 8,
              padding: "6px 11px",
              cursor: "pointer",
              fontSize: 12,
            }}
          >
            {isAr ? "→" : "←"} {t.back}
          </button>
          <span style={{ fontSize: 16 }}>{skill.icon}</span>
          <span style={{ fontSize: 12, color: "#4B5563" }}>
            {skill.title[language]}
          </span>
          <span style={{ fontSize: 12, color: "#4B5563" }}>/</span>
          <span style={{ fontSize: 12, color: ls.text }}>{levelName}</span>
          <span style={{
            marginLeft: isAr ? 0 : "auto",
            marginRight: isAr ? "auto" : 0,
            fontSize: 12,
            color: "#374151",
          }}>
            {t.lesson} {lessonIdx + 1} {t.of} {totalLessons}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "32px 20px 60px" }}>

        {/* Level badge + title */}
        <div style={{ marginBottom: 28 }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 12,
          }}>
            <span style={{
              background: ls.bg,
              border: `1px solid ${ls.border}`,
              borderRadius: 8,
              padding: "4px 12px",
              fontSize: 12,
              color: ls.text,
              fontWeight: 600,
            }}>
              {ls.badge} {levelName}
            </span>
            <span style={{ color: "#374151", fontSize: 12 }}>
              {t.lesson} {lessonIdx + 1}
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(20px, 4vw, 28px)",
            fontWeight: 800,
            color: "#fff",
            margin: "0 0 10px",
            lineHeight: 1.25,
          }}>
            {lesson.title[language]}
          </h1>
        </div>

        {/* Image top layout */}
        {lesson.image && layout === "top" && (
          <LessonImage
            src={lesson.image}
            alt={lesson.title[language]}
            layout="top"
            isMobile={isMobile}
          />
        )}

        {/* HOW TO STEPS */}
        <div style={{ marginBottom: 28 }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 16,
          }}>
            <div style={{
              width: 4,
              height: 20,
              background: skill.color,
              borderRadius: 2,
            }} />
            <span style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}>
              {t.howTo}
            </span>
          </div>

          {/* Image left/right layout wrapper */}
          <div style={{
            display: showImageLeft || showImageRight ? "flex" : "block",
            gap: 20,
            alignItems: "flex-start",
            flexDirection: showImageRight ? "row-reverse" : "row",
          }}>
            {/* Side image */}
            {lesson.image && (showImageLeft || showImageRight) && (
              <LessonImage
                src={lesson.image}
                alt={lesson.title[language]}
                layout={layout}
                isMobile={false}
              />
            )}

            {/* Steps list */}
            <div style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}>
              {steps.map((step, i) => {
                const isOpen = openStep === i;
                return (
                  <div
                    key={i}
                    style={{
                      background: "#0D0D14",
                      border: `1px solid ${isOpen ? skill.color + "60" : "#1C1C28"}`,
                      borderRadius: 10,
                      overflow: "hidden",
                      transition: "border-color 0.15s",
                    }}
                  >
                    <button
                      onClick={() => setOpenStep(isOpen ? null : i)}
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        padding: "14px 16px",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        cursor: "pointer",
                        textAlign: isAr ? "right" : "left",
                      }}
                    >
                      {/* Step number */}
                      <span style={{
                        width: 24,
                        height: 24,
                        background: isOpen ? skill.color : "#1C1C28",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        color: isOpen ? "#fff" : "#4B5563",
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: 1,
                      }}>
                        {i + 1}
                      </span>

                      {/* Preview text */}
                      <span style={{
                        fontSize: 14,
                        color: isOpen ? "#fff" : "#9CA3AF",
                        flex: 1,
                        lineHeight: 1.5,
                        fontWeight: isOpen ? 600 : 400,
                      }}>
                        {step.length > 80 && !isOpen
                          ? step.substring(0, 80) + "…"
                          : step}
                      </span>

                      {/* Toggle */}
                      <span style={{
                        color: "#374151",
                        fontSize: 16,
                        flexShrink: 0,
                        marginTop: 2,
                      }}>
                        {isOpen ? "▲" : "▼"}
                      </span>
                    </button>

                    {/* Expanded content */}
                    {isOpen && (
                      <div style={{
                        padding: isAr
                          ? "0 52px 16px 16px"
                          : "0 16px 16px 52px",
                      }}>
                        <p style={{
                          color: "#9CA3AF",
                          fontSize: 14,
                          lineHeight: 1.75,
                          margin: 0,
                        }}>
                          {step}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Best way to learn */}
        <div style={{
          background: "#0A0E18",
          border: `1px solid ${skill.color}30`,
          borderRadius: 12,
          padding: 20,
          marginBottom: 20,
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 12,
          }}>
            <span style={{ fontSize: 18 }}>🧠</span>
            <span style={{
              fontSize: 13,
              fontWeight: 700,
              color: skill.accent,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}>
              {t.bestWay}
            </span>
          </div>
          <p style={{
            color: "#9CA3AF",
            fontSize: 14,
            lineHeight: 1.75,
            margin: 0,
          }}>
            {method}
          </p>
        </div>

        {/* Exercise */}
        <div style={{
          background: "#0E0A00",
          border: "1px solid #92400E40",
          borderRadius: 12,
          padding: 20,
          marginBottom: 20,
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 12,
          }}>
            <span style={{ fontSize: 18 }}>💪</span>
            <span style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#FCD34D",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}>
              {t.exercise}
            </span>
          </div>
          <p style={{
            color: "#D97706",
            fontSize: 14,
            lineHeight: 1.75,
            margin: 0,
          }}>
            {exercise}
          </p>
        </div>

        {/* Tip */}
        {tip && (
          <div style={{
            background: "#0A100A",
            border: "1px solid #16A34A30",
            borderRadius: 10,
            padding: 16,
            marginBottom: 28,
          }}>
            <p style={{
              color: "#6B7280",
              fontSize: 13,
              lineHeight: 1.65,
              margin: 0,
            }}>
              {tip}
            </p>
          </div>
        )}

        {/* Navigation */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 10,
          flexWrap: "wrap",
        }}>
          {/* Prev */}
          {hasPrevLesson ? (
            <button
              onClick={onPrev}
              style={{
                background: "#0D0D14",
                border: "1px solid #1C1C28",
                borderRadius: 10,
                padding: "12px 18px",
                cursor: "pointer",
                color: "#6B7280",
                fontSize: 13,
              }}
            >
              {isAr ? "→" : "←"} {t.prevLesson}
            </button>
          ) : (
            <button
              onClick={onBack}
              style={{
                background: "#0D0D14",
                border: "1px solid #1C1C28",
                borderRadius: 10,
                padding: "12px 18px",
                cursor: "pointer",
                color: "#6B7280",
                fontSize: 13,
              }}
            >
              {isAr ? "→" : "←"} {t.back}
            </button>
          )}

          {/* Next */}
          {hasNextLesson ? (
            <button
              onClick={onNext}
              style={{
                background: skill.color,
                border: "none",
                borderRadius: 10,
                padding: "12px 20px",
                cursor: "pointer",
                color: "#fff",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              {t.nextLesson} {isAr ? "←" : "→"}
            </button>
          ) : hasNextLevel ? (
            <button
              onClick={onNextLevel}
              style={{
                background: skill.color,
                border: "none",
                borderRadius: 10,
                padding: "12px 20px",
                cursor: "pointer",
                color: "#fff",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              {t.nextLevel}: {nextLevelName} {isAr ? "←" : "→"}
            </button>
          ) : (
            <div style={{
              background: "#0D0D14",
              border: `1px solid ${skill.color}50`,
              borderRadius: 10,
              padding: "12px 20px",
              color: skill.accent,
              fontSize: 13,
              fontWeight: 700,
            }}>
              {t.complete}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
