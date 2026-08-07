<template>
  <div class="microsoft-security-page bg-background min-vh-100 pb-16">
    <!-- 1. HERO PRINCIPAL -->
    <header class="hero-section text-white d-flex align-center position-relative overflow-hidden">
      <div class="gradient-overlay" />
      <div class="tech-grid-background" />

      <v-container class="position-relative z-index-2 py-16">
        <v-row align="center">
          <v-col cols="12" md="7" class="text-left animate-slide-up">
            <div class="premium-tag mb-4">SEGURIDAD Y CUMPLIMIENTO GLOBAL</div>
            <h1 class="text-h2 font-weight-black mb-4 text-gradient leading-tight">
              Seguridad Microsoft 365
            </h1>
            <h2 class="text-h4 font-weight-bold text-secondary mb-6">
              Defender detiene el ataque, Purview protege tus datos
            </h2>
            <p class="text-h6 text-grey-lighten-2 mb-8 leading-relaxed font-weight-regular max-w-650">
              Protege el perímetro digital de tu pyme frente a amenazas de identidad avanzadas y asegura tus archivos más confidenciales frente a fugas accidentales impulsadas por el uso de herramientas de IA.
            </p>
            <div class="d-flex flex-wrap gap-4">
              <v-btn class="cta-primary-glow px-8" color="secondary" size="large" to="/contacto">
                Auditar mi Seguridad
                <v-icon end>mdi-shield-check</v-icon>
              </v-btn>
              <v-btn class="cta-secondary-outline px-8" size="large" variant="outlined" @click="scrollToSection('#conceptos')">
                Ver Escenarios
              </v-btn>
            </div>
          </v-col>

          <v-col cols="12" md="5" class="d-flex justify-center position-relative py-8">
            <!-- Shield Graphic with glowing elements -->
            <div class="security-shield-container">
              <div class="shield-pulse"></div>
              <v-icon class="shield-icon" color="secondary">mdi-shield-lock</v-icon>
              <div class="floating-stat pa-3 text-caption glassmorphism d-flex align-center gap-2" style="top: 15%; right: -5%;">
                <v-icon color="success" size="16">mdi-check-circle</v-icon>
                <span>Zero Trust Activo</span>
              </div>
              <div class="floating-stat pa-3 text-caption glassmorphism d-flex align-center gap-2" style="bottom: 15%; left: -5%;">
                <v-icon color="error" size="16">mdi-alert-circle</v-icon>
                <span>Phishing Bloqueado</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </header>

    <!-- 2. ESTADÍSTICAS E ICEBERG (EL CAMBIO DEL VECTOR DE ATAQUE) -->
    <v-container id="conceptos" class="mt-16">
      <div class="text-center mb-12">
        <span class="text-subtitle-2 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-2">
          LA REALIDAD DE LAS PYMES
        </span>
        <h2 class="text-h3 font-weight-black text-primary mb-4">
          El Vector de Ataque ha Cambiado
        </h2>
        <div class="divider mx-auto mb-4" />
        <p class="text-body-1 text-grey-darken-2 max-w-700 mx-auto">
          Los ataques ya no buscan dañar el ordenador directamente con virus; buscan suplantar la identidad digital del empleado y robar datos corporativos.
        </p>
      </div>

      <!-- Grid de Estadísticas Reales -->
      <v-row class="mb-12">
        <v-col cols="12" md="4">
          <v-card class="stat-card pa-6 text-center rounded-xl border elevation-0">
            <span class="d-block text-h3 font-weight-black text-primary mb-2">80%</span>
            <h4 class="text-subtitle-1 font-weight-bold text-secondary mb-2">Amenazas de Identidad</h4>
            <p class="text-body-2 text-grey-darken-1 mb-0 leading-relaxed">
              De los ataques actuales están dirigidos a comprometer identidades, saltándose las defensas tradicionales de endpoint.
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="stat-card pa-6 text-center rounded-xl border elevation-0">
            <span class="d-block text-h3 font-weight-black text-primary mb-2">75%</span>
            <h4 class="text-subtitle-1 font-weight-bold text-secondary mb-2">Libres de Malware</h4>
            <p class="text-body-2 text-grey-darken-1 mb-0 leading-relaxed">
              De los ciberataques modernos no usan virus tradicionales, sino credenciales legítimas robadas por phishing o ingeniería social.
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="stat-card pa-6 text-center rounded-xl border elevation-0">
            <span class="d-block text-h3 font-weight-black text-primary mb-2">48%</span>
            <h4 class="text-subtitle-1 font-weight-bold text-secondary mb-2">Fuga de Datos por IA</h4>
            <p class="text-body-2 text-grey-darken-1 mb-0 leading-relaxed">
              De los empleados corporativos han subido datos sensibles e información confidencial a herramientas externas de IA.
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- 3. BINOMIO DE SEGURIDAD (CASTELL VS CORONA) -->
    <v-sheet class="bg-grey-lighten-4 py-16 border-y">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6" class="pe-md-10">
            <span class="text-subtitle-2 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-2">
              LA SOLUCIÓN DE SEGURIDAD MÁS ROBUSTA
            </span>
            <h2 class="text-h3 font-weight-black text-primary mb-6 leading-tight">
              Defender + Purview
            </h2>
            <p class="text-body-1 text-grey-darken-2 mb-8 leading-relaxed">
              Para lograr una verdadera protección Zero Trust en la era de la inteligencia artificial, necesitas asegurar tanto la entrada a tus sistemas como los datos almacenados en ellos.
            </p>

            <v-card class="pa-5 mb-5 rounded-xl border elevation-0">
              <div class="d-flex gap-4">
                <div class="icon-box bg-blue-lighten-5 pa-3 rounded-lg">
                  <v-icon color="primary" size="28">mdi-castle</v-icon>
                </div>
                <div>
                  <h4 class="text-h6 font-weight-bold text-primary mb-1">Microsoft Defender</h4>
                  <p class="text-body-2 text-grey-darken-1 mb-0">
                    <strong>Protege las murallas del castillo.</strong> Detiene el ataque perimetral, bloquea los correos de phishing, protege la identidad y analiza la actividad de los endpoints y aplicaciones en la nube en tiempo real.
                  </p>
                </div>
              </div>
            </v-card>

            <v-card class="pa-5 rounded-xl border elevation-0">
              <div class="d-flex gap-4">
                <div class="icon-box bg-cyan-lighten-5 pa-3 rounded-lg">
                  <v-icon color="secondary" size="28">mdi-safe-square-outline</v-icon>
                </div>
                <div>
                  <h4 class="text-h6 font-weight-bold text-primary mb-1">Microsoft Purview</h4>
                  <p class="text-body-2 text-grey-darken-1 mb-0">
                    <strong>Protege las joyas de la corona.</strong> Protege el dato internamente aplicando etiquetas de sensibilidad automáticas, previene la fuga involuntaria y gestiona las políticas de cumplimiento normativo (GDPR).
                  </p>
                </div>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="6" class="text-center">
            <!-- Castle and Crown Jewels graphic using Unsplash -->
            <v-img
              alt="Castillo protegido de datos"
              src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=800&q=80"
              class="rounded-xl border shadow-lg"
              max-height="450"
              cover
            />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- 4. ESCENARIOS REALES: MEJOR JUNTOS -->
    <v-container class="mt-16">
      <div class="text-center mb-12">
        <span class="text-subtitle-2 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-2">
          CASOS PRÁCTICOS DE PROTECCIÓN
        </span>
        <h2 class="text-h3 font-weight-black text-primary mb-4">
          Escenarios: Defender y Purview en Acción
        </h2>
        <div class="divider mx-auto mb-4" />
      </div>

      <v-row>
        <!-- Escenario 1 -->
        <v-col cols="12" md="6" lg="3" class="d-flex">
          <v-card class="scenario-card w-100 pa-5 rounded-xl border elevation-0 d-flex flex-column justify-space-between">
            <div>
              <div class="scenario-num font-weight-bold text-secondary mb-4">01</div>
              <h4 class="text-h6 font-weight-bold text-primary mb-2">Detener robo de datos</h4>
              <p class="text-body-2 text-grey-darken-2 leading-relaxed">
                Si un atacante compromete la cuenta de un empleado e intenta descargar listas financieras o de clientes, Defender detecta la intrusión y Purview bloquea la descarga de datos de inmediato.
              </p>
            </div>
          </v-card>
        </v-col>

        <!-- Escenario 2 -->
        <v-col cols="12" md="6" lg="3" class="d-flex">
          <v-card class="scenario-card w-100 pa-5 rounded-xl border elevation-0 d-flex flex-column justify-space-between">
            <div>
              <div class="scenario-num font-weight-bold text-secondary mb-4">02</div>
              <h4 class="text-h6 font-weight-bold text-primary mb-2">Contención inmediata</h4>
              <p class="text-body-2 text-grey-darken-2 leading-relaxed">
                Si un usuario inicia sesión desde un país sospechoso, Defender marca el riesgo de identidad y Purview bloquea de inmediato la compartición de archivos adjuntos sin esperar a que el equipo de IT actúe.
              </p>
            </div>
          </v-card>
        </v-col>

          <!-- Escenario 3 -->
        <v-col cols="12" md="6" lg="3" class="d-flex">
          <v-card class="scenario-card w-100 pa-5 rounded-xl border elevation-0 d-flex flex-column justify-space-between">
            <div>
              <div class="scenario-num font-weight-bold text-secondary mb-4">03</div>
              <h4 class="text-h6 font-weight-bold text-primary mb-2">Auditoría continua</h4>
              <p class="text-body-2 text-grey-darken-2 leading-relaxed">
                Al detectar una actividad sospechosa, Defender enriquece el evento de seguridad con el contexto del usuario y Purview rastrea cada descarga o acceso a archivos en un registro unificado para auditorías rápidas.
              </p>
            </div>
          </v-card>
        </v-col>

        <!-- Escenario 4 -->
        <v-col cols="12" md="6" lg="3" class="d-flex">
          <v-card class="scenario-card w-100 pa-5 rounded-xl border elevation-0 d-flex flex-column justify-space-between">
            <div>
              <div class="scenario-num font-weight-bold text-secondary mb-4">04</div>
              <h4 class="text-h6 font-weight-bold text-primary mb-2">Seguridad para la IA</h4>
              <p class="text-body-2 text-grey-darken-2 leading-relaxed">
                Defender identifica el uso de herramientas externas de IA no aprobadas, mientras que Purview inspecciona en tiempo real las interacciones bloqueando el copiado de datos sensibles en plataformas públicas.
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- 5. TARIFAS HÉROE DE SEGURIDAD -->
    <v-sheet class="bg-white py-16 mt-16 border-y">
      <v-container>
        <div class="text-center mb-12">
          <span class="text-subtitle-2 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-2">
            PLANES DE PROTECCIÓN PARA PYMES
          </span>
          <h2 class="text-h3 font-weight-black text-primary mb-4">
            Ofertas Hero de Seguridad
          </h2>
          <div class="divider mx-auto mb-4" />
        </div>

        <v-row justify="center" align="stretch">
          <!-- Addon Defender -->
          <v-col cols="12" md="4" class="d-flex">
            <v-card class="pricing-card w-100 pa-6 d-flex flex-column justify-space-between rounded-xl border elevation-1">
              <div>
                <h3 class="text-h5 font-weight-bold text-primary mb-2">Add-ons Defender</h3>
                <p class="text-caption text-grey mb-6">Protección de acceso, endpoints e identidad</p>
                <div class="price-container mb-6">
                  <span class="text-h4 font-weight-black text-primary">10 €</span>
                  <span class="text-caption text-grey"> / usuario / mes</span>
                </div>
                <v-divider class="mb-6" />
                <ul class="pricing-features text-body-2 text-grey-darken-3 ps-4">
                  <li class="mb-2">Protección EDR (antivirus de última generación)</li>
                  <li class="mb-2">Protección avanzada frente a Phishing en el correo</li>
                  <li class="mb-2">Políticas adaptables de Identidad y Condicionales</li>
                  <li class="mb-2">Seguridad en tiempo real para apps en la nube</li>
                </ul>
              </div>
              <v-btn block color="primary" variant="outlined" class="mt-6 rounded-lg font-weight-bold" to="/contacto">
                Solicitar Info
              </v-btn>
            </v-card>
          </v-col>

          <!-- Addon Purview -->
          <v-col cols="12" md="4" class="d-flex">
            <v-card class="pricing-card w-100 pa-6 d-flex flex-column justify-space-between rounded-xl border elevation-1">
              <div>
                <h3 class="text-h5 font-weight-bold text-primary mb-2">Add-ons Purview</h3>
                <p class="text-caption text-grey mb-6">Seguridad del dato y cumplimiento normativo</p>
                <div class="price-container mb-6">
                  <span class="text-h4 font-weight-black text-primary">10 €</span>
                  <span class="text-caption text-grey"> / usuario / mes</span>
                  <div class="promo-pill mt-2">¡PROMO 50% OFF COPILOT!</div>
                </div>
                <v-divider class="mb-6" />
                <ul class="pricing-features text-body-2 text-grey-darken-3 ps-4">
                  <li class="mb-2">Clasificación y etiquetado de datos confidenciales</li>
                  <li class="mb-2">Políticas de prevención de pérdida de datos (DLP)</li>
                  <li class="mb-2">Gobernanza completa del ciclo de vida del dato</li>
                  <li class="mb-2">Informes detallados de cumplimiento legal</li>
                </ul>
              </div>
              <v-btn block color="primary" variant="outlined" class="mt-6 rounded-lg font-weight-bold" to="/contacto">
                Solicitar Info
              </v-btn>
            </v-card>
          </v-col>

          <!-- Bundle (Mejor opción) -->
          <v-col cols="12" md="4" class="d-flex">
            <v-card class="pricing-card w-100 pa-6 d-flex flex-column justify-space-between rounded-xl border border-secondary elevation-3 position-relative">
              <div class="popular-tag">RECOMENDADO</div>
              <div>
                <h3 class="text-h5 font-weight-bold text-primary mb-2">Defender + Purview Bundle</h3>
                <p class="text-caption text-grey mb-6">Protección integral de extremo a extremo</p>
                <div class="price-container mb-6">
                  <span class="text-h4 font-weight-black text-primary">15 €</span>
                  <span class="text-caption text-grey"> / usuario / mes</span>
                  <div class="promo-pill promo-blue mt-2">Ahorra un 25% contratando el bundle</div>
                </div>
                <v-divider class="mb-6" />
                <ul class="pricing-features text-body-2 text-grey-darken-3 ps-4">
                  <li class="mb-2">Todas las funciones de Defender</li>
                  <li class="mb-2">Todas las funciones de Purview</li>
                  <li class="mb-2">Integración de respuesta automática "Mejor Juntos"</li>
                  <li class="mb-2">Auditorías e investigación del dato unificadas</li>
                </ul>
              </div>
              <v-btn block color="secondary" class="mt-6 rounded-lg font-weight-bold text-white elevation-1" to="/contacto">
                Contratar Bundle
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- 6. NIVELES DE MADUREZ DE SERVICIOS IMAX -->
    <v-container class="mt-16">
      <div class="text-center mb-12">
        <span class="text-subtitle-2 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-2">
          MANTENIMIENTO ADMINISTRADO IMAX PC
        </span>
        <h2 class="text-h3 font-weight-black text-primary mb-4">
          Nivel de Madurez de tu Seguridad
        </h2>
        <div class="divider mx-auto mb-4" />
      </div>

      <v-timeline align="start" justify="center">
        <v-timeline-item dot-color="primary" size="small">
          <template #opposite>
            <span class="text-h6 font-weight-bold text-primary">NIVEL 1</span>
          </template>
          <v-card class="pa-4 rounded-xl border elevation-0">
            <h4 class="text-subtitle-1 font-weight-bold text-primary mb-1">Fundación (Mantenimiento Básico)</h4>
            <p class="text-body-2 text-grey-darken-1 mb-0 leading-relaxed">
              Configuración y endurecimiento inicial de la línea base, etiquetas de sensibilidad básicas, monitoreo de antivirus 8x5 e informe mensual de higiene.
            </p>
          </v-card>
        </v-timeline-item>

        <v-timeline-item dot-color="secondary" size="small">
          <template #opposite>
            <span class="text-h6 font-weight-bold text-secondary">NIVEL 2</span>
          </template>
          <v-card class="pa-4 rounded-xl border elevation-0">
            <h4 class="text-subtitle-1 font-weight-bold text-primary mb-1">Operativo (Seguridad Activa)</h4>
            <p class="text-body-2 text-grey-darken-1 mb-0 leading-relaxed">
              Detección y respuesta gestionada ligera, monitoreo de amenazas a identidades de usuarios, gestión de superficies de ataque y políticas DLP de datos en tránsito.
            </p>
          </v-card>
        </v-timeline-item>

        <v-timeline-item dot-color="purple" size="small">
          <template #opposite>
            <span class="text-h6 font-weight-bold text-purple">NIVEL 3</span>
          </template>
          <v-card class="pa-4 rounded-xl border elevation-0">
            <h4 class="text-subtitle-1 font-weight-bold text-primary mb-1">Avanzado (Protección Proactiva)</h4>
            <p class="text-body-2 text-grey-darken-1 mb-0 leading-relaxed">
              Servicio de respuesta a incidentes MDR 24/7, búsqueda proactiva de amenazas (Threat Hunting), optimización de la postura de confianza cero y gobernanza avanzada.
            </p>
          </v-card>
        </v-timeline-item>

        <v-timeline-item dot-color="success" size="small">
          <template #opposite>
            <span class="text-h6 font-weight-bold text-success">NIVEL 4</span>
          </template>
          <v-card class="pa-4 rounded-xl border elevation-0">
            <h4 class="text-subtitle-1 font-weight-bold text-primary mb-1">Estratégico (Habilitación del Negocio)</h4>
            <p class="text-body-2 text-grey-darken-1 mb-0 leading-relaxed">
              Simulación de ciberataques y brechas de seguridad periódicas, preparación de los datos para la IA/Copilot, alineamiento a normativas internacionales y apoyo legal de eDiscovery.
            </p>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>

    <!-- 7. FOOTER CALL TO ACTION -->
    <v-sheet class="call-to-action-section bg-primary text-white py-16 mt-16 position-relative overflow-hidden text-center">
      <div class="cta-overlay" />
      <v-container class="position-relative z-index-2">
        <h2 class="text-h3 font-weight-black mb-4">¿Tu infraestructura está realmente protegida?</h2>
        <p class="text-h6 font-weight-regular text-grey-lighten-2 max-w-650 mx-auto mb-8 leading-relaxed">
          Las pymes sufren más del 50% de los incidentes reales de ciberseguridad cada año. No te conviertas en una estadística. Permítenos realizar una auditoría de seguridad de tu inquilino de Microsoft 365.
        </p>
        <v-btn class="cta-secondary-glow px-10 py-3" color="secondary" size="x-large" to="/contacto">
          Solicitar Auditoría de Seguridad Gratis
          <v-icon end size="20">mdi-shield-check</v-icon>
        </v-btn>
      </v-container>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'

  onMounted(() => {
    document.title = 'Seguridad y Cumplimiento Microsoft 365 | Imax PC'
  })

  function scrollToSection (selector: string) {
    const el = document.querySelector(selector)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
</script>

<script lang="ts">
  export default {
    name: 'MicrosoftSecurityPage',
  }
</script>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

.max-w-650 {
  max-width: 650px;
}

.max-w-700 {
  max-width: 700px;
}

.z-index-2 {
  z-index: 2;
}

.gap-4 {
  gap: 16px;
}

.gap-2 {
  gap: 8px;
}

.divider {
  width: 60px;
  height: 4px;
  background-color: #4DB7E3;
  border-radius: 2px;
}

/* Hero Styles */
.hero-section {
  min-height: 70vh;
  background: linear-gradient(135deg, #0A192F 0%, #1A3A6E 100%);
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 80% 20%, rgba(77, 183, 227, 0.18) 0%, transparent 60%);
  pointer-events: none;
}

.tech-grid-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 35px 35px;
  pointer-events: none;
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

.text-gradient {
  background: linear-gradient(135deg, #FFFFFF 0%, #4DB7E3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta-primary-glow {
  box-shadow: 0 4px 20px rgba(77, 183, 227, 0.4);
  transition: transform 0.2s, box-shadow 0.2s !important;
}

.cta-primary-glow:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(77, 183, 227, 0.6);
}

.cta-secondary-outline {
  border-color: rgba(255, 255, 255, 0.3) !important;
  color: white !important;
  transition: all 0.2s;
}

.cta-secondary-outline:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: white !important;
}

