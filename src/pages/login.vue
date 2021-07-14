<template>
  <div class="login">
    <ImageComponent :urls="require('@/assets/img/login.jpg')">
    </ImageComponent>
    <div class="img-content">
      <h1>StrayPair 浪浪配配</h1>
      <h3>領養代替購買，浪浪愛您們</h3>
    </div>
    <div class="container">
      <LoginComponent method="Login"></LoginComponent>
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