import { createApp } from 'vue'
import notifications from './notifications-tab.vue'
import router from '../router'

createApp(notifications).use(router).mount('#app')
