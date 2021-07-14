<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand :to="'home'">StrayPair</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="'home'">配對</b-nav-item>
        <b-nav-item :to="'result'">結果</b-nav-item>
        <b-nav-item :to="'followup'">回報</b-nav-item>
      </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <!-- <p>{{$state.getUserName}}</p> -->
              Name
            </template>
            <!-- <b-dropdown-item href="#">Profile</b-dropdown-item> -->
            <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout(){
      this.$store.dispatch('actionLogout').
      then(() => {
        this.$router.push('/login')
      })
    }
  },
}
</script>

<style>
.navbar{
  font-size: 1.5em;
}
</style>