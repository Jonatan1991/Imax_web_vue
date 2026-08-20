<template>
  <div class="ordenadores-page bg-background min-vh-100 pb-16">
    <!-- HERO SECTION -->
    <header class="hero-section text-white d-flex align-center position-relative overflow-hidden">
      <div class="gradient-overlay" />
      <v-container class="position-relative z-index-2 py-16 text-center">
        <span class="text-subtitle-1 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-3">
          TALLER INFORMÁTICO Y VENTA
        </span>
        <h1 class="text-h2 font-weight-black mb-4 text-gradient leading-tight">
          Especialistas en Ordenadores
        </h1>
        <p class="text-h6 text-grey-lighten-2 mb-8 leading-relaxed font-weight-regular max-w-750 mx-auto">
          Desde ordenadores a medida de alta gama hasta reparaciones express en taller y planes de renovación para dar una segunda vida a tus equipos viejos.
        </p>
      </v-container>
    </header>

    <!-- TABBED NAVIGATION -->
    <v-container class="mt-8">
      <v-tabs v-model="activeTab" bg-color="transparent" color="secondary" align-tabs="center" grow class="border-bottom mb-8">
        <v-tab value="medida" class="font-weight-bold text-body-1">
          <v-icon start>mdi-desktop-classic</v-icon>
          Ordenadores a Medida
        </v-tab>
        <v-tab value="reparacion" class="font-weight-bold text-body-1">
          <v-icon start>mdi-wrench</v-icon>
          Reparación de Ordenadores
        </v-tab>
        <v-tab value="renovacion" class="font-weight-bold text-body-1">
          <v-icon start>mdi-rocket-launch</v-icon>
          Renovación y Ampliaciones
        </v-tab>
      </v-tabs>

      <!-- WINDOWS FOR EACH TAB -->
      <v-window v-model="activeTab">
        <!-- 1. ORDENADORES A MEDIDA -->
        <v-window-item value="medida">
          <div class="text-center mb-12">
            <h2 class="text-h3 font-weight-black text-primary mb-3">Diseño y Montaje de Equipos Especializados</h2>
            <p class="text-body-1 text-grey-darken-2 max-w-700 mx-auto">
              Configuramos y ensamblamos ordenadores a medida utilizando los mejores componentes del mercado. Testeo intensivo de 24h para garantizar estabilidad absoluta.
            </p>
          </div>

          <v-row>
            <v-col cols="12" md="4" class="d-flex" v-for="pc in customPcs" :key="pc.title">
              <v-card class="pc-card w-100 rounded-xl border elevation-1 d-flex flex-column justify-space-between">
                <div>
                  <div class="pc-card-header pa-6 text-white text-center position-relative" :style="{ background: pc.bg }">
                    <v-icon size="48" class="mb-2">mdi-desktop-tower</v-icon>
                    <h3 class="text-h5 font-weight-black">{{ pc.title }}</h3>
                    <span class="text-subtitle-2 opacity-80">{{ pc.sub }}</span>
                  </div>
                  <div class="pa-6">
                    <p class="text-body-2 text-grey-darken-2 mb-6 leading-relaxed">{{ pc.description }}</p>
                    
                    <h4 class="text-caption text-uppercase font-weight-bold text-grey-darken-1 mb-3">Configuración Recomendada</h4>
                    <v-divider class="mb-3" />
                    
                    <div class="spec-item mb-2 d-flex align-center gap-2" v-for="spec in pc.specs" :key="spec">
                      <v-icon color="secondary" size="18">mdi-chevron-right</v-icon>
                      <span class="text-body-2 text-primary font-weight-medium">{{ spec }}</span>
                    </div>
                  </div>
                </div>
                <div class="pa-6 pt-0">
                  <v-btn color="secondary" block class="text-white font-weight-bold rounded-lg" to="/contacto">
                    Solicitar Presupuesto
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-window-item>

        <!-- 2. REPARACIÓN DE ORDENADORES -->
        <v-window-item value="reparacion">
          <div class="text-center mb-12">
            <h2 class="text-h3 font-weight-black text-primary mb-3">Servicio de Reparación Express en Taller</h2>
            <p class="text-body-1 text-grey-darken-2 max-w-700 mx-auto">
              Diagnosticamos y reparamos ordenadores de sobremesa y portátiles de cualquier marca. Presupuesto sin compromiso. Asistencia en taller o a domicilio.
            </p>
          </div>

          <v-row>
            <v-col cols="12" md="6" class="d-flex" v-for="rep in repairs" :key="rep.problem">
              <v-card class="repair-card w-100 pa-6 rounded-xl border elevation-1 d-flex gap-4 align-start">
                <div class="icon-avatar pa-3 rounded-lg" :style="{ backgroundColor: rep.color + '15' }">
                  <v-icon :color="rep.color" size="32">{{ rep.icon }}</v-icon>
                </div>
                <div class="flex-grow-1">
                  <h3 class="text-h6 font-weight-bold text-primary mb-2">{{ rep.problem }}</h3>
                  <p class="text-body-2 text-grey-darken-2 mb-4 leading-relaxed">{{ rep.solution }}</p>
                  <div class="d-flex justify-space-between align-center">
                    <span class="text-caption font-weight-bold text-uppercase text-grey-darken-1">Estimación:</span>
                    <span class="text-subtitle-1 font-weight-black text-secondary">{{ rep.price }}</span>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <v-card class="mt-12 pa-8 bg-blue-lighten-5 rounded-xl border-0 text-center max-w-700 mx-auto">
            <v-icon color="primary" class="mb-3" size="48">mdi-alert-circle-outline</v-icon>
            <h3 class="text-h5 font-weight-black text-primary mb-2">¿Tu ordenador no enciende o tiene un fallo grave?</h3>
            <p class="text-body-1 text-grey-darken-3 mb-6">
              Tráelo directamente a nuestro taller en la <strong>Calle de Ardemans, 35, Madrid</strong> (Barrio de Salamanca). Realizamos un diagnóstico inicial rápido y te damos presupuesto ajustado sin compromiso alguno.
            </p>
            <div class="d-flex justify-center gap-4 flex-wrap">
              <v-btn color="primary" class="font-weight-bold px-6" size="large" to="/contacto">Contactar con Taller</v-btn>
              <v-btn variant="outlined" color="primary" class="font-weight-bold px-6" size="large" href="tel:+34915555555">Llamar 91 555 55 55</v-btn>
            </div>
          </v-card>
        </v-window-item>

        <!-- 3. RENOVACIÓN Y AMPLIACIONES -->
        <v-window-item value="renovacion">
          <div class="text-center mb-12">
            <h2 class="text-h3 font-weight-black text-primary mb-3">Plan Renove: Dale una Nueva Vida a tu PC</h2>
            <p class="text-body-1 text-grey-darken-2 max-w-700 mx-auto">
              No compres un ordenador nuevo si puedes renovar el actual. Al cambiar el disco duro a SSD y ampliar la RAM, tu equipo irá hasta 10 veces más rápido por una fracción del coste de un ordenador nuevo.
            </p>
          </div>

          <v-row class="justify-center">
            <v-col cols="12" md="4" class="d-flex" v-for="pack in renewalPacks" :key="pack.name">
              <v-card class="pack-card w-100 pa-6 rounded-xl border elevation-2 d-flex flex-column justify-space-between text-center relative">
                <div v-if="pack.popular" class="popular-badge text-white font-weight-black text-caption py-1 px-3 bg-secondary rounded-pill">
                  EL MÁS RECOMENDADO
                </div>
                <div>
                  <v-icon color="secondary" size="40" class="mb-4">{{ pack.icon }}</v-icon>
                  <h3 class="text-h5 font-weight-black text-primary mb-2">{{ pack.name }}</h3>
                  <p class="text-body-2 text-grey-darken-2 mb-6 leading-relaxed">{{ pack.description }}</p>
                  
                  <v-divider class="mb-4" />
                  
                  <div class="pack-feature text-caption text-grey-darken-3 mb-2 font-weight-medium" v-for="feat in pack.features" :key="feat">
                    <v-icon color="secondary" size="14" class="me-1">mdi-check</v-icon> {{ feat }}
                  </div>
                </div>
                
                <div class="mt-6">
                  <div class="text-h4 font-weight-black text-primary mb-4">{{ pack.price }}</div>
                  <v-btn color="primary" block class="font-weight-bold rounded-lg" to="/contacto">
                    Solicitar Ampliación
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const activeTab = ref('medida')

  // List of Custom PC tiers
  const customPcs = [
    {
      title: 'Oficina y Hogar',
      sub: 'Rendimiento fluido diario',
      bg: 'linear-gradient(135deg, #4DB7E3 0%, #1A3A6E 100%)',
      description: 'Ideal para tareas de navegación, ofimática avanzada, estudios y consumo de contenidos multimedia. Equipos silenciosos, compactos y de bajo consumo.',
      specs: [
        'Procesador: Intel Core i5 / AMD Ryzen 5',
        'Memoria RAM: 16 GB DDR4',
        'Almacenamiento: 512 GB SSD NVMe M.2',
        'Gráficos: Integrados Intel / AMD Radeon',
        'Chasis silencioso y fuente eficiente certificada'
      ]
    },
    {
      title: 'Gaming & Streaming',
      sub: 'Potencia gráfica sin límites',
      bg: 'linear-gradient(135deg, #9C27B0 0%, #1A3A6E 100%)',
      description: 'Diseñados para jugar a los últimos títulos en resoluciones altas con tasas de refresco elevadas. Refrigeración optimizada e iluminación RGB personalizable.',
      specs: [
        'Procesador: Intel Core i7 / AMD Ryzen 7',
        'Memoria RAM: 32 GB DDR5 Dual Channel',
        'Almacenamiento: 1 TB SSD NVMe PCIe 4.0',
        'Gráfica: NVIDIA RTX 4060 Ti / RTX 4070',
        'Caja cristal templado y refrigeración líquida'
      ]
    },
    {
      title: 'Workstation Profesional',
      sub: 'Para render, edición y Big Data',
      bg: 'linear-gradient(135deg, #FF9800 0%, #1A3A6E 100%)',
      description: 'Equipos de cálculo bruto optimizados para edición de vídeo 4K/8K, renderizado 3D, arquitectura (CAD) e Inteligencia Artificial local.',
      specs: [
        'Procesador: Intel i9 / AMD Ryzen 9 / Threadripper',
        'Memoria RAM: 64 GB / 128 GB DDR5 ECC',
        'Almacenamiento: 2 TB SSD Gen4 + HDD 4TB',
        'Gráfica: NVIDIA RTX 4080 / RTX 4090 / RTX Ada',
        'Fuente 1000W Platino y caja aislada acústicamente'
      ]
    }
  ]

  // Typical PC repairs in shop
  const repairs = [
    {
      problem: 'El ordenador no enciende o se apaga solo',
      solution: 'Revisión y sustitución de fuentes de alimentación defectuosas, reparación de placas base o cambio de pasta térmica por sobrecalentamiento.',
      icon: 'mdi-power-plug-off',
      color: 'red',
      price: 'Desde 45€ + Componentes'
    },
    {
      problem: 'Infección por Virus, Troyanos o Malware',
      solution: 'Desinfección completa del sistema sin perder tus archivos personales, instalación de antivirus corporativo y optimización de seguridad.',
      icon: 'mdi-virus-outline',
      color: 'amber-darken-3',
      price: 'Desde 50€ (Precio Cerrado)'
    },
    {
      problem: 'Pantalla rota o fallos en portátiles',
      solution: 'Sustitución de paneles LED/LCD agrietados, reemplazo de teclados, conectores de carga sueltos y sustitución de baterías degradadas.',
      icon: 'mdi-laptop',
      color: 'primary',
      price: 'Bajo presupuesto (Diagnóstico gratis)'
    },
    {
      problem: 'Fallo de disco duro y pérdida de datos',
      solution: 'Instalación de sistema operativo de cero y recuperación de datos de discos dañados utilizando herramientas profesionales de taller.',
      icon: 'mdi-harddisk-plus',
      color: 'green-darken-2',
      price: 'Desde 60€ (Consúltanos)'
    }
  ]

  // Renewal/upgrade packages
  const renewalPacks = [
    {
      name: 'Pack Super Velocidad',
      icon: 'mdi-flash',
      description: 'Cambiamos tu disco duro lento tradicional por un SSD ultrarrápido y clonamos todos tus datos y programas actuales para que no pierdas nada.',
      features: [
        'Sustitución física de disco',
        'SSD de 500GB NVMe o SATA incluido',
        'Clonación exacta de tus programas',
        'Limpieza física interna básica'
      ],
      price: '89€',
      popular: false
    },
    {
      name: 'Pack Renovación Total',
      icon: 'mdi-rocket',
      description: 'El pack más completo para que tu ordenador viejo vaya más rápido que el primer día. Ideal para portátiles y ordenadores de más de 4 años.',
      features: [
        'SSD de 1TB de alta velocidad incluido',
        'Ampliación a 16 GB de RAM incluida',
        'Limpieza interna y cambio de pasta térmica',
        'Optimización y desinfección de sistema'
      ],
      price: '149€',
      popular: true
    },
    {
      name: 'Pack Multitarea',
      icon: 'mdi-memory',
      description: 'Si tu equipo se ralentiza cuando abres varias pestañas en el navegador o usas varios programas en paralelo, necesitas duplicar tu memoria RAM.',
      features: [
        'Análisis de compatibilidad de placa',
        'Instalación de módulo RAM adicional',
        'Ampliación a 8GB o 16GB de RAM',
        'Pruebas de estabilidad de memoria'
      ],
      price: '65€',
      popular: false
    }
  ]

  const updateTabFromQuery = () => {
    const tabQuery = route.query.tab
    if (tabQuery === 'custom' || tabQuery === 'medida') {
      activeTab.value = 'medida'
    } else if (tabQuery === 'repair' || tabQuery === 'reparacion') {
      activeTab.value = 'reparacion'
    } else if (tabQuery === 'upgrade' || tabQuery === 'renovacion') {
      activeTab.value = 'renovacion'
    } else {
      // Map based on matching specific paths (servicio3.1, servicio4, servicio5)
      const path = route.path
      if (path.endsWith('servicio3.1')) {
        activeTab.value = 'medida'
      } else if (path.endsWith('servicio4')) {
        activeTab.value = 'reparacion'
      } else if (path.endsWith('servicio5')) {
        activeTab.value = 'renovacion'
      }
    }
  }

  onMounted(() => {
    document.title = 'Ordenadores y Soporte Hardware | Imax PC'
    updateTabFromQuery()
  })

  // Watch for route query changes (if user clicks on different submenu items pointing to same page)
  watch(() => route.query, () => {
    updateTabFromQuery()
  })

  watch(() => route.path, () => {
    updateTabFromQuery()
  })
