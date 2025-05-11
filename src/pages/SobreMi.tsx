import { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap, FaStar, FaCode, FaFlask } from "react-icons/fa";
import "../styles/SobreMi.css";

const SobreMi = () => {
  const [categoria, setCategoria] = useState("educacion");

  return (
    <section className="sobre-mi-container">
      <div className="sobre-mi-header">
        <h1 className="sobre-mi-titulo">Mi Trayectoria</h1>
        <p className="sobre-mi-subtitulo">Explora mi formación académica, experiencia profesional y logros destacados</p>
        
        <div className="filtro-categorias">
          <button 
            className={`filtro-btn ${categoria === "educacion" ? "activo" : ""}`} 
            onClick={() => setCategoria("educacion")}
          >
            <FaGraduationCap className="filtro-icon" />
            Educación
          </button>
          <button 
            className={`filtro-btn ${categoria === "experiencia" ? "activo" : ""}`} 
            onClick={() => setCategoria("experiencia")}
          >
            <FaBriefcase className="filtro-icon" />
            Experiencia
          </button>
          <button 
            className={`filtro-btn ${categoria === "interes" ? "activo" : ""}`} 
            onClick={() => setCategoria("interes")}
          >
            <FaStar className="filtro-icon" />
            Logros
          </button>
        </div>
      </div>

      <VerticalTimeline layout="1-column-left" lineColor="#e0e0e0">
        {/* Educación */}
        {categoria === "educacion" && (
          <>
            <VerticalTimelineElement
              className="timeline-element"
              contentStyle={{ background: "#4361ee", color: "#fff", boxShadow: "0 4px 20px rgba(67, 97, 238, 0.15)" }}
              contentArrowStyle={{ borderRight: "7px solid #4361ee" }}
              date="2020 - Presente"
              dateClassName="timeline-date"
              iconStyle={{ background: "#4361ee", color: "#fff", boxShadow: "0 0 0 4px #e0e0e0" }}
              icon={<FaGraduationCap />}
            >
              <div className="timeline-content">
                <h3 className="timeline-title">Universidad del Valle</h3>
                <h4 className="timeline-subtitle">Ingeniería de Sistemas - 10° Semestre</h4>
                
                <div className="timeline-details">
                  <p><span className="detail-label">Promedio:</span> 4.25/5.0</p>
                  <p><span className="detail-label">Proyecto de Grado:</span> Sistema de información para pacientes con epilepsia (En curso)</p>
                  
                  <div className="timeline-highlights">
                    <div className="highlight-item">
                      <FaCode className="highlight-icon" />
                      <span>Electiva: Procesamiento Digital de Imágenes (2023)</span>
                    </div>
                    <div className="highlight-item">
                      <FaFlask className="highlight-icon" />
                      <span>Electiva: Calidad de Productos de Software (2024)</span>
                    </div>
                  </div>
                  
                  <p className="timeline-note">Miembro del <strong>Laboratorio de Multimedia y Visión por Computador (MVC)</strong>, con enfoque en visión computacional aplicada al área médica.</p>
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="timeline-element"
              contentStyle={{ background: "#4361ee", color: "#fff", boxShadow: "0 4px 20px rgba(67, 97, 238, 0.15)" }}
              contentArrowStyle={{ borderRight: "7px solid #4361ee" }}
              date="2014 - 2020"
              dateClassName="timeline-date"
              iconStyle={{ background: "#4361ee", color: "#fff", boxShadow: "0 0 0 4px #e0e0e0" }}
              icon={<FaGraduationCap />}
            >
              <div className="timeline-content">
                <h3 className="timeline-title">Colegio Comfandi Calipso</h3>
                <h4 className="timeline-subtitle">Bachiller Técnico</h4>
                <p className="timeline-specialty">Especialidad en <strong>Informática y Programación de Software</strong></p>
              </div>
            </VerticalTimelineElement>
          </>
        )}

        {/* Experiencia Profesional */}
        {categoria === "experiencia" && (
          <>
            <VerticalTimelineElement
              className="timeline-element"
              contentStyle={{ background: "#3a0ca3", color: "#fff", boxShadow: "0 4px 20px rgba(58, 12, 163, 0.15)" }}
              contentArrowStyle={{ borderRight: "7px solid #3a0ca3" }}
              date="Dic. 2023 - Presente"
              dateClassName="timeline-date"
              iconStyle={{ background: "#3a0ca3", color: "#fff", boxShadow: "0 0 0 4px #e0e0e0" }}
              icon={<FaBriefcase />}
            >
              <div className="timeline-content">
                <h3 className="timeline-title">Profesional en Entrenamiento</h3>
                <h4 className="timeline-subtitle">Banco de Occidente - Cali, Colombia</h4>
                <div className="timeline-details">
                  <ul className="timeline-list">
                    <li>Participación en el programa de formación profesional del banco</li>
                    <li>Adquisición de experiencia en áreas clave del sector financiero y tecnológico</li>
                    <li>Desarrollo de competencias en sistemas bancarios y fintech</li>
                  </ul>
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="timeline-element"
              contentStyle={{ background: "#3a0ca3", color: "#fff", boxShadow: "0 4px 20px rgba(58, 12, 163, 0.15)" }}
              contentArrowStyle={{ borderRight: "7px solid #3a0ca3" }}
              date="2024"
              dateClassName="timeline-date"
              iconStyle={{ background: "#3a0ca3", color: "#fff", boxShadow: "0 0 0 4px #e0e0e0" }}
              icon={<FaBriefcase />}
            >
              <div className="timeline-content">
                <h3 className="timeline-title">Monitor Asistente de Docencia</h3>
                <h4 className="timeline-subtitle">Universidad del Valle</h4>
                <p>Asistente de docencia del profesor <strong>Jorge Arias Calderón</strong> en la <strong>Facultad de Derecho y Ciencia Política</strong>.</p>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="timeline-element"
              contentStyle={{ background: "#3a0ca3", color: "#fff", boxShadow: "0 4px 20px rgba(58, 12, 163, 0.15)" }}
              contentArrowStyle={{ borderRight: "7px solid #3a0ca3" }}
              date="2022 - 2024"
              dateClassName="timeline-date"
              iconStyle={{ background: "#3a0ca3", color: "#fff", boxShadow: "0 0 0 4px #e0e0e0" }}
              icon={<FaBriefcase />}
            >
              <div className="timeline-content">
                <h3 className="timeline-title">Monitor Administrativo</h3>
                <h4 className="timeline-subtitle">Universidad del Valle</h4>
                <p>Soporte en el área de seguridad y vigilancia en la <strong>Escuela de Ingeniería de Sistemas</strong>.</p>
              </div>
            </VerticalTimelineElement>
          </>
        )}

        {/* Información de Interés */}
        {categoria === "interes" && (
          <>
            <VerticalTimelineElement
              className="timeline-element"
              contentStyle={{ background: "#7209b7", color: "#fff", boxShadow: "0 4px 20px rgba(114, 9, 183, 0.15)" }}
              contentArrowStyle={{ borderRight: "7px solid #7209b7" }}
              date="2021 - Presente"
              dateClassName="timeline-date"
              iconStyle={{ background: "#7209b7", color: "#fff", boxShadow: "0 0 0 4px #e0e0e0" }}
              icon={<FaStar />}
            >
              <div className="timeline-content">
                <h3 className="timeline-title">Miembro del Laboratorio MVC</h3>
                <h4 className="timeline-subtitle">Universidad del Valle</h4>
                <div className="timeline-details">
                  <p>Parte del <strong>Laboratorio de Multimedia y Visión por Computador (MVC)</strong>, dirigido por la <strong>Ph.D. María Patricia Trujillo Uribe</strong>.</p>
                  <ul className="timeline-list">
                    <li>Investigación en visión computacional aplicada al área médica</li>
                    <li>Participación desde el quinto semestre de la carrera</li>
                    <li>Colaboración en proyectos de procesamiento de imágenes</li>
                  </ul>
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="timeline-element"
              contentStyle={{ background: "#7209b7", color: "#fff", boxShadow: "0 4px 20px rgba(114, 9, 183, 0.15)" }}
              contentArrowStyle={{ borderRight: "7px solid #7209b7" }}
              date="Oct. 2024 - Dic. 2024"
              dateClassName="timeline-date"
              iconStyle={{ background: "#7209b7", color: "#fff", boxShadow: "0 0 0 4px #e0e0e0" }}
              icon={<FaStar />}
            >
              <div className="timeline-content">
                <h3 className="timeline-title">Desarrolladora en Inspiranza</h3>
                <h4 className="timeline-subtitle">Proyecto Zenenti</h4>
                <div className="timeline-details">
                  <p>Desarrollo de una aplicación enfocada en la meditación y mindfulness.</p>
                  <ul className="timeline-list">
                    <li>Mejora de la accesibilidad a prácticas de meditación</li>
                    <li>Implementación de features para seguimiento de progreso</li>
                    <li>Proyecto finalizado exitosamente en diciembre 2024</li>
                  </ul>
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="timeline-element"
              contentStyle={{ background: "#7209b7", color: "#fff", boxShadow: "0 4px 20px rgba(114, 9, 183, 0.15)" }}
              contentArrowStyle={{ borderRight: "7px solid #7209b7" }}
              date="2023"
              dateClassName="timeline-date"
              iconStyle={{ background: "#7209b7", color: "#fff", boxShadow: "0 0 0 4px #e0e0e0" }}
              icon={<FaStar />}
            >
              <div className="timeline-content">
                <h3 className="timeline-title">Equipo de Escrutinio</h3>
                <h4 className="timeline-subtitle">Elecciones Territoriales</h4>
                <p>Participación en el equipo de soporte técnico durante las elecciones territoriales.</p>
                <ul className="timeline-list">
                  <li>Soporte a sistemas de votación</li>
                  <li>Asistencia técnica en centros de votación</li>
                  <li>Garantía de transparencia en procesos electorales</li>
                </ul>
              </div>
            </VerticalTimelineElement>
          </>
        )}
      </VerticalTimeline>
    </section>
  );
};

export default SobreMi;