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

export interface BlogPost {
  id: string
  title: string
  summary: string
  content: string
  category: string
  date: string
  readTime: string
  author: string
  icon: string
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

    // Slides for HP Impresoras
    hpPrintersSlides: [
      {
        category: 'Tecnología HP',
        title: 'Impresoras Láser HP LaserJet Pro',
        text: 'Lidera la productividad en tu oficina con impresión ultra rápida, seguridad multicapa integrada y la máxima calidad de la marca líder en impresión.',
        image: imgPrinters,
        actionText: 'Solicitar Oferta',
        to: '/contacto',
      },
      {
        category: 'Pymes y Autónomos',
        title: 'Sistemas de Impresión HP OfficeJet Pro',
        text: 'Ahorra costes y gestiona tus flujos de trabajo de forma eficiente con los sistemas multifunción de tinta profesionales HP.',
        image: imgPrinters,
        actionText: 'Ver Productos',
        to: '/productos/hp/impresoras',
      },
    ] as Slide[],

    // Slides for HP Consumibles
    hpConsumiblesSlides: [
      {
        category: 'Rendimiento HP',
        title: 'Cartuchos y Tóners Originales HP',
        text: 'Protege tu impresora y asegura impresiones siempre nítidas de calidad profesional. Evita fallos y costes ocultos utilizando tinta y tóner original HP.',
        image: imgConsumables,
        actionText: 'Comprobar Compatibilidad',
        to: '/contacto',
      },
      {
        category: 'Ahorro Máximo',
        title: 'Packs Ahorro HP e Impresión Eficiente',
        text: 'Consigue el menor coste por página con nuestros consumibles originales HP de alta capacidad XL diseñados para oficinas de alta demanda.',
        image: imgConsumables,
        actionText: 'Ver Catálogo',
        to: '/productos/hp/consumibles',
      },
    ] as Slide[],

    // Products catalog for HP Impresoras
    hpPrinters: [
      {
        id: 'hp-1',
        name: 'HP LaserJet Pro M404dn',
        description: 'Impresora láser monocromo rápida y fiable, equipada con seguridad líder en la industria y conectividad de red.',
        price: 249.99,
        originalPrice: 289.99,
        imageIcon: 'mdi-printer',
        category: 'Láser Monocromo',
        inStock: true,
        rating: 4.6,
        specs: ['Velocidad: 38 ppm', 'Conectividad: Ethernet / USB', 'Impresión Dúplex', 'Bandeja: 250 + 100 hojas'],
      },
      {
        id: 'hp-2',
        name: 'HP LaserJet Pro MFP M428fdw',
        description: 'Impresora multifunción láser monocromo 4 en 1 para oficinas con escaneado a doble cara y gran velocidad.',
        price: 389.99,
        originalPrice: 429.99,
        imageIcon: 'mdi-printer-3d',
        category: 'Multifunción Monocromo',
        inStock: true,
        rating: 4.8,
        specs: ['Velocidad: 38 ppm', 'Escaneo Dúplex de una pasada', 'WiFi Dual Band & Ethernet', 'ADF: 50 hojas'],
      },
      {
        id: 'hp-3',
        name: 'HP Color LaserJet Pro M255dw',
        description: 'Impresora láser color compacta y eficiente con impresión a doble cara e integración móvil excepcional.',
        price: 329.99,
        originalPrice: 359.99,
        imageIcon: 'mdi-printer',
        category: 'Láser Color',
        inStock: true,
        rating: 4.5,
        specs: ['Velocidad: 21 ppm color/mono', 'WiFi Direct / Smart App', 'Impresión Dúplex', 'Pantalla Táctil Color'],
      },
      {
        id: 'hp-4',
        name: 'HP Color LaserJet Pro MFP M479fdw',
        description: 'Multifunción láser color profesional 4 en 1 con flujos de trabajo personalizables y pantalla táctil intuitiva.',
        price: 549.99,
        originalPrice: 599.99,
        imageIcon: 'mdi-printer-3d',
        category: 'Multifunción Color',
        inStock: true,
        rating: 4.7,
        specs: ['Velocidad: 27 ppm color/mono', 'Pantalla táctil: 10.9 cm', 'Escaneo Dúplex a doble cara', 'Seguridad HP Wolf Pro'],
      },
    ] as Product[],

