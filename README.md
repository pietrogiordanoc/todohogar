# TODOHOGAR - Catálogo de Productos

Aplicación web para mostrar un catálogo de electrodomésticos y muebles para el hogar. Incluye un frontend público para visitantes y un panel de administración para gestionar productos.

## 🚀 Características

- ✅ Catálogo de productos con categorías y subcategorías
- ✅ Panel de administración para agregar/editar/eliminar productos
- ✅ Optimización SEO para cada producto
- ✅ Diseño responsive (móvil y desktop)
- ✅ Páginas estáticas: Nosotros, Contacto, Ubicación
- ✅ Búsqueda y filtrado de productos
- ✅ Imágenes de productos
- ✅ Sin registro de usuarios (solo exposición)

## 📦 Tecnologías

**Frontend:**
- React 18
- React Router DOM
- React Helmet Async (SEO)
- Axios
- CSS3 moderno

**Backend:**
- Node.js
- Express
- Multer (subida de imágenes)
- CORS

## 🛠️ Instalación

### 1. Instalar todas las dependencias

Desde la raíz del proyecto:

```bash
npm run install-all
```

Esto instalará las dependencias del proyecto raíz, backend y frontend.

### 2. Ejecutar en desarrollo

**Opción A: Ejecutar todo junto**
```bash
npm run dev
```

**Opción B: Ejecutar por separado**

Terminal 1 - Backend:
```bash
npm run server
```

Terminal 2 - Frontend:
```bash
npm run client
```

El backend se ejecutará en `http://localhost:5000`
El frontend se ejecutará en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
TODOHOGAR/
├── backend/
│   ├── server.js          # Servidor Express
│   ├── uploads/           # Imágenes de productos
│   └── package.json
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── logo.png       # Logo de TODOHOGAR
│   ├── src/
│   │   ├── components/    # Componentes reutilizables
│   │   ├── pages/         # Páginas de la aplicación
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── images/                # Assets originales
│   └── logo.png
├── README.md
└── package.json

```

## 🎨 Categorías de Productos

1. **Refrigeración** - Neveras, Congeladores, Vinotecas
2. **Cocción** - Cocinas, Hornos, Microondas, Placas
3. **Lavado y Secado** - Lavadoras, Secadoras, Lavasecadoras
4. **Lavavajillas** - Domésticos, Compactos
5. **Pequeños Electrodomésticos** - Cafeteras, Licuadoras, etc.
6. **Climatización** - Aires acondicionados, Ventiladores, etc.
7. **Cuidado Personal** - Secadores, Planchas, Afeitadoras
8. **Limpieza del Hogar** - Aspiradoras, Robots, Limpiadores
9. **Tratamiento de Agua** - Dispensadores, Purificadores
10. **Electrodomésticos Empotrables**
11. **Accesorios y Repuestos**
12. **Muebles** - Camas, Sofás, Mesas, Sillas, Armarios

## 📝 Panel de Administración

Accede al panel en: `http://localhost:3000/admin`

Desde aquí puedes:
- ✅ Agregar nuevos productos
- ✅ Editar productos existentes
- ✅ Eliminar productos
- ✅ Subir imágenes
- ✅ Configurar datos SEO (meta título, descripción, keywords)

### Datos SEO Importantes

Para cada producto puedes configurar:
- **Meta Título**: Título optimizado para Google (60 caracteres)
- **Meta Descripción**: Descripción para resultados de búsqueda (160 caracteres)
- **Keywords**: Palabras clave separadas por comas

## 🚀 Despliegue en Netlify

### Frontend

1. Construir el frontend:
```bash
cd frontend
npm run build
```

2. En Netlify, configurar:
   - **Build command**: `cd frontend && npm install && npm run build`
   - **Publish directory**: `frontend/build`
   - **Redirects**: Ya configurado en `frontend/public/_redirects`

### Backend

Para el backend, necesitarás desplegarlo por separado en:
- Heroku
- Railway
- Render
- DigitalOcean
- AWS

Luego actualiza la URL del API en el frontend (variable de entorno o configuración).

## 🔧 Configuración

### Variables de entorno (Backend)

Crea un archivo `.env` en la carpeta `backend/`:

```env
PORT=5000
```

### Actualizar URL del API (Frontend)

En producción, actualiza las URLs del API en los archivos de las páginas y componentes, o mejor aún, crea una variable de entorno:

```env
REACT_APP_API_URL=https://tu-backend.com
```

## 📱 Páginas Disponibles

- `/` - Página de inicio
- `/productos` - Catálogo completo
- `/productos/:id` - Detalle de producto
- `/nosotros` - Quiénes somos
- `/contacto` - Formulario de contacto
- `/ubicacion` - Ubicación y mapa
- `/admin` - Panel de administración

## 🎯 Próximos Pasos

- [ ] Conectar a una base de datos real (MongoDB, PostgreSQL)
- [ ] Agregar autenticación para el admin
- [ ] Implementar sistema de búsqueda avanzada
- [ ] Agregar paginación a los productos
- [ ] Configurar Google Maps en la página de ubicación
- [ ] Integrar Google Analytics
- [ ] Agregar sitemap.xml y robots.txt
- [ ] Configurar dominio personalizado

## 📄 Licencia

Proyecto privado - TODOHOGAR © 2026

## 👨‍💻 Soporte

Para más información o soporte, contacta a: info@todohogar.com
