import { useState } from 'react';
import '../styles/Proyectos.css';
import { FaReact, FaDatabase, FaGithub, FaCloud, FaGlobe, FaPython, FaJs, FaCss3, FaHtml5, FaExternalLinkAlt } from 'react-icons/fa';
import { FaAngular } from 'react-icons/fa6';
import imagen1 from '../assets/Captura de pantalla 2025-02-07 093030.png';
import imagen2 from '../assets/tutor_virtual.png';
import imagen3 from '../assets/cheap.png';
import imagen4 from '../assets/food.png';
import imagen5 from '../assets/community.png';
import imagen6 from '../assets/valdivieso.png';
import imagen7 from '../assets/fruty.png';
import imagen8 from '../assets/Kdramas.png';

interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  enlace: string;
  habilidades: { nombre: string; icono: JSX.Element; color: string }[];
  repositorios: { nombre: string; url: string }[];
}

const proyectosData: Proyecto[] = [
  {
    id: 1,
    nombre: 'Ecommerce WM Sport',
    descripcion: 'Plataforma de comercio electrónico desarrollada para una empresa de ropa deportiva, permitiendo la exhibición de catálogos y la gestión de ventas. El sistema cuenta con dos roles: administrador, quien gestiona productos y pedidos, y cliente, quien puede explorar el catálogo y realizar compras.',
    imagen: imagen1,
    enlace: 'https://wm-one.vercel.app/',
    habilidades: [
      { nombre: 'React', icono: <FaReact size={20} />, color: '#60e4eeff' },
      { nombre: 'CSS', icono: <FaCss3 size={20} />, color: '#2965F1' },
      { nombre: 'Django', icono: <FaPython size={20} />, color: '#092E20' },
      { nombre: 'PostgreSQL', icono: <FaDatabase size={20} />, color: '#336791' },
      { nombre: 'HTML', icono: <FaHtml5 size={20} />, color: '#E34F26' },
      { nombre: 'DigitalOcean', icono: <FaCloud size={20} />, color: '#0080FF' },
      { nombre: 'Namecheap', icono: <FaGlobe size={20} />, color: '#DE3723' }
    ],
    repositorios: [
      { nombre: 'Frontend', url: 'https://github.com/mayra-Sanchez/WM' },
      { nombre: 'Backend', url: 'https://github.com/DylanFarkas/wm-backend' }
    ]
  },
  {
    id: 2,
    nombre: 'Tutor Virtual',
    descripcion: 'Aplicación educativa integrada con la API de ChatGPT-4, diseñada para brindar asistencia personalizada a estudiantes. Los usuarios pueden acceder a cursos creados dentro de la plataforma y hacer preguntas relacionadas. Si la consulta no corresponde al curso en el que están inscritos, el sistema les notifica que la información no está disponible.',
    imagen: imagen2,
    enlace: 'https://tutor-virtual-ten.vercel.app/',
    habilidades: [
      { nombre: 'React', icono: <FaReact size={20} />, color: '#61DAFB' },
      { nombre: 'JavaScript', icono: <FaJs size={20} />, color: '#F7DF1E' },
      { nombre: 'CSS', icono: <FaCss3 size={20} />, color: '#2965F1' },
      { nombre: 'HTML', icono: <FaHtml5 size={20} />, color: '#E34F26' },
    ],
    repositorios: [
      { nombre: 'Frontend', url: 'https://github.com/mayra-Sanchez/TutorVirtual' },
      { nombre: 'Backend', url: 'https://github.com/SantiagoCasanas/tutor-virtual-back' }
    ]
  },
  {
    id: 3,
    nombre: 'Cheap Fly',
    descripcion: 'Esta aplicación te ayuda a encontrar y comparar los vuelos más económicos disponibles en diferentes aerolíneas y sitios web de viajes, facilitando la búsqueda de opciones de viaje económicas y accesibles.',
    imagen: imagen3,
    enlace: '',
    habilidades: [
      { nombre: 'React', icono: <FaReact size={20} />, color: '#61DAFB' },
      { nombre: 'JavaScript', icono: <FaJs size={20} />, color: '#F7DF1E' },
      { nombre: 'CSS', icono: <FaCss3 size={20} />, color: '#2965F1' },
      { nombre: 'HTML', icono: <FaHtml5 size={20} />, color: '#E34F26' },
      { nombre: 'Django', icono: <FaPython size={20} />, color: '#092E20' },
    ],
    repositorios: [
      { nombre: 'Frontend', url: 'https://github.com/mayra-Sanchez/CheapFly_front' },
      { nombre: 'Backend', url: 'https://github.com/JesusAdrianP/CheapFly_backend' }
    ]
  },
  {
    id: 4,
    nombre: 'Food Lens',
    descripcion: 'Aplicación que permite subir o tomar una foto de un platillo, identificar automáticamente los ingredientes presentes y generar una receta basada en ellos.',
    imagen: imagen4,
    enlace: '',
    habilidades: [
      { nombre: 'React', icono: <FaReact size={20} />, color: '#61DAFB' },
      { nombre: 'JavaScript', icono: <FaJs size={20} />, color: '#F7DF1E' },
      { nombre: 'CSS', icono: <FaCss3 size={20} />, color: '#2965F1' },
      { nombre: 'HTML', icono: <FaHtml5 size={20} />, color: '#E34F26' },
      { nombre: 'Django', icono: <FaPython size={20} />, color: '#092E20' },
    ],
    repositorios: [
      { nombre: 'Frontend', url: 'https://github.com/Lau36/FoodLens' },
      { nombre: 'Backend', url: 'https://github.com/SantiagoCasanas/API-FoodLeens' }
    ]
  },
  {
    id: 5,
    nombre: 'Community Landing',
    descripcion: 'Landing page profesional para empresa de community management, diseñada para mostrar servicios y captar clientes potenciales.',
    imagen: imagen5,
    enlace: 'https://mayra-sanchez.github.io/community_landing/',
    habilidades: [
      { nombre: 'React', icono: <FaReact size={20} />, color: '#61DAFB' },
      { nombre: 'JavaScript', icono: <FaJs size={20} />, color: '#F7DF1E' },
      { nombre: 'CSS', icono: <FaCss3 size={20} />, color: '#2965F1' },
      { nombre: 'HTML', icono: <FaHtml5 size={20} />, color: '#E34F26' },
    ],
    repositorios: [
      { nombre: 'Frontend', url: 'https://github.com/mayra-Sanchez/community_landing' },
    ]
  },
  {
    id: 6,
    nombre: 'Dr Valdivieso',
    descripcion: 'Página creada para una dentista donde se tiene la información de ella y sobre su negocio',
    imagen: imagen6,
    enlace: 'https://dra-valdivieso.vercel.app/',
    habilidades: [
      { nombre: 'React', icono: <FaReact size={20} />, color: '#61DAFB' },
      { nombre: 'JavaScript', icono: <FaJs size={20} />, color: '#F7DF1E' },
      { nombre: 'CSS', icono: <FaCss3 size={20} />, color: '#2965F1' },
      { nombre: 'HTML', icono: <FaHtml5 size={20} />, color: '#E34F26' },
    ],
    repositorios: [
      { nombre: 'Frontend', url: 'https://github.com/mayra-Sanchez/DrValdivieso' },
    ]
  },
  {
    id: 7,
    nombre: 'Fruity Flakes',
    descripcion: 'Página para tienda ubicada en Australia',
    imagen: imagen7,
    enlace: 'https://fruity-flakes.vercel.app/',
    habilidades: [
      { nombre: 'React', icono: <FaReact size={20} />, color: '#61DAFB' },
      { nombre: 'JavaScript', icono: <FaJs size={20} />, color: '#F7DF1E' },
      { nombre: 'CSS', icono: <FaCss3 size={20} />, color: '#2965F1' },
      { nombre: 'HTML', icono: <FaHtml5 size={20} />, color: '#E34F26' },
    ],
    repositorios: [
      { nombre: 'Frontend', url: 'https://github.com/mayra-Sanchez/FruityFlakes' },
    ]
  },
   {
  id: 8,
  nombre: 'KdramasVibes',
  descripcion: 'KdramasVibes es una plataforma hecha para fans de los dramas coreanos. Permite ver reseñas, gestionar listas personalizadas (visto, en emisión, quiero ver), explorar fichas detalladas por drama y acceder a recomendaciones. Incorpora un reproductor flotante de música y enlaces a plataformas como Netflix o Viki.',
  imagen: imagen8,
  enlace: 'https://kdramas-jade.vercel.app/',
  habilidades: [
    { nombre: 'React', icono: <FaReact size={20} />, color: '#61DAFB' },
    { nombre: 'JavaScript', icono: <FaJs size={20} />, color: '#F7DF1E' },
    { nombre: 'CSS', icono: <FaCss3 size={20} />, color: '#2965F1' },
    { nombre: 'HTML', icono: <FaHtml5 size={20} />, color: '#E34F26' },
    { nombre: 'LocalStorage', icono: <FaDatabase size={20} />, color: '#7D4CDB' }
  ],
  repositorios: [
    { nombre: 'Frontend', url: 'https://github.com/mayra-Sanchez/kdramas' }
  ]
}

];

