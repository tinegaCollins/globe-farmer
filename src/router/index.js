import { createRouter, createWebHistory } from 'vue-router'


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
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
  export default router