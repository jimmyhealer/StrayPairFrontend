<template>
  <div>
    <h1>home</h1>
    <b-button variant="danger" @click="logout">Button</b-button>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    methods: {
      logout(){
        this.$store.dispatch('actionLogout').
        then(() => {
          this.$router.push('/login')
        })
      }
    }
  }
</script>