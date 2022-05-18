import { createApp } from 'vue'
import post from './post.vue'
import store from '../../store';


createApp(post).use(store).mount('#app')

