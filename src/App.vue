<script setup>

import { RouterView } from "vue-router";
import HeaderComponent from "./components/layout/AppHeader.vue";
import footerComponent from "./components/layout/AppFooter.vue";
</script>

<template>
  <div class="app-wrapper">
    <HeaderComponent></HeaderComponent>
    <main class="main-content">
      <RouterView />
    </main>
    <footerComponent></footerComponent>
  </div>
</template>