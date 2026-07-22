<template>
  <div class="mantenimiento-premium-page">
    <!-- 1. HERO PRINCIPAL -->
    <ClienteHero @request-audit="scrollToAudit" />

    <!-- 2 & 3. TRANSICIÓN: EL PROBLEMA Y LA SOLUCIÓN -->
    <ClienteEscenarios @request-audit="scrollToAudit" />

    <!-- 4. LOS TRES PILARES -->
    <ClientePilares />

    <!-- 5. NUESTRO PROCEDIMIENTO -->
    <ClienteProcedimiento />

    <!-- 6. QUÉ PROTEGEMOS (Interactive Graphic) -->
    <ClienteProtegemos />

    <!-- 7. BENEFICIOS PARA EL CLIENTE -->
    <ClienteBeneficios />

    <!-- 8. QUÉ NOS DIFERENCIA -->
    <ClienteDiferencias />

    <!-- 9. NUESTRO CALENDARIO DE MANTENIMIENTO -->
    <ClienteCalendario />

    <!-- 10. INDICADORES DE CALIDAD -->
    <ClienteIndicadores />

    <!-- 11. CIERRE & FORMULARIO DE AUDITORÍA -->
    <ClienteCierre />
  </div>
</template>

<script setup lang="ts">
  import ClienteBeneficios from '../components/cliente/ClienteBeneficios.vue'
  import ClienteCalendario from '../components/cliente/ClienteCalendario.vue'
  import ClienteCierre from '../components/cliente/ClienteCierre.vue'
  import ClienteDiferencias from '../components/cliente/ClienteDiferencias.vue'
  import ClienteEscenarios from '../components/cliente/ClienteEscenarios.vue'
  import ClienteHero from '../components/cliente/ClienteHero.vue'
  import ClienteIndicadores from '../components/cliente/ClienteIndicadores.vue'
  import ClientePilares from '../components/cliente/ClientePilares.vue'
  import ClienteProcedimiento from '../components/cliente/ClienteProcedimiento.vue'
  import ClienteProtegemos from '../components/cliente/ClienteProtegemos.vue'

  function scrollToAudit () {
    const el = document.querySelector('#section-cierre')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
</script>

<style scoped>
.mantenimiento-premium-page {
  font-family: 'Roboto', 'Inter', sans-serif;
  background-color: #F7F9FC;
  color: #1A1A1A;
  overflow-x: hidden;
}
</style>
