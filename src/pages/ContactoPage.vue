<template>
  <div class="bg-background min-vh-100 pb-16">
    <!-- Hero Header -->
    <div class="legal-hero py-16 text-center text-white mb-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <span
              class="text-subtitle-2 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-3 animate-fade-in"
            >
              ¿En qué podemos ayudarte?
            </span>

            <h1 class="text-h3 text-md-h2 font-weight-black mb-4 title-glow animate-slide-up">
              Contacta con Nosotros
            </h1>

            <div class="divider mx-auto mb-6" />

            <p class="text-body-1 text-blue-lighten-4 leading-relaxed max-w-600 mx-auto animate-fade-in-delayed">
              Estamos a tu entera disposición para resolver cualquier duda sobre nuestros sistemas de impresión Brother
              y HP, mantenimiento informático o solicitar un presupuesto sin compromiso.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Main Content Container -->
    <v-container>
      <v-row class="gap-y-6">
        <!-- Columna 1: Formulario de Contacto -->
        <v-col cols="12" md="7">
          <v-card class="rounded-xl border elevation-0 pa-6 pa-md-8 contact-card">
            <div class="d-flex align-center mb-6">
              <v-avatar class="me-4 text-white" color="primary" size="48">
                <v-icon size="24">mdi-email-outline</v-icon>
              </v-avatar>

              <div>
                <h2 class="text-h5 font-weight-bold text-primary">Envíanos un mensaje</h2>

                <p class="text-caption text-grey-darken-1">Te responderemos en un plazo máximo de 24 horas laborables.
                </p>
              </div>
            </div>

            <!-- Transición para cuando el mensaje ha sido enviado con éxito -->
            <v-slide-y-transition hide-on-leave>
              <div v-if="submitted" class="text-center py-10 success-animation">
                <v-avatar class="mb-6 elevation-2 pulse-success" color="success" size="80">
                  <v-icon color="white" size="48">mdi-check-bold</v-icon>
                </v-avatar>

                <h3 class="text-h5 font-weight-bold text-success mb-3">
                  ¡Mensaje enviado con éxito!
                </h3>

                <p class="text-body-1 text-grey-darken-2 max-w-400 mx-auto mb-8">
                  Gracias por ponerte en contacto con IMAX. Hemos recibido tu mensaje y uno de nuestros técnicos se
                  comunicará contigo lo antes posible.
                </p>

                <v-btn class="rounded-lg px-6 font-weight-bold" color="primary" variant="outlined" @click="resetForm">
                  Enviar otro mensaje
                </v-btn>
              </div>

              <!-- Formulario estándar -->
              <v-form v-else ref="contactForm" v-model="isFormValid" @submit.prevent="handleSubmit">
                <v-row>
                  <!-- Campo: Nombre -->
                  <v-col cols="12" sm="6">
                    <div class="input-label mb-1">Nombre completo *</div>

                    <v-text-field
                      v-model="form.name"
                      class="rounded-lg"
                      color="primary"
                      density="comfortable"
                      placeholder="Tu nombre"
                      prepend-inner-icon="mdi-account-outline"
                      required
                      :rules="rules.name"
                      variant="outlined"
                    />
                  </v-col>

                  <!-- Campo: Teléfono -->
                  <v-col cols="12" sm="6">
                    <div class="input-label mb-1">Teléfono de contacto</div>

                    <v-text-field
                      v-model="form.phone"
                      class="rounded-lg"
                      color="primary"
                      density="comfortable"
                      placeholder="Ej. 600 000 000"
                      prepend-inner-icon="mdi-phone-outline"
                      :rules="rules.phone"
                      variant="outlined"
                    />
                  </v-col>

                  <!-- Campo: Email -->
                  <v-col cols="12">
                    <div class="input-label mb-1">Correo electrónico *</div>

                    <v-text-field
                      v-model="form.email"
                      class="rounded-lg"
                      color="primary"
                      density="comfortable"
                      placeholder="ejemplo@correo.com"
                      prepend-inner-icon="mdi-email-outline"
                      required
                      :rules="rules.email"
                      variant="outlined"
                    />
                  </v-col>

                  <!-- Campo: Asunto -->
                  <v-col cols="12">
                    <div class="input-label mb-1">Asunto de la consulta *</div>

                    <v-select
                      v-model="form.subject"
                      class="rounded-lg"
                      color="primary"
                      density="comfortable"
                      :items="subjects"
                      placeholder="Selecciona una opción"
                      prepend-inner-icon="mdi-format-list-bulleted"
                      required
                      :rules="rules.subject"
                      variant="outlined"
                    />
                  </v-col>

                  <!-- Campo: Mensaje -->
                  <v-col cols="12">
                    <div class="input-label mb-1">Tu mensaje *</div>

                    <v-textarea
                      v-model="form.message"
                      class="rounded-lg"
                      color="primary"
                      density="comfortable"
                      placeholder="Describe detalladamente tu consulta, duda o solicitud de presupuesto..."
                      prepend-inner-icon="mdi-message-text-outline"
                      required
                      rows="4"
                      :rules="rules.message"
                      variant="outlined"
                    />
                  </v-col>

                  <!-- Campo: Aceptación de Políticas -->
                  <v-col class="py-0" cols="12">
                    <v-checkbox
                      v-model="form.acceptTerms"
                      color="primary"
                      density="comfortable"
                      required
                      :rules="rules.acceptTerms"
                    >
                      <template #label>
                        <span class="text-body-2 text-grey-darken-3">
                          Acepto la <a
                            class="text-primary text-decoration-underline font-weight-medium"
                            href="/condiciones-ventas"
                            target="_blank"
                          >política de privacidad y protección de datos</a>.
                        </span>
                      </template>
                    </v-checkbox>
                  </v-col>

                  <!-- Botón de Envío -->
                  <v-col class="pt-4" cols="12">
                    <v-btn
                      block
                      class="rounded-lg font-weight-bold py-3 hover-scale text-white elevation-1"
                      color="primary"
                      :disabled="!isFormValid"
                      :loading="loading"
                      size="large"
                      type="submit"
                    >
                      <span>Enviar Mensaje</span>
                      <v-icon class="ms-2" end>mdi-send</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-slide-y-transition>
          </v-card>
        </v-col>

        <!-- Columna 2: Info de Contacto & Mapa -->
        <v-col cols="12" md="5">
          <!-- Tarjeta de canales directos -->
          <v-card class="rounded-xl border elevation-0 pa-6 mb-6 contact-card bg-white">
            <h3 class="text-subtitle-1 font-weight-bold text-primary mb-5 uppercase-tracking">
              Canales de Atención Directa
            </h3>

            <!-- Item: Dirección -->
            <div class="d-flex align-start mb-6 hover-item-group">
              <v-avatar class="me-4 border-avatar" color="primary-lighten-5" size="44">
                <v-icon color="primary">mdi-map-marker-radius-outline</v-icon>
              </v-avatar>

              <div class="flex-grow-1">
                <div class="text-caption font-weight-bold text-grey-darken-1">Dirección</div>

                <div class="text-body-2 font-weight-bold text-grey-darken-4 mb-2">
                  C. de Ardemans, 35, Salamanca, 28028 Madrid
                </div>

                <v-btn
                  class="px-0 font-weight-bold text-none hover-link"
                  color="secondary"
                  density="comfortable"
                  href="https://maps.google.com/?q=Calle+de+Ardemans+35+28028+Madrid"
                  size="small"
                  target="_blank"
                  variant="text"
                >
                  Cómo llegar
                  <v-icon class="ms-1" end size="small">mdi-open-in-new</v-icon>
                </v-btn>
              </div>
            </div>

            <!-- Item: Teléfono -->
            <div class="d-flex align-start mb-6 hover-item-group">
              <v-avatar class="me-4 border-avatar" color="primary-lighten-5" size="44">
                <v-icon color="primary">mdi-phone-in-talk-outline</v-icon>
              </v-avatar>

              <div>
                <div class="text-caption font-weight-bold text-grey-darken-1">Teléfono</div>

                <a
                  class="text-body-1 font-weight-black text-primary text-decoration-none contact-tel"
                  href="tel:+34913090503"
                >
                  91 309 05 03
                </a>

                <div class="text-caption text-grey-darken-1 mt-1">Llamada local directa sin costes adicionales.</div>
              </div>
            </div>

            <!-- Item: Email -->
            <div class="d-flex align-start mb-6 hover-item-group">
              <v-avatar class="me-4 border-avatar" color="primary-lighten-5" size="44">
                <v-icon color="primary">mdi-email-outline</v-icon>
              </v-avatar>

              <div>
                <div class="text-caption font-weight-bold text-grey-darken-1">Correo Electrónico</div>

                <a
                  class="text-body-2 font-weight-bold text-primary text-decoration-none hover-underline"
                  href="mailto:info@imaxpc.com"
                >
                  info@imaxpc.com
                </a>

                <div class="text-caption text-grey-darken-1 mt-1">Atención comercial y técnica general.</div>
              </div>
            </div>

            <!-- Item: Horario -->
            <div class="d-flex align-start hover-item-group">
              <v-avatar class="me-4 border-avatar" color="primary-lighten-5" size="44">
                <v-icon color="primary">mdi-clock-outline</v-icon>
              </v-avatar>

              <div>
                <div class="text-caption font-weight-bold text-grey-darken-1">Horario Comercial</div>
                <div class="text-body-2 font-weight-bold text-grey-darken-4">Lunes a Viernes</div>

                <div class="text-body-2 font-weight-bold text-primary mt-1">
                  9:00h - 14:00h y 16:00h - 19:00h
                </div>
              </div>
            </div>
          </v-card>

          <!-- Tarjeta del Mapa -->
          <v-card class="rounded-xl border elevation-0 pa-4 contact-card bg-white">
            <h3 class="text-subtitle-1 font-weight-bold text-primary mb-3 px-2 uppercase-tracking">
              Ubicación en el mapa
            </h3>

            <div class="map-container overflow-hidden rounded-lg">
              <iframe
                allowfullscreen="true"
                height="320"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.288277259424!2d-3.6738914234407886!3d40.435728654452144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228c2be416ab1%3A0x67dbfd88fe656fa7!2sCalle%20de%20Ardemans%2C%2035%2C%20Salamanca%2C%2028028%20Madrid!5e0!3m2!1ses!2ses!4v1722111111111!5m2!1ses!2ses"
                style="border:0;"
                width="100%"
              />
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'

  // Establecer título de página al montar
  onMounted(() => {
    document.title = 'Contacto | Imax PC'
  })

  // Controladores de estado
  const contactForm = ref()
  const isFormValid = ref(false)
  const loading = ref(false)
  const submitted = ref(false)

  // Opciones de Asunto
  const subjects = [
    'Soporte Técnico Informático',
    'Sistemas de Impresión (Brother / HP)',
    'Solicitud de Presupuesto',
    'Consumibles y Suministros',
    'Información General',
    'Otra consulta',
  ]

  // Modelo del formulario
  const form = ref({
    name: '',
    phone: '',
    email: '',
    subject: null,
    message: '',
    acceptTerms: false,
  })

  // Reglas de Validación
  const rules = {
    name: [
      (v: string) => !!v || 'El nombre es obligatorio',
      (v: string) => v.length >= 3 || 'El nombre debe tener al menos 3 caracteres',
    ],
    phone: [
      (v: string) => !v || /^[0-9\s+-]{9,15}$/.test(v) || 'Formato de teléfono no válido',
    ],
    email: [
      (v: string) => !!v || 'El correo electrónico es obligatorio',
      (v: string) => /.[^\n\r@\u2028\u2029]*@.+\..+/.test(v) || 'Introduce un correo electrónico válido',
    ],
    subject: [
      (v: any) => !!v || 'Selecciona un asunto para tu consulta',
    ],
    message: [
      (v: string) => !!v || 'El mensaje es obligatorio',
      (v: string) => v.length >= 10 || 'El mensaje debe tener al menos 10 caracteres',
    ],
    acceptTerms: [
      (v: boolean) => v === true || 'Debes aceptar la política de privacidad para continuar',
    ],
  }

  // Enviar el formulario
  async function handleSubmit () {
    if (!contactForm.value) return

    const { valid } = await contactForm.value.validate()

    if (valid) {
      loading.value = true
      // Simular llamada a API / Envío de email
      setTimeout(() => {
        loading.value = false
        submitted.value = true
      }, 1500)
    }
  }

  // Resetear el formulario
  function resetForm () {
    submitted.value = false
    form.value = {
      name: '',
      phone: '',
      email: '',
      subject: null,
      message: '',
      acceptTerms: false,
    }
    if (contactForm.value) {
      contactForm.value.resetValidation()
    }
  }
