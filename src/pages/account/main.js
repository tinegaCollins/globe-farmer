import { createApp } from 'vue'
import account from './account-home.vue'
import router from './router'


createApp(account).use(router).mount('#app')