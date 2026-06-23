<script setup>
const condition = true;
const condition2 = false

</script>
<template>
    <h2>Directiva v-if</h2>
    <h3 v-if="condition">La condicion 1 se cumple</h3>
    <h3 v-else-if="condition2">La condicion 2 se cumple</h3>
    <h3 v-else>La condicion 3 se cumple</h3>
</template>
<style></style>