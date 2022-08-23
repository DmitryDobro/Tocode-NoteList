import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()
import Home from "@/components/pages/HomePage.vue"
import About from "@/components/pages/AboutPage.vue"

const routes = [
  {
    path:'/',
    name:"home",
    component:Home
  },
  {
    path:'/about',
    name:"about",
    component:About
  },
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
