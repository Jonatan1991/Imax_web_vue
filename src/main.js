import { createApp } from 'vue'
import '@fontsource/roboto'
import './assets/css/bootstrap.min.css'
import './assets/css/templatemo.css'
import './assets/css/fontawesome.min.css'
import './assets/css/custom.css'
import './style.css'
import App from './App.vue'
import router from "./router/router.js"
import { createPinia } from 'pinia'


const pinia = createPinia();


createApp(App).use(router).use(pinia).mount('#app')
