<template>
  <v-app-bar
    color="white"
    flat
    height="90"
    class="px-8"
  >
    <!-- LOGO -->
    <RouterLink to="/" class="d-flex align-center ml-4">
      <img
        src="../../assets/images/logo.jpg"
        alt="IMAX Logo"
        style="height: 60px"
      />
    </RouterLink>

    <!-- MENÚ CENTRADO -->
    <div class="flex-grow-1 d-flex justify-center">
      <v-btn
        v-for="item in mainMenu"
        :key="item.label"
        :to="item.to"
        variant="text"
        class="mx-3 text-black"
      >
        {{ item.label }}
      </v-btn>

      <!-- DESPLEGABLE PRINCIPAL -->
      <v-menu>
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            variant="text"
            class="mx-3 text-black"
          >
            Más opciones
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="item in dropdownMenu"
            :key="item.label"
            :to="item.to"
          >
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          </v-list-item>

          <!-- SUB-DESPLEGABLE -->
          <v-menu location="end">
            <template #activator="{ props }">
              <v-list-item v-bind="props">
                <v-list-item-title>Submenú avanzado</v-list-item-title>
              </v-list-item>
            </template>

            <v-list>
              <v-list-item
                v-for="sub in subDropdown"
                :key="sub.label"
                :to="sub.to"
              >
                <v-list-item-title>{{ sub.label }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list>
      </v-menu>
    </div>

    <!-- BUSCADOR A LA DERECHA -->
    <v-text-field
      v-model="search"
      placeholder="Buscar..."
      variant="outlined"
      density="compact"
      hide-details
      class="ml-8"
      style="max-width: 220px"
    >
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
]

const dropdownMenu = [
  { label: 'Blog', to: '/blog' },
  { label: 'Contacto', to: '/contacto' },
]

const subDropdown = [
  { label: 'Guías técnicas', to: '/guias' },
  { label: 'Documentación', to: '/docs' },
]
</script>

