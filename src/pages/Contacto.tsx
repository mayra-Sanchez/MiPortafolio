import { useState, useEffect } from 'react';
import "../styles/Contacto.css";
import { FiMail, FiLinkedin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Efecto para limpiar el mensaje de confirmación después de 5 segundos
  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  // Validación del formulario
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Correo electrónico no válido';
    }
    
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    } else if (formData.mensaje.length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Limpiar error cuando el usuario escribe
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Simular envío (en producción sería una llamada API)
    setTimeout(() => {
      // Guardar en localStorage
      const savedForms = JSON.parse(localStorage.getItem('contactForms') || '[]');
      localStorage.setItem('contactForms', JSON.stringify([...savedForms, formData]));
      
      // Mensaje para WhatsApp
      const message = `¡Nuevo mensaje de contacto!%0A%0A*Nombre:* ${formData.nombre}%0A*Correo:* ${formData.email}%0A%0A*Mensaje:*%0A${formData.mensaje}`;
      const whatsappUrl = `https://wa.me/573026929375?text=${message}`;
      
      // Resetear formulario
      setFormData({
        nombre: '',
        email: '',
        mensaje: '',
      });
      
      setFormSubmitted(true);
      setLoading(false);
      
      // Abrir WhatsApp (opcional, podrías solo mostrar el link)
      window.open(whatsappUrl, '_blank');
    }, 1000);
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-container">
        <div className="contacto-header">
          <h2>Contacto</h2>
          <p>¿Tienes un proyecto en mente o quieres trabajar juntos? ¡Hablemos!</p>
        </div>
        
        <div className="contacto-content">
          <div className="contacto-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className={`form-group ${errors.nombre ? 'error' : ''}`}>
                <label htmlFor="nombre">
                  <FiUser className="input-icon" /> Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                />
                {errors.nombre && <span className="error-message">{errors.nombre}</span>}
              </div>

              <div className={`form-group ${errors.email ? 'error' : ''}`}>
                <label htmlFor="email">
                  <FiMail className="input-icon" /> Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className={`form-group ${errors.mensaje ? 'error' : ''}`}>
                <label htmlFor="mensaje">
                  <FiMessageSquare className="input-icon" /> Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows={5}
                ></textarea>
                {errors.mensaje && <span className="error-message">{errors.mensaje}</span>}
              </div>

              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <FiSend className="send-icon" /> Enviar Mensaje
                  </>
                )}
              </button>
              
              {formSubmitted && (
                <div className="confirmation-message">
                  <p>¡Gracias por tu mensaje! Te responderé pronto.</p>
                  <div className="whatsapp-redirect">
                    <FaWhatsapp className="whatsapp-icon" />
                    <span>¿Prefieres hablar ahora? <a href="https://wa.me/573026929375" target="_blank" rel="noopener">Escríbeme por WhatsApp</a></span>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="contacto-info">
            <h3>Otras formas de contacto</h3>
            <p>También puedes encontrarme en estas plataformas:</p>
            
            <div className="contact-methods">
              <a href="mailto:mayralejadra2003@gmail.com" className="contact-method">
                <div className="contact-icon email-icon">
                  <FiMail />
                </div>
                <div className="contact-details">
                  <h4>Correo Electrónico</h4>
                  <p>mayralejadra2003@gmail.com</p>
                </div>
              </a>
              
              <a href="https://wa.me/573026929375" className="contact-method">
                <div className="contact-icon whatsapp-icon">
                  <FaWhatsapp />
                </div>
                <div className="contact-details">
                  <h4>WhatsApp</h4>
                  <p>+57 302 692 9375</p>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/mayra-s%C3%A1nchez-577183235/" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-icon linkedin-icon">
                  <FiLinkedin />
                </div>
                <div className="contact-details">
                  <h4>LinkedIn</h4>
                  <p>Mayra Sánchez</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;