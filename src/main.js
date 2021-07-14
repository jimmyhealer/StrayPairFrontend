import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => {
    return record.meta.requiresAuth;
  })) {
    const isLogin = store.state.session === 'ok'
    console.log(store.state.session)
    if (isLogin) {
      next();
    }
    else {
      if (to.path !== '/login')
        next('/login')
      else
        next()
    }
  }
  else{
    next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
