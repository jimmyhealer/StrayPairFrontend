<template>
  <div>
    <!-- 
      https://picsum.photos/id/237/1920/1080
    -->
    <loginComponent></loginComponent>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import LoginComponent from '../components/user/LoginComponent'

export default {
  name: 'login_card',
  components: {
    LoginComponent
  },
  data() {
    return{
      isRegister: false,
      errorMessage: ""
    }
  },
  methods: {
    submit(map) {
      map.get('username');
      map.get('password');
    }
  }
}
</script>