/* Shield Animation */
.security-shield-container {
  width: 250px;
  height: 250px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.shield-icon {
  font-size: 150px !important;
  z-index: 2;
  filter: drop-shadow(0 0 20px rgba(77, 183, 227, 0.3));
}

.shield-pulse {
  position: absolute;
  width: 180px;
  height: 200px;
  background-color: rgba(77, 183, 227, 0.1);
  border-radius: 50%;
  filter: blur(25px);
  animation: pulse-glow-shield 3s infinite ease-in-out;
  z-index: 1;
}

@keyframes pulse-glow-shield {
  0%, 100% {
    transform: scale(0.9);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.9;
  }
}

.floating-stat {
  position: absolute;
  border-radius: 8px;
  z-index: 10;
  pointer-events: none;
  font-weight: 700;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12) !important;
}

.glassmorphism {
  background: rgba(255, 255, 255, 0.08) !important;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

/* Stat Cards */
.stat-card {
  border-color: #E3E6EB !important;
  background-color: #FFFFFF;
  transition: transform 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.05) !important;
}

.icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 55px;
  width: 55px;
}

/* Scenarios */
.scenario-card {
  border-color: #E3E6EB !important;
  background-color: #FFFFFF;
  transition: transform 0.3s, border-color 0.3s;
}

