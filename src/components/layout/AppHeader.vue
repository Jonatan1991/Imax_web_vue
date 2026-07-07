<script setup>
// import { useMainMenu } from '../../composables/useMainMenu';
// const { menuItems } = useMainMenu();
const menuItems = [
  { label: 'Inicio', to: '/' },
  { label: 'Formulario', to: '/formulario' },
  { label: 'Variable reactiva', to: '/variable-reactiva' },
  { label: 'V-bind', to: '/v-bind' },
]
</script>

<!-- src/components/layout/AppHeader.vue -->
<template>
  jona
  <v-app-bar flat color="white" class="border-b">
    <v-container>
      <v-row align="center">
        
        <!-- LOGO -->
        <v-col cols="12" md="3">
          <RouterLink to="/" class="text-h5 font-weight-bold text-black">
            IMAX Shop
          </RouterLink>
        </v-col>

        <!-- MENÚ -->
        <v-col cols="12" md="6" class="d-flex justify-center">
          <div class="d-flex gap-4">
            <RouterLink
              v-for="item in menuItems"
              :key="item.name"
              :to="{ name: item.name }"
              class="text-body-1 text-black"
            >
              {{ item.label }}
            </RouterLink>
          </div>
        </v-col>

        <!-- CONTACTO + REDES -->
        <v-col cols="12" md="3" class="d-flex justify-end align-center">
          <span class="mr-4 text-body-2">
            +34 000 000 000
          </span>

          <v-icon class="mr-2">mdi-facebook</v-icon>
          <v-icon class="mr-2">mdi-instagram</v-icon>
          <v-icon>mdi-twitter</v-icon>
        </v-col>

      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.border-b {
  border-bottom: 1px solid #e0e0e0;
}
.gap-4 {
  gap: 1.5rem;
}
</style>