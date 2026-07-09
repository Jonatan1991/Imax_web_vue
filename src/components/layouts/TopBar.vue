<template>
    <v-app-bar color="#1A1A1A" height="30" class="d-flex align-center px-15">
        <!-- IZQUIERDA -->
        <div class="d-flex align-center gap-4">
            <span class="text-white text-title-small font-weight-light">
                📧 contacto@imaxpc.com
            </span>
            <span class="text-white text-title-small font-weight-light">
                📞 +34 600 000 000
            </span>
        </div>

        <v-spacer />

        <!-- DERECHA: REDES -->
        <div class="d-flex align-center gap-3">
            <v-btn icon variant="text" size="small" class="text-white" href="https://facebook.com" target="_blank">
                <v-icon>mdi-facebook</v-icon>
            </v-btn>

            <v-btn icon variant="text" size="small" class="text-white" href="https://instagram.com" target="_blank">
                <v-icon>mdi-instagram</v-icon>
            </v-btn>

            <v-btn icon variant="text" size="small" class="text-white" href="https://twitter.com" target="_blank">
                <v-icon>mdi-twitter</v-icon>
            </v-btn>
        </div>
    </v-app-bar>
</template>
