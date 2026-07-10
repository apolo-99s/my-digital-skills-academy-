import { useState } from "react";
import { translations } from "./translations";

const VALID_CODES = [
  "DSA2026",
  "STUDENT01",
  "VIP2026",
  "DZSKILL2025",
  "ATLAS-PRO",
  "LEARN-DZ-01",
  "LEARN-DZ-02",
  "LEARN-DZ-03",
  "LEARN-DZ-04",
  "LEARN-DZ-05",
  "ACADEMY-VIP",
  "FORMATION01",
  "FORMATION02",
];

export default function Landing({ onEnter, language, setLanguage }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const t = translations[language];
  const isAr = language === "ar";
  const dir = isAr ? "rtl" : "ltr";

  const handleAccess = () => {
    const trimmed = code.trim().toUpperCase();
    if (!trimmed) { setError(t.errorEmpty); return; }
    if (!VALID_CODES.includes(trimmed)) { setError(t.errorInvalid); return; }
    const used = JSON.parse(localStorage.getItem("usedCodes") || "[]");
    if (used.includes(trimmed)) { setError(t.errorUsed); return; }
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("usedCodes", JSON.stringify([...used, trimmed]));
      localStorage.setItem("hasAccess", "true");
      onEnter();
    }, 900);
  };

  const LangBtn = ({ lang, label }) => (
    <button
      onClick={() => setLanguage(lang)}
      style={{
        background: language === lang ? "#7C3AED" : "transparent",
        border: `1px solid ${language === lang ? "#7C3AED" : "#1C1C28"}`,
        color: language === lang ? "#fff" : "#6B7280",
        borderRadius: 8,
        padding: "5px 12px",
        fontSize: 13,
        fontWeight: language === lang ? 700 : 400,
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );

  return (
    <div dir={dir} style={{ minHeight: "100vh", background: "#060608", color: "#E5E7EB", fontFamily: "system-ui, -apple-system, sans-serif", display: "flex", flexDirection: "column" }}>

      {/* NAV */}
      <nav style={{ padding: "16px 24px", borderBottom: "1px solid #111118", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <div style={{ fontWeight: 800, fontSize: 16, color: "#fff" }}>
          <span style={{ color: "#7C3AED" }}>Digital</span>Skills.dz
        </div>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <LangBtn lang="fr" label="FR" />
          <LangBtn lang="ar" label="ع" />
          <LangBtn lang="en" label="EN" />
        </div>
      </nav>

      {/* HERO */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 20px", textAlign: isAr ? "right" : "center" }}>

        <div style={{ display: "inline-block", background: "#0D0818", border: "1px solid #7C3AED44", borderRadius: 6, padding: "5px 14px", marginBottom: 24, fontSize: 11, color: "#A78BFA", letterSpacing: isAr ? 0 : 3, textTransform: "uppercase" }}>
          {t.badge}
        </div>

        <h1 style={{ fontSize: "clamp(26px, 6vw, 52px)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 20px", maxWidth: 680, background: "linear-gradient(135deg, #fff 30%, #A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          {t.title}
        </h1>

        <p style={{ color: "#6B7280", fontSize: 16, maxWidth: 560, lineHeight: 1.7, margin: "0 0 36px" }}>
          {t.subtitle}
        </p>

        {/* SKILL CARDS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, maxWidth: 680, width: "100%", marginBottom: 40 }}>
          {[
            { icon: "🎨", title: language === "ar" ? "التصميم" : language === "en" ? "Graphic Design" : "Graphic Design", desc: "Canva → Illustrator", color: "#7C3AED", earn: "5K–80K DZD" },
            { icon: "📱", title: language === "ar" ? "سوشيال ميديا" : "Social Media", desc: language === "ar" ? "ستراتيجي → إعلانات" : "Strategy → Ads", color: "#059669", earn: "15K–60K DZD" },
            { icon: "🎬", title: language === "ar" ? "مونتاج فيديو" : "Video Editing", desc: "CapCut → DaVinci", color: "#DC2626", earn: "8K–80K DZD" },
          ].map(c => (
            <div key={c.title} style={{ background: "#0D0D14", border: `1px solid ${c.color}30`, borderRadius: 12, padding: 16, textAlign: isAr ? "right" : "left" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{c.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 4 }}>{c.title}</div>
              <div style={{ fontSize: 11, color: "#4B5563", marginBottom: 8 }}>{c.desc}</div>
              <div style={{ fontSize: 11, color: c.color, fontWeight: 600 }}>{c.earn}</div>
            </div>
          ))}
        </div>

        {/* WHAT'S INCLUDED */}
        <div style={{ background: "#0D0D14", border: "1px solid #1C1C28", borderRadius: 14, padding: "22px 24px", maxWidth: 560, width: "100%", marginBottom: 36, textAlign: isAr ? "right" : "left" }}>
          <div style={{ fontSize: 11, color: "#6B7280", textTransform: "uppercase", letterSpacing: isAr ? 0 : 2, marginBottom: 14, fontWeight: 600 }}>{t.includes}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {t.includesList.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", flexDirection: isAr ? "row-reverse" : "row" }}>
                <span style={{ color: "#7C3AED", fontSize: 14, marginTop: 1, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ACCESS CODE BOX */}
        <div style={{ background: "#0A0818", border: "1px solid #7C3AED44", borderRadius: 16, padding: "26px 24px", maxWidth: 440, width: "100%" }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{t.already}</div>
          <div style={{ fontSize: 13, color: "#4B5563", marginBottom: 18 }}>{t.enter}</div>
          <input
            type="text"
            value={code}
            onChange={e => { setCode(e.target.value); setError(""); }}
            onKeyDown={e => e.key === "Enter" && handleAccess()}
            placeholder={t.code}
            dir="ltr"
            style={{ width: "100%", background: "#060608", border: `1px solid ${error ? "#DC2626" : "#1C1C28"}`, borderRadius: 10, padding: "13px 16px", color: "#fff", fontSize: 15, marginBottom: 10, outline: "none", letterSpacing: 2, textTransform: "uppercase" }}
          />
          {error && <div style={{ color: "#F87171", fontSize: 13, marginBottom: 10 }}>⚠ {error}</div>}
          <button
            onClick={handleAccess}
            disabled={loading}
            style={{ width: "100%", background: loading ? "#4C1D95" : "#7C3AED", border: "none", borderRadius: 10, padding: "14px", color: "#fff", fontSize: 15, fontWeight: 700, cursor: loading ? "default" : "pointer" }}
          >
            {loading ? t.loading : t.access}
          </button>

          <div style={{ marginTop: 18, paddingTop: 16, borderTop: "1px solid #1C1C28" }}>
            <div style={{ fontSize: 12, color: "#374151", textAlign: "center", marginBottom: 8 }}>{t.notBought}</div>
            <a
              href="https://wa.me/213YOUR_NUMBER?text=Je%20veux%20acheter%20la%20formation"
              target="_blank"
              rel="noreferrer"
              style={{ display: "block", background: "#064E3B", border: "1px solid #16A34A44", borderRadius: 10, padding: "12px", textAlign: "center", color: "#4ADE80", fontSize: 14, fontWeight: 600, textDecoration: "none" }}
            >
              {t.buy}
            </a>
          </div>
        </div>

        {/* STATS */}
        <div style={{ display: "flex", gap: 28, marginTop: 36, flexWrap: "wrap", justifyContent: "center" }}>
          {t.stats.map(({ n, l }) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#7C3AED" }}>{n}</div>
              <div style={{ fontSize: 12, color: "#374151" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ padding: "18px 24px", borderTop: "1px solid #111118", textAlign: "center", fontSize: 12, color: "#1F2937" }}>
        {t.footer}
      </div>
    </div>
  );
}
