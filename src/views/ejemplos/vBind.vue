<script setup>
import { ref } from 'vue';

const myId = "id_imaginario";
const myValue = ref("some value")

</script>
<template>
    <h2 v-bind:id="myId">ejemplo de v-bind</h2>

    <h2>{{ myValue }}</h2>
    <input type="text" v-model="myValue">
</template>