    // Products catalog for HP Consumibles
    hpConsumibles: [
      {
        id: 'hc-1',
        name: 'Tóner HP 59A Negro (CF259A)',
        description: 'Cartucho de tóner original HP de capacidad estándar con tecnología JetIntelligence.',
        price: 98.99,
        originalPrice: 109.99,
        imageIcon: 'mdi-database',
        category: 'Tóner Monocromo',
        inStock: true,
        rating: 4.7,
        specs: ['Rendimiento: 3.000 pág.', 'Color: Negro', 'Original HP JetIntelligence', 'Compatibilidad: LaserJet Pro M404, M428'],
      },
      {
        id: 'hc-2',
        name: 'Tóner HP 59X Negro XL (CF259X)',
        description: 'Cartucho de tóner original HP de alta capacidad para ahorrar hasta un 25% por página.',
        price: 189.99,
        originalPrice: 209.99,
        imageIcon: 'mdi-database-plus',
        category: 'Tóner Monocromo XL',
        inStock: true,
        rating: 4.9,
        specs: ['Rendimiento: 10.000 pág.', 'Color: Negro', 'Original HP JetIntelligence', 'Compatibilidad: LaserJet Pro M404, M428'],
      },
      {
        id: 'hc-3',
        name: 'Pack Ahorro HP 953XL de 4 Colores',
        description: 'Pack completo de cartuchos de tinta original HP 953XL (Negro, Cian, Magenta, Amarillo).',
        price: 154.99,
        originalPrice: 174.99,
        imageIcon: 'mdi-palette',
        category: 'Packs de Tinta',
        inStock: true,
        rating: 4.8,
        specs: ['Negro: 2.000 pág.', 'Colores: 1.600 pág. c/u', 'Pack de Ahorro Original', 'Compatibilidad: OfficeJet Pro 8710, 8720, 7740'],
      },
      {
        id: 'hc-4',
        name: 'Tóner HP 207A Cian (W2211A)',
        description: 'Tóner color original HP cian de capacidad estándar. Resultados consistentes.',
        price: 68.99,
        originalPrice: 75.99,
        imageIcon: 'mdi-database',
        category: 'Tóner Color',
        inStock: false,
        rating: 4.6,
        specs: ['Rendimiento: 1.250 pág.', 'Color: Cian', 'Original HP', 'Compatibilidad: Color LaserJet M255, MFP M282, M283'],
      },
    ] as Product[],

