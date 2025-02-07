import { useState } from 'react';
import '../styles/Proyectos.css';
import { FaReact, FaDatabase, FaGithub, FaPython, FaJs, FaCss3, FaHtml5 } from 'react-icons/fa';
import imagen1 from '../assets/Captura de pantalla 2025-02-07 093030.png';
import imagen2 from '../assets/tutor_virtual.png';
import imagen3 from '../assets/cheap.png';
import imagen4 from '../assets/food.png';
import { FaAngular } from 'react-icons/fa6';

// Definir el tipo de Proyecto
interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  enlace: string;
  habilidades: { nombre: string; icono: JSX.Element }[];
  repositorios: { nombre: string; url: string }[];
}

// Datos de los proyectos
const proyectosData: Proyecto[] = [
  {
    id: 1,
    nombre: 'Ecommerce WM Sport',
    descripcion: 'Plataforma de comercio electrónico desarrollada para una empresa de ropa deportiva, permitiendo la exhibición de catálogos y la gestión de ventas. El sistema cuenta con dos roles: administrador, quien gestiona productos y pedidos, y cliente, quien puede explorar el catálogo y realizar compras.',
    imagen: imagen1,
    enlace: 'https://wm-siteweb.vercel.app/',
    habilidades: [
      { nombre: 'Angular', icono: <FaAngular size={24} color="red" /> },
      { nombre: 'CSS', icono: <FaCss3 size={24} color="#61DBFB" /> },
      { nombre: 'Django', icono: <FaPython size={24} color="#3C873A" /> },
      { nombre: 'PostgreSQL', icono: <FaDatabase size={24} color="black" /> },
      { nombre: 'HTML', icono: <FaHtml5 size={24} color="#orange" /> },
    ],
    repositorios: [
      { nombre: 'Frontend', url: 'https://github.com/mayra-Sanchez/wm_siteweb' },
      { nombre: 'Backend', url: 'https://github.com/mayra-Sanchez/wm_backend' }
    ]
  },
  {
    id: 2,
    nombre: 'Tutor Virtual',
    descripcion: 'Aplicación educativa integrada con la API de ChatGPT-4, diseñada para brindar asistencia personalizada a estudiantes. Los usuarios pueden acceder a cursos creados dentro de la plataforma y hacer preguntas relacionadas. Si la consulta no corresponde al curso en el que están inscritos, el sistema les notifica que la información no está disponible.',
    imagen: imagen2,
    enlace: 'https://tutor-virtual-ten.vercel.app/',
    habilidades: [
      { nombre: 'React', icono: <FaReact size={24} color="#61DBFB" /> },
      { nombre: 'JavaScript', icono: <FaJs size={24} color="yellow" /> },
      { nombre: 'CSS', icono: <FaCss3 size={24} color="#61DBFB" /> },
      { nombre: 'HTML', icono: <FaHtml5 size={24} color="#orange" /> },
    ],
    repositorios: [
      { nombre: 'Frontend', url: 'https://github.com/mayra-Sanchez/TutorVirtual' },
      { nombre: 'Backend', url: 'https://github.com/SantiagoCasanas/tutor-virtual-back' }
    ]
  },
  {
    id: 3,
    nombre: 'Cheap Fly',
    descripcion: 'Esta aplicación te ayuda a encontrar y comparar los vuelos más económicos disponibles en diferentes aerolíneas y sitios web de viajes, facilitando la búsqueda de opciones de viaje económicas y accesibles',
    imagen: imagen3,
    enlace: '',
    habilidades: [
      { nombre: 'React', icono: <FaReact size={24} color="#61DBFB" /> },
      { nombre: 'JavaScript', icono: <FaJs size={24} color="yellow" /> },
      { nombre: 'CSS', icono: <FaCss3 size={24} color="#61DBFB" /> },
      { nombre: 'HTML', icono: <FaHtml5 size={24} color="#orange" /> },
      { nombre: 'Django', icono: <FaPython size={24} color="#3C873A" /> },
    ],
    repositorios: [
      { nombre: 'Frontend', url: 'https://github.com/mayra-Sanchez/CheapFly_front' },
      { nombre: 'Backend', url: 'https://github.com/JesusAdrianP/CheapFly_backend' }
    ]
  }  ,
  {
    id: 4,
    nombre: 'Food Lens',
    descripcion: 'Aplicación que permite subir o tomar una foto de un platillo, identificar automáticamente los ingredientes presentes y generar una receta basada en ellos.',
    imagen: imagen4,
    enlace: '',
    habilidades: [
      { nombre: 'React', icono: <FaReact size={24} color="#61DBFB" /> },
      { nombre: 'JavaScript', icono: <FaJs size={24} color="yellow" /> },
      { nombre: 'CSS', icono: <FaCss3 size={24} color="#61DBFB" /> },
      { nombre: 'HTML', icono: <FaHtml5 size={24} color="#orange" /> },
      { nombre: 'Django', icono: <FaPython size={24} color="#3C873A" /> },
    ],
    repositorios: [
      { nombre: 'Frontend', url: 'https://github.com/Lau36/FoodLens' },
      { nombre: 'Backend', url: 'https://github.com/SantiagoCasanas/API-FoodLeens' }
    ]
  }    
];

const Proyectos = () => {
  const [modalProyecto, setModalProyecto] = useState<Proyecto | null>(null);

  // Función para abrir el modal del proyecto
  const abrirModal = (proyecto: Proyecto) => {
    setModalProyecto(proyecto);
  };

  // Función para cerrar el modal
  const cerrarModal = () => {
    setModalProyecto(null);
  };

  return (
    <div className="proyectos">
      <h1>Mis Proyectos</h1>
      <p className='parrafo'>Aquí puedes ver algunos de mis proyectos destacados.</p>
      <div className="proyectos-container">
        {proyectosData.map((proyecto) => (
          <div
            key={proyecto.id}
            className="proyecto-card"
            onClick={() => abrirModal(proyecto)}
          >
            <img src={proyecto.imagen} alt="Proyecto" className="proyecto-imagen" />
            <div className="proyecto-info">
              <h2>{proyecto.nombre}</h2>
              <p>{proyecto.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      {modalProyecto && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={cerrarModal}>
              &times;
            </button>
            <h2>{modalProyecto.nombre}</h2>
            <p>{modalProyecto.descripcion}</p>

            {/* Habilidades utilizadas */}
            <div className="habilidades">
              <h3>Habilidades Utilizadas</h3>
              <div className="habilidades-lista">
                {modalProyecto.habilidades.map((habilidad, index) => (
                  <div key={index} className="habilidad-item">
                    {habilidad.icono}
                    <span>{habilidad.nombre}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enlaces a los repositorios */}
            <div className="repositorios">
              <h3>Repositorios en GitHub</h3>
              {modalProyecto.repositorios.map((repo, index) => (
                <a
                  key={index}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-repositorio"
                >
                  <FaGithub size={20} /> {repo.nombre}
                </a>
              ))}
            </div>

            <a href={modalProyecto.enlace} target="_blank" rel="noopener noreferrer" className="btn-proyecto">
              Ver Proyecto
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Proyectos;
