import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsView from '../views/DetailsView.vue'
import CreateView from '../views/CreateView.vue'
import TagView from '../views/TagView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'details',
    component: DetailsView,
    props: true
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView,
    props: true
  },
  {
    path: '/tags/:tag',
    name: 'tag',
    component: TagView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
