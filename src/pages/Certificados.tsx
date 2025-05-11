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
//Cambiar desde aqui
import certificado9 from "../assets/certificados/diploma-liderazgo-equipos.pdf";
import certificado10 from "../assets/certificados/diploma-equipos-agiles.pdf";
import certificado11 from "../assets/certificados/1742998255178.pdf";
import certificado12 from "../assets/certificados/scrum1.pdf";
import certificado13 from "../assets/certificados/scrum2.pdf";
import certificado14 from "../assets/certificados/diploma-hablar-en-publico.pdf";
import certificado15 from "../assets/certificados/diploma-mentoring-lideres.pdf";
import certificado16 from "../assets/certificados/diploma-ingles-a1-principiantes.pdf";
import certificado17 from "../assets/certificados/diploma-proyectos-jira.pdf";
import certificado18 from "../assets/certificados/diploma-herramientasmanagers.pdf";

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
  { id: 8, logo: logoMeta, titulo: "Programación con JavaScript", institucion: "Meta", fecha: "Feb. 2025", idCredencial: "NTHSA2KKY2PO", archivoCertificado: certificado8 },
  //vccambiar desde aqui la info
  { id: 9, logo: logoPlatzi, titulo: "Curso de Liderazgo para Equipos de Trabajo", institucion: "Platzi", fecha: "Mar. 2025", idCredencial: "569de17d-d071-4c58-bac2-4b8d6ec9af75", archivoCertificado: certificado9 },
  { id: 10, logo: logoPlatzi, titulo: "Curso de Gestión de Equipos Ágiles", institucion: "Platzi", fecha: "Mar. 2025", idCredencial: "7b529986-1535-4509-b74c-acf581e3cffb", archivoCertificado: certificado10 },
  { id: 11, logo: logoPlatzi, titulo: "Curso de Comunicación Efectiva para Equipos de Trabajo", institucion: "Platzi", fecha: "Mar. 2025", idCredencial: "2f8159fa-fef8-4eb2-b898-079cbd51c363", archivoCertificado: certificado11 },
  { id: 12, logo: logoPlatzi, titulo: "Curso Profesional de Scrum", institucion: "Platzi", fecha: "Mar. 2025", idCredencial: "b399b7ce-102b-41f3-97c0-60df5fdb8486", archivoCertificado: certificado12 },
  { id: 13, logo: logoPlatzi, titulo: "Curso de Scrum Master", institucion: "Platzi", fecha: "Abr. 2025", idCredencial: "b3a2708b-3212-4cd5-9c60-4f26c59f51bb", archivoCertificado: certificado13 },
  { id: 14, logo: logoPlatzi, titulo: "Curso de Oratoria para Hablar en Público", institucion: "Platzi", fecha: "Abr. 2025", idCredencial: "b3120f89-0fe2-4db6-8c01-e47919d9b0ef", archivoCertificado: certificado14 },
  { id: 15, logo: logoPlatzi, titulo: "Curso de Mentoring y Coaching para Líderes", institucion: "Platzi", fecha: "Abr. 2025", idCredencial: "90dd449e-6e8d-4808-bf88-8b92f244ee57", archivoCertificado: certificado15 },
  { id: 16, logo: logoPlatzi, titulo: "Curso de Inglés Básico A1 para Principiantes", institucion: "Platzi", fecha: "Abr. 2025", idCredencial: "40922ff3-f62a-492c-bdaf-b8e296023661", archivoCertificado: certificado16 },
  { id: 17, logo: logoPlatzi, titulo: "Curso de Gestión de Proyectos con Jira", institucion: "Platzi", fecha: "Abr. 2025", idCredencial: "a72454ab-e4a8-424d-988c-f1caac49713c", archivoCertificado: certificado17 },
  { id: 18, logo: logoPlatzi, titulo: "Curso de Herramientas para Managers", institucion: "Platzi", fecha: "May. 2025", idCredencial: "5553e18f-0825-4c5b-9240-2299c4ddd16c", archivoCertificado: certificado18 },
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