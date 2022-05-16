import { createRouter, createWebHashHistory } from 'vue-router'
import login from '../views/login-view.vue'
import signup from '../views/signup-view.vue'
import post from '../views/post-ad.vue'

const routes = [
  {
    path : '/',
    name : 'login',
    component : login
  },
  {
    path : '/signup',
    name: 'signup',
    component : signup,
    children : [
      {
        path : '/signup/user',
        name : 'user',
        component : () => import('../views/user-view.vue')
      },
      {
        path : '/signup/farmer',
        name : 'farmer',
        component : () => import('../views/farmer-view.vue')
      }
    ]
  },
  {
    path : '/logins/post',
    name: 'post',
    component: post
  }
]

const router = createRouter({
    history: createWebHashHistory('/logins/logins.html'),
    routes
  })
  
  export default router