<template>
  <v-fade-transition>
    <v-btn
      v-show="isVisible"
      aria-label="Volver arriba"
      class="scroll-to-top-btn"
      elevation="6"
      icon
      @click="scrollToTop"
    >
      <v-icon class="scroll-to-top-icon" size="32">mdi-chevron-up</v-icon>
    </v-btn>
  </v-fade-transition>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue'

  const isVisible = ref(false)

  function handleScroll () {
    // Show button when user has scrolled down 300px
    isVisible.value = window.scrollY > 300
  }

  function scrollToTop () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<style scoped>
.scroll-to-top-btn {
  position: fixed;
  bottom: 100px;
  right: 30px;
  z-index: 1000;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1A3A6E 0%, #4DB7E3 100%) !important;
  color: white !important;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
  box-shadow: 0 4px 15px rgba(26, 58, 110, 0.4) !important;
}

.scroll-to-top-btn:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 8px 25px rgba(77, 183, 227, 0.6) !important;
}

.scroll-to-top-btn:active {
  transform: translateY(-2px) scale(0.95);
}

.scroll-to-top-icon {
  transition: transform 0.3s ease;
}

.scroll-to-top-btn:hover .scroll-to-top-icon {
  transform: translateY(-3px);
}
</style>
