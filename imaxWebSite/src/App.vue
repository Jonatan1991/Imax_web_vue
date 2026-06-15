<script setup>
import VariableReactiva from "./components/ejemplos/variableReactiva.vue";
import headerComponent from "./components/headerComponent.vue";
</script>

<template>
  <header>
    <headerComponent></headerComponent>
  </header>

  <body>
    <h1 class="title">Hello Imax Web</h1>
    <VariableReactiva></VariableReactiva>

  </body>
  <footer>
    <p>footer</p>
  </footer>
</template>



<style>
.title {
  color: red;
}
</style>