</script>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

/* Hero Section Styles (Coherente con CondicionesVentasPage) */
.legal-hero {
  background: linear-gradient(135deg, #1A3A6E 0%, #1a1c2c 100%);
  position: relative;
  overflow: hidden;
  border-radius: 0 0 24px 24px;
}

.legal-hero::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(77, 183, 227, 0.15) 0%, transparent 60%);
  pointer-events: none;
}

.divider {
  width: 80px;
  height: 4px;
  background-color: #4DB7E3;
  border-radius: 2px;
}

.title-glow {
  text-shadow: 0 2px 10px rgba(77, 183, 227, 0.3);
}

/* Estilos de las Tarjetas */
.contact-card {
  border-color: #E3E6EB !important;
  box-shadow: 0 4px 12px rgba(26, 58, 110, 0.03) !important;
  background-color: #FFFFFF;
}

.border-avatar {
  border: 1px solid rgba(26, 58, 110, 0.1) !important;
}

.bg-primary-lighten-5 {
  background-color: rgba(26, 58, 110, 0.06) !important;
}

/* Etiquetas */
.input-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #2c3e50;
}

/* Iframe del mapa */
.map-container {
  position: relative;
  width: 100%;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
  border: 1px solid #E3E6EB;
}

.map-container iframe {
  display: block;
}

