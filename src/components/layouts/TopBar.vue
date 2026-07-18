<template>
  <v-app-bar class="d-flex align-center px-15" color="menuTop" height="35" scroll-behavior="hide">
    <!-- IZQUIERDA -->
    <div class="d-flex align-center gap-4">
      <span class="text-white text-label-small font-weight-light">
        <v-icon>
          mdi-email
        </v-icon>

        <a href="mailto:info@imaxpc.com" style="text-decoration: none; color: inherit;">
          info@imaxpc.com</a>
      </span>

      <!-- espacio vacio entre elementos -->

      <span class="text-white text-label-small font-weight-light ms-4">
        <v-icon>
          mdi-phone
        </v-icon>

        <a href="tel:+34913090503" style="text-decoration: none; color: inherit;"> 91 309 05 03</a> |
        <a href="tel:+34661750034" style="text-decoration: none; color: inherit;"> +34 661750034</a>
      </span>
    </div>

    <v-spacer />

    <!-- DERECHA: REDES -->
    <div class="d-flex align-center gap-3">
      <v-btn
        class="text-white"
        href="https://facebook.com"
        icon
        size="small"
        target="_blank"
        variant="text"
      >
        <v-icon>mdi-facebook</v-icon>
      </v-btn>

      <v-btn
        class="text-white"
        href="https://instagram.com"
        icon
        size="small"
        target="_blank"
        variant="text"
      >
        <v-icon>mdi-instagram</v-icon>
      </v-btn>

      <v-btn
        class="text-white"
        href="https://twitter.com"
        icon
        size="small"
        target="_blank"
        variant="text"
      >
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>
