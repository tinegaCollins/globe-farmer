import { createRouter, createWebHistory } from 'vue-router'
import chat from '../views/chat-home.vue'
import chattab from '../views/chats-tab.vue'


const routes = [
    {
        path: 'messages/',
        name: 'chat',
        component: chat
    },
    {
        path: 'messages/chat-id',
        name: 'tab',
        component: chattab
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router
  