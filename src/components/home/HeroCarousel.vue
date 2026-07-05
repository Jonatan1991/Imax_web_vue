<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const currentSlide = ref(0);
const autoSlideTimer = ref(null);

const slides = ref([
  {
    id: 1,
    image: '/src/assets/img/banner_img_01.jpg',
    title: 'EXPERIENCIA',
    description: 'Nuestra experiencia nos ha permitido reducir los tiempos de respuesta y los costes de reparación, lo que ha generado más de 200 particulares, autónomos y PYMES confíen en nosotros.',
    // button: 'Shop Now',
  },
  {
    id: 2,
    image: '/src/assets/img/banner_img_02.jpg',
    title: 'SERVICIO PERSONALIZADO',
    description: 'Cada vez son más las empresas y particulares que solicitan que el técnico conozca el historial de reparaciones y las necesidades que tienen cada día, por eso en Imax PC asignamos un  técnico a cada servicio de mantenimiento y reparaciones.',
    // button: 'Shop Now',
  },
  {
    id: 3,
    image: '/src/assets/img/banner_img_03.jpg',
    title: 'GARANTÍA',
    description: 'Para su tranquilidad todos nuestros servicios de reparación están garantizados',
    // button: 'Shop Now',
  },
]);


</script>

<template>
  
</template>

<style scoped>
</style>
