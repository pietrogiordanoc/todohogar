import React, { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import './Products.css';

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [selectedSubcategory, setSelectedSubcategory] = useState(searchParams.get('subcategory') || '');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const params = {};
      if (selectedCategory) params.category = selectedCategory;
      if (selectedSubcategory) params.subcategory = selectedSubcategory;
      if (searchTerm) params.search = searchTerm;

      const response = await axios.get('/api/products', { params });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory, selectedSubcategory, searchTerm]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory('');
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
    const params = {};
    if (selectedCategory) params.category = selectedCategory;
    if (subcategory) params.subcategory = subcategory;
    setSearchParams(params);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProducts();
  };

  const currentCategory = categories.find(cat => cat.name === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Productos - TODOHOGAR | Electrodomésticos y Muebles</title>
        <meta name="description" content="Explora nuestro catálogo completo de electrodomésticos y muebles para el hogar. Encuentra neveras, lavadoras, sofás, camas y mucho más." />
        <meta name="keywords" content="catálogo, productos, electrodomésticos, muebles, comprar, TODOHOGAR" />
      </Helmet>

      <div className="products-page">
        <div className="products-header">
          <div className="container">
            <h1>Nuestros Productos</h1>
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-btn">Buscar</button>
            </form>
          </div>
        </div>

        <div className="container">
          <div className="products-layout">
            {/* Sidebar Filters */}
            <aside className="filters-sidebar">
              <div className="filter-section">
                <h3>Categorías</h3>
                <div className="filter-options">
                  <button
                    className={`filter-btn ${!selectedCategory ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('')}
                  >
                    Todas las categorías
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`filter-btn ${selectedCategory === category.name ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(category.name)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {currentCategory && (
                <div className="filter-section">
                  <h3>Subcategorías</h3>
                  <div className="filter-options">
                    <button
                      className={`filter-btn ${!selectedSubcategory ? 'active' : ''}`}
                      onClick={() => handleSubcategoryChange('')}
                    >
                      Todas
                    </button>
                    {currentCategory.subcategories.map((sub, index) => (
                      <button
                        key={index}
                        className={`filter-btn ${selectedSubcategory === sub ? 'active' : ''}`}
                        onClick={() => handleSubcategoryChange(sub)}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </aside>

            {/* Products Grid */}
            <div className="products-content">
              <div className="products-info">
                <p>{products.length} producto{products.length !== 1 ? 's' : ''} encontrado{products.length !== 1 ? 's' : ''}</p>
              </div>

              {loading ? (
                <div className="loading">
                  <div className="spinner"></div>
                </div>
              ) : products.length > 0 ? (
                <div className="products-grid">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="no-products">
                  <p>No se encontraron productos con los filtros seleccionados.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
