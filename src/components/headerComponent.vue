<script setup>
import menuComponent from './menuComponent.vue';
</script>

<template>
    <header class="main-header">
        <div class="logo">
            <span class="logo-text">Imax<span class="highlight">Web</span></span>
        </div>
        <menuComponent />
    </header>
</template>

<style scoped>
.main-header {
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(226, 232, 240, 0.8);
    padding: 14px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 999;
}

.logo-text {
    font-size: 20px;
    font-weight: 700;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    letter-spacing: -0.5px;
    color: #1a202c;
}

.logo-text .highlight {
    color: #4f46e5; /* Indigo accent color to match menu hover */
}
</style>