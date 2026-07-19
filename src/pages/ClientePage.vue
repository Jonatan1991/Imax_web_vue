<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

// --- SECCIÓN 6: QUÉ PROTEGEMOS (Interactive Node Selection) ---
const selectedProtectedNode = ref<number | null>(null)
const protectedNodes = ref([
  { id: 1, name: 'Ordenadores', icon: 'mdi-monitor', cx: 150, cy: 100, desc: 'Equipos de escritorio optimizados con limpiezas automáticas de archivos temporales, auditorías de hardware y antivirus corporativo siempre activo.' },
  { id: 2, name: 'Portátiles', icon: 'mdi-laptop', cx: 350, cy: 80, desc: 'Mantenimiento preventivo móvil, configuración de ahorro de batería, seguridad en redes WiFi públicas y soporte remoto en cualquier lugar.' },
  { id: 3, name: 'Servidores', icon: 'mdi-server', cx: 550, cy: 110, desc: 'Monitoreo continuo de servicios críticos, temperatura, carga de CPU/RAM y gestión preventiva de parches del sistema operativo.' },
  { id: 4, name: 'NAS', icon: 'mdi-database', cx: 700, cy: 160, desc: 'Supervisión de cabinas de discos, gestión de cuotas de almacenamiento, arreglos RAID óptimos y copias de seguridad cruzadas.' },
  { id: 5, name: 'Redes', icon: 'mdi-lan', cx: 780, cy: 260, desc: 'Configuración y mantenimiento de cableado, switches gestionados, segmentación por VLANs y optimización de ancho de banda.' },
  { id: 6, name: 'WiFi', icon: 'mdi-wifi', cx: 750, cy: 370, desc: 'Puntos de acceso corporativos, gestión de red de invitados separada, control de canales radio y seguridad WPA3.' },
  { id: 7, name: 'Routers', icon: 'mdi-router-wireless', cx: 620, cy: 450, desc: 'Mapeo de puertos, enrutamiento inteligente, balanceo de carga entre múltiples líneas de Internet y control de accesos.' },
  { id: 8, name: 'Firewall', icon: 'mdi-shield-lock', cx: 450, cy: 480, desc: 'Seguridad perimetral contra intrusiones, control de aplicaciones web, túneles VPN encriptados para teletrabajo y filtrado de contenidos.' },
  { id: 9, name: 'Copias de Seguridad', icon: 'mdi-cloud-upload', cx: 280, cy: 470, desc: 'Copias diarias redundantes (híbridas local y nube) con encriptación avanzada y test periódico de restauración del 100% de datos.' },
  { id: 10, name: 'Antivirus', icon: 'mdi-shield-check', cx: 120, cy: 430, desc: 'Ecosistema de ciberseguridad gestionada de última generación (EDR) con bloqueo en tiempo real de virus y ransomware.' },
  { id: 11, name: 'Microsoft 365', icon: 'mdi-microsoft', cx: 80, cy: 320, desc: 'Gestión de suscripciones, cuentas de correo Exchange, almacenamiento OneDrive/SharePoint seguro y políticas de retención.' },
  { id: 12, name: 'Apps Empresariales', icon: 'mdi-application-cog', cx: 90, cy: 210, desc: 'Soporte y optimización en bases de datos locales, ERP, CRM, software contable y cualquier aplicación crítica para tu negocio.' },
])

// --- SECCIÓN 10: INDICADORES DE CALIDAD (Animated Counters) ---
const metrics = ref([
  { label: 'Tiempo de respuesta', value: 15, suffix: ' minutos', currentValue: 0, decimals: 0, desc: 'Tiempo máximo garantizado para incidencias urgentes.' },
  { label: 'Resolución media', value: 2, suffix: ' horas', currentValue: 0, decimals: 0, desc: 'Resolución del 90% de problemas cotidianos.' },
  { label: 'Uptime del sistema', value: 99.9, suffix: '%', currentValue: 0, decimals: 1, desc: 'Disponibilidad operativa de la infraestructura del cliente.' },
  { label: 'Incidencias evitadas', value: 450, suffix: '+ / año', currentValue: 0, decimals: 0, desc: 'Acciones preventivas automatizadas en segundo plano.' },
  { label: 'Copias de seguridad', value: 100, suffix: '%', currentValue: 0, decimals: 0, desc: 'Copias verificadas y listas para su restauración diaria.' },
  { label: 'Equipos actualizados', value: 100, suffix: '%', currentValue: 0, decimals: 0, desc: 'Parches de seguridad críticos instalados al instante.' },
  { label: 'Nivel de satisfacción', value: 98, suffix: '%', currentValue: 0, decimals: 0, desc: 'Valoración media reportada por nuestros clientes abonados.' },
])

let countersAnimated = false

function animateCounters() {
  if (countersAnimated) return
  countersAnimated = true

  for (const metric of metrics.value) {
    const start = 0
    const end = metric.value
    const duration = 2000 // ms
    const startTime = performance.now()

    const update = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease Out Quad
      const ease = progress * (2 - progress)
      metric.currentValue = Number((start + (end - start) * ease).toFixed(metric.decimals))

      if (progress < 1) {
        requestAnimationFrame(update)
      } else {
        metric.currentValue = end
      }
    }
    requestAnimationFrame(update)
  }
}

// --- FORMULARIO DE AUDITORÍA GRATUITA ---
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

function submitAuditForm() {
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

// --- CONTROL DE VISTA PREVIA (SIMULACIÓN ANTES/DESPUÉS) ---
const solutionActive = ref(false)

// --- DETECTAR SCROLL PARA ACTIVAR CONTADORES ---
function checkCountersScroll() {
  const el = document.getElementById('section-indicadores')
  if (el) {
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      animateCounters()
      window.removeEventListener('scroll', checkCountersScroll)
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkCountersScroll, { passive: true })
  checkCountersScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkCountersScroll)
})

