export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b1120",
        color: "#f8fafc",
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: "2rem 1.25rem",
      }}
    >
      <div style={{ maxWidth: "880px", margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "1.25rem",
            borderBottom: "1px solid #1e293b",
          }}
        >
          <span style={{ fontWeight: 700, letterSpacing: "0.06em" }}>
            D.BELL 2.0
          </span>
          <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
            Base activa
          </span>
        </header>

        <section style={{ padding: "2.5rem 0" }}>
          <h1 style={{ fontSize: "2rem", margin: "0 0 0.75rem 0" }}>
            D.BELL 2.0
          </h1>
          <p style={{ color: "#cbd5e1", lineHeight: 1.6, margin: 0 }}>
            Base inicial de la plataforma. Aquí iremos sumando tus secciones,
            enlaces y contenidos paso a paso.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
          }}
        >
          <div
            style={{
              backgroundColor: "#111827",
              border: "1px solid #1e293b",
              borderRadius: "10px",
              padding: "1.25rem",
            }}
          >
            <h2 style={{ fontSize: "1.05rem", margin: "0 0 0.4rem 0" }}>
              Bloque 1
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem", margin: 0 }}>
              Espacio reservado para tu primera sección principal.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#111827",
              border: "1px solid #1e293b",
              borderRadius: "10px",
              padding: "1.25rem",
            }}
          >
            <h2 style={{ fontSize: "1.05rem", margin: "0 0 0.4rem 0" }}>
              Bloque 2
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem", margin: 0 }}>
              Espacio reservado para tu segundo bloque o información clave.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
