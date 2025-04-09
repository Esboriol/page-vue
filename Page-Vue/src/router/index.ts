import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameDetails from '../views/GameDetails.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/game/:id', component: GameDetails, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
