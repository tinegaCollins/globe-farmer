import { createApp } from 'vue'
import logins from './logins-page.vue'
import router from './router'

createApp(logins).use(router).mount('#app')
