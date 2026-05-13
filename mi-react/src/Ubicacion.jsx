import { Link } from "react-router-dom";

export default function UbicacionPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#090d16",
      color: "#e2e8f0",
      fontFamily: "Poppins, sans-serif",
      padding: "40px"
    }}>
      <Link to="/" style={{ color: "#60a5fa", textDecoration: "none", fontWeight: 600 }}>
        ← Volver al inicio
      </Link>

      <header style={{ maxWidth: "760px", marginTop: "24px" }}>
        <span style={{
          color: "#60a5fa",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontSize: "0.85rem"
        }}>
          Ubicación
        </span>
        <h1 style={{ fontSize: "3rem", margin: "18px 0" }}>
          Dónde estamos y cómo contactarnos
        </h1>
        <p style={{ color: "#cbd5f5", lineHeight: "1.8" }}>
          Nuestra empresa está en Cumaral, Meta, y atendemos proyectos en municipios cercanos con rapidez.
        </p>
      </header>

      <div style={{
        display: "grid",
        gap: "24px",
        gridTemplateColumns: "1.5fr 1fr",
        marginTop: "32px"
      }}>
        <iframe
          title="Mapa de Cumaral"
          src="https://www.google.com/maps?q=Cumaral+Meta&output=embed"
          style={{ width: "100%", minHeight: "420px", border: 0, borderRadius: "24px" }}
          loading="lazy"
        />

        <div style={{
          background: "#0f172a",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",
          padding: "28px"
        }}>
          <h2>Contacto</h2>
          <p>📍 Cumaral - Meta</p>
          <p>📞 +57 313 4033366</p>
          <p>📧 Yfrgas@gmail.com</p>
          <p>Atendemos cotizaciones y visitas técnicas con cita previa.</p>
        </div>
      </div>
    </div>
  );
}