import { createApp } from 'vue'
import notes from './notes-tab.vue'
import router from '../../router'

createApp(notes).use(router).mount('#app')

