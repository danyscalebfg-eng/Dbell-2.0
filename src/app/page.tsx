"use client";

import { useState } from "react";

type Category = "ALL" | "RUNNING" | "LIFESTYLE" | "TRAINING" | "BASKETBALL";

type Sneaker = {
  id: string;
  name: string;
  brand: string;
  category: Exclude<Category, "ALL">;
  badge: string;
  score: number;
  price: string;
  summary: string;
  fitNote: string;
  accent: string;
};

const SNEAKERS: Sneaker[] = [
  {
    id: "pegasus-41",
    name: "Pegasus 41",
    brand: "NIKE · RUNNING",
    category: "RUNNING",
    badge: "DAILY RUNNING",
    score: 88,
    price: "€139*",
    summary: "Zapatilla versátil para rodajes diarios con respuesta equilibrada.",
    fitNote: "Talla habitual · Amortiguación reactiva para asfalto.",
    accent: "#b91c1c",
  },
  {
    id: "ultraboost",
    name: "Ultraboost",
    brand: "ADIDAS · RUNNING",
    category: "RUNNING",
    badge: "COMFORT FOCUS",
    score: 90,
    price: "€180*",
    summary: "Enfocada en suavidad prolongada y sensación envolvente en el pie.",
    fitNote: "Ajuste tipo calcetín · Ideal para uso prolongado y caminar.",
    accent: "#1f2937",
  },
  {
    id: "nb-9060",
    name: "9060",
    brand: "NEW BALANCE · LIFESTYLE",
    category: "LIFESTYLE",
    badge: "STREET ICON",
    score: 89,
    price: "€190*",
    summary: "Silueta urbana de suela esculpida inspirada en el archivo running.",
    fitNote: "Horma equilibrada · Estética marcada para calle y diario.",
    accent: "#334155",
  },
  {
    id: "chuck-70",
    name: "Chuck 70",
    brand: "CONVERSE · LIFESTYLE",
    category: "LIFESTYLE",
    badge: "EVERYDAY CLASSIC",
    score: 84,
    price: "€95*",
    summary: "Clásico atemporal con lona más densa y plantilla reforzada.",
    fitNote: "Perfil bajo/clásico · Combina con estilo casual y urbano.",
    accent: "#525252",
  },
  {
    id: "clifton",
    name: "Clifton",
    brand: "HOKA · WALKING",
    category: "TRAINING",
    badge: "LIGHT CUSHIONING",
    score: 90,
    price: "€150*",
    summary: "Amortiguación generosa con peso contenido para largas jornadas.",
    fitNote: "Pisada fluida · Prioridad absoluta en comodidad y suavidad.",
    accent: "#991b1b",
  },
  {
    id: "aj1",
    name: "Air Jordan 1",
    brand: "JORDAN · BASKETBALL",
    category: "BASKETBALL",
    badge: "COURT HERITAGE",
    score: 86,
    price: "€180*",
    summary: "Referente histórico nacido en la cancha y consolidado en cultura urbana.",
    fitNote: "Estructura firme · Ícono de colección y uso diario.",
    accent: "#7f1d1d",
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

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "ALL", label: "ALL SNEAKERS" },
  { key: "RUNNING", label: "RUNNING" },
  { key: "LIFESTYLE", label: "LIFESTYLE" },
  { key: "TRAINING", label: "TRAINING" },
  { key: "BASKETBALL", label: "BASKETBALL" },
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("ALL");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [compareIds, setCompareIds] = useState<string[]>(["pegasus-41", "ultraboost"]);
  const [activeDetailId, setActiveDetailId] = useState<string | null>("pegasus-41");
  const [priority, setPriority] = useState<string>("Comfort");
  const [email, setEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

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
        <span>INDEPENDENT SNEAKER CULTURE &amp; PERFORMANCE</span>
        <span>DISCOVER · COMPARE · FIND YOUR PAIR</span>
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
            <a href="#editorial" style={{ color: "inherit", textDecoration: "none" }}>
              MAGAZINE
            </a>
            <a href="#featured" style={{ color: "inherit", textDecoration: "none" }}>
              REVIEWS
            </a>
            <a href="#compare" style={{ color: "inherit", textDecoration: "none" }}>
              COMPARE
            </a>
            <a href="#finder" style={{ color: "inherit", textDecoration: "none" }}>
              FINDER
            </a>
            <a href="#brands" style={{ color: "inherit", textDecoration: "none" }}>
              BRANDS
            </a>
            <a href="#system" style={{ color: "inherit", textDecoration: "none" }}>
              RELEASES
            </a>
          </nav>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.72rem" }}>
          <span
            style={{
              backgroundColor: "#262626",
              color: "#ffffff",
              padding: "0.35rem 0.6rem",
              fontWeight: 700,
            }}
          >
            ES / EN
          </span>
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
            LIST ({compareIds.length})
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
              THE INTERNATIONAL SNEAKER PLATFORM
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
              FIND YOUR
              <br />
              NEXT MOVE<span style={{ color: "#dc2626" }}>.</span>
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
              Independent perspective on sneakers, performance and street
              culture. Discover the pair that moves with you.
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
                EXPLORE SNEAKERS →
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
                FIND YOUR PAIR
              </a>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div
            style={{
              backgroundColor: "#18181b",
              border: "1px solid #27272a",
              padding: "1.5rem",
            }}
          >
            <div
              style={{
                background:
                  "radial-gradient(circle at 70% 30%, rgba(220,38,38,0.45), rgba(24,24,27,0.95) 70%)",
                border: "1px solid #3f3f46",
                padding: "2rem 1.25rem",
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
                EDITION 001
              </span>
              <p
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 900,
                  margin: "0.85rem 0 0.35rem 0",
                }}
              >
                COURT &amp; ROAD ARCHIVE
              </p>
              <p style={{ color: "#d4d4d4", fontSize: "0.88rem", margin: 0 }}>
                Curated comparison of running comfort, daily lifestyle and court icons.
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
        <span>PERFORMANCE</span>
        <span>✦</span>
        <span>STREET CULTURE</span>
        <span>✦</span>
        <span>NEW RELEASES</span>
        <span>✦</span>
        <span>REAL PERSPECTIVE</span>
        <span>✦</span>
        <span>DISCOVER YOUR NEXT PAIR</span>
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
              THE EDIT · 001
            </p>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 900,
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              FEATURED SNEAKERS
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
            A starting selection across sport, everyday comfort and streetwear.
            Demo catalogue — verify specifications before purchase.
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
          {CATEGORIES.map((cat) => {
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
              BRAND: {selectedBrand} ✕
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
                      backgroundColor: item.accent,
                      color: "#ffffff",
                      padding: "1.25rem",
                      minHeight: "120px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: "#111111",
                        color: "#ffffff",
                        fontSize: "0.65rem",
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        padding: "0.25rem 0.5rem",
                        alignSelf: "flex-start",
                      }}
                    >
                      {item.badge}
                    </span>
                    <span style={{ fontSize: "0.72rem", opacity: 0.85 }}>
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
                      {item.summary}
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
                    {isCompared ? "IN COMPARE ✓" : "+ ADD TO COMPARE"}
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
                    DETAILS ↗
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
                SELECTED MODEL · {activeDetail.brand}
              </span>
              <h4 style={{ margin: "0.2rem 0", fontSize: "1.1rem" }}>
                {activeDetail.name} — {activeDetail.price} (Score {activeDetail.score}/100)
              </h4>
              <p style={{ margin: 0, fontSize: "0.88rem", color: "#525252" }}>
                {activeDetail.fitNote}
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
              CLOSE
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
                STORIES, CULTURE &amp; PERSPECTIVE
              </p>
              <h2 style={{ fontSize: "2rem", fontWeight: 900, margin: 0 }}>
                BEYOND THE SNEAKER
              </h2>
            </div>
            <p style={{ color: "#a3a3a3", fontSize: "0.84rem", maxWidth: "360px", margin: 0 }}>
              Editorial ideas for a global sneaker audience. Articles shown here are sample concepts.
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
                CULTURE FEATURE
              </span>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 900, margin: "0.5rem 0" }}>
                MORE THAN A SILHOUETTE
              </h3>
              <p style={{ color: "#d4d4d4", fontSize: "0.9rem", lineHeight: 1.5, margin: "0 0 1rem 0" }}>
                How sneakers move between sport, identity, design and everyday life.
              </p>
              <a
                href="#featured"
                style={{ color: "#ef4444", fontSize: "0.75rem", fontWeight: 800, textDecoration: "none" }}
              >
                EXPLORE THE CULTURE ↗
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
                PERFORMANCE GUIDE
              </span>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 900, margin: "0.5rem 0" }}>
                CHOOSE WITH PURPOSE
              </h3>
              <p style={{ color: "#d4d4d4", fontSize: "0.9rem", lineHeight: 1.5, margin: "0 0 1rem 0" }}>
                Understand cushioning, fit and use before choosing your next pair.
              </p>
              <a
                href="#finder"
                style={{ color: "#ef4444", fontSize: "0.75rem", fontWeight: 800, textDecoration: "none" }}
              >
                FIND YOUR PAIR ↗
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
            MAKE THE RIGHT CALL
          </p>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, margin: "0 0 0.75rem 0" }}>
            COMPARE YOUR SHORTLIST
          </h2>
          <p style={{ color: "#525252", fontSize: "0.86rem", margin: "0 0 1rem 0" }}>
            Select up to three models in the sneaker cards to compare side by side.
          </p>

          {comparedSneakers.length === 0 ? (
            <p style={{ color: "#737373", fontSize: "0.85rem" }}>
              No models selected yet. Click &ldquo;+ ADD TO COMPARE&rdquo; above.
            </p>
          ) : (
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
                      Score {s.score}/100 · {s.price}
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
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
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
            QUICK MATCH
          </p>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, margin: "0 0 0.75rem 0" }}>
            WHAT MATTERS MOST?
          </h2>

          <label
            htmlFor="priority-select"
            style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, marginBottom: "0.4rem" }}
          >
            Select your priority
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
            <option value="Comfort">Comfort</option>
            <option value="Versatility">Versatility</option>
            <option value="Style">Style</option>
          </select>

          <div
            style={{
              backgroundColor: "#111111",
              color: "#ffffff",
              padding: "1rem",
            }}
          >
            <span style={{ color: "#ef4444", fontSize: "0.68rem", fontWeight: 800 }}>
              RECOMMENDED PICK
            </span>
            <h3 style={{ margin: "0.25rem 0", fontSize: "1.1rem" }}>
              {recommendedSneaker.name} ({recommendedSneaker.price})
            </h3>
            <p style={{ margin: 0, fontSize: "0.84rem", color: "#d4d4d4" }}>
              {recommendedSneaker.summary}
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
          THE NAMES SHAPING THE GAME
        </p>
        <h2 style={{ fontSize: "1.85rem", fontWeight: 900, margin: "0 0 1.25rem 0" }}>
          EXPLORE BRANDS
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
            BUILT TO GROW
          </p>
          <h2 style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 1.5rem 0" }}>
            THE D.BELL SYSTEM
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            <div style={{ backgroundColor: "#18181b", border: "1px solid #27272a", padding: "1.25rem" }}>
              <span style={{ color: "#ef4444", fontSize: "0.7rem", fontWeight: 800 }}>01 / EDITORIAL</span>
              <h3 style={{ margin: "0.4rem 0", fontSize: "1.15rem" }}>TEST LAB</h3>
              <p style={{ color: "#a3a3a3", fontSize: "0.86rem", margin: 0 }}>
                Transparent product testing, clear criteria and honest limitations.
              </p>
            </div>
            <div style={{ backgroundColor: "#18181b", border: "1px solid #27272a", padding: "1.25rem" }}>
              <span style={{ color: "#ef4444", fontSize: "0.7rem", fontWeight: 800 }}>02 / INTELLIGENCE</span>
              <h3 style={{ margin: "0.4rem 0", fontSize: "1.15rem" }}>D.BELL SCORE</h3>
              <p style={{ color: "#a3a3a3", fontSize: "0.86rem", margin: 0 }}>
                A weighted editorial framework for comfort, construction, design, value and versatility.
              </p>
            </div>
            <div style={{ backgroundColor: "#18181b", border: "1px solid #27272a", padding: "1.25rem" }}>
              <span style={{ color: "#ef4444", fontSize: "0.7rem", fontWeight: 800 }}>03 / COMMERCE</span>
              <h3 style={{ margin: "0.4rem 0", fontSize: "1.15rem" }}>MULTI-RETAILER</h3>
              <p style={{ color: "#a3a3a3", fontSize: "0.86rem", margin: 0 }}>
                Designed to connect authorized retailers and drop calendars cleanly.
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
              STAY IN THE LOOP
            </p>
            <h2 style={{ fontSize: "1.85rem", fontWeight: 900, margin: 0 }}>
              GET THE NEXT DROP.
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
              placeholder="Your email address"
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
              {subscribed ? "JOINED ✓" : "SIGN ME UP ↗"}
            </button>
          </form>
        </div>
      </footer>
    </main>
  );
}
