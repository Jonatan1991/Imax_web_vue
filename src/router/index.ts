/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index.vue'
import CondicionesVentasPage from '@/pages/CondicionesVentasPage.vue'
import MaintenancePage from '@/pages/MaintenancePage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

// --- CONFIGURACIÓN DE MANTENIMIENTO ---
// Cambia este valor a true para poner TODO el sitio web en mantenimiento.
export const EN_MANTENIMIENTO_GLOBAL = false;

// Configuración de mantenimiento individual por ruta existente.
// true  = Activa la pantalla de mantenimiento para esta ruta.
// false = La ruta está activa y accesible.
export const RUTAS_MANTENIMIENTO: Record<string, boolean> = {
  '/': false,                         // Inicio
  '/condiciones-ventas': false,       // Condiciones de Venta
  '/contacto': true,                 // Contacto (En construcción)
  '/servicios': true,                 // Servicios (En construcción)
  '/servicios/servicio1': true,
  '/servicios/servicio2': true,
  '/servicios/servicio3': true,
  '/productos': true,                 // Productos (En construcción)
  '/productos/producto1': true,
  '/productos/producto1.1': true,
  '/productos/producto1.2': true,
  '/productos/producto2': true,
  '/productos/producto2.1': true,
  '/productos/producto2.2': true,
  '/productos/producto3': true,
  '/productos/producto3.1': true,
  '/productos/producto3.2': true,
  '/productos/producto3.3': true,
  '/productos/producto3.4': true,
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
    // Las rutas de abajo están registradas pero apuntan temporalmente a Index o MaintenancePage
    // mientras se crean sus componentes finales, lo que previene errores de compilación.
    {
      path: '/contacto',
      name: 'Contacto',
      component: MaintenancePage,
    },
    {
      path: '/servicios',
      name: 'Servicios',
      component: MaintenancePage,
    },
    {
      path: '/servicios/servicio1',
      name: 'Servicio1',
      component: MaintenancePage,
    },
    {
      path: '/servicios/servicio2',
      name: 'Servicio2',
      component: MaintenancePage,
    },
    {
      path: '/servicios/servicio3',
      name: 'Servicio3',
      component: MaintenancePage,
    },
    {
      path: '/productos',
      name: 'Productos',
      component: MaintenancePage,
    },
    {
      path: '/productos/producto1',
      name: 'Producto1',
      component: MaintenancePage,
    },
    {
      path: '/productos/producto1.1',
      name: 'Producto1_1',
      component: MaintenancePage,
    },
    {
      path: '/productos/producto1.2',
      name: 'Producto1_2',
      component: MaintenancePage,
    },
    {
      path: '/productos/producto2',
      name: 'Producto2',
      component: MaintenancePage,
    },
    {
      path: '/productos/producto2.1',
      name: 'Producto2_1',
      component: MaintenancePage,
    },
    {
      path: '/productos/producto2.2',
      name: 'Producto2_2',
      component: MaintenancePage,
    },
    {
      path: '/productos/producto3',
      name: 'Producto3',
      component: MaintenancePage,
    },
    {
      path: '/productos/producto3.1',
      name: 'Producto3_1',
      component: MaintenancePage,
    },
    {
      path: '/productos/producto3.2',
      name: 'Producto3_2',
      component: MaintenancePage,
    },
    {
      path: '/productos/producto3.3',
      name: 'Producto3_3',
      component: MaintenancePage,
    },
    {
      path: '/productos/producto3.4',
      name: 'Producto3_4',
      component: MaintenancePage,
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
    return next();
  }

  // Si la ruta sí existe, comprobamos si está en mantenimiento (global o específica)
  const estaEnMantenimiento = EN_MANTENIMIENTO_GLOBAL || RUTAS_MANTENIMIENTO[to.path] === true;

  if (estaEnMantenimiento && to.path !== '/mantenimiento') {
    // Redirigimos a la pantalla de mantenimiento
    return next({ name: 'Mantenimiento' });
  }

  // Si no está en mantenimiento y la ruta existe, permitimos el acceso normal
  next();
})

export default router
