import { useState } from 'react';
import '../styles/Cursos.css';
import { FaFilePdf, FaGraduationCap, FaTimes, FaChevronRight } from 'react-icons/fa';
import curso1 from "../assets/cursos/productos.pdf";
import curso2 from "../assets/cursos/file (1).pdf";
import curso3 from "../assets/cursos/file (2).pdf";
import curso4 from "../assets/cursos/file (3).pdf";
import curso5 from "../assets/cursos/file (4).pdf";
import curso6 from "../assets/cursos/file (5).pdf";
import curso7 from "../assets/cursos/file (6).pdf";
import curso8 from "../assets/cursos/file (7).pdf";
import curso9 from "../assets/cursos/file (8).pdf";
import curso10 from "../assets/cursos/file (9).pdf";
import curso12 from "../assets/cursos/file (11).pdf";
import curso13 from "../assets/cursos/file (12).pdf";

type Curso = {
  id: number;
  titulo: string;
  descripcionBreve: string;
  descripcionCompleta: string;
  certificadoUrl: string;
    institucion?: string;
};

const cursosData: Curso[] = [
  {
    id: 1,
    titulo: 'Productos Y Servicios Banca Empresas',
    descripcionBreve: 'Este es un curso de la u banco de occidente',
    descripcionCompleta: 'Este curso permite conocer las generalidades, caracteristicas y beneficios de los productos y Servicios de la Banca de Empresas, Banca de Personas, Panamá y Barbados y Fiduciaria de Occidente, con el fin de ofrecer una atención integral, identificar oportunidades de venta e inversión de acuerdo con las necesidades de los clientes externos e internos.',
    certificadoUrl: curso1
  },
  {
    id: 2,
    titulo: 'Finanzas Para No Financieros',
    descripcionBreve: 'Este es un curso de la u banco de occidente',
    descripcionCompleta: 'ELa formación Finanzas para no financieros proporciona al estudiante herramientas conceptuales y técnicas de carácter básico, que le permiten llevar a cabo diagnósticos simples y toma de decisiones en función de la información contable provista por una organización u otros insumos en el entorno interno o externo que faciliten dicha labor.',
    certificadoUrl: curso2
  },
  {
    id: 3,
    titulo: 'Gestión de Indicadores',
    descripcionBreve: 'Este es un curso de la u banco de occidente',
    descripcionCompleta: 'Este módulo permite al estudiante el fortalecimiento de las competencias necesarias para la medición, análisis y evaluación, de los datos, indicadores e información de los procesos. Aportando en la comprensión del ciclo de gestión, la toma de decisiones y el mejoramiento de la gestión estratégica y operativa como parte de las habilidades a desarrollar.',
    certificadoUrl: curso3
  },
  {
    id: 3,
    titulo: 'Reuniones efectivas',
    descripcionBreve: 'Este es un curso de la u banco de occidente',
    descripcionCompleta: 'La eficiencia en una reunión laboral, lo convierte en un extraordinario colaborador de la institución. Con este curso, el usuario refuerza las buenas prácticas para convocar y participar en reuniones laborales eficaces, que optimizarán el tiempo de la empresa.',
    certificadoUrl: curso4
  },
  {
    id: 4,
    titulo: 'Teams',
    descripcionBreve: 'Este es un curso de la u banco de occidente',
    descripcionCompleta: 'Este curso permite conocer la herramienta Microsoft Teams, aprender sus funcionalidades y cómo manejar la aplicación, además de brindar consejos prácticos para aprovechar al máximo esta herramienta.',
    certificadoUrl: curso5
  },
  {
    id: 5,
    titulo: 'Power point',
    descripcionBreve: 'Este es un curso de la u banco de occidente',
    descripcionCompleta: 'PowerPoint es uno de los programas más utilizados para hacer presentaciones, es una herramienta que cuenta con gran variedad de recursos visuales que permiten crear o desarrollar presentaciones más efectivas. En este curso aprenderás a manejar esta aplicación aprovechando sus ventajas, además de consejos prácticos para el uso de la misma.',
    certificadoUrl: curso6
  },
  {
    id: 6,
    titulo: 'Branding personal',
    descripcionBreve: 'Este es un curso de la u banco de occidente',
    descripcionCompleta: 'Fortalece la capacidad de reconocimiento de quién eres, qué quieres proyectar y cuál es la mejor forma de hacerlo desde una ruta propia y en conexión con tu esencia.',
    certificadoUrl: curso7
  },
  {
    id: 7,
    titulo: 'Habilidades de presentación',
    descripcionBreve: 'Este es un curso de la u banco de occidente',
    descripcionCompleta: 'Un arqueólogo está en Egipto para investigar las pirámides que construyó el faraón Tukón-Vencer, famoso por su capacidad de realizar presentaciones en público. En las construcciones hay recámaras que debe investigar para conocer los secretos de la oratoria del faraón. Debe leer inscripciones en piedras, muros, papiros e interactuar con los personajes que va encontrando.',
    certificadoUrl: curso8
  },
  {
    id: 8,
    titulo: 'Gestión de proyectos',
    descripcionBreve: 'Este es un curso de la u banco de occidente',
    descripcionCompleta: 'Este curso permite comprender conceptos bases de la gestión de proyectos, Identificando y comprendiendo sus etapas y cómo se aplican en nuestra organización.',
    certificadoUrl: curso9
  },
  {
    id: 9,
    titulo: 'Innovación para la Transformación Digital',
    descripcionBreve: 'Este es un curso de la u banco de occidente',
    descripcionCompleta: 'Este curso permite fortalecer los conocimientos y competencias de los estudiantes para que puedan comprender e integrar de manera satisfactoria, componentes y estrategias innovadoras, que orienten al Banco hacia la transformación digital, desarrollando la capacidad de adaptación a los desafíos de la era digital y movilizar una cultura de innovación.',
    certificadoUrl: curso10
  },
  {
    id: 10,
    titulo: 'ABAC 2024',
    descripcionBreve: 'Este es un curso de la u banco de occidente',
    descripcionCompleta: '',
    certificadoUrl: curso12
  },
  {
    id: 11,
    titulo: 'Estadística básica',
    descripcionBreve: 'Este es un curso de la u banco de occidente',
    descripcionCompleta: 'Este curso permite comprender de los conceptos fundamentales de estadística, así como las habilidades necesarias para analizar y presentar datos de manera efectiva.',
    certificadoUrl: curso13
  },
];
const Cursos = () => {
  const [modalCurso, setModalCurso] = useState<Curso | null>(null);

  const abrirModal = (curso: Curso) => {
    setModalCurso(curso);
  };

  const cerrarModal = () => {
    setModalCurso(null);
  };

  return (
    <section className="cursos-section">
      <div className="cursos-header">
        <h1>Mis Certificaciones</h1>
        <p className="cursos-subtitulo">
          Conoce los cursos y certificaciones que he completado para fortalecer mis habilidades profesionales
        </p>
      </div>

      <div className="cursos-grid">
        {cursosData.map((curso) => (
          <article key={curso.id} className="curso-card" onClick={() => abrirModal(curso)}>
            <div className="curso-icon">
              <FaGraduationCap size={24} />
            </div>
            <div className="curso-content">
              <h3>{curso.titulo}</h3>
              <p>{curso.descripcionBreve}</p>
              <div className="curso-meta">
                <span className="institucion">{curso.institucion || 'Banco de Occidente'}</span>
                <button className="ver-detalles">
                  Ver detalles <FaChevronRight size={12} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {modalCurso && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={cerrarModal}>
              <FaTimes />
            </button>
            
            <div className="modal-header">
              <div className="modal-icon">
                <FaGraduationCap size={32} />
              </div>
              <h2>{modalCurso.titulo}</h2>
              <span className="modal-institucion">
                {modalCurso.institucion || 'Banco de Occidente'}
              </span>
            </div>

            <div className="modal-body">
              <div className="modal-descripcion">
                <h3>Descripción del Curso</h3>
                <p>{modalCurso.descripcionCompleta}</p>
              </div>

              <button
                onClick={() => window.open(modalCurso.certificadoUrl, '_blank')}
                className="btn-certificado"
              >
                <FaFilePdf /> Ver Certificado
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cursos;