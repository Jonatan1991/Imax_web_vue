<script setup>
import { ref } from "vue";

const emit = defineEmits(["login"])

const user = ref("Adrina");
const password = ref("1234");

const login = () => {
    emit("login", user.value)
}
</script>
<template>
    <div class="login-container">
        <h2> Este componente es para el login</h2>

        <p>NOmbre dl usuario: {{ user }}</p>
        <p>Contraseña: {{ password }}</p>
        <button @click="login">Login</button>
    </div>
</template>

<style scoped>
.login-container {
    border: 2px solid #43A047;
}
</style>