    // Accessories & Networking catalog
    accessories: [
      {
        id: 'ac-1',
        name: 'Logitech MX Keys S',
        description: 'Teclado inalámbrico retroiluminado de alta gama diseñado para productividad avanzada y programadores.',
        price: 119.99,
        originalPrice: 129.99,
        imageIcon: 'mdi-keyboard',
        category: 'Periféricos',
        inStock: true,
        rating: 4.9,
        specs: ['Conectividad: Bluetooth / Logi Bolt', 'Teclas esféricas cóncavas', 'Batería: hasta 5 meses', 'Retroiluminación inteligente'],
      },
      {
        id: 'ac-2',
        name: 'Logitech MX Master 3S',
        description: 'Ratón inalámbrico ergonómico con sensor de 8000 DPI y desplazamiento electromagnético MagSpeed.',
        price: 109.99,
        originalPrice: 119.99,
        imageIcon: 'mdi-mouse',
        category: 'Periféricos',
        inStock: true,
        rating: 4.8,
        specs: ['Sensor óptico: 8.000 DPI', 'Desplazamiento MagSpeed ultra rápido', 'Forma ergonómica para mano derecha', 'Multidispositivo (Easy-Switch)'],
      },
      {
        id: 'ac-3',
        name: 'Samsung 990 PRO 2TB NVMe M.2',
        description: 'Disco duro SSD interno de máxima velocidad PCIe Gen 4.0 x4 para ampliaciones exigentes de PC y PS5.',
        price: 179.99,
        originalPrice: 199.99,
        imageIcon: 'mdi-harddisk',
        category: 'Almacenamiento',
        inStock: true,
        rating: 4.9,
        specs: ['Lectura secuencial: 7.450 MB/s', 'Escritura secuencial: 6.900 MB/s', 'Interfaz: PCIe Gen 4.0 x4', 'Factor de forma: M.2 2280'],
      },
      {
        id: 'ac-4',
        name: 'SanDisk Extreme 1TB SSD Portátil',
        description: 'Disco de almacenamiento externo SSD rugerizado, resistente al agua y polvo (IP55). Ideal para copias de seguridad.',
        price: 99.99,
        originalPrice: 119.99,
        imageIcon: 'mdi-folder-zip',
        category: 'Almacenamiento',
        inStock: true,
        rating: 4.7,
        specs: ['Lectura: 1.050 MB/s', 'Protección IP55 contra agua/polvo', 'Resistente a caídas de 2m', 'Conexión: USB-C 3.2 Gen 2'],
      },
      {
        id: 'ac-5',
        name: 'ASUS RT-AX58U WiFi 6',
        description: 'Router inalámbrico de doble banda con tecnología WiFi 6, seguridad AiProtection Pro y soporte ASUS AiMesh.',
        price: 89.99,
        originalPrice: 109.99,
        imageIcon: 'mdi-router-wireless',
        category: 'Conectividad y Redes',
        inStock: true,
        rating: 4.6,
        specs: ['Estándar WiFi 6 (802.11ax)', 'Velocidad: hasta 3.000 Mbps', 'Seguridad: WPA3 y AiProtection Pro', 'Compatible con AiMesh'],
      },
      {
        id: 'ac-6',
        name: 'TP-Link TL-SG108 Switch Gigabit',
        description: 'Switch de sobremesa metálico de 8 puertos RJ45 a Gigabit 10/100/1000 Mbps de bajo consumo.',
        price: 24.99,
        originalPrice: 29.99,
        imageIcon: 'mdi-server-network',
        category: 'Conectividad y Redes',
        inStock: true,
        rating: 4.8,
        specs: ['8 puertos RJ45 10/100/1000 Mbps', 'Carcasa de metal resistente', 'Soporta QoS (802.1p/DSCP)', 'Plug and Play sin configuración'],
      },
    ] as Product[],

