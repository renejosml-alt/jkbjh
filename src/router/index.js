import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/', 
    name: 'Home',
    component: Home // Carga el componente Home.vue
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue') 
    // Carga diferida (lazy load)
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router