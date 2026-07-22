<template>
  <section class="split-narrative-section py-16 position-relative" :class="{ 'solution-mode': solutionActive }">
    <v-container>
      <div class="text-center mb-12">
        <div class="section-subtitle">ESCENARIOS TECNOLÓGICOS</div>

        <h2 class="text-h3 font-weight-bold mb-4 header-text">
          ¿Cómo gestiona tu empresa la informática?
        </h2>

        <p class="text-body-1 mx-auto max-width-700">
          Compara las consecuencias de trabajar sin soporte informático preventivo frente a la tranquilidad de contar
          con nuestro servicio premium.
        </p>

        <!-- Selector manual del estado (Simulando scroll) -->
        <div class="d-flex justify-center mt-6">
          <v-btn-toggle
            v-model="solutionActive"
            class="rounded-pill overflow-hidden shadow-sm"
            color="primary"
            mandatory
            variant="outlined"
          >
            <v-btn class="px-6" :value="false">El Escenario Crítico</v-btn>
            <v-btn class="px-6" :value="true">La Solución IMAX</v-btn>
          </v-btn-toggle>
        </div>
      </div>

      <v-window v-model="solutionActive" class="overflow-visible py-4">
        <!-- Pestaña 1: El Problema -->
        <v-window-item :value="false">
          <v-row>
            <v-col
              v-for="(prob, i) in [
                { title: 'Equipos lentos', desc: 'Pérdida de rendimiento diario de los empleados debido a archivos basura, falta de optimización y hardware obsoleto.', icon: 'mdi-speedometer-slow' },
                { title: 'Averías inesperadas', desc: 'Fallos de hardware que detienen la actividad de la oficina por completo sin aviso previo.', icon: 'mdi-alert-octagon-outline' },
                { title: 'Virus y Ciberataques', desc: 'Pérdidas económicas severas e interrupción de la reputación digital por malware o phishing.', icon: 'mdi-virus' },
                { title: 'Pérdida de información', desc: 'Falta de backups diarios comprobados que imposibilita recuperar datos en caso de robo o rotura.', icon: 'mdi-database-remove' },
                { title: 'Empleados parados', desc: 'Personal esperando soporte durante horas por incidencias simples que podrían resolverse al instante.', icon: 'mdi-account-clock-outline' },
                { title: 'Reparaciones costosas', desc: 'Tarifas abusivas por servicios urgentes cuando ocurre un problema imprevisto grave.', icon: 'mdi-cash-remove' },
              ]"
              :key="i"
              cols="12"
              md="4"
            >
              <v-card class="problem-card border-left-danger pa-5 elevation-1">
                <div class="d-flex align-center gap-4 mb-4">
                  <div class="problem-icon-wrapper rounded-circle">
                    <v-icon color="error" size="28">{{ prob.icon }}</v-icon>
                  </div>

                  <h3 class="text-h6 font-weight-bold text-grey-darken-3">{{ prob.title }}</h3>
                </div>

                <p class="text-body-2 text-grey-darken-1 leading-relaxed">{{ prob.desc }}</p>
              </v-card>
            </v-col>
          </v-row>

          <div class="problem-footer-note text-center mt-10 rounded-lg pa-5">
            <v-icon class="mr-2" color="error">mdi-alert-circle</v-icon>
            <strong>Consecuencia:</strong> Pérdida de productividad, estrés del equipo y costes de reparación
            descontrolados.
          </div>
        </v-window-item>

        <!-- Pestaña 2: La Solución -->
        <v-window-item :value="true">
          <div class="solution-container">
            <v-row class="align-center">
              <v-col class="py-4" cols="12" md="5">
                <div class="premium-tag bg-success-lighten-4 text-success mb-4">TRANQUILIDAD ABSOLUTA</div>

                <h3 class="text-h4 font-weight-bold mb-4 text-primary">
                  Estabilidad e Infraestructura Impecable
                </h3>

                <p class="text-body-1 text-grey-darken-2 mb-6 leading-relaxed">
                  Nuestro servicio de mantenimiento mantiene toda tu infraestructura funcionando de forma segura,
                  rápida y estable. Dejamos atrás las emergencias y las facturas sorpresa.
                </p>

                <ul class="solution-checklist pl-0 mb-8">
                  <li class="d-flex align-center gap-3 mb-3">
                    <v-icon color="success">mdi-check-circle</v-icon>
                    <span class="text-body-2 font-weight-semibold">Monitorización activa 24 horas al día</span>
                  </li>

                  <li class="d-flex align-center gap-3 mb-3">
                    <v-icon color="success">mdi-check-circle</v-icon>
                    <span class="text-body-2 font-weight-semibold">Copias de seguridad automáticas y testeadas</span>
                  </li>

                  <li class="d-flex align-center gap-3 mb-3">
                    <v-icon color="success">mdi-check-circle</v-icon>

                    <span class="text-body-2 font-weight-semibold">Actualizaciones y parches de seguridad al
                      día</span>
                  </li>

                  <li class="d-flex align-center gap-3 mb-3">
                    <v-icon color="success">mdi-check-circle</v-icon>
                    <span class="text-body-2 font-weight-semibold">Soporte rápido en menos de 15 minutos</span>
                  </li>
                </ul>

                <v-btn class="px-8 shadow-sm" color="primary" size="large" @click="$emit('request-audit')">
                  Quiero esta solución
                </v-btn>
              </v-col>

              <v-col class="py-4 position-relative" cols="12" md="7">
                <!-- Dashboard de Simulación del Mantenimiento Exitoso -->
                <v-card class="solution-preview-card pa-5 glassmorphism elevation-4">
                  <div class="d-flex align-center justify-space-between mb-6 pb-4 border-bottom">
                    <div class="d-flex align-center gap-2">
                      <div class="status-pulse-green" />

                      <span class="font-weight-bold text-caption text-uppercase tracking-wider">Centro de Control
                        IMAX</span>
                    </div>

                    <v-chip color="success" size="small" variant="flat">SISTEMAS SEGUROS</v-chip>
                  </div>

                  <v-row>
                    <v-col
                      v-for="(stat, idx) in [
                        { label: 'Rendimiento general', val: '98%', color: 'success', icon: 'mdi-speedometer' },
                        { label: 'Amenazas bloqueadas', val: '12 esta semana', color: 'info', icon: 'mdi-shield-check' },
                        { label: 'Disponibilidad de Red', val: '99.98%', color: 'success', icon: 'mdi-lan-connect' },
                        { label: 'Copias de Seguridad', val: 'Completas y Verificadas', color: 'success', icon: 'mdi-backup-restore' },
                      ]"
                      :key="idx"
                      cols="12"
                      sm="6"
                    >
                      <v-card
                        class="pa-4 d-flex align-center gap-3 rounded-lg border-grey-lighten-2"
                        variant="outlined"
                      >
                        <v-icon :color="stat.color" size="28">{{ stat.icon }}</v-icon>

                        <div>
                          <span class="text-caption text-grey-darken-1 d-block">{{ stat.label }}</span>
                          <span class="font-weight-bold text-subtitle-1">{{ stat.val }}</span>
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>

                  <!-- Línea de estado simulada -->
                  <div class="mt-6 pa-4 rounded-lg bg-grey-lighten-4">
                    <div class="d-flex align-center justify-space-between mb-2">
                      <span class="text-caption font-weight-bold text-grey-darken-2">Uso de disco y
                        temperaturas</span>

                      <span class="text-caption text-success font-weight-bold">ESTABLE</span>
                    </div>

                    <v-progress-linear color="success" height="8" model-value="38" rounded />
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-window-item>
      </v-window>
    </v-container>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  defineEmits(['request-audit'])

  const solutionActive = ref(false)
</script>

<style scoped>
.split-narrative-section {
  background-color: #FFFFFF;
  transition: background-color 0.8s ease;
}

.split-narrative-section.solution-mode {
  background-color: #F4FBF7;
}

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

.problem-card {
  border-left: 4px solid #e53935;
  background-color: #FFFDFD;
  transition: transform 0.3s;
}

.problem-card:hover {
  transform: translateY(-5px);
}

.border-left-danger {
  border-left: 4px solid #e53935 !important;
}

.problem-icon-wrapper {
  background: #FFEBEE;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.problem-footer-note {
  background-color: #FFEBEE;
  color: #C62828;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
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

.bg-success-lighten-4 {
  background-color: #E8F5E9 !important;
}

.solution-checklist {
  list-style: none;
}

.solution-preview-card {
  background: rgba(255, 255, 255, 0.8) !important;
  border: 1px solid rgba(67, 160, 71, 0.2) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.glassmorphism {
  background: rgba(255, 255, 255, 0.08) !important;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
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

.gap-2 {
  gap: 8px;
}

.gap-3 {
  gap: 12px;
}

.gap-4 {
  gap: 16px;
}

.border-bottom {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
</style>
