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

  // Función para abrir el modal del certificado
  const abrirModal = (certificado: Certificado) => {
    setModalCertificado(certificado);
  };

  // Función para cerrar el modal
  const cerrarModal = () => {
    setModalCertificado(null);
  };

  return (
    <div className="certificados">
      <h1>Licencias y certificaciones</h1>
      <p className='parrafo'>Estos son las licencias y los certificadoos que he realizado</p>
      <div className="certificados-container">
        {certificadosData.map((certificado) => (
          <div
            key={certificado.id}
            className="certificado-card"
            onClick={() => abrirModal(certificado)}
          >
            <img src={certificado.logo} alt="Logo" className="certificado-logo" />
            <div className="certificado-info">
              <h2>{certificado.titulo}</h2>
              <p>{certificado.institucion}</p>
              <p>Fecha de expedición: {certificado.fecha}</p>
              <p>ID de la credencial: {certificado.idCredencial}</p>
            </div>
          </div>
        ))}
      </div>

      {modalCertificado && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={cerrarModal}>
              &times;
            </button>
            <h2>{modalCertificado.titulo}</h2>
            <p>Institución: {modalCertificado.institucion}</p>
            <p>Fecha: {modalCertificado.fecha}</p>
            <p>ID de la credencial: {modalCertificado.idCredencial}</p>
            <a href={modalCertificado.archivoCertificado} target="_blank" rel="noopener noreferrer" className="btn-certificado">
              Ver Certificado
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificados;
