<template>
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
            <v-btn class="cta-primary-glow px-8" color="secondary" size="large" @click="$emit('request-audit')">
              Solicita una auditoría gratuita
              <v-icon end>mdi-arrow-right</v-icon>
            </v-btn>

            <v-btn class="cta-secondary-outline px-8" size="large" variant="outlined" @click="$emit('request-audit')">
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
              <path
                d="M 250 250 L 100 120"
                stroke="rgba(77, 183, 227, 0.4)"
                stroke-dasharray="8 4"
                stroke-width="2"
              />

              <path
                d="M 250 250 L 400 120"
                stroke="rgba(77, 183, 227, 0.4)"
                stroke-dasharray="8 4"
                stroke-width="2"
              />

              <path
                d="M 250 250 L 400 380"
                stroke="rgba(77, 183, 227, 0.4)"
                stroke-dasharray="8 4"
                stroke-width="2"
              />

              <path
                d="M 250 250 L 100 380"
                stroke="rgba(77, 183, 227, 0.4)"
                stroke-dasharray="8 4"
                stroke-width="2"
              />

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
                <circle
                  cx="250"
                  cy="250"
                  fill="#1A3A6E"
                  r="45"
                  stroke="#4DB7E3"
                  stroke-width="3"
                />

                <circle
                  class="pulsing-ring"
                  cx="250"
                  cy="250"
                  fill="none"
                  r="55"
                  stroke="#4DB7E3"
                  stroke-width="1"
                />

                <foreignObject height="50" width="50" x="225" y="225">
                  <div class="node-icon-wrapper"><v-icon color="secondary" size="30">mdi-server</v-icon></div>
                </foreignObject>
              </g>

              <!-- Nodos Periféricos -->
              <!-- 1. Seguridad (Firewall) -->
              <g class="network-node">
                <circle
                  cx="100"
                  cy="120"
                  fill="#111827"
                  r="30"
                  stroke="#4DB7E3"
                  stroke-width="2"
                />

                <foreignObject height="30" width="30" x="85" y="105">
                  <div class="node-icon-wrapper"><v-icon color="secondary" size="18">mdi-shield-lock</v-icon></div>
                </foreignObject>

                <text
                  fill="#FFFFFF"
                  font-size="11"
                  font-weight="bold"
                  text-anchor="middle"
                  x="100"
                  y="80"
                >Seguridad EDR</text>
              </g>

              <!-- 2. Equipos (Pc) -->
              <g class="network-node">
                <circle
                  cx="400"
                  cy="120"
                  fill="#111827"
                  r="30"
                  stroke="#4DB7E3"
                  stroke-width="2"
                />

                <foreignObject height="30" width="30" x="385" y="105">
                  <div class="node-icon-wrapper"><v-icon color="secondary" size="18">mdi-monitor</v-icon></div>
                </foreignObject>

                <text
                  fill="#FFFFFF"
                  font-size="11"
                  font-weight="bold"
                  text-anchor="middle"
                  x="400"
                  y="80"
                >Sistemas</text>
              </g>

              <!-- 3. Backup (Cloud) -->
              <g class="network-node">
                <circle
                  cx="400"
                  cy="380"
                  fill="#111827"
                  r="30"
                  stroke="#4DB7E3"
                  stroke-width="2"
                />

                <foreignObject height="30" width="30" x="385" y="365">
                  <div class="node-icon-wrapper"><v-icon color="secondary" size="18">mdi-cloud-upload</v-icon></div>
                </foreignObject>

                <text
                  fill="#FFFFFF"
                  font-size="11"
                  font-weight="bold"
                  text-anchor="middle"
                  x="400"
                  y="425"
                >Copias Nube</text>
              </g>

              <!-- 4. Comunicaciones (Red/Wifi) -->
              <g class="network-node">
                <circle
                  cx="100"
                  cy="380"
                  fill="#111827"
                  r="30"
                  stroke="#4DB7E3"
                  stroke-width="2"
                />

                <foreignObject height="30" width="30" x="85" y="365">
                  <div class="node-icon-wrapper"><v-icon color="secondary" size="18">mdi-wifi</v-icon></div>
                </foreignObject>

                <text
                  fill="#FFFFFF"
                  font-size="11"
                  font-weight="bold"
                  text-anchor="middle"
                  x="100"
                  y="425"
                >Redes & WiFi</text>
              </g>
            </svg>

            <!-- Monitorización simulada flotante -->
            <div
              class="floating-panel pa-3 text-caption glassmorphism d-flex align-center gap-2"
              style="top: 20%; right: 5%;"
            >
              <div class="status-pulse-green" />

              <div>
                <strong>Servidor Principal</strong><br>
                <span class="text-grey-lighten-1">CPU: 14% | Temp: 42°C</span>
              </div>
            </div>

            <div
              class="floating-panel pa-3 text-caption glassmorphism d-flex align-center gap-2"
              style="bottom: 25%; left: 5%;"
            >
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
</template>

<script setup lang="ts">
  defineEmits(['request-audit'])
</script>

<style scoped>
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

.text-gradient {
  background: linear-gradient(135deg, #FFFFFF 0%, #4DB7E3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-light-blue-grey-2 {
  color: #CFD8DC;
}

.leading-relaxed {
  line-height: 1.6 !important;
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

.hero-stats-row {
  margin-top: 48px;
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
  0%, 100% {
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

.glassmorphism {
  background: rgba(255, 255, 255, 0.08) !important;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}

.z-index-2 {
  z-index: 2;
}

.gap-4 {
  gap: 16px;
}

.gap-8 {
  gap: 32px;
}

.gap-2 {
  gap: 8px;
}
</style>
