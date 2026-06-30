<script setup>
import { reactive } from 'vue';

const movie = reactive({
    name: "",
    year: 0,
    rating: 0,
    genero: "",
    director: ""
})

const handleSubmit = () => {
    if (!movie.name || movie.name.trim() === '' || !movie.year || movie.year < 1888 || !movie.rating
        || movie.rating < 0 || movie.rating > 10 || !movie.genero || !movie.genero.trim() === ''
        || !movie.director || !movie.director.trim() === '') {
        alert("Revise la informacion y rellene los campos correctamente");
        return;
    }
    console.log(movie);
}
</script>

<template>
    <h1>Fomularios</h1>

    <form @submit.prevent="handleSubmit" class="form">
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
        <br>
        <button type="submit">Guardar</button>
    </form>
</template>

<style scoped>
.title {
    color: #1A3A6E;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 2px solid #E53935;
    width: 25%;
}

.form button {
    padding: 5px;
    border-radius: 5px;
    border: 2px solid #43A047;
    margin-top: 10px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    transition: all 0.3s ease;
}

.form button:hover {
    background-color: #43A047;
    color: white;
    transform: scale(1.05);
}

.form label {
    margin-bottom: 5px;
}

.form input {
    padding: 5px;
    border-radius: 5px;
    border: 2px solid #1A3A6E;
    margin-bottom: 10px;
}
</style>
