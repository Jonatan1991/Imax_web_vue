<script lang="ts" setup>
import { ref } from 'vue'

const services = ref([
    {
        title: 'Reparación',
        icon: 'mdi-wrench-cog',
        description: 'Diagnóstico y reparación exprés de ordenadores, servidores y portátiles. Solución de averías físicas y lógicas con la máxima garantía.',
        featured: false,
        to: '/servicios'
    },
    {
        title: 'Mantenimiento',
        icon: 'mdi-shield-sync',
        description: 'Planes correctivos y preventivos adaptados a empresas, autónomos y particulares. Aseguramos la continuidad y seguridad de tu negocio.',
        featured: false,
        to: '/servicios'
    },
    {
        title: 'Puesta a punto',
        icon: 'mdi-rocket-launch',
        description: 'Limpieza e instalación optimizada de hardware y software para recuperar la velocidad, estabilidad y rendimiento máximo de tu equipo.',
        featured: false,
        to: '/servicios'
    },
    {
        title: 'Revisiones',
        icon: 'mdi-clipboard-check',
        description: 'Auditorías informáticas de hardware, seguridad y redes. Identificamos problemas silenciosos antes de que causen fallos críticos.',
        featured: false,
        to: '/servicios'
    },
    {
        title: 'Instalación de redes',
        icon: 'mdi-lan-connect',
        description: 'Diseño, cableado estructurado y configuración de redes locales (LAN) y sistemas Wi-Fi corporativos rápidos y estables.',
        featured: false,
        to: '/servicios'
    },
    {
        title: 'Asistencia a domicilio',
        icon: 'mdi-home-assistant',
        description: 'Desplazamiento rápido de nuestros técnicos homologados a tu hogar u oficina para solucionar cualquier incidencia técnica in situ.',
        featured: false,
        to: '/servicios'
    },
    {
        title: 'Pago por uso / Impresión',
        icon: 'mdi-printer',
        description: 'Sistemas optimizados de coste por copia o por suministro. Reduce costes con la gestión y mantenimiento automatizado de tus impresoras.',
        featured: false,
        to: '/servicios'
    },
    {
        title: 'Soporte Remoto',
        icon: 'mdi-headset',
        description: 'Resolución de incidencias de software, configuración y virus a distancia mediante conexión segura inmediata y sin esperas.',
        featured: false,
        to: '/servicios'
    }
])
</script>



<template>
    <v-sheet class="py-16 bg-white" id="solutions-section">
        <v-container>
            <!-- Cabecera de la Sección -->
            <v-row justify="center" class="text-center mb-12">
                <v-col cols="12" md="10" lg="8">
                    <span
                        class="text-subtitle-1 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-3">
                        LO QUE OFRECEMOS
                    </span>
                    <h2 class="text-h4 text-md-h3 font-weight-black text-primary mb-4 leading-tight">
                        Soluciones Tecnológicas Integrales
                    </h2>
                    <div class="divider mx-auto mb-6"></div>
                    <p class="text-body-1 text-md-h6 font-weight-regular text-grey-darken-3 leading-relaxed">
                        En <strong>Imax PC</strong> somos conocidos por la excelencia y la máxima calidad de nuestro
                        servicio técnico.
                        Con el respaldo de un equipo altamente cualificado y una dilatada trayectoria profesional,
                        aportamos soluciones eficientes y a medida en todas las áreas tecnológicas.
                    </p>
                </v-col>
            </v-row>

            <!-- Cuadrícula de Servicios/Soluciones -->
            <v-row class="mt-4" justify="center">
                <v-col v-for="(service, index) in services" :key="index" cols="12" sm="6" md="4" lg="3" class="d-flex">
                    <v-card class="service-card flex-grow-1 d-flex flex-column rounded-xl pa-6 border elevation-0"
                        :class="{ 'featured-card': service.featured }">
                        <!-- Contenedor del Icono -->
                        <div class="icon-wrapper mb-6 d-flex align-center justify-center rounded-lg"
                            :class="service.featured ? 'bg-secondary' : 'bg-grey-lighten-4'">
                            <v-icon :color="service.featured ? 'white' : 'primary'" size="32">
                                {{ service.icon }}
                            </v-icon>
                        </div>

                        <!-- Título del Servicio -->
                        <h3 class="text-h6 font-weight-bold text-primary mb-3">
                            {{ service.title }}
                        </h3>

                        <!-- Descripción -->
                        <p class="text-body-2 text-grey-darken-2 flex-grow-1 mb-4 leading-normal">
                            {{ service.description }}
                        </p>

                        <!-- Enlace de Acción -->
                        <div class="d-flex align-center mt-auto font-weight-bold text-caption cursor-pointer hover-link"
                            :class="service.featured ? 'text-secondary' : 'text-primary'">
                            <span>Saber más</span>
                            <v-icon size="16" class="ms-1 arrow-icon">mdi-chevron-right</v-icon>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
</template>

<style scoped>
.divider {
    width: 60px;
    height: 4px;
    background-color: #4DB7E3;
    /* Color secundario (celeste) */
    border-radius: 2px;
}

.service-card {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    border-color: #E3E6EB !important;
    background-color: #FFFFFF;
}

.service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(26, 58, 110, 0.08) !important;
    border-color: #4DB7E3 !important;
}

.featured-card {
    background: linear-gradient(135deg, #1A3A6E 0%, #202336 100%) !important;
    border-color: #1A3A6E !important;
}

.featured-card h3 {
    color: #FFFFFF !important;
}

.featured-card p {
    color: rgba(255, 255, 255, 0.85) !important;
}

.icon-wrapper {
    width: 60px;
    height: 60px;
    transition: all 0.3s ease;
}

.service-card:hover .icon-wrapper {
    transform: scale(1.1) rotate(5deg);
}

.hover-link {
    transition: color 0.2s ease;
}

.hover-link:hover .arrow-icon {
    transform: translateX(4px);
}

.arrow-icon {
    transition: transform 0.2s ease;
}

.leading-normal {
    line-height: 1.5;
}

.tracking-widest {
    letter-spacing: 0.15em !important;
}
</style>