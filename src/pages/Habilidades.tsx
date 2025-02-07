import "../styles/Habilidades.css";
import javascript from '../assets/icons/javascript.svg';
import react from '../assets/icons/react.svg';
import angular from '../assets/icons/angular.svg';
import postgreSQL from '../assets/icons/postgresql.svg';
import pyhton from '../assets/icons/python.svg';
import docker from '../assets/icons/docker.svg';
import git from '../assets/icons/git.svg';
import github from '../assets/icons/github.svg';
import scratch from '../assets/icons/scratch.svg';
import jira from '../assets/icons/jira.svg';
import django from '../assets/icons/django.svg';
import vercel from '../assets/icons/vercel.svg';
import python from '../assets/icons/python.svg';
import java from '../assets/icons/java-svgrepo-com.svg';
import css from '../assets/icons/css.svg';
import html from '../assets/icons/html5.svg';
import powerbi from '../assets/icons/icons8-power-bi.svg';
import uxui from '../assets/icons/interface-ui-ux-web-svgrepo-com.svg';
import scrum from '../assets/icons/scrum-svgrepo-com.svg';
import ieee830 from '../assets/icons/ieee.svg';
import selenium from '../assets/icons/selenium.svg';
import junit from '../assets/icons/junit5.svg';
import gherkin from '../assets/icons/gherkin-svgrepo-com.svg';
import cucumber from '../assets/icons/cucumber.svg';


const habilidades = [
  { nombre: "JavaScript", logo: javascript, descripcion: "Lenguaje de programación para aplicaciones web." },
  { nombre: "React", logo: react, descripcion: "Librería para construir interfaces de usuario." },
  { nombre: "Angular", logo: angular, descripcion: "Framework para aplicaciones web dinámicas." },
  { nombre: "PostgreSQL", logo: postgreSQL, descripcion: "Base de datos relacional de código abierto." },
  { nombre: "Python", logo: pyhton, descripcion: "Lenguaje de programación versátil." },
  { nombre: "Docker", logo: docker, descripcion: "Herramienta para la creación de contenedores." },
  { nombre: "Github", logo: github, descripcion: "Plataforma de hospedaje para proyectos de código." },
  { nombre: "Git", logo: git, descripcion: "Sistema de control de versiones." },
  { nombre: "Scratch", logo: scratch, descripcion: "Lenguaje visual para aprender programación." },
  { nombre: "Jira", logo: jira, descripcion: "Herramienta para gestión de proyectos ágiles." },
  { nombre: "Django", logo: django, descripcion: "Framework para desarrollo web en Python." },
  { nombre: "Vercel", logo: vercel, descripcion: "Plataforma para despliegue de aplicaciones web." },
  { nombre: "Python", logo: python, descripcion: "Lenguaje de programación versátil." },
  { nombre: "Java", logo: java, descripcion: "Lenguaje de programación orientado a objetos." },
  { nombre: "HTML", logo: html, descripcion: "Lenguaje de marcado para estructurar páginas web." },
  { nombre: "CSS", logo: css, descripcion: "Lenguaje de estilos para diseño web." },
  { nombre: "Power BI", logo: powerbi, descripcion: "Herramienta de análisis de datos y visualización." },
  { nombre: "UX/UI", logo: uxui, descripcion: "Diseño centrado en la experiencia de usuario." },
  { nombre: "Scrum", logo: scrum, descripcion: "Metodología ágil para gestión de proyectos." },
  { nombre: "IEEE 830", logo: ieee830, descripcion: "Estándar para documentación de requerimientos de software." },
  { nombre: "Selenium", logo: selenium, descripcion: "Herramienta para automatización de pruebas en navegadores." },
  { nombre: "JUnit", logo: junit, descripcion: "Framework para pruebas unitarias en Java." },
  { nombre: "Gherkin", logo: gherkin, descripcion: "Lenguaje para escribir pruebas en BDD." },
  { nombre: "Cucumber", logo: cucumber, descripcion: "Herramienta para pruebas de aceptación BDD." },
  ];

const Habilidades = () => {
  return (
    <div className="habilidades">
      <h1>Mis Habilidades</h1>
      <div className="habilidades-container">
        {habilidades.map((habilidad, index) => (
          <div key={index} className="habilidad-card">
            <img src={habilidad.logo} alt={habilidad.nombre} className="icon" />
            <p>{habilidad.nombre}</p>
            <p className="descripcion">{habilidad.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habilidades;
