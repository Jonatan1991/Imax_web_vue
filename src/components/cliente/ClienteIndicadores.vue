<template>
  <section id="section-indicadores" class="section-indicadores py-16 bg-navy text-white">
    <v-container>
      <div class="text-center mb-16">
        <div class="section-subtitle text-secondary">NUESTRAS MÉTRICAS</div>

        <h2 class="text-h3 font-weight-bold mb-4 text-gradient">
          Indicadores de Calidad de Servicio
        </h2>

        <p class="text-body-1 text-grey-lighten-2 mx-auto max-width-700">
          Transparencia y resultados cuantificables. Analizamos en tiempo real nuestro desempeño para garantizar los más altos estándares del mercado.
        </p>
      </div>

      <v-row class="justify-center">
        <v-col
          v-for="(metric, idx) in metrics"
          :key="idx"
          class="d-flex"
          cols="12"
          md="3"
          sm="6"
        >
          <v-card
            class="metric-widget w-100 pa-5 glassmorphism border-lighten-1 rounded-xl text-center d-flex flex-column justify-space-between"
          >
            <v-icon class="mx-auto mb-4" color="secondary" size="36">mdi-chart-line</v-icon>

            <div>
              <span class="d-block text-h3 font-weight-black text-gradient mb-1">
                {{ metric.currentValue }}{{ metric.suffix }}
              </span>

              <span class="d-block text-subtitle-1 font-weight-bold text-white mb-2">
                {{ metric.label }}
              </span>
            </div>

            <p class="text-caption text-grey-lighten-2 mb-0 leading-relaxed pt-2 border-top">
              {{ metric.desc }}
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue'

  const metrics = ref([
    { label: 'Tiempo de respuesta', value: 15, suffix: ' minutos', currentValue: 0, decimals: 0, desc: 'Tiempo máximo garantizado para incidencias urgentes.' },
    { label: 'Resolución media', value: 2, suffix: ' horas', currentValue: 0, decimals: 0, desc: 'Resolución del 90% de problemas cotidianos.' },
    { label: 'Uptime del sistema', value: 99.9, suffix: '%', currentValue: 0, decimals: 1, desc: 'Disponibilidad operativa de la infraestructura del cliente.' },
    { label: 'Incidencias evitadas', value: 450, suffix: '+ / año', currentValue: 0, decimals: 0, desc: 'Acciones preventivas automatizadas en segundo plano.' },
    { label: 'Copias de seguridad', value: 100, suffix: '%', currentValue: 0, decimals: 0, desc: 'Copias verificadas y listas para su restauración diaria.' },
    { label: 'Equipos actualizados', value: 100, suffix: '%', currentValue: 0, decimals: 0, desc: 'Parches de seguridad críticos instalados al instante.' },
    { label: 'Nivel de satisfacción', value: 98, suffix: '%', currentValue: 0, decimals: 0, desc: 'Valoración media reportada por nuestros clientes abonados.' },
  ])

  let countersAnimated = false

  function animateCounters () {
    if (countersAnimated) return
    countersAnimated = true

    for (const metric of metrics.value) {
      const start = 0
      const end = metric.value
      const duration = 2000 // ms
      const startTime = performance.now()

      const update = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Ease Out Quad
        const ease = progress * (2 - progress)
        metric.currentValue = Number((start + (end - start) * ease).toFixed(metric.decimals))

        if (progress < 1) {
          requestAnimationFrame(update)
        } else {
          metric.currentValue = end
        }
      }
      requestAnimationFrame(update)
    }
  }

  function checkCountersScroll () {
    const el = document.querySelector('#section-indicadores')
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        animateCounters()
        window.removeEventListener('scroll', checkCountersScroll)
      }
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', checkCountersScroll, { passive: true })
    checkCountersScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', checkCountersScroll)
  })
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

.text-secondary {
  color: #4DB7E3 !important;
}

.max-width-700 {
  max-width: 700px;
}

.leading-relaxed {
  line-height: 1.6 !important;
}

.metric-widget {
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
}

.metric-widget:hover {
  border-color: rgba(77, 183, 227, 0.3);
  transform: scale(1.03);
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

.border-top {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
