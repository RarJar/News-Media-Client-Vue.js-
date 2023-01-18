import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/LoginView',
    name: 'LoginView',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/SignUpView',
    name: 'SignUpView',
    component: () => import('../views/SignUpView.vue')
  },
  {
    path: '/EditProfileView',
    name: 'EditProfileView',
    component: () => import('../views/EditProfile_View.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/postDetails/:postId',
    name: 'postDetails',
    component: () => import('../views/PostDetailsView.vue')
  },
  {
    path: '/ContactView',
    name: 'ContactView',
    component: () => import('../views/ContactView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
