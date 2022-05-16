import { createRouter, createWebHashHistory } from 'vue-router'
import chat from '../views/chat-home.vue'
import chattab from '../views/chats-tab.vue'


const routes = [
    {
        path: '/',
        name: 'chat',
        component: chat
    },
    {
        path: '/:id',
        name: 'tab',
        component: chattab
    }
]


const router = createRouter({
    history: createWebHashHistory('/messages/messages.html'),
    routes
  })
  
  export default router
  