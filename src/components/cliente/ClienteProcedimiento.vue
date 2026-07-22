<template>
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
        <div
          v-for="(step, index) in [
            { title: 'Inventario Completo de Equipos', desc: 'Realizamos un mapa detallado de toda tu infraestructura: hardware, versiones de sistemas, licencias y estado físico de la red para un control riguroso.', icon: 'mdi-clipboard-list-outline', number: '01' },
            { title: 'Diagnóstico Técnico Inicial', desc: 'Analizamos a fondo los sistemas buscando vulnerabilidades de seguridad, cuellos de botella de velocidad, fallas de disco latentes y configuraciones incorrectas.', icon: 'mdi-magnify-plus-outline', number: '02' },
            { title: 'Ejecución del Mantenimiento', desc: 'Solucionamos los problemas detectados en el diagnóstico, instalamos parches del sistema operativo, actualizamos software, eliminamos malware y realizamos limpiezas internas.', icon: 'mdi-cog-sync-outline', number: '03' },
            { title: 'Validación de Funcionamiento', desc: 'Realizamos pruebas exhaustivas de carga en la red local, testeo de velocidades en Internet, comprobación de copias de seguridad y validación de seguridad informática.', icon: 'mdi-shield-check-outline', number: '04' },
            { title: 'Informe Técnico & Recomendaciones', desc: 'Te entregamos un reporte comprensible y transparente detallando el estado actual de tu tecnología, los trabajos realizados y propuestas de mejora.', icon: 'mdi-file-document-edit-outline', number: '05' },
          ]"
          :key="index"
          class="timeline-step d-flex flex-column flex-md-row justify-space-between align-center mb-12"
          :class="[index % 2 === 0 ? 'timeline-left' : 'timeline-right']"
        >
          <!-- Espacio vacío en desktop para balancear, o bloque en móvil -->
          <div class="timeline-block-empty d-none d-md-block" />

          <!-- Nodo con número -->
          <div class="timeline-node elevation-3 position-relative z-index-2">
            <v-icon color="white" size="24">{{ step.icon }}</v-icon>
            <div class="node-number-badge">{{ step.number }}</div>
          </div>

          <!-- Contenido del Paso -->
          <v-card class="timeline-card pa-5 elevation-2 rounded-lg">
            <h3 class="text-h6 font-weight-bold mb-2 text-primary">{{ step.title }}</h3>
            <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-0">{{ step.desc }}</p>
          </v-card>
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
</style>
