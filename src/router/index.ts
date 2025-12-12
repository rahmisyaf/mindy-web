import { createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'

import Home from '../pages/Home.vue'
import MoodActivity from '../pages/MoodActivity.vue'
import Journal from '../pages/Journal.vue'
import Education from '../pages/Education.vue'
import ArticleDetail from '../pages/ArticleDetail.vue'
import About from '../pages/About.vue'
import AboutMe from '../pages/AboutMe.vue'

const routes: Array<RouteRecordRaw> = [
  {path: '/', name: 'Home', component: Home},
  {path: '/mood-activity', name: 'MoodActivity', component: MoodActivity},
  {path: '/journal', name: 'Journal', component: Journal},
  {path: '/education', name: 'Education', component: Education},
  { path: '/education/:id', name: 'ArticleDetail', component: ArticleDetail },
  {path: '/about', name: 'About', component: About},
  {path: '/about-me', name: 'AboutMe', component:AboutMe}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router