function scrollToAudit() {
  const el = document.querySelector('#section-cierre')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="mantenimiento-premium-page">
    <!-- 1. HERO PRINCIPAL -->
    <header class="hero-section text-white d-flex align-center position-relative overflow-hidden">
      <!-- Fondo tecnológico animado con partículas/líneas de código -->
      <div class="gradient-overlay" />
      <div class="tech-grid-background" />

      <v-container class="position-relative z-index-2">
        <v-row align="center" justify="space-between">
          <v-col class="text-left py-8" cols="12" md="6">
            <div class="premium-tag mb-4">SERVICIO DE MANTENIMIENTO CORPORATIVO</div>

            <h1 class="text-h2 font-weight-black mb-4 text-gradient">
              Mantenimiento Informático Profesional
            </h1>

            <p class="text-h5 font-weight-regular text-light-blue-grey-2 mb-8 leading-relaxed">
              Cuidamos la tecnología de tu empresa para que tú solo tengas que preocuparte por hacer crecer tu negocio.
            </p>

            <div class="d-flex flex-wrap gap-4">
              <v-btn class="cta-primary-glow px-8" color="secondary" size="large" @click="scrollToAudit">
                Solicita una auditoría gratuita
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>

              <v-btn class="cta-secondary-outline px-8" size="large" variant="outlined" @click="scrollToAudit">
                Ver planes de servicio
              </v-btn>
            </div>

            <div class="hero-stats-row mt-12 d-flex gap-8">
              <div class="hero-stat-item">
                <span class="d-block text-h4 font-weight-bold text-secondary">24/7</span>
                <span class="text-caption text-grey-lighten-1">Monitorización continua</span>
              </div>

              <div class="hero-stat-item">
                <span class="d-block text-h4 font-weight-bold text-success">&lt;15m</span>
                <span class="text-caption text-grey-lighten-1">Tiempo de respuesta</span>
              </div>

              <div class="hero-stat-item">
                <span class="d-block text-h4 font-weight-bold text-white">99.9%</span>
                <span class="text-caption text-grey-lighten-1">Continuidad operativa</span>
              </div>
            </div>
          </v-col>

          <v-col class="py-8 d-flex justify-center position-relative" cols="12" md="6">
            <!-- SVG Animado de red interconectada -->
            <div class="hero-network-svg-container">
              <svg class="network-svg" viewBox="0 0 500 500">
                <!-- Conexiones principales (líneas) -->
                <path d="M 250 250 L 100 120" stroke="rgba(77, 183, 227, 0.4)" stroke-dasharray="8 4"
                  stroke-width="2" />
                <path d="M 250 250 L 400 120" stroke="rgba(77, 183, 227, 0.4)" stroke-dasharray="8 4"
                  stroke-width="2" />
                <path d="M 250 250 L 400 380" stroke="rgba(77, 183, 227, 0.4)" stroke-dasharray="8 4"
                  stroke-width="2" />
                <path d="M 250 250 L 100 380" stroke="rgba(77, 183, 227, 0.4)" stroke-dasharray="8 4"
                  stroke-width="2" />
                <path d="M 100 120 L 400 120" stroke="rgba(77, 183, 227, 0.2)" stroke-width="1.5" />
                <path d="M 400 120 L 400 380" stroke="rgba(77, 183, 227, 0.2)" stroke-width="1.5" />
                <path d="M 400 380 L 100 380" stroke="rgba(77, 183, 227, 0.2)" stroke-width="1.5" />
                <path d="M 100 380 L 100 120" stroke="rgba(77, 183, 227, 0.2)" stroke-width="1.5" />

                <!-- Flujo de datos animado -->
                <circle class="data-pulse-circle" fill="#4DB7E3" r="4">
                  <animateMotion dur="4s" path="M 250 250 L 100 120" repeatCount="indefinite" />
                </circle>

                <circle class="data-pulse-circle" fill="#4DB7E3" r="4">
                  <animateMotion dur="5s" path="M 250 250 L 400 120" repeatCount="indefinite" />
                </circle>

                <circle class="data-pulse-circle" fill="#4DB7E3" r="4">
                  <animateMotion dur="4.5s" path="M 250 250 L 400 380" repeatCount="indefinite" />
                </circle>

                <circle class="data-pulse-circle" fill="#4DB7E3" r="4">
                  <animateMotion dur="3.5s" path="M 250 250 L 100 380" repeatCount="indefinite" />
                </circle>

                <!-- Nodo Central (IMAX Servidor) -->
                <g class="network-node central-node">
                  <circle cx="250" cy="250" fill="#1A3A6E" r="45" stroke="#4DB7E3" stroke-width="3" />

                  <circle class="pulsing-ring" cx="250" cy="250" fill="none" r="55" stroke="#4DB7E3" stroke-width="1" />

                  <foreignObject height="50" width="50" x="225" y="225">
                    <div class="node-icon-wrapper"><v-icon color="secondary" size="30">mdi-server</v-icon></div>
                  </foreignObject>
                </g>

                <!-- Nodos Periféricos -->
                <!-- 1. Seguridad (Firewall) -->
                <g class="network-node">
                  <circle cx="100" cy="120" fill="#111827" r="30" stroke="#4DB7E3" stroke-width="2" />

                  <foreignObject height="30" width="30" x="85" y="105">
                    <div class="node-icon-wrapper"><v-icon color="secondary" size="18">mdi-shield-lock</v-icon></div>
                  </foreignObject>

                  <text fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle" x="100" y="80">Seguridad
                    EDR</text>
                </g>

                <!-- 2. Equipos (Pc) -->
                <g class="network-node">
                  <circle cx="400" cy="120" fill="#111827" r="30" stroke="#4DB7E3" stroke-width="2" />

                  <foreignObject height="30" width="30" x="385" y="105">
                    <div class="node-icon-wrapper"><v-icon color="secondary" size="18">mdi-monitor</v-icon></div>
                  </foreignObject>

                  <text fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle" x="400"
                    y="80">Sistemas</text>
                </g>

                <!-- 3. Backup (Cloud) -->
                <g class="network-node">
                  <circle cx="400" cy="380" fill="#111827" r="30" stroke="#4DB7E3" stroke-width="2" />

                  <foreignObject height="30" width="30" x="385" y="365">
                    <div class="node-icon-wrapper"><v-icon color="secondary" size="18">mdi-cloud-upload</v-icon></div>
                  </foreignObject>

                  <text fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle" x="400" y="425">Copias
                    Nube</text>
                </g>

                <!-- 4. Comunicaciones (Red/Wifi) -->
                <g class="network-node">
                  <circle cx="100" cy="380" fill="#111827" r="30" stroke="#4DB7E3" stroke-width="2" />

                  <foreignObject height="30" width="30" x="85" y="365">
                    <div class="node-icon-wrapper"><v-icon color="secondary" size="18">mdi-wifi</v-icon></div>
                  </foreignObject>

                  <text fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle" x="100" y="425">Redes &
                    WiFi</text>
                </g>
              </svg>

              <!-- Monitorización simulada flotante -->
              <div class="floating-panel pa-3 text-caption glassmorphism d-flex align-center gap-2"
                style="top: 20%; right: 5%;">
                <div class="status-pulse-green" />

                <div>
                  <strong>Servidor Principal</strong><br>
                  <span class="text-grey-lighten-1">CPU: 14% | Temp: 42°C</span>
                </div>
              </div>

              <div class="floating-panel pa-3 text-caption glassmorphism d-flex align-center gap-2"
                style="bottom: 25%; left: 5%;">
                <div class="status-pulse-green" />

                <div>
                  <strong>Copia de Seguridad</strong><br>
                  <span class="text-grey-lighten-1">Backup completado con éxito</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </header>

    <!-- 2 & 3. TRANSICIÓN: EL PROBLEMA Y LA SOLUCIÓN -->
    <section class="split-narrative-section py-16 position-relative" :class="{ 'solution-mode': solutionActive }">
      <v-container>
        <div class="text-center mb-12">
          <div class="section-subtitle">ESCENARIOS TECNOLÓGICOS</div>

          <h2 class="text-h3 font-weight-bold mb-4 header-text">
            ¿Cómo gestiona tu empresa la informática?
          </h2>

          <p class="text-body-1 mx-auto max-width-700">
            Compara las consecuencias de trabajar sin soporte informático preventivo frente a la tranquilidad de contar
            con nuestro servicio premium.
          </p>

          <!-- Selector manual del estado (Simulando scroll) -->
          <div class="d-flex justify-center mt-6">
            <v-btn-toggle v-model="solutionActive" class="rounded-pill overflow-hidden shadow-sm" color="primary"
              mandatory variant="outlined">
              <v-btn class="px-6" :value="false">El Escenario Crítico</v-btn>
              <v-btn class="px-6" :value="true">La Solución IMAX</v-btn>
            </v-btn-toggle>
          </div>
        </div>

        <v-window v-model="solutionActive" class="overflow-visible py-4">
          <!-- Pestaña 1: El Problema -->
          <v-window-item :value="false">
            <v-row>
              <v-col v-for="(prob, i) in [
                { title: 'Equipos lentos', desc: 'Pérdida de rendimiento diario de los empleados debido a archivos basura, falta de optimización y hardware obsoleto.', icon: 'mdi-speedometer-slow' },
                { title: 'Averías inesperadas', desc: 'Fallos de hardware que detienen la actividad de la oficina por completo sin aviso previo.', icon: 'mdi-alert-octagon-outline' },
                { title: 'Virus y Ciberataques', desc: 'Pérdidas económicas severas e interrupción de la reputación digital por malware o phishing.', icon: 'mdi-virus' },
                { title: 'Pérdida de información', desc: 'Falta de backups diarios comprobados que imposibilita recuperar datos en caso de robo o rotura.', icon: 'mdi-database-remove' },
                { title: 'Empleados parados', desc: 'Personal esperando soporte durante horas por incidencias simples que podrían resolverse al instante.', icon: 'mdi-account-clock-outline' },
                { title: 'Reparaciones costosas', desc: 'Tarifas abusivas por servicios urgentes cuando ocurre un problema imprevisto grave.', icon: 'mdi-cash-remove' },
              ]" :key="i" cols="12" md="4">
                <v-card class="problem-card border-left-danger pa-6 elevation-1">
                  <div class="d-flex align-center gap-4 mb-4">
                    <div class="problem-icon-wrapper rounded-circle">
                      <v-icon color="error" size="28">{{ prob.icon }}</v-icon>
                    </div>

                    <h3 class="text-h6 font-weight-bold text-grey-darken-3">{{ prob.title }}</h3>
                  </div>

                  <p class="text-body-2 text-grey-darken-1 leading-relaxed">{{ prob.desc }}</p>
                </v-card>
              </v-col>
            </v-row>

            <div class="problem-footer-note text-center mt-10 rounded-lg pa-5">
              <v-icon class="mr-2" color="error">mdi-alert-circle</v-icon>
              <strong>Consecuencia:</strong> Pérdida de productividad, estrés del equipo y costes de reparación
              descontrolados.
            </div>
          </v-window-item>

          <!-- Pestaña 2: La Solución -->
          <v-window-item :value="true">
            <div class="solution-container">
              <v-row class="align-center">
                <v-col class="py-4" cols="12" md="5">
                  <div class="premium-tag bg-success-lighten-4 text-success mb-4">TRANQUILIDAD ABSOLUTA</div>

                  <h3 class="text-h4 font-weight-bold mb-4 text-primary">
                    Estabilidad e Infraestructura Impecable
                  </h3>

                  <p class="text-body-1 text-grey-darken-2 mb-6 leading-relaxed">
                    Nuestro servicio de mantenimiento mantiene toda tu infraestructura funcionando de forma segura,
                    rápida y estable. Dejamos atrás las emergencias y las facturas sorpresa.
                  </p>

                  <ul class="solution-checklist pl-0 mb-8">
                    <li class="d-flex align-center gap-3 mb-3">
                      <v-icon color="success">mdi-check-circle</v-icon>
                      <span class="text-body-2 font-weight-semibold">Monitorización activa 24 horas al día</span>
                    </li>

                    <li class="d-flex align-center gap-3 mb-3">
                      <v-icon color="success">mdi-check-circle</v-icon>
                      <span class="text-body-2 font-weight-semibold">Copias de seguridad automáticas y testeadas</span>
                    </li>

                    <li class="d-flex align-center gap-3 mb-3">
                      <v-icon color="success">mdi-check-circle</v-icon>
                      <span class="text-body-2 font-weight-semibold">Actualizaciones y parches de seguridad al
                        día</span>
                    </li>

                    <li class="d-flex align-center gap-3 mb-3">
                      <v-icon color="success">mdi-check-circle</v-icon>
                      <span class="text-body-2 font-weight-semibold">Soporte rápido en menos de 15 minutos</span>
                    </li>
                  </ul>

                  <v-btn class="px-8 shadow-sm" color="primary" size="large" @click="scrollToAudit">
                    Quiero esta solución
                  </v-btn>
                </v-col>

                <v-col class="py-4 position-relative" cols="12" md="7">
                  <!-- Dashboard de Simulación del Mantenimiento Exitoso -->
                  <v-card class="solution-preview-card pa-6 glassmorphism elevation-4">
                    <div class="d-flex align-center justify-space-between mb-6 pb-4 border-bottom">
                      <div class="d-flex align-center gap-2">
                        <div class="status-pulse-green" />
                        <span class="font-weight-bold text-caption text-uppercase tracking-wider">Centro de Control
                          IMAX</span>
                      </div>

                      <v-chip color="success" size="small" variant="flat">SISTEMAS SEGUROS</v-chip>
                    </div>

                    <v-row>
                      <v-col v-for="(stat, idx) in [
                        { label: 'Rendimiento general', val: '98%', color: 'success', icon: 'mdi-speedometer' },
                        { label: 'Amenazas bloqueadas', val: '12 esta semana', color: 'info', icon: 'mdi-shield-check' },
                        { label: 'Disponibilidad de Red', val: '99.98%', color: 'success', icon: 'mdi-lan-connect' },
                        { label: 'Copias de Seguridad', val: 'Completas y Verificadas', color: 'success', icon: 'mdi-backup-restore' },
                      ]" :key="idx" cols="12" sm="6">
                        <v-card class="pa-4 d-flex align-center gap-3 rounded-lg border-grey-lighten-2"
                          variant="outlined">
                          <v-icon :color="stat.color" size="28">{{ stat.icon }}</v-icon>

                          <div>
                            <span class="text-caption text-grey-darken-1 d-block">{{ stat.label }}</span>
                            <span class="font-weight-bold text-subtitle-1">{{ stat.val }}</span>
                          </div>
                        </v-card>
                      </v-col>
                    </v-row>

                    <!-- Línea de estado simulada -->
                    <div class="mt-6 pa-4 rounded-lg bg-grey-lighten-4">
                      <div class="d-flex align-center justify-space-between mb-2">
                        <span class="text-caption font-weight-bold text-grey-darken-2">Uso de disco y
                          temperaturas</span>
                        <span class="text-caption text-success font-weight-bold">ESTABLE</span>
                      </div>

                      <v-progress-linear color="success" height="8" model-value="38" rounded />
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-window-item>
        </v-window>
      </v-container>
    </section>

    <!-- 4. LOS TRES PILARES -->
    <section class="section-pilares py-16 bg-light-gray">
      <v-container>
        <div class="text-center mb-16">
          <div class="section-subtitle">CÓMO TRABAJAMOS</div>

          <h2 class="text-h3 font-weight-bold mb-4 header-text">
            Los Tres Pilares de Nuestro Servicio
          </h2>

          <p class="text-body-1 mx-auto max-width-700">
            Nuestra propuesta de valor se apoya en tres enfoques complementarios para ofrecer la máxima estabilidad
            tecnológica a tu empresa.
          </p>
        </div>

        <v-row class="align-stretch">
          <!-- Pilar 1: Preventivo -->
          <v-col class="d-flex" cols="12" md="4">
            <v-card class="pilar-card w-100 pa-6 d-flex flex-column justify-space-between elevation-3 rounded-xl">
              <div>
                <div class="pilar-icon-container bg-blue-lighten-5 mb-6">
                  <v-icon color="primary" size="32">mdi-shield-search</v-icon>
                </div>

                <h3 class="text-h5 font-weight-bold mb-3 text-primary">Mantenimiento Preventivo</h3>

                <p class="text-body-2 text-grey-darken-1 mb-6 leading-relaxed">
                  Evitamos las averías y fallos de sistema antes de que ocurran mediante auditorías recurrentes y
                  optimización proactiva.
                </p>

                <div class="checklist-items">
                  <div
                    v-for="item in ['Limpieza de ficheros basura', 'Instalación de actualizaciones', 'Optimización de sistemas', 'Revisión periódica de hardware', 'Configuración de seguridad', 'Comprobaciones programadas']"
                    :key="item" class="d-flex align-center gap-2 mb-2">
                    <v-icon color="secondary" size="18">mdi-check-bold</v-icon>
                    <span class="text-caption text-grey-darken-2 font-weight-semibold">{{ item }}</span>
                  </div>
                </div>
              </div>

              <div class="pilar-footer mt-6 pt-4 border-top">
                <span class="text-caption text-grey font-weight-bold text-uppercase">Objetivo: Cero Paradas</span>
              </div>
            </v-card>
          </v-col>

          <!-- Pilar 2: Correctivo -->
          <v-col class="d-flex" cols="12" md="4">
            <v-card class="pilar-card w-100 pa-6 d-flex flex-column justify-space-between elevation-3 rounded-xl">
              <div>
                <div class="pilar-icon-container bg-red-lighten-5 mb-6">
                  <v-icon color="error" size="32">mdi-wrench</v-icon>
                </div>

                <h3 class="text-h5 font-weight-bold mb-3 text-primary">Mantenimiento Correctivo</h3>

                <p class="text-body-2 text-grey-darken-1 mb-6 leading-relaxed">
                  Cuando se produce una incidencia inesperada, actuamos de forma inmediata para restaurar el
                  funcionamiento en tiempo récord.
                </p>

                <div class="checklist-items">
                  <div
                    v-for="item in ['Reparación y cambio de piezas', 'Recuperación ante desastres', 'Sustitución rápida de equipos', 'Eliminación de virus y malware', 'Reconfiguración y puesta a punto', 'Soporte de urgencia telefónico/remoto']"
                    :key="item" class="d-flex align-center gap-2 mb-2">
                    <v-icon color="error" size="18">mdi-wrench-clock</v-icon>
                    <span class="text-caption text-grey-darken-2 font-weight-semibold">{{ item }}</span>
                  </div>
                </div>

                <!-- Simulación animada de herramientas en marcha -->
                <div class="d-flex justify-center mt-6">
                  <div class="tools-animation-wrapper">
                    <svg height="60" viewBox="0 0 100 100" width="60">
                      <!-- Engranaje 1 -->
                      <g class="gear-animated">
                        <circle cx="50" cy="50" fill="none" r="15" stroke="#4DB7E3" stroke-dasharray="6 3"
                          stroke-width="4" />

                        <circle cx="50" cy="50" fill="#1A3A6E" r="7" />
                      </g>
                      <!-- Engranaje 2 -->
                      <g class="gear-animated-reverse">
                        <circle cx="72" cy="72" fill="none" r="10" stroke="#43A047" stroke-dasharray="4 2"
                          stroke-width="3" />

                        <circle cx="72" cy="72" fill="#1A3A6E" r="4" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              <div class="pilar-footer mt-6 pt-4 border-top">
                <span class="text-caption text-grey font-weight-bold text-uppercase">Garantía: Respuesta en &lt; 15
                  min</span>
              </div>
            </v-card>
          </v-col>

          <!-- Pilar 3: Predictivo -->
          <v-col class="d-flex" cols="12" md="4">
            <v-card class="pilar-card w-100 pa-6 d-flex flex-column justify-space-between elevation-3 rounded-xl">
              <div>
                <div class="pilar-icon-container bg-green-lighten-5 mb-6">
                  <v-icon color="success" size="32">mdi-chart-timeline-variant</v-icon>
                </div>

                <h3 class="text-h5 font-weight-bold mb-3 text-primary">Mantenimiento Predictivo</h3>

                <p class="text-body-2 text-grey-darken-1 mb-6 leading-relaxed">
                  Monitorizamos tu red e infraestructura en tiempo real. Predecimos y detectamos los problemas antes de
                  que se traduzcan en averías.
                </p>

                <!-- Animación gráfica en tiempo real -->
                <div class="predictive-monitor-box pa-4 rounded-lg mb-6">
                  <div class="d-flex align-center justify-space-between mb-2">
                    <span class="text-caption font-weight-bold text-grey-darken-3">Monitorización Smart</span>

                    <span class="text-caption text-success font-weight-bold">
                      <v-icon color="success" size="x-small">mdi-circle</v-icon> Activo
                    </span>
                  </div>
                  <!-- Simulación de gráfica de estado -->
                  <svg class="monitor-line-chart" viewBox="0 0 200 60">
                    <path class="drawing-path" d="M 0 45 Q 30 20 60 40 T 120 15 T 180 30 L 200 25" fill="none"
                      stroke="#43A047" stroke-width="2" />
                    <!-- Puntos de control -->
                    <circle cx="60" cy="40" fill="#43A047" r="3" />
                    <circle cx="120" cy="15" fill="#43A047" r="3" />
                    <circle cx="180" cy="30" fill="#43A047" r="3" />
                  </svg>

                  <div class="d-flex justify-space-between text-caption mt-2 text-grey-darken-1">
                    <span>Temp: 39°C</span>
                    <span>Discos: Salud 99%</span>
                    <span>Red: Estable</span>
                  </div>
                </div>

                <div class="checklist-items">
                  <div
                    v-for="item in ['Sensores de estado de discos', 'Control de temperaturas críticas', 'Alertas automáticas preventivas', 'Monitorización de RAM y CPU', 'Detección temprana de anomalías']"
                    :key="item" class="d-flex align-center gap-2 mb-2">
                    <v-icon color="success" size="18">mdi-bell-ring-outline</v-icon>
                    <span class="text-caption text-grey-darken-2 font-weight-semibold">{{ item }}</span>
                  </div>
                </div>
              </div>

              <div class="pilar-footer mt-6 pt-4 border-top">
                <span class="text-caption text-grey font-weight-bold text-uppercase">Objetivo: Anticipación Total</span>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- 5. NUESTRO PROCEDIMIENTO -->
    <section class="section-procedimiento py-16">
      <v-container>
        <div class="text-center mb-16">
          <div class="section-subtitle">PASO A PASO</div>

          <h2 class="text-h3 font-weight-bold mb-4 header-text">
            Nuestro Procedimiento de Trabajo
          </h2>

          <p class="text-body-1 mx-auto max-width-700">
            Diseñamos un onboarding seguro y estructurado para integrar los equipos de tu empresa en nuestro ecosistema
            de mantenimiento sin alterar tu ritmo diario.
          </p>
        </div>

        <div class="timeline-container position-relative py-8">
          <!-- Línea vertical central en escritorio, lateral en móvil -->
          <div class="timeline-line" />

          <!-- Pasos de la Línea de Tiempo -->
          <div v-for="(step, index) in [
            { title: 'Inventario Completo de Equipos', desc: 'Realizamos un mapa detallado de toda tu infraestructura: hardware, versiones de sistemas, licencias y estado físico de la red para un control riguroso.', icon: 'mdi-clipboard-list-outline', number: '01' },
            { title: 'Diagnóstico Técnico Inicial', desc: 'Analizamos a fondo los sistemas buscando vulnerabilidades de seguridad, cuellos de botella de velocidad, fallas de disco latentes y configuraciones incorrectas.', icon: 'mdi-magnify-plus-outline', number: '02' },
            { title: 'Ejecución del Mantenimiento', desc: 'Solucionamos los problemas detectados en el diagnóstico, instalamos parches del sistema operativo, actualizamos software, eliminamos malware y realizamos limpiezas internas.', icon: 'mdi-cog-sync-outline', number: '03' },
            { title: 'Validación de Funcionamiento', desc: 'Realizamos pruebas exhaustivas de carga en la red local, testeo de velocidades en Internet, comprobación de copias de seguridad y validación de seguridad informática.', icon: 'mdi-shield-check-outline', number: '04' },
            { title: 'Informe Técnico & Recomendaciones', desc: 'Te entregamos un reporte comprensible y transparente detallando el estado actual de tu tecnología, los trabajos realizados y propuestas de mejora.', icon: 'mdi-file-document-edit-outline', number: '05' },
          ]" :key="index" class="timeline-step d-flex flex-column flex-md-row justify-space-between align-center mb-12"
            :class="[index % 2 === 0 ? 'timeline-left' : 'timeline-right']">
            <!-- Espacio vacío en desktop para balancear, o bloque en móvil -->
            <div class="timeline-block-empty d-none d-md-block" />

            <!-- Nodo con número -->
            <div class="timeline-node elevation-3 position-relative z-index-2">
              <v-icon color="white" size="24">{{ step.icon }}</v-icon>
              <div class="node-number-badge">{{ step.number }}</div>
            </div>

            <!-- Contenido del Paso -->
            <v-card class="timeline-card pa-6 elevation-2 rounded-lg">
              <h3 class="text-h6 font-weight-bold mb-2 text-primary">{{ step.title }}</h3>
              <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-0">{{ step.desc }}</p>
            </v-card>
          </div>
        </div>
      </v-container>
    </section>

    <!-- 6. QUÉ PROTEGEMOS (Interactive Graphic) -->
    <section class="section-protegemos py-16 bg-navy text-white position-relative overflow-hidden">
      <div class="tech-grid-background opacity-20" />

      <v-container class="position-relative z-index-2">
        <v-row class="align-center">
          <v-col class="py-8" cols="12" md="5">
            <div class="premium-tag mb-4">SEGURIDAD PERIMETRAL Y DISPOSITIVOS</div>

            <h2 class="text-h3 font-weight-bold mb-6 text-gradient">
              ¿Qué Elementos Protegemos?
            </h2>

            <p class="text-body-1 text-grey-lighten-2 mb-8 leading-relaxed">
              Damos cobertura total a todo componente tecnológico conectado dentro de la red corporativa de tu empresa.
              Nada queda desprotegido.
            </p>

            <!-- Card de detalles del elemento interactivo seleccionado -->
            <div class="interactive-info-panel glassmorphism pa-6 rounded-xl border border-lighten-1">
              <template v-if="selectedProtectedNode !== null">
                <div class="d-flex align-center gap-3 mb-3">
                  <div class="selected-node-icon bg-secondary-lighten-4 rounded-circle pa-3">
                    <v-icon color="secondary" size="28">
                      {{protectedNodes.find(n => n.id === selectedProtectedNode)?.icon}}
                    </v-icon>
                  </div>

                  <h4 class="text-h6 font-weight-bold text-white mb-0">
                    {{protectedNodes.find(n => n.id === selectedProtectedNode)?.name}}
                  </h4>
                </div>

                <p class="text-body-2 text-grey-lighten-2 leading-relaxed mb-0">
                  {{protectedNodes.find(n => n.id === selectedProtectedNode)?.desc}}
                </p>
              </template>

              <template v-else>
                <div class="text-center py-6">
                  <v-icon class="mb-3 animate-pulse" color="grey-lighten-1" size="40">mdi-gesture-tap</v-icon>

                  <p class="text-body-2 text-grey-lighten-1 mb-0 font-weight-medium">
                    Haz clic o pasa el cursor sobre los elementos de la red para ver en detalle cómo los protegemos.
                  </p>
                </div>
              </template>
            </div>
          </v-col>

          <v-col class="py-8 d-flex justify-center position-relative" cols="12" md="7">
            <!-- Mapa interactivo en SVG -->
            <div class="interactive-diagram-container">
              <svg class="interactive-svg w-100 h-auto" viewBox="0 0 900 600">
                <!-- Cables / Conexiones desde la empresa central -->
                <g v-for="node in protectedNodes" :key="'line-' + node.id">
                  <path class="transition-all" :d="`M 450 300 L ${node.cx} ${node.cy}`"
                    :stroke="selectedProtectedNode === node.id ? '#4DB7E3' : 'rgba(77, 183, 227, 0.2)'"
                    :stroke-dasharray="selectedProtectedNode === node.id ? 'none' : '4 4'" stroke-linecap="round"
                    :stroke-width="selectedProtectedNode === node.id ? 3 : 1.5" />
                  <!-- Efecto de flujo de luz activo si está seleccionado -->
                  <circle v-if="selectedProtectedNode === node.id" fill="#43A047" r="4">
                    <animateMotion dur="1s" :path="`M 450 300 L ${node.cx} ${node.cy}`" repeatCount="indefinite" />
                  </circle>
                </g>

                <!-- Edificio Central (Sede de la Empresa) -->
                <g class="central-hq" @click="selectedProtectedNode = null">
                  <circle cx="450" cy="300" fill="#1A3A6E" r="60" stroke="#4DB7E3" stroke-width="4" />

                  <circle class="spinning-outer-ring" cx="450" cy="300" fill="none" r="75" stroke="#43A047"
                    stroke-dasharray="8 6" stroke-width="1.5" />

                  <foreignObject height="70" width="70" x="415" y="265">
                    <div class="node-icon-wrapper h-100 w-100 d-flex align-center justify-center">
                      <v-icon color="white" size="40">mdi-domain</v-icon>
                    </div>
                  </foreignObject>
                </g>

                <!-- Nodos Perimetrales Interactivos -->
                <g v-for="node in protectedNodes" :key="'node-' + node.id" class="interactive-node-group"
                  @click="selectedProtectedNode = node.id" @mouseenter="selectedProtectedNode = node.id">
                  <!-- Área activa grande para clic fácil -->
                  <circle :cx="node.cx" :cy="node.cy" fill="transparent" r="35" style="cursor: pointer;" />
                  <!-- Anillo de brillo activo -->
                  <circle class="transition-all node-base-circle" :cx="node.cx" :cy="node.cy"
                    :fill="selectedProtectedNode === node.id ? 'rgba(77, 183, 227, 0.2)' : '#111827'"
                    :r="selectedProtectedNode === node.id ? 28 : 22"
                    :stroke="selectedProtectedNode === node.id ? '#4DB7E3' : '#1A3A6E'" stroke-width="2" />
                  <!-- Icono -->
                  <foreignObject height="30" style="pointer-events: none;" width="30" :x="node.cx - 15"
                    :y="node.cy - 15">
                    <div class="node-icon-wrapper h-100 w-100 d-flex align-center justify-center">
                      <v-icon :color="selectedProtectedNode === node.id ? 'white' : 'secondary'" size="20">
                        {{ node.icon }}
                      </v-icon>
                    </div>
                  </foreignObject>
                  <!-- Etiqueta del nodo -->
                  <text :fill="selectedProtectedNode === node.id ? '#4DB7E3' : '#B0BEC5'" font-size="11"
                    font-weight="600" style="pointer-events: none;" text-anchor="middle" :x="node.cx" :y="node.cy + 38">
                    {{ node.name }}
                  </text>
                </g>
              </svg>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- 7. BENEFICIOS PARA EL CLIENTE -->
    <section class="section-beneficios py-16">
      <v-container>
        <div class="text-center mb-16">
          <div class="section-subtitle">RESULTADOS REALES</div>

          <h2 class="text-h3 font-weight-bold mb-4 header-text">
            Beneficios para tu Negocio
          </h2>

          <p class="text-body-1 mx-auto max-width-700">
            Maximiza el retorno de inversión y olvídate de la informática contratando nuestro soporte especializado.
          </p>
        </div>

        <v-row>
          <v-col v-for="(benefit, index) in [
            { title: 'Mayor Productividad', desc: 'Tus empleados no pierden tiempo esperando asistencia ni sufren por equipos lentos que retrasan sus labores.', icon: 'mdi-speedometer' },
            { title: 'Menos Averías', desc: 'La prevención nos permite resolver los fallos antes de que se manifiesten en los puestos de trabajo.', icon: 'mdi-shield-check' },
            { title: 'Máxima Seguridad', desc: 'Protegemos tu red, dispositivos y datos contra virus, ransomware y cualquier ciberamenaza moderna.', icon: 'mdi-lock-check' },
            { title: 'Equipos Más Rápidos', desc: 'Optimizamos el software y limpiamos el sistema periódicamente para que los ordenadores vuelen.', icon: 'mdi-rocket-launch' },
            { title: 'Reducción de Costes', desc: 'Tarifa mensual fija y planificada. Se acabaron los cargos imprevistos por reparaciones de emergencia.', icon: 'mdi-cash-minus' },
            { title: 'Mayor Vida Útil', desc: 'Un correcto mantenimiento físico y digital prolonga la vida útil de ordenadores y servidores hasta un 40%.', icon: 'mdi-pulse' },
            { title: 'Protección de Datos', desc: 'Copias automáticas encriptadas en cumplimiento estricto con el RGPD y normativas de seguridad.', icon: 'mdi-database' },
            { title: 'Continuidad de Negocio', desc: 'Garantizamos que tu oficina siga operativa pase lo que pase mediante planes de contingencia eficaces.', icon: 'mdi-update' },
            { title: 'Planificación Tecnológica', desc: 'Te asesoramos en la renovación del hardware y licencias para que inviertas de manera inteligente.', icon: 'mdi-calendar-range' },
          ]" :key="index" cols="12" md="4" sm="6">
            <v-card class="benefit-card pa-6 h-100 elevation-1 rounded-xl transition-all hover-lift">
              <div class="benefit-icon-box mb-4">
                <v-icon color="primary" size="28">{{ benefit.icon }}</v-icon>
              </div>

              <h3 class="text-h6 font-weight-bold mb-3 text-grey-darken-3">{{ benefit.title }}</h3>
              <p class="text-body-2 text-grey-darken-1 leading-relaxed mb-0">{{ benefit.desc }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- 8. QUÉ NOS DIFERENCIA -->
    <section class="section-diferencia py-16 bg-navy text-white">
      <v-container>
        <div class="text-center mb-16">
          <div class="section-subtitle text-secondary">¿POR QUÉ IMAX?</div>

          <h2 class="text-h3 font-weight-bold mb-4 text-gradient">
            Lo Que Nos Diferencia de Otros Soporte
          </h2>

          <p class="text-body-1 text-grey-lighten-2 mx-auto max-width-700">
            No somos un taller informático tradicional que solo actúa cuando algo se rompe. Somos tu departamento de
            sistemas externo.
          </p>
        </div>

        <v-row class="align-stretch">
          <v-col v-for="(dif, idx) in [
            { title: 'Monitorización Remota 24/7', desc: 'Supervisamos de manera continua la estabilidad de tus servidores y equipos en tiempo real.', icon: 'mdi-television-play' },
            { title: 'Respuesta Rápida Garantizada', desc: 'Compromiso de asistencia de un técnico cualificado en menos de 15 minutos ante fallos críticos.', icon: 'mdi-clock-fast' },
            { title: 'Soporte Remoto Ilimitado', desc: 'Llamadas e incidencias resueltas de forma remota sin límite de uso ni cargos adicionales.', icon: 'mdi-headset' },
            { title: 'Visitas Programadas Presenciales', desc: 'Acudimos periódicamente a tus oficinas para realizar revisiones físicas y soporte in-situ preventivo.', icon: 'mdi-car-connected' },
            { title: 'Informes Técnicos Mensuales', desc: 'Transparencia absoluta. Reportes detallados sobre incidencias, rendimiento e inventario de red.', icon: 'mdi-file-chart' },
            { title: 'Portal Web de Incidencias', desc: 'Registra, sigue y evalúa la resolución de tickets desde una plataforma web accesible y fácil.', icon: 'mdi-web' },
            { title: 'Inventario Siempre Actualizado', desc: 'Gestionamos la ficha técnica, número de serie y ubicación de cada dispositivo de tu parque tecnológico.', icon: 'mdi-archive' },
            { title: 'Gestión Centralizada de Licencias', desc: 'Control de caducidades, renovaciones de software comercial y cumplimiento legal informático.', icon: 'mdi-key-chain' },
            { title: 'Control de Garantías', desc: 'Tramitamos directamente con fabricantes (Dell, HP, Lenovo) la reparación de equipos en garantía.', icon: 'mdi-card-text' },
            { title: 'Consultoría Tecnológica Anual', desc: 'Analizamos el estado de tu informática y proponemos una hoja de ruta anual para tu transformación digital.', icon: 'mdi-lightbulb-on' },
          ]" :key="idx" cols="12" md="4" sm="6">
            <v-card class="diferencia-card pa-6 h-100 glassmorphism border-lighten-1 rounded-xl transition-all">
              <v-icon class="mb-4" color="secondary" size="32">{{ dif.icon }}</v-icon>
              <h3 class="text-h6 font-weight-bold mb-2 text-white">{{ dif.title }}</h3>
              <p class="text-body-2 text-grey-lighten-2 leading-relaxed mb-0">{{ dif.desc }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- 9. NUESTRO CALENDARIO DE MANTENIMIENTO -->
    <section class="section-calendario py-16 bg-light-gray">
      <v-container>
        <div class="text-center mb-16">
          <div class="section-subtitle">PLANIFICACIÓN CONTINUA</div>

          <h2 class="text-h3 font-weight-bold mb-4 header-text">
            Calendario de Tareas de Mantenimiento
          </h2>

          <p class="text-body-1 mx-auto max-width-700">
            Nuestros procesos de mantenimiento se estructuran en diferentes frecuencias temporales para asegurar que
            ningún
            detalle se pase por alto.
          </p>
        </div>

        <div class="calendar-horizontal-scroll-container py-4">
          <div class="calendar-timeline-row">
            <div v-for="(cal, i) in [
              { freq: 'Monitorización Continua', desc: 'Supervisión de sensores de hardware, espacio de discos, carga del procesador y disponibilidad de los servidores las 24 horas del día.', icon: 'mdi-eye-outline', color: 'error' },
              { freq: 'Copias de Seguridad Diarias', desc: 'Verificación automática de backups de archivos y bases de datos locales y replicación en nube cifrada.', icon: 'mdi-calendar-today', color: 'info' },
              { freq: 'Actualizaciones Semanales', desc: 'Aplicación de parches en sistemas operativos Windows/macOS y software ofimático crítico fuera de horario laboral.', icon: 'mdi-calendar-week', color: 'primary' },
              { freq: 'Revisiones Mensuales', desc: 'Análisis detallado de logs del sistema, estado del antivirus centralizado y limpieza manual remota de almacenamiento.', icon: 'mdi-calendar-month', color: 'success' },
              { freq: 'Limpiezas Trimestrales', desc: 'Mantenimiento físico preventivo en las visitas in-situ: soplado de polvo, ordenación de cableado y revisión de ventilaciones.', icon: 'mdi-calendar-multiselect', color: 'secondary' },
              { freq: 'Auditorías Semestrales', desc: 'Pruebas de restauración real de copias, auditorías de permisos compartidos de archivos y testeo de velocidad de red.', icon: 'mdi-shield-check-outline', color: 'warning' },
              { freq: 'Inventario Anual', desc: 'Revisión y actualización del inventario general de activos, análisis del ciclo de vida de los equipos y planificación de mejoras.', icon: 'mdi-clipboard-list', color: 'primary' },
            ]" :key="i" class="calendar-card pa-6 elevation-2 rounded-xl">
              <div class="d-flex align-center justify-space-between mb-4">
                <v-chip class="text-uppercase tracking-wider font-weight-bold" :color="cal.color" size="small"
                  variant="flat">
                  {{ cal.freq.split(' ')[1] || cal.freq }}
                </v-chip>

                <v-icon :color="cal.color" size="24">{{ cal.icon }}</v-icon>
              </div>

              <h3 class="text-subtitle-1 font-weight-bold mb-2 text-primary">{{ cal.freq }}</h3>
              <p class="text-caption text-grey-darken-1 leading-relaxed mb-0">{{ cal.desc }}</p>
            </div>
          </div>
        </div>
      </v-container>
    </section>

    <!-- 10. INDICADORES DE CALIDAD -->
    <section id="section-indicadores" class="section-indicadores py-16 bg-navy text-white">
      <v-container>
        <div class="text-center mb-16">
          <div class="section-subtitle text-secondary">NUESTRAS MÉTRICAS</div>

          <h2 class="text-h3 font-weight-bold mb-4 text-gradient">
            Indicadores de Calidad de Servicio
          </h2>

          <p class="text-body-1 text-grey-lighten-2 mx-auto max-width-700">
            Transparencia y resultados cuantificables. Analizamos en tiempo real nuestro desempeño para garantizar los
            más
            altos estándares del mercado.
          </p>
        </div>

        <v-row class="justify-center">
          <v-col v-for="(metric, idx) in metrics" :key="idx" class="d-flex" cols="12" md="3" sm="6">
            <v-card
              class="metric-widget w-100 pa-6 glassmorphism border-lighten-1 rounded-xl text-center d-flex flex-column justify-space-between">
              <v-icon class="mx-auto mb-4" color="secondary" size="36">mdi-chart-line</v-icon>

              <div>
                <span class="d-block text-h3 font-weight-black text-gradient mb-1">
                  {{ metric.currentValue }}{{ metric.suffix }}
                </span>

                <span class="d-block text-subtitle-1 font-weight-bold text-white mb-2">
                  {{ metric.label }}
                </span>
              </div>

              <p class="text-caption text-grey-lighten-2 mb-0 leading-relaxed pt-2 border-top">
                {{ metric.desc }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- 11. CIERRE & FORMULARIO DE AUDITORÍA -->
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
              que
              velará por la seguridad, disponibilidad y rendimiento continuo de toda tu infraestructura.
            </p>

            <v-card class="pa-6 glassmorphism border-lighten-1 rounded-xl">
              <h3 class="text-h6 font-weight-bold mb-4 text-white d-flex align-center gap-2">
                <v-icon color="secondary">mdi-check-decagram</v-icon>
                ¿Qué incluye la Auditoría Gratuita?
              </h3>

              <ul class="solution-checklist pl-0 mb-0">
                <li class="d-flex align-start gap-3 mb-3">
                  <v-icon class="mt-1" color="secondary" size="18">mdi-chevron-right</v-icon>
                  <span class="text-body-2 text-grey-lighten-2">Inventario y análisis del estado físico de hasta 20
                    equipos
                    de trabajo.</span>
                </li>

                <li class="d-flex align-start gap-3 mb-3">
                  <v-icon class="mt-1" color="secondary" size="18">mdi-chevron-right</v-icon>
                  <span class="text-body-2 text-grey-lighten-2">Test rápido de velocidad interna de red y cobertura
                    inalámbrica WiFi.</span>
                </li>

                <li class="d-flex align-start gap-3 mb-3">
                  <v-icon class="mt-1" color="secondary" size="18">mdi-chevron-right</v-icon>
                  <span class="text-body-2 text-grey-lighten-2">Comprobación básica de vulnerabilidades críticas y
                    estado de
                    antivirus.</span>
                </li>

                <li class="d-flex align-start gap-3">
                  <v-icon class="mt-1" color="secondary" size="18">mdi-chevron-right</v-icon>
                  <span class="text-body-2 text-grey-lighten-2">Informe ejecutivo sin coste alguno ni compromiso de
                    permanencia.</span>
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
                <v-text-field v-model="auditForm.name" class="mb-3" color="secondary" density="comfortable"
                  label="Nombre de contacto *" placeholder="Ej. Juan Pérez" required variant="outlined" />

                <v-text-field v-model="auditForm.company" class="mb-3" color="secondary" density="comfortable"
                  label="Empresa *" placeholder="Ej. Mi Negocio S.L." required variant="outlined" />

                <v-text-field v-model="auditForm.email" class="mb-3" color="secondary" density="comfortable"
                  label="Correo electrónico *" placeholder="Ej. contacto@miempresa.com" required type="email"
                  variant="outlined" />

                <v-text-field v-model="auditForm.phone" class="mb-3" color="secondary" density="comfortable"
                  label="Teléfono de contacto" placeholder="Ej. 600 000 000" variant="outlined" />

                <v-select v-model="auditForm.devicesCount" class="mb-4" color="secondary" density="comfortable"
                  :items="['1 a 5 equipos', '6 a 15 equipos', '16 a 30 equipos', '31 a 50 equipos', 'Más de 50 equipos']"
                  label="Número aproximado de equipos" variant="outlined" />

                <v-textarea v-model="auditForm.message" class="mb-6" color="secondary" density="comfortable"
                  label="Mensaje o requerimiento especial"
                  placeholder="Describe brevemente tus necesidades o incidencias habituales..." rows="3"
                  variant="outlined" />

                <v-btn block class="font-weight-bold" color="secondary"
                  :disabled="!auditForm.name || !auditForm.email || !auditForm.company" :loading="submitLoading"
                  size="large" type="submit">
                  Enviar Solicitud
                </v-btn>
              </v-form>

              <!-- Formulario Enviado Exitosamente -->
              <div v-else class="text-center py-8">
                <v-icon class="mb-4 animate-bounce" color="success" size="64">mdi-check-circle-outline</v-icon>
                <h4 class="text-h6 font-weight-bold text-white mb-2">¡Solicitud Enviada!</h4>

                <p class="text-body-2 text-grey-lighten-2 leading-relaxed mb-6">
                  Hemos recibido tus datos con éxito. Un consultor tecnológico de IMAX se pondrá en contacto contigo en
                  las
                  próximas 24 horas laborables.
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
  </div>
</template>

<style scoped>
/* --- ESTILOS COMPARTIDOS / NORMAS --- */
.mantenimiento-premium-page {
  font-family: 'Roboto', 'Inter', sans-serif;
  background-color: #F7F9FC;
  color: #1A1A1A;
  overflow-x: hidden;
}

.bg-navy {
  background-color: #0A192F !important;
}

.text-gradient {
  background: linear-gradient(135deg, #FFFFFF 0%, #4DB7E3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #4DB7E3;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.header-text {
  color: #1A3A6E;
}

.max-width-700 {
  max-width: 700px;
}

.leading-relaxed {
  line-height: 1.6 !important;
}

.bg-light-gray {
  background-color: #F0F4F8 !important;
}

.gap-2 {
  gap: 8px;
}

.gap-3 {
  gap: 12px;
}

.gap-4 {
  gap: 16px;
}

.gap-8 {
  gap: 32px;
}

/* --- GLASSMORPHISM --- */
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


/* --- 1. HERO PRINCIPAL --- */
.hero-section {
  min-height: calc(100vh - 90px);
  background: linear-gradient(135deg, #0A192F 0%, #1A3A6E 100%);
  padding: 60px 0;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 80% 20%, rgba(77, 183, 227, 0.15) 0%, transparent 60%);
  pointer-events: none;
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

.text-light-blue-grey-2 {
  color: #CFD8DC;
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
}

.cta-secondary-outline:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: white !important;
}

.hero-stat-item {
  border-left: 2px solid rgba(77, 183, 227, 0.3);
  padding-left: 12px;
}

.hero-network-svg-container {
  width: 100%;
  max-width: 480px;
  position: relative;
}

.network-svg {
  filter: drop-shadow(0 0 15px rgba(77, 183, 227, 0.2));
}

.node-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

/* Animación Anillo de Pulso */
.pulsing-ring {
  transform-origin: center;
  animation: ring-pulse 3s infinite linear;
}

@keyframes ring-pulse {
  0% {
    transform: scale(0.85);
    opacity: 0.8;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

/* Animar los flujos de datos en SVG */
.data-pulse-circle {
  filter: drop-shadow(0 0 4px #4DB7E3);
}

.floating-panel {
  position: absolute;
  border-radius: 8px;
  z-index: 10;
  pointer-events: none;
  animation: float-panel 6s infinite ease-in-out;
}

.floating-panel:nth-child(even) {
  animation-delay: 3s;
}

@keyframes float-panel {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.status-pulse-green {
  width: 8px;
  height: 8px;
  background-color: #43A047;
  border-radius: 50%;
  box-shadow: 0 0 8px #43A047;
  animation: pulse-green 1.5s infinite alternate;
}

@keyframes pulse-green {
  from {
    opacity: 0.4;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1.1);
  }
}

/* --- 2 & 3. EL PROBLEMA Y LA SOLUCIÓN --- */
.split-narrative-section {
  background-color: #FFFFFF;
  transition: background-color 0.8s ease;
}

.split-narrative-section.solution-mode {
  background-color: #F4FBF7;
  /* Tono verde muy suave de solución */
}

.problem-card {
  border-left: 4px solid #e53935;
  background-color: #FFFDFD;
  transition: transform 0.3s;
}

.problem-card:hover {
  transform: translateY(-5px);
}

.border-left-danger {
  border-left: 4px solid #e53935 !important;
}

.problem-icon-wrapper {
  background: #FFEBEE;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.problem-footer-note {
  background-color: #FFEBEE;
  color: #C62828;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.solution-checklist {
  list-style: none;
}

.solution-preview-card {
  background: rgba(255, 255, 255, 0.8) !important;
  border: 1px solid rgba(67, 160, 71, 0.2) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

/* --- 4. LOS TRES PILARES --- */
.pilar-card {
  border: 1px solid rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  transition: transform 0.3s, box-shadow 0.3s;
}

.pilar-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(26, 58, 110, 0.1) !important;
  border-color: rgba(77, 183, 227, 0.2);
}

.pilar-icon-container {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gear-animated {
  transform-origin: 50px 50px;
  animation: rotate 12s infinite linear;
}

.gear-animated-reverse {
  transform-origin: 72px 72px;
  animation: rotate-reverse 8s infinite linear;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes rotate-reverse {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
}

.predictive-monitor-box {
  background-color: #111827;
  border: 1px solid #374151;
  color: white;
}

.monitor-line-chart {
  width: 100%;
  height: 60px;
}

.drawing-path {
  stroke-dasharray: 250;
  stroke-dashoffset: 250;
  animation: draw-chart 3s infinite alternate ease-in-out;
}

@keyframes draw-chart {
  to {
    stroke-dashoffset: 0;
  }
}

/* --- 5. NUESTRO PROCEDIMIENTO --- */
.timeline-container {
  max-width: 900px;
  margin: 0 auto;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #1A3A6E 0%, #4DB7E3 50%, #43A047 100%);
  transform: translateX(-50%);
  border-radius: 2px;
  z-index: 1;
}

.timeline-step {
  width: 100%;
  z-index: 2;
}

.timeline-node {
  width: 50px;
  height: 50px;
  background-color: #1A3A6E;
  border: 3px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.node-number-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #4DB7E3;
  color: white;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 2px 6px;
  border-radius: 10px;
  border: 1px solid white;
}

.timeline-card {
  width: 42%;
  background-color: #FFFFFF;
  transition: transform 0.3s;
}

.timeline-card:hover {
  transform: scale(1.02);
}

.timeline-block-empty {
  width: 42%;
}

.timeline-left .timeline-card {
  order: 1;
}

.timeline-left .timeline-block-empty {
  order: 3;
}

.timeline-right .timeline-card {
  order: 3;
}

.timeline-right .timeline-block-empty {
  order: 1;
}

.timeline-step .timeline-node {
  order: 2;
}

@media (max-width: 959px) {
  .timeline-line {
    left: 30px;
  }

  .timeline-node {
    left: 30px;
    transform: none;
  }

  .timeline-card {
    width: calc(100% - 70px);
    margin-left: 70px;
    order: 3 !important;
  }

  .timeline-block-empty {
    display: none !important;
  }

  .timeline-step {
    align-items: flex-start !important;
  }
}

/* --- 6. QUÉ PROTEGEMOS (Interactive Diagram) --- */
.interactive-diagram-container {
  width: 100%;
  max-width: 720px;
  position: relative;
}

.interactive-svg {
  filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.15));
}

.spinning-outer-ring {
  transform-origin: 450px 300px;
  animation: rotate 20s infinite linear;
}

.interactive-node-group {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 0.2s ease;
  cursor: pointer;
}

.interactive-node-group:hover {
  transform: scale(1.12);
}

.node-base-circle {
  transition: fill 0.3s, stroke 0.3s, r 0.3s;
}

.transition-all {
  transition: all 0.3s ease;
}

.interactive-info-panel {
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: opacity 0.3s, transform 0.3s;
}

.animate-pulse {
  animation: icon-pulse 2s infinite alternate;
}

@keyframes icon-pulse {
  from {
    transform: scale(1);
    opacity: 0.6;
  }

  to {
    transform: scale(1.15);
    opacity: 1;
  }
}

/* --- 7. BENEFICIOS --- */
.benefit-card {
  border: 1px solid rgba(0, 0, 0, 0.04);
  background-color: #FFFFFF;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.benefit-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(26, 58, 110, 0.08) !important;
  border-color: rgba(77, 183, 227, 0.2);
}

.benefit-icon-box {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background-color: #E1F5FE;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* --- 8. QUÉ NOS DIFERENCIA --- */
.diferencia-card {
  background: rgba(255, 255, 255, 0.04) !important;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.3s ease;
}

.diferencia-card:hover {
  background: rgba(255, 255, 255, 0.08) !important;
  border-color: rgba(77, 183, 227, 0.4);
  box-shadow: 0 8px 30px rgba(77, 183, 227, 0.15) !important;
  transform: translateY(-4px);
}

/* --- 9. CALENDARIO DE MANTENIMIENTO --- */
.calendar-horizontal-scroll-container {
  overflow-x: auto;
  width: 100%;
  scrollbar-width: thin;
  scrollbar-color: rgba(77, 183, 227, 0.5) #F0F4F8;
}

.calendar-horizontal-scroll-container::-webkit-scrollbar {
  height: 8px;
}

.calendar-horizontal-scroll-container::-webkit-scrollbar-track {
  background: #F0F4F8;
  border-radius: 10px;
}

.calendar-horizontal-scroll-container::-webkit-scrollbar-thumb {
  background-color: rgba(77, 183, 227, 0.5);
  border-radius: 10px;
}

.calendar-timeline-row {
  display: flex;
  gap: 20px;
  padding: 10px 0;
  min-width: 1350px;
  /* Asegura el scroll en tablets/desktop pequeño */
}

.calendar-card {
  flex: 0 0 280px;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.03);
  transition: transform 0.3s;
}

.calendar-card:hover {
  transform: translateY(-5px);
}

/* --- 10. INDICADORES DE CALIDAD --- */
.metric-widget {
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
}

.metric-widget:hover {
  border-color: rgba(77, 183, 227, 0.3);
  transform: scale(1.03);
}

/* --- 11. CIERRE Y CTA --- */
.section-cierre {
  background: linear-gradient(135deg, #0A192F 0%, #1A3A6E 100%);
  padding: 80px 0;
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

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}
</style>
