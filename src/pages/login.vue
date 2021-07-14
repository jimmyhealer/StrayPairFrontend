<template>
  <div class="login">
    <ImageComponent :urls="require('@/assets/img/login.jpg')" />
    <div class="img-content">
      <h1>StrayPair 浪浪配配</h1>
      <h3>找尋你生命中，不一樣的另一半</h3>
    </div>
    <div class="container">
      <LoginComponent method="Login" />
    </div>
  </div>
</template>

<script>
import LoginComponent from '../components/user/LoginComponent.vue'
import ImageComponent from '../components/ImageComponent.vue'

export default {
  name: 'login_card',
  components: {
    LoginComponent,
    ImageComponent
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.login{
  display: flex;
}

.container{
  max-width: 320px;
  margin: auto;
}

.img-content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-100%, -50%);

  color: azure;
}

.img-content h1{
  font-size: 72px;
}
</style>