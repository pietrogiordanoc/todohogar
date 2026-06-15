import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import './Admin.css';

function Admin() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [message, setMessage] = useState({ type: '', text: '' });

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    subcategory: '',
    brand: '',
    model: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    image: null
  });

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 4000);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const [productsRes, categoriesRes] = await Promise.all([
        axios.get('/api/products'),
        axios.get('/api/categories')
      ]);
      setProducts(Array.isArray(productsRes.data) ? productsRes.data : []);
      setCategories(Array.isArray(categoriesRes.data) ? categoriesRes.data : []);
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessage({ type: 'error', text: 'Error al cargar los datos' });
      setTimeout(() => setMessage({ type: '', text: '' }), 4000);
      setProducts([]);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleCategoryChange = (e) => {
    setFormData({ ...formData, category: e.target.value, subcategory: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key] !== null && formData[key] !== '') {
        data.append(key, formData[key]);
      }
    });

    try {
      if (editingProduct) {
        await axios.put(`/api/products/${editingProduct.id}`, data, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        showMessage('success', 'Producto actualizado exitosamente');
      } else {
        await axios.post('/api/products', data, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        showMessage('success', 'Producto creado exitosamente');
      }
      
      resetForm();
      fetchData();
    } catch (error) {
      console.error('Error saving product:', error);
      showMessage('error', 'Error al guardar el producto');
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      subcategory: product.subcategory,
      brand: product.brand || '',
      model: product.model || '',
      metaTitle: product.metaTitle || '',
      metaDescription: product.metaDescription || '',
      metaKeywords: product.metaKeywords || '',
      image: null
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este producto?')) return;

    try {
      await axios.delete(`/api/products/${id}`);
      showMessage('success', 'Producto eliminado exitosamente');
      fetchData();
    } catch (error) {
      console.error('Error deleting product:', error);
      showMessage('error', 'Error al eliminar el producto');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      category: '',
      subcategory: '',
      brand: '',
      model: '',
      metaTitle: '',
      metaDescription: '',
      metaKeywords: '',
      image: null
    });
    setEditingProduct(null);
    setShowForm(false);
  };

  const currentCategory = categories.find(cat => cat.name === formData.category);

  return (
    <>
      <Helmet>
        <title>Admin - TODOHOGAR | Panel de Administración</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="admin-page">
        <div className="admin-header">
          <div className="container">
            <h1>Panel de Administración</h1>
            <button
              className="btn-add"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? 'Cancelar' : '+ Agregar Producto'}
            </button>
          </div>
        </div>

        <div className="container">
          {message.text && (
            <div className={`message ${message.type}`}>
              {message.text}
            </div>
          )}

          {showForm && (
            <div className="admin-form-container">
              <h2>{editingProduct ? 'Editar Producto' : 'Nuevo Producto'}</h2>
              <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Nombre del Producto *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Precio *</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      step="0.01"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Categoría *</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleCategoryChange}
                      required
                    >
                      <option value="">Selecciona una categoría</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Subcategoría *</label>
                    <select
                      name="subcategory"
                      value={formData.subcategory}
                      onChange={handleInputChange}
                      required
                      disabled={!formData.category}
                    >
                      <option value="">Selecciona una subcategoría</option>
                      {currentCategory && currentCategory.subcategories.map((sub, idx) => (
                        <option key={idx} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Marca</label>
                    <input
                      type="text"
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Modelo</label>
                    <input
                      type="text"
                      name="model"
                      value={formData.model}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Descripción *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="4"
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Imagen del Producto</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  {editingProduct && editingProduct.image && !formData.image && (
                    <small>Imagen actual: {editingProduct.image}</small>
                  )}
                </div>

                <div className="seo-section">
                  <h3>📊 Información SEO (Opcional pero Recomendado)</h3>
                  
                  <div className="form-group">
                    <label>Meta Título</label>
                    <input
                      type="text"
                      name="metaTitle"
                      value={formData.metaTitle}
                      onChange={handleInputChange}
                      placeholder="Título optimizado para búsqueda (60 caracteres)"
                      maxLength="60"
                    />
                    <small>{formData.metaTitle.length}/60 caracteres</small>
                  </div>

                  <div className="form-group">
                    <label>Meta Descripción</label>
                    <textarea
                      name="metaDescription"
                      value={formData.metaDescription}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="Descripción para motores de búsqueda (160 caracteres)"
                      maxLength="160"
                    ></textarea>
                    <small>{formData.metaDescription.length}/160 caracteres</small>
                  </div>

                  <div className="form-group">
                    <label>Palabras Clave (Keywords)</label>
                    <input
                      type="text"
                      name="metaKeywords"
                      value={formData.metaKeywords}
                      onChange={handleInputChange}
                      placeholder="palabra1, palabra2, palabra3"
                    />
                    <small>Separa las palabras con comas</small>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-submit">
                    {editingProduct ? 'Actualizar Producto' : 'Crear Producto'}
                  </button>
                  <button type="button" className="btn-cancel" onClick={resetForm}>
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="products-table-container">
            <h2>Productos ({products.length})</h2>
            {loading ? (
              <div className="loading">
                <div className="spinner"></div>
              </div>
            ) : products.length > 0 ? (
              <div className="table-responsive">
                <table className="products-table">
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Categoría</th>
                      <th>Precio</th>
                      <th>Marca</th>
                      <th>SEO</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(product => (
                      <tr key={product.id}>
                        <td>
                          <img
                            src={product.image ? `http://localhost:5000${product.image}` : 'https://via.placeholder.com/60'}
                            alt={product.name}
                            className="table-image"
                          />
                        </td>
                        <td>{product.name}</td>
                        <td>
                          <div className="category-cell">
                            <span className="category-badge">{product.category}</span>
                            <small>{product.subcategory}</small>
                          </div>
                        </td>
                        <td className="price-cell">${product.price.toLocaleString()}</td>
                        <td>{product.brand || '-'}</td>
                        <td className="seo-cell">
                          {product.metaTitle && product.metaDescription ? '✓ Optimizado' : '⚠️ Incompleto'}
                        </td>
                        <td>
                          <div className="table-actions">
                            <button
                              className="btn-edit"
                              onClick={() => handleEdit(product)}
                            >
                              Editar
                            </button>
                            <button
                              className="btn-delete"
                              onClick={() => handleDelete(product.id)}
                            >
                              Eliminar
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="no-products">No hay productos. Agrega tu primer producto.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