.scenario-card:hover {
  transform: translateY(-6px);
  border-color: #4DB7E3 !important;
  box-shadow: 0 12px 24px rgba(26, 58, 110, 0.05) !important;
}

.scenario-num {
  font-size: 2rem;
  line-height: 1;
}

/* Pricing Cards */
.pricing-card {
  border-color: #E3E6EB !important;
  transition: transform 0.3s, box-shadow 0.3s;
}

.pricing-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(26, 58, 110, 0.08) !important;
}

.popular-tag {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4DB7E3;
  color: #1A3A6E;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 4px 16px;
  border-radius: 20px;
  letter-spacing: 1.5px;
  box-shadow: 0 4px 10px rgba(77, 183, 227, 0.3);
}

.promo-pill {
  display: inline-block;
  padding: 4px 12px;
  background-color: rgba(67, 160, 71, 0.1);
  color: #43A047;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 20px;
  border: 1px solid rgba(67, 160, 71, 0.2);
}

.promo-blue {
  background-color: rgba(77, 183, 227, 0.1);
  color: #4DB7E3;
  border: 1px solid rgba(77, 183, 227, 0.2);
}

.pricing-features {
  list-style-type: none;
}

.pricing-features li {
  position: relative;
}

.pricing-features li::before {
  content: "✓";
  color: #4DB7E3;
  font-weight: bold;
  position: absolute;
  left: -18px;
}

/* Call to action */
.call-to-action-section {
  background: linear-gradient(135deg, #1A3A6E 0%, #0A192F 100%) !important;
}

.cta-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(77, 183, 227, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.cta-secondary-glow {
  box-shadow: 0 4px 25px rgba(77, 183, 227, 0.4);
  font-weight: bold !important;
  transition: transform 0.2s, box-shadow 0.2s !important;
}

.cta-secondary-glow:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(77, 183, 227, 0.6);
}
</style>
