import { createRouter, createWebHashHistory } from 'vue-router'

import info from '../views/account-info.vue'
import login from '../views/login.vue'
import signup from '../views/signup.vue'
import question from '../views/query.vue'
import user from '../views/user.vue'
import farmer from '../views/farmer.vue'
import post from '../views/post.vue'

const routes = [
    {
        path: '/',
        name: 'account-info',
        component: info
    },
    {
        path: '/post',
        name : 'post',
        component: post
    },
    {
        path: '/login/',
        name: 'login',
        component: login
    },
    {
        path: '/signup/',
        name: 'signup',
        component: signup,
        children: [
            {
                path: 'query',
                name: 'question',
                component: question
            },
            {
                path: 'user',
                name: 'user',
                component: user
            },
            {
                path: 'farmer',
                name: 'farmer',
                component: farmer
            }
        ]
    }

]



const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
  })
  
  export default router