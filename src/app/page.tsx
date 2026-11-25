export default function HomePage() {
  const sneakers = [
    {
      name: "Pegasus 41",
      brand: "NIKE · RUNNING",
      tag: "DAILY RUNNING",
      note: "Ritmo diario y respuesta equilibrada.",
    },
    {
      name: "Ultraboost",
      brand: "ADIDAS · RUNNING",
      tag: "COMFORT FOCUS",
      note: "Amortiguación suave para uso prolongado.",
    },
    {
      name: "9060",
      brand: "NEW BALANCE · LIFESTYLE",
      tag: "STREET ICON",
      note: "Estética urbana con volumen clásico.",
    },
    {
      name: "Gel-Nimbus",
      brand: "ASICS · RUNNING",
      tag: "MAX CUSHIONING",
      note: "Protección extra en tiradas largas.",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#faf9f6",
        color: "#111111",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Franja superior */}
      <div
        style={{
          backgroundColor: "#141414",
          color: "#a3a3a3",
          fontSize: "0.72rem",
          padding: "0.45rem 1.25rem",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #262626",
        }}
      >
        <span>INDEPENDENT SNEAKER CULTURE &amp; PERFORMANCE</span>
        <span>DISCOVER · COMPARE · FIND YOUR PAIR</span>
      </div>

      {/* Cabecera */}
      <header
        style={{
          backgroundColor: "#111111",
          color: "#ffffff",
          padding: "1rem 1.25rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <strong style={{ fontSize: "1.2rem", letterSpacing: "0.06em" }}>
          D.BELL
        </strong>
        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.9rem",
            fontSize: "0.75rem",
            letterSpacing: "0.05em",
            color: "#d4d4d4",
          }}
        >
          <span>MAGAZINE</span>
          <span>REVIEWS</span>
          <span>COMPARE</span>
          <span>FINDER</span>
          <span>BRANDS</span>
          <span>RELEASES</span>
        </nav>
      </header>

      {/* Hero oscuro */}
      <section
        style={{
          backgroundColor: "#171717",
          color: "#ffffff",
          padding: "3.5rem 1.25rem",
          borderBottom: "4px solid #dc2626",
        }}
      >
        <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
          <p
            style={{
              color: "#ef4444",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              margin: "0 0 0.75rem 0",
            }}
          >
            THE INTERNATIONAL SNEAKER PLATFORM
          </p>
          <h1
            style={{
              fontSize: "2.4rem",
              lineHeight: 1.05,
              fontWeight: 800,
              margin: "0 0 1rem 0",
            }}
          >
            FIND YOUR NEXT MOVE<span style={{ color: "#dc2626" }}>.</span>
          </h1>
          <p
            style={{
              color: "#d4d4d4",
              maxWidth: "560px",
              lineHeight: 1.6,
              margin: "0 0 1.5rem 0",
            }}
          >
            Perspectiva independiente sobre sneakers, rendimiento y cultura
            urbana. Encuentra el par que encaja contigo.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <a
              href="#featured"
              style={{
                backgroundColor: "#dc2626",
                color: "#ffffff",
                padding: "0.7rem 1.15rem",
                fontSize: "0.78rem",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              EXPLORE SNEAKERS →
            </a>
            <a
              href="#featured"
              style={{
                border: "1px solid #525252",
                color: "#ffffff",
                padding: "0.7rem 1.15rem",
                fontSize: "0.78rem",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              FIND YOUR PAIR
            </a>
          </div>
        </div>
      </section>

      {/* Cinta roja */}
      <div
        style={{
          backgroundColor: "#dc2626",
          color: "#ffffff",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          padding: "0.65rem 1.25rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span>PERFORMANCE</span>
        <span>·</span>
        <span>STREET CULTURE</span>
        <span>·</span>
        <span>NEW RELEASES</span>
        <span>·</span>
        <span>REAL PERSPECTIVE</span>
      </div>

      {/* Catálogo destacado */}
      <section
        id="featured"
        style={{
          maxWidth: "1040px",
          margin: "0 auto",
          padding: "2.5rem 1.25rem",
        }}
      >
        <p
          style={{
            color: "#dc2626",
            fontSize: "0.72rem",
            letterSpacing: "0.1em",
            fontWeight: 700,
            margin: "0 0 0.35rem 0",
          }}
        >
          THE EDIT · 001
        </p>
        <h2
          style={{
            fontSize: "1.85rem",
            fontWeight: 800,
            margin: "0 0 1.5rem 0",
          }}
        >
          FEATURED SNEAKERS
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "1rem",
          }}
        >
          {sneakers.map((item) => (
            <article
              key={item.name}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e5e5",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "#262626",
                  color: "#ffffff",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  padding: "0.35rem 0.55rem",
                  display: "inline-block",
                  marginBottom: "0.85rem",
                }}
              >
                {item.tag}
              </div>
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "#737373",
                  letterSpacing: "0.05em",
                  margin: "0 0 0.25rem 0",
                }}
              >
                {item.brand}
              </p>
              <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.4rem 0" }}>
                {item.name}
              </h3>
              <p style={{ fontSize: "0.88rem", color: "#525252", margin: 0 }}>
                {item.note}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
