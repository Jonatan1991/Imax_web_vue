<script setup>
import slotCompHijo from "./ComponentesHijos/slotsCompHijo.vue";
import slotCompHijo2 from "./ComponentesHijos/slotsCompHijo2.vue";
</script>
<template>
    <div class="child">
        <h2>esta es la info desde el componente Padre con Slots</h2>
        <slotCompHijo>
            <p>info desde el componente padre</p>
        </slotCompHijo>
        <!-- si el componente esta vacia va a mostrar lo que hay en el componente hijo -->
        <slotCompHijo></slotCompHijo>

        <hr>
        <slotCompHijo2>
            <template v-slot:header>
                <h2>Header desde el padre</h2>
            </template>
            <template v-slot:footer>
                <p>Footer desde el padre</p>
            </template>
        </slotCompHijo2>
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