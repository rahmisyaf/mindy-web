import { createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'

import Home from '../pages/Home.vue'
import MoodActivity from '../pages/MoodActivity.vue'
import Journal from '../pages/Journal.vue'
import Education from '../pages/Education.vue'
import About from '../pages/About.vue'

const routes: Array<RouteRecordRaw> = [
  {path: '/', name: 'Home', component: Home},
  {path: '/mood-activity', name: 'MoodActivity', component: MoodActivity},
  {path: '/journal', name: 'Journal', component: Journal},
  {path: '/education', name: 'Education', component: Education},
  {path: '/about', name: 'About', component: About}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router