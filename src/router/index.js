import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Product',
    name: 'Product',
   
    component: () => import('../views/Product.vue')
  },
  {
    path: '/Catalog',
    name: 'Catalog',
   
    component: () => import('../views/Catalog.vue')
  },
  {
    path: '/Card',
    name: 'Card',
   
    component: () => import('../views/Card.vue')
  },
  {
    path: '/Registration',
    name: 'Registration',
   
    component: () => import('../views/Registration.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
