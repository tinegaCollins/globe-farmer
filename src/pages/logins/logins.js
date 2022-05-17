import { createApp } from 'vue'
import logins from './logins-page.vue'
import router from './router'
import store from '../../store';

createApp(logins).use(router).use(store).mount('#app')
