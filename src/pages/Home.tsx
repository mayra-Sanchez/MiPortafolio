import { FaCode, FaUsers, FaCogs } from "react-icons/fa";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Sección de Presentación */}
      <section className="perfil-profesional">
        <h1>¡Hola, soy Mayra Sánchez! 👋</h1>
        <p>
          Ingeniera de sistemas en formación con experiencia en el desarrollo de <strong>aplicaciones web</strong>,
          <strong> calidad de software</strong> y <strong>gestión de datos</strong>. 
          Apasionada por la tecnología, la inteligencia artificial y el desarrollo ágil.
        </p>
      </section>

      {/* Sección de Intereses */}
      <section className="intereses">
        <h2>Áreas de Interés</h2>
        <div className="intereses-grid">
          <div className="interes-card"><FaCode size={25} /> Desarrollo de software</div>
          <div className="interes-card"><FaUsers size={25} /> Trabajo en equipo</div>
          <div className="interes-card"><FaCogs size={25} /> Metodologías Ágiles</div>
          <div className="interes-card"><FaCode size={25} /> Calidad de software</div>
          <div className="interes-card"><FaUsers size={25} /> UX/UI</div>
          <div className="interes-card"><FaCogs size={25} /> Gestión de datos</div>
        </div>
      </section>

      {/* Sección de Idiomas */}
      <section className="languages">
        <h2>Idiomas</h2>
        <div className="language">
          <span>Español</span>
          <div className="dots">
            {[...Array(5)].map((_, index) => (<span key={index} className="dot filled"></span>))}
          </div>
        </div>
        <div className="language">
          <span>Inglés</span>
          <div className="dots">
            {[...Array(3)].map((_, index) => (<span key={index} className="dot filled"></span>))}
            {[...Array(2)].map((_, index) => (<span key={index} className="dot empty"></span>))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
