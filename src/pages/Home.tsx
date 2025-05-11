import { FaCode, FaUsers, FaCog, FaLanguage, FaChartLine, FaDatabase } from "react-icons/fa";
import "../styles/Home.css";

const Home = () => {
  const interests = [
    { icon: <FaCode />, name: "Desarrollo de software" },
    { icon: <FaUsers />, name: "Trabajo en equipo" },
    { icon: <FaCog />, name: "Metodologías Ágiles" },
    { icon: <FaChartLine />, name: "Calidad de software" },
    { icon: <FaUsers />, name: "UX/UI" },
    { icon: <FaDatabase />, name: "Gestión de datos" }
  ];

  const languages = [
    { name: "Español", level: 5 },
    { name: "Inglés", level: 3 }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            ¡Hola, soy <span className="name-highlight">Mayra Sánchez</span>! <span className="hand-emoji">👋</span>
          </h1>
          <p className="hero-description">
            Ingeniera de sistemas en formación con experiencia en el desarrollo de <strong>aplicaciones web</strong>, 
            <strong> calidad de software</strong> y <strong>gestión de datos</strong>. 
            Apasionada por la tecnología, la inteligencia artificial y el desarrollo ágil.
          </p>
        </div>
      </section>

      {/* Interests Section */}
      <section className="interests-section">
        <h2 className="section-title">
          <FaCode className="title-icon" /> Áreas de Interés
        </h2>
        <div className="interests-grid">
          {interests.map((interest, index) => (
            <div key={index} className="interest-card">
              <div className="interest-icon">{interest.icon}</div>
              <span>{interest.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Languages Section */}
      <section className="languages-section">
        <h2 className="section-title">
          <FaLanguage className="title-icon" /> Idiomas
        </h2>
        <div className="languages-container">
          {languages.map((language, index) => (
            <div key={index} className="language-item">
              <span className="language-name">{language.name}</span>
              <div className="language-level">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`level-dot ${i < language.level ? 'filled' : 'empty'}`}
                  />
                ))}
                <span className="level-text">
                  {language.level === 5 ? 'Nativo' : `${language.level}/5`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;