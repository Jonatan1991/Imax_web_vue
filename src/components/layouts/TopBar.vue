<template>
    <v-app-bar color="menuTop" height="35" class="d-flex align-center px-15" scroll-behavior="hide">
        <!-- IZQUIERDA -->
        <div class="d-flex align-center gap-4">
            <span class="text-white text-label-small font-weight-light">
                <v-icon>
                    mdi-email
                </v-icon><a style="text-decoration: none; color: inherit;" href="mailto:info@imaxpc.com">
                    info@imaxpc.com</a>
            </span>

            <!-- espacio vacio entre elementos -->



            <span class="text-white text-label-small font-weight-light ms-4">
                <v-icon>
                    mdi-phone
                </v-icon> <a style="text-decoration: none; color: inherit;" href="tel:+34913090503"> 91 309 05 03</a> |
                <a style="text-decoration: none; color: inherit;" href="tel:+34661750034"> +34 661750034</a>
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
