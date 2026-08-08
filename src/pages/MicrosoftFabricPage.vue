<template>
  <div class="microsoft-fabric-page bg-background min-vh-100 pb-16">
    <!-- 1. HERO PRINCIPAL -->
    <header class="hero-section text-white d-flex align-center position-relative overflow-hidden">
      <div class="gradient-overlay" />
      <div class="tech-grid-background" />

      <v-container class="position-relative z-index-2 py-16">
        <v-row align="center">
          <v-col cols="12" md="7" class="text-left animate-slide-up">
            <div class="premium-tag mb-4">BIG DATA & IA FOUNDATION</div>
            <h1 class="text-h2 font-weight-black mb-4 text-gradient leading-tight">
              Microsoft Fabric
            </h1>
            <h2 class="text-h4 font-weight-bold text-secondary mb-6">
              Donde hay un dato, hay una oportunidad
            </h2>
            <p class="text-h6 text-grey-lighten-2 mb-8 leading-relaxed font-weight-regular max-w-650">
              Rompe los silos de información de tu organización. Conecta, unifica, gobierna y visualiza todos tus datos
              empresariales en un único lago abierto para impulsar tu transformación de IA.
            </p>
            <div class="d-flex flex-wrap gap-4">
              <v-btn class="cta-primary-glow px-8" color="secondary" size="large" to="/contacto">
                Solicitar una Demo
                <v-icon end>mdi-database-eye</v-icon>
              </v-btn>
              <v-btn class="cta-secondary-outline px-8" size="large" variant="outlined"
                @click="scrollToSection('#garbage')">
                Ver Importancia de Datos
              </v-btn>
            </div>
          </v-col>

          <v-col cols="12" md="5" class="d-flex justify-center position-relative py-8">
            <!-- Data Flow Graphic -->
            <div class="data-flow-container">
              <div class="grid-animation"></div>
              <v-card class="glassmorphism-card pa-6 text-center rounded-xl elevation-10">
                <!-- <v-icon color="secondary" size="80" class="mb-4 animate-float">mdi-database-settings</v-icon> -->
                <v-img :src="imgOneLake" alt="OneLake Catalog" width="100" height="100"
                  class="mx-auto mb-4 animate-pulse" contain />
                <h3 class="text-h5 font-weight-bold text-white mb-2">OneLake Catalog</h3>
                <p class="text-caption text-grey-lighten-1 mb-4">
                  Un único catálogo para descubrir, gobernar y proteger tus datos.
                </p>
                <div class="d-flex justify-center gap-2 flex-wrap">
                  <v-chip size="small" color="secondary" variant="flat">AWS S3</v-chip>
                  <v-chip size="small" color="secondary" variant="flat">SQL Server</v-chip>
                  <v-chip size="small" color="secondary" variant="flat">Salesforce</v-chip>
                  <v-chip size="small" color="secondary" variant="flat">Snowflake</v-chip>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </header>

    <!-- 2. GARBAGE IN, GARBAGE OUT (EL PROBLEMA DE LOS DATOS) -->
    <v-container id="garbage" class="mt-16">
      <v-row align="center">
        <v-col cols="12" md="6" class="pe-md-8">
          <span class="text-subtitle-2 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-2">
            EL REQUISITO FUNDAMENTAL PARA LA IA
          </span>
          <h2 class="text-h3 font-weight-black text-primary mb-6 leading-tight">
            Tu Inteligencia Artificial es tan buena como tus datos
          </h2>
          <p class="text-body-1 text-grey-darken-2 mb-4 leading-relaxed">
            Implementar asistentes o agentes de IA sin limpiar tus fuentes de información es contraproducente. Si los
            datos de entrada son incorrectos, están duplicados o desactualizados, los resultados de la IA serán
            imprecisos (el concepto clásico en informática: <strong>"Garbage In, Garbage Out"</strong>).
          </p>
          <p class="text-body-1 text-grey-darken-2 mb-6 leading-relaxed">
            Microsoft Fabric actúa como la capa unificada que elimina los silos, limpia tus bases de datos y les añade
            gobernanza para que la IA actúe sobre información real y de confianza.
          </p>
          <v-alert border="start" color="primary" class="rounded-xl font-weight-bold border-opacity-100" variant="tonal"
            icon="mdi-lightbulb-on">
            "La clave de la IA no está solo en el modelo matemático, sino en conectar los datos correctos con la capa de
            confianza empresarial."
          </v-alert>
        </v-col>

        <v-col cols="12" md="6" class="d-flex justify-center py-8">
          <!-- Illustration card -->
          <v-card class="pa-6 rounded-xl border border-primary-lighten-4 w-100 elevation-1 bg-white">
            <div class="d-flex align-center justify-space-between mb-6">
              <h4 class="text-h6 font-weight-bold text-primary mb-0">Evolución de Datos con Fabric</h4>
              <v-chip color="success" size="small" class="font-weight-bold">Conectado</v-chip>
            </div>
            <div class="step-data d-flex align-center gap-4 mb-4">
              <v-chip color="primary" variant="flat" size="small" class="font-weight-bold">1</v-chip>
              <div>
                <strong>Centralizar un lago de datos:</strong> Integrar fuentes dispersas en OneLake sin duplicados ni
                ETLs costosos.
              </div>
            </div>
            <div class="step-data d-flex align-center gap-4 mb-4">
              <v-chip color="primary" variant="flat" size="small" class="font-weight-bold">2</v-chip>
              <div>
                <strong>Mejorar la calidad:</strong> Depurar la información para que sea completa, consistente y segura.
              </div>
            </div>
            <div class="step-data d-flex align-center gap-4 mb-4">
              <v-chip color="primary" variant="flat" size="small" class="font-weight-bold">3</v-chip>
              <div>
                <strong>Crear Agentes de Datos:</strong> Preparar las bases de conocimiento para la consulta en lenguaje
                natural.
              </div>
            </div>
            <div class="step-data d-flex align-center gap-4">
              <v-chip color="primary" variant="flat" size="small" class="font-weight-bold">4</v-chip>
              <div>
                <strong>Visualización e IA:</strong> Tomar decisiones más rápidas a través de Power BI y Microsoft
                Copilot.
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- 3. PILARES CLAVE DE MICROSOFT FABRIC -->
    <v-sheet class="bg-grey-lighten-4 py-16 mt-16 border-y">
      <v-container>
        <div class="text-center mb-12">
          <span class="text-subtitle-2 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-2">
            POR QUÉ ELEGIR FABRIC
          </span>
          <h2 class="text-h3 font-weight-black text-primary mb-4">
            Pilares del Éxito Tecnológico
          </h2>
          <div class="divider mx-auto mb-4" />
        </div>

        <v-row>
          <!-- Pilar 1: OneLake -->
          <v-col cols="12" md="4" class="d-flex">
            <v-card class="pilar-card w-100 pa-6 rounded-xl border elevation-0 text-center">
              <div class="icon-circle bg-blue-lighten-5 mx-auto mb-6">
                <v-icon color="primary" size="32">mdi-waves</v-icon>
              </div>
              <h3 class="text-h5 font-weight-bold text-primary mb-3">OneLake</h3>
              <h4 class="text-subtitle-2 text-secondary mb-3">Un solo lago, una sola copia</h4>
              <p class="text-body-2 text-grey-darken-1 leading-relaxed">
                Unifica todo el almacenamiento en un lago de datos unificado abierto en cada capa. Conecta bases de
                datos y archivos de múltiples nubes con cero procesos ETL adicionales.
              </p>
            </v-card>
          </v-col>

          <!-- Pilar 2: Copilot in Fabric -->
          <v-col cols="12" md="4" class="d-flex">
            <v-card class="pilar-card w-100 pa-6 rounded-xl border elevation-0 text-center">
              <div class="icon-circle bg-cyan-lighten-5 mx-auto mb-6">
                <v-icon color="secondary" size="32">mdi-microsoft-copilot</v-icon>
              </div>
              <h3 class="text-h5 font-weight-bold text-primary mb-3">Copilot Acelerado</h3>
              <h4 class="text-subtitle-2 text-secondary mb-3">IA integrada en tus reportes</h4>
              <p class="text-body-2 text-grey-darken-1 leading-relaxed">
                Acelera la visualización de datos empresariales utilizando Copilot. Genera reportes interactivos
                completos de Power BI simplemente escribiendo instrucciones en lenguaje natural.
              </p>
            </v-card>
          </v-col>

          <!-- Pilar 3: Seguridad & Purview -->
          <v-col cols="12" md="4" class="d-flex">
            <v-card class="pilar-card w-100 pa-6 rounded-xl border elevation-0 text-center">
              <div class="icon-circle bg-purple-lighten-5 mx-auto mb-6">
                <v-icon color="purple" size="32">mdi-shield-check-outline</v-icon>
              </div>
              <h3 class="text-h5 font-weight-bold text-primary mb-3">Seguridad y Confianza</h3>
              <h4 class="text-subtitle-2 text-secondary mb-3">Gobernanza centralizada de datos</h4>
              <p class="text-body-2 text-grey-darken-1 leading-relaxed">
                Unifica los datos con la máxima seguridad. Controla los permisos, analiza el linaje de los archivos y
                aplica políticas de cumplimiento centralizadas mediante Microsoft Purview.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- 4. DATA AGENTS (AGENTES DE DATOS DE CONFIANZA) -->
    <v-container class="mt-16">
      <v-row align="center">
        <v-col cols="12" md="6" class="text-center py-8">
          <v-img alt="Data Agents en acción"
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
            class="rounded-xl border shadow-lg" max-height="400" cover />
        </v-col>

        <v-col cols="12" md="6" class="ps-md-10 text-left">
          <span class="text-subtitle-2 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-2">
            AGENTES INTELIGENTES DE EXTRACCIÓN
          </span>
          <h2 class="text-h3 font-weight-black text-primary mb-6 leading-tight">
            Descubre los Data Agents
          </h2>
          <p class="text-body-1 text-grey-darken-2 mb-4 leading-relaxed">
            Los <strong>Agentes de Datos (Data Agents)</strong> de Microsoft Fabric permiten a cualquier usuario de
            negocio interrogar las bases de datos de la empresa en lenguaje natural y obtener respuestas precisas de
            forma inmediata.
          </p>
          <p class="text-body-1 text-grey-darken-2 mb-6 leading-relaxed">
            Ya no dependes de la escritura de consultas SQL complejas o de la cola de soporte de IT. Los agentes
            traducen las preguntas en tiempo real y devuelven explicaciones detalladas, gráficos explicativos, mapas o
            líneas de tendencia.
          </p>

          <div class="features-list">
            <div class="d-flex align-center gap-2 mb-3">
              <v-icon color="secondary">mdi-check-circle-outline</v-icon>
              <span class="text-body-2 text-grey-darken-3">Consultas en lenguaje natural sin código</span>
            </div>
            <div class="d-flex align-center gap-2 mb-3">
              <v-icon color="secondary">mdi-check-circle-outline</v-icon>
              <span class="text-body-2 text-grey-darken-3">Resultados en múltiples formatos (tablas, gráficos,
                resúmenes)</span>
            </div>
            <div class="d-flex align-center gap-2">
              <v-icon color="secondary">mdi-check-circle-outline</v-icon>
              <span class="text-body-2 text-grey-darken-3">Consumo directo en Microsoft Teams, Copilot Studio o Power
                BI</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- 5. LAS CARGAS DE TRABAJO DE FABRIC -->
    <v-sheet class="bg-white py-16 mt-16 border-y">
      <v-container>
        <div class="text-center mb-12">
          <span class="text-subtitle-2 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-2">
            SOLUCIÓN INTEGRAL PARA ANALISTAS
          </span>
          <h2 class="text-h3 font-weight-black text-primary mb-4">
            Todo tu ciclo de datos en una plataforma
          </h2>
          <div class="divider mx-auto mb-4" />
        </div>

        <v-row>
          <!-- Data Factory -->
          <v-col cols="12" md="4" sm="6" class="d-flex">
            <v-card class="workload-card w-100 pa-5 rounded-xl border elevation-0 d-flex gap-4">
              <v-icon color="primary" class="mt-1" size="24">mdi-factory</v-icon>
              <div>
                <h4 class="text-subtitle-1 font-weight-bold text-primary mb-1">Data Factory</h4>
                <p class="text-caption text-grey-darken-1 mb-0 leading-normal">
                  Crea flujos de datos e integra más de 170 fuentes (locales y en la nube) en lenguaje natural y con
                  guías claras.
                </p>
              </div>
            </v-card>
          </v-col>

          <!-- Data Engineering -->
          <v-col cols="12" md="4" sm="6" class="d-flex">
            <v-card class="workload-card w-100 pa-5 rounded-xl border elevation-0 d-flex gap-4">
              <v-icon color="primary" class="mt-1" size="24">mdi-code-braces</v-icon>
              <div>
                <h4 class="text-subtitle-1 font-weight-bold text-primary mb-1">Data Engineering</h4>
                <p class="text-caption text-grey-darken-1 mb-0 leading-normal">
                  Refina código en notebooks de Apache Spark de forma acelerada, automatiza tareas rutinarias y acelera
                  el desarrollo.
                </p>
              </div>
            </v-card>
          </v-col>

          <!-- Data Science -->
          <v-col cols="12" md="4" sm="6" class="d-flex">
            <v-card class="workload-card w-100 pa-5 rounded-xl border elevation-0 d-flex gap-4">
              <v-icon color="primary" class="mt-1" size="24">mdi-brain</v-icon>
              <div>
                <h4 class="text-subtitle-1 font-weight-bold text-primary mb-1">Data Science</h4>
                <p class="text-caption text-grey-darken-1 mb-0 leading-normal">
                  Crea, entrena y realiza el seguimiento de modelos de aprendizaje automático directamente sobre tus
                  datos unificados.
                </p>
              </div>
            </v-card>
          </v-col>

          <!-- Data Warehouse -->
          <v-col cols="12" md="4" sm="6" class="d-flex">
            <v-card class="workload-card w-100 pa-5 rounded-xl border elevation-0 d-flex gap-4">
              <v-icon color="primary" class="mt-1" size="24">mdi-warehouse</v-icon>
              <div>
                <h4 class="text-subtitle-1 font-weight-bold text-primary mb-1">Data Warehouse</h4>
                <p class="text-caption text-grey-darken-1 mb-0 leading-normal">
                  Convierte consultas en lenguaje natural a T-SQL complejo, autocompleta código y optimiza las
                  estructuras de tus almacenes.
                </p>
              </div>
            </v-card>
          </v-col>

          <!-- Real-Time Intelligence -->
          <v-col cols="12" md="4" sm="6" class="d-flex">
            <v-card class="workload-card w-100 pa-5 rounded-xl border elevation-0 d-flex gap-4">
              <v-icon color="primary" class="mt-1" size="24">mdi-chart-timeline-variant</v-icon>
              <div>
                <h4 class="text-subtitle-1 font-weight-bold text-primary mb-1">Real-Time Intelligence</h4>
                <p class="text-caption text-grey-darken-1 mb-0 leading-normal">
                  Genera reportes y analiza datos en tiempo real provenientes de dispositivos IoT o registros operativos
                  sin escribir código.
                </p>
              </div>
            </v-card>
          </v-col>

          <!-- Power BI -->
          <v-col cols="12" md="4" sm="6" class="d-flex">
            <v-card class="workload-card w-100 pa-5 rounded-xl border elevation-0 d-flex gap-4">
              <v-icon color="primary" class="mt-1" size="24">mdi-view-dashboard</v-icon>
              <div>
                <h4 class="text-subtitle-1 font-weight-bold text-primary mb-1">Power BI</h4>
                <p class="text-caption text-grey-darken-1 mb-0 leading-normal">
                  El líder indiscutible de visualización de datos comerciales, completamente integrado para responder a
                  preguntas de Q&A.
                </p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- 6. FOOTER CALL TO ACTION -->
    <v-sheet class="call-to-action-section bg-primary text-white py-16 position-relative overflow-hidden text-center">
      <div class="cta-overlay" />
      <v-container class="position-relative z-index-2">
        <h2 class="text-h3 font-weight-black mb-4">¿Preparado para desbloquear el valor de tus datos?</h2>
        <p class="text-h6 font-weight-regular text-grey-lighten-2 max-w-650 mx-auto mb-8 leading-relaxed">
          En IMAX PC te ayudamos a migrar tus bases de datos, integrar tus silos en OneLake y estructurar tu almacén de
          datos corporativo para que tu negocio lidere la era de la inteligencia artificial.
        </p>
        <v-btn class="cta-secondary-glow px-10 py-3" color="secondary" size="x-large" to="/contacto">
          Quiero Consultar con un Arquitecto de Datos
          <v-icon end size="20">mdi-database-cog</v-icon>
        </v-btn>
      </v-container>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'Microsoft Fabric & Inteligencia de Datos | Imax PC'
})

