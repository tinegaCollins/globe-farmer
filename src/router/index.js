import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home-views.vue'
import popularItems from '../views/popular-items.vue'
import newItems from '../views/new-items.vue'
import productDetails from '../views/buying/product-details.vue'


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
    path : '/product/:det',
    name : 'productDetails',
    component: productDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
