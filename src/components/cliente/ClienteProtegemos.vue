<template>
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
          <div class="interactive-info-panel glassmorphism pa-5 rounded-xl border border-lighten-1">
            <template v-if="selectedProtectedNode !== null">
              <div class="d-flex align-center gap-3 mb-3">
                <div class="selected-node-icon bg-secondary-lighten-4 rounded-circle pa-3">
                  <v-icon color="secondary" size="28">
                    {{ protectedNodes.find(n => n.id === selectedProtectedNode)?.icon }}
                  </v-icon>
                </div>

                <h4 class="text-h6 font-weight-bold text-white mb-0">
                  {{ protectedNodes.find(n => n.id === selectedProtectedNode)?.name }}
                </h4>
              </div>

              <p class="text-body-2 text-grey-lighten-2 leading-relaxed mb-0">
                {{ protectedNodes.find(n => n.id === selectedProtectedNode)?.desc }}
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
                <path
                  class="transition-all"
                  :d="`M 450 300 L ${node.cx} ${node.cy}`"
                  :stroke="selectedProtectedNode === node.id ? '#4DB7E3' : 'rgba(77, 183, 227, 0.2)'"
                  :stroke-dasharray="selectedProtectedNode === node.id ? 'none' : '4 4'"
                  stroke-linecap="round"
                  :stroke-width="selectedProtectedNode === node.id ? 3 : 1.5"
                />
                <!-- Efecto de flujo de luz activo si está seleccionado -->
                <circle v-if="selectedProtectedNode === node.id" fill="#43A047" r="4">
                  <animateMotion dur="1s" :path="`M 450 300 L ${node.cx} ${node.cy}`" repeatCount="indefinite" />
                </circle>
              </g>

              <!-- Edificio Central (Sede de la Empresa) -->
              <g class="central-hq" @click="selectedProtectedNode = null">
                <circle
                  cx="450"
                  cy="300"
                  fill="#1A3A6E"
                  r="60"
                  stroke="#4DB7E3"
                  stroke-width="4"
                />

                <circle
                  class="spinning-outer-ring"
                  cx="450"
                  cy="300"
                  fill="none"
                  r="75"
                  stroke="#43A047"
                  stroke-dasharray="8 6"
                  stroke-width="1.5"
                />

                <foreignObject height="70" width="70" x="415" y="265">
                  <div class="node-icon-wrapper h-100 w-100 d-flex align-center justify-center">
                    <v-icon color="white" size="40">mdi-domain</v-icon>
                  </div>
                </foreignObject>
              </g>

              <!-- Nodos Perimetrales Interactivos -->
              <g
                v-for="node in protectedNodes"
                :key="'node-' + node.id"
                class="interactive-node-group"
                @click="selectedProtectedNode = node.id"
                @mouseenter="selectedProtectedNode = node.id"
              >
                <!-- Área activa grande para clic fácil -->
                <circle
                  :cx="node.cx"
                  :cy="node.cy"
                  fill="transparent"
                  r="35"
                  style="cursor: pointer;"
                />
                <!-- Anillo de brillo activo -->
                <circle
                  class="transition-all node-base-circle"
                  :cx="node.cx"
                  :cy="node.cy"
                  :fill="selectedProtectedNode === node.id ? 'rgba(77, 183, 227, 0.2)' : '#111827'"
                  :r="selectedProtectedNode === node.id ? 28 : 22"
                  :stroke="selectedProtectedNode === node.id ? '#4DB7E3' : '#1A3A6E'"
                  stroke-width="2"
                />
                <!-- Icono -->
                <foreignObject
                  height="30"
                  style="pointer-events: none;"
                  width="30"
                  :x="node.cx - 15"
                  :y="node.cy - 15"
                >
                  <div class="node-icon-wrapper h-100 w-100 d-flex align-center justify-center">
                    <v-icon :color="selectedProtectedNode === node.id ? 'white' : 'secondary'" size="20">
                      {{ node.icon }}
                    </v-icon>
                  </div>
                </foreignObject>
                <!-- Etiqueta del nodo -->
                <text
                  :fill="selectedProtectedNode === node.id ? '#4DB7E3' : '#B0BEC5'"
                  font-size="11"
                  font-weight="600"
                  style="pointer-events: none;"
                  text-anchor="middle"
                  :x="node.cx"
                  :y="node.cy + 38"
                >
                  {{ node.name }}
                </text>
              </g>
            </svg>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

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
</script>

<style scoped>
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

.opacity-20 {
  opacity: 0.2;
}

.z-index-2 {
  z-index: 2;
}

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

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
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

.glassmorphism {
  background: rgba(255, 255, 255, 0.08) !important;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}

.border-lighten-1 {
  border-color: rgba(255, 255, 255, 0.1) !important;
}

.selected-node-icon {
  background: rgba(77, 183, 227, 0.15) !important;
  border: 1px solid rgba(77, 183, 227, 0.3);
}

.node-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.gap-3 {
  gap: 12px;
}
</style>
