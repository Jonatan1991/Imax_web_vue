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
  <nav class="nav-container">
    <div class="nav-links">
      <router-link to="/" class="nav-link" active-class="active-link">
        Inicio
      </router-link>

      <!-- Dropdown Wrapper -->
      <div class="dropdown-wrapper" ref="dropdownRef">
        <button 
          @click="toggleDropdown" 
          class="dropdown-btn" 
          :class="{ 'dropdown-active': isOpen }"
          aria-haspopup="true"
          :aria-expanded="isOpen"
        >
          Ejemplos de Aprendizaje
          <span class="chevron" :class="{ 'chevron-rotate': isOpen }">▾</span>
        </button>

        <!-- Dropdown Menu -->
        <transition name="dropdown-fade">
          <div v-if="isOpen" class="dropdown-menu">
            <div class="dropdown-grid">
              <router-link 
                to="/variable-reactiva" 
                class="dropdown-item" 
                @click="isOpen = false"
                active-class="active-item"
              >
                <div class="item-title">Variable Reactiva</div>
                <div class="item-desc">Uso básico de ref en Vue</div>
              </router-link>

              <router-link 
                to="/variable-reactiva-2" 
                class="dropdown-item" 
                @click="isOpen = false"
                active-class="active-item"
              >
                <div class="item-title">Variable Reactiva 2</div>
                <div class="item-desc">Reactive y estado estructurado</div>
              </router-link>

              <router-link 
                to="/v-bind" 
                class="dropdown-item" 
                @click="isOpen = false"
                active-class="active-item"
              >
                <div class="item-title">Directiva v-bind</div>
                <div class="item-desc">Enlace dinámico de atributos</div>
              </router-link>

              <router-link 
                to="/v-for" 
                class="dropdown-item" 
                @click="isOpen = false"
                active-class="active-item"
              >
                <div class="item-title">Directiva v-for</div>
                <div class="item-desc">Renderizado de listas</div>
              </router-link>

              <router-link 
                to="/v-if" 
                class="dropdown-item" 
                @click="isOpen = false"
                active-class="active-item"
              >
                <div class="item-title">Directiva v-if</div>
                <div class="item-desc">Renderizado condicional</div>
              </router-link>

              <router-link 
                to="/slots" 
                class="dropdown-item" 
                @click="isOpen = false"
                active-class="active-item"
              >
                <div class="item-title">Slots</div>
                <div class="item-desc">Distribución de contenido e hijos</div>
              </router-link>

              <router-link 
                to="/computed" 
                class="dropdown-item" 
                @click="isOpen = false"
                active-class="active-item"
              >
                <div class="item-title">Computed Properties</div>
                <div class="item-desc">Propiedades computadas y caché</div>
              </router-link>

              <router-link 
                to="/watch" 
                class="dropdown-item" 
                @click="isOpen = false"
                active-class="active-item"
              >
                <div class="item-title">Watchers</div>
                <div class="item-desc">Observación de cambios de estado</div>
              </router-link>

              <router-link 
                to="/watch-effect" 
                class="dropdown-item" 
                @click="isOpen = false"
                active-class="active-item"
              >
                <div class="item-title">WatchEffect</div>
                <div class="item-desc">Efectos reactivos secundarios</div>
              </router-link>

              <router-link 
                to="/formulario" 
                class="dropdown-item" 
                @click="isOpen = false"
                active-class="active-item"
              >
                <div class="item-title">Formulario reactivo</div>
                <div class="item-desc">Validación y enlace bidireccional</div>
              </router-link>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-container {
  display: flex;
  align-items: center;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}

/* Nav Link Styling */
.nav-link {
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.25s ease;
}

.nav-link:hover, .active-link {
  color: #1a202c;
  background-color: rgba(0, 0, 0, 0.04);
}

/* Dropdown Container */
.dropdown-wrapper {
  position: relative;
}

/* Dropdown Toggle Button */
.dropdown-btn {
  background: none;
  border: none;
  color: #4a5568;
  font-weight: 500;
  font-size: 15px;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.25s ease;
}

.dropdown-btn:hover, .dropdown-active {
  color: #1a202c;
  background-color: rgba(0, 0, 0, 0.04);
}

.chevron {
  font-size: 11px;
  display: inline-block;
  transition: transform 0.2s ease;
}

.chevron-rotate {
  transform: rotate(180deg);
}

/* Dropdown Menu Box - Glassmorphism style */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  width: 480px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 12px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08), 
              0 8px 10px -6px rgba(0, 0, 0, 0.05);
  padding: 16px;
  z-index: 1000;
}

/* Grid Layout for Dropdown items */
.dropdown-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

/* Individual Dropdown Item */
.dropdown-item {
  display: flex;
  flex-direction: column;
  padding: 10px 14px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.dropdown-item:hover {
  background-color: rgba(79, 70, 229, 0.05); /* very soft indigo highlight */
  border-color: rgba(79, 70, 229, 0.1);
}

.active-item {
  background-color: rgba(79, 70, 229, 0.08) !important;
  border-color: rgba(79, 70, 229, 0.15);
}

.active-item .item-title {
  color: #4f46e5;
  font-weight: 600;
}

.item-title {
  color: #2d3748;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 2px;
  transition: color 0.2s ease;
}

.dropdown-item:hover .item-title {
  color: #4f46e5; /* indigo-600 */
}

.item-desc {
  color: #718096;
  font-size: 11px;
  line-height: 1.3;
}

/* Transitions */
.dropdown-fade-enter-active {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.dropdown-fade-leave-active {
  transition: all 0.15s cubic-bezier(0.5, 0, 0.75, 0);
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -8px);
}

@media (max-width: 640px) {
  .dropdown-menu {
    width: 280px;
    left: 0;
    transform: none;
  }
  
  .dropdown-grid {
    grid-template-columns: 1fr;
  }
}
</style>
