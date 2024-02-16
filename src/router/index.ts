import { createRouter, createWebHistory } from 'vue-router'
import Page2 from '../pages/Page2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/page1',
      name: 'Page1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/Page1.vue')
    }
  ]
})

export default router
