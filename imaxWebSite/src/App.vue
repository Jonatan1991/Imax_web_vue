<script setup>
import headerComponent from "./components/headerComponent.vue";
import BodyComponent from "./components/bodyComponent.vue";
</script>

<template>
  <header class="header">
    <headerComponent></headerComponent>
  </header>

  <body class="body">
    <BodyComponent></BodyComponent>

  </body>
  <footer class="footer">
    <p>footer</p>
  </footer>
</template>

<style></style>