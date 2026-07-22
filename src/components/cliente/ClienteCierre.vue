<template>
  <section id="section-cierre" class="section-cierre py-16 position-relative overflow-hidden">
    <div class="tech-grid-background" />
    <div class="gradient-overlay-cierre" />

    <v-container class="position-relative z-index-2">
      <v-row class="align-center justify-space-between">
        <v-col class="text-white py-8 text-left" cols="12" md="6">
          <div class="premium-tag mb-4">ALIANZA TECNOLÓGICA</div>

          <h2 class="text-h3 font-weight-black mb-6 leading-tight text-gradient">
            La tecnología debe impulsar tu negocio, no detenerlo.
          </h2>

          <p class="text-body-1 text-grey-lighten-2 leading-relaxed mb-8">
            Con nuestro servicio de mantenimiento informático corporativo obtendrás un aliado tecnológico estratégico
            que velará por la seguridad, disponibilidad y rendimiento continuo de toda tu infraestructura.
          </p>

          <v-card class="pa-5 glassmorphism border-lighten-1 rounded-xl">
            <h3 class="text-h6 font-weight-bold mb-4 text-white d-flex align-center gap-2">
              <v-icon color="secondary">mdi-check-decagram</v-icon>
              ¿Qué incluye la Auditoría Gratuita?
            </h3>

            <ul class="solution-checklist pl-0 mb-0">
              <li class="d-flex align-start gap-3 mb-3">
                <v-icon class="mt-1" color="secondary" size="18">mdi-chevron-right</v-icon>
                <span class="text-body-2 text-grey-lighten-2">Inventario y análisis del estado físico de hasta 20 equipos de trabajo.</span>
              </li>

              <li class="d-flex align-start gap-3 mb-3">
                <v-icon class="mt-1" color="secondary" size="18">mdi-chevron-right</v-icon>
                <span class="text-body-2 text-grey-lighten-2">Test rápido de velocidad interna de red y cobertura inalámbrica WiFi.</span>
              </li>

              <li class="d-flex align-start gap-3 mb-3">
                <v-icon class="mt-1" color="secondary" size="18">mdi-chevron-right</v-icon>
                <span class="text-body-2 text-grey-lighten-2">Comprobación básica de vulnerabilidades críticas y estado de antivirus.</span>
              </li>

              <li class="d-flex align-start gap-3">
                <v-icon class="mt-1" color="secondary" size="18">mdi-chevron-right</v-icon>
                <span class="text-body-2 text-grey-lighten-2">Informe ejecutivo sin coste alguno ni compromiso de permanencia.</span>
              </li>
            </ul>
          </v-card>
        </v-col>

        <v-col class="py-8" cols="12" md="5">
          <v-card class="audit-contact-card pa-8 elevation-4 rounded-2xl glassmorphism-dark text-white">
            <h3 class="text-h5 font-weight-bold mb-2">Solicita Tu Auditoría Gratuita</h3>

            <p class="text-caption text-grey-lighten-2 mb-6">
              Completa el formulario y un técnico se pondrá en contacto para programar la revisión sin coste.
            </p>

            <v-form v-if="!auditSubmitted" v-model="formValid" @submit.prevent="submitAuditForm">
              <v-text-field
                v-model="auditForm.name"
                class="mb-3"
                color="secondary"
                density="comfortable"
                label="Nombre de contacto *"
                placeholder="Ej. Juan Pérez"
                required
                variant="outlined"
              />

              <v-text-field
                v-model="auditForm.company"
                class="mb-3"
                color="secondary"
                density="comfortable"
                label="Empresa *"
                placeholder="Ej. Mi Negocio S.L."
                required
                variant="outlined"
              />

              <v-text-field
                v-model="auditForm.email"
                class="mb-3"
                color="secondary"
                density="comfortable"
                label="Correo electrónico *"
                placeholder="Ej. contacto@miempresa.com"
                required
                type="email"
                variant="outlined"
              />

              <v-text-field
                v-model="auditForm.phone"
                class="mb-3"
                color="secondary"
                density="comfortable"
                label="Teléfono de contacto"
                placeholder="Ej. 600 000 000"
                variant="outlined"
              />

              <v-select
                v-model="auditForm.devicesCount"
                class="mb-4"
                color="secondary"
                density="comfortable"
                :items="['1 a 5 equipos', '6 a 15 equipos', '16 a 30 equipos', '31 a 50 equipos', 'Más de 50 equipos']"
                label="Número aproximado de equipos"
                variant="outlined"
              />

              <v-textarea
                v-model="auditForm.message"
                class="mb-6"
                color="secondary"
                density="comfortable"
                label="Mensaje o requerimiento especial"
                placeholder="Describe brevemente tus necesidades o incidencias habituales..."
                rows="3"
                variant="outlined"
              />

              <v-btn
                block
                class="font-weight-bold"
                color="secondary"
                :disabled="!auditForm.name || !auditForm.email || !auditForm.company"
                :loading="submitLoading"
                size="large"
                type="submit"
              >
                Enviar Solicitud
              </v-btn>
            </v-form>

            <!-- Formulario Enviado Exitosamente -->
            <div v-else class="text-center py-8">
              <v-icon class="mb-4 animate-bounce" color="success" size="64">mdi-check-circle-outline</v-icon>
              <h4 class="text-h6 font-weight-bold text-white mb-2">¡Solicitud Enviada!</h4>

              <p class="text-body-2 text-grey-lighten-2 leading-relaxed mb-6">
                Hemos recibido tus datos con éxito. Un consultor tecnológico de IMAX se pondrá en contacto contigo en las próximas 24 horas laborables.
              </p>

              <v-btn class="px-6" color="white" variant="outlined" @click="auditSubmitted = false">
                Enviar otra solicitud
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const formValid = ref(false)
  const auditForm = ref({
    name: '',
    company: '',
    email: '',
    phone: '',
    devicesCount: '',
    message: '',
  })
  const auditSubmitted = ref(false)
  const submitLoading = ref(false)

  function submitAuditForm () {
    if (!auditForm.value.name || !auditForm.value.email || !auditForm.value.company) {
      return
    }
    submitLoading.value = true
    setTimeout(() => {
      submitLoading.value = false
      auditSubmitted.value = true
      // Reset form
      auditForm.value = {
        name: '',
        company: '',
        email: '',
        phone: '',
        devicesCount: '',
        message: '',
      }
    }, 1500)
  }
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #FFFFFF 0%, #4DB7E3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.leading-relaxed {
  line-height: 1.6 !important;
}

.premium-tag {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(77, 183, 227, 0.15);
  border: 1px solid rgba(77, 183, 227, 0.3);
  color: #4DB7E3;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  border-radius: 4px;
  text-transform: uppercase;
}

.tech-grid-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  background-position: center;
  pointer-events: none;
}

.glassmorphism {
  background: rgba(255, 255, 255, 0.08) !important;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}

.glassmorphism-dark {
  background: rgba(10, 25, 47, 0.75) !important;
  backdrop-filter: blur(16px);
  border: 1px solid rgba(77, 183, 227, 0.2);
  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.4);
}

.border-lighten-1 {
  border-color: rgba(255, 255, 255, 0.1) !important;
}

.solution-checklist {
  list-style: none;
}

.section-cierre {
  background: linear-gradient(135deg, #0A192F 0%, #1A3A6E 100%);
  padding: 80px 0;
  min-height: auto;
}

.gradient-overlay-cierre {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(67, 160, 71, 0.1) 0%, transparent 60%);
  pointer-events: none;
}

.audit-contact-card {
  border: 1px solid rgba(77, 183, 227, 0.3) !important;
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

.gap-2 {
  gap: 8px;
}

.z-index-2 {
  z-index: 2;
}
</style>
