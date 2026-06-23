<script setup>
</script>
<template>
    <div class="child">
        <h2>Este es otro componente hijo</h2>
        <slot name="header">
        </slot>

        <slot name="footer">
        </slot>
    </div>
</template>
<style>
.child {
    background-color: rgb(100, 98, 255);
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
}
</style>