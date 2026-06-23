<script setup>
import VariableReactiva from "./ejemplos/variableReactiva.vue";
import VariableReactiva2 from "./ejemplos/variableReactiva2.vue";
import VBind from "./ejemplos/vBind.vue";
import VFor from "./ejemplos/vFor.vue";
import slotCompPadre from "./ejemplos/slotsCompPadre.vue";
import ComputedComponent from "./ejemplos/ComputedComponent.vue";
import WatchComponent from "./ejemplos/WatchComponent.vue";
import WatchEffectComponent from "./ejemplos/WatchEffectComponent.vue";
import FormComponent from "./ejemplos/Formularios/FormComponent.vue";
</script>
<template>
    <h1 class="title">Hello Imax Web</h1>
    <hr>

    <VariableReactiva></VariableReactiva>
    <hr>
    <VariableReactiva2></VariableReactiva2>
    <hr>
    <VBind></vbind>
    <hr>
    <VFor></vFor>
    <hr>
    <slotCompPadre></slotCompPadre>
    <hr>
    <ComputedComponent></ComputedComponent>
    <hr>
    <WatchComponent></WatchComponent>
    <hr>
    <WatchEffectComponent></WatchEffectComponent>
    <hr>
    <FormComponent></FormComponent>

</template>
<style>
.title {
    color: red;
}
</style>