<template>
  <div class="brother-printers-page bg-background min-vh-100 pb-16">
    <!-- Reusable Carousel passing custom slides from offersStore -->
    <carousel :slides="offersStore.brotherPrintersSlides" />

    <v-container class="mt-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <span class="text-subtitle-2 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-2">
          Equipos de Impresión
        </span>

        <h1 class="text-h3 font-weight-black text-primary mb-4">
          Catálogo Brother Impresoras
        </h1>

        <div class="divider mx-auto mb-4" />

        <p class="text-body-1 text-grey-darken-2 max-w-600 mx-auto">
          Equipos láser y LED diseñados para ofrecer fiabilidad, velocidad y el máximo ahorro en tu negocio o despacho.
        </p>
      </div>

      <!-- Filters & Search Bar -->
      <v-row class="mb-6 align-center">
        <v-col cols="12" md="6">
          <v-text-field
            v-model="searchQuery"
            clearable
            density="comfortable"
            hide-details
            label="Buscar impresora..."
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
          />
        </v-col>

        <v-col class="text-md-right" cols="12" md="6">
          <v-btn-toggle
            v-model="selectedCategory"
            class="rounded-lg border shadow-sm overflow-hidden"
            color="primary"
            mandatory
            variant="outlined"
          >
            <v-btn value="All">Ver todas</v-btn>
            <v-btn value="Láser">Láser</v-btn>
            <v-btn value="Multifunción">Multifunción</v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>

      <!-- Products Grid -->
      <v-row v-if="filteredProducts.length > 0">
        <v-col
          v-for="product in filteredProducts"
          :key="product.id"
          class="d-flex"
          cols="12"
          md="4"
          sm="6"
        >
          <v-card class="product-card w-100 pa-5 d-flex flex-column justify-space-between rounded-xl border elevation-1 transition-all">
            <div>
              <!-- Category Badge & Stock -->
              <div class="d-flex justify-space-between align-center mb-4">
                <v-chip class="font-weight-bold" color="primary" size="small">
                  {{ product.category }}
                </v-chip>

                <v-chip
                  class="font-weight-bold"
                  :color="product.inStock ? 'success' : 'error'"
                  size="small"
                  variant="tonal"
                >
                  {{ product.inStock ? 'En Stock' : 'Agotado' }}
                </v-chip>
              </div>

              <!-- Product Name -->
              <h3 class="text-h6 font-weight-bold text-primary mb-2">
                {{ product.name }}
              </h3>

              <!-- Description -->
              <p class="text-body-2 text-grey-darken-1 mb-4 leading-relaxed line-clamp-2">
                {{ product.description }}
              </p>

              <!-- Star Rating -->
              <div class="d-flex align-center mb-4">
                <v-rating
                  color="amber"
                  density="compact"
                  half-increments
                  :model-value="product.rating"
                  readonly
                  size="small"
                />

                <span class="text-caption text-grey ms-2">({{ product.rating }})</span>
              </div>

              <v-divider class="mb-4" />

              <!-- Technical Specifications -->
              <div class="specs-list mb-6">
                <div
                  v-for="spec in product.specs"
                  :key="spec"
                  class="d-flex align-center gap-2 mb-2 text-caption text-grey-darken-3"
                >
                  <v-icon color="secondary" size="16">mdi-check</v-icon>
                  <span>{{ spec }}</span>
                </div>
              </div>
            </div>

            <!-- Price and Action -->
            <div>
              <div class="d-flex align-baseline gap-2 mb-4">
                <span class="text-h5 font-weight-black text-primary">
                  {{ product.price.toFixed(2) }}€
                </span>

                <span
                  v-if="product.originalPrice"
                  class="text-caption text-grey text-decoration-line-through"
                >
                  {{ product.originalPrice.toFixed(2) }}€
                </span>
              </div>

              <v-btn
                block
                class="font-weight-bold text-white elevation-1 hover-scale"
                color="secondary"
                :disabled="!product.inStock"
                prepend-icon="mdi-cart"
                size="large"
              >
                Añadir al Carrito
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Empty State -->
      <v-row v-else class="justify-center py-12">
        <v-col class="text-center" cols="12" md="6">
          <v-icon class="mb-4" color="grey-lighten-1" size="80">mdi-printer-alert</v-icon>
          <h3 class="text-h5 font-weight-bold text-grey-darken-2 mb-2">No se encontraron impresoras</h3>
          <p class="text-body-2 text-grey">Prueba a buscar con otros términos o filtros.</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue'
  import Carousel from '@/components/ui/carousel.vue'
  import { useOffersStore } from '@/stores/offersStore'

  const offersStore = useOffersStore()

  const searchQuery = ref('')
  const selectedCategory = ref('All')

  onMounted(() => {
    document.title = 'Brother Impresoras | Imax PC'
  })

  const filteredProducts = computed(() => {
    return offersStore.brotherPrinters.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        || product.description.toLowerCase().includes(searchQuery.value.toLowerCase())

      const matchesFilter = selectedCategory.value === 'All'
        || product.category.includes(selectedCategory.value)

      return matchesSearch && matchesFilter
    })
  })
</script>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

.divider {
  width: 60px;
  height: 4px;
  background-color: #4DB7E3;
  border-radius: 2px;
}

.max-w-600 {
  max-width: 600px;
}

.gap-2 {
  gap: 8px;
}

.leading-relaxed {
  line-height: 1.6;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-card {
  border-color: #E3E6EB !important;
  background-color: #FFFFFF;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(26, 58, 110, 0.08) !important;
  border-color: #4DB7E3 !important;
}

.hover-scale {
  transition: transform 0.2s ease;
}

.hover-scale:hover {
  transform: scale(1.02);
}
</style>
