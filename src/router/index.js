import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Barchart from '../views/BarchartView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/barchart',
    name: 'Barchart',
    component: Barchart
    /* component: () => import('../views/BarchartView.vue') Code splitting. Lazy loads component*/
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
