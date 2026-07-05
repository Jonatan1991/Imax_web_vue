<script setup>
import { ref } from 'vue';

const products = ref([
  {
    id: 1,
    name: 'Premium Watch',
    price: 99.99,
    image: '/src/assets/img/feature_prod_01.jpg',
    rating: 5,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Designer Shoes',
    price: 149.99,
    image: '/src/assets/img/feature_prod_02.jpg',
    rating: 4,
    reviews: 94,
  },
  {
    id: 3,
    name: 'Luxury Accessory',
    price: 79.99,
    image: '/src/assets/img/feature_prod_03.jpg',
    rating: 1,
    reviews: 156,
  },
  {
    id: 4,
    name: 'Classic Watch',
    price: 89.99,
    image: '/src/assets/img/shop_01.jpg',
    rating: 4,
    reviews: 73,
  },
]);

</script>

<template>
  
</template>

<style scoped>
</style>
