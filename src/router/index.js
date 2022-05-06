import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home-views.vue'
import popularItems from '../views/popular-items.vue'
import newItems from '../views/new-items.vue'
import notFound from '../views/404-error.vue'
import produce from '../views/produce-view.vue'
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
    path: '/produces/:id',
    name: 'produce',
    component: produce
  },
  {
    path: '/:type',
    name: 'filter',
    component: produceFilter
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
