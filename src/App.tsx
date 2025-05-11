// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SobreMi from './pages/SobreMi';
import Habilidades from './pages/Habilidades';
import Contacto from './pages/Contacto';
import Proyectos from './pages/Proyectos';
import Cursos from './pages/Cursos';
import Certificados from './pages/Certificados';

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SobreMi" element={<SobreMi />} />
          <Route path="/Habilidades" element={<Habilidades />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Proyectos" element={<Proyectos />} />
          <Route path="/Cursos" element={<Cursos />} />
          <Route path="/Certificados" element={<Certificados />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
