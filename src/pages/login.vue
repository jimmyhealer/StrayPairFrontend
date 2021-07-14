<template>
  <div>
    <div class="d-flex align-items-center justify-content-end" style="
          background-image: url(https://picsum.photos/1920/1080);
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: center;
          height: 100vh;
        ">
      <div id="login_card" class="card" style="width: 18rem">
        <!-- login card -->
        <template v-if="!isRegister">
          <div class="card-body">
            <h5 class="card-title">Login</h5>
            <form>
              <div class="mb-3">
                <label for="inputUserName" class="form-label">User name</label>
                <input type="text" class="form-control" id="inputUserName" aria-describedby="userNameHelp">
                <!-- <div id="userNameHelp" class="form-text">your user name</div> -->
              </div>
              <div class="mb-3">
                <label for="inputPassword" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPassword">
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">remember me</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div class="card-footer text-muted">
            <div class="d-inline-flex p-2">Don't have an account?</div>
            <a href="#" class="card-link" @click="isRegister = !isRegister">register</a>
          </div>
        </template>
        <!-- register card -->
        <template v-if="isRegister">
          <div class="card-body">
            <h5 class="card-title">Register</h5>
            <form>
              <div class="mb-3">
                <label for="inputEmail" class="form-label">Email</label>
                <input type="text" class="form-control" id="inputEmail">
              </div>
              <div class="mb-3">
                <label for="inputUserName" class="form-label">User name</label>
                <input type="text" class="form-control" id="inputUserName" aria-describedby="userNameHelp">
                <!-- <div id="userNameHelp" class="form-text">your user name</div> -->
              </div>
              <div class="mb-3">
                <label for="inputPassword" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPassword">
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div class="card-footer text-muted">
            <div class="d-inline-flex p-2">Have an account?</div>
            <a href="#" class="card-link" @click="isRegister = !isRegister">Login</a>
          </div>
        </template>
      </div>
      <div style="width: 15%"></div>
    </div>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  name: 'login_card',
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
