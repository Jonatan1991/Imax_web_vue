<script setup>
import HeroCarousel from '../components/home/HeroCarousel.vue';
import Categories from '../components/home/Categories.vue';
import FeaturedProducts from '../components/home/FeaturedProducts.vue';
</script>

<template>
  <div class="home-page">
    <HeroCarousel />
    <div class="container-home">
      <Categories />
    </div>
    <div class="container-home">
      <FeaturedProducts />
    </div>
  </div>
</template>

<style scoped>
.home-page {
  min-height: calc(100vh - 400px);
}

.container-home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>