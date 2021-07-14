<template>
  <div>
    <div class="card" style="width: 30rem">
      <div class="card-body">
        <h5 class="card-title">Login</h5>
        <form>
          <div class="mb-3">
            <label for="inputUserName" class="form-label">User name</label>
            <input type="text" class="form-control" id="inputUserName" aria-describedby="userNameHelp">
            <div id="userNameHelp" class="form-text">your user name</div>
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
        <a href="#" class="card-link">register</a>
      </div>
    </div>
    <div style="width: 15%"></div>
  </div>
</template>
