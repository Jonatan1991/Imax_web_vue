<script setup lang="ts">
  import { ref } from 'vue'
  import imgExperiencia from '@/assets/images/carousel_experiencia_f7f9fc.png'
  import imgGarantia from '@/assets/images/carousel_garantia_f7f9fc.png'
  import imgServicio from '@/assets/images/carousel_servicio_f7f9fc.png'

  const slides = ref([
    {
      category: 'Experiencia',
      title: 'Años de confianza a tu servicio',
      text: 'Optimizamos los tiempos de respuesta y minimizamos los costes de reparación. Más de 200 particulares, autónomos y PYMES confían en nuestro soporte técnico especializado.',
      image: imgExperiencia,
      actionText: 'Ver Servicios',
      to: '/servicios',
    },
    {
      category: 'Servicio Personalizado',
      title: 'Tu propio técnico de confianza',
      text: 'Asignamos un técnico dedicado a tu cuenta para que conozca a fondo tu historial de equipos y necesidades diarias. Atención rápida, eficiente y sin explicaciones repetitivas.',
      image: imgServicio,
      actionText: 'Mantenimiento a Medida',
      to: '/servicios',
    },
    {
      category: 'Garantía',
      title: 'Tu tranquilidad es nuestra prioridad',
      text: 'Para tu total tranquilidad, todas nuestras reparaciones y mantenimientos están respaldados por nuestra garantía de satisfacción y calidad certificada.',
      image: imgGarantia,
      actionText: 'Contactar Ahora',
      to: '/contacto',
    },
  ])
</script>

<template>
  <v-carousel
    class="hero-carousel elevation-1"
    cycle
    height="480"
    hide-delimiter-background
    show-arrows="hover"
    style="background-color: #F7F9FC;"
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-container class="fill-height py-0">
        <v-row align="center" class="fill-height">
          <!-- Left Column: Content -->
          <v-col class="px-6 px-md-12 text-left" cols="12" md="6">
            <!-- Label / Category -->
            <span
              class="text-subtitle-1 text-uppercase font-weight-bold text-secondary mb-2 d-inline-block tracking-widest"
            >
              {{ slide.category }}
            </span>

            <!-- Main Title -->
            <h1 class="text-h4 text-md-h3 font-weight-black text-primary mb-4 leading-tight">
              {{ slide.title }}
            </h1>

            <!-- Description -->
            <p class="text-body-1 text-md-body-1 font-weight-regular text-grey-darken-3 mb-6 max-w-xl">
              {{ slide.text }}
            </p>

            <!-- Action Button -->
            <v-btn
              class="font-weight-bold px-8 elevation-2 hover-scale text-white"
              color="primary"
              size="large"
              :to="slide.to"
            >
              {{ slide.actionText }}
              <v-icon end>mdi-arrow-right</v-icon>
            </v-btn>
          </v-col>

          <!-- Right Column: Simple Minimalist Image -->
          <v-col class="d-none d-md-flex justify-center align-center" cols="12" md="6">
            <v-img
              contain
              class="carousel-image"
              max-height="420"
              max-width="100%"
              :src="slide.image"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>
.hero-carousel {
  /* Delimitadores oscuros para fondo claro */
  --v-carousel-delimiter-color: #1A3A6E;
}

.tracking-widest {
  letter-spacing: 0.15em !important;
}

.max-w-xl {
  max-width: 580px;
  line-height: 1.6;
}

.hover-scale {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.hover-scale:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0px 6px 18px rgba(26, 58, 110, 0.25) !important;
}

.leading-tight {
  line-height: 1.2;
}

.carousel-image {
  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.05));
  transition: transform 0.5s ease-in-out;
}

.hero-carousel :deep(.v-window__controls) {
  padding: 0 16px;
}

/* Flechas con color primario */
.hero-carousel :deep(.v-btn--icon) {
  color: #1A3A6E !important;
}
</style>
