import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';

function About() {
  return (
    <>
      <Helmet>
        <title>Nosotros - TODOHOGAR | Quiénes Somos</title>
        <meta name="description" content="Conoce más sobre TODOHOGAR, tu tienda de confianza para electrodomésticos y muebles. Nuestra misión, visión y valores." />
        <meta name="keywords" content="sobre nosotros, quiénes somos, TODOHOGAR, empresa, misión, visión" />
      </Helmet>

      <div className="about-page">
        <div className="about-header">
          <div className="container">
            <h1>Nosotros</h1>
            <p>Conoce más sobre TODOHOGAR</p>
          </div>
        </div>

        <div className="container">
          <div className="about-content">
            <section className="about-section">
              <h2>¿Quiénes Somos?</h2>
              <p>
                TODOHOGAR es tu tienda de confianza especializada en electrodomésticos y muebles para el hogar. 
                Nos dedicamos a ofrecer productos de la más alta calidad para hacer tu vida más cómoda y tu hogar más acogedor.
              </p>
              <p>
                Con años de experiencia en el mercado, nos hemos convertido en la primera opción para familias que buscan 
                equipar su hogar con los mejores productos a precios competitivos.
              </p>
            </section>

            <section className="about-section">
              <h2>Nuestra Misión</h2>
              <p>
                Proporcionar a nuestros clientes productos de calidad excepcional para el hogar, con un servicio 
                personalizado y precios accesibles. Nos comprometemos a ser el aliado perfecto en la creación de 
                espacios confortables y funcionales.
              </p>
            </section>

            <section className="about-section">
              <h2>Nuestra Visión</h2>
              <p>
                Ser la tienda líder en electrodomésticos y muebles para el hogar, reconocida por la excelencia 
                en nuestros productos, la satisfacción de nuestros clientes y nuestro compromiso con la innovación 
                y la sostenibilidad.
              </p>
            </section>

            <section className="about-section">
              <h2>Nuestros Valores</h2>
              <div className="values-grid">
                <div className="value-card">
                  <h3>Calidad</h3>
                  <p>Seleccionamos cuidadosamente cada producto para garantizar la mejor calidad.</p>
                </div>
                <div className="value-card">
                  <h3>Confianza</h3>
                  <p>Construimos relaciones duraderas basadas en la transparencia y honestidad.</p>
                </div>
                <div className="value-card">
                  <h3>Servicio</h3>
                  <p>Nos esforzamos por superar las expectativas de nuestros clientes.</p>
                </div>
                <div className="value-card">
                  <h3>Innovación</h3>
                  <p>Incorporamos las últimas tecnologías y tendencias del mercado.</p>
                </div>
              </div>
            </section>

            <section className="about-section">
              <h2>¿Por Qué Elegirnos?</h2>
              <ul className="features-list">
                <li>✓ Amplio catálogo de productos de las mejores marcas</li>
                <li>✓ Precios competitivos y ofertas especiales</li>
                <li>✓ Asesoramiento personalizado por expertos</li>
                <li>✓ Garantía en todos nuestros productos</li>
                <li>✓ Compromiso con la satisfacción del cliente</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
