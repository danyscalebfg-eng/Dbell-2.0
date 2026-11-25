"use client";

import { useState } from "react";

type Lang = "ES" | "EN";
type Category = "ALL" | "RUNNING" | "LIFESTYLE" | "TRAINING" | "BASKETBALL";

type Sneaker = {
  id: string;
  name: string;
  brand: string;
  category: Exclude<Category, "ALL">;
  badgeEs: string;
  badgeEn: string;
  score: number;
  price: string;
  image: string;
  accent: string;
  fitEs: string;
  fitEn: string;
};

const SNEAKERS: Sneaker[] = [
  {
    id: "nb-9060",
    name: "9060",
    brand: "NEW BALANCE / LIFESTYLE",
    category: "LIFESTYLE",
    badgeEs: "ICONO URBANO",
    badgeEn: "STREET ICON",
    score: 89,
    price: "€190*",
    image: "/images/sneaker-9060.jpg",
    accent: "#27272a",
    fitEs: "Horma equilibrada · Demo catalogue — verify specifications before publication.",
    fitEn: "Balanced fit · Demo catalogue — verify specifications before publication.",
  },
  {
    id: "gel-nimbus",
    name: "Gel-Nimbus",
    brand: "ASICS / RUNNING",
    category: "RUNNING",
    badgeEs: "MÁXIMA AMORTIGUACIÓN",
    badgeEn: "MAX CUSHIONING",
    score: 92,
    price: "€200*",
    image: "/images/sneaker-nimbus.jpg",
    accent: "#1e293b",
    fitEs: "Amortiguación suave · Demo catalogue — verify specifications before publication.",
    fitEn: "Plush cushioning · Demo catalogue — verify specifications before publication.",
  },
  {
    id: "speed-training",
    name: "Speed Trainer",
    brand: "NIKE / TRAINING",
    category: "TRAINING",
    badgeEs: "ENTRENAMIENTO RÁPIDO",
    badgeEn: "SPEED TRAINING",
    score: 88,
    price: "€155*",
    image: "/images/sneaker-training.jpg",
    accent: "#3f3f46",
    fitEs: "Respuesta ágil · Demo catalogue — verify specifications before publication.",
    fitEn: "Agile response · Demo catalogue — verify specifications before publication.",
  },
  {
    id: "aj1",
    name: "Air Jordan 1",
    brand: "JORDAN / BASKETBALL",
    category: "BASKETBALL",
    badgeEs: "HERENCIA DE CANCHA",
    badgeEn: "COURT HERITAGE",
    score: 87,
    price: "€180*",
    image: "/images/sneaker-aj1.jpg",
    accent: "#7f1d1d",
    fitEs: "Clásico de cancha · Demo catalogue — verify specifications before publication.",
    fitEn: "Court heritage · Demo catalogue — verify specifications before publication.",
  },
];

const BRANDS = [
  "NIKE",
  "JORDAN",
  "ADIDAS",
  "NEW BALANCE",
  "ASICS",
  "PUMA",
  "ON",
  "HOKA",
  "CONVERSE",
  "VANS",
  "REEBOK",
  "SALOMON",
  "MIZUNO",
  "SAUCONY",
  "SKECHERS",
  "UNDER ARMOUR",
  "MERRELL",
  "DR. MARTENS",
];

