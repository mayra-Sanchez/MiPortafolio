import "../styles/Habilidades.css";
import javascript from '../assets/icons/javascript.svg';
import react from '../assets/icons/react.svg';
import angular from '../assets/icons/angular.svg';
import postgreSQL from '../assets/icons/postgresql.svg';
import python from '../assets/icons/python.svg';
import docker from '../assets/icons/docker.svg';
import git from '../assets/icons/git.svg';
import github from '../assets/icons/github.svg';
import scratch from '../assets/icons/scratch.svg';
import jira from '../assets/icons/jira.svg';
import django from '../assets/icons/django.svg';
import vercel from '../assets/icons/vercel.svg';
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
import digitalocean from '../assets/icons/digitalocean-official.svg';
import namecheap from '../assets/icons/namecheap.svg';
import wordpress from '../assets/icons/wordpress-logo.svg';

const habilidades = [
  { nombre: "JavaScript", logo: javascript, categoria: "lenguajes" },
  { nombre: "React", logo: react, categoria: "frameworks" },
  { nombre: "Angular", logo: angular, categoria: "frameworks" },
  { nombre: "PostgreSQL", logo: postgreSQL, categoria: "bases-datos" },
  { nombre: "Python", logo: python, categoria: "lenguajes" },
  { nombre: "Docker", logo: docker, categoria: "devops" },
  { nombre: "GitHub", logo: github, categoria: "herramientas" },
  { nombre: "Git", logo: git, categoria: "herramientas" },
  { nombre: "Scratch", logo: scratch, categoria: "educacion" },
  { nombre: "Jira", logo: jira, categoria: "herramientas" },
  { nombre: "Django", logo: django, categoria: "frameworks" },
  { nombre: "Vercel", logo: vercel, categoria: "devops" },
  { nombre: "Java", logo: java, categoria: "lenguajes" },
  { nombre: "HTML", logo: html, categoria: "frontend" },
  { nombre: "CSS", logo: css, categoria: "frontend" },
  { nombre: "Power BI", logo: powerbi, categoria: "analisis-datos" },
  { nombre: "UX/UI", logo: uxui, categoria: "design" },
  { nombre: "Scrum", logo: scrum, categoria: "metodologias" },
  { nombre: "IEEE 830", logo: ieee830, categoria: "documentacion" },
  { nombre: "Selenium", logo: selenium, categoria: "testing" },
  { nombre: "JUnit", logo: junit, categoria: "testing" },
  { nombre: "Gherkin", logo: gherkin, categoria: "testing" },
  { nombre: "Cucumber", logo: cucumber, categoria: "testing" },
  { nombre: "DigitalOcean", logo: digitalocean, categoria: "devops" },
  { nombre: "Namecheap", logo: namecheap, categoria: "hosting" },
  { nombre: "WordPress", logo: wordpress, categoria: "cms" }
];

const categorias = [
  { id: "lenguajes", nombre: "Lenguajes de Programación" },
  { id: "frameworks", nombre: "Frameworks y Librerías" },
  { id: "frontend", nombre: "Frontend" },
  { id: "bases-datos", nombre: "Bases de Datos" },
  { id: "devops", nombre: "DevOps & Cloud" },
  { id: "herramientas", nombre: "Herramientas" },
  { id: "testing", nombre: "Testing & QA" },
  { id: "metodologias", nombre: "Metodologías" },
  { id: "design", nombre: "Diseño UX/UI" },
  { id: "analisis-datos", nombre: "Análisis de Datos" },
  { id: "documentacion", nombre: "Documentación" },
  { id: "hosting", nombre: "Hosting & Dominios" },
  { id: "cms", nombre: "CMS" },
  { id: "educacion", nombre: "Educación" }
];

const Habilidades = () => {
  return (
    <section className="habilidades-container">
      <h1 className="habilidades-titulo">Mis Habilidades Técnicas</h1>
      <p className="habilidades-subtitulo">Conocimientos y tecnologías que domino y utilizo en mis proyectos</p>
      
      <div className="categorias-container">
        {categorias.map(categoria => {
          const habilidadesCategoria = habilidades.filter(h => h.categoria === categoria.id);
          if (habilidadesCategoria.length === 0) return null;
          
          return (
            <div key={categoria.id} className="categoria-section">
              <h2 className="categoria-titulo">{categoria.nombre}</h2>
              <div className="habilidades-grid">
                {habilidadesCategoria.map((habilidad, index) => (
                  <div key={index} className="habilidad-card">
                    <div className="habilidad-icon-container">
                      <img 
                        src={habilidad.logo} 
                        alt={habilidad.nombre} 
                        className="habilidad-icon"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="habilidad-nombre">{habilidad.nombre}</h3>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Habilidades;