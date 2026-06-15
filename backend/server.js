const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Crear carpeta de uploads si no existe
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Configuración de multer para subir imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Solo se permiten imágenes'));
    }
  }
});

// Base de datos simulada en memoria (en producción usar MongoDB, PostgreSQL, etc.)
let products = [
  {
    id: '1',
    name: 'Cafetera Profesional',
    description: 'Cafetera de alta calidad para preparar el mejor café en casa. Sistema de espresso profesional con vaporizador integrado. Ideal para los amantes del café que buscan la experiencia de barista en su hogar.',
    price: 299.99,
    category: 'Pequeños Electrodomésticos',
    subcategory: 'Cafeteras',
    brand: 'CoffeeMaster',
    model: 'CM-2000',
    image: '/uploads/camaking.png',
    metaTitle: 'Cafetera Profesional CoffeeMaster CM-2000 - TODOHOGAR',
    metaDescription: 'Cafetera profesional con sistema de espresso y vaporizador. Prepara café de calidad barista en casa. Marca CoffeeMaster modelo CM-2000.',
    metaKeywords: 'cafetera, espresso, café, cafetera profesional, CoffeeMaster, pequeños electrodomésticos, TODOHOGAR',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Cocina Eléctrica Espiral',
    description: 'Cocina eléctrica portátil con resistencia espiral de alta eficiencia. Perfecta para cocinar en espacios reducidos o como complemento en tu cocina. Control de temperatura ajustable y fácil de limpiar.',
    price: 45.99,
    category: 'Cocción',
    subcategory: 'Cocinas',
    brand: 'HeatMaster',
    model: 'ESP-100',
    image: '/uploads/espiral1.png',
    metaTitle: 'Cocina Eléctrica Portátil Espiral - TODOHOGAR',
    metaDescription: 'Cocina eléctrica portátil con resistencia espiral. Ideal para espacios reducidos. Control de temperatura ajustable y eficiente.',
    metaKeywords: 'cocina eléctrica, hornilla eléctrica, cocina portátil, espiral, HeatMaster, TODOHOGAR',
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Altavoz Bluetooth Premium',
    description: 'Altavoz inalámbrico con tecnología Bluetooth 5.0. Sonido de alta fidelidad con graves profundos. Batería de larga duración hasta 12 horas. Resistente al agua IPX7. Perfecto para tu hogar o para llevar a cualquier lugar.',
    price: 89.99,
    category: 'Pequeños Electrodomésticos',
    subcategory: 'Otros',
    brand: 'SoundWave',
    model: 'SP-12',
    image: '/uploads/Speaker12.png',
    metaTitle: 'Altavoz Bluetooth Premium SoundWave SP-12 - TODOHOGAR',
    metaDescription: 'Altavoz Bluetooth 5.0 con sonido de alta fidelidad. Batería 12h, resistente al agua IPX7. Ideal para hogar y exteriores.',
    metaKeywords: 'altavoz, bluetooth, speaker, parlante, SoundWave, audio, música, TODOHOGAR',
    createdAt: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Sandwichera y Tostadora 6 en 1',
    description: 'Sandwichera multifuncional con placas intercambiables. Prepara sándwiches, arepas, waffles y más. Placas antiadherentes de fácil limpieza. Control de temperatura y luz indicadora. Compacta y fácil de almacenar.',
    price: 54.99,
    category: 'Pequeños Electrodomésticos',
    subcategory: 'Tostadoras',
    brand: 'QuickMeal',
    model: 'TA-6',
    image: '/uploads/tostyarepa6.png',
    metaTitle: 'Sandwichera Multifuncional 6 en 1 QuickMeal - TODOHOGAR',
    metaDescription: 'Sandwichera con placas intercambiables. Prepara sándwiches, arepas, waffles. Antiadherente y fácil de limpiar. Modelo TA-6.',
    metaKeywords: 'sandwichera, tostadora, arepera, waffles, QuickMeal, cocina, TODOHOGAR',
    createdAt: new Date().toISOString()
  },
  {
    id: '5',
    name: 'Smart TV LED 32 Pulgadas',
    description: 'Televisor LED de 32 pulgadas con resolución HD. Smart TV con acceso a plataformas de streaming. WiFi integrado, múltiples puertos HDMI y USB. Diseño elegante y moderno. Perfecto para cualquier habitación de tu hogar.',
    price: 249.99,
    category: 'Pequeños Electrodomésticos',
    subcategory: 'Otros',
    brand: 'VisionTech',
    model: 'LED-32',
    image: '/uploads/tvled32.png',
    metaTitle: 'Smart TV LED 32" VisionTech HD - TODOHOGAR',
    metaDescription: 'Smart TV LED 32 pulgadas HD con WiFi. Acceso a plataformas streaming. Múltiples puertos HDMI/USB. Diseño moderno y elegante.',
    metaKeywords: 'smart tv, televisor, LED, 32 pulgadas, VisionTech, streaming, TODOHOGAR',
    createdAt: new Date().toISOString()
  }
];
let categories = [
  { id: 1, name: 'Refrigeración', subcategories: ['Neveras', 'Congeladores', 'Vinotecas'] },
  { id: 2, name: 'Cocción', subcategories: ['Cocinas', 'Hornos', 'Microondas', 'Placas de inducción y vitrocerámicas'] },
  { id: 3, name: 'Lavado y Secado', subcategories: ['Lavadoras', 'Secadoras', 'Lavasecadoras'] },
  { id: 4, name: 'Lavavajillas', subcategories: ['Lavavajillas domésticos', 'Lavavajillas compactos'] },
  { id: 5, name: 'Pequeños Electrodomésticos', subcategories: ['Cafeteras', 'Licuadoras', 'Batidoras', 'Tostadoras', 'Freidoras de aire', 'Hervidores'] },
  { id: 6, name: 'Climatización', subcategories: ['Aires acondicionados', 'Ventiladores', 'Calefactores', 'Deshumidificadores'] },
  { id: 7, name: 'Cuidado Personal', subcategories: ['Secadores de cabello', 'Planchas para el cabello', 'Afeitadoras', 'Cortadoras de cabello'] },
  { id: 8, name: 'Limpieza del Hogar', subcategories: ['Aspiradoras', 'Robots aspiradores', 'Limpiadores a vapor'] },
  { id: 9, name: 'Tratamiento de Agua', subcategories: ['Dispensadores de agua', 'Purificadores', 'Filtros'] },
  { id: 10, name: 'Electrodomésticos Empotrables', subcategories: ['Hornos empotrables', 'Campanas extractoras', 'Lavavajillas integrables'] },
  { id: 11, name: 'Accesorios y Repuestos', subcategories: ['Filtros', 'Bolsas para aspiradoras', 'Repuestos y accesorios'] },
  { id: 12, name: 'Muebles', subcategories: ['Camas', 'Sofás', 'Mesas', 'Sillas', 'Armarios', 'Estanterías'] }
];

