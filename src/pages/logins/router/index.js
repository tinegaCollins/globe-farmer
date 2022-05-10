import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login-view.vue'
import signup from '../views/signup-view.vue'

const routes = [
  {
    path : '/logins/',
    name : 'login',
    component : login
  },
  {
    path : '/logins/signup',
    name: 'signup',
    component : signup,
    children : [
      {
        path : '/logins/signup/user',
        name : 'user',
        component : () => import('../views/user-view.vue')
      },
      {
        path : '/logins/signup/farmer',
        name : 'farmer',
        component : () => import('../views/farmer-view.vue')
      }
    ]
  }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router