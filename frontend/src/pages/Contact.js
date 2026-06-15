import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>Contacto - TODOHOGAR | Contáctanos</title>
        <meta name="description" content="Contáctanos para más información sobre nuestros productos. Estamos aquí para ayudarte." />
        <meta name="keywords" content="contacto, información, TODOHOGAR, atención al cliente" />
      </Helmet>

      <div className="contact-page">
        <div className="contact-header">
          <div className="container">
            <h1>Contáctanos</h1>
            <p>Estamos aquí para ayudarte</p>
          </div>
        </div>

        <div className="container">
          <div className="contact-content">
            <div className="contact-info-section">
              <h2>Información de Contacto</h2>
              
              <div className="contact-info-card">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Teléfono</h3>
                  <p>+1 234 567 890</p>
                  <p>Lun - Vie: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon">✉️</div>
                <div>
                  <h3>Email</h3>
                  <p>info@todohogar.com</p>
                  <p>Respondemos en 24 horas</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Dirección</h3>
                  <p>Por confirmar</p>
                  <p>Visítanos en nuestras oficinas</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon">⏰</div>
                <div>
                  <h3>Horario de Atención</h3>
                  <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  <p>Sábados: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Envíanos un Mensaje</h2>
              
              {submitted && (
                <div className="success-message">
                  ¡Gracias por contactarnos! Te responderemos pronto.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 890"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensaje *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
