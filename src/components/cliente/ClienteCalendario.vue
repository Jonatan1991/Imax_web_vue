<template>
  <section class="section-calendario py-16 bg-light-gray">
    <v-container>
      <div class="text-center mb-16">
        <div class="section-subtitle">PLANIFICACIÓN CONTINUA</div>

        <h2 class="text-h3 font-weight-bold mb-4 header-text">
          Calendario de Tareas de Mantenimiento
        </h2>

        <p class="text-body-1 mx-auto max-width-700">
          Nuestros procesos de mantenimiento se estructuran en diferentes frecuencias temporales para asegurar que
          ningún detalle se pase por alto.
        </p>
      </div>

      <div class="calendar-horizontal-scroll-container py-4">
        <div class="calendar-timeline-row">
          <div
            v-for="(cal, i) in [
              { freq: 'Monitorización Continua', desc: 'Supervisión de sensores de hardware, espacio de discos, carga del procesador y disponibilidad de los servidores las 24 horas del día.', icon: 'mdi-eye-outline', color: 'error' },
              { freq: 'Copias de Seguridad Diarias', desc: 'Verificación automática de backups de archivos y bases de datos locales y replicación en nube cifrada.', icon: 'mdi-calendar-today', color: 'info' },
              { freq: 'Actualizaciones Semanales', desc: 'Aplicación de parches en sistemas operativos Windows/macOS y software ofimático crítico fuera de horario laboral.', icon: 'mdi-calendar-week', color: 'primary' },
              { freq: 'Revisiones Mensuales', desc: 'Análisis detallado de logs del sistema, estado del antivirus centralizado y limpieza manual remota de almacenamiento.', icon: 'mdi-calendar-month', color: 'success' },
              { freq: 'Limpiezas Trimestrales', desc: 'Mantenimiento físico preventivo en las visitas in-situ: soplado de polvo, ordenación de cableado y revisión de ventilaciones.', icon: 'mdi-calendar-multiselect', color: 'secondary' },
              { freq: 'Auditorías Semestrales', desc: 'Pruebas de restauración real de copias, auditorías de permisos compartidos de archivos y testeo de velocidad de red.', icon: 'mdi-shield-check-outline', color: 'warning' },
              { freq: 'Inventario Anual', desc: 'Revisión y actualización del inventario general de activos, análisis del ciclo de vida de los equipos y planificación de mejoras.', icon: 'mdi-clipboard-list', color: 'primary' },
            ]"
            :key="i"
            class="calendar-card pa-5 elevation-2 rounded-xl"
          >
            <div class="d-flex align-center justify-space-between mb-4">
              <v-chip
                class="text-uppercase tracking-wider font-weight-bold"
                :color="cal.color"
                size="small"
                variant="flat"
              >
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
</style>