function scrollToSection(selector: string) {
  const el = document.querySelector(selector)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<script lang="ts">
import imgOneLake from '@/assets/images/onelake.webp'
export default {
  name: 'MicrosoftFabricPage',
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

@keyframes pulse-glow {

  0%,
  100% {
    filter: drop-shadow(0 0 5px rgba(77, 183, 227, 0.4));
    opacity: 0.9;
  }

  50% {
    filter: drop-shadow(0 0 20px rgba(77, 183, 227, 0.8));
    opacity: 1;
  }
}

.animate-pulse {
  animation: pulse-glow 2.5s infinite ease-in-out;
}

/* Data Flow Graphic */
.data-flow-container {
  width: 100%;
  max-width: 380px;
  height: 380px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-animation {
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(77, 183, 227, 0.25) 0%, transparent 70%);
  filter: blur(25px);
  animation: rotate-slow 15s infinite linear;
}

@keyframes rotate-slow {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.glassmorphism-card {
  background: rgba(255, 255, 255, 0.06) !important;
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  z-index: 2;
  transition: transform 0.3s;
}

.glassmorphism-card:hover {
  transform: translateY(-5px);
}

.animate-float {
  animation: floating-icon 3s infinite ease-in-out;
}

@keyframes floating-icon {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

/* Pilares */
.pilar-card {
  border-color: #E3E6EB !important;
  background-color: #FFFFFF;
  transition: transform 0.3s, border-color 0.3s;
}

.pilar-card:hover {
  transform: translateY(-6px);
  border-color: #4DB7E3 !important;
  box-shadow: 0 12px 24px rgba(26, 58, 110, 0.06) !important;
}

.icon-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Workloads */
.workload-card {
  border-color: #E3E6EB !important;
  background-color: #FFFFFF;
  transition: transform 0.3s, border-color 0.3s;
}

.workload-card:hover {
  transform: translateY(-5px);
  border-color: #4DB7E3 !important;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05) !important;
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
