# 🚀 Instrucciones para Ejecutar TODOHOGAR

## Pasos Rápidos para Iniciar

### 1. Instalar Todas las Dependencias

Abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
npm run install-all
```

Esto instalará todas las dependencias del proyecto raíz, backend y frontend.

### 2. Iniciar la Aplicación

**Opción Recomendada - Ejecutar todo junto:**

```powershell
npm run dev
```

Esto iniciará automáticamente:
- Backend en: http://localhost:5000
- Frontend en: http://localhost:3000

**Opción Alternativa - Ejecutar por separado:**

Terminal 1 (Backend):
```powershell
npm run server
```

Terminal 2 (Frontend):
```powershell
npm run client
```

### 3. Acceder a la Aplicación

- **Página Principal:** http://localhost:3000
- **Catálogo:** http://localhost:3000/productos
- **Admin:** http://localhost:3000/admin
- **Nosotros:** http://localhost:3000/nosotros
- **Contacto:** http://localhost:3000/contacto
- **Ubicación:** http://localhost:3000/ubicacion

## 📦 Productos de Ejemplo

El proyecto viene con 5 productos de ejemplo ya cargados:

1. **Cafetera Profesional** - Pequeños Electrodomésticos / Cafeteras
2. **Cocina Eléctrica Espiral** - Cocción / Cocinas
3. **Altavoz Bluetooth Premium** - Audio / Speakers
4. **Sandwichera 6 en 1** - Pequeños Electrodomésticos / Tostadoras
5. **Smart TV LED 32"** - Electrónica / Televisores

## 🎨 Panel de Administración

Accede a: http://localhost:3000/admin

Desde aquí puedes:
- ✅ Ver todos los productos
- ✅ Agregar nuevos productos
- ✅ Editar productos existentes
- ✅ Eliminar productos
- ✅ Subir imágenes
- ✅ Configurar SEO (meta título, descripción, keywords)

## 🛠️ Comandos Útiles

```powershell
# Instalar dependencias
npm run install-all

# Ejecutar todo (recomendado)
npm run dev

# Solo backend
npm run server

# Solo frontend
npm run client

# Construir para producción
cd frontend
npm run build
```

## 📱 Diseño Responsive

La aplicación está optimizada para:
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1920px)
- ✅ Tablet (768px - 1024px)
- ✅ Móvil (320px - 768px)

## 🔍 Características SEO

Cada producto incluye:
- Meta títulos optimizados
- Meta descripciones
- Keywords relevantes
- URLs amigables
- React Helmet para SEO dinámico

## 📂 Estructura de Archivos

```
TODOHOGAR/
├── backend/           # API REST con Express
│   ├── server.js     # Servidor principal
│   └── uploads/      # Imágenes de productos
├── frontend/          # Aplicación React
│   ├── src/
│   │   ├── components/  # Componentes reutilizables
│   │   └── pages/       # Páginas de la app
│   └── public/
│       └── logo.png     # Logo de TODOHOGAR
└── productos/         # Imágenes originales
```

## ⚠️ Notas Importantes

1. **Puerto ocupado:** Si el puerto 3000 o 5000 está ocupado, cierra otras aplicaciones o cambia el puerto en los archivos de configuración.

2. **Imágenes:** Las imágenes se guardan en `backend/uploads/` y se sirven desde el servidor backend.

3. **Base de datos:** Actualmente usa almacenamiento en memoria. Los datos se pierden al reiniciar el servidor. Para producción, conecta a MongoDB o PostgreSQL.

4. **CORS:** El backend permite peticiones desde localhost:3000. Actualiza esto en producción.

## 🚀 Despliegue en Netlify

Para desplegar en Netlify:

1. Conecta tu repositorio Git a Netlify
2. Netlify detectará automáticamente `netlify.toml`
3. El frontend se desplegará automáticamente

Para el backend, necesitarás:
- Heroku, Railway, Render o similar
- Actualizar la URL del API en el frontend

## 💡 Próximos Pasos Sugeridos

- [ ] Agregar más productos desde el admin
- [ ] Conectar a base de datos real
- [ ] Implementar autenticación para admin
- [ ] Configurar Google Maps en Ubicación
- [ ] Agregar Google Analytics
- [ ] Personalizar información de contacto

## 🆘 Solución de Problemas

**Error: "Cannot find module"**
```powershell
npm run install-all
```

**Error: "Port already in use"**
- Cierra otras aplicaciones que usen el puerto
- O cambia el puerto en los archivos de configuración

**Las imágenes no se ven**
- Verifica que el backend esté corriendo
- Revisa la carpeta `backend/uploads/`

## 📞 Contacto

Para más información: info@todohogar.com

---

¡Listo para empezar! 🎉
