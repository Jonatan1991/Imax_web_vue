<script setup>
import { RouterLink } from 'vue-router';

const categories = [
  {
    id: 1,
    name: 'Watches',
    image: '/src/assets/img/category_img_01.jpg',
    productCount: 24,
  },
  {
    id: 2,
    name: 'Shoes',
    image: '/src/assets/img/category_img_02.jpg',
    productCount: 18,
  },
  {
    id: 3,
    name: 'Accessories',
    image: '/src/assets/img/category_img_03.jpg',
    productCount: 32,
  },
];
</script>

<template>
  <section class="categories-section">
    <div class="container">
      <h2 class="section-title">Categories of The Month</h2>
      <div class="categories-grid">
        <div
          v-for="category in categories"
          :key="category.id"
          class="category-card"
        >
          <div class="category-image-wrapper">
            <img :src="category.image" :alt="category.name" class="category-image" />
            <div class="category-overlay">
              <RouterLink to="#" class="overlay-button">
                Explore
              </RouterLink>
            </div>
          </div>
          <div class="category-info">
            <h3 class="category-name">{{ category.name }}</h3>
            <p class="product-count">{{ category.productCount }} Products</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.categories-section {
  padding: 3rem 0;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #212245;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.category-card {
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.category-image-wrapper {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
}

.category-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.category-card:hover .category-image {
  transform: scale(1.05);
}

.category-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(33, 34, 69, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.category-card:hover .category-overlay {
  opacity: 1;
}

.overlay-button {
  padding: 0.75rem 2rem;
  background-color: #ffc000;
  color: #212245;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.overlay-button:hover {
  background-color: #ffb300;
}

.category-info {
  padding: 1.5rem;
  text-align: center;
}

.category-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: #212245;
  margin-bottom: 0.5rem;
}

.product-count {
  color: #a8a8a8;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .categories-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .category-image-wrapper {
    height: 200px;
  }
}

@media (max-width: 576px) {
  .categories-grid {
    grid-template-columns: 1fr;
  }

  .category-image-wrapper {
    height: 250px;
  }
}
</style>
