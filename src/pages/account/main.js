import { createApp } from 'vue'
import account from './account-home.vue'
// import router from './router'
import store from '../../store';



createApp(account).use(store).mount('#app')