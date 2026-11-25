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
  summaryEs: string;
  summaryEn: string;
  fitEs: string;
  fitEn: string;
  accent: string;
  code: string;
};

const SNEAKERS: Sneaker[] = [
  {
    id: "pegasus-41",
    name: "Pegasus 41",
    brand: "NIKE · RUNNING",
    category: "RUNNING",
    badgeEs: "RODAJE DIARIO",
    badgeEn: "DAILY RUNNING",
    score: 88,
    price: "€139*",
    summaryEs: "Zapatilla versátil para rodajes diarios con respuesta equilibrada.",
    summaryEn: "Versatile daily trainer with balanced and responsive cushioning.",
    fitEs: "Talla habitual · Amortiguación reactiva para asfalto.",
    fitEn: "True to size · Responsive cushioning for road runs.",
    accent: "#991b1b",
    code: "NK-P41",
  },
  {
    id: "ultraboost",
    name: "Ultraboost",
    brand: "ADIDAS · RUNNING",
    category: "RUNNING",
    badgeEs: "ENFOQUE CONFORT",
    badgeEn: "COMFORT FOCUS",
    score: 90,
    price: "€180*",
    summaryEs: "Enfocada en suavidad prolongada y sensación envolvente en el pie.",
    summaryEn: "Focused on long-lasting softness and a snug, supportive feel.",
    fitEs: "Ajuste tipo calcetín · Ideal para uso prolongado y caminar.",
    fitEn: "Sock-like fit · Great for all-day wear and walking.",
    accent: "#1e293b",
    code: "AD-UB01",
  },
  {
    id: "nb-9060",
    name: "9060",
    brand: "NEW BALANCE · LIFESTYLE",
    category: "LIFESTYLE",
    badgeEs: "ICONO URBANO",
    badgeEn: "STREET ICON",
    score: 89,
    price: "€190*",
    summaryEs: "Silueta urbana de suela esculpida inspirada en el archivo running.",
    summaryEn: "Sculpted street silhouette rooted in running heritage.",
    fitEs: "Horma equilibrada · Estética marcada para calle y diario.",
    fitEn: "Balanced fit · Bold proportions for everyday street style.",
    accent: "#334155",
    code: "NB-9060",
  },
  {
    id: "chuck-70",
    name: "Chuck 70",
    brand: "CONVERSE · LIFESTYLE",
    category: "LIFESTYLE",
    badgeEs: "CLÁSICO DIARIO",
    badgeEn: "EVERYDAY CLASSIC",
    score: 84,
    price: "€95*",
    summaryEs: "Clásico atemporal con lona más densa y plantilla reforzada.",
    summaryEn: "Timeless classic with heavier canvas and reinforced footbed.",
    fitEs: "Perfil clásico · Combina con estilo casual y urbano.",
    fitEn: "Classic profile · Easy pairing for casual daily outfits.",
    accent: "#44403c",
    code: "CV-C70",
  },
  {
    id: "clifton",
    name: "Clifton",
    brand: "HOKA · WALKING",
    category: "TRAINING",
    badgeEs: "AMORTIGUACIÓN LIGERA",
    badgeEn: "LIGHT CUSHIONING",
    score: 90,
    price: "€150*",
    summaryEs: "Amortiguación generosa con peso contenido para largas jornadas.",
    summaryEn: "Generous cushioning at a light weight for long days on foot.",
    fitEs: "Pisada fluida · Prioridad absoluta en comodidad y suavidad.",
    fitEn: "Smooth stride · Built around plush comfort and ease.",
    accent: "#7f1d1d",
    code: "HK-CLF",
  },
  {
    id: "aj1",
    name: "Air Jordan 1",
    brand: "JORDAN · BASKETBALL",
    category: "BASKETBALL",
    badgeEs: "HERENCIA DE CANCHA",
    badgeEn: "COURT HERITAGE",
    score: 86,
    price: "€180*",
    summaryEs: "Referente histórico nacido en la cancha y consolidado en cultura urbana.",
    summaryEn: "Historic court icon that shaped modern sneaker culture.",
    fitEs: "Estructura firme · Ícono de colección y uso diario.",
    fitEn: "Structured build · Classic rotation staple.",
    accent: "#18181b",
    code: "JD-AJ1",
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

const UI_TEXT = {
  ES: {
    topLeft: "CULTURA SNEAKER INDEPENDIENTE Y RENDIMIENTO",
    topRight: "DESCUBRE · COMPARA · ENCUENTRA TU PAR",
    nav: ["REVISTA", "ANÁLISIS", "COMPARAR", "BUSCADOR", "MARCAS", "LANZAMIENTOS"],
    listBtn: "LISTA",
    kicker: "LA PLATAFORMA INTERNACIONAL DE SNEAKERS",
    heroTitleLine1: "ENCUENTRA TU",
    heroTitleLine2: "PRÓXIMO PASO",
    heroDesc:
      "Perspectiva independiente sobre sneakers, rendimiento y cultura urbana. Descubre el par que se mueve contigo.",
    ctaPrimary: "EXPLORAR SNEAKERS →",
    ctaSecondary: "BUSCAR TU PAR",
    archiveTag: "EDICIÓN 001",
    archiveTitle: "ARCHIVO DE PISTA Y ASFALTO",
    archiveDesc:
      "Selección editorial de confort para correr, uso diario e iconos de cancha.",
    ticker: [
      "RENDIMIENTO",
      "CULTURA URBANA",
      "NUEVOS LANZAMIENTOS",
      "PERSPECTIVA REAL",
      "ENCUENTRA TU PRÓXIMO PAR",
    ],
    editTag: "LA SELECCIÓN · 001",
    featuredTitle: "SNEAKERS DESTACADAS",
    featuredNote:
      "Selección inicial de deporte, confort diario y streetwear. Catálogo de muestra: verifica especificaciones antes de comprar.",
    catAll: "TODAS",
    addCompare: "+ COMPARAR",
    inCompare: "EN LISTA ✓",
    details: "DETALLES ↗",
    selectedPrefix: "MODELO SELECCIONADO",
    close: "CERRAR",
    editorialKicker: "HISTORIAS, CULTURA Y PERSPECTIVA",
    editorialTitle: "MÁS ALLÁ DE LA SNEAKER",
    editorialDesc:
      "Ideas editoriales para una comunidad global. Los artículos mostrados son ejemplos.",
    story1Tag: "CULTURA",
    story1Title: "MÁS QUE UNA SILUETA",
    story1Body:
      "Cómo las zapatillas conectan deporte, identidad, diseño y vida diaria.",
    story1Cta: "EXPLORAR CULTURA ↗",
    story2Tag: "GUÍA DE USO",
    story2Title: "ELIGE CON PROPÓSITO",
    story2Body:
      "Entiende amortiguación, ajuste y uso antes de elegir tu próximo par.",
    story2Cta: "BUSCAR TU PAR ↗",
    compareKicker: "DECIDE BIEN",
    compareTitle: "TU LISTA COMPARATIVA",
    compareDesc:
      "Elige hasta tres modelos en las tarjetas para compararlos lado a lado.",
    remove: "Quitar",
    finderKicker: "MATCH RÁPIDO",
    finderTitle: "¿QUÉ ES LO MÁS IMPORTANTE?",
    priorityLabel: "Selecciona tu prioridad",
    priorities: [
      { value: "Comfort", label: "Confort" },
      { value: "Versatility", label: "Versatilidad" },
      { value: "Style", label: "Estilo" },
    ],
    recLabel: "ELECCIÓN RECOMENDADA",
    brandsKicker: "LAS MARCAS QUE MARCAN EL RITMO",
    brandsTitle: "EXPLORAR MARCAS",
    systemKicker: "HECHO PARA CRECER",
    systemTitle: "EL SISTEMA D.BELL",
    sys1Tag: "01 / EDITORIAL",
    sys1Title: "LABORATORIO DE PRUEBAS",
    sys1Body:
      "Pruebas transparentes, criterios claros y límites honestos en cada modelo.",
    sys2Tag: "02 / ANÁLISIS",
    sys2Title: "PUNTUACIÓN D.BELL",
    sys2Body:
      "Marco ponderado de confort, construcción, diseño, valor y versatilidad.",
    sys3Tag: "03 / TIENDAS",
    sys3Title: "MULTITIENDA",
    sys3Body:
      "Pensado para conectar distribuidores autorizados y calendarios de lanzamientos.",
    footerKicker: "NO TE PIERDAS NADA",
    footerTitle: "RECIBE EL PRÓXIMO DROP.",
    placeholder: "Tu correo electrónico",
    submit: "APUNTARME ↗",
    joined: "APUNTADO ✓",
  },
  EN: {
    topLeft: "INDEPENDENT SNEAKER CULTURE & PERFORMANCE",
    topRight: "DISCOVER · COMPARE · FIND YOUR PAIR",
    nav: ["MAGAZINE", "REVIEWS", "COMPARE", "FINDER", "BRANDS", "RELEASES"],
    listBtn: "LIST",
    kicker: "THE INTERNATIONAL SNEAKER PLATFORM",
    heroTitleLine1: "FIND YOUR",
    heroTitleLine2: "NEXT MOVE",
    heroDesc:
      "Independent perspective on sneakers, performance and street culture. Discover the pair that moves with you.",
    ctaPrimary: "EXPLORE SNEAKERS →",
    ctaSecondary: "FIND YOUR PAIR",
    archiveTag: "EDITION 001",
    archiveTitle: "COURT & ROAD ARCHIVE",
    archiveDesc:
      "Curated comparison of running comfort, daily lifestyle and court icons.",
    ticker: [
      "PERFORMANCE",
      "STREET CULTURE",
      "NEW RELEASES",
      "REAL PERSPECTIVE",
      "DISCOVER YOUR NEXT PAIR",
    ],
    editTag: "THE EDIT · 001",
    featuredTitle: "FEATURED SNEAKERS",
    featuredNote:
      "A starting selection across sport, everyday comfort and streetwear. Demo catalogue — verify specifications before purchase.",
    catAll: "ALL SNEAKERS",
    addCompare: "+ ADD TO COMPARE",
    inCompare: "IN COMPARE ✓",
    details: "DETAILS ↗",
    selectedPrefix: "SELECTED MODEL",
    close: "CLOSE",
    editorialKicker: "STORIES, CULTURE & PERSPECTIVE",
    editorialTitle: "BEYOND THE SNEAKER",
    editorialDesc:
      "Editorial ideas for a global sneaker audience. Articles shown here are sample concepts.",
    story1Tag: "CULTURE FEATURE",
    story1Title: "MORE THAN A SILHOUETTE",
    story1Body:
      "How sneakers move between sport, identity, design and everyday life.",
    story1Cta: "EXPLORE THE CULTURE ↗",
    story2Tag: "PERFORMANCE GUIDE",
    story2Title: "CHOOSE WITH PURPOSE",
    story2Body:
      "Understand cushioning, fit and use before choosing your next pair.",
    story2Cta: "FIND YOUR PAIR ↗",
    compareKicker: "MAKE THE RIGHT CALL",
    compareTitle: "COMPARE YOUR SHORTLIST",
    compareDesc:
      "Select up to three models in the sneaker cards to compare side by side.",
    remove: "Remove",
    finderKicker: "QUICK MATCH",
    finderTitle: "WHAT MATTERS MOST?",
    priorityLabel: "Select your priority",
    priorities: [
      { value: "Comfort", label: "Comfort" },
      { value: "Versatility", label: "Versatility" },
      { value: "Style", label: "Style" },
    ],
    recLabel: "RECOMMENDED PICK",
    brandsKicker: "THE NAMES SHAPING THE GAME",
    brandsTitle: "EXPLORE BRANDS",
    systemKicker: "BUILT TO GROW",
    systemTitle: "THE D.BELL SYSTEM",
    sys1Tag: "01 / EDITORIAL",
    sys1Title: "TEST LAB",
    sys1Body:
      "Transparent product testing, clear criteria and honest limitations.",
    sys2Tag: "02 / INTELLIGENCE",
    sys2Title: "D.BELL SCORE",
    sys2Body:
      "A weighted editorial framework for comfort, construction, design, value and versatility.",
    sys3Tag: "03 / COMMERCE",
    sys3Title: "MULTI-RETAILER",
    sys3Body:
      "Designed to connect authorized retailers and drop calendars cleanly.",
    footerKicker: "STAY IN THE LOOP",
    footerTitle: "GET THE NEXT DROP.",
    placeholder: "Your email address",
    submit: "SIGN ME UP ↗",
    joined: "JOINED ✓",
  },
} as const;

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("ES");
  const [selectedCategory, setSelectedCategory] = useState<Category>("ALL");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [compareIds, setCompareIds] = useState<string[]>(["pegasus-41", "ultraboost"]);
  const [activeDetailId, setActiveDetailId] = useState<string | null>("pegasus-41");
  const [priority, setPriority] = useState<string>("Comfort");
  const [email, setEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const t = UI_TEXT[lang];
  const categories: { key: Category; label: string }[] = [
    { key: "ALL", label: t.catAll },
    { key: "RUNNING", label: "RUNNING" },
    { key: "LIFESTYLE", label: "LIFESTYLE" },
    { key: "TRAINING", label: "TRAINING" },
    { key: "BASKETBALL", label: "BASKETBALL" },
  ];

  const visibleSneakers = SNEAKERS.filter((item) => {
    const matchesCategory =
      selectedCategory === "ALL" || item.category === selectedCategory;
    const matchesBrand =
      !selectedBrand || item.brand.toUpperCase().includes(selectedBrand);
    return matchesCategory && matchesBrand;
  });

  const comparedSneakers = SNEAKERS.filter((item) => compareIds.includes(item.id));
  const activeDetail = SNEAKERS.find((item) => item.id === activeDetailId) ?? null;

  const recommendedSneaker =
    priority === "Style"
      ? SNEAKERS.find((s) => s.id === "nb-9060") ?? SNEAKERS[0]
      : priority === "Versatility"
      ? SNEAKERS.find((s) => s.id === "pegasus-41") ?? SNEAKERS[0]
      : SNEAKERS.find((s) => s.id === "ultraboost") ?? SNEAKERS[0];

  function toggleCompare(id: string) {
    setCompareIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), id];
      }
      return [...prev, id];
    });
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7f6f2",
        color: "#111111",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          backgroundColor: "#141414",
          color: "#a3a3a3",
          fontSize: "0.7rem",
          letterSpacing: "0.08em",
          padding: "0.5rem 1.25rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "0.5rem",
          borderBottom: "1px solid #262626",
        }}
      >
        <span>{t.topLeft}</span>
        <span>{t.topRight}</span>
      </div>

      {/* Header */}
      <header
        style={{
          backgroundColor: "#111111",
          color: "#ffffff",
          padding: "1rem 1.25rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          position: "sticky",
          top: 0,
          zIndex: 20,
          borderBottom: "1px solid #262626",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          <a
            href="#top"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 900,
              fontSize: "1.25rem",
              letterSpacing: "0.04em",
            }}
          >
            D.BELL
          </a>
          <nav
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.95rem",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "#d4d4d4",
            }}
          >
            <a href="#editorial" style={{ color: "inherit", textDecoration: "none" }}>{t.nav[0]}</a>
            <a href="#featured" style={{ color: "inherit", textDecoration: "none" }}>{t.nav[1]}</a>
            <a href="#compare" style={{ color: "inherit", textDecoration: "none" }}>{t.nav[2]}</a>
            <a href="#finder" style={{ color: "inherit", textDecoration: "none" }}>{t.nav[3]}</a>
            <a href="#brands" style={{ color: "inherit", textDecoration: "none" }}>{t.nav[4]}</a>
            <a href="#system" style={{ color: "inherit", textDecoration: "none" }}>{t.nav[5]}</a>
          </nav>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.72rem" }}>
          <button
            type="button"
            onClick={() => setLang((prev) => (prev === "ES" ? "EN" : "ES"))}
            style={{
              backgroundColor: "#262626",
              color: "#ffffff",
              border: "1px solid #525252",
              padding: "0.35rem 0.65rem",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            {lang === "ES" ? "ES / EN → EN" : "EN / ES → ES"}
          </button>
          <a
            href="#compare"
            style={{
              backgroundColor: "#dc2626",
              color: "#ffffff",
              padding: "0.35rem 0.65rem",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            {t.listBtn} ({compareIds.length})
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="top"
        style={{
          background:
            "linear-gradient(120deg, #111111 0%, #1c1917 58%, #291515 100%)",
          color: "#ffffff",
          padding: "3.5rem 1.25rem",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#ef4444",
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                margin: "0 0 0.85rem 0",
              }}
            >
              {t.kicker}
            </p>
            <h1
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
                lineHeight: 0.98,
                fontWeight: 900,
                letterSpacing: "-0.02em",
                margin: "0 0 1.1rem 0",
              }}
            >
              {t.heroTitleLine1}
              <br />
              {t.heroTitleLine2}
              <span style={{ color: "#dc2626" }}>.</span>
            </h1>
            <p
              style={{
                color: "#d4d4d4",
                fontSize: "0.98rem",
                lineHeight: 1.6,
                maxWidth: "490px",
                margin: "0 0 1.6rem 0",
              }}
            >
              {t.heroDesc}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <a
                href="#featured"
                style={{
                  backgroundColor: "#dc2626",
                  color: "#ffffff",
                  padding: "0.8rem 1.2rem",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                }}
              >
                {t.ctaPrimary}
              </a>
              <a
                href="#finder"
                style={{
                  border: "1px solid #525252",
                  color: "#ffffff",
                  padding: "0.8rem 1.2rem",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                }}
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Visual Showcase Panel */}
          <div
            style={{
              backgroundColor: "#18181b",
              border: "1px solid #27272a",
              padding: "1.25rem",
            }}
          >
            <div
              style={{
                background:
                  "linear-gradient(135deg, #27272a 0%, #111111 60%, #7f1d1d 100%)",
                border: "1px solid #3f3f46",
                padding: "2rem 1.25rem",
                marginBottom: "0.9rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#dc2626",
                    color: "#ffffff",
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    padding: "0.25rem 0.5rem",
                  }}
                >
                  {t.archiveTag}
                </span>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#fca5a5" }}>
                  DB-01
                </span>
              </div>
              <p style={{ fontSize: "1.45rem", fontWeight: 900, margin: "0 0 0.4rem 0" }}>
                {t.archiveTitle}
              </p>
              <p style={{ color: "#d4d4d4", fontSize: "0.88rem", margin: 0 }}>
                {t.archiveDesc}
              </p>
            </div>
            <p
              style={{
                color: "#a1a1aa",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                margin: 0,
                textAlign: "right",
              }}
            >
              EST. FOR THE NEXT GENERATION OF SNEAKER CULTURE · 001
            </p>
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
          gap: "0.75rem",
        }}
      >
        {t.ticker.map((item, idx) => (
          <span key={item}>
            {item}
            {idx < t.ticker.length - 1 ? "  ✦" : ""}
          </span>
        ))}
      </div>

      {/* Featured Sneakers + Tabs */}
      <section
        id="featured"
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "3rem 1.25rem",
        }}
      >
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
            <p
              style={{
                color: "#dc2626",
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.12em",
                margin: "0 0 0.35rem 0",
              }}
            >
              {t.editTag}
            </p>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 900,
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              {t.featuredTitle}
            </h2>
          </div>

          <p
            style={{
              color: "#525252",
              fontSize: "0.84rem",
              maxWidth: "360px",
              margin: 0,
              lineHeight: 1.45,
            }}
          >
            {t.featuredNote}
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "1.5rem",
          }}
        >
          {categories.map((cat) => {
            const active = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.key);
                  setSelectedBrand(null);
                }}
                style={{
                  backgroundColor: active ? "#111111" : "#ffffff",
                  color: active ? "#ffffff" : "#111111",
                  border: "1px solid #111111",
                  padding: "0.55rem 0.9rem",
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                }}
              >
                {cat.label}
              </button>
            );
          })}
          {selectedBrand && (
            <button
              type="button"
              onClick={() => setSelectedBrand(null)}
              style={{
                backgroundColor: "#dc2626",
                color: "#ffffff",
                border: "1px solid #dc2626",
                padding: "0.55rem 0.9rem",
                fontSize: "0.72rem",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              {selectedBrand} ✕
            </button>
          )}
        </div>

        {/* Sneaker Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.1rem",
          }}
        >
          {visibleSneakers.map((item) => {
            const isCompared = compareIds.includes(item.id);
            return (
              <article
                key={item.id}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e5e5",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      background: `linear-gradient(135deg, ${item.accent} 0%, #111111 100%)`,
                      color: "#ffffff",
                      padding: "1.15rem 1.25rem",
                      minHeight: "130px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span
                        style={{
                          backgroundColor: "#111111",
                          color: "#ffffff",
                          fontSize: "0.65rem",
                          fontWeight: 800,
                          letterSpacing: "0.08em",
                          padding: "0.25rem 0.5rem",
                        }}
                      >
                        {lang === "ES" ? item.badgeEs : item.badgeEn}
                      </span>
                      <span style={{ fontSize: "0.72rem", fontWeight: 800, opacity: 0.85 }}>
                        {item.code}
                      </span>
                    </div>
                    <span style={{ fontSize: "0.72rem", letterSpacing: "0.08em", opacity: 0.9 }}>
                      {item.category}
                    </span>
                  </div>

                  <div style={{ padding: "1rem" }}>
                    <p
                      style={{
                        color: "#737373",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        margin: "0 0 0.25rem 0",
                      }}
                    >
                      {item.brand}
                    </p>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 800, margin: "0 0 0.45rem 0" }}>
                      {item.name}
                    </h3>
                    <p style={{ color: "#525252", fontSize: "0.86rem", lineHeight: 1.45, margin: "0 0 0.9rem 0" }}>
                      {lang === "ES" ? item.summaryEs : item.summaryEn}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        borderTop: "1px solid #f0f0f0",
                        paddingTop: "0.7rem",
                      }}
                    >
                      <div>
                        <strong style={{ fontSize: "1.25rem", fontWeight: 900 }}>
                          {item.score}
                        </strong>
                        <span style={{ color: "#737373", fontSize: "0.75rem" }}> / 100</span>
                        <div style={{ color: "#737373", fontSize: "0.65rem", fontWeight: 700 }}>
                          D.BELL SCORE*
                        </div>
                      </div>
                      <strong style={{ fontSize: "1.05rem" }}>{item.price}</strong>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.5rem",
                    padding: "0 1rem 1rem 1rem",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleCompare(item.id)}
                    style={{
                      backgroundColor: isCompared ? "#111111" : "#ffffff",
                      color: isCompared ? "#ffffff" : "#111111",
                      border: "1px solid #111111",
                      padding: "0.55rem",
                      fontSize: "0.68rem",
                      fontWeight: 800,
                      cursor: "pointer",
                    }}
                  >
                    {isCompared ? t.inCompare : t.addCompare}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveDetailId(item.id)}
                    style={{
                      backgroundColor: "#f5f5f4",
                      color: "#111111",
                      border: "1px solid #d4d4d4",
                      padding: "0.55rem",
                      fontSize: "0.68rem",
                      fontWeight: 800,
                      cursor: "pointer",
                    }}
                  >
                    {t.details}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Active Detail Box */}
        {activeDetail && (
          <div
            style={{
              marginTop: "1.25rem",
              backgroundColor: "#ffffff",
              borderLeft: "4px solid #dc2626",
              borderTop: "1px solid #e5e5e5",
              borderRight: "1px solid #e5e5e5",
              borderBottom: "1px solid #e5e5e5",
              padding: "1.1rem 1.25rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div>
              <span style={{ fontSize: "0.68rem", fontWeight: 800, color: "#dc2626" }}>
                {t.selectedPrefix} · {activeDetail.brand}
              </span>
              <h4 style={{ margin: "0.2rem 0", fontSize: "1.1rem" }}>
                {activeDetail.name} — {activeDetail.price} ({activeDetail.score}/100)
              </h4>
              <p style={{ margin: 0, fontSize: "0.88rem", color: "#525252" }}>
                {lang === "ES" ? activeDetail.fitEs : activeDetail.fitEn}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setActiveDetailId(null)}
              style={{
                backgroundColor: "transparent",
                border: "1px solid #d4d4d4",
                padding: "0.45rem 0.75rem",
                fontSize: "0.72rem",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {t.close}
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
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
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
              <p
                style={{
                  color: "#ef4444",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  margin: "0 0 0.35rem 0",
                }}
              >
                {t.editorialKicker}
              </p>
              <h2 style={{ fontSize: "2rem", fontWeight: 900, margin: 0 }}>
                {t.editorialTitle}
              </h2>
            </div>
            <p style={{ color: "#a3a3a3", fontSize: "0.84rem", maxWidth: "360px", margin: 0 }}>
              {t.editorialDesc}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.1rem",
            }}
          >
            <article
              style={{
                backgroundColor: "#1c1917",
                border: "1px solid #292524",
                padding: "1.5rem",
              }}
            >
              <span style={{ color: "#ef4444", fontSize: "0.68rem", fontWeight: 800 }}>
                {t.story1Tag}
              </span>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 900, margin: "0.5rem 0" }}>
                {t.story1Title}
              </h3>
              <p style={{ color: "#d4d4d4", fontSize: "0.9rem", lineHeight: 1.5, margin: "0 0 1rem 0" }}>
                {t.story1Body}
              </p>
              <a
                href="#featured"
                style={{ color: "#ef4444", fontSize: "0.75rem", fontWeight: 800, textDecoration: "none" }}
              >
                {t.story1Cta}
              </a>
            </article>

            <article
              style={{
                backgroundColor: "#1c1917",
                border: "1px solid #292524",
                padding: "1.5rem",
              }}
            >
              <span style={{ color: "#ef4444", fontSize: "0.68rem", fontWeight: 800 }}>
                {t.story2Tag}
              </span>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 900, margin: "0.5rem 0" }}>
                {t.story2Title}
              </h3>
              <p style={{ color: "#d4d4d4", fontSize: "0.9rem", lineHeight: 1.5, margin: "0 0 1rem 0" }}>
                {t.story2Body}
              </p>
              <a
                href="#finder"
                style={{ color: "#ef4444", fontSize: "0.75rem", fontWeight: 800, textDecoration: "none" }}
              >
                {t.story2Cta}
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Compare Shortlist + Finder */}
      <section
        id="compare"
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "3rem 1.25rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          gap: "1.5rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e5e5",
            padding: "1.5rem",
          }}
        >
          <p style={{ color: "#dc2626", fontSize: "0.7rem", fontWeight: 800, margin: "0 0 0.25rem 0" }}>
            {t.compareKicker}
          </p>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, margin: "0 0 0.75rem 0" }}>
            {t.compareTitle}
          </h2>
          <p style={{ color: "#525252", fontSize: "0.86rem", margin: "0 0 1rem 0" }}>
            {t.compareDesc}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {comparedSneakers.map((s) => (
              <div
                key={s.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.65rem 0.8rem",
                  backgroundColor: "#f7f6f2",
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
                  {t.remove}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div
          id="finder"
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e5e5",
            padding: "1.5rem",
          }}
        >
          <p style={{ color: "#dc2626", fontSize: "0.7rem", fontWeight: 800, margin: "0 0 0.25rem 0" }}>
            {t.finderKicker}
          </p>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, margin: "0 0 0.75rem 0" }}>
            {t.finderTitle}
          </h2>

          <label
            htmlFor="priority-select"
            style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, marginBottom: "0.4rem" }}
          >
            {t.priorityLabel}
          </label>
          <select
            id="priority-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            style={{
              width: "100%",
              padding: "0.65rem",
              border: "1px solid #d4d4d4",
              backgroundColor: "#ffffff",
              fontSize: "0.9rem",
              marginBottom: "1rem",
            }}
          >
            {t.priorities.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>

          <div
            style={{
              backgroundColor: "#111111",
              color: "#ffffff",
              padding: "1rem",
            }}
          >
            <span style={{ color: "#ef4444", fontSize: "0.68rem", fontWeight: 800 }}>
              {t.recLabel}
            </span>
            <h3 style={{ margin: "0.25rem 0", fontSize: "1.1rem" }}>
              {recommendedSneaker.name} ({recommendedSneaker.price})
            </h3>
            <p style={{ margin: 0, fontSize: "0.84rem", color: "#d4d4d4" }}>
              {lang === "ES" ? recommendedSneaker.summaryEs : recommendedSneaker.summaryEn}
            </p>
          </div>
        </div>
      </section>

      {/* Explore Brands */}
      <section
        id="brands"
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "1rem 1.25rem 3rem 1.25rem",
        }}
      >
        <p style={{ color: "#dc2626", fontSize: "0.7rem", fontWeight: 800, margin: "0 0 0.25rem 0" }}>
          {t.brandsKicker}
        </p>
        <h2 style={{ fontSize: "1.85rem", fontWeight: 900, margin: "0 0 1.25rem 0" }}>
          {t.brandsTitle}
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
                setSelectedCategory("ALL");
                document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                backgroundColor: selectedBrand === brand ? "#111111" : "#ffffff",
                color: selectedBrand === brand ? "#ffffff" : "#111111",
                border: "1px solid #e5e5e5",
                padding: "0.9rem 0.75rem",
                fontSize: "0.78rem",
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

      {/* The D.BELL System */}
      <section
        id="system"
        style={{
          backgroundColor: "#111111",
          color: "#ffffff",
          padding: "3rem 1.25rem",
        }}
      >
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <p style={{ color: "#ef4444", fontSize: "0.7rem", fontWeight: 800, margin: "0 0 0.25rem 0" }}>
            {t.systemKicker}
          </p>
          <h2 style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 1.5rem 0" }}>
            {t.systemTitle}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            <div style={{ backgroundColor: "#18181b", border: "1px solid #27272a", padding: "1.25rem" }}>
              <span style={{ color: "#ef4444", fontSize: "0.7rem", fontWeight: 800 }}>{t.sys1Tag}</span>
              <h3 style={{ margin: "0.4rem 0", fontSize: "1.15rem" }}>{t.sys1Title}</h3>
              <p style={{ color: "#a3a3a3", fontSize: "0.86rem", margin: 0 }}>
                {t.sys1Body}
              </p>
            </div>
            <div style={{ backgroundColor: "#18181b", border: "1px solid #27272a", padding: "1.25rem" }}>
              <span style={{ color: "#ef4444", fontSize: "0.7rem", fontWeight: 800 }}>{t.sys2Tag}</span>
              <h3 style={{ margin: "0.4rem 0", fontSize: "1.15rem" }}>{t.sys2Title}</h3>
              <p style={{ color: "#a3a3a3", fontSize: "0.86rem", margin: 0 }}>
                {t.sys2Body}
              </p>
            </div>
            <div style={{ backgroundColor: "#18181b", border: "1px solid #27272a", padding: "1.25rem" }}>
              <span style={{ color: "#ef4444", fontSize: "0.7rem", fontWeight: 800 }}>{t.sys3Tag}</span>
              <h3 style={{ margin: "0.4rem 0", fontSize: "1.15rem" }}>{t.sys3Title}</h3>
              <p style={{ color: "#a3a3a3", fontSize: "0.86rem", margin: 0 }}>
                {t.sys3Body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Red Newsletter Footer */}
      <footer
        style={{
          backgroundColor: "#dc2626",
          color: "#ffffff",
          padding: "2.5rem 1.25rem",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.25rem",
          }}
        >
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", margin: "0 0 0.25rem 0" }}>
              {t.footerKicker}
            </p>
            <h2 style={{ fontSize: "1.85rem", fontWeight: 900, margin: 0 }}>
              {t.footerTitle}
            </h2>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
            }}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.placeholder}
              style={{
                padding: "0.75rem 1rem",
                border: "none",
                minWidth: "220px",
                color: "#111111",
                backgroundColor: "#ffffff",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#111111",
                color: "#ffffff",
                border: "none",
                padding: "0.75rem 1.1rem",
                fontWeight: 800,
                fontSize: "0.75rem",
                cursor: "pointer",
              }}
            >
              {subscribed ? t.joined : t.submit}
            </button>
          </form>
        </div>
      </footer>
    </main>
  );
}
