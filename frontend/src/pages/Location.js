import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Location.css';

function Location() {
  return (
    <>
      <Helmet>
        <title>Ubicación - TODOHOGAR | Dónde Estamos</title>
        <meta name="description" content="Encuentra la ubicación de TODOHOGAR. Visítanos en nuestras oficinas." />
        <meta name="keywords" content="ubicación, dirección, dónde estamos, TODOHOGAR, mapa" />
      </Helmet>

      <div className="location-page">
        <div className="location-header">
          <div className="container">
            <h1>Nuestra Ubicación</h1>
            <p>Visítanos en nuestras oficinas</p>
          </div>
        </div>

        <div className="container">
          <div className="location-content">
            <div className="location-info">
              <h2>Encuéntranos</h2>
              
              <div className="info-card">
                <h3>📍 Dirección</h3>
                <p>
                  <strong>Dirección por confirmar</strong><br />
                  Ciudad, País<br />
                  Código Postal
                </p>
              </div>

              <div className="info-card">
                <h3>⏰ Horario de Atención</h3>
                <p>
                  <strong>Lunes a Viernes:</strong> 9:00 AM - 6:00 PM<br />
                  <strong>Sábados:</strong> 10:00 AM - 2:00 PM<br />
                  <strong>Domingos:</strong> Cerrado
                </p>
              </div>

              <div className="info-card">
                <h3>📞 Contacto</h3>
                <p>
                  <strong>Teléfono:</strong> +1 234 567 890<br />
                  <strong>Email:</strong> info@todohogar.com<br />
                  <strong>WhatsApp:</strong> +1 234 567 890
                </p>
              </div>

              <div className="info-card">
                <h3>🚗 Cómo Llegar</h3>
                <p>
                  Contamos con estacionamiento disponible para nuestros clientes.
                  También puedes llegar en transporte público:
                </p>
                <ul>
                  <li>Línea de Metro: Por confirmar</li>
                  <li>Rutas de Autobús: Por confirmar</li>
                </ul>
              </div>
            </div>

            <div className="map-container">
              <h2>Mapa</h2>
              <div className="map-placeholder">
                <div className="map-icon">🗺️</div>
                <p>Mapa por configurar</p>
                <small>La ubicación exacta se agregará próximamente</small>
              </div>
              
              {/* Para integrar Google Maps, descomentar y agregar API key:
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación TODOHOGAR"
              ></iframe>
              */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;
