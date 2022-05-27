import { createRouter, createWebHistory } from 'vue-router'

import info from '../views/account-info.vue'

const routes = [
    {
        path: '/account.html/',
        name: 'account-info',
        component: info
    }

]



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
  export default router