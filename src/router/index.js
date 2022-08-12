import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddList from '../views/AddList.vue'
import EditList from '../views/EditList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/addList',
    name:'AddList',
    component:AddList
  },
  {
    path: '/editList/:id',
    name: 'EditList',
    component: EditList,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
