<template>
  <div id="app">
    <template v-if="isLogin">
      <Navbar />
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data(){
    return{
      isLogin: true,
      that: null
    }
  },
  computed: {
    ...mapGetters({ session: 'getSession'})
  },
  mounted() {
    this.isLogin = this.session === 'ok'
  },
  watch: {
    session: function (val) {
      console.log(val)
      this.isLogin = val === 'ok'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
