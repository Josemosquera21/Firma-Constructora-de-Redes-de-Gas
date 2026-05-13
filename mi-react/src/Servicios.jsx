import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function ServiciosPage() {
  const [visible, setVisible] = useState({
    header: false,
    servicesGrid: false,
    requirements: false,
    catalog: false
  });

  const headerRef = useRef(null);
  const servicesGridRef = useRef(null);
  const requirementsRef = useRef(null);
  const catalogRef = useRef(null);

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

    [headerRef, servicesGridRef, requirementsRef, catalogRef].forEach((ref) => {
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
    <div style={{
      minHeight: "100vh",
      background: "#090d16",
      color: "#e2e8f0",
      fontFamily: "Poppins, sans-serif",
      padding: "40px"
    }}>
      <Link
        to="/"
        style={{
          color: "#60a5fa",
          textDecoration: "none",
          fontWeight: 600
        }}
      >
        ← Volver al inicio
      </Link>

      <header
        ref={headerRef}
        data-reveal="header"
        style={{ ...headerTop, ...revealStyle(visible.header) }}
      >
        <div style={{ maxWidth: "760px" }}>
          <span style={{
            color: "#60a5fa",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontSize: "0.85rem"
          }}>
            Servicios
          </span>

          <h1 style={{ fontSize: "3rem", margin: "18px 0" }}>
            Redes de gas natural certificadas
          </h1>

          <p style={{ color: "#cbd5f5", lineHeight: "1.8" }}>
            Ofrecemos soluciones integrales para instalación, mantenimiento y
            certificación de redes internas de gas natural en proyectos
            residenciales, comerciales e industriales, cumpliendo normativas
            técnicas y estándares de seguridad.
          </p>
        </div>

        <img
          src="logo.jpeg"
          alt="Logo empresa"
          style={rightLogo}
        />
      </header>

      <section
        ref={servicesGridRef}
        data-reveal="servicesGrid"
        style={{
          display: "grid",
          gap: "24px",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          marginTop: "32px",
          ...revealStyle(visible.servicesGrid)
        }}
      >
        <div style={{
          background: "#0f172a",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",
          padding: "28px"
        }}>
          <h2>Instalación de redes internas</h2>
          <p>
            Ejecutamos excavaciones técnicas con profundidad aproximada de 40 cm
            para instalación de tubería de polietileno de alta densidad (PE),
            material certificado para conducción segura de gas natural.
          </p>
        </div>

        <div style={{
          background: "#0f172a",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",
          padding: "28px"
        }}>
          <h2>Protección y señalización</h2>
          <p>
            Sobre la tubería instalada se coloca cinta de advertencia preventiva,
            diseñada para alertar futuras excavaciones y minimizar riesgos de
            daño accidental a la red.
          </p>
        </div>

        <div style={{
          background: "#0f172a",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",
          padding: "28px"
        }}>
          <h2>Conexión interna domiciliaria</h2>
          <p>
            Instalamos válvulas de corte y cajas de protección cercanas al punto
            de consumo para conexión segura de estufas, calentadores y demás
            equipos a gas.
          </p>
        </div>

        <div style={{
          background: "#0f172a",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",
          padding: "28px"
        }}>
          <h2>Caja de medición y contador</h2>
          <p>
            Ubicamos e instalamos la caja del medidor en el exterior del predio,
            permitiendo acceso para lectura mensual, inspecciones técnicas y
            facturación del servicio por parte del operador.
          </p>
        </div>

        <div style={{
          background: "#0f172a",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",
          padding: "28px"
        }}>
          <h2>Pruebas y certificación</h2>
          <p>
            Realizamos pruebas de hermeticidad, inspección final y validación
            técnica para garantizar cumplimiento normativo y correcto
            funcionamiento de la instalación.
          </p>
        </div>

        <div style={{
          background: "#0f172a",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",
          padding: "28px"
        }}>
          <h2>Mantenimiento preventivo</h2>
          <p>
            Ejecutamos revisión de conexiones, detección de fugas, ajuste de
            accesorios y mantenimiento periódico para prolongar la vida útil del
            sistema.
          </p>
        </div>
      </section>

      <section
        ref={requirementsRef}
        data-reveal="requirements"
        style={{
          marginTop: "40px",
          background: "#111827",
          borderRadius: "24px",
          padding: "32px",
          ...revealStyle(visible.requirements)
        }}
      >
        <h2>Requisitos para instalación</h2>

        <ul style={{
          color: "#cbd5f5",
          lineHeight: "1.8",
          paddingLeft: "20px"
        }}>
          <li>Documento de propiedad o autorización del inmueble.</li>
          <li>Plano, croquis o ubicación del predio.</li>
          <li>Tipo de uso: residencial, comercial o industrial.</li>
          <li>Ubicación de estufa, calentador o equipos a gas.</li>
          <li>Disponibilidad para inspección técnica inicial.</li>
          <li>Datos de contacto del propietario o responsable.</li>
        </ul>
      </section>

      <section
        ref={catalogRef}
        data-reveal="catalog"
        style={{ ...catalogSection, ...revealStyle(visible.catalog) }}
      >
        <div style={catalogHeader}>
          <span style={catalogLabel}>Catálogo técnico</span>
          <h2 style={catalogTitle}>Materiales certificados utilizados</h2>
          <p style={catalogText}>
            Utilizamos materiales y accesorios certificados para garantizar
            instalaciones seguras, duraderas y alineadas con normativa técnica
            para redes de gas natural.
          </p>
        </div>

        <div style={catalogGrid}>
          <div style={catalogCard}>
            <img src="polietileno.webp" alt="Tubería PE" style={catalogImage} />
            <h3 style={catalogCardTitle}>Tubería Polietileno PE</h3>
            <p style={catalogCardText}>
              Material flexible y resistente utilizado en redes subterráneas de gas.
            </p>
          </div>

          <div style={catalogCard}>
            <img src="cinta-advertencia.webp" alt="Cinta advertencia" style={catalogImage} />
            <h3 style={catalogCardTitle}>Cinta de advertencia</h3>
            <p style={catalogCardText}>
              Señalización preventiva instalada sobre la tubería para futuras excavaciones.
            </p>
          </div>

          <div style={catalogCard}>
            <img src="valvulas.jpg" alt="Válvula" style={catalogImage} />
            <h3 style={catalogCardTitle}>Válvulas certificadas</h3>
            <p style={catalogCardText}>
              Control seguro del flujo de gas hacia estufas, calentadores y equipos.
            </p>
          </div>

          <div style={catalogCard}>
            <img src="contador-medicion.webp" alt="Contador gas" style={catalogImage} />
            <h3 style={catalogCardTitle}>Contadores de medición</h3>
            <p style={catalogCardText}>
              Equipos para lectura mensual y control de consumo del servicio.
            </p>
          </div>

          <div style={catalogCard}>
            <img src="ascesorios.jpeg" alt="Accesorios de instalación" style={catalogImage} />
            <h3 style={catalogCardTitle}>Accesorios de instalación</h3>
            <p style={catalogCardText}>
              Contamos con codos, uniones, tees, adaptadores, conectores,
              abrazaderas y demás accesorios certificados necesarios para una
              instalación segura y eficiente de redes de gas natural.
            </p>
          </div>

          <div style={{ ...catalogCard, ...lastCatalogCard }}>
            <img src="caja-contador.jpg" alt="Caja medidor" style={catalogImage} />
            <h3 style={catalogCardTitle}>Caja para medidor</h3>
            <p style={catalogCardText}>
              Protección externa para contador y acceso técnico autorizado.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const lastCatalogCard = {
  gridColumn: "1 / -1",
  maxWidth: "320px",
  margin: "0 auto"
};

const catalogSection = {
  marginTop: "70px"
};

const catalogHeader = {
  textAlign: "center",
  marginBottom: "40px",
  maxWidth: "760px",
  marginInline: "auto"
};

const catalogLabel = {
  color: "#60a5fa",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  fontSize: "0.8rem"
};

const catalogTitle = {
  fontSize: "2.4rem",
  margin: "14px 0"
};

const catalogText = {
  color: "#cbd5f5",
  lineHeight: "1.8"
};

const catalogGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "24px"
};

const catalogCard = {
  background: "#0f172a",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  overflow: "hidden",
  boxShadow: "0 20px 40px rgba(0,0,0,0.18)"
};

const catalogImage = {
  width: "100%",
  height: "220px",
  objectFit: "cover"
};

const catalogCardTitle = {
  padding: "20px 20px 8px",
  fontSize: "1.1rem"
};

const catalogCardText = {
  padding: "0 20px 22px",
  color: "#94a3b8",
  lineHeight: "1.7",
  fontSize: "0.95rem"
};

const headerTop = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "40px",
  marginTop: "24px",
  flexWrap: "wrap"
};

const rightLogo = {
  width: "180px",
  height: "180px",
  objectFit: "contain",
  borderRadius: "60px",
  boxShadow: "0 20px 40px rgba(231, 229, 229, 0.28)",
  marginRight: "80px"
};