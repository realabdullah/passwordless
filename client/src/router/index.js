import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import vm from '../main'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'home',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router