<script setup lang="ts">
  import ScrollToTop from '../components/common/ScrollToTop.vue'
  import AppFooter from '../components/layouts/AppFooter.vue'
  import MainMenu from '../components/layouts/MainMenu.vue'
  import TopBar from '../components/layouts/TopBar.vue'
</script>

<template>
  <v-app>
    <top-bar />
    <main-menu />

    <v-main>
      <router-view />
    </v-main>

    <!-- Pie de página dinámico y profesional -->
    <app-footer />

    <!-- Boton para volver arriba de la pagina -->
    <scroll-to-top />
  </v-app>
</template>
