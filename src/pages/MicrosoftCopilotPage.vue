<template>
  <div class="microsoft-copilot-page bg-background min-vh-100 pb-16">
    <!-- 1. HERO PRINCIPAL -->
    <header class="hero-section text-white d-flex align-center position-relative overflow-hidden">
      <div class="gradient-overlay" />
      <div class="tech-grid-background" />

      <v-container class="position-relative z-index-2 py-16">
        <v-row align="center">
          <v-col cols="12" md="7" class="text-left animate-slide-up">
            <div class="premium-tag mb-4">PRODUCTIVIDAD E INTELIGENCIA ARTIFICIAL</div>
            <h1 class="text-h2 font-weight-black mb-4 text-gradient leading-tight">
              Microsoft 365 Copilot
            </h1>
            <h2 class="text-h4 font-weight-bold text-secondary mb-6">
              La IA diseñada para el trabajo del futuro
            </h2>
            <p class="text-h6 text-grey-lighten-2 mb-8 leading-relaxed font-weight-regular max-w-650">
              Pasa de la simple asistencia conversacional a la automatización agentica real. Empodera a tu equipo con un coworker inteligente integrado en sus herramientas diarias y transforma tus procesos de negocio.
            </p>
            <div class="d-flex flex-wrap gap-4">
              <v-btn class="cta-primary-glow px-8" color="secondary" size="large" to="/contacto">
                Comenzar Transformación
                <v-icon end>mdi-rocket-launch</v-icon>
              </v-btn>
              <v-btn class="cta-secondary-outline px-8" size="large" variant="outlined" @click="scrollToSection('#comparativa')">
                Ver Capacidades
              </v-btn>
            </div>
          </v-col>

          <v-col cols="12" md="5" class="d-flex justify-center position-relative py-8">
            <!-- Representación Visual de Copilot (Glow effects) -->
            <div class="copilot-glow-container">
              <div class="glow-orb main-orb"></div>
              <div class="glow-orb secondary-orb"></div>
              <v-card class="glassmorphism-card pa-6 text-center rounded-xl elevation-10">
                <v-icon color="secondary" size="80" class="mb-4 animate-pulse">mdi-microsoft-copilot</v-icon>
                <h3 class="text-h5 font-weight-bold text-white mb-2">Microsoft IQ Platform</h3>
                <p class="text-caption text-grey-lighten-1 mb-4">
                  Orquestación inteligente entre personas, datos y procesos.
                </p>
                <div class="d-flex justify-center gap-2 flex-wrap">
                  <v-chip class="font-weight-medium" size="small" color="secondary" variant="flat">Work IQ</v-chip>
                  <v-chip class="font-weight-medium" size="small" color="secondary" variant="flat">Foundry IQ</v-chip>
                  <v-chip class="font-weight-medium" size="small" color="secondary" variant="flat">Fabric IQ</v-chip>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </header>

    <!-- 2. LA EMPRESA FRONTERA -->
    <v-container class="mt-16">
      <div class="text-center mb-12">
        <span class="text-subtitle-2 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-2">
          LA VISIÓN "FRONTIER FIRM"
        </span>
        <h2 class="text-h3 font-weight-black text-primary mb-4">
          ¿Qué es una Empresa Frontera?
        </h2>
        <div class="divider mx-auto mb-4" />
        <p class="text-body-1 text-grey-darken-2 max-w-700 mx-auto">
          Es aquella organización que ha integrado la inteligencia artificial no solo como un buscador de información, sino como el motor operativo del negocio.
        </p>
      </div>

      <v-row justify="center">
        <!-- Tarjeta 1: Productividad -->
        <v-col cols="12" md="4" class="d-flex">
          <v-card class="frontier-card w-100 pa-6 d-flex flex-column rounded-xl border elevation-1 text-center">
            <div class="icon-circle mx-auto mb-6 bg-blue-lighten-5">
              <v-icon color="primary" size="32">mdi-account-star</v-icon>
            </div>
            <h3 class="text-h5 font-weight-bold text-primary mb-3">Productividad</h3>
            <div class="chip-holder mb-4">
              <v-chip color="primary" class="font-weight-bold">M365 Copilot</v-chip>
            </div>
            <p class="text-body-2 text-grey-darken-1 leading-relaxed">
              Cada persona de tu equipo cuenta con un asistente de IA personalizado que entiende su estilo de trabajo, correos, documentos y reuniones.
            </p>
          </v-card>
        </v-col>

        <!-- Tarjeta 2: Automatización -->
        <v-col cols="12" md="4" class="d-flex">
          <v-card class="frontier-card w-100 pa-6 d-flex flex-column rounded-xl border elevation-1 text-center">
            <div class="icon-circle mx-auto mb-6 bg-cyan-lighten-5">
              <v-icon color="secondary" size="32">mdi-robot-industrial</v-icon>
            </div>
            <h3 class="text-h5 font-weight-bold text-primary mb-3">Automatización</h3>
            <div class="chip-holder mb-4">
              <v-chip color="secondary" class="font-weight-bold text-white">Copilot + Agentes</v-chip>
            </div>
            <p class="text-body-2 text-grey-darken-1 leading-relaxed">
              Los procesos de negocio clave se automatizan de extremo a extremo mediante agentes inteligentes creados con Copilot Studio.
            </p>
          </v-card>
        </v-col>

        <!-- Tarjeta 3: Supervisión -->
        <v-col cols="12" md="4" class="d-flex">
          <v-card class="frontier-card w-100 pa-6 d-flex flex-column rounded-xl border elevation-1 text-center">
            <div class="icon-circle mx-auto mb-6 bg-purple-lighten-5">
              <v-icon color="purple" size="32">mdi-account-cog</v-icon>
            </div>
            <h3 class="text-h5 font-weight-bold text-primary mb-3">Supervisión</h3>
            <div class="chip-holder mb-4">
              <v-chip color="purple" class="font-weight-bold text-white">Empresa Frontier</v-chip>
            </div>
            <p class="text-body-2 text-grey-darken-1 leading-relaxed">
              Una empresa gestionada por humanos y operada por IA. El control y las directivas críticas siguen en tus manos mientras los agentes ejecutan en segundo plano.
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- 3. CUATRO MODOS DE TRABAJAR CON IA -->
    <v-sheet class="bg-grey-lighten-4 py-16 mt-16 border-y">
      <v-container>
        <v-row align="center">
          <v-col cols="12" lg="5">
            <span class="text-subtitle-2 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-2">
              MÁS ALLÁ DEL SIMPLE PROMPT
            </span>
            <h2 class="text-h3 font-weight-black text-primary mb-6 leading-tight">
              Los 4 Modos de Trabajo en la Era de la IA
            </h2>
            <p class="text-body-1 text-grey-darken-2 mb-6 leading-relaxed">
              La IA moderna amplía enormemente quién puede realizar trabajo de alto valor. Dependiendo de la complejidad y tu nivel de involucramiento, puedes colaborar con la IA de 4 formas diferentes:
            </p>
            <div class="d-flex align-center gap-4 py-4 px-6 rounded-lg bg-white border border-primary-lighten-4 mb-4">
              <span class="text-h4 font-weight-bold text-primary">49%</span>
              <p class="text-body-2 text-grey-darken-3 mb-0 leading-normal">
                de las interacciones corporativas con IA apoyan el <strong>análisis avanzado, el razonamiento y la toma de decisiones críticas</strong>.
              </p>
            </div>
          </v-col>

          <v-col cols="12" lg="7">
            <v-row>
              <v-col cols="12" sm="6">
                <v-card class="pa-5 rounded-xl border elevation-0 h-100 hover-border-secondary">
                  <div class="d-flex align-center gap-3 mb-3">
                    <v-icon color="secondary">mdi-bullseye-arrow</v-icon>
                    <h4 class="text-h6 font-weight-bold text-primary mb-0">Delegación</h4>
                  </div>
                  <p class="text-caption text-grey-darken-2 mb-0">
                    El humano establece la dirección general y la IA ejecuta procesos estructurados, agendas o generación y adaptación de contenido.
                  </p>
                </v-card>
              </v-col>

              <v-col cols="12" sm="6">
                <v-card class="pa-5 rounded-xl border elevation-0 h-100 hover-border-secondary">
                  <div class="d-flex align-center gap-3 mb-3">
                    <v-icon color="secondary">mdi-account-group</v-icon>
                    <h4 class="text-h6 font-weight-bold text-primary mb-0">Colaboración</h4>
                  </div>
                  <p class="text-caption text-grey-darken-2 mb-0">
                    Co-creación interactiva en varios ciclos. La IA construye análisis paso a paso donde cada resultado refina la siguiente pregunta.
                  </p>
                </v-card>
              </v-col>

              <v-col cols="12" sm="6">
                <v-card class="pa-5 rounded-xl border elevation-0 h-100 hover-border-secondary">
                  <div class="d-flex align-center gap-3 mb-3">
                    <v-icon color="secondary">mdi-help-circle-outline</v-icon>
                    <h4 class="text-h6 font-weight-bold text-primary mb-0">Consulta</h4>
                  </div>
                  <p class="text-caption text-grey-darken-2 mb-0">
                    Búsqueda ágil de datos y definiciones, reescritura de textos para mayor claridad o petición de consejos y revisiones de material en curso.
                  </p>
                </v-card>
              </v-col>

              <v-col cols="12" sm="6">
                <v-card class="pa-5 rounded-xl border elevation-0 h-100 hover-border-secondary">
                  <div class="d-flex align-center gap-3 mb-3">
                    <v-icon color="secondary">mdi-compass-outline</v-icon>
                    <h4 class="text-h6 font-weight-bold text-primary mb-0">Exploración</h4>
                  </div>
                  <p class="text-caption text-grey-darken-2 mb-0">
                    Pruebas e innovación. Evaluar si la IA puede resolver un nuevo proceso de negocio y descubrir los límites autónomos del agente.
                  </p>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- 4. COMPARATIVA COPILOT VS COWORK -->
    <v-container id="comparativa" class="mt-16">
      <div class="text-center mb-12">
        <span class="text-subtitle-2 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-2">
          LA EVOLUCIÓN AGENTICA
        </span>
        <h2 class="text-h3 font-weight-black text-primary mb-4">
          M365 Copilot vs Copilot Cowork
        </h2>
        <div class="divider mx-auto mb-4" />
        <p class="text-body-1 text-grey-darken-2 max-w-700 mx-auto">
          ¿En qué se diferencia un asistente de chat convencional de un agente de ejecución completo?
        </p>
      </div>

      <!-- Cuadrícula Comparativa Visual -->
      <v-row class="mt-4" justify="center">
        <!-- Columna 1: Copilot Standard -->
        <v-col cols="12" md="6" class="d-flex">
          <v-card class="compare-card compare-copilot w-100 pa-6 rounded-xl border elevation-2">
            <div class="d-flex align-center justify-space-between mb-6">
              <h3 class="text-h5 font-weight-black text-primary">Microsoft 365 Copilot</h3>
              <v-chip color="primary" class="font-weight-bold">Asistente conversacional</v-chip>
            </div>
            <div class="compare-bullets">
              <div class="bullet-item d-flex gap-3 mb-4">
                <v-icon color="primary" class="mt-1">mdi-chevron-right</v-icon>
                <div>
                  <strong>Interacción prompt a prompt:</strong> Responde a tus preguntas directamente en el flujo de trabajo.
                </div>
              </div>
              <div class="bullet-item d-flex gap-3 mb-4">
                <v-icon color="primary" class="mt-1">mdi-chevron-right</v-icon>
                <div>
                  <strong>Acciones puntuales:</strong> Excelente para resumir correos, generar borradores o analizar hojas de cálculo individuales.
                </div>
              </div>
              <div class="bullet-item d-flex gap-3 mb-4">
                <v-icon color="primary" class="mt-1">mdi-chevron-right</v-icon>
                <div>
                  <strong>Modelos del mercado:</strong> Basado principalmente en los últimos modelos GPT de OpenAI.
                </div>
              </div>
              <div class="bullet-item d-flex gap-3 mb-4">
                <v-icon color="primary" class="mt-1">mdi-chevron-right</v-icon>
                <div>
                  <strong>Control individual:</strong> Tú ejecutas y activas cada acción de forma secuencial.
                </div>
              </div>
            </div>
          </v-card>
        </v-col>

        <!-- Columna 2: Copilot Cowork -->
        <v-col cols="12" md="6" class="d-flex">
          <v-card class="compare-card compare-cowork w-100 pa-6 rounded-xl border border-secondary elevation-4 position-relative">
            <div class="best-value-badge">VANGUARDIA</div>
            <div class="d-flex align-center justify-space-between mb-6">
              <h3 class="text-h5 font-weight-black text-white">Copilot Cowork (Agentic)</h3>
              <v-chip color="secondary" class="font-weight-bold text-white">Agente de ejecución</v-chip>
            </div>
            <div class="compare-bullets text-white">
              <div class="bullet-item d-flex gap-3 mb-4">
                <v-icon color="secondary" class="mt-1">mdi-check-all</v-icon>
                <div>
                  <strong>Planificación Autónoma:</strong> Describes un objetivo general y el agente planifica e inicia las tareas necesarias.
                </div>
              </div>
              <div class="bullet-item d-flex gap-3 mb-4">
                <v-icon color="secondary" class="mt-1">mdi-check-all</v-icon>
                <div>
                  <strong>Flujos multipaso:</strong> Realiza trabajos complejos de larga duración interactuando entre múltiples aplicaciones y sistemas de forma autónoma.
                </div>
              </div>
              <div class="bullet-item d-flex gap-3 mb-4">
                <v-icon color="secondary" class="mt-1">mdi-check-all</v-icon>
                <div>
                  <strong>Multimodelo (GPT + Claude):</strong> Aprovecha la increíble capacidad de razonamiento de Anthropic Claude y la redacción de GPT de forma integrada.
                </div>
              </div>
              <div class="bullet-item d-flex gap-3 mb-4">
                <v-icon color="secondary" class="mt-1">mdi-check-all</v-icon>
                <div>
                  <strong>Seguridad y Aprobaciones:</strong> Pide aprobación humana previa antes de realizar cualquier acción sensible o crítica.
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- 5. PROPUESTA DE VALOR / CASOS DE USO -->
    <v-sheet class="bg-white py-16 mt-16 border-y">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <v-img
              alt="Microsoft Agentic AI"
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
              class="rounded-xl border shadow-lg"
              max-height="400"
              cover
            />
          </v-col>

          <v-col cols="12" md="6" class="ps-md-10">
            <span class="text-subtitle-2 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-2">
              APLICACIÓN PRÁCTICA
            </span>
            <h2 class="text-h3 font-weight-black text-primary mb-6 leading-tight">
              ¿Qué puedes lograr con Copilot?
            </h2>
            
            <div class="use-case-list">
              <div class="d-flex gap-4 mb-5">
                <v-icon color="primary" class="mt-1" size="24">mdi-email-fast</v-icon>
                <div>
                  <h4 class="text-subtitle-1 font-weight-bold text-primary mb-1">Redacción y Comunicación</h4>
                  <p class="text-body-2 text-grey-darken-1 mb-0 leading-relaxed">
                    Escribe correos profesionales, propuestas para clientes y resúmenes de reuniones largas en segundos, adaptando el tono y enfoque automáticamente.
                  </p>
                </div>
              </div>

              <div class="d-flex gap-4 mb-5">
                <v-icon color="primary" class="mt-1" size="24">mdi-file-chart</v-icon>
                <div>
                  <h4 class="text-subtitle-1 font-weight-bold text-primary mb-1">Análisis e Informes Financieros</h4>
                  <p class="text-body-2 text-grey-darken-1 mb-0 leading-relaxed">
                    Extrae tendencias de Excel, genera predicciones de ventas y visualizaciones complejas sin escribir una sola fórmula de forma manual.
                  </p>
                </div>
              </div>

              <div class="d-flex gap-4">
                <v-icon color="primary" class="mt-1" size="24">mdi-shield-lock-outline</v-icon>
                <div>
                  <h4 class="text-subtitle-1 font-weight-bold text-primary mb-1">Gobernanza del Cumplimiento (GDPR)</h4>
                  <p class="text-body-2 text-grey-darken-1 mb-0 leading-relaxed">
                    Tus datos corporativos nunca se utilizan para entrenar los modelos públicos. Todo el procesamiento se realiza de forma aislada dentro de tu propio inquilino de M365 (Data Boundary de la UE).
                  </p>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- 6. TARIFAS Y PLANES -->
    <v-container class="mt-16">
      <div class="text-center mb-12">
        <span class="text-subtitle-2 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-2">
          INVERSIÓN E INCENTIVOS
        </span>
        <h2 class="text-h3 font-weight-black text-primary mb-4">
          Nuestras Ofertas de Copilot
        </h2>
        <div class="divider mx-auto mb-4" />
        <p class="text-body-1 text-grey-darken-2 max-w-700 mx-auto">
          Licencias flexibles y promociones exclusivas del canal de socios para acelerar tu adopción digital.
        </p>
      </div>

      <v-row justify="center" align="stretch">
        <!-- Plan Chat -->
        <v-col cols="12" md="4" class="d-flex">
          <v-card class="pricing-card w-100 pa-6 d-flex flex-column justify-space-between rounded-xl border elevation-1">
            <div>
              <h3 class="text-h5 font-weight-bold text-primary mb-2">Copilot Chat</h3>
              <p class="text-caption text-grey mb-6">Asistente básico de chat web seguro</p>
              <div class="price-container mb-6">
                <span class="text-h4 font-weight-black text-primary">Incluido</span>
                <span class="text-caption text-grey d-block">Con tu licencia Microsoft 365 elegible</span>
              </div>
              <v-divider class="mb-6" />
              <ul class="pricing-features text-body-2 text-grey-darken-3 ps-4">
                <li class="mb-2">Chat de IA seguro basado en la web (LLM)</li>
                <li class="mb-2">Protección de datos empresariales integrada</li>
                <li class="mb-2">Copilot Pages y generación de imágenes</li>
                <li class="mb-2 text-decoration-line-through text-grey">Sin acceso a tus datos de trabajo (Graph)</li>
              </ul>
            </div>
            <v-btn block color="primary" variant="outlined" class="mt-6 rounded-lg font-weight-bold" to="/contacto">
              Consultar Licencia M365
            </v-btn>
          </v-card>
        </v-col>

        <!-- Plan Business (Más Vendido) -->
        <v-col cols="12" md="4" class="d-flex">
          <v-card class="pricing-card w-100 pa-6 d-flex flex-column justify-space-between rounded-xl border border-secondary elevation-3 position-relative">
            <div class="popular-tag">MÁS POPULAR</div>
            <div>
              <h3 class="text-h5 font-weight-bold text-primary mb-2">Copilot Business</h3>
              <p class="text-caption text-grey mb-6">Productividad integrada en aplicaciones Office</p>
              <div class="price-container mb-6">
                <span class="text-h4 font-weight-black text-primary">21 USD</span>
                <span class="text-caption text-grey"> / usuario / mes (anual)</span>
                <div class="promo-pill mt-2">~15% OFF Promo CSP Active</div>
              </div>
              <v-divider class="mb-6" />
              <ul class="pricing-features text-body-2 text-grey-darken-3 ps-4">
                <li class="mb-2">Acceso completo a tus datos vía Microsoft Graph</li>
                <li class="mb-2">Integrado en Word, Excel, PPT, Outlook y Teams</li>
                <li class="mb-2">Diseñado para pymes (hasta 300 usuarios)</li>
                <li class="mb-2">Creación de agentes básicos con Copilot Studio</li>
              </ul>
            </div>
            <v-btn block color="secondary" class="mt-6 rounded-lg font-weight-bold text-white elevation-1" to="/contacto">
              Activar Licencia
            </v-btn>
          </v-card>
        </v-col>

        <!-- Plan Enterprise -->
        <v-col cols="12" md="4" class="d-flex">
          <v-card class="pricing-card w-100 pa-6 d-flex flex-column justify-space-between rounded-xl border elevation-1">
            <div>
              <h3 class="text-h5 font-weight-bold text-primary mb-2">Copilot Enterprise</h3>
              <p class="text-caption text-grey mb-6">IA agentica corporativa sin limitaciones</p>
              <div class="price-container mb-6">
                <span class="text-h4 font-weight-black text-primary">30 USD</span>
                <span class="text-caption text-grey"> / usuario / mes (anual)</span>
                <div class="promo-pill promo-blue mt-2">Hasta 40% de descuento por volumen</div>
              </div>
              <v-divider class="mb-6" />
              <ul class="pricing-features text-body-2 text-grey-darken-3 ps-4">
                <li class="mb-2">Todo lo incluido en Copilot Business</li>
                <li class="mb-2">Sin límite de usuarios contratados</li>
                <li class="mb-2">Análisis de uso avanzado con Copilot Analytics</li>
                <li class="mb-2">Capacidades agenticas multimodelo a gran escala</li>
              </ul>
            </div>
            <v-btn block color="primary" variant="outlined" class="mt-6 rounded-lg font-weight-bold" to="/contacto">
              Pedir Presupuesto
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- 7. FOOTER CALL TO ACTION -->
    <v-sheet class="call-to-action-section bg-primary text-white py-16 mt-16 position-relative overflow-hidden text-center">
      <div class="cta-overlay" />
      <v-container class="position-relative z-index-2">
        <h2 class="text-h3 font-weight-black mb-4">¿Preparado para convertirte en una Frontier Firm?</h2>
        <p class="text-h6 font-weight-regular text-grey-lighten-2 max-w-650 mx-auto mb-8 leading-relaxed">
          En IMAX PC no solo te vendemos las licencias. Te acompañamos en todo el proceso de adopción, auditoría de datos, seguridad corporativa y capacitación de tu equipo.
        </p>
        <v-btn class="cta-secondary-glow px-10 py-3" color="secondary" size="x-large" to="/contacto">
          Quiero una Consultoría Gratuita
          <v-icon end size="20">mdi-headset</v-icon>
        </v-btn>
      </v-container>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'

  onMounted(() => {
    document.title = 'Microsoft 365 Copilot & IA | Imax PC'
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
    name: 'MicrosoftCopilotPage',
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

.gap-3 {
  gap: 12px;
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

/* Copilot Graphic */
.copilot-glow-container {
  width: 100%;
  max-width: 380px;
  height: 380px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(50px);
}

.main-orb {
  width: 200px;
  height: 200px;
  background: rgba(77, 183, 227, 0.3);
  animation: float-slow 8s infinite alternate;
}

.secondary-orb {
  width: 160px;
  height: 160px;
  background: rgba(156, 39, 176, 0.2);
  animation: float-slow 10s infinite alternate-reverse;
  animation-delay: 2s;
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

@keyframes float-slow {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(20px, -20px) scale(1.1); }
}

.animate-pulse {
  animation: pulse-glow 2.5s infinite ease-in-out;
}

@keyframes pulse-glow {
  0%, 100% { filter: drop-shadow(0 0 5px rgba(77, 183, 227, 0.4)); opacity: 0.9; }
  50% { filter: drop-shadow(0 0 20px rgba(77, 183, 227, 0.8)); opacity: 1; }
}

/* Frontier Cards */
.frontier-card {
  border-color: #E3E6EB !important;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
}

.frontier-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(26, 58, 110, 0.08) !important;
  border-color: #4DB7E3 !important;
}

.icon-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Comparison Cards */
.compare-card {
  transition: all 0.3s ease-in-out;
}

.compare-copilot {
  background-color: #FFFFFF;
  border-color: #E3E6EB !important;
}

.compare-copilot:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.06) !important;
}

.compare-cowork {
  background: linear-gradient(135deg, #1A3A6E 0%, #0A192F 100%) !important;
  color: white;
}

.compare-cowork:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 32px rgba(77, 183, 227, 0.25) !important;
}

.best-value-badge {
  position: absolute;
  top: -12px;
  right: 24px;
  background-color: #4DB7E3;
  color: #1A3A6E;
  font-size: 0.7rem;
  font-weight: 900;
  padding: 4px 12px;
  border-radius: 20px;
  letter-spacing: 1px;
  box-shadow: 0 4px 10px rgba(77, 183, 227, 0.4);
}

.bullet-item v-icon {
  flex-shrink: 0;
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

.pricing-features li.text-decoration-line-through::before {
  content: "✗";
  color: #E53935;
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

.hover-border-secondary:hover {
  border-color: #4DB7E3 !important;
}
</style>
