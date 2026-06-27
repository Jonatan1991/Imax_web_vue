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

<style>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>