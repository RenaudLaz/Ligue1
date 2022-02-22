import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Club from '../views/Club.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Club',
        name: 'Club',
        component: Club,  
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router