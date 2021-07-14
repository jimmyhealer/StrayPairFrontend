import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
import Result from './pages/Result.vue'
import Followup from './pages/Followup.vue'

export const routes = [
  {
    path: '/login',
    component: Login,
    meta: {requiresAuth: true}
  },
  {
    path: '/result',
    component: Result,
    meta: {requiresAuth: true}
  },
  {
    path: '/followup',
    component: Followup,
    meta: {requiresAuth: true}
  },
  {
    path: '/',
    component: Home,
    alias: '/home',
    meta: {requiresAuth: true}
  }
];