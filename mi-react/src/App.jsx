import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmpresaLanding from "./home";
import ServiciosPage from "./Servicios";
import UbicacionPage from "./Ubicacion";
import TrabajosPage from "./Trabajos";

export default function App() {
  return (
    <Router>
      <div style={{
        backgroundColor: '#fff',
        color: '#333',
        fontFamily: 'Georgia, serif',
        minHeight: '100vh'
      }}>
        <Routes>
          <Route path="/" element={<EmpresaLanding />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/ubicacion" element={<UbicacionPage />} />
          <Route path="/trabajos" element={<TrabajosPage />} />
        </Routes>
      </div>
    </Router>
  );
}