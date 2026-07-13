<script lang="ts" setup>
import MainMenu from '../components/layouts/MainMenu.vue';
import TopBar from '../components/layouts/TopBar.vue';
</script>

<template>
    <v-app>
        <top-bar />
        <main-menu />
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
