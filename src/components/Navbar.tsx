import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/SobreMi" className={({ isActive }) => (isActive ? 'active' : '')}>
            Sobre Mi
          </NavLink>
        </li>
        <li>
          <NavLink to="/Habilidades" className={({ isActive }) => (isActive ? 'active' : '')}>
            Habilidades
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contacto" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink to="/Proyectos" className={({ isActive }) => (isActive ? 'active' : '')}>
            Proyectos
          </NavLink>
        </li>
        <li>
          <NavLink to="/Cursos" className={({ isActive }) => (isActive ? 'active' : '')}>
            Cursos
          </NavLink>
        </li>
        <li>
          <NavLink to="/Certificados" className={({ isActive }) => (isActive ? 'active' : '')}>
            Certificados
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