const Proyectos = () => {
  const [modalProyecto, setModalProyecto] = useState<Proyecto | null>(null);

  const abrirModal = (proyecto: Proyecto) => setModalProyecto(proyecto);
  const cerrarModal = () => setModalProyecto(null);

  return (
    <section className="proyectos-section">
      <div className="proyectos-header">
        <h1>Mis Proyectos Destacados</h1>
        <p className="proyectos-subtitulo">Explora mi trabajo y las tecnologías que he utilizado para crear soluciones innovadoras</p>
      </div>

      <div className="proyectos-grid">
        {proyectosData.map((proyecto) => (
          <article key={proyecto.id} className="proyecto-card" onClick={() => abrirModal(proyecto)}>
            <div className="proyecto-imagen-container">
              <img 
                src={proyecto.imagen} 
                alt={proyecto.nombre} 
                className="proyecto-imagen"
                loading="lazy"
              />
              <div className="proyecto-overlay">
                <h3>{proyecto.nombre}</h3>
                <button className="ver-detalles-btn">Ver detalles</button>
              </div>
            </div>
            <div className="proyecto-habilidades">
              {proyecto.habilidades.slice(0, 4).map((habilidad, index) => (
                <span 
                  key={index} 
                  className="habilidad-badge"
                  style={{ backgroundColor: habilidad.color }}
                >
                  {habilidad.icono}
                </span>
              ))}
              {proyecto.habilidades.length > 4 && (
                <span className="habilidad-more">+{proyecto.habilidades.length - 4}</span>
              )}
            </div>
          </article>
        ))}
      </div>

      {modalProyecto && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={cerrarModal}>
              &times;
            </button>
            
            <div className="modal-header">
              <h2>{modalProyecto.nombre}</h2>
              {modalProyecto.enlace && (
                <a 
                  href={modalProyecto.enlace} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="enlace-proyecto"
                >
                  <FaExternalLinkAlt /> Visitar sitio
                </a>
              )}
            </div>

            <div className="modal-body">
              <img 
                src={modalProyecto.imagen} 
                alt={modalProyecto.nombre} 
                className="modal-imagen"
              />
              
              <div className="modal-descripcion">
                <h3>Descripción del Proyecto</h3>
                <p>{modalProyecto.descripcion}</p>
              </div>

              <div className="modal-habilidades">
                <h3>Tecnologías Utilizadas</h3>
                <div className="habilidades-lista">
                  {modalProyecto.habilidades.map((habilidad, index) => (
                    <div 
                      key={index} 
                      className="habilidad-item"
                      style={{ borderColor: habilidad.color }}
                    >
                      <div className="habilidad-icon" style={{ color: habilidad.color }}>
                        {habilidad.icono}
                      </div>
                      <span>{habilidad.nombre}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-repositorios">
                <h3>Repositorios</h3>
                <div className="repositorios-lista">
                  {modalProyecto.repositorios.map((repo, index) => (
                    <a
                      key={index}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repositorio-link"
                    >
                      <FaGithub /> {repo.nombre}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Proyectos;