// Rutas de categorías
app.get('/api/categories', (req, res) => {
  res.json(categories);
});

// Rutas de productos
app.get('/api/products', (req, res) => {
  const { category, subcategory, search } = req.query;
  let filtered = [...products];
  
  if (category) {
    filtered = filtered.filter(p => p.category === category);
  }
  
  if (subcategory) {
    filtered = filtered.filter(p => p.subcategory === subcategory);
  }
  
  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(searchLower) ||
      p.description.toLowerCase().includes(searchLower)
    );
  }
  
  res.json(filtered);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  res.json(product);
});

app.post('/api/products', upload.single('image'), (req, res) => {
  try {
    const { name, description, price, category, subcategory, brand, model, metaTitle, metaDescription, metaKeywords } = req.body;
    
    if (!name || !description || !price || !category || !subcategory) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }
    
    const newProduct = {
      id: uuidv4(),
      name,
      description,
      price: parseFloat(price),
      category,
      subcategory,
      brand: brand || '',
      model: model || '',
      image: req.file ? `/uploads/${req.file.filename}` : null,
      metaTitle: metaTitle || name,
      metaDescription: metaDescription || description.substring(0, 160),
      metaKeywords: metaKeywords || `${name}, ${category}, ${subcategory}, TODOHOGAR`,
      createdAt: new Date().toISOString()
    };
    
    products.push(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/products/:id', upload.single('image'), (req, res) => {
  try {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    
    const { name, description, price, category, subcategory, brand, model, metaTitle, metaDescription, metaKeywords } = req.body;
    
    const updatedProduct = {
      ...products[index],
      name: name || products[index].name,
      description: description || products[index].description,
      price: price ? parseFloat(price) : products[index].price,
      category: category || products[index].category,
      subcategory: subcategory || products[index].subcategory,
      brand: brand !== undefined ? brand : products[index].brand,
      model: model !== undefined ? model : products[index].model,
      image: req.file ? `/uploads/${req.file.filename}` : products[index].image,
      metaTitle: metaTitle || products[index].metaTitle,
      metaDescription: metaDescription || products[index].metaDescription,
      metaKeywords: metaKeywords || products[index].metaKeywords,
      updatedAt: new Date().toISOString()
    };
    
    products[index] = updatedProduct;
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  
  // Eliminar imagen del servidor
  const product = products[index];
  if (product.image) {
    const imagePath = path.join(__dirname, product.image);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
  }
  
  products.splice(index, 1);
  res.json({ message: 'Producto eliminado' });
});

// Ruta para estadísticas del admin
app.get('/api/stats', (req, res) => {
  const stats = {
    totalProducts: products.length,
    categoriesCount: categories.length,
    latestProducts: products.slice(-5).reverse()
  };
  res.json(stats);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
