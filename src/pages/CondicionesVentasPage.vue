<template>
  <div class="bg-background min-vh-100 pb-16">
    <!-- Hero Header -->
    <div class="legal-hero py-16 text-center text-white mb-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <span class="text-subtitle-2 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-3 animate-fade-in">
              Información Legal
            </span>

            <h1 class="text-h3 text-md-h2 font-weight-black mb-4 title-glow animate-slide-up">
              Condiciones de Venta y Uso
            </h1>

            <div class="divider mx-auto mb-6" />

            <p class="text-body-1 text-blue-lighten-4 leading-relaxed max-w-600 mx-auto animate-fade-in-delayed">
              Le rogamos que lea atentamente estas condiciones antes de utilizar esta página web o realizar un pedido.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Main Content Container -->
    <v-container>
      <v-row>
        <!-- Sidebar Navigation (Sticky on desktop) -->
        <v-col class="d-none d-md-block" cols="12" md="3">
          <aside class="sticky-sidebar">
            <v-card class="rounded-xl border elevation-0 pa-4 menu-card">
              <div class="text-subtitle-2 font-weight-black text-primary mb-4 px-2 uppercase-tracking">
                Índice de Contenidos
              </div>

              <v-list class="bg-transparent py-0" density="comfortable">
                <v-list-item
                  v-for="item in menuItems"
                  :id="'btn-nav-' + item.id"
                  :key="item.id"
                  :active="activeSection === item.id"
                  class="rounded-lg mb-1 nav-item"
                  color="primary"
                  :value="item.id"
                  @click="scrollTo(item.id)"
                >
                  <template #prepend>
                    <v-icon class="me-2" size="20">{{ item.icon }}</v-icon>
                  </template>

                  <v-list-item-title class="font-weight-medium text-body-2">
                    {{ item.title }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </aside>
        </v-col>
        <!-- Legal Content Sections -->
        <v-col cols="12" md="9">
          <CondicionesGenerales />
          <ProteccionDatos />
          <PoliticaDevoluciones />
          <LeyAplicable />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue'
  import CondicionesGenerales from '../components/condiciones-ventas/CondicionesGenerales.vue'
  import LeyAplicable from '../components/condiciones-ventas/LeyAplicable.vue'
  import PoliticaDevoluciones from '../components/condiciones-ventas/PoliticaDevoluciones.vue'
  import ProteccionDatos from '../components/condiciones-ventas/ProteccionDatos.vue'

  // Establecer título de la página
  onMounted(() => {
    document.title = 'Condiciones de Venta | Imax PC'
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  // Elementos del menú
  const menuItems = [
    { id: 'sec-generales', title: '1. Condiciones Generales', icon: 'mdi-file-document-outline' },
    { id: 'sec-datos', title: '2. Protección de Datos', icon: 'mdi-shield-lock-outline' },
    { id: 'sec-devoluciones', title: '3. Política de Devoluciones', icon: 'mdi-truck-delivery-outline' },
    { id: 'sec-ley', title: '4. Ley Aplicable y Jurisdicción', icon: 'mdi-scale-balance' },
  ]

  // Estado activo del scroll
  const activeSection = ref('sec-generales')

  // Desplazarse a una sección
  function scrollTo (id: string) {
    const element = document.querySelector(`#${id}`)
    if (element) {
      const offset = 140 // Ajuste para el menú superior
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      activeSection.value = id
    }
  }

  // Detectar sección activa al hacer scroll
  function handleScroll () {
    const scrollPosition = window.scrollY + 180 // Margen superior para activar antes de llegar al borde

    for (const item of menuItems) {
      const element = document.querySelector(`#${item.id}`)
      if (element) {
        const top = (element as HTMLElement).offsetTop
        const height = (element as HTMLElement).offsetHeight

        if (scrollPosition >= top && scrollPosition < top + height) {
          activeSection.value = item.id
          break
        }
      }
    }
  }
</script>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

/* Hero Section Styles */
.legal-hero {
  background: linear-gradient(135deg, #1A3A6E 0%, #1a1c2c 100%);
  position: relative;
  overflow: hidden;
  border-radius: 0 0 24px 24px;
}

.legal-hero::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(77, 183, 227, 0.15) 0%, transparent 60%);
  pointer-events: none;
}

.divider {
  width: 80px;
  height: 4px;
  background-color: #4DB7E3;
  border-radius: 2px;
}

.title-glow {
  text-shadow: 0 2px 10px rgba(77, 183, 227, 0.3);
}

/* Sidebar Sticky Styles */
.sticky-sidebar {
  position: sticky;
  top: 140px;
  /* Separación de la App Bar */
  z-index: 10;
}

.menu-card {
  border-color: #E3E6EB !important;
  background-color: #FFFFFF;
}

.uppercase-tracking {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.75rem;
}

.nav-item {
  transition: all 0.2s ease;
}

.nav-item:hover {
  background-color: rgba(77, 183, 227, 0.08);
}

.nav-item.v-list-item--active {
  background-color: rgba(26, 58, 110, 0.08) !important;
  border-left: 4px solid #1A3A6E;
  border-radius: 0 8px 8px 0 !important;
}

/* Legal Cards Styles */
.legal-card {
  border-color: #E3E6EB !important;
  background-color: #FFFFFF;
  box-shadow: 0 4px 12px rgba(26, 58, 110, 0.03) !important;
}

.sub-card {
  background-color: #FAFCFF;
  border-color: #E3E6EB !important;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card-hover-border {
  border-color: #4DB7E3 !important;
  box-shadow: 0 6px 16px rgba(26, 58, 110, 0.05) !important;
}

.border-avatar {
  border: 1px solid rgba(26, 58, 110, 0.15);
}

.border-avatar-sec {
  border: 1px solid rgba(77, 183, 227, 0.15);
}

.bg-primary-lighten-5 {
  background-color: rgba(26, 58, 110, 0.06) !important;
}

.bg-secondary-lighten-5 {
  background-color: rgba(77, 183, 227, 0.08) !important;
}

/* Timeline custom adjustments */
.timeline-custom :deep(.v-timeline-item__body) {
  padding-block: 8px;
}

.scroll-margin {
  scroll-margin-top: 140px;
  /* Para que al hacer click no quede tapado por la navbar */
}

/* Common Text Layout */
.leading-relaxed {
  line-height: 1.7;
}

.max-w-600 {
  max-width: 600px;
}

.tracking-widest {
  letter-spacing: 0.15em !important;
}

/* Animations for Hero Section */
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in-delayed {
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.3s forwards;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
