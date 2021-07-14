import Login from './page/Login.vue';
import Home from './page/Home.vue';

export const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Home
  }
];