    // Blog Articles
    blogPosts: [
      {
        id: 'post-1',
        title: '5 Consejos para optimizar la velocidad y el rendimiento de tu PC',
        summary: 'Descubre cómo recuperar la velocidad de tu ordenador sin necesidad de comprar uno nuevo. Desde ampliaciones de hardware hasta limpieza de archivos temporales.',
        content: '¿Tu ordenador va lento al arrancar o se queda congelado con tareas sencillas? En el taller de Imax PC vemos esto a diario. Afortunadamente, antes de desechar tu equipo, hay varias formas eficaces de recuperar su rendimiento. Primero, te recomendamos realizar el cambio de un disco duro mecánico tradicional (HDD) por una unidad de estado sólido (SSD); este simple cambio multiplica la velocidad del sistema por 10. Segundo, amplía la memoria RAM a un mínimo de 16 GB para poder manejar la multitarea con fluidez. Tercero, mantén limpia la ventilación interior para evitar el sobrecalentamiento y la ralentización del procesador. Cuarto, revisa los programas que se inician automáticamente al encender el sistema. Y finalmente, realiza limpiezas periódicas de virus y malware que puedan consumir recursos silenciosamente.',
        category: 'Hardware y Taller',
        date: '15 Ago 2026',
        readTime: '4 min de lectura',
        author: 'Soporte Técnico Imax PC',
        icon: 'mdi-rocket-launch',
      },
      {
        id: 'post-2',
        title: 'Ciberseguridad para PYMES: ¿Está tu negocio protegido ante ransomware?',
        summary: 'El 70% de los ciberataques van dirigidos a pequeñas y medianas empresas. Aprende las mejores prácticas para asegurar tus sistemas de trabajo.',
        content: 'La seguridad informática ya no es exclusiva de las grandes corporaciones. En la actualidad, las PYMES son el principal objetivo de los ciberdelincuentes debido a que suelen tener sistemas menos protegidos. El ransomware es la mayor amenaza actual: bloquea todos tus archivos comerciales y exige un rescate económico. Para blindar tu negocio, debes implementar una estrategia básica pero robusta. En primer lugar, activa la autenticación multifactor (MFA) en todas las cuentas corporativas como Microsoft 365. En segundo lugar, mantén copias de seguridad diarias, cifradas y aisladas de la red local. En tercer lugar, educa a tus empleados para evitar el phishing en el correo electrónico. Por último, mantén el sistema operativo y el antivirus corporativo actualizados en su última versión.',
        category: 'Ciberseguridad',
        date: '02 Ago 2026',
        readTime: '6 min de lectura',
        author: 'Departamento de Redes y Seguridad',
        icon: 'mdi-shield-lock',
      },
      {
        id: 'post-3',
        title: 'Ahorro en costes de impresión: ¿Tóner original o genérico?',
        summary: 'Analizamos las diferencias de rendimiento, costes a largo plazo y la garantía del fabricante para ayudarte a tomar la mejor decisión de impresión.',
        content: 'Es una pregunta recurrente entre nuestros clientes: ¿vale la pena pagar más por un tóner original Brother o HP, o es preferible comprar un compatible más barato? A primera vista, los cartuchos genéricos parecen muy atractivos por su bajo precio, pero a menudo esconden costes ocultos. Las estadísticas demuestran que hasta un 30% de los cartuchos compatibles presentan fallos como manchas, fugas de polvo de tóner o durabilidad muy inferior a la prometida. Lo que es peor: las fugas de tóner pueden dañar permanentemente el tambor o el rodillo fusor de la impresora, anulando la garantía oficial del fabricante. Los consumibles originales Brother y HP están formulados específicamente para trabajar en armonía con tu máquina, garantizando impresiones nítidas desde la primera a la última página, un rendimiento constante y una vida útil prolongada del equipo.',
        category: 'Impresión y Consumibles',
        date: '24 Jul 2026',
        readTime: '5 min de lectura',
        author: 'Consultoría de Sistemas de Impresión',
        icon: 'mdi-printer-eye',
      },
      {
        id: 'post-4',
        title: 'Microsoft 365 Copilot: Cómo la IA está cambiando la forma de trabajar',
        summary: 'Te contamos cómo integrar asistentes virtuales de Inteligencia Artificial directamente en Word, Excel y Outlook para potenciar el rendimiento diario.',
        content: 'La inteligencia artificial ha dejado de ser una promesa de futuro para convertirse en una realidad cotidiana en el entorno de oficina. Microsoft 365 Copilot integra modelos de lenguaje avanzados directamente en las aplicaciones que ya usas a diario. Imagina poder redactar un informe en Word a partir de unas simples notas, resumir un hilo de 50 correos electrónicos en Outlook en un solo párrafo de conclusiones, o crear una presentación completa en PowerPoint mediante comandos de lenguaje natural. Esto permite liberar a tus empleados de las tareas mecánicas y repetitivas, permitiéndoles centrarse en tareas creativas y de análisis estratégico. En Imax PC te ayudamos a preparar tu infraestructura de datos, asegurar la confidencialidad de la información interna y desplegar de forma segura las licencias de Copilot en tu organización.',
        category: 'Inteligencia Artificial',
        date: '10 Jul 2026',
        readTime: '7 min de lectura',
        author: 'Consultor de Soluciones Cloud',
        icon: 'mdi-brain',
      },
    ] as BlogPost[],
  }),
})