/* Animaciones y Hovers */
.hover-scale {
  transition: all 0.2s ease-in-out;
}

.hover-scale:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(26, 58, 110, 0.2) !important;
}

.hover-link {
  transition: color 0.2s ease;
}

.hover-link:hover {
  color: #1A3A6E !important;
}

.hover-item-group {
  transition: transform 0.2s ease;
}

.hover-item-group:hover {
  transform: translateX(4px);
}

.contact-tel {
  transition: color 0.2s ease;
}

.contact-tel:hover {
  color: #4DB7E3 !important;
}

.hover-underline:hover {
  text-decoration: underline !important;
}

/* Cabecera tracking */
.uppercase-tracking {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.8rem;
}

/* Éxito */
.success-animation {
  animation: fadeIn 0.5s ease-out;
}

.pulse-success {
  box-shadow: 0 0 0 0 rgba(67, 160, 71, 0.4);
  animation: pulse 1.6s infinite cubic-bezier(0.66, 0, 0, 1);
}

@keyframes pulse {
  to {
    box-shadow: 0 0 0 15px rgba(67, 160, 71, 0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animaciones de Hero */
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in-delayed {
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.3s forwards;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.max-w-400 {
  max-width: 400px;
}

.max-w-600 {
  max-width: 600px;
}
</style>
