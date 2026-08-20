<template>
  <div class="servicios-page bg-background min-vh-100 pb-16">
    <!-- HERO SECTION -->
    <header class="hero-section text-white d-flex align-center position-relative overflow-hidden">
      <div class="gradient-overlay" />
      <v-container class="position-relative z-index-2 py-16 text-center">
        <span class="text-subtitle-1 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-3">
          NUESTROS SERVICIOS
        </span>
        <h1 class="text-h2 font-weight-black mb-4 text-gradient leading-tight">
          Soluciones IT Profesionales
        </h1>
        <p class="text-h6 text-grey-lighten-2 mb-8 leading-relaxed font-weight-regular max-w-700 mx-auto">
          Ofrecemos soporte técnico integral, venta y reparación de ordenadores a medida, soluciones cloud avanzadas y automatización de procesos para impulsar la eficiencia de tu negocio.
        </p>
      </v-container>
    </header>

    <!-- SERVICES DIRECTORY -->
    <v-container class="mt-12">
      <!-- Soporte Técnico y Mantenimiento -->
      <div class="mb-16">
        <div class="d-flex align-center gap-3 mb-6">
          <v-icon color="primary" size="32">mdi-face-agent</v-icon>
          <h2 class="text-h4 font-weight-bold text-primary">Soporte Técnico y Mantenimiento</h2>
        </div>
        <v-row>
          <v-col cols="12" md="6" class="d-flex">
            <v-card class="service-portal-card w-100 pa-6 rounded-xl border elevation-1 d-flex flex-column justify-space-between">
              <div>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Soporte Técnico Informático</h3>
                <p class="text-body-2 text-grey-darken-2 mb-4 leading-relaxed">
                  Mantenimiento informático integral para empresas, servidores y redes. Soporte remoto inmediato y técnicos presenciales dedicados.
                </p>
                <div class="d-flex flex-wrap gap-2 mb-6">
                  <v-chip size="small" color="primary" variant="tonal">Soporte Remoto</v-chip>
                  <v-chip size="small" color="primary" variant="tonal">Mantenimiento de Servidores</v-chip>
                  <v-chip size="small" color="primary" variant="tonal">Seguridad Activa</v-chip>
                </div>
              </div>
              <v-btn color="secondary" block class="text-white font-weight-bold rounded-lg" to="/servicios/servicio1">
                Saber más <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </v-card>
          </v-col>

          <v-col cols="12" md="6" class="d-flex">
            <v-card class="service-portal-card w-100 pa-6 rounded-xl border elevation-1 d-flex flex-column justify-space-between">
              <div>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Soporte Técnico Oficial Brother</h3>
                <p class="text-body-2 text-grey-darken-2 mb-4 leading-relaxed">
                  Distribuidor autorizado y servicio técnico especialista en impresoras y consumibles Brother. Reparaciones oficiales y contratos de pago por uso.
                </p>
                <div class="d-flex flex-wrap gap-2 mb-6">
                  <v-chip size="small" color="primary" variant="tonal">Servicio Oficial</v-chip>
                  <v-chip size="small" color="primary" variant="tonal">Garantía Certificada</v-chip>
                  <v-chip size="small" color="primary" variant="tonal">Pago por Uso</v-chip>
                </div>
              </div>
              <v-btn color="secondary" block class="text-white font-weight-bold rounded-lg" to="/servicios/servicio2">
                Saber más <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- Venta y Reparación de Ordenadores -->
      <div class="mb-16">
        <div class="d-flex align-center gap-3 mb-6">
          <v-icon color="primary" size="32">mdi-desktop-classic</v-icon>
          <h2 class="text-h4 font-weight-bold text-primary">Taller de Ordenadores</h2>
        </div>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-card class="service-portal-card pc-hero-card w-100 pa-8 rounded-xl border elevation-2 d-flex flex-column flex-md-row align-center justify-space-between gap-6">
              <div class="flex-grow-1">
                <v-chip color="secondary" class="font-weight-bold text-white mb-3" size="small">NUESTRO TALLER ESPECIALIZADO</v-chip>
                <h3 class="text-h4 font-weight-black text-primary mb-3">Ordenadores a Medida, Reparación y Renovación</h3>
                <p class="text-body-1 text-grey-darken-2 mb-4 leading-relaxed">
                  Montamos el equipo de tus sueños (gaming, oficina o workstation), reparamos cualquier avería física y ampliamos tus componentes antiguos para multiplicar por diez el rendimiento general.
                </p>
                <div class="d-flex flex-wrap gap-2">
                  <v-chip size="small" color="primary" variant="flat">Configurador Personalizado</v-chip>
                  <v-chip size="small" color="primary" variant="flat">Diagnóstico en Taller</v-chip>
                  <v-chip size="small" color="primary" variant="flat">Ampliaciones SSD y RAM</v-chip>
                </div>
              </div>
              <div class="w-100 w-md-auto text-center">
                <v-btn color="secondary" size="large" class="text-white font-weight-bold rounded-xl px-6 py-3" to="/servicios/servicio3">
                  Ir al Taller y Configurar
                  <v-icon end>mdi-wrench-cog</v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- Soluciones Cloud y Microsoft IA -->
      <div class="mb-16">
        <div class="d-flex align-center gap-3 mb-6">
          <v-icon color="primary" size="32">mdi-microsoft</v-icon>
          <h2 class="text-h4 font-weight-bold text-primary">Soluciones Microsoft & Cloud</h2>
        </div>
        <v-row>
          <v-col cols="12" md="4" class="d-flex">
            <v-card class="service-portal-card w-100 pa-6 rounded-xl border elevation-1 d-flex flex-column justify-space-between">
              <div>
                <div class="d-flex align-center mb-3">
                  <v-icon color="secondary" class="me-2">mdi-brain</v-icon>
                  <h3 class="text-h6 font-weight-bold text-primary">Microsoft 365 Copilot & IA</h3>
                </div>
                <p class="text-body-2 text-grey-darken-2 mb-6 leading-relaxed">
                  Integra la Inteligencia Artificial de Microsoft en tus flujos de trabajo cotidianos en Word, Excel y Outlook para potenciar el rendimiento diario.
                </p>
              </div>
              <v-btn color="primary" variant="outlined" block class="font-weight-bold rounded-lg" to="/servicios/microsoft-copilot">
                Ver Copilot <v-icon end>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card>
          </v-col>

          <v-col cols="12" md="4" class="d-flex">
            <v-card class="service-portal-card w-100 pa-6 rounded-xl border elevation-1 d-flex flex-column justify-space-between">
              <div>
                <div class="d-flex align-center mb-3">
                  <v-icon color="secondary" class="me-2">mdi-shield-check</v-icon>
                  <h3 class="text-h6 font-weight-bold text-primary">Seguridad Microsoft 365</h3>
                </div>
                <p class="text-body-2 text-grey-darken-2 mb-6 leading-relaxed">
                  Protege los datos de tu empresa con las mejores soluciones en seguridad cloud, Defender y Purview contra ransomware y phishing.
                </p>
              </div>
              <v-btn color="primary" variant="outlined" block class="font-weight-bold rounded-lg" to="/servicios/seguridad-microsoft-365">
                Ver Seguridad <v-icon end>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card>
          </v-col>

          <v-col cols="12" md="4" class="d-flex">
            <v-card class="service-portal-card w-100 pa-6 rounded-xl border elevation-1 d-flex flex-column justify-space-between">
              <div>
                <div class="d-flex align-center mb-3">
                  <v-icon color="secondary" class="me-2">mdi-database</v-icon>
                  <h3 class="text-h6 font-weight-bold text-primary">Microsoft Fabric & Big Data</h3>
                </div>
                <p class="text-body-2 text-grey-darken-2 mb-6 leading-relaxed">
                  Consolida todos los datos de tu organización en una única fuente de verdad con la arquitectura analítica más potente y moderna de Microsoft.
                </p>
              </div>
              <v-btn color="primary" variant="outlined" block class="font-weight-bold rounded-lg" to="/servicios/microsoft-fabric">
                Ver Fabric <v-icon end>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- Automatización y Software a Medida -->
      <div>
        <div class="d-flex align-center gap-3 mb-6">
          <v-icon color="primary" size="32">mdi-robot-industrial</v-icon>
          <h2 class="text-h4 font-weight-bold text-primary">Automatización e Integraciones</h2>
        </div>
        <v-row justify="center">
          <v-col cols="12" md="8" class="d-flex">
            <v-card class="service-portal-card w-100 pa-6 rounded-xl border elevation-1 d-flex flex-column justify-space-between">
              <div>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Automatiza tu Empresa</h3>
                <p class="text-body-2 text-grey-darken-2 mb-4 leading-relaxed">
                  Implementa RPA, Power Automate y soluciones de software a medida para eliminar los flujos de trabajo manuales e integrar tus bases de datos y herramientas preferidas.
                </p>
                <div class="d-flex flex-wrap gap-2 mb-6">
                  <v-chip size="small" color="primary" variant="tonal">RPA y Power Automate</v-chip>
                  <v-chip size="small" color="primary" variant="tonal">Software a Medida</v-chip>
                  <v-chip size="small" color="primary" variant="tonal">Integración SQL & APIs</v-chip>
                </div>
              </div>
              <v-btn color="secondary" block class="text-white font-weight-bold rounded-lg" to="/servicios/servicio6">
                Descubrir Soluciones de Automatización <v-icon end>mdi-cog-play</v-icon>
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'

  onMounted(() => {
    document.title = 'Servicios IT | Imax PC'
  })
</script>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #1a3a6e 0%, #11223f 100%);
  padding: 120px 0 80px;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top right, rgba(77, 183, 227, 0.15) 0%, transparent 60%);
  pointer-events: none;
}

.text-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #a5c7f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tracking-widest {
  letter-spacing: 0.2em !important;
}

.gap-2 {
  gap: 8px;
}

.gap-3 {
  gap: 12px;
}

.gap-6 {
  gap: 24px;
}

.service-portal-card {
  border-color: #E3E6EB !important;
  background-color: #FFFFFF;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s, border-color 0.3s;
}

.service-portal-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(26, 58, 110, 0.08) !important;
  border-color: #4DB7E3 !important;
}

.pc-hero-card {
  background: linear-gradient(180deg, #ffffff 0%, #f3f9fc 100%);
  border-left: 6px solid #4DB7E3 !important;
}
</style>
