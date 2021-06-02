import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { authGuard } from '@/auth/authGuard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home', // 随便取name
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: 'my-message',
    component: () => import('../views/Profile'),
    beforeEnter: authGuard
  },
  {
    path: '/event/:id',
    name: 'eventSingle',
    component: () => import('../views/EventSingle.vue'),
    beforeEnter: authGuard
  }
]

const router = new VueRouter({
  routes
})

export default router
