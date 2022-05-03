import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home-views.vue'
import popularItems from '../views/popular-items.vue'
import newItems from '../views/new-items.vue'
import notFound from '../views/404-error.vue'
import messages from '../views/messagesView.vue'
import produce from '../views/produce-view.vue'



const routes = [
  {
    path : '/popular-items',
    name : 'popularItems',
    component : popularItems
  },
  {
    path : '/new-items',
    name : 'newItems',
    component : newItems
  },
  {
    path : '/',
    name : 'Home',
    component : Home
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: notFound
  },
  {
    path: '/messages',
    name: messages,
    component: messages
  },
  {
    path: '/produces/:id',
    name: 'produce',
    component: produce
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
