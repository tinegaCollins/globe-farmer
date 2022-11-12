import { createApp } from 'vue'
import { createHead } from "@vueuse/head"
import { createPinia } from 'pinia'
import Notifications from '@kyvg/vue3-notification';
import router from "./router";
import App from './App.vue'

// import '@/index.css'
const head = createHead()
import './style.css'

const pinia = createPinia()
const app = createApp(App);
app.use(head);
app.use(Notifications);
app.use(router);
app.use(pinia);
app.mount('#app')
