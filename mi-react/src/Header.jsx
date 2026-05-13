import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 30px',
      backgroundColor: '#0f172a',
      color: '#fff'
    }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Firma de Redes de Gas</div>
      <nav>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '14px',
          margin: 0,
          padding: 0
        }}>
          <li>
            <Link to="/servicios" style={{
              textDecoration: 'none',
              padding: '10px 18px',
              backgroundColor: '#2563eb',
              color: '#fff',
              borderRadius: '999px',
              fontWeight: 600
            }}>
              Ver servicios
            </Link>
          </li>
          <li>
            <Link to="/ubicacion" style={{
              textDecoration: 'none',
              padding: '10px 18px',
              backgroundColor: 'rgba(255,255,255,0.12)',
              color: '#fff',
              borderRadius: '999px',
              fontWeight: 600,
              border: '1px solid rgba(255,255,255,0.18)'
            }}>
              Ubicación
            </Link>
          </li>
          <li>
            <Link to="/trabajos" style={{
              textDecoration: 'none',
              padding: '10px 18px',
              backgroundColor: '#2563eb',
              color: '#fff',
              borderRadius: '999px',
              fontWeight: 600
            }}>
              Ver trabajos certificados
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}