function VisualFrame({
  src,
  alt,
  accent,
  height = "210px",
  children,
}: {
  src: string;
  alt: string;
  accent: string;
  height?: string;
  children?: React.ReactNode;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height,
        background: `linear-gradient(135deg, ${accent} 0%, #111111 100%)`,
        overflow: "hidden",
      }}
    >
      {!imgError && (
        <img
          src={src}
          alt={alt}
          onError={() => setImgError(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      )}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(17,17,17,0.25) 0%, rgba(17,17,17,0.78) 100%)",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("EN");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("ALL");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [compareIds, setCompareIds] = useState<string[]>(["nb-9060", "gel-nimbus"]);
  const [activeDetail, setActiveDetail] = useState<Sneaker | null>(null);
  const [priority, setPriority] = useState("Comfort");
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const isEs = lang === "ES";

  const filtered = SNEAKERS.filter((item) => {
    const byCat = category === "ALL" || item.category === category;
    const byBrand =
      !selectedBrand || item.brand.toUpperCase().includes(selectedBrand);
    const byQuery =
      !query.trim() ||
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.brand.toLowerCase().includes(query.toLowerCase());
    return byCat && byBrand && byQuery;
  });

  const comparedItems = SNEAKERS.filter((s) => compareIds.includes(s.id));

  const pickedSneaker =
    priority === "Style"
      ? SNEAKERS[0]
      : priority === "Versatility"
      ? SNEAKERS[2]
      : SNEAKERS[1];

  function toggleCompare(id: string) {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 3) return [...prev.slice(1), id];
      return [...prev, id];
    });
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f6f5f1",
        color: "#111111",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          backgroundColor: "#141414",
          color: "#a3a3a3",
          fontSize: "0.68rem",
          letterSpacing: "0.09em",
          padding: "0.5rem 1.25rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "0.5rem",
          borderBottom: "1px solid #262626",
        }}
      >
        <span>
          {isEs
            ? "CULTURA SNEAKER INDEPENDIENTE Y RENDIMIENTO"
            : "INDEPENDENT SNEAKER CULTURE & PERFORMANCE"}
        </span>
        <span>
          {isEs
            ? "DESCUBRE · COMPARA · ENCUENTRA TU PAR"
            : "DISCOVER · COMPARE · FIND YOUR PAIR"}
        </span>
      </div>

      {/* Main Header */}
      <header
        style={{
          backgroundColor: "#111111",
          color: "#ffffff",
          padding: "0.9rem 1.25rem",
          position: "sticky",
          top: 0,
          zIndex: 30,
          borderBottom: "1px solid #262626",
        }}
      >
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <a
            href="#top"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 900,
              fontSize: "1.3rem",
              letterSpacing: "-0.02em",
            }}
          >
            D<span style={{ color: "#dc2626" }}>.</span>BELL
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
            <button
              type="button"
              onClick={() => setLang((prev) => (prev === "EN" ? "ES" : "EN"))}
              style={{
                backgroundColor: "#1c1c1c",
                color: "#ffffff",
                border: "1px solid #3f3f46",
                padding: "0.42rem 0.65rem",
                fontSize: "0.72rem",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              {lang} ▾
            </button>

            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen((prev) => !prev)}
              style={{
                backgroundColor: "#1c1c1c",
                color: "#ffffff",
                border: "1px solid #3f3f46",
                padding: "0.42rem 0.65rem",
                fontSize: "0.78rem",
                cursor: "pointer",
              }}
            >
              ⌕
            </button>

            <button
              type="button"
              aria-label="Menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              style={{
                backgroundColor: "#1c1c1c",
                color: "#ffffff",
                border: "1px solid #3f3f46",
                padding: "0.42rem 0.65rem",
                fontSize: "0.78rem",
                cursor: "pointer",
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div style={{ maxWidth: "1160px", margin: "0.75rem auto 0 auto" }}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                isEs ? "Buscar modelo o marca..." : "Search sneaker or brand..."
              }
              style={{
                width: "100%",
                padding: "0.65rem 0.85rem",
                backgroundColor: "#1c1c1c",
                color: "#ffffff",
                border: "1px solid #3f3f46",
                fontSize: "0.88rem",
              }}
            />
          </div>
        )}

        {menuOpen && (
          <nav
            style={{
              maxWidth: "1160px",
              margin: "0.75rem auto 0 auto",
              paddingTop: "0.75rem",
              borderTop: "1px solid #262626",
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
            }}
          >
            <a href="#featured" onClick={() => setMenuOpen(false)} style={{ color: "#ffffff", textDecoration: "none" }}>
              {isEs ? "DESTACADAS" : "FEATURED"}
            </a>
            <a href="#editorial" onClick={() => setMenuOpen(false)} style={{ color: "#ffffff", textDecoration: "none" }}>
              {isEs ? "REVISTA" : "MAGAZINE"}
            </a>
            <a href="#compare" onClick={() => setMenuOpen(false)} style={{ color: "#ffffff", textDecoration: "none" }}>
              {isEs ? "COMPARAR" : "COMPARE"} ({compareIds.length})
            </a>
            <a href="#brands" onClick={() => setMenuOpen(false)} style={{ color: "#ffffff", textDecoration: "none" }}>
              {isEs ? "MARCAS" : "BRANDS"}
            </a>
            <a href="#drop" onClick={() => setMenuOpen(false)} style={{ color: "#ef4444", textDecoration: "none" }}>
              {isEs ? "PRÓXIMO DROP" : "NEXT DROP"}
            </a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="top"
        style={{
          position: "relative",
          backgroundColor: "#141414",
          color: "#ffffff",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "relative",
            minHeight: "430px",
            background:
              "radial-gradient(circle at 75% 45%, rgba(220,38,38,0.28), rgba(20,20,20,0.94) 68%), url('/images/hero-sneaker.jpg') center/cover no-repeat",
            padding: "3rem 1.25rem",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <div style={{ maxWidth: "1160px", width: "100%", margin: "0 auto" }}>
            <p
              style={{
                color: "#ef4444",
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                margin: "0 0 0.75rem 0",
              }}
            >
              {isEs
                ? "LA PLATAFORMA INTERNACIONAL DE SNEAKERS"
                : "THE INTERNATIONAL SNEAKER PLATFORM"}
            </p>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 7vw, 4.4rem)",
                lineHeight: 0.96,
                fontWeight: 900,
                letterSpacing: "-0.02em",
                margin: "0 0 1rem 0",
              }}
            >
              {isEs ? "ENCUENTRA TU" : "FIND YOUR"}
              <br />
              {isEs ? "PRÓXIMO PASO" : "NEXT MOVE"}
              <span style={{ color: "#dc2626" }}>.</span>
            </h1>
            <p
              style={{
                color: "#e5e5e5",
                maxWidth: "490px",
                fontSize: "0.96rem",
                lineHeight: 1.55,
                margin: "0 0 1.5rem 0",
              }}
            >
              {isEs
                ? "Perspectiva independiente sobre sneakers, rendimiento y cultura urbana. Descubre el par que se mueve contigo."
                : "Independent perspective on sneakers, performance and street culture. Discover the pair that moves with you."}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <a
                  href="#featured"
                  style={{
                    backgroundColor: "#dc2626",
                    color: "#ffffff",
                    padding: "0.78rem 1.15rem",
                    fontSize: "0.74rem",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textDecoration: "none",
                  }}
                >
                  {isEs ? "EXPLORAR SNEAKERS ↗" : "EXPLORE SNEAKERS ↗"}
                </a>
                <a
                  href="#compare"
                  style={{
                    backgroundColor: "rgba(17,17,17,0.75)",
                    border: "1px solid #737373",
                    color: "#ffffff",
                    padding: "0.78rem 1.15rem",
                    fontSize: "0.74rem",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textDecoration: "none",
                  }}
                >
                  {isEs ? "BUSCAR TU PAR" : "FIND YOUR PAIR"}
                </a>
              </div>

              <span
                style={{
                  color: "#d4d4d4",
                  fontSize: "0.68rem",
                  letterSpacing: "0.1em",
                }}
              >
                EST. FOR THE NEXT GENERATION OF SNEAKER CULTURE — 001
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Red Ticker Strip */}
      <div
        style={{
          backgroundColor: "#dc2626",
          color: "#ffffff",
          fontSize: "0.72rem",
          fontWeight: 800,
          letterSpacing: "0.12em",
          padding: "0.7rem 1.25rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "0.65rem",
        }}
      >
        <span>{isEs ? "RENDIMIENTO" : "PERFORMANCE"}</span>
        <span>✳</span>
        <span>{isEs ? "CULTURA URBANA" : "STREET CULTURE"}</span>
        <span>✳</span>
        <span>{isEs ? "NUEVOS LANZAMIENTOS" : "NEW RELEASES"}</span>
        <span>✳</span>
        <span>{isEs ? "PERSPECTIVA REAL" : "REAL PERSPECTIVE"}</span>
      </div>

      {/* Featured Sneakers */}
      <section
        id="featured"
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "3rem 1.25rem",
        }}
      >
        <p
          style={{
            color: "#dc2626",
            fontSize: "0.7rem",
            fontWeight: 800,
            letterSpacing: "0.12em",
            margin: "0 0 0.3rem 0",
          }}
        >
          {isEs ? "LA SELECCIÓN · 001" : "THE EDIT · 001"}
        </p>
        <h2 style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 0.5rem 0" }}>
          {isEs ? "SNEAKERS DESTACADAS" : "FEATURED SNEAKERS"}
        </h2>
        <p style={{ color: "#525252", fontSize: "0.85rem", maxWidth: "460px", margin: "0 0 1.4rem 0" }}>
          {isEs
            ? "Selección inicial en deporte, confort diario y streetwear. Catálogo de muestra: verifica especificaciones antes de publicar."
            : "A starting selection across sport, everyday comfort and streetwear. Demo catalogue — verify specifications before publication."}
        </p>

        {/* Filter Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: "1.5rem" }}>
          {(["ALL", "RUNNING", "LIFESTYLE", "TRAINING", "BASKETBALL"] as Category[]).map(
            (cat) => {
              const active = category === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setCategory(cat);
                    setSelectedBrand(null);
                  }}
                  style={{
                    backgroundColor: active ? "#111111" : "#ffffff",
                    color: active ? "#ffffff" : "#111111",
                    border: "1px solid #111111",
                    padding: "0.52rem 0.85rem",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    cursor: "pointer",
                  }}
                >
                  {cat === "ALL"
                    ? isEs
                      ? "TODAS"
                      : "ALL SNEAKERS"
                    : cat}
                </button>
              );
            }
          )}
          {selectedBrand && (
            <button
              type="button"
              onClick={() => setSelectedBrand(null)}
              style={{
                backgroundColor: "#dc2626",
                color: "#ffffff",
                border: "none",
                padding: "0.52rem 0.85rem",
                fontSize: "0.7rem",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              {selectedBrand} ✕
            </button>
          )}
        </div>

        {/* 2-Column / Responsive Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {filtered.map((item) => {
            const inList = compareIds.includes(item.id);
            return (
              <article
                key={item.id}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e5e5",
                }}
              >
                <VisualFrame src={item.image} alt={item.name} accent={item.accent} height="220px">
                  <span
                    style={{
                      backgroundColor: "rgba(17,17,17,0.88)",
                      color: "#ffffff",
                      fontSize: "0.66rem",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      padding: "0.32rem 0.55rem",
                      alignSelf: "flex-start",
                    }}
                  >
                    {isEs ? item.badgeEs : item.badgeEn}
                  </span>
                </VisualFrame>

                <div style={{ padding: "1.1rem" }}>
                  <p
                    style={{
                      color: "#737373",
                      fontSize: "0.68rem",
                      fontWeight: 800,
                      letterSpacing: "0.06em",
                      margin: "0 0 0.25rem 0",
                    }}
                  >
                    {item.brand}
                  </p>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 900, margin: "0 0 0.35rem 0" }}>
                    {item.name}
                  </h3>
                  <p style={{ color: "#737373", fontSize: "0.78rem", margin: "0 0 0.9rem 0" }}>
                    {isEs
                      ? "Catálogo demo · Verifica ficha antes de publicar"
                      : "Demo catalogue · verify specifications before publication"}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      borderTop: "1px solid #f0f0f0",
                      paddingTop: "0.75rem",
                      marginBottom: "0.9rem",
                    }}
                  >
                    <div>
                      <strong style={{ fontSize: "1.35rem", fontWeight: 900 }}>
                        {item.score}
                      </strong>
                      <span style={{ color: "#737373", fontSize: "0.76rem" }}> / 100</span>
                      <div style={{ color: "#737373", fontSize: "0.65rem", fontWeight: 800 }}>
                        D.BELL SCORE*
                      </div>
                    </div>
                    <strong style={{ fontSize: "1.1rem" }}>{item.price}</strong>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                    <button
                      type="button"
                      onClick={() => toggleCompare(item.id)}
                      style={{
                        backgroundColor: inList ? "#dc2626" : "#111111",
                        color: "#ffffff",
                        border: "none",
                        padding: "0.65rem 0.5rem",
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        letterSpacing: "0.05em",
                        cursor: "pointer",
                      }}
                    >
                      {inList
                        ? isEs
                          ? "EN LISTA ✓"
                          : "IN COMPARE ✓"
                        : isEs
                        ? "AÑADIR A LISTA +"
                        : "ADD TO COMPARE +"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveDetail(item)}
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#111111",
                        border: "1px solid #d4d4d4",
                        padding: "0.65rem 0.5rem",
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        letterSpacing: "0.05em",
                        cursor: "pointer",
                      }}
                    >
                      {isEs ? "DETALLES ↗" : "DETAILS ↗"}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {activeDetail && (
          <div
            style={{
              marginTop: "1.25rem",
              backgroundColor: "#ffffff",
              borderLeft: "4px solid #dc2626",
              borderTop: "1px solid #e5e5e5",
              borderRight: "1px solid #e5e5e5",
              borderBottom: "1px solid #e5e5e5",
              padding: "1rem 1.2rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <div>
              <strong>
                {activeDetail.name} — {activeDetail.price} ({activeDetail.score}/100)
              </strong>
              <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.85rem", color: "#525252" }}>
                {isEs ? activeDetail.fitEs : activeDetail.fitEn}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setActiveDetail(null)}
              style={{
                backgroundColor: "#111111",
                color: "#ffffff",
                border: "none",
                padding: "0.45rem 0.75rem",
                fontSize: "0.72rem",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              {isEs ? "CERRAR" : "CLOSE"}
            </button>
          </div>
        )}
      </section>

      {/* Beyond The Sneaker */}
      <section
        id="editorial"
        style={{
          backgroundColor: "#111111",
          color: "#ffffff",
          padding: "3rem 1.25rem",
        }}
      >
        <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <div>
              <p style={{ color: "#ef4444", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.12em", margin: "0 0 0.3rem 0" }}>
                {isEs ? "HISTORIAS, CULTURA Y PERSPECTIVA" : "STORIES, CULTURE & PERSPECTIVE"}
              </p>
              <h2 style={{ fontSize: "2rem", fontWeight: 900, margin: 0 }}>
                {isEs ? "MÁS ALLÁ DE LA SNEAKER" : "BEYOND THE SNEAKER"}
              </h2>
            </div>
            <p style={{ color: "#a3a3a3", fontSize: "0.82rem", maxWidth: "360px", margin: 0 }}>
              {isEs
                ? "Ideas editoriales para una comunidad global. Los artículos mostrados son conceptos de muestra."
                : "Editorial ideas for a global sneaker audience. Articles shown here are sample concepts, not published reporting."}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            <article style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}>
              <VisualFrame src="/images/story-culture.jpg" alt="Culture feature" accent="#7f1d1d" height="270px">
                <div>
                  <span style={{ color: "#ef4444", fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.1em" }}>
                    {isEs ? "REPORTAJE DE CULTURA" : "CULTURE FEATURE"}
                  </span>
                  <h3 style={{ fontSize: "1.75rem", lineHeight: 1.02, fontWeight: 900, margin: "0.5rem 0" }}>
                    {isEs ? "MÁS QUE UNA SILUETA" : "MORE THAN A SILHOUETTE"}
                  </h3>
                  <p style={{ color: "#e5e5e5", fontSize: "0.88rem", lineHeight: 1.45, margin: "0 0 0.9rem 0" }}>
                    {isEs
                      ? "Cómo las sneakers conectan deporte, identidad, diseño y vida diaria."
                      : "How sneakers move between sport, identity, design and everyday life."}
                  </p>
                  <a
                    href="#featured"
                    style={{
                      color: "#ffffff",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      textDecoration: "none",
                      borderBottom: "2px solid #dc2626",
                      paddingBottom: "0.25rem",
                    }}
                  >
                    {isEs ? "EXPLORAR CULTURA ↗" : "EXPLORE THE CULTURE ↗"}
                  </a>
                </div>
              </VisualFrame>
            </article>

            <article style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}>
              <VisualFrame src="/images/story-guide.jpg" alt="Performance guide" accent="#1e293b" height="270px">
                <div>
                  <span style={{ color: "#ef4444", fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.1em" }}>
                    {isEs ? "GUÍA DE RENDIMIENTO" : "PERFORMANCE GUIDE"}
                  </span>
                  <h3 style={{ fontSize: "1.75rem", lineHeight: 1.02, fontWeight: 900, margin: "0.5rem 0" }}>
                    {isEs ? "ELIGE CON PROPÓSITO" : "CHOOSE WITH PURPOSE"}
                  </h3>
                  <p style={{ color: "#e5e5e5", fontSize: "0.88rem", lineHeight: 1.45, margin: "0 0 0.9rem 0" }}>
                    {isEs
                      ? "Entiende amortiguación, ajuste y uso antes de elegir tu próximo par."
                      : "Understand cushioning, fit and use before choosing your next pair."}
                  </p>
                  <a
                    href="#compare"
                    style={{
                      color: "#ffffff",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      textDecoration: "none",
                      borderBottom: "2px solid #dc2626",
                      paddingBottom: "0.25rem",
                    }}
                  >
                    {isEs ? "BUSCAR TU PAR ↗" : "FIND YOUR PAIR ↗"}
                  </a>
                </div>
              </VisualFrame>
            </article>
          </div>
        </div>
      </section>

      {/* Compare & Quick Match */}
      <section
        id="compare"
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "3rem 1.25rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}
      >
        <div style={{ backgroundColor: "#ffffff", border: "1px solid #e5e5e5", padding: "1.4rem" }}>
          <p style={{ color: "#dc2626", fontSize: "0.68rem", fontWeight: 800, margin: "0 0 0.25rem 0" }}>
            {isEs ? "DECIDE BIEN" : "MAKE THE RIGHT CALL"}
          </p>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, margin: "0 0 0.85rem 0" }}>
            {isEs ? "TU LISTA COMPARATIVA" : "COMPARE YOUR SHORTLIST"}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
            {comparedItems.map((s) => (
              <div
                key={s.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#f6f5f1",
                  padding: "0.65rem 0.8rem",
                  border: "1px solid #e5e5e5",
                }}
              >
                <div>
                  <strong style={{ fontSize: "0.9rem" }}>{s.name}</strong>
                  <div style={{ fontSize: "0.75rem", color: "#525252" }}>
                    {s.score}/100 · {s.price}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => toggleCompare(s.id)}
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #d4d4d4",
                    padding: "0.3rem 0.55rem",
                    fontSize: "0.7rem",
                    cursor: "pointer",
                  }}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        <div style={{ backgroundColor: "#ffffff", border: "1px solid #e5e5e5", padding: "1.4rem" }}>
          <p style={{ color: "#dc2626", fontSize: "0.68rem", fontWeight: 800, margin: "0 0 0.25rem 0" }}>
            {isEs ? "MATCH RÁPIDO" : "QUICK MATCH"}
          </p>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, margin: "0 0 0.85rem 0" }}>
            {isEs ? "¿QUÉ ES LO MÁS IMPORTANTE?" : "WHAT MATTERS MOST?"}
          </h2>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            style={{
              width: "100%",
              padding: "0.65rem",
              border: "1px solid #d4d4d4",
              marginBottom: "0.9rem",
              backgroundColor: "#ffffff",
            }}
          >
            <option value="Comfort">{isEs ? "Confort" : "Comfort"}</option>
            <option value="Versatility">{isEs ? "Versatilidad" : "Versatility"}</option>
            <option value="Style">{isEs ? "Estilo" : "Style"}</option>
          </select>
          <div style={{ backgroundColor: "#111111", color: "#ffffff", padding: "1rem" }}>
            <span style={{ color: "#ef4444", fontSize: "0.68rem", fontWeight: 800 }}>
              {isEs ? "ELECCIÓN RECOMENDADA" : "RECOMMENDED PICK"}
            </span>
            <div style={{ fontSize: "1.1rem", fontWeight: 900, marginTop: "0.2rem" }}>
              {pickedSneaker.name} ({pickedSneaker.price})
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section
        id="brands"
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "0 1.25rem 3rem 1.25rem",
        }}
      >
        <p style={{ color: "#dc2626", fontSize: "0.68rem", fontWeight: 800, margin: "0 0 0.25rem 0" }}>
          {isEs ? "LAS MARCAS QUE MARCAN EL RITMO" : "THE NAMES SHAPING THE GAME"}
        </p>
        <h2 style={{ fontSize: "1.85rem", fontWeight: 900, margin: "0 0 1.2rem 0" }}>
          {isEs ? "EXPLORAR MARCAS" : "EXPLORE BRANDS"}
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "0.65rem",
          }}
        >
          {BRANDS.map((brand) => (
            <button
              key={brand}
              type="button"
              onClick={() => {
                setSelectedBrand(brand);
                setCategory("ALL");
                document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                backgroundColor: selectedBrand === brand ? "#111111" : "#ffffff",
                color: selectedBrand === brand ? "#ffffff" : "#111111",
                border: "1px solid #e5e5e5",
                padding: "0.9rem 0.75rem",
                fontSize: "0.76rem",
                fontWeight: 800,
                letterSpacing: "0.06em",
                cursor: "pointer",
              }}
            >
              {brand}
            </button>
          ))}
        </div>
      </section>

      {/* Red Newsletter Strip */}
      <section
        id="drop"
        style={{
          backgroundColor: "#dc2626",
          color: "#ffffff",
          padding: "2.4rem 1.25rem",
        }}
      >
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.1em", margin: "0 0 0.25rem 0" }}>
              {isEs ? "MANTENTE AL DÍA" : "STAY IN THE LOOP"}
            </p>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 0.35rem 0" }}>
              {isEs ? "PRÓXIMO DROP." : "NEXT DROP."}
            </h2>
            <p style={{ fontSize: "0.84rem", margin: 0, opacity: 0.92 }}>
              {isEs
                ? "Novedades editoriales, guías y cultura sneaker. Formulario demo — sin envío de correo activo."
                : "Editorial updates, guides and sneaker culture. Demo form — no mailing service connected."}
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setJoined(true);
            }}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", justifyContent: "flex-end" }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={isEs ? "Tu correo electrónico" : "Your email address"}
              style={{
                padding: "0.8rem 1rem",
                border: "none",
                minWidth: "210px",
                flex: "1 1 200px",
                backgroundColor: "#ffffff",
                color: "#111111",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#111111",
                color: "#ffffff",
                border: "none",
                padding: "0.8rem 1.15rem",
                fontWeight: 800,
                fontSize: "0.74rem",
                cursor: "pointer",
              }}
            >
              {joined
                ? isEs
                  ? "APUNTADO ✓"
                  : "JOINED ✓"
                : isEs
                ? "APUNTARME ↗"
                : "SIGN ME UP ↗"}
            </button>
          </form>
        </div>
      </section>

      {/* Dark 4-Column Footer */}
      <footer
        style={{
          backgroundColor: "#0d0d0d",
          color: "#a3a3a3",
          padding: "3rem 1.25rem 1.5rem 1.25rem",
          fontSize: "0.82rem",
        }}
      >
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid #262626",
          }}
        >
          <div>
            <div style={{ color: "#ffffff", fontWeight: 900, fontSize: "1rem", marginBottom: "0.6rem" }}>
              D<span style={{ color: "#dc2626" }}>.</span>BELL
            </div>
            <p style={{ margin: 0, lineHeight: 1.55 }}>
              {isEs
                ? "Perspectiva independiente sobre sneakers, rendimiento y cultura urbana. Descubre. Compara. Encuentra tu par."
                : "Independent perspective on sneakers, performance and street culture. Discover. Compare. Find your pair."}
            </p>
          </div>

          <div>
            <div style={{ color: "#ffffff", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
              EXPLORE
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              <a href="#editorial" style={{ color: "inherit", textDecoration: "none" }}>Magazine</a>
              <a href="#featured" style={{ color: "inherit", textDecoration: "none" }}>Reviews</a>
              <a href="#compare" style={{ color: "inherit", textDecoration: "none" }}>Compare</a>
              <a href="#compare" style={{ color: "inherit", textDecoration: "none" }}>Finder</a>
            </div>
          </div>

          <div>
            <div style={{ color: "#ffffff", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
              DISCOVER
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              <a href="#brands" style={{ color: "inherit", textDecoration: "none" }}>Brands</a>
              <a href="#drop" style={{ color: "inherit", textDecoration: "none" }}>Releases</a>
              <a href="#featured" style={{ color: "inherit", textDecoration: "none" }}>Sneakers</a>
            </div>
          </div>

          <div>
            <div style={{ color: "#ffffff", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
              INFORMATION
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              <span>About D.BELL</span>
              <span>Affiliate disclosure</span>
              <span>Privacy &amp; cookies</span>
              <span>Contact</span>
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: "1160px",
            margin: "1.25rem auto 0 auto",
            fontSize: "0.72rem",
            color: "#737373",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.65rem" }}>
            <span>© 2026 D.BELL — Concept prototype</span>
            <span>Independent editorial platform · Not a retailer</span>
          </div>
          <p style={{ margin: 0, lineHeight: 1.5 }}>
            Affiliate disclosure: this prototype contains no active affiliate links and does not represent existing commercial partnerships. If affiliate links are added in the future, they will be clearly identified. Product details and scores shown in this demo are illustrative and must not be treated as verified buying advice.
          </p>
        </div>
      </footer>
    </main>
  );
}
