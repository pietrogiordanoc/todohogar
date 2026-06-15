import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { mockProducts } from '../data/mockData';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  // Inicializar con el producto mock si existe
  const initialProduct = mockProducts.find(p => p.id === parseInt(id));
  const [product, setProduct] = useState(initialProduct || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
        // Buscar en datos mock cuando el backend no está disponible
        const mockProduct = mockProducts.find(p => p.id === parseInt(id));
        if (mockProduct) {
          setProduct(mockProduct);
        } else {
          setError('Producto no encontrado');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container">
        <div className="error-message">{error || 'Producto no encontrado'}</div>
        <div className="text-center mt-3">
          <Link to="/productos" className="btn-secondary">Volver a Productos</Link>
        </div>
      </div>
    );
  }

  // Determinar la URL de la imagen
  let imageUrl = 'https://via.placeholder.com/600x600?text=Sin+Imagen';
  if (product.image) {
    // Si la imagen es de mock data (comienza con /productos/), usarla directamente
    // Si es del backend (comienza con /uploads/), construir la URL completa
    if (product.image.startsWith('/productos/')) {
      imageUrl = product.image;
    } else {
      imageUrl = `http://localhost:5000${product.image}`;
    }
  }

  return (
    <>
      <Helmet>
        <title>{product.metaTitle || product.name} - TODOHOGAR</title>
        <meta name="description" content={product.metaDescription || product.description} />
        <meta name="keywords" content={product.metaKeywords || `${product.name}, ${product.category}, ${product.subcategory}`} />
      </Helmet>

      <div className="product-detail">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Inicio</Link>
            <span>/</span>
            <Link to="/productos">Productos</Link>
            <span>/</span>
            <Link to={`/productos?category=${product.category}`}>{product.category}</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>

          <div className="product-detail-content">
            <div className="product-detail-image">
              <img src={imageUrl} alt={product.name} />
            </div>

            <div className="product-detail-info">
              <div className="product-badges">
                <span className="badge category-badge">{product.category}</span>
                <span className="badge subcategory-badge">{product.subcategory}</span>
              </div>

              <h1 className="product-title">{product.name}</h1>

              {product.brand && (
                <p className="product-brand">
                  <strong>Marca:</strong> {product.brand}
                </p>
              )}

              {product.model && (
                <p className="product-model">
                  <strong>Modelo:</strong> {product.model}
                </p>
              )}

              <div className="product-price-section">
                <span className="product-price">${product.price.toLocaleString()}</span>
              </div>

              <div className="product-description">
                <h2>Descripción</h2>
                <p>{product.description}</p>
              </div>

              <div className="product-actions">
                <p className="contact-info">
                  Para más información sobre este producto, contáctanos
                </p>
                <Link to="/contacto" className="btn-contact">
                  Contactar
                </Link>
              </div>
            </div>
          </div>

          <div className="back-link">
            <Link to="/productos" className="btn-back">
              ← Volver a Productos
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
