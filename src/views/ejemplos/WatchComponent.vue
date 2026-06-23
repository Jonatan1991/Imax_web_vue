<script setup>
import { ref, watch } from 'vue';

const userName = ref("Jonatan");

watch(userName, (nuevoValor, viejoValor) => {
    console.log("el valor ha cambiado a: ", nuevoValor)
    console.log("el valor anterior era: ", viejoValor)
},
    {
        inmmediate: true

    });
</script>

<template>
    <h2>Watch - Observadores</h2>
    <input type="text" v-model="userName">
    <p>El nombre es: {{ userName }}</p>
</template>