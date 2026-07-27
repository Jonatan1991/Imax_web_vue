<template>
  <div>
    <!-- Sección Carousel -->
    <carousel />

    <!-- Sección Quiénes Somos -->
    <quienes-somos />

    <!-- Sección de Soluciones -->
    <soluciones />

    <!-- Sección de Preguntas Frecuentes -->
    <preguntas-frecuentes />
  </div>
</template>

<script setup lang="ts">
  import Carousel from '@/components/ui/carousel.vue'
  import PreguntasFrecuentes from '@/components/ui/preguntas-frecuentes.vue'
  import QuienesSomos from '@/components/ui/quienes-somos.vue'
  import Soluciones from '@/components/ui/soluciones.vue'
</script>

<style scoped></style>
