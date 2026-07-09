<template>
    <v-app>

        <top-bar />

        <!-- <v-app-bar color="menuTop" flat :elevation="3" height="25">
            <div class="text-label-small">
                Teléfono: +1 (555) 123-4567 | Email: info@imaxpc.com
            </div>

        </v-app-bar> -->

        <v-app-bar color="background2" flat>
            logo
            <v-spacer />
            <v-btn to="/" variant="text">Inicio</v-btn>
            <v-btn to="/about" variant="text">Acerca</v-btn>
        </v-app-bar>
        
        <v-main>
            <router-view />
        </v-main>


        <v-footer color="footer" app>
            <v-col class="text-center white--text">
                © 2026 IMAX Web
            </v-col>
        </v-footer>
    </v-app>
</template>

<script lang="ts" setup>
import TopBar from './TopBar.vue';

//
</script>