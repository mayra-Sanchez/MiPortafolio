import { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap, FaStar } from "react-icons/fa";
import "../styles/SobreMi.css";

const SobreMi = () => {
  // Estado para controlar la categoría seleccionada
  const [categoria, setCategoria] = useState("educacion");

  return (
    <div className="sobre-mi">
      <h1>Sobre mí</h1>

      {/* Botones de selección */}
      <div className="botones-filtro">
        <button className={categoria === "educacion" ? "activo" : ""} onClick={() => setCategoria("educacion")}>
          Educación
        </button>
        <button className={categoria === "experiencia" ? "activo" : ""} onClick={() => setCategoria("experiencia")}>
          Experiencia Profesional
        </button>
        <button className={categoria === "interes" ? "activo" : ""} onClick={() => setCategoria("interes")}>
          Información de Interés
        </button>
      </div>

      {/* Línea de tiempo */}
      <VerticalTimeline>
        {/* Educación */}
        {categoria === "educacion" && (
          <>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: "#0288d1", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #0288d1" }}
              date="2020 - Actualidad"
              iconStyle={{ background: "#0288d1", color: "#fff" }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">Universidad del Valle</h3>
              <h4 className="vertical-timeline-element-subtitle">Ingeniería de Sistemas - 10° Semestre</h4>
              <p><strong>Promedio:</strong> 4.25/5</p>
              <p><strong>Proyecto de Grado:</strong> Desarrollo de un sistema de información para pacientes con epilepsia (En curso)</p>
              <p><strong>Electiva:</strong> Introducción al Procesamiento Digital de Imágenes (2023)</p>
              <p><strong>Electiva:</strong> Calidad de Productos de Software (2024)</p>
              <p>Miembro del <strong>Laboratorio de Multimedia y Visión por Computador (MVC)</strong>, con enfoque en visión computacional aplicada al área médica.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: "#0288d1", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #0288d1" }}
              date="2014 - 2020"
              iconStyle={{ background: "#0288d1", color: "#fff" }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">Colegio Comfandi Calipso</h3>
              <h4 className="vertical-timeline-element-subtitle">Bachiller Técnico</h4>
              <p>Especialidad en <strong>informática y programación de software</strong>.</p>
            </VerticalTimelineElement>
          </>
        )}


        {/* Experiencia Profesional */}
        {categoria === "experiencia" && (
          <>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#4CAF50", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #4CAF50" }}
              date="Dic. 2023 - Actualidad"
              iconStyle={{ background: "#4CAF50", color: "#fff" }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title">Profesional en Entrenamiento</h3>
              <h4 className="vertical-timeline-element-subtitle">Banco de Occidente - Cali, Colombia</h4>
              <p>
                Participación en el programa de formación profesional del banco, adquiriendo experiencia en áreas clave del sector financiero y tecnológico.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#4CAF50", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #4CAF50" }}
              date="2024"
              iconStyle={{ background: "#4CAF50", color: "#fff" }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title">Monitor asistente docencia</h3>
              <h4 className="vertical-timeline-element-subtitle">Universidad del Valle</h4>
              <p>Asistente de docencia del profesor Jorge Arias Calderon en la<strong> Facultad de Derecho y
                Ciencia Política</strong>.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#4CAF50", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #4CAF50" }}
              date="2022 - 2024"
              iconStyle={{ background: "#4CAF50", color: "#fff" }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title">Monitor Administrativo</h3>
              <h4 className="vertical-timeline-element-subtitle">Universidad del Valle</h4>
              <p>Soporte en el área de seguridad y vigilancia en la <strong>Escuela de Ingeniería de Sistemas</strong>.</p>
            </VerticalTimelineElement>
          </>
        )}

        {/* Información de Interés */}
        {categoria === "interes" && (
          <>
            <VerticalTimelineElement
              className="vertical-timeline-element--info"
              contentStyle={{ background: "#FF9800", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #FF9800" }}
              date="2021 - Actualidad"
              iconStyle={{ background: "#FF9800", color: "#fff" }}
              icon={<FaStar />}
            >
              <h3 className="vertical-timeline-element-title">Miembro del Laboratorio MVC</h3>
              <h4 className="vertical-timeline-element-subtitle">Universidad del Valle</h4>
              <p>
                Soy parte del <strong>Laboratorio de Multimedia y Visión por Computador (MVC)</strong>, dirigido por la
                <strong> Ph.D. María Patricia Trujillo Uribe</strong>. he sido parte del grupo desde el quinto semestre de mi carrera
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--info"
              contentStyle={{ background: "#FF9800", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #FF9800" }}
              date="Oct. 2024 - Dic. 2024"
              iconStyle={{ background: "#FF9800", color: "#fff" }}
              icon={<FaStar />}
            >
              <h3 className="vertical-timeline-element-title">Desarrolladora en Inspiranza</h3>
              <h4 className="vertical-timeline-element-subtitle">Proyecto Zenenti</h4>
              <p>
                Desarrollo de una aplicación enfocada en la meditación, mejorando la accesibilidad a la práctica del mindfulness. Proyecto finalizado en diciembre de 2024.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--info"
              contentStyle={{ background: "#FF9800", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #FF9800" }}
              date="2023"
              iconStyle={{ background: "#FF9800", color: "#fff" }}
              icon={<FaStar />}
            >
              <h3 className="vertical-timeline-element-title">Equipo de Escrutinio</h3>
              <h4 className="vertical-timeline-element-subtitle">Elecciones Territoriales</h4>
              <p>Participé en el equipo de soporte técnico durante las elecciones territoriales de mi país.</p>
            </VerticalTimelineElement>
          </>
        )}
      </VerticalTimeline>
    </div>
  );
};

export default SobreMi;
