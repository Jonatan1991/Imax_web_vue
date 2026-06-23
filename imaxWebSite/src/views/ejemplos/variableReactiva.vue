<script setup>
import { ref } from 'vue';

let number = ref(0);
setInterval(() => {
    number.value++;
}, 1000);

</script>
<template>
    <h2>numero creciendo: {{ number }}</h2>
</template>
<style></style>