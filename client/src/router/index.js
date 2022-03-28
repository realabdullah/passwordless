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

router.beforeEach(async (to, from, next) => {
  if(to.query.session_token) {
    localStorage.setItem('session_token', to.query.session_token)
    router.replace({ 'query': null })
  }

  const token = localStorage.getItem('session_token') || null

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (token) {
      //next()//
    } 
    else {
      next('/login')
      return
    }
  }
  else if (to.matched.some(record => record.name === 'login')) {
    if (token) {
      next('/')
      return
    }
  }

  next()
})

export default router