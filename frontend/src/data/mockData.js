// Datos de ejemplo para cuando el backend no está disponible
export const mockProducts = [
  {
    id: 1,
    name: 'Cafetera Profesional',
    description: 'Cafetera de alta calidad con sistema de espresso profesional',
    price: 299900,
    category: 'Pequeños Electrodomésticos',
    subcategory: 'Cafeteras',
    brand: 'CoffeeMaster',
    model: 'CM-2024',
    image: '/productos/camaking.png',
    metaTitle: 'Cafetera Profesional CoffeeMaster CM-2024',
    metaDescription: 'Cafetera profesional con sistema espresso',
    metaKeywords: 'cafetera, espresso, café, profesional'
  },
  {
    id: 2,
    name: 'Cocina Eléctrica Espiral',
    description: 'Cocina eléctrica de dos hornillas con resistencia espiral de alta durabilidad',
    price: 189900,
    category: 'Cocción',
    subcategory: 'Cocinas',
    brand: 'HomeCook',
    model: 'HC-ESP-2',
    image: '/productos/espiral1.png',
    metaTitle: 'Cocina Eléctrica Espiral HomeCook',
    metaDescription: 'Cocina eléctrica de dos hornillas resistente',
    metaKeywords: 'cocina, eléctrica, hornillas, espiral'
  },
  {
    id: 3,
    name: 'Altavoz Bluetooth Premium',
    description: 'Altavoz portátil con sonido envolvente 360° y batería de larga duración',
    price: 249900,
    category: 'Audio',
    subcategory: 'Speakers',
    brand: 'SoundWave',
    model: 'SW-360',
    image: '/productos/Speaker12.png',
    metaTitle: 'Altavoz Bluetooth Premium SoundWave',
    metaDescription: 'Altavoz Bluetooth con sonido 360°',
    metaKeywords: 'altavoz, bluetooth, speaker, audio'
  },
  {
    id: 4,
    name: 'Sandwichera 6 en 1',
    description: 'Sandwichera multifuncional con placas intercambiables para waffles, arepas y más',
    price: 159900,
    category: 'Pequeños Electrodomésticos',
    subcategory: 'Tostadoras',
    brand: 'MultiGrill',
    model: 'MG-6IN1',
    image: '/productos/tostyarepa6.png',
    metaTitle: 'Sandwichera 6 en 1 MultiGrill',
    metaDescription: 'Sandwichera multifuncional con placas intercambiables',
    metaKeywords: 'sandwichera, waffles, arepas, tostadora'
  },
  {
    id: 5,
    name: 'Smart TV LED 32"',
    description: 'Televisor LED Smart TV con resolución HD y acceso a aplicaciones de streaming',
    price: 799900,
    category: 'Electrónica',
    subcategory: 'Televisores',
    brand: 'VisionTech',
    model: 'VT-32HD',
    image: '/productos/tvled32.png',
    metaTitle: 'Smart TV LED 32" VisionTech',
    metaDescription: 'Smart TV LED 32 pulgadas con apps de streaming',
    metaKeywords: 'smart tv, televisor, led, 32 pulgadas'
  }
];

export const mockCategories = [
  {
    id: 1,
    name: 'Pequeños Electrodomésticos',
    subcategories: ['Cafeteras', 'Tostadoras', 'Licuadoras', 'Batidoras']
  },
  {
    id: 2,
    name: 'Cocción',
    subcategories: ['Cocinas', 'Hornos', 'Microondas']
  },
  {
    id: 3,
    name: 'Audio',
    subcategories: ['Speakers', 'Auriculares', 'Equipos de Sonido']
  },
  {
    id: 4,
    name: 'Electrónica',
    subcategories: ['Televisores', 'Tablets', 'Accesorios']
  },
  {
    id: 5,
    name: 'Refrigeración',
    subcategories: ['Neveras', 'Congeladores', 'Minibares']
  }
];
