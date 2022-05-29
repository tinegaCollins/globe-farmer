import { createRouter, createWebHistory } from 'vue-router'


import Home from '../views/home-views.vue'
import popularItems from '../views/popular-items.vue'
import newItems from '../views/new-items.vue'
import notFound from '../views/404-error.vue'
import produceFilter from '../views/product-filter.vue'



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
    path: '/:type',
    name: 'filter',
    component: produceFilter
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
