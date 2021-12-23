import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Curriculum from '../views/Curriculum.vue'
import Contacts from '../views/Contacts.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/curriculum',
    name: 'Curriculum',
    component: Curriculum
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
