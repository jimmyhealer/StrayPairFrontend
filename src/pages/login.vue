<template>
  <div class="login">
    <ImageComponent :urls="require('@/assets/img/login.jpg')" />
    <div class="img-content">
      <h1>StrayPair 浪浪配配</h1>
      <h3>找尋你生命中，不一樣的另一半</h3>
    </div>
    <div class="container" v-if="!is_register_sucess">
      <LoginComponent :method="method" @update="updateMethod" @state="updateState"/>
    </div>
    <div class="container" v-else>
      <QAComponent />
    </div>
  </div>
</template>

<script>
import LoginComponent from '../components/user/LoginComponent.vue'
import ImageComponent from '../components/ImageComponent.vue'
import QAComponent from '../components/user/QAComponent.vue'

export default {
  name: 'login_card',
  components: {
    LoginComponent,
    ImageComponent,
    QAComponent
  },
  data() {
    return {
      method: 'Login',
      is_register_sucess: false,
    }
  },
  methods: {
    updateMethod(val) {
      this.method = val
    },
    updateState(val){
      this.is_register_sucess = val
    }
  }
}
</script>

<style scoped>
.login{
  display: flex;
}

.container{
  max-width: 480px;
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