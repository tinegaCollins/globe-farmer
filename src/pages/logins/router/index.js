import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login-view.vue'
import signup from '../views/signup-view.vue'

const routes = [
  {
    path : '/',
    name : 'login',
    component : login
  },
  {
    path : '/signup',
    name: 'signup',
    component : signup
  }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router