import Login from './pages/Login.vue';
import Home from './pages/Home.vue';

export const routes = [
  {
    path: '/login',
    component: Login,
    meta: {requiresAuth: true}
  },
  {
    path: '/',
    component: Home,
    meta: {requiresAuth: true}
  }
];