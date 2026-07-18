<template>
  <v-app-bar class="px-8" color="white" flat height="90">
    <!-- LOGO -->
    <RouterLink class="d-flex align-center ml-4" to="/">
      <img alt="IMAX Logo" src="../../assets/images/logo.jpg" style="height: 80px">
    </RouterLink>

    <!-- MENÚ CENTRADO -->
    <div class="flex-grow-1 d-flex justify-center">
      <!-- Bucle principal para iterar sobre los elementos del menú (Primer Nivel) -->
      <template v-for="item in menuItems" :key="item.label">
        <div class="text-center">
          <!-- Botón de navegación del primer nivel. Si no tiene submenú, navega directamente a la ruta. Usamos variant="text" para un diseño limpio y moderno. -->
          <v-btn class="mx-1 font-weight-medium" color="primary" :to="item.to" variant="text">
            <v-icon v-if="item.icon" start>{{ item.icon }}</v-icon>
            {{ item.label }}

            <!-- Muestra una pequeña flecha hacia abajo únicamente si el elemento tiene un submenú -->
            <v-icon v-if="item.submenu" end size="x-small">mdi-chevron-down</v-icon>

            <!-- Desplegable del menú (Segundo Nivel). Se activa al pasar el ratón (open-on-hover) si hay submenú disponible -->
            <v-menu
              v-if="item.submenu"
              activator="parent"
              :close-delay="100"
              :open-delay="50"
              open-on-hover
            >
              <v-list class="py-1" elevation="3">
                <!-- Iteramos sobre el array de submenús del elemento actual -->
                <v-list-item v-for="subItem in item.submenu" :key="subItem.label" link :to="subItem.to">
                  <v-list-item-title>{{ subItem.label }}</v-list-item-title>

                  <!-- Si el subelemento tiene a su vez un submenú, mostramos una flecha hacia la derecha -->
                  <template v-if="subItem.submenu" #append>
                    <v-icon class="ms-2" icon="mdi-chevron-right" size="x-small" />
                  </template>

                  <!-- Desplegable del submenú (Tercer Nivel). Se posiciona a la derecha (location="end") y se activa al pasar el ratón -->
                  <v-menu
                    v-if="subItem.submenu"
                    activator="parent"
                    :close-delay="100"
                    location="end"
                    :open-delay="50"
                    open-on-hover
                    submenu
                  >
                    <v-list class="py-1" elevation="3">
                      <!-- Iteramos sobre el tercer nivel de submenús -->
                      <v-list-item
                        v-for="subSubItem in subItem.submenu"
                        :key="subSubItem.label"
                        link
                        :to="subSubItem.to"
                      >
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
    <v-text-field
      v-model="search"
      class="ml-8"
      density="compact"
      hide-details
      placeholder="Buscar..."
      style="max-width: 220px"
      variant="outlined"
    >
      <template #append-inner>
        <v-icon>mdi-magnify</v-icon>
      </template>
    </v-text-field>
  </v-app-bar>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useMainMenuStore } from '@/stores/menuStore'

  const search = ref('')

  const menuStore = useMainMenuStore()
  const menuItems = menuStore.menuItems
</script>
