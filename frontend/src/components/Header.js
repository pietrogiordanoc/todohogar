import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/logow.png" alt="TODOHOGAR" className="logo-img" />
            <span className="logo-text">TODOHOGAR</span>
          </Link>
          
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={menuOpen ? 'active' : ''}></span>
            <span className={menuOpen ? 'active' : ''}></span>
            <span className={menuOpen ? 'active' : ''}></span>
          </button>

          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
            <Link to="/productos" onClick={() => setMenuOpen(false)}>Productos</Link>
            <Link to="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</Link>
            <Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
            <Link to="/ubicacion" onClick={() => setMenuOpen(false)}>Ubicación</Link>
            <Link to="/admin" className="admin-link" onClick={() => setMenuOpen(false)}>Admin</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
