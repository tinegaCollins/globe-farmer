import { createRouter, createWebHashHistory } from 'vue-router'
import product from '../produce-view.vue'


const routes = [
    {
        path: '/:id',
        name: 'product',
        component: product
    }
]


const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
  })
  
  export default router
  