<script setup>
import VariableReactiva from "../views/ejemplos/variableReactiva.vue";
import VariableReactiva2 from "../views/ejemplos/variableReactiva2.vue";
import VBind from "../views/ejemplos/vBind.vue";
import VFor from "../views/ejemplos/vFor.vue";
import slotCompPadre from "../views/ejemplos/slotsCompPadre.vue";
import ComputedComponent from "../views/ejemplos/ComputedComponent.vue";
import WatchComponent from "../views/ejemplos/WatchComponent.vue";
import WatchEffectComponent from "../views/ejemplos/WatchEffectComponent.vue";
import FormComponent from "../views/ejemplos/Formularios/FormComponent.vue";
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
    color: #E53935;
}
</style>