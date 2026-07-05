<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);
const dropdownRef = ref(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = (e) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown);
});
</script>

<template>
  <nav>
    <!-- Navigation menu will use Vuetify 3 components -->
  </nav>
</template>

