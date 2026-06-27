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
    rating: 5,
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

const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, i) => i < rating);
};

const addToCart = (product) => {
  console.log('Added to cart:', product.name);
};
</script>

<template>
  <section class="featured-products-section">
    <div class="container">
      <h2 class="section-title">Featured Products</h2>
      <div class="products-grid">
        <div
          v-for="product in products"
          :key="product.id"
          class="product-card"
        >
          <div class="product-image-wrapper">
            <img :src="product.image" :alt="product.name" class="product-image" />
            <button class="add-to-cart-btn" @click="addToCart(product)">
              <i class="fas fa-shopping-cart"></i>
              Add to Cart
            </button>
          </div>
          <div class="product-info">
            <h3 class="product-name">{{ product.name }}</h3>
            <div class="product-rating">
              <span
                v-for="(isFilled, index) in renderStars(product.rating)"
                :key="index"
                class="star"
                :class="{ filled: isFilled }"
              >
                <i class="fas fa-star"></i>
              </span>
              <span class="review-count">({{ product.reviews }})</span>
            </div>
            <div class="product-price">
              <span class="price">${{ product.price.toFixed(2) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured-products-section {
  padding: 3rem 0;
  background-color: #ffffff;
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

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.product-card {
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e9ecef;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-3px);
}

.product-image-wrapper {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background-color: #f8f9fa;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.add-to-cart-btn {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0.75rem;
  background-color: #ffc000;
  color: #212245;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.product-card:hover .add-to-cart-btn {
  transform: translateY(0);
}

.add-to-cart-btn:hover {
  background-color: #ffb300;
}

.product-info {
  padding: 1.5rem;
}

.product-name {
  font-size: 1rem;
  font-weight: 600;
  color: #212245;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  min-height: 2.4em;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
}

.star {
  color: #e9ecef;
  font-size: 0.8rem;
}

.star.filled {
  color: #ffc000;
}

.review-count {
  font-size: 0.8rem;
  color: #a8a8a8;
  margin-left: 0.5rem;
}

.product-price {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.price {
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffc000;
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .product-image-wrapper {
    height: 200px;
  }
}

@media (max-width: 576px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .product-image-wrapper {
    height: 150px;
  }

  .product-info {
    padding: 1rem;
  }

  .product-name {
    font-size: 0.9rem;
  }
}
</style>
