<script setup>
import { reactive } from 'vue';

const movie = reactive({
    name: "",
    year: 0,
    rating: 0,
    genero: "",
    director: ""
})
</script>

<template>
    <h1>Fomularios</h1>

    <form class="form">
        <label for="name">Name</label>
        <input v-model="movie.name" type="text" id="name">
        <br>
        <label for="year">Year</label>
        <input v-model="movie.year" type="number" id="year">
        <br>
        <label for="rating">Rating</label>
        <input v-model="movie.rating" type="number" id="rating">
        <br>
        <label for="genero">Genero</label>
        <input v-model="movie.genero" type="text" id="genero">
        <br>
        <label for="director">Director</label>
        <input v-model="movie.director" type="text" id="director">
    </form>
</template>

<style scoped>
.title {
    color: blueviolet;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
}
</style>
