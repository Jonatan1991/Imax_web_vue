import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/formulario",
            name: "formulario",
            component: () => import("../views/ejemplos/Formularios/FormComponent.vue")
        },
        {
            path: "/variable-reactiva",
            name: "variable-reactiva",
            component: () => import("../views/ejemplos/variableReactiva.vue")
        },
        {
            path: "/variable-reactiva-2",
            name: "variable-reactiva-2",
            component: () => import("../views/ejemplos/variableReactiva2.vue")
        },
        {
            path: "/v-bind",
            name: "v-bind",
            component: () => import("../views/ejemplos/vBind.vue")
        },
        {
            path: "/v-for",
            name: "v-for",
            component: () => import("../views/ejemplos/vFor.vue")
        },
        {
            path: "/v-if",
            name: "v-if",
            component: () => import("../views/ejemplos/vIf.vue")
        },
        {
            path: "/slots",
            name: "slots",
            component: () => import("../views/ejemplos/slotsCompPadre.vue")
        },
        {
            path: "/computed",
            name: "computed",
            component: () => import("../views/ejemplos/ComputedComponent.vue")
        },
        {
            path: "/watch",
            name: "watch",
            component: () => import("../views/ejemplos/WatchComponent.vue")
        },
        {
            path: "/watch-effect",
            name: "watch-effect",
            component: () => import("../views/ejemplos/WatchEffectComponent.vue")
        }
    ]

})

export default router;