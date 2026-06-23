<script setup>
import { computed, ref } from 'vue';

const userName = ref("Maria");
const nameLength = computed(() => {
    console.log("ejecutando computacion");
    return userName.value.length
});
</script>

<template>
    <h2>Computed - Propiedades Computadas</h2>

    <input type="text" v-model="userName">
    <p>El nombre es: {{ userName }}</p>
    <p>La longitud del nombre es: {{ nameLength }}</p>
</template>