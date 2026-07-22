<template>
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
        <v-col
          v-for="(benefit, index) in [
            { title: 'Mayor Productividad', desc: 'Tus empleados no pierden tiempo esperando asistencia ni sufren por equipos lentos que retrasan sus labores.', icon: 'mdi-speedometer' },
            { title: 'Menos Averías', desc: 'La prevención nos permite resolver los fallos antes de que se manifiesten en los puestos de trabajo.', icon: 'mdi-shield-check' },
            { title: 'Máxima Seguridad', desc: 'Protegemos tu red, dispositivos y datos contra virus, ransomware y cualquier ciberamenaza moderna.', icon: 'mdi-lock-check' },
            { title: 'Equipos Más Rápidos', desc: 'Optimizamos el software y limpiamos el sistema periódicamente para que los ordenadores vuelen.', icon: 'mdi-rocket-launch' },
            { title: 'Reducción de Costes', desc: 'Tarifa mensual fija y planificada. Se acabaron los cargos imprevistos por reparaciones de emergencia.', icon: 'mdi-cash-minus' },
            { title: 'Mayor Vida Útil', desc: 'Un correcto mantenimiento físico y digital prolonga la vida útil de ordenadores y servidores hasta un 40%.', icon: 'mdi-pulse' },
            { title: 'Protección de Datos', desc: 'Copias automáticas encriptadas en cumplimiento estricto con el RGPD y normativas de seguridad.', icon: 'mdi-database' },
            { title: 'Continuidad de Negocio', desc: 'Garantizamos que tu oficina siga operativa pase lo que pase mediante planes de contingencia eficaces.', icon: 'mdi-update' },
            { title: 'Planificación Tecnológica', desc: 'Te asesoramos en la renovación del hardware y licencias para que inviertas de manera inteligente.', icon: 'mdi-calendar-range' },
          ]"
          :key="index"
          cols="12"
          md="4"
          sm="6"
        >
          <v-card class="benefit-card pa-5 h-100 elevation-1 rounded-xl transition-all hover-lift">
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
</style>
