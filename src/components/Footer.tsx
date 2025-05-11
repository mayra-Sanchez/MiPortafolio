import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import "../styles/Footer.css";
import cv from '../assets/mi_cv.pdf';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <a
            href="https://github.com/mayra-Sanchez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-link"
          >
            <FaGithub className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/mayra-s%C3%A1nchez-577183235/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href= {cv}
            target="_blank"
            rel="noopener noreferrer"
            download
            aria-label="Descargar CV"
            className="social-link cv-link"
          >
            <FaFilePdf className="social-icon" />
            <span>CV</span>
          </a>

        </div>

        <div className="footer-copyright">
          <p className="copyright-text">
            © {new Date().getFullYear()} Mayra Sánchez. Todos los derechos reservados.
          </p>
          <p className="design-credit">
            Diseñado y desarrollado con ❤️ por Mayra Sánchez
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;