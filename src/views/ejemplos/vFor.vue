<script setup>
const movies = [
    {
        id: 1,
        name: "The Matrix",
        year: 1999
    },
    {
        id: 2,
        name: "Jurassic Park",
        year: 1993
    },
    {
        id: 3,
        name: "The Lion King",
        year: 1994
    }
]

</script>
<template>
    <h2>Directiva v-for</h2>
    <ul>
        <li v-for="movie in movies" :key="movie.id">
            <p>Name: {{ movie.name }} - Year: {{ movie.year }}</p>
        </li>
    </ul>
</template>
<style></style>