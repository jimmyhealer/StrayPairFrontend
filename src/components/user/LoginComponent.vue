<template>
  <div class="login-container">
    <b-card tag="article" style="width: 420px;" class="card mb-2">
      <b-card-title>{{title}}</b-card-title>
      <b-form @submit="onSubmit">
        <b-form-group id="input-group-1" label="Username:" label-for="input-1">
          <b-form-input id="input-1" v-model="form.username" type="text" placeholder="輸入帳號" required>
          </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="Email:" label-for="input-3" v-if="isRegister">
          <b-form-input id="input-3" v-model="form.Email" type="email" placeholder="輸入信箱" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.password" type="password" placeholder="輸入密碼" required></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">{{UpButton}}</b-button>
      </b-form>
      <b-button class="register" @click="changeState" variant="outline-primary">{{downButton}}</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  props: {
    method: String
  },
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      title: 'Login',
      UpButton: '',
      downButton: '',
      isRegister: false
    }
  },
  mounted() {
    this.isRegister = this.method === 'Register'
    if (!this.isRegister) {
      this.title = 'Login'
      this.UpButton = '登入'
      this.downButton = '建立帳號'
    }
    else {
      this.title = 'Register'
      this.UpButton = '註冊'
      this.downButton = '使用帳號登入'
      this.isRegister = true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      if (this.method === 'Login') {        
        this.$store.dispatch('actionLogin', {
          username: this.form.username,
          password: this.form.password
        }).
          then(() => {            
            this.$router.push('/')
          })
          .catch(() => {
            console.log('error')
          })        
      }
      else {
        this.$emit('state', true)
      }
    },
    changeState() {
      if (this.isRegister) {
        this.title = 'Login'
        this.UpButton = '登入'
        this.downButton = '建立帳號'
        this.isRegister = false
      }
      else {
        this.title = 'Register'
        this.UpButton = '註冊'
        this.downButton = '使用帳號登入'
        this.isRegister = true
      }
      this.$emit('update', this.title)
    }
  }
}
</script>

<style scoped>
.login-container{
  width: 420px;
  margin: auto;
}
.card-title {
  font-size: 32px;
  font-weight: 600;
  margin: 60px 0 25px;
}

.form-group {
  margin: 20px 10px 20px;
}

.card {
  box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 3px;
  border-radius: 12px;
}

button {
  width: 100%;
  margin: 20px 0 5px;
}

.register {
  margin: 40px 0 5px;
}
</style>