</script>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #1a3a6e 0%, #11223f 100%);
  padding: 100px 0 80px;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top right, rgba(77, 183, 227, 0.15) 0%, transparent 60%);
  pointer-events: none;
}

.text-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #a5c7f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tracking-widest {
  letter-spacing: 0.2em !important;
}

.gap-2 {
  gap: 8px;
}

.gap-4 {
  gap: 16px;
}

.border-bottom {
  border-bottom: 2px solid #E3E6EB;
}

.pc-card {
  border-color: #E3E6EB !important;
  background-color: #FFFFFF;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s;
  overflow: hidden;
}

.pc-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(26, 58, 110, 0.08) !important;
}

.repair-card {
  border-color: #E3E6EB !important;
  background-color: #FFFFFF;
  transition: transform 0.3s ease, border-color 0.3s;
}

.repair-card:hover {
  transform: translateY(-4px);
  border-color: #4DB7E3 !important;
  box-shadow: 0 6px 12px rgba(26, 58, 110, 0.04) !important;
}

.icon-avatar {
  display: flex;
  align-center: center;
  justify-content: center;
}

.pack-card {
  border-color: #E3E6EB !important;
  background-color: #FFFFFF;
  position: relative;
  transition: all 0.3s;
}

.pack-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(26, 58, 110, 0.1) !important;
  border-color: #4DB7E3 !important;
}

.popular-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  box-shadow: 0 4px 8px rgba(77, 183, 227, 0.3);
}

.max-w-700 {
  max-width: 700px;
}
</style>
