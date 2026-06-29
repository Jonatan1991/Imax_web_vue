<script setup>
import headerComponent from "./components/headerComponent.vue";
import footerComponent from "./components/footerComponent.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="app-wrapper">
    <headerComponent></headerComponent>
    <main class="main-content">
      <RouterView />
    </main>
    <footerComponent></footerComponent>
  </div>
</template>