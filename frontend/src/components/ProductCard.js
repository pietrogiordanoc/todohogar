import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  const imageUrl = product.image 
    ? `http://localhost:5000${product.image}` 
    : 'https://via.placeholder.com/300x300?text=Sin+Imagen';

  return (
    <Link to={`/productos/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={imageUrl} alt={product.name} />
        <div className="product-category">{product.subcategory}</div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        {product.brand && <p className="product-brand">{product.brand}</p>}
        <p className="product-description">{product.description.substring(0, 80)}...</p>
        <div className="product-footer">
          <span className="product-price">${product.price.toLocaleString()}</span>
          <button className="btn-view">Ver Detalles</button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
