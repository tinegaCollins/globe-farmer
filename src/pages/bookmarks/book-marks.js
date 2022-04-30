import { createApp } from 'vue'
import bookmarks from './book-marks.vue'
import router from '../../router'

createApp(bookmarks).use(router).mount('#app')
