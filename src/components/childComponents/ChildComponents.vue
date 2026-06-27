<script setup>
defineProps({
    msg: {
        type: String,
        required: true
    },
    person: {
        name: String,
        age: Number,
        email: String,
        required: true
    }
})
</script>
<template>
    <h2>Este es un componente hijo</h2>
    <p>Mensaje: {{ msg }}</p>
    <p>Name: {{ person.name }}</p>
    <p>Age: {{ person.age }}</p>
    <p>Email: {{ person.email }}</p>
</template>

<style>
</style>
