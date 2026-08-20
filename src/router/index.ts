/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import BrotherConsumiblesPage from '@/pages/BrotherConsumiblesPage.vue'
import BrotherImpresorasPage from '@/pages/BrotherImpresorasPage.vue'
import CondicionesVentasPage from '@/pages/CondicionesVentasPage.vue'
import Index from '@/pages/index.vue'
import MaintenancePage from '@/pages/MaintenancePage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

// --- CONFIGURACIÓN DE MANTENIMIENTO ---
// Cambia este valor a true para poner TODO el sitio web en mantenimiento.
export const EN_MANTENIMIENTO_GLOBAL = false

// false = La ruta está activa y accesible.
export const RUTAS_MANTENIMIENTO: Record<string, boolean> = {
  '/': false, // Inicio
  '/cliente': false, // Hágase Cliente
  '/condiciones-ventas': false, // Condiciones de Venta
  '/contacto': false, // Contacto
  '/productos': false, // Productos (Activo)
  '/productos/brother': false,
  '/productos/brother/consumibles': false,
  '/productos/brother/impresoras': false,
  '/productos/hp': false,
  '/productos/hp/consumibles': false,
  '/productos/hp/impresoras': false,
  '/productos/accesorios': false,
  '/productos/accesorios/perifericos': false,
  '/productos/accesorios/almacenamiento': false,
  '/productos/accesorios/redes': false,
  '/servicios': false, // Servicios (Activo)
  '/servicios/servicio1': false,
  '/servicios/servicio2': false,
  '/servicios/servicio3': false,
  '/servicios/servicio3.1': false,
  '/servicios/servicio4': false,
  '/servicios/servicio5': false,
  '/servicios/servicio6': false,
  '/servicios/microsoft-copilot': false,
  '/servicios/seguridad-microsoft-365': false,
  '/servicios/microsoft-fabric': false,
  '/blog': false, // Blog (Activo)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // --- RUTAS DE PÁGINAS EXISTENTES ---
    {
      path: '/',
      name: 'Inicio',
      component: Index,
    },
    {
      path: '/condiciones-ventas',
      name: 'CondicionesVentas',
      component: CondicionesVentasPage,
    },
    {
      path: '/cliente',
      name: 'HagaseCliente',
      component: () => import('@/pages/ClientePage.vue'),
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: () => import('@/pages/ContactoPage.vue'),
    },
    {
      path: '/servicios',
      name: 'Servicios',
      component: () => import('@/pages/ServiciosPage.vue'),
    },
    {
      path: '/servicios/servicio1',
      name: 'Servicio1',
      component: () => import('@/pages/ServiciosDetallePage.vue'),
    },
    {
      path: '/servicios/servicio2',
      name: 'Servicio2',
      component: () => import('@/pages/ServiciosDetallePage.vue'),
    },
    {
      path: '/servicios/servicio3',
      name: 'Servicio3',
      component: () => import('@/pages/OrdenadoresPage.vue'),
    },
    {
      path: '/servicios/servicio3.1',
      name: 'Servicio3_1',
      component: () => import('@/pages/OrdenadoresPage.vue'),
    },
    {
      path: '/servicios/servicio4',
      name: 'Servicio4',
      component: () => import('@/pages/OrdenadoresPage.vue'),
    },
    {
      path: '/servicios/servicio5',
      name: 'Servicio5',
      component: () => import('@/pages/OrdenadoresPage.vue'),
    },
    {
      path: '/servicios/servicio6',
      name: 'Servicio6',
      component: () => import('@/pages/ServiciosDetallePage.vue'),
    },
    {
      path: '/servicios/microsoft-copilot',
      name: 'MicrosoftCopilot',
      component: () => import('@/pages/MicrosoftCopilotPage.vue'),
    },
    {
      path: '/servicios/seguridad-microsoft-365',
      name: 'MicrosoftSecurity',
      component: () => import('@/pages/MicrosoftSecurityPage.vue'),
    },
    {
      path: '/servicios/microsoft-fabric',
      name: 'MicrosoftFabric',
      component: () => import('@/pages/MicrosoftFabricPage.vue'),
    },
    {
      path: '/productos',
      name: 'Productos',
      component: () => import('@/pages/ProductosPage.vue'),
    },
    {
      path: '/productos/brother',
      name: 'ProductosBrother',
      component: () => import('@/pages/ProductosPage.vue'),
    },
    {
      path: '/productos/brother/consumibles',
      name: 'BrotherConsumibles',
      component: BrotherConsumiblesPage,
    },
    {
      path: '/productos/brother/impresoras',
      name: 'BrotherImpresoras',
      component: BrotherImpresorasPage,
    },
    {
      path: '/productos/hp',
      name: 'ProductoHp',
      component: () => import('@/pages/ProductosPage.vue'),
    },
    {
      path: '/productos/hp/impresoras',
      name: 'HpImpresoras',
      component: () => import('@/pages/HpImpresorasPage.vue'),
    },
    {
      path: '/productos/hp/consumibles',
      name: 'HpConsumibles',
      component: () => import('@/pages/HpConsumiblesPage.vue'),
    },
    {
      path: '/productos/accesorios',
      name: 'Accesorios',
      component: () => import('@/pages/AccessoriesPage.vue'),
    },
    {
      path: '/productos/accesorios/perifericos',
      name: 'AccesoriosPerifericos',
      component: () => import('@/pages/AccessoriesPage.vue'),
    },
    {
      path: '/productos/accesorios/almacenamiento',
      name: 'AccesoriosAlmacenamiento',
      component: () => import('@/pages/AccessoriesPage.vue'),
    },
    {
      path: '/productos/accesorios/redes',
      name: 'AccesoriosRedes',
      component: () => import('@/pages/AccessoriesPage.vue'),
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('@/pages/BlogPage.vue'),
    },

    // --- RUTA DE MANTENIMIENTO ---
    {
      path: '/mantenimiento',
      name: 'Mantenimiento',
      component: MaintenancePage,
    },

    // --- RUTA 404 (NOT FOUND) ---
    // Captura cualquier ruta que no coincida con las anteriores.
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundPage,
    },
  ],
})

// --- GUARDIA DE NAVEGACIÓN ---
// Intercepta las rutas para manejar el mantenimiento dinámico y las páginas 404
router.beforeEach((to, from, next) => {
  // Comprobamos si la ruta de destino existe entre las registradas
  // Si coincide con NotFound, significa que el enlace no existe en nuestra app.
  if (to.name === 'NotFound') {
    return next()
  }

  // Si la ruta sí existe, comprobamos si está en mantenimiento (global o específica)
  const estaEnMantenimiento = EN_MANTENIMIENTO_GLOBAL || RUTAS_MANTENIMIENTO[to.path] === true

  if (estaEnMantenimiento && to.path !== '/mantenimiento') {
    // Redirigimos a la pantalla de mantenimiento
    return next({ name: 'Mantenimiento' })
  }

  // Si no está en mantenimiento y la ruta existe, permitimos el acceso normal
  next()
})

export default router
