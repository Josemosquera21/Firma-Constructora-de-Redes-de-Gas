import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaShieldAlt,
  FaTools,
  FaBolt
} from "react-icons/fa";

const services = [
  {
    title: "Instalación segura",
    description: "Tuberías certificadas, pruebas de hermeticidad y diseño conforme a norma.",
    icon: <FaTools />
  },
  {
    title: "Mantenimiento técnico",
    description: "Revisión periódica, detección de fugas y ajustes rápidos para mayor confiabilidad.",
    icon: <FaShieldAlt />
  },
  {
    title: "Certificación profesional",
    description: "Documentación técnica y certificación para que su red de gas esté conforme.",
    icon: <FaBolt />
  }
];

export default function EmpresaLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState({
    stats: false,
    services: false,
    cta: false,
    footer: false
  });

  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = entry.target.dataset.reveal;
            setVisible((prev) => ({ ...prev, [key]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    [statsRef, servicesRef, ctaRef, footerRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const revealStyle = (active, delay = 0) => ({
    opacity: active ? 1 : 0,
    transform: active ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`
  });

  return (
    <div style={container}>
      <style>
        {`
          .navButtons { display: flex; }
          .menuIcon { display: block; }

          @media (max-width: 768px) {
            .navButtons { display: none !important; }
            .menuIcon { display: block !important; }
          }
        `}
      </style>

      <nav style={nav}>
        <img
          src="logo.jpeg"
          alt="Logo"
          style={navLogo}
        />

        <div style={brandBlock}>
          <h1 style={logo}>firma constructora de Redes de Gas</h1>
          <p style={sublogo}>Seguridad, calidad y servicio en cada proyecto</p>
        </div>

        <FaBars
          onClick={() => setMenuOpen(!menuOpen)}
          style={menuIcon}
          className="menuIcon"
        />
      </nav>

      {menuOpen && (
        <div style={menuOverlay}>
          <button style={menuCloseButton} onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>

          <div style={mobileMenu}>
            <Link to="/servicios" style={mobileLink} onClick={() => setMenuOpen(false)}>
              Ver servicios
            </Link>
            <Link to="/ubicacion" style={mobileLink} onClick={() => setMenuOpen(false)}>
              Ubicación
            </Link>
            <Link to="/trabajos" style={mobileLink} onClick={() => setMenuOpen(false)}>
              Ver trabajos certificados
            </Link>
          </div>
        </div>
      )}

      <header style={hero}>
        <div style={heroText}>
          <span style={eyebrow}>Confiable · Profesional · Certificado</span>
          <h2 style={heroTitle}>Firma Constructora de Redes de Gas</h2>
          <p style={heroDescription}>
            Instalamos, mantenemos y certificamos sistemas de gas con atención técnica y cumplimiento normativo.
          </p>
        </div>

        <div style={heroImageWrap}>
          <img
            src="logo.jpeg"
            alt="Instalación de redes de gas"
            style={heroImage}
          />
        </div>
      </header>

      <section
        ref={statsRef}
        data-reveal="stats"
        style={{ ...statsSection, ...revealStyle(visible.stats) }}
      >
        <div style={statCard}>
          <h3>+150</h3>
          <p>proyectos realizados</p>
        </div>
        <div style={statCard}>
          <h3>100%</h3>
          <p>clientes satisfechos</p>
        </div>
        <div style={statCard}>
          <h3>24/7</h3>
          <p>soporte técnico rápido</p>
        </div>
      </section>

      <section
        ref={servicesRef}
        data-reveal="services"
        style={{ ...servicesSection, ...revealStyle(visible.services) }}
      >
        <div style={sectionHeader}>
          <span style={sectionLabel}>Servicios</span>
          <h3 style={sectionTitle}>Soluciones completas para su red de gas</h3>
          <p style={sectionText}>
            Realizamos instalaciones, mantenimientos y certificaciones con personal especializado y materiales de calidad.
          </p>
        </div>

        <div style={cardsGrid}>
          {services.map((service, index) => (
            <article
              key={service.title}
              style={{
                ...serviceCard,
                ...revealStyle(visible.services, index * 0.1)
              }}
            >
              <div style={serviceIcon}>{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        ref={ctaRef}
        data-reveal="cta"
        style={{ ...ctaSection, ...revealStyle(visible.cta) }}
      >
        <div>
          <h3 style={{ margin: 0 }}>Solicite una cotización especializada</h3>
          <p style={{ color: "#cbd5f5", maxWidth: "560px", lineHeight: "1.8" }}>
            Envíenos los datos de su proyecto y le responderemos con un presupuesto claro y atención prioritaria.
          </p>
        </div>
      </section>

      <footer
        ref={footerRef}
        data-reveal="footer"
        style={{ ...footer, ...revealStyle(visible.footer) }}
      >
        <div style={footerContent}>
          <div>
            <h4>Redes de Gas</h4>
            <p>Proyectos seguros y eficientes para viviendas, comercios e industria.</p>
          </div>
          <div>
            <p>📞 +57 313 4033366</p>
            <p>📧 Yfrgas@gmail.com</p>
            <p>📍 Cumaral - Meta</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/573134033366"
        target="_blank"
        rel="noreferrer"
        style={whatsappButton}
      >
        <FaWhatsapp />
        WhatsApp
      </a>
    </div>
  );
}

const container = {
  fontFamily: "Poppins, sans-serif",
  background: "linear-gradient(135deg, #0b1220 0%, #1e293b 100%)",
  color: "#e2e8f0",
  minHeight: "100vh",
  scrollBehavior: "smooth"
};

const nav = {
  position: "sticky",
  top: 0,
  zIndex: 90,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "24px 40px",
  background: "rgba(6, 12, 28, 0.92)",
  borderBottom: "1px solid rgba(255,255,255,0.08)"
};

const navLogo = {
  position: "absolute",
  left: "40px",
  top: "50%",
  transform: "translateY(-50%)",
  width: "100px",
  height: "100px",
  objectFit: "contain"
};

const brandBlock = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  minWidth: 0
};

const logo = {
  margin: 0,
  fontSize: "1.8rem",
  letterSpacing: "0.10em",
  whiteSpace: "normal",
  textAlign: "center",
  fontWeight: "800"
};

const sublogo = {
  margin: "6px 0 0",
  color: "#93c5fd",
  fontSize: "0.9rem",
  textAlign: "center"
};

const navButtons = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "14px",
  width: "100%",
  marginTop: "18px"
};

const menuIcon = {
  color: "#f8fafc",
  fontSize: "1.8rem",
  cursor: "pointer"
};

const menuOverlay = {
  position: "fixed",
  inset: 0,
  zIndex: 100,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(7, 12, 25, 0.96)",
  backdropFilter: "blur(14px)",
  padding: "40px"
};

const menuCloseButton = {
  position: "absolute",
  top: "24px",
  right: "24px",
  border: "none",
  background: "transparent",
  color: "#fff",
  fontSize: "1.8rem",
  cursor: "pointer"
};

const mobileMenu = {
  display: "flex",
  flexDirection: "column",
  gap: "22px",
  alignItems: "center",
  width: "100%",
  maxWidth: "360px"
};

const mobileLink = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1.2rem",
  padding: "18px 28px",
  background: "rgba(255,255,255,0.08)",
  borderRadius: "999px",
  width: "100%",
  textAlign: "center",
  fontWeight: "700"
};

const hero = {
  display: "grid",
  gridTemplateColumns: "1.2fr 0.8fr",
  padding: "80px 40px",
  gap: "40px",
  alignItems: "center"
};

const heroText = {
  maxWidth: "560px"
};

const eyebrow = {
  color: "#60a5fa",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "1px",
  fontSize: "0.85rem"
};

const heroTitle = {
  fontSize: "3.5rem",
  lineHeight: "1.05",
  margin: "24px 0 18px"
};

const heroDescription = {
  fontSize: "1rem",
  color: "#cbd5f5",
  lineHeight: "1.9",
  maxWidth: "560px"
};

const primaryBtn = {
  background: "#2563eb",
  color: "white",
  padding: "16px 26px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "700"
};

const secondaryBtn = {
  background: "rgba(255,255,255,0.08)",
  color: "white",
  padding: "16px 26px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "700",
  border: "1px solid rgba(255,255,255,0.12)"
};

const heroImageWrap = {
  display: "flex",
  justifyContent: "center"
};

const heroImage = {
  width: "100%",
  maxWidth: "460px",
  borderRadius: "28px",
  boxShadow: "0 35px 80px rgba(0,0,0,0.35)"
};

const statsSection = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "18px",
  padding: "24px 40px"
};

const statCard = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "30px",
  textAlign: "center"
};

const servicesSection = {
  padding: "60px 40px",
  background: "#0b1525"
};

const sectionHeader = {
  maxWidth: "780px",
  margin: "0 auto 36px",
  textAlign: "center"
};

const sectionLabel = {
  color: "#60a5fa",
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  fontSize: "0.85rem"
};

const sectionTitle = {
  fontSize: "2.6rem",
  margin: "18px 0 10px"
};

const sectionText = {
  color: "#cbd5f5",
  lineHeight: "1.8"
};

const cardsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "24px"
};

const serviceCard = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "28px",
  minHeight: "220px"
};

const serviceIcon = {
  width: "56px",
  height: "56px",
  borderRadius: "18px",
  display: "grid",
  placeItems: "center",
  background: "rgba(37, 99, 235, 0.12)",
  color: "#60a5fa",
  fontSize: "1.3rem",
  marginBottom: "18px"
};

const ctaSection = {
  margin: "0 40px 60px",
  padding: "42px",
  borderRadius: "30px",
  background: "linear-gradient(180deg, rgba(15,23,42,0.98), rgba(15,23,42,0.9))",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  flexWrap: "wrap"
};

const footer = {
  padding: "40px",
  borderTop: "1px solid rgba(255,255,255,0.08)"
};

const footerContent = {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "20px"
};

const whatsappButton = {
  position: "fixed",
  bottom: "24px",
  right: "24px",
  background: "#16a34a",
  color: "white",
  padding: "14px 20px",
  borderRadius: "999px",
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  fontWeight: "700",
  textDecoration: "none",
  boxShadow: "0 18px 50px rgba(0,0,0,0.28)"
};

const brandLogo = {
  width: "48px",
  height: "48px",
  objectFit: "contain",
  marginBottom: "14px"
};