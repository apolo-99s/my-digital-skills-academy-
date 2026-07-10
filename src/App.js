import { useState, useEffect } from "react";
import Academy from "./Academy";
import { translations } from "./translations";

const VALID_CODES = [
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

function Landing({ onEnter }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
const [language, setLanguage] = useState(
  localStorage.getItem("language") || "fr"
);

const t = translations[language];

useEffect(() => {
  localStorage.setItem("language", language);
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
}, [language]);

  const handleAccess = () => {
    const trimmed = code.trim().toUpperCase();
    if (!trimmed) { setError("Entrez votre code d'accès."); return; }
    const upper = VALID_CODES.map(c => c.toUpperCase());
    if (!upper.includes(trimmed)) {
      setError("Code invalide. Vérifiez votre achat ou contactez-nous.");
      return;
    }
    const used = JSON.parse(localStorage.getItem("usedCodes") || "[]");
    if (used.includes(trimmed)) {
      setError("Ce code a déjà été utilisé sur cet appareil.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const updated = [...used, trimmed];
      localStorage.setItem("usedCodes", JSON.stringify(updated));
      localStorage.setItem("hasAccess", "true");
      onEnter();
    }, 900);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#060608", color: "#E5E7EB", fontFamily: "system-ui, -apple-system, sans-serif", display: "flex", flexDirection: "column" }}>
      <nav style={{ padding: "18px 24px", borderBottom: "1px solid #111118", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontWeight: 800, fontSize: 16, color: "#fff" }}>
          <span style={{ color: "#7C3AED" }}>Digital</span>Skills.dz
        </div>
      <select
  value={language}
  onChange={(e) => setLanguage(e.target.value)}
  style={{
    background: "#0D0D14",
    color: "#fff",
    border: "1px solid #1C1C28",
    borderRadius: 20,
    padding: "6px 12px",
    cursor: "pointer"
  }}
>
  <option value="fr">🇫🇷 Français</option>
  <option value="ar">🇩🇿 العربية</option>
  <option value="en">🇬🇧 English</option>
</select>
      </nav>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 20px", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "#0D0818", border: "1px solid #7C3AED44", borderRadius: 6, padding: "5px 14px", marginBottom: 24, fontSize: 11, color: "#A78BFA", letterSpacing: 3, textTransform: "uppercase" }}>
          Formation Complète — Beginner to Master
        </div>

        <h1 style={{ fontSize: "clamp(30px, 7vw, 62px)", fontWeight: 900, lineHeight: 1.1, margin: "0 0 20px", maxWidth: 700 }}>
          <span style={{ background: "linear-gradient(135deg, #fff 30%, #A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Maîtrisez les Compétences<br />Digitales qui Paient en Algérie
          </span>
        </h1>

        <p style={{ color: "#6B7280", fontSize: 17, maxWidth: 560, lineHeight: 1.7, margin: "0 0 40px" }}>
          3 formations complètes. <strong style={{ color: "#9CA3AF" }}>Graphisme, Social Media, Vidéo.</strong><br />
          Chaque leçon vous dit exactement <strong style={{ color: "#9CA3AF" }}>comment faire</strong> — pas seulement quoi apprendre.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, maxWidth: 680, width: "100%", marginBottom: 52 }}>
          {[
            { icon: "🎨", title: "Graphic Design", desc: "Canva → Illustrator → Agence", color: "#7C3AED", earn: "5K–80K DZD/projet" },
            { icon: "📱", title: "Social Media", desc: "Stratégie → Ads → Multi-clients", color: "#059669", earn: "15K–60K DZD/mois" },
            { icon: "🎬", title: "Video Editing", desc: "CapCut → DaVinci → Commerciaux", color: "#DC2626", earn: "8K–80K DZD/projet" },
          ].map(c => (
            <div key={c.title} style={{ background: "#0D0D14", border: `1px solid ${c.color}30`, borderRadius: 12, padding: 16, textAlign: "left" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{c.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 4 }}>{c.title}</div>
              <div style={{ fontSize: 11, color: "#4B5563", marginBottom: 8 }}>{c.desc}</div>
              <div style={{ fontSize: 11, color: c.color, fontWeight: 600 }}>{c.earn}</div>
            </div>
          ))}
        </div>

        <div style={{ background: "#0D0D14", border: "1px solid #1C1C28", borderRadius: 14, padding: "24px 28px", maxWidth: 560, width: "100%", marginBottom: 48, textAlign: "left" }}>
          <div style={{ fontSize: 12, color: "#6B7280", textTransform: "uppercase", letterSpacing: 2, marginBottom: 16, fontWeight: 600 }}>Ce que vous obtenez</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              "3 formations complètes — Beginner → Intermediate → Advanced → Master",
              "Chaque leçon : méthode exacte étape par étape",
              "Exercices pratiques avec livrables concrets",
              "Outils gratuits pour commencer (Canva, CapCut, Photopea, DaVinci)",
              "Prix du marché algérien en DZD pour chaque service",
              "Scripts de communication client en français et darija",
              "Accès à vie — mises à jour incluses",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ color: "#7C3AED", fontSize: 14, marginTop: 1, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "#0A0818", border: "1px solid #7C3AED44", borderRadius: 16, padding: "28px 28px", maxWidth: 440, width: "100%" }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 6 }}>Vous avez déjà acheté ?</div>
          <div style={{ fontSize: 13, color: "#4B5563", marginBottom: 20 }}>Entrez votre code d'accès pour commencer.</div>
          <input
            type="text"
            value={code}
            onChange={e => { setCode(e.target.value); setError(""); }}
            onKeyDown={e => e.key === "Enter" && handleAccess()}
            placeholder="Votre code d'accès..."
            style={{ width: "100%", background: "#060608", border: `1px solid ${error ? "#DC2626" : "#1C1C28"}`, borderRadius: 10, padding: "13px 16px", color: "#fff", fontSize: 15, marginBottom: 12, outline: "none", letterSpacing: 2, textTransform: "uppercase" }}
          />
          {error && <div style={{ color: "#F87171", fontSize: 13, marginBottom: 12 }}>⚠ {error}</div>}
          <button
            onClick={handleAccess}
            disabled={loading}
            style={{ width: "100%", background: loading ? "#4C1D95" : "#7C3AED", border: "none", borderRadius: 10, padding: "14px", color: "#fff", fontSize: 15, fontWeight: 700, cursor: loading ? "default" : "pointer" }}
          >
            {loading ? "Vérification..." : "Accéder à la Formation →"}
          </button>

          <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #1C1C28" }}>
            <div style={{ fontSize: 12, color: "#374151", textAlign: "center", marginBottom: 8 }}>Pas encore acheté ?</div>
            <a href="https://wa.me/213697105325?text=Je%20veux%20acheter%20la%20formation%20Digital%20Skills"
              target="_blank" rel="noreferrer"
              style={{ display: "block", background: "#064E3B", border: "1px solid #16A34A44", borderRadius: 10, padding: "12px", textAlign: "center", color: "#4ADE80", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              💬 Commander via WhatsApp
            </a>
          </div>
        </div>

        <div style={{ display: "flex", gap: 28, marginTop: 40, flexWrap: "wrap", justifyContent: "center" }}>
          {[["12+", "Leçons détaillées"], ["4", "Niveaux par skill"], ["0 DZD", "Pour commencer"]].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#7C3AED" }}>{n}</div>
              <div style={{ fontSize: 12, color: "#374151" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "20px 24px", borderTop: "1px solid #111118", textAlign: "center", fontSize: 12, color: "#1F2937" }}>
        DigitalSkills.dz — Formation Professionnelle Algérie 🇩🇿
      </div>
    </div>
  );
}

export default function App() {
  const [hasAccess, setHasAccess] = useState(
    () => localStorage.getItem("hasAccess") === "true"
  );
  if (!hasAccess) return <Landing onEnter={() => setHasAccess(true)} />;
  return <Academy />;
}
