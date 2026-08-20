<template>
  <div v-if="currentService" class="servicios-detalle-page bg-background min-vh-100 pb-16">
    <!-- HERO SECTION -->
    <header class="hero-section text-white d-flex align-center position-relative overflow-hidden">
      <div class="gradient-overlay" />

      <v-container class="position-relative z-index-2 py-16">
        <v-row align="center">
          <v-col class="text-left" cols="12" md="8">
            <span class="text-subtitle-1 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-3">
              {{ currentService.category }}
            </span>

            <h1 class="text-h2 font-weight-black mb-4 text-gradient leading-tight">
              {{ currentService.title }}
            </h1>

            <p class="text-h6 text-grey-lighten-2 mb-8 leading-relaxed font-weight-regular max-w-700">
              {{ currentService.subtitle }}
            </p>

            <v-btn class="text-white font-weight-bold rounded-lg px-8" color="secondary" size="large" to="/contacto">
              Solicitar Presupuesto <v-icon end>mdi-email-outline</v-icon>
            </v-btn>
          </v-col>

          <v-col class="d-flex justify-center py-8" cols="12" md="4">
            <div class="icon-orb d-flex align-center justify-center">
              <v-icon color="secondary" size="120">{{ currentService.icon }}</v-icon>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </header>

    <!-- CARACTERÍSTICAS Y DETALLES -->
    <v-container class="mt-16">
      <v-row class="mb-12">
        <v-col cols="12" md="7">
          <h2 class="text-h4 font-weight-black text-primary mb-6">
            ¿En qué consiste nuestro servicio?
          </h2>

          <p class="text-body-1 text-grey-darken-3 mb-6 leading-relaxed">
            {{ currentService.description }}
          </p>

          <v-list class="bg-transparent" density="comfortable">
            <v-list-item v-for="(bullet, index) in currentService.bullets" :key="index" class="px-0">
              <template #prepend>
                <v-icon class="me-3" color="secondary">mdi-check-circle</v-icon>
              </template>

              <v-list-item-title class="text-body-1 font-weight-medium text-primary text-wrap">
                {{ bullet.title }}
              </v-list-item-title>

              <v-list-item-subtitle class="text-body-2 text-grey-darken-1 text-wrap mt-1">
                {{ bullet.desc }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12" md="5">
          <v-card class="sidebar-info-card pa-6 rounded-xl border elevation-1">
            <h3 class="text-h5 font-weight-bold text-primary mb-4">Detalles del Servicio</h3>
            <v-divider class="mb-4" />

            <div v-for="(info, key) in currentService.infoBox" :key="key" class="info-row mb-4">
              <span class="text-caption text-uppercase text-grey-darken-1 font-weight-bold d-block">{{ key }}</span>
              <span class="text-body-1 text-primary font-weight-medium">{{ info }}</span>
            </div>

            <v-divider class="mb-6" />

            <v-card class="pa-4 bg-blue-lighten-5 rounded-lg border-0 text-center">
              <v-icon class="mb-2" color="primary" size="32">mdi-phone-in-talk</v-icon>
              <h4 class="text-subtitle-1 font-weight-bold text-primary mb-1">¿Necesitas ayuda inmediata?</h4>
              <p class="text-caption text-grey-darken-2 mb-3">Llámanos y habla directamente con un técnico especialista.</p>
              <span class="text-h6 font-weight-black text-secondary">91 555 55 55</span>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <div v-else class="text-center py-16">
    <v-progress-circular color="primary" indeterminate size="64" />
  </div>
</template>

<script setup lang="ts">
  import { computed, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  const route = useRoute()
  const router = useRouter()

  interface Bullet {
    title: string
    desc: string
  }

  interface ServiceData {
    category: string
    title: string
    subtitle: string
    icon: string
    description: string
    bullets: Bullet[]
    infoBox: Record<string, string>
  }

  const servicesMap: Record<string, ServiceData> = {
    servicio1: {
      category: 'SOPORTE Y MANTENIMIENTO',
      title: 'Soporte Técnico Informático',
      subtitle: 'Tranquilidad total y continuidad de negocio para empresas y autónomos con un soporte técnico de respuesta inmediata.',
      icon: 'mdi-face-agent',
      description: 'Disponer de un parque informático estable y seguro es fundamental para cualquier negocio hoy en día. En Imax PC nos convertimos en el departamento de sistemas de tu empresa, monitorizando activamente tus servidores y ordenadores para solucionar problemas antes de que afecten a tu actividad. Ofrecemos asistencia remota directa y desplazamientos presenciales rápidos e ilimitados.',
      bullets: [
        {
          title: 'Asistencia Remota Inmediata',
          desc: 'Nuestros técnicos se conectan en remoto de forma segura para solucionar incidencias de software, configurar programas o limpiar malware en minutos.',
        },
        {
          title: 'Mantenimiento Preventivo continuo',
          desc: 'Monitorizamos el estado de tus servidores, copias de seguridad y antivirus diariamente para prevenir caídas de servicio.',
        },
        {
          title: 'Soporte Presencial Ilimitado',
          desc: 'Si una avería no se puede resolver en remoto, un técnico especializado se desplaza a tus oficinas en un plazo preferente sin coste adicional.',
        },
        {
          title: 'Copias de Seguridad Gestionadas',
          desc: 'Configuramos copias automatizadas de tus archivos críticos tanto en local como en la nube, garantizando su recuperación ante desastres.',
        },
      ],
      infoBox: {
        'Modalidades de Contrato': 'Mensual / Anual / Bonos de Horas',
        'Tiempo de Respuesta Remoto': 'Menos de 2 horas (Urgencias en < 30 min)',
        'Área de Cobertura Presencial': 'Comunidad de Madrid',
        'Servicios Incluidos': 'Soporte a usuarios, Redes, Copias y Servidores',
      },
    },
    servicio2: {
      category: 'SERVICIO OFICIAL DE IMPRESIÓN',
      title: 'Soporte Técnico Oficial Brother',
      subtitle: 'Servicio técnico especializado homologado y venta de consumibles oficiales para proteger la vida útil de tus equipos Brother.',
      icon: 'mdi-printer',
      description: 'Como distribuidor oficial autorizado y servicio técnico especialista de Brother, contamos con herramientas de diagnóstico oficiales y piezas de repuesto originales para reparar cualquier impresora o equipo multifunción de la marca. Además, gestionamos la garantía oficial y optimizamos tus costes de impresión con planes a medida.',
      bullets: [
        {
          title: 'Reparaciones Oficiales con Piezas Originales',
          desc: 'Utilizamos únicamente piezas de recambio oficiales Brother para garantizar el rendimiento original de fábrica y la compatibilidad absoluta.',
        },
        {
          title: 'Gestión y Cobertura de Garantías',
          desc: 'Si tu equipo Brother está dentro de su período de garantía legal, tramitamos la reparación oficial de forma ágil y sin costes para ti.',
        },
        {
          title: 'Contratos de Pago por Uso (Coste por Copia)',
          desc: 'Despreocúpate de la compra de tóner. Con nuestros planes pagas solo por lo que imprimes; las máquinas y el servicio técnico están incluidos.',
        },
        {
          title: 'Configuración y Puesta en Red',
          desc: 'Configuramos tus escáneres en red, carpetas compartidas y perfiles de impresión móvil en todos los ordenadores de la oficina.',
        },
      ],
      infoBox: {
        'Equipos Soportados': 'Láser Monocromo, Color, Multifunción e Inyección',
        'Tipo de Soporte': 'En taller (Ardemans, 35) o in situ en empresas',
        'Consumibles Suministrados': 'Tóners, tambores y cartuchos 100% originales Brother',
        'Garantía de Reparación': '6 meses en todas las reparaciones fuera de garantía',
      },
    },
    servicio6: {
      category: 'DESARROLLO Y AUTOMATIZACIÓN',
      title: 'Automatización de Procesos y Software',
      subtitle: 'Elimina tareas repetitivas y conecta tus sistemas mediante automatizaciones con Microsoft Power Automate y software a medida.',
      icon: 'mdi-robot-industrial',
      description: 'La automatización de procesos permite a tu equipo dejar de realizar tareas mecánicas e ineficientes. Analizamos tu flujo de trabajo diario (facturación, informes, altas de clientes) y diseñamos soluciones de automatización basadas en herramientas Microsoft (Power Platform) o software a medida para conectar tus sistemas mediante APIs.',
      bullets: [
        {
          title: 'Flujos con Microsoft Power Automate',
          desc: 'Conectamos tu Outlook, SharePoint, Excel y bases de datos para automatizar el envío de notificaciones, aprobaciones y copias de archivos.',
        },
        {
          title: 'Robotic Process Automation (RPA)',
          desc: 'Configuramos robots de software que imitan la interacción humana para extraer información de webs externas o introducir datos en ERPs heredados.',
        },
        {
          title: 'Software de Integración a Medida',
          desc: 'Desarrollamos pequeñas aplicaciones puente o scripts en TypeScript/Python para conectar sistemas que no se hablan de forma nativa.',
        },
        {
          title: 'Cuadros de Mando y Dashboards',
          desc: 'Visualiza la información relevante del rendimiento y productividad de tus automatizaciones en informes visuales e interactivos.',
        },
      ],
      infoBox: {
        'Herramientas Clave': 'Microsoft Power Automate, Power Apps, Node.js',
        'Tipos de Integración': 'APIs REST, Bases de Datos SQL, Archivos CSV/Excel',
        'Metodología': 'Consultoría inicial + Prototipado + Despliegue + Mantenimiento',
        'Objetivo de Retorno': 'Reducción de hasta un 80% del tiempo de procesamiento',
      },
    },
  }

  const currentService = computed(() => {
    // Determine the service key based on path or name
    const pathParts = route.path.split('/')
    const lastPart = pathParts.at(-1)
    return servicesMap[lastPart] || null
  })

  onMounted(() => {
    if (currentService.value) {
      document.title = `${currentService.value.title} | Imax PC`
    } else {
      // If service is invalid, redirect back to services portal
      router.replace('/servicios')
    }
  })
</script>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #1a3a6e 0%, #11223f 100%);
  padding: 100px 0 80px;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top right, rgba(77, 183, 227, 0.15) 0%, transparent 60%);
  pointer-events: none;
}

.text-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #a5c7f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tracking-widest {
  letter-spacing: 0.2em !important;
}

.icon-orb {
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(77, 183, 227, 0.15) 0%, transparent 70%);
  border-radius: 50%;
}

.sidebar-info-card {
  border-color: #E3E6EB !important;
  background-color: #FFFFFF;
}

.info-row {
  border-left: 3px solid #4DB7E3;
  padding-left: 12px;
}
</style>
