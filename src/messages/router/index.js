import { createRouter, createWebHashHistory } from 'vue-router'
import chats from '../views/chats.vue'
import messages from '../views/messages.vue'


const routes = [

  {
    path: '/',
    component: chats,
    name: 'chats'
  },

  {
    path: '/messages/:id1/:id2',
    component: messages,
    name : 'messages'
  }
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
  })
  
  export default router