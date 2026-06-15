import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TODOHOGAR</h3>
            <p>Tu tienda de confianza para electrodomésticos y muebles de calidad.</p>
          </div>
          
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
              <li><Link to="/ubicacion">Ubicación</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Categorías</h4>
            <ul>
              <li><Link to="/productos?category=Refrigeración">Refrigeración</Link></li>
              <li><Link to="/productos?category=Cocción">Cocción</Link></li>
              <li><Link to="/productos?category=Climatización">Climatización</Link></li>
              <li><Link to="/productos?category=Muebles">Muebles</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <ul>
              <li>📞 Teléfono: +1 234 567 890</li>
              <li>✉️ Email: info@todohogar.com</li>
              <li>📍 Dirección por confirmar</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TODOHOGAR. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
