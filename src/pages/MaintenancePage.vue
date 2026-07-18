<template>
  <!-- Contenedor principal centrado, con un diseño premium y degradado de fondo tecnológico -->
  <v-container class="fill-height d-flex align-center justify-center text-center px-4">
    <v-card max-width="600" flat class="bg-transparent py-8">
      <!-- Icono animado de engranajes en mantenimiento -->
      <v-avatar size="140" color="ui" class="mb-6 elevation-1">
        <v-icon size="80" color="secondary" class="animate-spin">mdi-cog-sync</v-icon>
      </v-avatar>

      <!-- Título de mantenimiento/construcción -->
      <h1 class="text-h3 font-weight-black text-primary mb-3">
        Página en Mantenimiento
      </h1>

      <!-- Subtítulo explicativo -->
      <h2 class="text-h5 font-weight-bold text-grey-darken-3 mb-6">
        Estamos mejorando nuestra plataforma
      </h2>

      <!-- Texto informativo detallado -->
      <p class="text-body-1 text-grey-darken-2 mb-8 mx-auto" style="max-width: 480px;">
        Esta sección se encuentra actualmente en desarrollo o mantenimiento programado para ofrecerte un mejor servicio.
        Disculpa las molestias.
      </p>

      <!-- Información de contacto directo mientras dure el mantenimiento -->
      <v-divider class="mb-6"></v-divider>
      <div class="d-flex justify-center align-center gap-6 flex-wrap mb-8 text-grey-darken-3">
        <span class="d-flex align-center">
          <v-icon color="primary" class="me-2">mdi-email</v-icon>
          <a href="mailto:info@imaxpc.com"
            class="text-decoration-none text-inherit font-weight-bold">info@imaxpc.com</a>
        </span>
        <span class="d-flex align-center">
          <v-icon color="primary" class="me-2">mdi-phone</v-icon>
          <a href="tel:+34913090503" class="text-decoration-none text-inherit font-weight-bold">91 309 05 03</a>
        </span>
      </div>

      <!-- Botón para regresar al inicio (en caso de que solo esta página esté en mantenimiento y no todo el sitio) -->
      <v-btn to="/" variant="outlined" color="primary" size="large" class="px-8 font-weight-bold hover-scale"
        prepend-icon="mdi-arrow-left">
        Volver al Inicio
      </v-btn>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
// No se necesita lógica compleja para la vista de mantenimiento estática
</script>

<style scoped>
/* Rotación continua lenta y elegante para el engranaje de mantenimiento */
.animate-spin {
  animation: spin 8s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* Efecto hover suave para el botón de regreso */
.hover-scale {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.hover-scale:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(26, 58, 110, 0.15) !important;
}
</style>
