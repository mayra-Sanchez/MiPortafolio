import { useState } from 'react';
import '../styles/Certificados.css';
import certificado from "../assets/certificados/liderazgo_de_equipos_678e7acab7d38.pdf";
import logoMichigan from "../assets/certificados/1631307390795.jpg"
import certificado2 from "../assets/certificados/Coursera 7CSVQ7KF9BUE.pdf";
import logoMeta from "../assets/certificados/facebook_logo.jpg"

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
  }
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
