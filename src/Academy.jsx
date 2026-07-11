// ─────────────────────────────────────────────
// Academy.jsx — Main Orchestrator ONLY
// Responsibilities:
//   - Connect components
//   - Manage application flow
//   - Pass props
//   - Render pages
// NEVER add features directly here
// ─────────────────────────────────────────────
import { useState } from "react";
import { skills } from "./data/skills";
import { translations } from "./translations";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SkillCard from "./components/skillcard";
import LevelTabs from "./components/LevelTabs";
import LessonCard from "./components/LessonCard";
import LessonView from "./components/LessonView";

export default function Academy({ language, setLanguage }) {
  const [view, setView] = useState("home");
  const [skillId, setSkillId] = useState(null);
  const [levelIdx, setLevelIdx] = useState(0);
  const [lessonIdx, setLessonIdx] = useState(null);

  const t = translations[language];
  const skill = skills.find(s => s.id === skillId);

  // ── Navigation helpers ─────────────────────
  const goHome = () => {
    setView("home");
    setSkillId(null);
    setLevelIdx(0);
    setLessonIdx(null);
  };

  const goSkill = (id) => {
    setSkillId(id);
    setLevelIdx(0);
    setLessonIdx(null);
    setView("skill");
    window.scrollTo(0, 0);
  };

  const goLevel = (idx) => {
    setLevelIdx(idx);
    setLessonIdx(null);
    window.scrollTo(0, 0);
  };

  const goLesson = (idx) => {
    setLessonIdx(idx);
    setView("lesson");
    window.scrollTo(0, 0);
  };

  const goNextLesson = () => {
    setLessonIdx(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const goPrevLesson = () => {
    setLessonIdx(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const goNextLevel = () => {
    setLevelIdx(prev => prev + 1);
    setLessonIdx(null);
    setView("skill");
    window.scrollTo(0, 0);
  };

  const goBackToSkill = () => {
    setLessonIdx(null);
    setView("skill");
    window.scrollTo(0, 0);
  };

  // ── HOME ──────────────────────────────────
  if (view === "home") return (
    <div style={{
      minHeight: "100vh",
      background: "#060608",
      color: "#E5E7EB",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <Navbar language={language} setLanguage={setLanguage} />

      {/* Hero */}
      <div style={{
        background: "linear-gradient(180deg, #0D0818 0%, #060608 100%)",
        padding: "52px 20px 44px",
        textAlign: "center",
        borderBottom: "1px solid #1C1C28",
        direction: language === "ar" ? "rtl" : "ltr",
      }}>
        <div style={{
          display: "inline-block",
          background: "#0D0818",
          border: "1px solid #7C3AED44",
          borderRadius: 6,
          padding: "5px 14px",
          marginBottom: 18,
          fontSize: 11,
          color: "#A78BFA",
          letterSpacing: language === "ar" ? 0 : 3,
          textTransform: "uppercase",
        }}>
          {t.academyBadge}
        </div>

        <h1 style={{
          fontSize: "clamp(26px, 6vw, 52px)",
          fontWeight: 900,
          margin: "0 0 14px",
          background: "linear-gradient(135deg, #fff 30%, #A78BFA)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          whiteSpace: "pre-line",
        }}>
          {t.academyTitle}
        </h1>

        <p style={{
          color: "#6B7280",
          fontSize: 16,
          maxWidth: 520,
          margin: "0 auto 32px",
          lineHeight: 1.65,
        }}>
          {t.academySubtitle}
        </p>

        {/* Feature tags */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 12,
          fontSize: 13,
          color: "#4B5563",
        }}>
          {t.features.map(f => (
            <span key={f} style={{
              background: "#0F0F18",
              border: "1px solid #1C1C28",
              borderRadius: 20,
              padding: "6px 14px",
            }}>
              ✓ {f}
            </span>
          ))}
        </div>
      </div>

      {/* Skill cards */}
      <div style={{
        maxWidth: 860,
        margin: "44px auto",
        padding: "0 20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: 20,
      }}>
        {skills.map(s => (
          <SkillCard
            key={s.id}
            skill={s}
            language={language}
            onClick={() => goSkill(s.id)}
          />
        ))}
      </div>

      {/* Recommendation */}
      <div style={{
        maxWidth: 860,
        margin: "0 auto 48px",
        padding: "0 20px",
      }}>
        <div style={{
          background: "#0D0818",
          border: "1px solid #1C1C28",
          borderRadius: 12,
          padding: 20,
          textAlign: "center",
          direction: language === "ar" ? "rtl" : "ltr",
        }}>
          <p style={{ color: "#4B5563", fontSize: 13, margin: 0 }}>
            {t.recommendation}{" "}
            <strong style={{ color: "#34D399" }}>Social Media</strong>{" "}
            {t.recommendationMiddle}{" "}
            <strong style={{ color: "#A78BFA" }}>Graphic Design</strong>{" "}
            {t.recommendationEnd}{" "}
            <strong style={{ color: "#F87171" }}>Video Editing</strong>
          </p>
        </div>
      </div>

      <Footer language={language} />
    </div>
  );

  // ── SKILL VIEW ────────────────────────────
  if (view === "skill" && skill) {
    const level = skill.levels[levelIdx];
    return (
      <div style={{
        minHeight: "100vh",
        background: "#060608",
        color: "#E5E7EB",
        fontFamily: "system-ui, sans-serif",
      }}>
        <Navbar
          language={language}
          setLanguage={setLanguage}
          showBack
          onBack={goHome}
        />

        {/* Skill header */}
        <div style={{
          background: skill.bg,
          borderBottom: `1px solid ${skill.color}25`,
          padding: "16px 20px",
          direction: language === "ar" ? "rtl" : "ltr",
        }}>
          <div style={{
            maxWidth: 860,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}>
            <span style={{ fontSize: 26 }}>{skill.icon}</span>
            <div>
              <div style={{ fontWeight: 800, fontSize: 17, color: "#fff" }}>
                {skill.title[language]}
              </div>
              <div style={{ fontSize: 11, color: skill.accent }}>
                {skill.earning}
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 860, margin: "0 auto", padding: "28px 20px" }}>
          {/* Level tabs */}
          <LevelTabs
            skill={skill}
            language={language}
            activeLevelIdx={levelIdx}
            onSelectLevel={goLevel}
            t={t}
          />

          {/* Lesson cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {level.lessons.map((lesson, i) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                index={i}
                language={language}
                skill={skill}
                onClick={() => goLesson(i)}
              />
            ))}
          </div>

          {/* Level navigation */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 28,
            gap: 10,
            direction: language === "ar" ? "rtl" : "ltr",
          }}>
            {levelIdx > 0 ? (
              <button
                onClick={() => goLevel(levelIdx - 1)}
                style={{
                  background: "#0D0D14",
                  border: "1px solid #1C1C28",
                  borderRadius: 10,
                  padding: "11px 18px",
                  cursor: "pointer",
                  color: "#6B7280",
                  fontSize: 13,
                }}
              >
                {language === "ar" ? "→" : "←"}{" "}
                {skill.levels[levelIdx - 1].name[language]}
              </button>
            ) : <div />}

            {levelIdx < skill.levels.length - 1 && (
              <button
                onClick={() => goLevel(levelIdx + 1)}
                style={{
                  background: skill.color,
                  border: "none",
                  borderRadius: 10,
                  padding: "11px 20px",
                  cursor: "pointer",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                {skill.levels[levelIdx + 1].name[language]}{" "}
                {language === "ar" ? "←" : "→"}
              </button>
            )}
          </div>
        </div>

        <Footer language={language} />
      </div>
    );
  }

  // ── LESSON VIEW ───────────────────────────
  if (view === "lesson" && skill && lessonIdx !== null) {
    const level = skill.levels[levelIdx];
    const lesson = level.lessons[lessonIdx];
    const hasNextLesson = lessonIdx < level.lessons.length - 1;
    const hasPrevLesson = lessonIdx > 0;
    const hasNextLevel = levelIdx < skill.levels.length - 1;
    const nextLevelName = hasNextLevel
      ? skill.levels[levelIdx + 1].name[language]
      : null;

    return (
      <LessonView
        skill={skill}
        level={level}
        lesson={lesson}
        lessonIdx={lessonIdx}
        totalLessons={level.lessons.length}
        language={language}
        t={t}
        onBack={goBackToSkill}
        onPrev={goPrevLesson}
        onNext={goNextLesson}
        onNextLevel={goNextLevel}
        hasNextLesson={hasNextLesson}
        hasPrevLesson={hasPrevLesson}
        hasNextLevel={hasNextLevel}
        nextLevelName={nextLevelName}
      />
    );
  }

  return null;
}
