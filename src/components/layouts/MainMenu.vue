<template>
  <v-app-bar color="white" flat height="90" class="px-8">
    <!-- LOGO -->
    <RouterLink to="/" class="d-flex align-center ml-4">
      <img src="../../assets/images/logo.jpg" alt="IMAX Logo" style="height: 80px" />
    </RouterLink>

    <!-- MENÚ CENTRADO -->
    <div class="flex-grow-1 d-flex justify-center">
      <template v-for="item in mainMenu" :key="item.label">

        <div class="text-center">
          <v-btn color="primary">
            Open menu

            <v-menu activator="parent">
              <v-list>
                <v-list-item v-for="i in 5" :key="i" link>
                  <v-list-item-title>Item {{ i }}</v-list-item-title>
                  <template v-slot:append>
                    <v-icon icon="mdi-menu-right" size="x-small"></v-icon>
                  </template>

                  <v-menu :open-on-focus="false" activator="parent" open-on-hover submenu>
                    <v-list>
                      <v-list-item v-for="j in 5" :key="j" link>
                        <v-list-item-title>Item {{ i }} - {{ j }}</v-list-item-title>
                        <template v-slot:append>
                          <v-icon icon="mdi-menu-right" size="x-small"></v-icon>
                        </template>

                        <v-menu :open-on-focus="false" activator="parent" open-on-hover submenu>
                          <v-list>
                            <v-list-item v-for="k in 5" :key="k" link>
                              <v-list-item-title>Item {{ i }} - {{ j }} - {{ k }}</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
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

<script setup>
import { ref } from 'vue'

const search = ref('')

const mainMenu = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Productos', to: '/productos' },
  { label: 'Condiciones de Venta', to: '/condiciones-ventas' },
]

const dropdownMenu = [
  { label: 'Blog', to: '/blog' },
  { label: 'Contacto', to: '/contacto' },
]

const subDropdown = [
  { label: 'Guías técnicas', to: '/guias' },
  { label: 'Documentación', to: '/docs' },
]

const dropdownBrother = [
  { label: 'Impresoras', to: '/productos/portatiles' },
  { label: 'Consumibles', to: '/productos/ordenadores' },

]

const dropdownHp = [
  { label: 'Ordenadores', to: '/productos/portatiles' },
  { label: 'Portátiles', to: '/productos/ordenadores' },

]
</script>
