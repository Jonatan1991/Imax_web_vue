<script lang="ts" setup>
  import { ref } from 'vue'

  const faqs = ref([
    {
      question: '¿Qué tipo de servicios informáticos ofrecéis?',
      answer: 'Ofrecemos soporte técnico integral, mantenimiento preventivo y correctivo para empresas y autónomos, montaje y reparación de ordenadores a medida (tanto profesionales como de consumo o gaming), venta y distribución de consumibles oficiales Brother y HP, así como instalación de software corporativo y soluciones en la nube (Microsoft 365, copias de seguridad).',
    },
    {
      question: '¿Sois distribuidor oficial y servicio técnico Brother y HP?',
      answer: 'Sí, somos especialistas y distribuidores autorizados oficiales de Brother y HP. Suministramos tanto equipos de impresión (impresoras y multifuncionales de gama profesional o doméstica) como consumibles 100% originales (tóneres, tambores, cartuchos de tinta y piezas de repuesto) asegurando la máxima compatibilidad, rendimiento y la garantía oficial del fabricante.',
    },
    {
      question: '¿Cómo funciona vuestro servicio de mantenimiento para empresas?',
      answer: 'Ofrecemos contratos de mantenimiento informático adaptados a las necesidades reales de tu negocio. El servicio incluye monitorización preventiva continua de servidores y equipos, soporte técnico remoto inmediato, visitas presenciales de técnicos especializados sin límite de horas si el problema no se puede resolver en remoto, copias de seguridad gestionadas y consultoría periódica de seguridad.',
    },
    {
      question: '¿Hacéis reparaciones a particulares o solo trabajáis con empresas?',
      answer: 'Damos cobertura tanto a particulares como a empresas. Ofrecemos reparación de portátiles, equipos de sobremesa, eliminación de virus, optimización de velocidad (cambios a discos SSD), copias de seguridad y configuraciones de red o Wi-Fi en nuestro taller de la Calle de Ardemans, 35, o mediante asistencia a domicilio.',
    },
    {
      question: '¿Dónde está vuestro taller y qué horario de atención tenéis?',
      answer: 'Nuestra tienda y taller de servicio técnico está ubicada en la Calle de Ardemans, 35, en el barrio de Salamanca, 28028 Madrid. Estamos abiertos de Lunes a Viernes en horario de 9:00h a 14:00h y de 16:00h a 19:00h. Puedes visitarnos directamente sin cita previa o llamarnos para cualquier consulta.',
    },
  ])
</script>

<template>
  <v-sheet id="faq-section" class="py-16 bg-background">
    <v-container>
      <!-- Cabecera de la Sección -->
      <v-row class="text-center mb-12" justify="center">
        <v-col cols="12" lg="8" md="10">
          <span class="text-subtitle-1 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-3">
            Preguntas Frecuentes
          </span>

          <h2 class="text-h4 text-md-h3 font-weight-black text-primary mb-4 leading-tight">
            Resolvemos tus dudas tecnológicas
          </h2>

          <div class="divider mx-auto mb-6" />

          <p class="text-body-1 font-weight-regular text-grey-darken-3 leading-relaxed">
            Aquí encontrarás respuesta a las consultas más habituales sobre nuestro servicio técnico,
            mantenimiento para empresas y productos de impresión. Si no encuentras lo que buscas,
            no dudes en contactarnos directamente.
          </p>
        </v-col>
      </v-row>

      <!-- Paneles de Preguntas Frecuentes -->
      <v-row justify="center">
        <v-col cols="12" lg="8" md="10">
          <v-expansion-panels class="faq-panels" variant="popout">
            <v-expansion-panel
              v-for="(faq, index) in faqs"
              :key="index"
              class="faq-panel border rounded-xl mb-4 bg-white"
              elevation="0"
            >
              <!-- Cabecera de Pregunta -->
              <v-expansion-panel-title class="py-5 font-weight-bold text-primary text-body-1 hover-title">
                <template #default="{ expanded }">
                  <div class="d-flex align-center w-100">
                    <v-icon
                      class="me-3"
                      :color="expanded ? 'secondary' : 'primary'"
                      :icon="expanded ? 'mdi-help-circle' : 'mdi-help-circle-outline'"
                    />

                    <span class="question-text" :class="{ 'text-secondary': expanded }">{{ faq.question }}</span>
                  </div>
                </template>
              </v-expansion-panel-title>

              <!-- Respuesta -->
              <v-expansion-panel-text class="text-grey-darken-3 py-2 text-body-2 leading-relaxed answer-block">
                {{ faq.answer }}
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style scoped>
.divider {
  width: 80px;
  height: 4px;
  background-color: #4DB7E3;
  border-radius: 2px;
}

.leading-relaxed {
  line-height: 1.7;
}

/* Custom styling for expansion panels to look premium and match design language */
.faq-panels :deep(.v-expansion-panel-title__overlay) {
  background-color: transparent !important;
}

.faq-panel {
  border-color: #E3E6EB !important;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
}

.faq-panel :deep(.v-expansion-panel-text__wrapper) {
  padding: 16px 24px 24px 52px !important;
}

/* Accent border on the answer to highlight it */
.answer-block {
  border-left: 3px solid #4DB7E3;
  margin-left: 8px;
}

.hover-title {
  transition: color 0.2s ease;
}

.hover-title:hover {
  color: #4DB7E3 !important;
}

.question-text {
  transition: color 0.2s ease;
}
</style>
