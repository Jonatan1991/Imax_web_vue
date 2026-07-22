<template>
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
        <v-col
          v-for="(dif, idx) in [
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
          ]"
          :key="idx"
          cols="12"
          md="4"
          sm="6"
        >
          <v-card class="diferencia-card pa-5 h-100 glassmorphism border-lighten-1 rounded-xl transition-all">
            <v-icon class="mb-4" color="secondary" size="32">{{ dif.icon }}</v-icon>
            <h3 class="text-h6 font-weight-bold mb-2 text-white">{{ dif.title }}</h3>
            <p class="text-body-2 text-grey-lighten-2 leading-relaxed mb-0">{{ dif.desc }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

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

.text-secondary {
  color: #4DB7E3 !important;
}

.max-width-700 {
  max-width: 700px;
}

.leading-relaxed {
  line-height: 1.6 !important;
}

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

.glassmorphism {
  background: rgba(255, 255, 255, 0.08) !important;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}

.border-lighten-1 {
  border-color: rgba(255, 255, 255, 0.1) !important;
}
</style>
