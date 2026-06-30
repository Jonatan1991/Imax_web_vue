<script setup>
</script>
<template>
    <div class="child">
        <h2>Este es otro componente hijo</h2>
        <slot>
            <h4>por si el padre no manda nada, sale esto</h4>
        </slot>
    </div>
</template>
<style>
.child {
    background-color: #E3E6EB;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
}
</style>