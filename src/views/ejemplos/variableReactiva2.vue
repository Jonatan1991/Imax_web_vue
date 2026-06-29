<script setup>
import { ref } from 'vue';

const number = ref(0);

const addOne = () => {
    number.value++;
}

</script>
<template>
    <h2>numero creciendo: {{ number }}</h2>
    <button @click="addOne">sumar 1</button>
</template>