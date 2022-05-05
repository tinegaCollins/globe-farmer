import { createApp } from 'vue'
import messages from './messages-tab.vue'
import router from './router'

createApp(messages).use(router).mount('#app')

