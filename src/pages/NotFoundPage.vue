<template>
  <!-- Contenedor principal centrado, con fondo degradado sutil de la paleta IMAX -->
  <v-container class="fill-height d-flex align-center justify-center text-center px-4">
    <v-card class="bg-transparent" flat max-width="500">
      <!-- Icono animado/visual llamativo para error 404 -->
      <v-avatar class="mb-6 elevation-1 animate-pulse" color="ui" size="140">
        <v-icon color="primary" size="80">mdi-map-search-outline</v-icon>
      </v-avatar>

      <!-- Título de error -->
      <h1 class="text-h3 font-weight-black text-primary mb-3">
        404
      </h1>

      <!-- Subtítulo de página no encontrada -->
      <h2 class="text-h5 font-weight-bold text-grey-darken-3 mb-4">
        Página no encontrada
      </h2>

      <!-- Texto descriptivo de ayuda al usuario -->
      <p class="text-body-1 text-grey-darken-2 mb-8">
        Lo sentimos, la página que estás buscando no existe, ha sido movida o no está disponible temporalmente.
      </p>

      <!-- Botón para regresar a la página de inicio -->
      <v-btn
        class="px-8 font-weight-bold elevation-2 hover-scale text-white"
        color="primary"
        prepend-icon="mdi-home"
        size="large"
        to="/"
      >
        Volver al Inicio
      </v-btn>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
// No se necesita lógica compleja para una página de error estática
</script>

<style scoped>
/* Animación suave para el icono del buscador */
.animate-pulse {
  animation: pulse 3s infinite ease-in-out;
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 4px 10px rgba(26, 58, 110, 0.1);
  }

  50% {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(26, 58, 110, 0.2);
  }
}

/* Efecto de escalado suave al pasar el cursor por el botón */
.hover-scale {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.hover-scale:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(26, 58, 110, 0.25) !important;
}
</style>
