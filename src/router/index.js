import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'


const routes = [
  {
    path: '/',
    component: home,
    name: home
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
