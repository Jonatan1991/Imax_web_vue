<script setup>
import headerComponent from "./components/headerComponent.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <header class="header">
    <headerComponent></headerComponent>
  </header>

  <body class="body">
    <RouterView />
  </body>

  <footer class="footer">
    <p>footer</p>
  </footer>


</template>

<style></style>