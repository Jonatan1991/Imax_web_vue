<script setup>
import { ref, watchEffect } from 'vue';

const userName = ref("Pepe");

const setName = () => {
    userName.value = "Antonio";
};

watchEffect(
    () => {
        console.log("el valor ha cambiado a: ", userName.value)
    },
    {
        inmmediate: true

    });
</script>

<template>
    <h2>Watch Effect - Observadores - Vigilancia de cambios</h2>
    <h3>Hola {{ userName }}</h3>
    <button @click="setName">Cambiar nombre</button>
</template>