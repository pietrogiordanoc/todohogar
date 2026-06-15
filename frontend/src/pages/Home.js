import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { mockProducts, mockCategories } from '../data/mockData';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [productsRes, categoriesRes] = await Promise.all([
        axios.get('/api/products'),
        axios.get('/api/categories')
      ]);
      setProducts(Array.isArray(productsRes.data) ? productsRes.data.slice(0, 8) : []);
      setCategories(Array.isArray(categoriesRes.data) ? categoriesRes.data : []);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Usar datos mock cuando el backend no está disponible
      setProducts(mockProducts.slice(0, 8));
      setCategories(mockCategories);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>TODOHOGAR - Tu tienda de electrodomésticos y muebles para el hogar</title>
        <meta name="description" content="Descubre la mejor selección de electrodomésticos y muebles para tu hogar. Neveras, lavadoras, sofás, camas y mucho más." />
        <meta name="keywords" content="electrodomésticos, muebles, hogar, neveras, lavadoras, sofás, camas, TODOHOGAR" />
      </Helmet>

      <div className="home">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <h1 className="hero-title">Bienvenido a TODOHOGAR</h1>
            <p className="hero-subtitle">
              Tu tienda de confianza para electrodomésticos y muebles de calidad
            </p>
            <Link to="/productos" className="btn-hero">
              Explorar Productos
            </Link>
          </div>
        </section>

        {/* Categories Section */}
        <section className="categories-section">
          <div className="container">
            <h2 className="section-title">Nuestras Categorías</h2>
            <div className="categories-grid">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/productos?category=${category.name}`}
                  className="category-card"
                >
                  <h3>{category.name}</h3>
                  <p>{category.subcategories.length} subcategorías</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="featured-section">
          <div className="container">
            <h2 className="section-title">Productos Destacados</h2>
            {loading ? (
              <div className="loading">
                <div className="spinner"></div>
              </div>
            ) : products.length > 0 ? (
              <>
                <div className="products-grid">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                <div className="text-center mt-4">
                  <Link to="/productos" className="btn-secondary">
                    Ver Todos los Productos
                  </Link>
                </div>
              </>
            ) : (
              <p className="no-products">No hay productos disponibles aún.</p>
            )}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="features-section">
          <div className="container">
            <h2 className="section-title">¿Por qué elegirnos?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">✓</div>
                <h3>Calidad Garantizada</h3>
                <p>Productos de las mejores marcas del mercado</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📦</div>
                <h3>Gran Variedad</h3>
                <p>Amplio catálogo de electrodomésticos y muebles</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💰</div>
                <h3>Mejores Precios</h3>
                <p>Ofertas competitivas en todos nuestros productos</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h3>Confianza</h3>
                <p>Años de experiencia en el mercado</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
