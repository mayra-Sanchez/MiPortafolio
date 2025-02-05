import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a
            href="https://github.com/mayra-Sanchez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mayra-s%C3%A1nchez-577183235/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="path-to-your-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <i className="fa fa-file-pdf-o"></i> CV
          </a>
        </div>
      </div>
      <div className="footer-copy">
        <p>Copyright © 2025. Todos los derechos reservados.</p>
        <p>Diseñado por Mayra Sánchez</p>
      </div>
    </div>
  );
};

export default Footer;
