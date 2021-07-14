<template>
  <div class="login-container">
    <b-card tag="article" class="card mb-2">
      <h1>QA</h1>
      <b-form @submit="onSubmit">
        <b-tabs v-model="tabIndex" small card>
          <b-tab title="1">
            <b-form-group
              label="下列何者不能給狗狗食用?"
              v-slot="{ ariaDescribedby }"
            >
              <b-form-radio
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="A"
                >骨頭</b-form-radio
              >
              <b-form-radio
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="B"
                >熟雞蛋</b-form-radio
              >
              <b-form-radio
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="骨頭"
                >南瓜</b-form-radio
              >
              <b-form-radio
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="熟雞蛋"
                >西瓜</b-form-radio
              >
            </b-form-group>
          </b-tab>
          <b-tab title="2">I'm the first fading tab</b-tab>
          <b-tab title="2">I'm the first fading tab</b-tab>
          <b-tab title="2">I'm the first fading tab</b-tab>
          <b-tab title="2">I'm the first fading tab</b-tab>
          <b-tab title="2">I'm the first fading tab</b-tab>
          <b-tab title="2">I'm the first fading tab</b-tab>
          <b-tab title="2">I'm the first fading tab</b-tab>
          <b-tab title="2">I'm the first fading tab</b-tab>
          <b-tab title="10">I'm the first fading tab</b-tab>
        </b-tabs>
        <b-button type="submit" variant="primary">{{ UpButton }}</b-button>
      </b-form>
      <!-- <b-button class="register" @click="changeState" variant="outline-primary"
        >{{ downButton }}</b-button
      > -->
    </b-card>
  </div>
</template>

<script>
export default {
  name: "QAComponent",
  props: {
    // method: String
  },
  data() {
    return {
      form: {
        answer: [],
      },
      title: "QA",
      tabIndex: 0,
      UpButton: "下一題",
    };
  },
  mounted() {
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      if(this.tabIndex < 9){
        this.tabIndex++;
      }
      if(this.tabIndex === 9){
        this.UpButton = "送出"
      }
    },
    changeState() {
      if (this.isRegister) {
        this.title = "Login";
        this.UpButton = "登入";
        this.downButton = "建立帳號";
        this.isRegister = false;
      } else {
        this.title = "Register";
        this.UpButton = "註冊";
        this.downButton = "使用帳號登入";
        this.isRegister = true;
      }
      this.$emit("update", this.title);
    },
  },
};
</script>

<style scoped>
.login-container {
  width: 420px;
  margin: auto;
}

.card{
  width: 420px;
  height: 480px;  
}

.tabs{
  height: 320px;
}

.tabs >>> .nav-link{
  padding: .5rem .8rem;
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