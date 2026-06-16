<script setup>
import VariableReactiva from "./components/ejemplos/variableReactiva.vue";
import VariableReactiva2 from "./components/ejemplos/variableReactiva2.vue";
import VBind from "./components/ejemplos/vBind.vue";
import VFor from "./components/ejemplos/vFor.vue";
import headerComponent from "./components/headerComponent.vue";
</script>

<template>
  <header class="header">
    <headerComponent></headerComponent>
  </header>

  <body class="body">
    <h1 class="title">Hello Imax Web</h1>

    <VariableReactiva></VariableReactiva>
    <hr>
    <VariableReactiva2></VariableReactiva2>
    <hr>
    <VBind></vbind>
    <hr>
    <VFor></vFor>
  </body>
  <footer class="footer">
    <p>footer</p>
  </footer>
</template>

<style>
.title {
  color: red;
}
</style>