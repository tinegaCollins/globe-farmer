import { createRouter, createWebHashHistory } from 'vue-router'
import chats from '../views/chats.vue'


const routes = [

  {
    path: '/',
    component: chats,
    name: 'chats'
  }

]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
  })
  
  export default router