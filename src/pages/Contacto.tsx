import { useState } from 'react';
import "../styles/Contacto.css";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Maneja el cambio de los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validaciones básicas
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      alert("Por favor, completa todos los campos.");
      setLoading(false);
      return;
    }

    // Guardar los datos localmente en localStorage
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    // Crear el mensaje para WhatsApp
    const message = `¡Nuevo mensaje de contacto!\n\nNombre: ${formData.nombre}\nCorreo: ${formData.email}\nMensaje: ${formData.mensaje}`;

    // Codificar el mensaje para la URL
    const whatsappUrl = `https://wa.me/573026929375?text=${encodeURIComponent(message)}`;

    // Redirigir a WhatsApp con el mensaje
    window.open(whatsappUrl, '_blank');

    // Después de enviar, reseteamos el formulario
    setFormData({
      nombre: '',
      email: '',
      mensaje: '',
    });

    setFormSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="contacto">

      <div className="contacto-container">
        <div className="contacto-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Tu correo electrónico"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Tu mensaje"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>

          {formSubmitted && !loading && (
            <p className="confirmation">¡Gracias por contactarme! Te responderé pronto por WhatsApp.</p>
          )}
        </div>

        <div className="contacto-info">
          <h2>Conéctame</h2>
          <p>Si prefieres, también puedes contactarme a través de mis redes sociales o por correo electrónico.</p>

          <div className="social-links">
            <a href="mailto:mayralejadra2003@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">Correo Electrónico</a>
            <a href="https://www.linkedin.com/in/mayra-s%C3%A1nchez-577183235/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
