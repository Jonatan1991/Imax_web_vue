import { defineStore } from 'pinia'

import imgConsumables from '@/assets/images/brother_consumables.png'
import imgPrinters from '@/assets/images/brother_printers.png'
// Import static images for carousel
import imgExperiencia from '@/assets/images/carousel_experiencia_f7f9fc.png'
import imgGarantia from '@/assets/images/carousel_garantia_f7f9fc.png'
import imgServicio from '@/assets/images/carousel_servicio_f7f9fc.png'

export interface Slide {
  category: string
  title: string
  text: string
  image: string
  actionText: string
  to: string
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  imageIcon: string
  category: string
  inStock: boolean
  rating: number
  specs: string[]
}

export const useOffersStore = defineStore('offers', {
  state: () => ({
    // Slides for Homepage
    homeSlides: [
      {
        category: 'Experiencia',
        title: 'Años de confianza a tu servicio',
        text: 'Optimizamos los tiempos de respuesta y minimizamos los costes de reparación. Más de 200 particulares, autónomos y PYMES confían en nuestro soporte técnico especializado.',
        image: imgExperiencia,
        actionText: 'Ver Servicios',
        to: '/servicios',
      },
      {
        category: 'Servicio Personalizado',
        title: 'Tu propio técnico de confianza',
        text: 'Asignamos un técnico dedicado a tu cuenta para que conozca a fondo tu historial de equipos y necesidades diarias. Atención rápida, eficiente y sin explicaciones repetitivas.',
        image: imgServicio,
        actionText: 'Mantenimiento a Medida',
        to: '/servicios',
      },
      {
        category: 'Garantía',
        title: 'Tu tranquilidad es nuestra prioridad',
        text: 'Para tu total tranquilidad, todas nuestras reparaciones y mantenimientos están respaldados por nuestra garantía de satisfacción y calidad certificada.',
        image: imgGarantia,
        actionText: 'Contactar Ahora',
        to: '/contacto',
      },
    ] as Slide[],

    // Slides for Brother Impresoras
    brotherPrintersSlides: [
      {
        category: 'Oferta Exclusiva',
        title: 'Impresoras Láser Brother Profesionales',
        text: 'Lleva la productividad de tu oficina al siguiente nivel con impresión de alta velocidad, conectividad móvil avanzada y el coste por página más competitivo del mercado.',
        image: imgPrinters,
        actionText: 'Solicitar Información',
        to: '/contacto',
      },
      {
        category: 'Equipos Color',
        title: 'Multifuncionales LED a Color',
        text: 'Obtén colores profesionales de gran nitidez y calidad con nuestras ofertas en equipos multifunción LED. Ideal para documentos comerciales, folletos y presentaciones.',
        image: imgPrinters,
        actionText: 'Ver Catálogo',
        to: '/productos/brother/impresoras',
      },
    ] as Slide[],

    // Slides for Brother Consumibles
    brotherConsumiblesSlides: [
      {
        category: 'Ahorro Garantizado',
        title: 'Tóners y Tintas Originales Brother',
        text: 'Evita problemas en el fusor y cabezales utilizando consumibles 100% originales. Disfruta de una óptima definición de texto y la mayor durabilidad garantizada.',
        image: imgConsumables,
        actionText: 'Buscar Compatibilidad',
        to: '/contacto',
      },
      {
        category: 'Capacidad XL',
        title: 'Packs Ahorro de Alta Capacidad',
        text: 'Ahorra hasta un 30% en el coste de impresión por página comprando nuestros packs XL de cartuchos de tinta y tóners de alta capacidad.',
        image: imgConsumables,
        actionText: 'Ver Productos',
        to: '/productos/brother/consumibles',
      },
    ] as Slide[],

    // Products catalog for Brother Impresoras
    brotherPrinters: [
      {
        id: 'bp-1',
        name: 'Brother HL-L2400DWE',
        description: 'Impresora láser monocromo compacta y rápida con impresión automática a doble cara.',
        price: 129.99,
        originalPrice: 149.99,
        imageIcon: 'mdi-printer',
        category: 'Láser Monocromo',
        inStock: true,
        rating: 4.5,
        specs: ['Velocidad: 30 ppm', 'Conectividad: WiFi / USB', 'Impresión Dúplex', 'Bandeja: 250 hojas'],
      },
      {
        id: 'bp-2',
        name: 'Brother MFC-L2800DW',
        description: 'Impresora multifunción láser monocromo 4 en 1 (impresora, copiadora, escáner, fax).',
        price: 219.99,
        originalPrice: 249.99,
        imageIcon: 'mdi-printer-3d',
        category: 'Multifunción Monocromo',
        inStock: true,
        rating: 4.7,
        specs: ['Velocidad: 32 ppm', 'Alimentador ADF: 50 hojas', 'Red cableada y WiFi', 'Impresión Dúplex'],
      },
      {
        id: 'bp-3',
        name: 'Brother HL-L3220CW',
        description: 'Impresora LED color compacta con conectividad WiFi y gran calidad fotográfica de texto.',
        price: 249.99,
        originalPrice: 289.99,
        imageIcon: 'mdi-printer',
        category: 'LED Color',
        inStock: true,
        rating: 4.4,
        specs: ['Velocidad: 18 ppm color/mono', 'WiFi Direct y Mobile Link', 'Bandeja: 250 hojas', 'Muy silenciosa'],
      },
      {
        id: 'bp-4',
        name: 'Brother MFC-L3740CDW',
        description: 'Multifunción LED color 4 en 1 profesional de alta velocidad y pantalla táctil intuitiva.',
        price: 399.99,
        originalPrice: 449.99,
        imageIcon: 'mdi-printer-3d',
        category: 'Multifunción Color',
        inStock: true,
        rating: 4.8,
        specs: ['Velocidad: 26 ppm color/mono', 'Pantalla táctil: 9.3 cm', 'Conectividad NFC / WiFi', 'Dúplex total'],
      },
    ] as Product[],

    // Products catalog for Brother Consumibles
    brotherConsumibles: [
      {
        id: 'bc-1',
        name: 'Tóner Negro TN-2410',
        description: 'Cartucho de tóner original Brother de capacidad estándar. Definición limpia.',
        price: 52.99,
        originalPrice: 59.99,
        imageIcon: 'mdi-database',
        category: 'Tóner Monocromo',
        inStock: true,
        rating: 4.6,
        specs: ['Rendimiento: 1.200 pág.', 'Color: Negro', 'Original Brother', 'Compatibilidad: HL-L2310D, HL-L2350DW, MFC-L2710DW'],
      },
      {
        id: 'bc-2',
        name: 'Tóner Negro XL TN-2420',
        description: 'Cartucho de tóner original Brother de alta capacidad para oficinas de alto volumen.',
        price: 84.99,
        originalPrice: 95.99,
        imageIcon: 'mdi-database',
        category: 'Tóner Monocromo XL',
        inStock: true,
        rating: 4.9,
        specs: ['Rendimiento: 3.000 pág.', 'Color: Negro', 'Original Brother', 'Compatibilidad: HL-L2310D, HL-L2350DW, MFC-L2710DW'],
      },
      {
        id: 'bc-3',
        name: 'Pack Cartuchos Tinta LC-3219VAL',
        description: 'Pack de 4 cartuchos de tinta original Brother (Negro, Cian, Magenta, Amarillo).',
        price: 99.99,
        originalPrice: 115.99,
        imageIcon: 'mdi-palette',
        category: 'Packs de Tinta',
        inStock: true,
        rating: 4.8,
        specs: ['Negro: 3.000 pág.', 'Color: 1.500 pág. c/u', 'Pack Ahorro de 4 colores', 'Compatibilidad: MFC-J5330DW, MFC-J6530DW'],
      },
      {
        id: 'bc-4',
        name: 'Tóner Cian TN-247C XL',
        description: 'Tóner cian original Brother de capacidad expandida. Colores vibrantes.',
        price: 74.99,
        originalPrice: 82.99,
        imageIcon: 'mdi-database-plus',
        category: 'Tóner Color XL',
        inStock: false,
        rating: 4.5,
        specs: ['Rendimiento: 2.300 pág.', 'Color: Cian', 'Original Brother', 'Compatibilidad: HL-L3210CW, HL-L3270CDW, MFC-L3750CDW'],
      },
    ] as Product[],
  }),
})
