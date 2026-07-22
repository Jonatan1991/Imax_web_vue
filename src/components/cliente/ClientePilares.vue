<template>
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
          <v-card class="pilar-card w-100 pa-5 d-flex flex-column justify-space-between elevation-3 rounded-xl">
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
                  :key="item"
                  class="d-flex align-center gap-2 mb-2"
                >
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
          <v-card class="pilar-card w-100 pa-5 d-flex flex-column justify-space-between elevation-3 rounded-xl">
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
                  :key="item"
                  class="d-flex align-center gap-2 mb-2"
                >
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
                      <circle
                        cx="50"
                        cy="50"
                        fill="none"
                        r="15"
                        stroke="#4DB7E3"
                        stroke-dasharray="6 3"
                        stroke-width="4"
                      />

                      <circle cx="50" cy="50" fill="#1A3A6E" r="7" />
                    </g>
                    <!-- Engranaje 2 -->
                    <g class="gear-animated-reverse">
                      <circle
                        cx="72"
                        cy="72"
                        fill="none"
                        r="10"
                        stroke="#43A047"
                        stroke-dasharray="4 2"
                        stroke-width="3"
                      />

                      <circle cx="72" cy="72" fill="#1A3A6E" r="4" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            <div class="pilar-footer mt-6 pt-4 border-top">
              <span class="text-caption text-grey font-weight-bold text-uppercase">Garantía: Respuesta en &lt; 15 min</span>
            </div>
          </v-card>
        </v-col>

        <!-- Pilar 3: Predictivo -->
        <v-col class="d-flex" cols="12" md="4">
          <v-card class="pilar-card w-100 pa-5 d-flex flex-column justify-space-between elevation-3 rounded-xl">
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
                  <path
                    class="drawing-path"
                    d="M 0 45 Q 30 20 60 40 T 120 15 T 180 30 L 200 25"
                    fill="none"
                    stroke="#43A047"
                    stroke-width="2"
                  />
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
                  :key="item"
                  class="d-flex align-center gap-2 mb-2"
                >
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
</template>

<style scoped>
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

.bg-blue-lighten-5 {
  background-color: #E1F5FE !important;
}

.bg-red-lighten-5 {
  background-color: #FFEBEE !important;
}

.bg-green-lighten-5 {
  background-color: #E8F5E9 !important;
}

.border-top {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
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

.gap-2 {
  gap: 8px;
}
</style>
