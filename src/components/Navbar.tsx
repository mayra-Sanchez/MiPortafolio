import { NavLink } from "react-router-dom";
import { FiHome, FiUser, FiCode, FiMail, FiFolder, FiBook, FiAward } from "react-icons/fi";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", name: "Inicio", icon: <FiHome /> },
    { path: "/SobreMi", name: "Sobre Mí", icon: <FiUser /> },
    { path: "/Habilidades", name: "Habilidades", icon: <FiCode /> },
    { path: "/Proyectos", name: "Proyectos", icon: <FiFolder /> },
    { path: "/Cursos", name: "Cursos", icon: <FiBook /> },
    { path: "/Certificados", name: "Certificados", icon: <FiAward /> },
    { path: "/Contacto", name: "Contacto", icon: <FiMail /> }
  ];

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""} ${mobileOpen ? "mobile-open" : ""}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <span className="nav-logo">MS</span>
          <span className="nav-title">Mayra Sánchez</span>
        </div>

        <nav className="desktop-nav">
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className={`hamburger ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-nav-content">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} onClick={() => setMobileOpen(false)}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;