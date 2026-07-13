<script lang="ts" setup>
import { ref } from 'vue'
import imgQuienesSomos from '@/assets/images/quienes_somos.png'

const items = ref([
  {
    title: 'Calidad y Profesionalidad',
    description: 'En Imax PC, la calidad del servicio y un asesoramiento profesional riguroso son nuestras premisas fundamentales en cada proyecto.',
    icon: 'mdi-certificate-outline',
    color: 'primary'
  },
  {
    title: 'Atención Personalizada',
    description: 'Nos tomamos el tiempo necesario para atenderle individualmente, escuchar sus necesidades y responder a todas sus dudas sin prisas.',
    icon: 'mdi-account-heart-outline',
    color: 'primary'
  },
  {
    title: 'Equipos a su Medida',
    description: 'Siempre buscamos y seleccionamos el dispositivo o componente informático que mejor se ajuste a lo que realmente necesita.',
    icon: 'mdi-laptop',
    color: 'primary'
  },
  {
    title: 'Soporte Especializado',
    description: 'Si tiene problemas con sus equipos o necesita asesoramiento experto para su negocio, en Imax PC estamos listos para ayudarle.',
    icon: 'mdi-help-network-outline',
    color: 'primary'
  }
])
</script>

<template>
  <v-sheet class="py-16 bg-background" id="about-section">
    <v-container>
      <v-row align="center" justify="center">
        <!-- Columna de Imagen -->
        <v-col cols="12" md="5" class="order-last order-md-first">
          <v-hover v-slot="{ isHovering, props }">
            <v-card v-bind="props" class="image-card rounded-xl overflow-hidden elevation-3 border"
              :class="{ 'elevation-12': isHovering }">
              <v-img :src="imgQuienesSomos" height="450" cover alt="Quiénes Somos - Imax PC"
                class="transition-transform duration-500"
                :style="{ transform: isHovering ? 'scale(1.03)' : 'scale(1)' }">
                <!-- Overlay con gradiente decorativo en hover -->
                <div class="fill-height d-flex flex-column justify-end text-white pa-6 gradient-overlay">
                  <div class="text-h5 font-weight-black mb-1">Imax PC</div>
                  <div class="text-subtitle-2 text-secondary font-weight-bold">
                    Tu partner tecnológico de confianza
                  </div>
                </div>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>

        <!-- Columna de Texto -->
        <v-col cols="12" md="7" class="ps-md-10">
          <span class="text-subtitle-1 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-2">
            Quiénes Somos
          </span>
          <h2 class="text-h4 text-md-h3 font-weight-black text-primary mb-6 leading-tight">
            Comprometidos con tu tranquilidad tecnológica
          </h2>
          <p class="text-body-1 text-grey-darken-3 mb-8 leading-relaxed">
            En <strong>Imax PC</strong> entendemos que la informática debe ser una solución, no un problema.
            Por eso, nos esforzamos en ofrecer una atención cercana y un servicio técnico de máxima calidad,
            garantizando que cada cliente reciba exactamente lo que necesita.
          </p>

          <!-- Lista de Características/Valores -->
          <v-row>
            <v-col v-for="(item, index) in items" :key="index" cols="12" sm="6" class="d-flex">
              <div class="d-flex align-start mb-4">
                <v-avatar :class="item.color === 'primary' ? 'bg-primary-lighten-5' : 'bg-secondary-lighten-5'"
                  rounded="lg" size="48" class="me-4 border-avatar">
                  <v-icon :color="item.color" size="24">{{ item.icon }}</v-icon>
                </v-avatar>
                <div>
                  <h4 class="text-subtitle-1 font-weight-bold text-primary mb-1">
                    {{ item.title }}
                  </h4>
                  <p class="text-body-2 text-grey-darken-2 leading-normal">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style scoped>
.leading-tight {
  line-height: 1.25;
}

.leading-normal {
  line-height: 1.5;
}

.leading-relaxed {
  line-height: 1.7;
}

.tracking-widest {
  letter-spacing: 0.15em !important;
}

.image-card {
  border-color: #E3E6EB !important;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.transition-transform {
  transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.gradient-overlay {
  background: linear-gradient(to top, rgba(26, 58, 110, 0.9) 0%, rgba(26, 58, 110, 0.3) 50%, rgba(0, 0, 0, 0) 100%);
}

.border-avatar {
  border: 1px solid rgba(77, 183, 227, 0.15);
}

.bg-primary-lighten-5 {
  background-color: rgba(26, 58, 110, 0.08) !important;
}

.bg-secondary-lighten-5 {
  background-color: rgba(77, 183, 227, 0.08) !important;
}
</style>
