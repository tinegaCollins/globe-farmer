import { createApp } from 'vue'
import messages from './messages-tab.vue'
import router from './router'
import store from '../../store'

createApp(messages).use(router).use(store).mount('#app')

