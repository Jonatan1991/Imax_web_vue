<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const currentSlide = ref(0);
const autoSlideTimer = ref(null);

const slides = ref([
  {
    id: 1,
    image: '/src/assets/img/banner_img_01.jpg',
    title: 'Summer Collection',
    description: 'Discover the latest trends',
    button: 'Shop Now',
  },
  {
    id: 2,
    image: '/src/assets/img/banner_img_02.jpg',
    title: 'New Arrivals',
    description: 'Fresh items added daily',
    button: 'Shop Now',
  },
  {
    id: 3,
    image: '/src/assets/img/banner_img_03.jpg',
    title: 'Best Sellers',
    description: 'Customer favorites',
    button: 'Shop Now',
  },
]);

const slideStyle = computed(() => {
  return {
    transform: `translateX(-${currentSlide.value * 100}%)`,
    transition: 'transform 0.6s ease-in-out'
  };
});


const startAutoSlide = () => {
  autoSlideTimer.value = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length;
  }, 5000);
};

const stopAutoSlide = () => {
  if (autoSlideTimer.value) {
    clearInterval(autoSlideTimer.value);
    autoSlideTimer.value = null;
  }
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
  stopAutoSlide();
  startAutoSlide();
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.value.length) % slides.value.length;
  stopAutoSlide();
  startAutoSlide();
};

const goToSlide = (index) => {
  currentSlide.value = index;
  stopAutoSlide();
  startAutoSlide();
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>

<template>
  <section class="hero-carousel">
    <div class="carousel-container">
      <div class="carousel-slides" :style="slideStyle">
        <div
          v-for="(slide, index) in slides"
          :key="slide.id"
          class="carousel-slide"
        >
          <div class="slide-content">
            <h2 class="slide-title">{{ slide.title }}</h2>
            <p class="slide-description">{{ slide.description }}</p>
            <button class="slide-button">{{ slide.button }}</button>
          </div>
          <img :src="slide.image" :alt="slide.title" class="slide-image" />

        </div>
      </div>

      <!-- Navigation Controls -->
      <button class="carousel-control prev" @click="prevSlide" aria-label="Previous">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="carousel-control next" @click="nextSlide" aria-label="Next">
        <i class="fas fa-chevron-right"></i>
      </button>

      <!-- Indicators -->
      <div class="carousel-indicators">
        <button
          v-for="(slide, index) in slides"
          :key="slide.id"
          class="indicator"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-carousel {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-bottom: 3rem;
  max-width: 100vw;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden; /* el que debe cortar es el contenedor */
  border-radius: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #EFEFEF;
}

.carousel-slides {
  display: flex;
  height: 100%;
  /* IMPORTANTE: NO pongas overflow aquí */
}

.carousel-slide {
  flex: 0 0 100%;      /* cada slide ocupa exactamente el 100% del ancho */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.slide-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  object-position: center center;
}

.slide-content {
  position: relative;
  top: 25%;
  transform: translateY(-50%);
  max-width: clamp(320px, 40%, 500px);
  padding: 2rem;
  color: #000000;
  border-radius: 0 16px 16px 0;
}

.slide-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.slide-description {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.slide-button {
  padding: 0.75rem 2rem;
  background-color: #ffc000;
  color: #212245;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.slide-button:hover {
  background-color: #ffb300;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 192, 0, 0.8);
  color: #212245;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  z-index: 20;
}

.carousel-control:hover {
  background-color: #ffc000;
}

.prev {
  left: 1rem;
}

.next {
  right: 1rem;
}

.carousel-indicators {
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  z-index: 20;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background-color: #ffc000;
  border-color: #ffc000;
  width: 30px;
  border-radius: 6px;
}

@media (max-width: 768px) {
  .carousel-container {
    height: 300px;
  }

  .slide-title {
    font-size: 1.75rem;
  }

  .slide-description {
    font-size: 0.95rem;
  }

  .carousel-control {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .prev {
    left: 0.5rem;
  }

  .next {
    right: 0.5rem;
  }
}

@media (max-width: 576px) {
  .carousel-container {
    height: 200px;
  }

  .slide-content {
    padding: 1.5rem 1rem 1rem;
  }

  .slide-title {
    font-size: 1.25rem;
  }

  .slide-description {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }

  .slide-button {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }

  .carousel-control {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
  }
}
</style>
