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
