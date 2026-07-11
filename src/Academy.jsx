import { useState } from "react";
import { skills } from "./data/skills";



const LEVEL_STYLES = {
  "Beginner":     { bg: "#052E16", border: "#16A34A", text: "#4ADE80", badge: "🌱" },
  "Intermediate": { bg: "#1E3A5F", border: "#2563EB", text: "#60A5FA", badge: "⚡" },
  "Advanced":     { bg: "#450A0A", border: "#DC2626", text: "#F87171", badge: "🔥" },
  "Master":       { bg: "#431407", border: "#EA580C", text: "#FB923C", badge: "👑" }
};

export default function Academy() {
  const [view, setView] = useState("home");
  const [skillId, setSkillId] = useState(null);
  const [levelIdx, setLevelIdx] = useState(0);
  const [lessonIdx, setLessonIdx] = useState(null);
  const [openStep, setOpenStep] = useState(null);

  const skill = skills.find(s => s.id === skillId);

  if (view === "home") return (
    <div style={{ minHeight: "100vh", background: "#060608", color: "#E5E7EB", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div style={{ background: "linear-gradient(180deg, #0D0818 0%, #060608 100%)", padding: "52px 20px 44px", textAlign: "center", borderBottom: "1px solid #1C1C28" }}>
        <div style={{ display: "inline-block", background: "#0D0818", border: "1px solid #7C3AED44", borderRadius: 6, padding: "5px 14px", marginBottom: 18, fontSize: 11, color: "#A78BFA", letterSpacing: 3, textTransform: "uppercase" }}>
          🇩🇿 Digital Skills Academy — Algeria
        </div>
        <h1 style={{ fontSize: "clamp(26px, 6vw, 52px)", fontWeight: 900, margin: "0 0 14px", background: "linear-gradient(135deg, #fff 30%, #A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Learn It. Practice It.<br />Get Paid.
        </h1>
        <p style={{ color: "#6B7280", fontSize: 16, maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.65 }}>
          3 skills, beginner to master. Every lesson tells you <strong style={{ color: "#9CA3AF" }}>exactly how</strong> to do it — not just what.
        </p>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 16, fontSize: 13, color: "#4B5563" }}>
          {["Step-by-step methods", "Real exercises", "Free tools only", "Algerian market rates"].map(t => (
            <span key={t} style={{ background: "#0F0F18", border: "1px solid #1C1C28", borderRadius: 20, padding: "6px 14px" }}>✓ {t}</span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "44px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
        {skills.map(s => (
          <div key={s.id}
            onClick={() => { setSkillId(s.id); setLevelIdx(0); setLessonIdx(null); setView("skill"); }}
            style={{ background: s.bg, border: `2px solid ${s.color}30`, borderRadius: 16, padding: 26, cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = s.color + "30"; e.currentTarget.style.transform = "none"; }}
          >
            <div style={{ fontSize: 44, marginBottom: 14 }}>{s.icon}</div>
            <div style={{ fontSize: 10, color: s.accent, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>{s.subtitle}</div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>{s.title}</h2>
            <p style={{ color: "#6B7280", fontSize: 13, lineHeight: 1.5, margin: "0 0 18px" }}>{s.tagline}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 18, borderTop: "1px solid #ffffff10", paddingTop: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                <span style={{ color: "#4B5563" }}>First client</span>
                <span style={{ color: s.accent, fontWeight: 600 }}>{s.firstClient}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                <span style={{ color: "#4B5563" }}>Earning range</span>
                <span style={{ color: s.accent, fontWeight: 600, fontSize: 11 }}>{s.earning}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                <span style={{ color: "#4B5563" }}>Start with</span>
                <span style={{ color: "#9CA3AF", fontSize: 11 }}>{s.startTool}</span>
              </div>
            </div>
            <div style={{ background: s.color, borderRadius: 8, padding: "10px", textAlign: "center", fontWeight: 700, fontSize: 14, color: "#fff" }}>
              Start Learning →
            </div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto 48px", padding: "0 20px" }}>
        <div style={{ background: "#0D0818", border: "1px solid #1C1C28", borderRadius: 12, padding: 20, textAlign: "center" }}>
          <p style={{ color: "#4B5563", fontSize: 13, margin: 0 }}>
            💡 <strong style={{ color: "#6B7280" }}>Recommended order:</strong> Start with <strong style={{ color: "#34D399" }}>Social Media Management</strong> → add <strong style={{ color: "#A78BFA" }}>Graphic Design</strong> → add <strong style={{ color: "#F87171" }}>Video Editing</strong>
          </p>
        </div>
      </div>
    </div>
  );

  if (view === "skill" && skill && lessonIdx === null) {
    const level = skill.levels[levelIdx];
    const ls = LEVEL_STYLES[level.name];
    return (
      <div style={{ minHeight: "100vh", background: "#060608", color: "#E5E7EB", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ background: skill.bg, borderBottom: `1px solid ${skill.color}25`, padding: "16px 20px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <button onClick={() => setView("home")} style={{ background: "transparent", border: "1px solid #1C1C28", color: "#6B7280", borderRadius: 8, padding: "7px 12px", cursor: "pointer", fontSize: 13 }}>← Skills</button>
            <span style={{ fontSize: 26 }}>{skill.icon}</span>
            <div>
              <div style={{ fontWeight: 800, fontSize: 17, color: "#fff" }}>{skill.title}</div>
              <div style={{ fontSize: 11, color: skill.accent }}>{skill.earning}</div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 860, margin: "0 auto", padding: "28px 20px" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
            {skill.levels.map((l, i) => {
              const lsTab = LEVEL_STYLES[l.name];
              const active = levelIdx === i;
              return (
                <button key={i}
                  onClick={() => { setLevelIdx(i); setLessonIdx(null); }}
                  style={{ background: active ? lsTab.bg : "transparent", border: `2px solid ${active ? lsTab.border : "#1C1C28"}`, borderRadius: 10, padding: "9px 16px", cursor: "pointer", color: active ? lsTab.text : "#4B5563", fontWeight: active ? 700 : 400, fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}
                >
                  {lsTab.badge} {l.name}
                </button>
              );
            })}
          </div>

          <div style={{ background: ls.bg, border: `1px solid ${ls.border}40`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 10 }}>
              <span style={{ fontSize: 30 }}>{ls.badge}</span>
              <div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>{level.name} Level</div>
                <div style={{ fontSize: 12, color: "#4B5563" }}>{level.duration}</div>
              </div>
              <div style={{ marginLeft: "auto", background: "#00000030", borderRadius: 8, padding: "8px 14px", textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: ls.text }}>{level.lessons.length}</div>
                <div style={{ fontSize: 10, color: "#4B5563" }}>lessons</div>
              </div>
            </div>
            <p style={{ color: "#6B7280", fontSize: 13, margin: 0 }}><strong style={{ color: "#9CA3AF" }}>Goal:</strong> {level.goal}</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {level.lessons.map((lesson, i) => (
              <div key={i}
                onClick={() => { setLessonIdx(i); setOpenStep(null); setView("lesson"); window.scrollTo(0,0); }}
                style={{ background: "#0D0D14", border: "1px solid #1C1C28", borderRadius: 12, padding: "18px 20px", cursor: "pointer", display: "flex", alignItems: "center", gap: 14, transition: "all 0.15s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = skill.color + "66"; e.currentTarget.style.background = "#111118"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1C1C28"; e.currentTarget.style.background = "#0D0D14"; }}
              >
                <span style={{ width: 32, height: 32, background: skill.color + "22", border: `1px solid ${skill.color}44`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: skill.accent, fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 15, color: "#E5E7EB", marginBottom: 3 }}>{lesson.title}</div>
                  <div style={{ fontSize: 12, color: "#4B5563" }}>{lesson.steps.length} steps · includes exercise</div>
                </div>
                <span style={{ color: "#374151", fontSize: 20 }}>→</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 28, gap: 10 }}>
            {levelIdx > 0
              ? <button onClick={() => { setLevelIdx(levelIdx - 1); setLessonIdx(null); }} style={{ background: "#0D0D14", border: "1px solid #1C1C28", borderRadius: 10, padding: "11px 18px", cursor: "pointer", color: "#6B7280", fontSize: 13 }}>← {skill.levels[levelIdx - 1].name}</button>
              : <div />
            }
            {levelIdx < skill.levels.length - 1 &&
              <button onClick={() => { setLevelIdx(levelIdx + 1); setLessonIdx(null); window.scrollTo(0,0); }} style={{ background: skill.color, border: "none", borderRadius: 10, padding: "11px 20px", cursor: "pointer", color: "#fff", fontSize: 13, fontWeight: 700 }}>Next: {skill.levels[levelIdx + 1].name} →</button>
            }
          </div>
        </div>
      </div>
    );
  }

  if (view === "lesson" && skill && lessonIdx !== null) {
    const level = skill.levels[levelIdx];
    const lesson = level.lessons[lessonIdx];
    const ls = LEVEL_STYLES[level.name];

    return (
      <div style={{ minHeight: "100vh", background: "#060608", color: "#E5E7EB", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ background: "#0A0A12", borderBottom: "1px solid #1C1C28", padding: "14px 20px", position: "sticky", top: 0, zIndex: 10 }}>
          <div style={{ maxWidth: 780, margin: "0 auto", display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <button onClick={() => setView("skill")} style={{ background: "transparent", border: "1px solid #1C1C28", color: "#6B7280", borderRadius: 8, padding: "6px 11px", cursor: "pointer", fontSize: 12 }}>← Back</button>
            <span style={{ fontSize: 16 }}>{skill.icon}</span>
            <span style={{ fontSize: 12, color: "#4B5563" }}>{skill.title} /</span>
            <span style={{ fontSize: 12, color: ls.text }}>{level.name}</span>
            <span style={{ marginLeft: "auto", fontSize: 12, color: "#374151" }}>Lesson {lessonIdx + 1} of {level.lessons.length}</span>
          </div>
        </div>

        <div style={{ maxWidth: 780, margin: "0 auto", padding: "32px 20px 60px" }}>
          <div style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{ background: ls.bg, border: `1px solid ${ls.border}`, borderRadius: 8, padding: "4px 12px", fontSize: 12, color: ls.text, fontWeight: 600 }}>{ls.badge} {level.name}</span>
              <span style={{ color: "#374151", fontSize: 12 }}>Lesson {lessonIdx + 1}</span>
            </div>
            <h1 style={{ fontSize: "clamp(20px, 4vw, 28px)", fontWeight: 800, color: "#fff", margin: "0 0 10px", lineHeight: 1.25 }}>{lesson.title}</h1>
          </div>

          <div style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{ width: 4, height: 20, background: skill.color, borderRadius: 2 }} />
              <span style={{ fontSize: 14, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: 1 }}>How To Do It — Step by Step</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {lesson.steps.map((step, i) => {
                const isOpen = openStep === i;
                return (
                  <div key={i} style={{ background: "#0D0D14", border: `1px solid ${isOpen ? skill.color + "60" : "#1C1C28"}`, borderRadius: 10, overflow: "hidden", transition: "border-color 0.15s" }}>
                    <button
                      onClick={() => setOpenStep(isOpen ? null : i)}
                      style={{ width: "100%", background: "transparent", border: "none", padding: "14px 16px", display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer", textAlign: "left" }}
                    >
                      <span style={{ width: 24, height: 24, background: isOpen ? skill.color : "#1C1C28", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: isOpen ? "#fff" : "#4B5563", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{i + 1}</span>
                      <span style={{ fontSize: 14, color: isOpen ? "#fff" : "#9CA3AF", flex: 1, lineHeight: 1.5, fontWeight: isOpen ? 600 : 400 }}>
                        {step.length > 80 && !isOpen ? step.substring(0, 80) + "…" : step}
                      </span>
                      <span style={{ color: "#374151", fontSize: 16, flexShrink: 0, marginTop: 2 }}>{isOpen ? "▲" : "▼"}</span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 16px 16px 52px" }}>
                        <p style={{ color: "#9CA3AF", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{step}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ background: "#0A0E18", border: `1px solid ${skill.color}30`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 18 }}>🧠</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: skill.accent, textTransform: "uppercase", letterSpacing: 1 }}>The Best Way to Learn This</span>
            </div>
            <p style={{ color: "#9CA3AF", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{lesson.method}</p>
          </div>

          <div style={{ background: "#0E0A00", border: "1px solid #92400E40", borderRadius: 12, padding: 20, marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 18 }}>💪</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#FCD34D", textTransform: "uppercase", letterSpacing: 1 }}>Your Practice Exercise</span>
            </div>
            <p style={{ color: "#D97706", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{lesson.exercise}</p>
          </div>

          {lesson.tip && (
            <div style={{ background: "#0A100A", border: "1px solid #16A34A30", borderRadius: 10, padding: 16, marginBottom: 24 }}>
              <p style={{ color: "#6B7280", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{lesson.tip}</p>
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
            {lessonIdx > 0
              ? <button onClick={() => { setLessonIdx(lessonIdx - 1); setOpenStep(null); window.scrollTo(0,0); }} style={{ background: "#0D0D14", border: "1px solid #1C1C28", borderRadius: 10, padding: "12px 18px", cursor: "pointer", color: "#6B7280", fontSize: 13 }}>← Previous Lesson</button>
              : <button onClick={() => setView("skill")} style={{ background: "#0D0D14", border: "1px solid #1C1C28", borderRadius: 10, padding: "12px 18px", cursor: "pointer", color: "#6B7280", fontSize: 13 }}>← All Lessons</button>
            }
            {lessonIdx < level.lessons.length - 1
              ? <button onClick={() => { setLessonIdx(lessonIdx + 1); setOpenStep(null); window.scrollTo(0,0); }} style={{ background: skill.color, border: "none", borderRadius: 10, padding: "12px 20px", cursor: "pointer", color: "#fff", fontSize: 13, fontWeight: 700 }}>Next Lesson →</button>
              : levelIdx < skill.levels.length - 1
                ? <button onClick={() => { setLevelIdx(levelIdx + 1); setLessonIdx(null); setView("skill"); window.scrollTo(0,0); }} style={{ background: skill.color, border: "none", borderRadius: 10, padding: "12px 20px", cursor: "pointer", color: "#fff", fontSize: 13, fontWeight: 700 }}>Next Level: {skill.levels[levelIdx + 1].name} →</button>
                : <div style={{ background: "#0D0D14", border: `1px solid ${skill.color}50`, borderRadius: 10, padding: "12px 20px", color: skill.accent, fontSize: 13, fontWeight: 700 }}>👑 Track Complete!</div>
            }
          </div>
        </div>
      </div>
    );
  }

  return null;
}
