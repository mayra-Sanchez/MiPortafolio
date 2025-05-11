import { useState } from 'react';
import '../styles/Certificados.css';
import certificado from "../assets/certificados/liderazgo_de_equipos_678e7acab7d38.pdf";
import logoMichigan from "../assets/certificados/1631307390795.jpg"
import certificado2 from "../assets/certificados/Coursera 7CSVQ7KF9BUE.pdf";
import logoMeta from "../assets/certificados/facebook_logo.jpg"
import logoPlatzi from "../assets/certificados/platzi_logo.jpg";
import logoGoogle from "../assets/certificados/google_logo.png";
import logoHPLife from "../assets/certificados/hp_life_logo.png";
import certificado3 from "../assets/certificados/1742219989764.pdf";
import certificado4 from "../assets/certificados/diploma-tomar-decisiones-trabajo.pdf";
import certificado5 from "../assets/certificados/Coursera MSZH0VO8RNZX.pdf";
import certificado6 from "../assets/certificados/Coursera CNPH0UKTODL7.pdf";
import certificado7 from "../assets/certificados/certificate.pdf";
import certificado8 from "../assets/certificados/Coursera NTHSA2KKY2PO.pdf";
import { FaFilePdf, FaTimes, FaExternalLinkAlt, FaCalendarAlt, FaIdCard } from 'react-icons/fa';

// Definir el tipo de Certificado
interface Certificado {
  id: number;
  logo: string;
  titulo: string;
  institucion: string;
  fecha: string;
  idCredencial: string;
  archivoCertificado: string;
}

// Datos de los certificados
const certificadosData: Certificado[] = [
  {
    id: 1,
    logo: logoMichigan,
    titulo: "Liderazgo de Equipos",
    institucion: "University of Michigan",
    fecha: "Ene. 2025",
    idCredencial: "I0TY6EHWF724",
    archivoCertificado: certificado,
  },
  {
    id: 2,
    logo: logoMeta,
    titulo: "Introducción al desarrollo de front-end",
    institucion: "Meta",
    fecha: "Feb. 2025",
    idCredencial: "7CSVQ7KF9BUE",
    archivoCertificado: certificado2,
  },
  { id: 3, logo: logoPlatzi, titulo: "Curso de Toma de Decisiones Basadas en Datos", institucion: "Platzi", fecha: "Mar. 2025", idCredencial: "5aaf47f3-9ae7-46fd-bfce-29a333ce9dde", archivoCertificado: certificado3 },
  { id: 4, logo: logoPlatzi, titulo: "Curso para Tomar Decisiones en el Trabajo", institucion: "Platzi", fecha: "Mar. 2025", idCredencial: "dc7b87a4-c4c4-4bb9-8857-67152fbf3d07", archivoCertificado: certificado4 },
  { id: 5, logo: logoGoogle, titulo: "Fundamentos: datos, datos, en todas partes", institucion: "Google", fecha: "Mar. 2025", idCredencial: "MSZH0VO8RNZX", archivoCertificado: certificado5 },
  { id: 6, logo: logoMeta, titulo: "Control de versión", institucion: "Meta", fecha: "Feb. 2025", idCredencial: "CNPH0UKTODL7", archivoCertificado: certificado6 },
  { id: 7, logo: logoHPLife, titulo: "Gestión de proyectos con Agile", institucion: "HP LIFE", fecha: "Feb. 2025", idCredencial: "10219b0d-7d3c-4173-9f4c-aed3319e3eff", archivoCertificado: certificado7 },
  { id: 8, logo: logoMeta, titulo: "Programación con JavaScript", institucion: "Meta", fecha: "Feb. 2025", idCredencial: "NTHSA2KKY2PO", archivoCertificado: certificado8 }

];

const Certificados = () => {
  const [modalCertificado, setModalCertificado] = useState<Certificado | null>(null);

  const abrirModal = (certificado: Certificado) => {
    setModalCertificado(certificado);
  };

  const cerrarModal = () => {
    setModalCertificado(null);
  };

  return (
    <section className="certificados-section">
      <div className="certificados-header">
        <h1>Licencias y Certificaciones</h1>
        <p className="certificados-subtitulo">
          Documentación oficial que acredita mis conocimientos y habilidades profesionales
        </p>
      </div>

      <div className="certificados-grid">
        {certificadosData.map((certificado) => (
          <article 
            key={certificado.id} 
            className="certificado-card"
            onClick={() => abrirModal(certificado)}
          >
            <div className="certificado-logo-container">
              <img 
                src={certificado.logo} 
                alt={`Logo ${certificado.institucion}`} 
                className="certificado-logo"
                loading="lazy"
              />
            </div>
            <div className="certificado-content">
              <h3>{certificado.titulo}</h3>
              <p className="institucion">{certificado.institucion}</p>
              <div className="certificado-meta">
                <span className="fecha">
                  <FaCalendarAlt /> {certificado.fecha}
                </span>
                <button className="ver-certificado">
                  Ver certificado <FaExternalLinkAlt size={12} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {modalCertificado && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={cerrarModal}>
              <FaTimes />
            </button>
            
            <div className="modal-header">
              <div className="modal-logo-container">
                <img 
                  src={modalCertificado.logo} 
                  alt={`Logo ${modalCertificado.institucion}`}
                  className="modal-logo"
                />
              </div>
              <h2>{modalCertificado.titulo}</h2>
              <p className="modal-institucion">{modalCertificado.institucion}</p>
            </div>

            <div className="modal-body">
              <div className="modal-details">
                <div className="detail-item">
                  <FaCalendarAlt className="detail-icon" />
                  <div>
                    <p className="detail-label">Fecha de expedición</p>
                    <p className="detail-value">{modalCertificado.fecha}</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <FaIdCard className="detail-icon" />
                  <div>
                    <p className="detail-label">ID de credencial</p>
                    <p className="detail-value">{modalCertificado.idCredencial}</p>
                  </div>
                </div>
              </div>

              <a
                href={modalCertificado.archivoCertificado}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-certificado"
              >
                <FaFilePdf /> Ver Certificado Completo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificados;