<template>
  <v-app-bar color="white" flat height="90" class="px-8">
    <!-- LOGO -->
    <RouterLink to="/" class="d-flex align-center ml-4">
      <img src="../../assets/images/logo.jpg" alt="IMAX Logo" style="height: 80px" />
    </RouterLink>

    <!-- MENÚ CENTRADO -->
    <div class="flex-grow-1 d-flex justify-center">
      <!-- Bucle principal para iterar sobre los elementos del menú (Primer Nivel) -->
      <template v-for="item in mainMenu" :key="item.label">
        <div class="text-center">
          <!-- Botón de navegación del primer nivel. Si no tiene submenú, navega directamente a la ruta. Usamos variant="text" para un diseño limpio y moderno. -->
          <v-btn :to="item.to" variant="text" color="primary" class="mx-1 font-weight-medium">
            {{ item.label }}

            <!-- Muestra una pequeña flecha hacia abajo únicamente si el elemento tiene un submenú -->
            <v-icon v-if="item.submenu" end size="x-small">mdi-chevron-down</v-icon>

            <!-- Desplegable del menú (Segundo Nivel). Se activa al pasar el ratón (open-on-hover) si hay submenú disponible -->
            <v-menu v-if="item.submenu" activator="parent" open-on-hover :open-delay="50" :close-delay="100">
              <v-list class="py-1" elevation="3">
                <!-- Iteramos sobre el array de submenús del elemento actual -->
                <v-list-item v-for="subItem in item.submenu" :key="subItem.label" :to="subItem.to" link>
                  <v-list-item-title>{{ subItem.label }}</v-list-item-title>

                  <!-- Si el subelemento tiene a su vez un submenú, mostramos una flecha hacia la derecha -->
                  <template v-slot:append v-if="subItem.submenu">
                    <v-icon icon="mdi-chevron-right" size="x-small" class="ms-2"></v-icon>
                  </template>

                  <!-- Desplegable del submenú (Tercer Nivel). Se posiciona a la derecha (location="end") y se activa al pasar el ratón -->
                  <v-menu v-if="subItem.submenu" activator="parent" open-on-hover submenu location="end"
                    :open-delay="50" :close-delay="100">
                    <v-list class="py-1" elevation="3">
                      <!-- Iteramos sobre el tercer nivel de submenús -->
                      <v-list-item v-for="subSubItem in subItem.submenu" :key="subSubItem.label" :to="subSubItem.to"
                        link>
                        <v-list-item-title>{{ subSubItem.label }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-btn>
        </div>
      </template>

    </div>

    <!-- BUSCADOR A LA DERECHA -->
    <v-text-field v-model="search" placeholder="Buscar..." variant="outlined" density="compact" hide-details
      class="ml-8" style="max-width: 220px">
      <template #append-inner>
        <v-icon>mdi-magnify</v-icon>
      </template>
    </v-text-field>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const search = ref('')

interface MenuItem {
  label: string
  to: string
  submenu?: MenuItem[]
}

const mainMenu: MenuItem[] = [
  {
    label: 'Inicio',
    to: '/'
  },
  {
    label: 'Servicios',
    to: '/servicios',
    submenu: [
      {
        label: 'Servicio 1',
        to: '/servicios/servicio1',
      },
      {
        label: 'Servicio 2',
        to: '/servicios/servicio2'
      },
      {
        label: 'Servicio 3',
        to: '/servicios/servicio3'
      },
    ]
  },
  {
    label: 'Productos',
    to: '/productos',
    submenu: [
      {
        label: 'Brother',
        to: '/productos/brother',
        submenu: [
          {
            label: 'Impresoras',
            to: '/productos/brother/impresoras',
          },
          {
            label: 'Consumibles',
            to: '/productos/brother/consumibles'
          },
        ]
      },
      {
        label: 'Hp',
        to: '/productos/hp',
        submenu: [
          {
            label: 'Impresoras',
            to: '/productos/hp/impresoras',
          },
          {
            label: 'Consumibles',
            to: '/productos/hp/consumibles'
          },
        ]
      },
      {
        label: 'Producto 3',
        to: '/productos/producto3',
        submenu: [
          {
            label: 'Producto 3.1',
            to: '/productos/producto3.1',
          },
          {
            label: 'Producto 3.2',
            to: '/productos/producto3.2'
          },
          {
            label: 'Producto 3.3',
            to: '/productos/producto3.3'
          },
          {
            label: 'Producto 3.4',
            to: '/productos/producto3.4'
          },
        ]
      },
    ]
  },
  {
    label: 'Condiciones de Venta',
    to: '/condiciones-ventas'
  },
  {
    label: 'Contacto',
    to: '/contacto'
  }
]

// const dropdownMenu = [
//   { label: 'Blog', to: '/blog' },
//   { label: 'Contacto', to: '/contacto' },
// ]

// const subDropdown = [
//   { label: 'Guías técnicas', to: '/guias' },
//   { label: 'Documentación', to: '/docs' },
// ]

// const dropdownBrother = [
//   { label: 'Impresoras', to: '/productos/portatiles' },
//   { label: 'Consumibles', to: '/productos/ordenadores' },

// ]

// const dropdownHp = [
//   { label: 'Ordenadores', to: '/productos/portatiles' },
//   { label: 'Portátiles', to: '/productos/ordenadores' },

// ]
</script>
