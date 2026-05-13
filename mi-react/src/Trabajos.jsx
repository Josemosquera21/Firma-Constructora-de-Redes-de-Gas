import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const trabajos = [
  {
    title: "Instalación residencial en Cumaral",
    description: "Excavación y tendido de tubería amarilla de polietileno de alta densidad (PEAD) a 60 cm de profundidad. Incluye prueba de hermeticidad a 1.5× la presión de operación, relleno compactado y señalización de la red enterrada. Cumple con todas las normativas de seguridad vigentes.",
    image: "escavacion.jpg"
  },
  {
    title: "Mantenimiento industrial",
    description: "Calibración y ajuste de quemadores de cocina industrial con verificación de llama azul uniforme como indicador de combustión completa. Se regularon válvulas de paso, se midieron presiones de trabajo y se emitió certificado de eficiencia energética y seguridad operativa.",
    image: "estufa-encendida.jpeg"
  },
  {
    title: "Certificación comercial",
    description: "Instalación de regulador de segunda etapa con manguera corrugada certificada bajo norma NTC, fijada en local comercial. Se verificaron presiones de salida, se realizó prueba de fuga y se emitió certificado de conformidad para habilitación ante la empresa prestadora del servicio.",
    image: "1-valvula.jpg"
  }
];

export default function TrabajosPage() {
  const [visibleHeader, setVisibleHeader] = useState(false);
  const [visibleCards, setVisibleCards] = useState(false);
  const headerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target === headerRef.current) {
            setVisibleHeader(true);
            observer.unobserve(entry.target);
          }

          if (entry.target === sectionRef.current) {
            setVisibleCards(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const fadeUp = (active, delay = 0) => ({
    opacity: active ? 1 : 0,
    transform: active ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`
  });

  return (
    <div style={page}>
      <Link to="/" style={backLink}>← Volver al inicio</Link>

      <header ref={headerRef} style={{ ...header, ...fadeUp(visibleHeader) }}>
        <span style={smallTitle}>Trabajos Certificados</span>
        <h1 style={title}>Proyectos realizados con éxito</h1>
        <p style={subtitle}>
          Conozca nuestros trabajos certificados, con descripciones detalladas de procesos y resultados.
        </p>
      </header>

      <section ref={sectionRef} style={section}>
        {trabajos.map((trabajo, index) => (
          <article
            key={trabajo.title}
            style={{ ...trabajoCard, ...fadeUp(visibleCards, 0.1 * index) }}
          >
            {trabajo.image && (
  <img
    src={trabajo.image}
    alt={trabajo.title}
    style={trabajoImage}
  />
)}

<span style={badge}>Proyecto certificado</span>

<h2 style={cardTitle}>{trabajo.title}</h2>
<p style={cardDescription}>{trabajo.description}</p>
          </article>
        ))}
      </section>

<section style={metricsSection}>
  <div style={metricCard}>
    <h3 style={metricNumber}>+150</h3>
    <p>Proyectos completados</p>
  </div>

  <div style={metricCard}>
    <h3 style={metricNumber}>100%</h3>
    <p>Clientes satisfechos</p>
  </div>

  <div style={metricCard}>
    <h3 style={metricNumber}>24/7</h3>
    <p>Soporte técnico</p>
  </div>
</section>

    </div>
  );
}

const page = {
  minHeight: "100vh",
  background: "#090d16",
  color: "#e2e8f0",
  fontFamily: "Poppins, sans-serif",
  padding: "40px"
};

const backLink = {
  color: "#60a5fa",
  textDecoration: "none",
  fontWeight: 600
};

const header = {
  maxWidth: "760px",
  marginTop: "24px"
};

const smallTitle = {
  color: "#60a5fa",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  fontSize: "0.85rem"
};

const title = {
  fontSize: "2.8rem",
  margin: "18px 0"
};

const subtitle = {
  color: "#cbd5f5",
  lineHeight: "1.8",
  maxWidth: "680px"
};

const section = {
  display: "grid",
  gap: "24px",
  marginTop: "32px",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
};

const trabajoCard = {
  background: "#0f172a",
    border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "28px",
  lineHeight: "1.8",
  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
};

const trabajoImage = {
  width: "100%",
  height: "260px",
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.08)",
  marginBottom: "20px"
};

const badge = {
  display: "inline-block",
  padding: "6px 12px",
  background: "rgba(96,165,250,0.15)",
  color: "#60a5fa",
  borderRadius: "999px",
  fontSize: "0.8rem",
  fontWeight: 600,
  marginBottom: "14px"
};

const cardTitle = {
  fontSize: "1.2rem",
  fontWeight: 700,
  marginBottom: "12px",
  color: "#f8fafc"
};

const cardDescription = {
  color: "#94a3b8",
  fontSize: "0.95rem",
  lineHeight: "1.7"
};

const metricsSection = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
  marginTop: "50px"
};

const metricCard = {
  background: "#0f172a",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "24px",
  textAlign: "center"
};

const metricNumber = {
  fontSize: "2rem",
  color: "#60a5fa",
  marginBottom: "8px"
};

